---
description: Deploy Appsmith on Sealos with templates
sidebar_position: 8
---

# Sealos

[Sealos](https://sealos.io/) is a Kubernetes distribution offering comprehensive solutions for both public and private clouds, allows enterprises to use the cloud as effortlessly as they would use a personal computer.

:::info
The administrative privileges (Admin settings) are not available due to deployment restrictions with the Sealos container.
:::

## Deployment steps

1. Sign up for an account on Sealos
2. Click the button [![](https://raw.githubusercontent.com/labring-actions/templates/main/Deploy-on-Sealos.svg)](https://cloud.sealos.io/?openapp=system-fastdeploy%3FtemplateName%3Dappsmith)
3. click "Deploy Application" on the template page to start deployment.

Once deployment concludes, click "Confirm" to navigate to the application's details.

![](/img/sealos-templates-detail.png)

click "Details" to enter the application's detailed view. Wait for the application's status to switch to running. Subsequently, click on the external link to open the application's Web interface directly through the external domain.

![](/img/sealos-app-detail.png)

## Custom domain

If you wish to link a custom domain (For example, [https://appsmith.yourcompany.com)](https://appsmith.yourcompany.com) to your Appsmith installation, please follow the steps below:

1. on your domain provider's end, link the 'CNAME' to the one Sealos provided.
2. Once it's active, jump back to Sealos, click "Update" top-right on the app details page.
3. click on "Custom Domain" to the side:
   
   ![](/img/sealos-custom-domain.png)

4. Enter your custom domain in the pop-up box and click confirm.
   
   ![](/img/sealos-custom-domain1.png)

5. To wrap up, click the "Deploy" button. Once your app's live, click on the external address to access the app via the custom domain.