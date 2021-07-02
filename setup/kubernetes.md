# Kubernetes

We provide an installation script that will help you configure Appsmith & deploy your app on a Kubernetes cluster.

## Prerequisites

* Kubernetes version v1.18.0+
* Ensure `kubectl` is installed. [Install kubectl](https://kubernetes.io/docs/tasks/tools/)
* Configure kubectl to connect to your k8s clusters
  * [Configuring Minikube](https://minikube.sigs.k8s.io/docs/handbook/kubectl/)
  * [Configuring Google Cloud](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl)
  * [Configuring Aws EKS](https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html)
  * [Configuring Microk8s](https://microk8s.io/docs/working-with-kubectl)
* Setup NGINX Ingress Controller on your cluster
  * [Minikube Setup](https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/)
  * [Google Cloud Setup](https://kubernetes.github.io/ingress-nginx/deploy/#gce-gke)
  * [AWS EKS Setup](https://kubernetes.github.io/ingress-nginx/deploy/#aws)
  * [Microk8s Setup](https://microk8s.io/docs/addon-ingress)

{% hint style="success" %}
Script tested on Minikube with Kubernetes v1.18.0
{% endhint %}

## Deployment Steps

Fetch the **install.k8s.sh** script on the system you want to deploy appsmith

```bash
# Downloads install.sh
curl -O https://raw.githubusercontent.com/appsmithorg/appsmith/master/deploy/k8s/install.k8s.sh
```

Make the script executable

```bash
chmod +x install.k8s.sh
```

Run the script.

```bash
./install.k8s.sh
```

Check if all the pods are running correctly.

```bash
kubectl get pods

#Output should look like this
NAME                                        READY   STATUS      RESTARTS    AGE
appsmith-editor-cbf5956c4-2zxlz             1/1     Running     0           4m26s
appsmith-internal-server-d5d555dbc-qddmb.   1/1     Running     2           4m22s
imago-1602817200-g28b2                      1/1     Running     0           4m39s
mongo-statefulset-0                         1/1     Running     0           4m13s
redis-statefulset-0                         1/1     Running     0           4m00s
```

## Customize Appsmith Configuration

After you successfully run the script, all the configuration files have been downloaded and & stored into `<Installation Path>`. If you want to update your app settings \(ex: database host\). Go to the`<Installation Path>/config-template`, update the corresponding value in the configmap file, then restart the pods.

The below steps will help you update the database hostname of your application:

* Open file `appsmith-configmap.yaml` in `<Installation Path>/config-template` folder
* Update the value of the variable `APPSMITH_MONGODB_URI` to your database hostname
* Run commands:

  ```text
  kubectl apply -f appsmith-configmap.yaml
  kubectl scale deployment appsmith-internal-server --replicas=0
  kubectl scale deployment appsmith-internal-server --replicas=1
  ```

{% hint style="success" %}
You can access the running application on the **Ingress Endpoint** if you did not choose to provide a custom domain for your application.

```text
kubectl get ingress
NAME               CLASS    HOSTS   ADDRESS          PORTS   AGE
appsmith-ingress   <none>   *       XXX.XXX.XX.XXX   80      2m
```

You may need to wait 2-3 minutes before accessing the application to allow the server to come up
{% endhint %}

## Common Issues

You can debug common errors faced during deployment at the link below

{% page-ref page="../troubleshooting-guide/deployment-errors.md" %}



