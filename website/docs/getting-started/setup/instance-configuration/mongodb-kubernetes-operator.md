---
description: Install and configure Appsmith with the MongoDB Kubernetes Operator, or migrate from the Bitnami MongoDB subchart.
toc_max_heading_level: 3
---

# MongoDB Kubernetes Operator

*Available since chart version 3.7.0*

The MongoDB Kubernetes Operator is the recommended way to run MongoDB for new Appsmith installations. It replaces the legacy Bitnami MongoDB subchart with an operator-managed replica set backed by the official [MongoDB Kubernetes Operator](https://github.com/mongodb/mongodb-kubernetes).

## Why use the operator

- **Actively maintained**—the Bitnami MongoDB images have been deprecated by their publisher. The operator uses official MongoDB images with ongoing support.
- **Operator-managed lifecycle**—a dedicated controller handles replica set membership, SCRAM credential lifecycle, and version upgrades.
- **Automatic connection wiring**—the operator creates and maintains the connection-string Secret that Appsmith consumes. No manual URL assembly required.

## How the chart integrates the operator

When `mongodbCommunity.enabled: true`, the chart:

- Renders a `MongoDBCommunity` custom resource that the operator reconciles into a replica set
- Runs an idempotent pre-install Job that generates a random password and stores it in a Kubernetes Secret (unless you supply your own)
- Wires the Appsmith workload to read MongoDB's connection string from the operator-managed Secret

When `mongodbOperator.enabled: true` (recommended), the chart also pulls the upstream `mongodb-kubernetes` chart as a subchart, installing the operator pod and required CRDs in the same namespace.

## Fresh installation

The MongoDB Operator is the recommended MongoDB configuration for new Appsmith installations. The [Kubernetes installation guide](/getting-started/setup/installation-guides/kubernetes) includes the operator in its default `values.yaml`—follow that guide to get started.

## Configuration

### Password management

When `mongodbCommunity.auth.passwordSecretName` is empty (the default), the chart's pre-install Job generates a random password. To manage passwords yourself, create a Secret with a `password` key and reference it:

```bash
kubectl create secret generic my-mongodb-secret \
  -n appsmith-ee \
  --from-literal=password='your-password'
```

```yaml
mongodbCommunity:
  auth:
    passwordSecretName: my-mongodb-secret
```

The chart skips the pre-install Job when a Secret name is provided.

To retrieve the auto-generated password:

```bash
kubectl get secret appsmith-ee-mongo-password -n appsmith-ee \
  -o jsonpath='{.data.password}' | base64 -d
```

### Production sizing

The defaults are tuned for evaluation—a single-member replica set with modest storage. For production, scale to three members and pin resources:

```yaml
mongodbCommunity:
  enabled: true
  members: 3
  persistent:
    storageSize: 100Gi
    storageClass: gp3
  resources:
    requests:
      cpu: 500m
      memory: 2Gi
    limits:
      memory: 4Gi
```

Scaling from 1 to 3 members after the initial install is a value change on upgrade—the operator handles adding members to the replica set without downtime.

### Namespace scope

Setting `mongodbOperator.enabled: true` installs the operator in the same namespace as Appsmith. If you intend to manage the operator separately (for example, a cluster-wide install), leave this `false` and ensure the operator has RBAC access to your Appsmith deployment's namespace.


## Migrate from Bitnami subchart

If you have an existing Appsmith install using the Bitnami MongoDB subchart, follow this procedure to move to the MongoDB Operator. The migration exports your data from the Bitnami-managed MongoDB and imports it into the operator-managed instance.

:::caution
Test this procedure on a non-production cluster first. The migration requires downtime while Appsmith is scaled down, data is exported and imported, and the deployment is reconfigured.

Before starting, [back up your Appsmith instance](/getting-started/setup/instance-management/backup-and-restore/backup-instance?current-command-type=kubernetes-commands) so you can restore if anything goes wrong.
:::

### Overview

The migration follows an expand-move-contract pattern. First, deploy the MongoDB Operator alongside your existing Bitnami instance so both are running. Then scale down Appsmith to stop writes, export data from Bitnami, and import it into the operator-managed MongoDB. Finally, reconfigure the release to use the new MongoDB and remove the old Bitnami resources.

1. Deploy the MongoDB Operator alongside the existing Bitnami instance
2. Scale down Appsmith to stop writes
3. Export and import data from Bitnami to the operator-managed MongoDB
4. Switch Appsmith to the new MongoDB and verify
5. Clean up the Bitnami MongoDB resources

### Step 1: Deploy the MongoDB Operator

Upgrade the release to enable the MongoDB Operator alongside the existing Bitnami instance. Both MongoDB deployments will run side by side:

```bash
helm upgrade appsmith-ee appsmith-ee/appsmith -n appsmith-ee --wait --timeout 10m \
  --reuse-values \
  --set mongodbCommunity.enabled=true \
  --set mongodbOperator.enabled=true
```

Wait for the operator-managed MongoDB to reach a `Running` phase before proceeding:

```bash
kubectl get mongodbcommunity -n appsmith-ee -w
```

Do not continue until the `PHASE` column shows `Running`.

### Step 2: Scale down Appsmith

Once the operator-managed MongoDB is running, stop the Appsmith workload to prevent writes during the data migration.

**StatefulSet (default single-replica install):**

```bash
kubectl scale statefulset appsmith-ee -n appsmith-ee --replicas=0
```

**Deployment (HA install with autoscaling):**

First set the HPA minimum to zero, then scale the Deployment:

```bash
kubectl patch hpa appsmith-ee -n appsmith-ee --patch '{"spec":{"minReplicas":0}}'
kubectl scale deployment appsmith-ee -n appsmith-ee --replicas=0
```

Wait for all Appsmith pods to terminate before proceeding:

```bash
kubectl get pods -n appsmith-ee -l app.kubernetes.io/name=appsmith
```

The command should return no resources.

### Step 3: Export and import data

Retrieve both connection strings—the existing Bitnami URI from the ConfigMap and the operator-managed URI from its Secret:

```bash
SOURCE_URI=$(kubectl get cm appsmith-ee -n appsmith-ee -o jsonpath='{.data.APPSMITH_DB_URL}')

DEST_URI=$(kubectl get secret appsmith-ee-mongo-appsmith-appsmith -n appsmith-ee \
  -o jsonpath='{.data.connectionString\.standardSrv}' | base64 -d)
```

Dump from Bitnami and restore into the operator-managed instance. The Bitnami image does not include `mongodump`/`mongorestore`, so both commands run from the operator pod's `mongod` container:

```bash
# Dump from Bitnami MongoDB
kubectl exec -n appsmith-ee appsmith-ee-mongo-0 -c mongod -- \
  mongodump --uri="$SOURCE_URI" \
  --archive=/tmp/appsmith-dump.gz --gzip

# Restore into the operator-managed MongoDB
kubectl exec -n appsmith-ee appsmith-ee-mongo-0 -c mongod -- \
  mongorestore --uri="$DEST_URI" \
  --archive=/tmp/appsmith-dump.gz --gzip --drop
```

### Step 4: Switch Appsmith to the new MongoDB

Upgrade the release to disable the Bitnami subchart. This points Appsmith at the operator-managed MongoDB and removes the old Bitnami deployment. Helm will scale Appsmith back to its configured replica count:

```bash
helm upgrade appsmith-ee appsmith-ee/appsmith -n appsmith-ee --wait --timeout 10m \
  --reuse-values \
  --set mongodb.enabled=false
```

Verify Appsmith starts successfully and you can log in with existing credentials. Check the logs for any database connection errors:

```bash
kubectl logs -n appsmith-ee appsmith-ee-0 --tail=50
```

### Step 5: Clean up

Once you've verified the migration is successful, remove the old Bitnami MongoDB PVCs:

```bash
# List PVCs from the old Bitnami MongoDB
kubectl get pvc -n appsmith-ee -l app.kubernetes.io/name=mongodb

# Delete them after confirming the new MongoDB is working
kubectl delete pvc -n appsmith-ee -l app.kubernetes.io/name=mongodb
```

## Uninstall

Delete the `MongoDBCommunity` resource first so the operator can process its finalizer, then uninstall the release:

```bash
# 1. Delete the CR and wait for the operator to clear its finalizer
kubectl delete mongodbcommunity -n appsmith-ee --all --wait=true

# 2. Uninstall Appsmith (and the bundled operator)
helm uninstall appsmith-ee -n appsmith-ee

# 3. Remove the namespace
kubectl delete namespace appsmith-ee
```

:::caution
Skipping step 1 can leave the `MongoDBCommunity` resource stuck with an unresolved finalizer, which blocks namespace deletion. If that happens, clear it manually:

```bash
kubectl patch mongodbcommunity -n appsmith-ee <name> \
  --type=merge -p '{"metadata":{"finalizers":[]}}'
```
:::

The MongoDB CRDs installed by the subchart persist after uninstall (Helm never removes resources from `crds/`). To fully clean up:

```bash
kubectl delete crd mongodbcommunity.mongodbcommunity.mongodb.com
kubectl delete crd mongodb.mongodb.com
kubectl delete crd mongodbusers.mongodb.com
```

:::caution
Deleting these CRDs removes all matching resources across the cluster—only do this if nothing else relies on the operator.
:::

## Troubleshooting

### `MongoDBCommunity` CR stays in `Pending` phase

Check the operator logs:

```bash
kubectl logs -n appsmith-ee -l app.kubernetes.io/name=mongodb-kubernetes-operator --tail=50
```

Common causes: the password Secret doesn't exist (if you set `passwordSecretName`, verify the Secret is present with a `password` key), or the MongoDB image can't be pulled.

### Appsmith pod stuck in `Init`

The init container waits for MongoDB to be reachable. Check MongoDB status first (`kubectl get mongodbcommunity -n appsmith-ee`), then inspect the init container logs:

```bash
kubectl logs -n appsmith-ee appsmith-ee-0 -c mongo-init-container
```

### Password init Job fails with `ImagePullBackOff`

The cluster can't pull `docker.io/alpine/kubectl`. Override the image to use your own registry:

```yaml
mongodbCommunity:
  passwordInit:
    image:
      registry: my-registry.example.com
      repository: my/kubectl
      tag: "1.34.2"
```

## See also

- [Helm Chart](/getting-started/setup/instance-configuration/helm-chart)—Deployment planning and chart feature overview.
- [Kubernetes Installation Guide](/getting-started/setup/installation-guides/kubernetes)—Step-by-step install for Appsmith on Kubernetes.
