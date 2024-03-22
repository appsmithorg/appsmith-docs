---
description: Deploy Appsmith on a Kubernetes cluster
toc_max_heading_level: 2
---

# Set up Kubernetes Cluster on AWS-EKS

This page provides steps to set up a Kubernetes Cluster with the persistent volume on AWS-EKS.

## Prerequisites

Ensure you have access to the AWS Command Line Interface (CLI). Use the following command to verify whether you can access information related to your account and ARN. This verification confirms that you can connect to and access your Amazon account using the CLI.

  ```bash
    aws sts get-caller-identity
  ```

## Create and configure cluster

Follow these steps to create a `KubeConfig` and define a storage class that automatically generates a persistent volume during [installation of Appsmith](/getting-started/setup/installation-guides/kubernetes).

1. Create KubeConfig with:

    ```bash
    aws eks update-kubeconfig --region ap-south-1 --name CLUSTER_NAME  --profile <PROFILE_NAME>
    ```

    In the above command, add the profile name that has access to the AWS-EKS cluster to the `--profile` parameter.

2. Test your Kubernetes configuration with:

    ```bash
    kubectl cluster-info
    ```

    The above command provides a summary of the current cluster configuration, including the Kubernetes master and other cluster information.

3. Define a storage class:

   * If your Kubernetes version is prior to `1.23`, execute the following command:

        ```bash
        kubectl apply -f - <<EOF
        apiVersion: storage.k8s.io/v1
        kind: StorageClass
        metadata:
        name: gp2
        provisioner: kubernetes.io/aws-ebs
        EOF
        ```

    * If your Kubernetes version is `1.23` or later, follow these steps:

        1. Create an IAM role by following the official Amazon documentation on [Creating the Amazon EBS CSI driver IAM role](https://docs.aws.amazon.com/eks/latest/userguide/csi-iam-role.html).

        2. Add the Amazon Elastic Block Store (Amazon EBS) Container Storage Interface (CSI) driver chart repository:

            ```bash
            helm repo add aws-ebs-csi-driver https://kubernetes-sigs.github.io/aws-ebs-csi-driver
            ```

        3. Update the Amazon EBS CSI driver repository:

            ```bash
            helm repo update
            ```

        4. Install the Amazon EBS CSI driver:

            ```bash
            helm upgrade --install aws-ebs-csi-driver --namespace kube-system aws-ebs-csi-driver aws-ebs-csi-driver
            ```

        5. Verify the installation of the Amazon EBS CSI driver:

            ```bash
            kubectl get pods -n kube-system -l app.kubernetes.io/name=aws-ebs-csi-driver
            ```

## Next steps

* [Install Appsmith on Kubernetes Cluster](/getting-started/setup/installation-guides/kubernetes)

## Troubleshooting

If you are facing issues contact the support team using the chat widget at the bottom right of this page.

