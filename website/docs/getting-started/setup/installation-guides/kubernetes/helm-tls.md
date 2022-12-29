# Setup TLS on Helm installation
## Introduction

- Deploying Appsmith application on a Kubernetes cluster is easier with Appsmith's Helm chart. However, it is best practice to secure your web application with TLS certificates.

- This guide will show you how to secure HTTP traffic with TLS and SSL certificates using [Cert Manager](https://cert-manager.io/).

## Prerequisites

- You should have an installation of Appsmith running. Please refer to the instructions [here](/getting-started/setup/installation-guides/kubernetes#install-appsmith) if you have not done it.
- The Appsmith deployment should be published to the cluster,that is you should have already installed the ingress controller and the ingress such that you instance is accssible on the internet with a public IP/FQDN.

## Secure traffic with TLS and Let's Encrypt SSL certificates

The Appsmith Helm chart comes with built-in support for Ingress routes and certificate management through [cert-manager](https://github.com/jetstack/cert-manager). This makes it easy to configure TLS support using certificates from a variety of certificate providers, including [Let's Encrypt](https://letsencrypt.org/).

The steps below explain how to use Ingress routes and cert-manager to configure TLS for your Appsmith deployment using a free Let's Encrypt certificate:

- Obtain the LoadBalancer host name using the command below. Note this host name as you will use it to configure DNS in a later step.
  ```
  kubectl get svc --namespace ingress-nginx ingress-nginx-controller  -o jsonpath="{.status.loadBalancer.ingress[0].hostname}"
  ```

- Browse to the host name and confirm that you can access your Appsmith instance. This indicates that the NGINX Ingress controller is working.

- Configure the DNS for your domain name by adding a `CNAME` record pointing to the public host name obtained in the previous steps.

- Add the cert-manager repository, create a namespace and create CRDs:
  ```
  helm repo add jetstack https://charts.jetstack.io

  kubectl create namespace cert-manager
  kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v1.5.3/cert-manager.crds.yaml
  ```
  *Tip: When executing these commands on Google Kubernetes Engine (GKE), you may encounter permission errors. [Refer to the official cert-manager documentation for notes on how to elevate your permissions](https://docs.cert-manager.io/en/latest/getting-started/install/kubernetes.html).*

- Create a ClusterIssuer resource for Let's Encrypt certificates. Create a file named letsencrypt-appsmith.yaml with the following content. Replace the EMAIL-ADDRESS placeholder with a valid email address.
  ```yaml
  apiVersion: cert-manager.io/v1
  kind: ClusterIssuer
  metadata:
    name: letsencrypt-appsmith
  spec:
    acme:
      email: EMAIL-ADDRESS
      server: https://acme-v02.api.letsencrypt.org/directory
      privateKeySecretRef:
        name: letsencrypt-appsmith
      solvers:
      - http01:
          ingress:
            class: nginx
  ```

- Apply the changes to the cluster:
  ```
  kubectl apply -f letsencrypt-appsmith.yaml
  ```

- Install cert-manager with Helm and configure Let's Encrypt as the default Certificate Authority (CA):
  ```
  helm install cert-manager --namespace cert-manager jetstack/cert-manager --version v1.5.3
  ```

- Install Appsmith using Helm chart with additional parameters to integrate with Ingress and cert-manager. Replace the DOMAIN placeholder with your domain name:

  - You can run the command below 
    ```
    helm upgrade appsmith appsmith/appsmith \
    --set service.type=ClusterIP \
    --set ingress.enabled=true \
    --set ingress.tls=true \
    --set ingress.certManager=true \
    --set ingress.annotations."cert-manager\.io/cluster-issuer"=letsencrypt-appsmith \
    --set ingress.hosts[0].host=DOMAIN \
    --set ingress.certManagerTls[0].hosts[0]=DOMAIN \
    --set ingress.certManagerTls[0].secretName=letsencrypt-appsmith
    --set ingress.className=nginx
    ```
  - Or use the values.yaml, and update the parameters to reflect the one below
    ```
    ingress:
      enabled: true
      annotations:
        cert-manager.io/cluster-issuer: "letsencrypt-appsmith"
      hosts:
        - host: example.appsmith.com
      tls: true
      secrets: []
      certManager: true
      certManagerTls:
        - hosts:
            - example.appsmith.com
          secretName: letsencrypt-appsmith
      className: "nginx"
      ```
      Followed by running
      ```
      helm upgrade --values values.yaml appsmith appsmith-ee/appsmith
      ```

After the deployment completes, visit the domain in your browser and you should see the Appsmith site over a secure TLS connection with a valid Let's Encrypt certificate.

