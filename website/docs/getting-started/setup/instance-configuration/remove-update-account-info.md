---
description: This page shows you how to turn off account update setting in Keycloak.
---

# Turn off Keycloak Account Update Setting

Appsmith uses Keycloak for managing user authentication. When a new user signs up, Keycloak registers the user and requests their information. When you configure SAML, it's ideal to turn off Keycloak capturing user information for registration since the user is already registered with the Identity Provider (IDP). This page provides instructions to remove the update info screen on Keycloak.

## Prerequisites
* Ensure you have access to the Keycloak admin console.
* Retrieve Keycloak credentials from the Docker container. If not, use the following command to access the container:
    ```sh
    docker exec -it -u root appsmith bash
    ```
    Copy the Keycloak credentials from the `/appsmith-stacks/configuration/docker.env` file.

## Delete user attributes

Follow these steps to turn off the user information screen using the Keycloak admin console:

1. Open your browser and access the Keycloak admin console available at `https://<domain_name>/auth`.
2. Log in with the credentials retrieved from the Docker container in the [Prerequisites](#prerequisites) section.
3. Select the relevant environment where your Appsmith instance is running.
4. Navigate to the user profile settings available at **Users** > **Profile**.
5. Delete the **firstName** and **lastName** attributes from the user profile settings.

    <ZoomImage src="/img/remove-keycloak-user-info-screen-for-saml.png" alt="User Information Screen" caption="Keycloak - User Information Screen" />

7. Save the changes to update the settings in the Keycloak environment.

## Troubleshooting

If you are facing issues, contact the support team using the chat widget at the bottom right of this page.
