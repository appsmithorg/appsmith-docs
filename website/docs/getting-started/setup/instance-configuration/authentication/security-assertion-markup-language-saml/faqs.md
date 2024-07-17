# FAQs

This page shows frequently asked questions related to SAML SSO in Appsmith.

## How do I remove the 'Update Account Info' screen for SAML?


When you sign up using SAML SSO, a screen displaying `Update Account Info` appears, asking for the first name and last name.

The first name and last name fields are configured to be mandatory in Keycloak for new users signing up via SAML SSO. To remove this prompt, follow these steps:

1. Retrieve Keycloak credentials from the Docker container:

<dd>
  - Use docker `exec -it -u root appsmith bash` to access the container.
  - Find Keycloak credentials in `/appsmith-stacks/configuration/docker.env`.


</dd>

2. Access Keycloak admin console at `https://<domain_name>/auth`.

3. Log in with the obtained credentials.

4. Select the environment used by Appsmith.

5. Navigate to Users > Profile.

6. Delete the `firstName` and `lastName` attributes from the user profile settings.

 <ZoomImage src="/img/saml-issue-16.png" alt="" caption="" />


7. Save the changes and ensure that the settings are updated in the Keycloak environment.
