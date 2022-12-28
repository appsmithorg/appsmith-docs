---
description: >-
  Appsmith ships with third-party services & configurations that improve the app
  building experience. All services & configurations are entirely optional.
---

# Instance Configuration

Configuration of your Appsmith instance allows you to tailor it to your specific needs. This process includes setting up elements like environment variables, authentication, emails, SSL, and custom domain. Proper configuration ensures that your instance is running efficiently. 

## Configure Docker installations

To configure a docker installation, simply open the folder of your installation and edit the **`stacks/configuration/docker.env`** file with the environment variables for the service.

Remove # before the variables to ensure they're not commented

```bash
// Example variable configuration format
APPSMITH_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
```

After making any changes, **remember to restart the docker containers** for the changes to take effect.

```bash
// To restart Appsmith using docker
docker restart appsmith

// To restart Appsmith using docker compose
docker-compose restart appsmith
```

## Configure Kubernetes installations

To configure a `k8s` installation, simply open the folder of your installation and edit the `config-template/appsmith-configmap.yaml` file.

Remove # before the variables to ensure they're not commented

```
// Example variable configuration format
APPSMITH_GOOGLE_MAPS_API_KEY: "YOUR_API_KEY"
```

After making any changes, **remember to restart the pods** for the changes to take effect

```
// commands to restart k8s pods
kubectl apply -f appsmith-configmap.yaml
kubectl scale deployment appsmith-internal-server --replicas=0
kubectl scale deployment appsmith-internal-server --replicas=1
```

## Configure Helm installations

To configure a helm install, you can either:
 Run the command below
 
  ```bash
  // Command template
  helm upgrade --set applicationConfig.<ENV_KEY>=<ENV_VALUE> [ RELEASE ] [ CHART ]

  // Example to enable APPSMITH_SIGNUP_DISABLED 
  helm upgrade --set applicationConfig.APPSMITH_SIGNUP_DISABLED="true" appsmith appsmith/appsmith
  ```
 - If you have the values.yaml, then update the data in the `applicationConfig`.

    ```
      APPSMITH_OAUTH2_GOOGLE_CLIENT_ID: ""
      APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET: ""
      APPSMITH_OAUTH2_GITHUB_CLIENT_ID: ""
      APPSMITH_OAUTH2_GITHUB_CLIENT_SECRET: ""
      APPSMITH_FORM_LOGIN_DISABLED: ""
      APPSMITH_SIGNUP_DISABLED: "true"
    ```
   Followed by running
   
   ```
   helm upgrade --values values.yaml appsmith appsmith/appsmith
   ```

## Configure ECS installations

To configure an ECS installation, follow these steps:

1. Navigate to the **ECS console** and select **Task Definitions** on the sidebar.
2. Click on the Task Definition used by your ECS instance, and hit **Create new revision**.
3. On the `Task Definition config` page, click the Appsmith **container definition** to edit it. In the **Environment Section**, enter the environment configuration as **key-value pairs** as shown below.

![](/img/ecs-task-env_(1).png)

It's recommended to use **AWS Secrets** for sensitive information, please follow the steps to [create a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage\_create-basic-secret.html). Use the **ARN** of the secret as the Environment value and set the option to **ValueFrom**.

1. Hit the **Update** button, and hit **Create** to make a new task definition.
2. Navigate back to the **ECS console** and select your cluster. Click on your service to open the **service details**.
3. Click on **Update**, and select the **latest revision** of the Task Definition.
4. Hit **Skip** to **review** and then Update Service. A screen as below shows the status.

![](/img/ecs-service-restart_(1)_(1)_(1)_(1)_(3)_(3)_(1).png)

It may take a minute for the new ECS Task to start running.

## Further reading

* [Email](/getting-started/setup/instance-configuration/email)
* [Custom Domain](/getting-started/setup/instance-configuration/custom-domain)
* [Signup Restrictions](/getting-started/setup/instance-configuration/disable-user-signup)
* [Google Maps](/getting-started/setup/instance-configuration/google-maps)
* [Disable Intercom](/getting-started/setup/instance-configuration/disable-intercom)
* [Single Sign-On (SSO)](/getting-started/setup/instance-configuration/authentication)
* [Frame Ancestors](/getting-started/setup/instance-configuration/frame-ancestors)
