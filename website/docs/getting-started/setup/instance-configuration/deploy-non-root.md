# Deploy Appsmith as a Non-Root User on Kubernetes

This page shows you how to deploy Appsmith as a non-root user on a Kubernetes cluster. Running containers as non-root enhances security and is often required by organizational or platform policies. This setup works on clusters like KIND, Minikube, EKS, or GKE. It does not cover Docker-based deployments.

## Prerequisites

- A running Kubernetes cluster (KIND, Minikube, or any cloud-based Kubernetes provider)
- `kubectl` and `helm` installed and configured
- Access to Docker Hub or a compatible container registry
- (Optional) [External PostgreSQL](/getting-started/setup/instance-configuration/external-postgresql-rds) and [Redis](/getting-started/setup/instance-configuration/external-redis) instances, if you prefer not to use Helm-managed services

## Configure Pull Secret and Helm Values

Set up the image pull secret and define Helm chart values to deploy Appsmith securely as a non-root user.


1. Create a DockerHub image pull secret to access the Appsmith image:

<dd>

```bash
kubectl create secret docker-registry dockerhub \
  --docker-username=<your-username> \
  --docker-password=<your-password> \
  --docker-email=<your-email>
```

</dd>

2. Prepare a `values.yaml` file with the following configuration to run Appsmith as a non-root user:

<dd>

```yaml
_image:
  repository: appsmith/appsmith-ee
  tag: latest
  pullPolicy: Always

image:
  pullSecrets: dockerhub

mongodb:
  enabled: true

redis:
  enabled: true

postgresql:
  enabled: true

podSecurityContext:
  fsGroup: 1001
  sysctls:
    - name: net.ipv4.ip_unprivileged_port_start
      value: "80"

securityContext:
  runAsNonRoot: true
  runAsUser: 1001
  runAsGroup: 1001
  fsGroup: 1001
  seccompProfile:
    type: RuntimeDefault

applicationConfig:
  LD_PRELOAD: /usr/local/lib/libnss_wrapper.so
```

</dd>

## Install Appsmith with Helm

Install Appsmith using Helm and verify that the application is running successfully in your Kubernetes cluster.

1. Add the Appsmith Helm repository and install the chart using your customized `values.yaml` file:

<dd>

```bash
helm repo add appsmith https://helm.appsmith.com
helm repo update

helm install appsmith appsmith/appsmith \
  -f values.yaml
```

</dd>

2. To test the deployment, wait for all pods to reach the Running state:

<dd>

```bash
kubectl get pods
```

Then, check if the Appsmith service is accessible:

```bash
kubectl port-forward service/appsmith 8080:80
```

Open `http://localhost:8080` in your browser. You should see the Appsmith setup screen.

</dd>

3. For best security practices, make sure Appsmith is running with the following container settings:

<dd>

- Runs as a non-root user (`runAsNonRoot: true`)
- Uses a fixed `runAsUser`, `runAsGroup`, and `fsGroup` (all set to `1001`)
- Enables `seccompProfile: RuntimeDefault `for syscall filtering
- Applies `net.ipv4.ip_unprivileged_port_start` sysctl so Appsmith can bind to ports `<1024` without root access



</dd>


:::note
- MongoDB, Redis, and PostgreSQL are enabled and managed via Helm

- Ensure the image pull secret is created beforehand and correctly referenced in values.yaml
:::