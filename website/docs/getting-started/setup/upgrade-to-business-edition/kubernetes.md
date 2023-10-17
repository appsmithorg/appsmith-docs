---
description: Follow these steps to upgrade the Appsmith Community Kubernetes installation.
---

# Kubernetes

This page provides steps to upgrade Appsmith Kubernetes Community Edition.

## Prerequisites

Before upgrading, ensure you have:

- Signed up on [customer.appsmith.com](https://customer.appsmith.com/) and generated a trial license key.
- At least 2 GB of free storage space for the backup process.
- Deployed the latest version of Appsmith. Refer to [Update Appsmith](/getting-started/setup/instance-management/update-appsmith#update-on-kubernetes) to update the version.
- Created a backup of your Appsmith instance. For instructions, see [Backup instance](/getting-started/setup/instance-management/appsmithctl?current-command-type=kubernetes-commands#backup-instance).

## Upgrade Appsmith installation

Follow these steps to upgrade your Appsmith installation:

1. Create a folder named `appsmith-ee` on your machine for deployment and data storage. Then, navigate to this folder using the `cd` command.

2. Add the Appsmith chart repository with:

   ```bash
   helm repo add appsmith-ee https://helm-ee.appsmith.com
   ```

3. Load the Appsmith chart repository with:

   ```bash
   helm repo update
   ```

4. Generate the `values.yaml` with:

   ```bash
   helm show values appsmith-ee/appsmith > values.yaml
   ``` 

5. Deploy Appsmith with:

   ```bash
   # Give a desired name to your namespace by replacing <NAMESPACE> 
   helm install appsmith appsmith-ee/appsmith -n <NAMESPACE> --create-namespace
   ```

6. Restore the backup data using the [Restore Appsmith instance](/getting-started/setup/instance-management/appsmithctl?current-command-type=kubernetes-commands#restore-instance).

7. Restart the pods with:

   ```bash
   kubectl rollout restart statefulsets/appsmith -n <NAMESPACE>
   ```

8. Get pod name with:

   ```bash
   kubectl get pods -n <NAMESPACE>
   ```

9. Verify the installation locally by forwarding port 8080 to 80 with:
 
   ```bash
   # Replace the <NAMESPACE> with the your namespace 
   kubectl --namespace <NAMESPACE> port-forward appsmith-0 8080:80
   ```

10. Open [https://localhost:8080](https://localhost:8080) and wait for the server to come up. It can take up to 5 minutes. Once the server is up and running, access Appsmith at [https://localhost:8080](https://localhost:8080).

11. Log into your Appsmith account.

12. After successfully verifying the Appsmith installation, you may choose to delete the Appsmith Community Edition namespace:

   ```bash
   kubectl delete ns <COMMUNITY_EDITION_NAMESPACE>
   ```

## Troubleshooting

If you face issues, continue to use the Community Edition namespace and contact the support team using the chat widget at the bottom right of this page.

## See also
* [Upgrade plan](/getting-started/setup/manage-editions/upgrade-plan#add-or-update-your-license-key)