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

### Prerequisites

- Kubernetes 1.28+
- Helm 3.14+
- A `StorageClass` available for MongoDB PVCs (uses the cluster default unless overridden via `mongodbCommunity.persistent.storageClass`)

### Install

```bash
helm repo add appsmith https://helm.appsmith.com
helm repo update

kubectl create namespace appsmith

helm install appsmith appsmith/appsmith -n appsmith --wait --timeout 10m \
  --set mongodb.enabled=false \
  --set mongodbCommunity.enabled=true \
  --set mongodbOperator.enabled=true
```

| Flag | Purpose |
|---|---|
| `mongodb.enabled=false` | Disables the legacy Bitnami MongoDB subchart |
| `mongodbCommunity.enabled=true` | Deploys a `MongoDBCommunity` CR for the operator to reconcile |
| `mongodbOperator.enabled=true` | Installs the MongoDB Kubernetes Operator in the same namespace |

### Verify

```bash
kubectl get pods -n appsmith
kubectl get mongodbcommunity -n appsmith
```

You should see the operator pod, MongoDB pod(s), and the `MongoDBCommunity` resource in a `Running` phase.

### Access the UI

```bash
kubectl port-forward -n appsmith svc/appsmith 8080:80
```

Open http://localhost:8080. For production access, configure an Ingress—see [Expose Appsmith](/getting-started/setup/installation-guides/kubernetes/publish-appsmith-online).

## Configuration

### Password management

When `mongodbCommunity.auth.passwordSecretName` is empty (the default), the chart's pre-install Job generates a random password. To manage passwords yourself, create a Secret with a `password` key and reference it:

```bash
kubectl create secret generic my-mongodb-secret \
  -n appsmith \
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
kubectl get secret appsmith-mongo-password -n appsmith \
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

Setting `mongodbOperator.enabled: true` installs the operator in the same namespace as Appsmith. If you manage the operator separately (for example, a cluster-wide install), leave this `false` and ensure the operator has RBAC access to the release namespace.

### Deploying with ArgoCD

The bundled operator path works with ArgoCD because the CRDs live in the upstream chart's `crds/` directory—Helm and ArgoCD install them before any templates are validated.

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: appsmith
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://helm.appsmith.com
    chart: appsmith
    targetRevision: "<chart-version>"
    helm:
      valuesObject:
        mongodb:
          enabled: false
        mongodbCommunity:
          enabled: true
        mongodbOperator:
          enabled: true
  destination:
    server: https://kubernetes.default.svc
    namespace: appsmith
  syncPolicy:
    automated: {}
    syncOptions:
      - CreateNamespace=true
```

## Uninstall

Delete the `MongoDBCommunity` resource first so the operator can process its finalizer, then uninstall the release:

```bash
# 1. Delete the CR and wait for the operator to clear its finalizer
kubectl delete mongodbcommunity -n appsmith --all --wait=true

# 2. Uninstall Appsmith (and the bundled operator)
helm uninstall appsmith -n appsmith

# 3. Remove the namespace
kubectl delete namespace appsmith
```

:::caution
Skipping step 1 can leave the `MongoDBCommunity` resource stuck with an unresolved finalizer, which blocks namespace deletion. If that happens, clear it manually:

```bash
kubectl patch mongodbcommunity -n appsmith <name> \
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

## Migrate from Bitnami subchart

If you have an existing Appsmith install using the Bitnami MongoDB subchart, follow this procedure to move to the MongoDB Operator. The migration exports your data from the Bitnami-managed MongoDB and imports it into the operator-managed instance.

:::caution
Test this procedure on a non-production cluster first. The migration involves a brief downtime window while Appsmith is restarted with the new MongoDB connection.
:::

### Overview

1. Scale down Appsmith to stop writes
2. Export data from the Bitnami MongoDB
3. Deploy the MongoDB Operator alongside the existing release
4. Import data into the operator-managed MongoDB
5. Switch Appsmith to the new MongoDB and verify
6. Clean up the Bitnami MongoDB resources

### Step 1: Scale down Appsmith

Stop the Appsmith workload to prevent writes during the migration:

```bash
kubectl scale statefulset appsmith -n appsmith --replicas=0
```

Wait for all Appsmith pods to terminate before proceeding.

### Step 2: Export data from Bitnami MongoDB

Identify the Bitnami MongoDB pod and run `mongodump`:

```bash
# Find the primary MongoDB pod
kubectl get pods -n appsmith -l app.kubernetes.io/name=mongodb

# Run mongodump inside the pod
kubectl exec -n appsmith appsmith-mongodb-0 -- \
  mongodump --uri="mongodb://root:password@localhost:27017" \
  --archive=/tmp/appsmith-dump.gz --gzip

# Copy the dump to your local machine
kubectl cp appsmith/appsmith-mongodb-0:/tmp/appsmith-dump.gz ./appsmith-dump.gz
```

:::tip
If your Bitnami MongoDB uses a non-default root password, retrieve it from the existing Secret:

```bash
kubectl get secret appsmith-mongodb -n appsmith \
  -o jsonpath='{.data.mongodb-root-password}' | base64 -d
```
:::

### Step 3: Deploy the MongoDB Operator

Upgrade the release to enable the MongoDB Operator alongside the existing Bitnami instance. Appsmith remains scaled to zero during this step:

```bash
helm upgrade appsmith appsmith/appsmith -n appsmith --wait --timeout 10m \
  --reuse-values \
  --set mongodbCommunity.enabled=true \
  --set mongodbOperator.enabled=true
```

Wait for the operator-managed MongoDB to reach a `Running` phase:

```bash
kubectl get mongodbcommunity -n appsmith -w
```

### Step 4: Import data into operator-managed MongoDB

Retrieve the operator-managed MongoDB password:

```bash
MONGO_PASS=$(kubectl get secret appsmith-mongo-password -n appsmith \
  -o jsonpath='{.data.password}' | base64 -d)
```

Copy the dump file into the new MongoDB pod and restore:

```bash
# Copy dump to the operator-managed pod
kubectl cp ./appsmith-dump.gz appsmith/appsmith-mongo-0:/tmp/appsmith-dump.gz

# Restore into the new instance
kubectl exec -n appsmith appsmith-mongo-0 -- \
  mongorestore --uri="mongodb://appsmith:${MONGO_PASS}@localhost:27017/appsmith?authSource=appsmith" \
  --archive=/tmp/appsmith-dump.gz --gzip --drop
```

### Step 5: Switch Appsmith to the new MongoDB

Upgrade the release to disable the Bitnami subchart. Helm will scale Appsmith back to its configured replica count:

```bash
helm upgrade appsmith appsmith/appsmith -n appsmith --wait --timeout 10m \
  --reuse-values \
  --set mongodb.enabled=false
```

Verify Appsmith starts successfully and you can log in with existing credentials. Check the logs for any database connection errors:

```bash
kubectl logs -n appsmith appsmith-0 --tail=50
```

### Step 6: Clean up

Once you've verified the migration is successful, remove the old Bitnami MongoDB PVCs:

```bash
# List PVCs from the old Bitnami MongoDB
kubectl get pvc -n appsmith -l app.kubernetes.io/name=mongodb

# Delete them after confirming the new MongoDB is working
kubectl delete pvc -n appsmith -l app.kubernetes.io/name=mongodb
```

## Troubleshooting

### `MongoDBCommunity` CR stays in `Pending` phase

Check the operator logs:

```bash
kubectl logs -n appsmith -l app.kubernetes.io/name=mongodb-kubernetes-operator --tail=50
```

Common causes: the password Secret doesn't exist (if you set `passwordSecretName`, verify the Secret is present with a `password` key), or the MongoDB image can't be pulled.

### Appsmith pod stuck in `Init`

The init container waits for MongoDB to be reachable. Check MongoDB status first (`kubectl get mongodbcommunity -n appsmith`), then inspect the init container logs:

```bash
kubectl logs -n appsmith appsmith-0 -c mongo-init-container
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
