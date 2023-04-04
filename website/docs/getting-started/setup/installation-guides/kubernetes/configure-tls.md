# Configure TLS

To ensure the security of your Appsmith application, it's recommended to use TLS certificates. One way to do this is by using [Cert Manager](https://cert-manager.io/). Cert Manager secures HTTP traffic with TLS and SSL certificates. The Appsmith Helm chart comes with built-in support for Ingress routes and certificate management through [cert-manager](https://github.com/jetstack/cert-manager). This makes it easy to configure TLS support using certificates from a variety of certificate providers, including [Let's Encrypt](https://letsencrypt.org/).

The steps below explain how to use Ingress routes and cert-manager to configure TLS for your Appsmith deployment using a free `Let's Encrypt` certificate:

:::tip
When executing these commands on Google Kubernetes Engine (GKE), you may encounter permission errors. [Refer to the official cert-manager documentation for notes on how to elevate your permissions](https://docs.cert-manager.io/en/latest/getting-started/install/kubernetes.html).*
:::

1. Obtain the LoadBalancer host name using the command below. Note this host name as you need it to configure DNS in a later step.
  ```
  kubectl get svc --namespace ingress-nginx ingress-nginx-controller  -o jsonpath="{.status.loadBalancer.ingress[0].hostname}"
  ```

2. Browse to the host name and confirm that you can access your Appsmith instance. This indicates that the NGINX Ingress controller is working.

3. Configure the DNS for your domain name by adding a `CNAME` record pointing to the public host name obtained in the previous steps.

4. To use cert-manager, add the repository, create a namespace, and create CRDs.
  i. Add the repository by running below command:
  ```bash
  helm repo add jetstack https://charts.jetstack.io
  ```
  ii. Create a namespace by running below command:
  ```bash
  kubectl create namespace cert-manager
  ```
  iii. Create CRDs by running below command:
  ```bash
  kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v1.5.3/cert-manager.crds.yaml
  ```

5. To create a ClusterIssuer resource for `Let's Encrypt` certificates, create a file named letsencrypt-appsmith.yaml with the following content, replacing the <EMAIL_ADDRESS> placeholder with a valid email address: 

  ```yaml
  apiVersion: cert-manager.io/v1
  kind: ClusterIssuer
  metadata:
    name: letsencrypt-appsmith
  spec:
    acme:
      email: <EMAIL_ADDRESS>
      server: https://acme-v02.api.letsencrypt.org/directory
      privateKeySecretRef:
        name: letsencrypt-appsmith
      solvers:
      - http01:
          ingress:
            class: nginx
  ```

6. Apply the changes to the cluster:

  ```
  kubectl apply -f letsencrypt-appsmith.yaml
  ```

7. Use Helm to install cert-manager and set up `Let's Encrypt` as the default Certificate Authority (CA).

  ```  
  helm install cert-manager --namespace cert-manager jetstack/cert-manager --version v1.5.3
  ```

8. Install Appsmith with integration to Ingress and cert-manager.

<Tabs groupId="appsmithEditions">
  <TabItem label="Community Edition" value="communityEdition"> 
  You can either use a command or add additional parameters to the `values.yaml` file.

   <details id="usingCommand">
     <summary>Follow the below steps to configure using a command</summary>
      You can use the Helm chart with the following additional parameters. Replace the DOMAIN placeholder with your specific domain name in the below command and run it:

      ```bash
        helm upgrade appsmith appsmith/appsmith \
          --set service.type=ClusterIP \
          --set ingress.enabled=true \
          --set ingress.tls=true \
          --set ingress.certManager=true \
          --set ingress.annotations."cert-manager\.io/cluster-issuer"=letsencrypt-appsmith \
          --set ingress.hosts[0].host=<DOMAIN> \
          --set ingress.certManagerTls[0].hosts[0]=<DOMAIN> \
          --set ingress.certManagerTls[0].secretName=letsencrypt-appsmith
          --set ingress.className=nginx
      ```     

  </details>
     <details id="usingValues">
     <summary>Follow the below steps to configure using a `values.yaml` file</summary>
      Open the `values.yaml` file, and update the parameters as shown below:
      Run the below command once the parameter values are updated:    

      ```bash
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
      Run the below command once the parameter values are updated:

      ```bash
      helm upgrade --values values.yaml appsmith appsmith/appsmith
      ```

</details>
  </TabItem>
  <TabItem label="Business Edition" value="businessEdition"> 
   You can either use a command or add additional parameters to the `values.yaml` file.
   
     <details id="usingCommand">
     <summary>Follow the below steps to configure using a command</summary>
      You can use the Helm chart with the following additional parameters. Replace the DOMAIN placeholder with your specific domain name in the below command and run it:

```bash
  helm upgrade appsmith appsmith-ee/appsmith \
    --set service.type=ClusterIP \
    --set ingress.enabled=true \
    --set ingress.tls=true \
    --set ingress.certManager=true \
    --set ingress.annotations."cert-manager\.io/cluster-issuer"=letsencrypt-appsmith \
    --set ingress.hosts[0].host=<DOMAIN> \
    --set ingress.certManagerTls[0].hosts[0]=<DOMAIN> \
    --set ingress.certManagerTls[0].secretName=letsencrypt-appsmith
    --set ingress.className=nginx
```     

  </details>
     <details id="usingValues">
     <summary>Follow the below steps to configure using a `values.yaml` file</summary>
      Open the `values.yaml` file, and update the parameters as shown below:
      Run the below command once the parameter values are updated:    

```bash
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
Run the below command once the parameter values are updated:

```bash
helm upgrade --values values.yaml appsmith appsmith-ee/appsmith
```

</details>

  </TabItem>
</Tabs> 

Once the deployment is finished, check the domain in a browser to verify that the Appsmith site is accessible over a secure TLS connection with a valid `Let's Encrypt` certificate.
