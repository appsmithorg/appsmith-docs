---
description: This page provides information on configuring self-hosted Appsmith instance using Admin settings UI.
title: Configure PostgreSQL for SAML SSO (Azure)
hide_title: true
toc_max_heading_level: 2
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Configure PostgreSQL for SAML SSO (Azure)</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

This page shows how to configure Appsmith on Azure Container Instance for using Security Assertion Markup Language (SAML) Single Sign-On (SSO).

## Prerequisites

- [Azure account](https://portal.azure.com/#home) with permission to create and manage PostgreSQL resources.
- Ensure that you have taken a manual backup for your instance. See [Backup instance](/getting-started/setup/instance-management/backup-and-restore/backup-instance)

## Set up PostgreSQL in Azure

Follow these steps to set up a PostgreSQL instance in Azure. It's recommended to create PostgreSQL in the same region and availability zone as your Appsmith deployment for optimized performance.



1. Log into the [**Azure Portal**](https://portal.azure.com).

2. In the left-hand menu, select **Create a resource** and search for **Azure Database for PostgreSQL**.

3. Select **Single server** and click **Create**.

<dd>

<ZoomImage src="/img/azure-pg-create.webp" alt="" caption="" />

</dd>

4. In the **Basics** tab, set up:

<dd>

- **Subscription**: Select Subscription 1.

- **Resource Group**: Select Sandbox.

- **Server Name:** Enter appsmith-postgres.

- **Region**: Select the region matching your Appsmith deployment for optimized latency.

- **PostgreSQL** Version: Choose Version 14.

- **Workload Type**: Select Development.


<ZoomImage src="/img/azure-pg-server.webp" alt="" caption="" />



</dd>

5. In the **Compute + storage** section, configure as needed based on performance requirements.

6. In the **Authentication Settings**:

<dd>

- **Authentication Method**: Select PostgreSQL Authentication Only.

- **Username**: Enter your preferred username (for example, `pgadmin`).

- **Password**: Set a secure password.

<ZoomImage src="/img/azure-pg-auth.webp" alt="" caption="" />


7. Once the setup is complete, click **Next: Networking**.




</dd>


## Set up Firewall Rules

Configure firewall rules for your PostgreSQL instance to ensure secure access. By default, you can enable public access, but it's recommended to restrict access to specific IP addresses in production environments.

1. In the Azure Portal, go to the **Networking** tab of your PostgreSQL server.

2. Under **Firewall** rules, choose one of the following options:

<dd>

Add your IP address or select **Allow Azure services and resources** to access this server if you want to enable broader access temporarily.

<ZoomImage src="/img/azure-pg-firewall.webp" alt="" caption="" />





</dd>


3. Click **Save** to apply the firewall settings.


## Connect to PostgreSQL Database

After setting up your PostgreSQL instance, connect to it using the provided credentials.

<ZoomImage src="/img/azure-db-pg.webp" alt="" caption="" />


1. In the Azure Portal, navigate to **All resources** and select your PostgreSQL server instance.

2. Find your connection details (`host`, `port`, `username`, and `database name`).

3. Open a terminal and use the following command to connect to your PostgreSQL database:

<dd>

```sql
# Format
psql -h <hostname> -p <port> -U <username> <database>

# Example
psql -h appsmith.postgres.database.azure.com -p 5432 -U pgadmin postgres
```

</dd>

## Create Keycloak Database and User

Once connected to your PostgreSQL database, create a new database for Keycloak and a user with appropriate roles.

1. Create the keycloak database:

<dd>

```sql
CREATE DATABASE keycloak;
```

</dd>

2. Create a new user and set a secure password:

<dd>

```sql
CREATE USER your_username WITH PASSWORD 'your_password';
```

</dd>

3. Assign the necessary roles to the new user:

<dd>

```sql
GRANT CONNECT ON DATABASE keycloak TO your_username;
GRANT USAGE ON SCHEMA public TO your_username;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO your_username;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO your_username;
```
Replace `your_username` and `your_password` with your actual credentials.

</dd>

## Connect PostgreSQL to Appsmith

To connect your PostgreSQL database to Appsmith, follow these steps:

1. Open your `docker-compose.yml` file for the Appsmith and add the PostgreSQL configuration under the `environment` section.

<dd>

Get the `APPSMITH_KEYCLOAK_DB_URL` from the **Connection Strings** section of your Azure PostgreSQL instance. 

*Example:*

```yaml
# PostgreSQL URL format: postgresql://username:password@hostname:port/database

version: "3"
services:
  appsmith:
    image: index.docker.io/appsmith/appsmith-ee
    container_name: appsmith
    ports:
      - "80:80"
      - "443:443"
    environment:
      # External PostgreSQL configuration for Keycloak
      // highlight-next-line
      APPSMITH_KEYCLOAK_DB_URL: postgresql://appsmith:password@appsmith.postgres.database.azure.com:5432/keycloak
    volumes:
      - ./stacks:/appsmith-stacks
    restart: unless-stopped

```
</dd>

2. Save the changes, then restart Appsmith to apply the new configurations:

<dd>

```bash
docker-compose down
docker-compose up -d
```

</dd>



## Troubleshooting

If you are facing issues during deployment, refer to the guide on [troubleshooting deployment errors](/help-and-support/troubleshooting-guide/deployment-errors). If you continue to face issues, reach out to the support team via the chat widget on this page.

## See also

- [SAML Single Sign-On](/getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml)
- [Manage Appsmith instance](/getting-started/setup/instance-management)
