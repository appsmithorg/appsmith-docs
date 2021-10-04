---
description: >-
  We provide an installation script that will help you configure Appsmith &
  deploy your app on a Kubernetes cluster
---

# Kubernetes

## Prerequisites

* Kubernetes version v1.18.0+
* Ensure `kubectl` is installed. [Install kubectl](https://kubernetes.io/docs/tasks/tools/)
* Configure kubectl to connect to your k8s clusters
  * [Configuring Minikube](https://minikube.sigs.k8s.io/docs/handbook/kubectl/)
  * [Configuring Google Cloud](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl)
  * [Configuring AWS EKS](https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html)
  * [Configuring Microk8s](https://microk8s.io/docs/working-with-kubectl)
* Setup NGINX Ingress Controller on your cluster. **This is important for your cluster to be accesible and get a public IP**
  * [Minikube Setup](https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/)
  * [Google Cloud Setup](https://kubernetes.github.io/ingress-nginx/deploy/#gce-gke)
  * [AWS EKS Setup](https://kubernetes.github.io/ingress-nginx/deploy/#aws)
  * [Azure AKS Setup](https://kubernetes.github.io/ingress-nginx/deploy/#azure)
  * [Microk8s Setup](https://microk8s.io/docs/addon-ingress)

> Script tested on Minikube with Kubernetes v1.18.0


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

> You can access the running application on the **Ingress Endpoint** if you did not choose to provide a custom domain for your application.

```text
kubectl get ingress
NAME               CLASS    HOSTS   ADDRESS          PORTS   AGE
appsmith-ingress   <none>   *       XXX.XXX.XX.XXX   80      2m
```

You may need to wait 2-3 minutes before accessing the application to allow the server to come up


## Troubleshooting

If you encounter any errors during this process, check out our guide on [debugging deployment errors](../troubleshooting-guide/deployment-errors.md), if you are still facing an issue please reach out to [support@appsmith.com](mailto:support@appsmith.com) or join our [Discord Server](https://discord.com/invite/rBTTVJp) to directly speak to the appsmith team!

## Further Reading

* [Configuring Self Hosted Instances](instance-configuration/#configuring-docker-installations)
* [Managing the Appsmith instance](instance-management.md)
* [Tutorials](../tutorials/)

