# Configure Azure CI for SAML SSO

This page shows how to configure Appsmith on Azure CI for using Security Assertion Markup Language (SAML) Single Sign-On (SSO).

## Prerequisites

- A [Azure account](https://portal.azure.com/#home) with permission to create and manage PostgreSQL resources.
- Ensure that you have taken a manual backup for your instance.
- Decide if your database requires public access or if it should be restricted by specific IP ranges using a Network Security Group (NSG).

## Set Up PostgreSQL in Azure

Follow these steps to set up a PostgreSQL instance in Azure:

:::info
It is recommended to create PostgreSQL in the same region and availability zone as your Appsmith deployment for optimized performance.
:::

1. Log into the **Azure Portal** at https://portal.azure.com.

2. In the left-hand menu, select **Create a resource** and search for **Azure Database for PostgreSQL**.

3. Select **Single server** and click **Create**.

4. In the **Basics** tab, set up:

<dd>

- **Subscription**: Select Subscription 1.

- **Resource Group**: Select Sandbox.

- **Server Name:** Enter appsmith-postgres.

- **Region**: Select the region matching your Appsmith deployment for optimized latency.

- **PostgreSQL** Version: Choose Version 14.

- **Workload Type**: Select Development.

</dd>

5. In the **Compute + storage** section, configure as needed based on performance requirements.

6. In the **Authentication Settings**:

<dd>

- **Authentication Method**: Select PostgreSQL Authentication Only.

- **Username**: Enter your preferred username (for example, `pgadmin`).

- **Password**: Set a secure password and confirm it.

</dd>


## Set Up Firewall Rules

Configure firewall rules for your PostgreSQL instance to ensure secure access. By default, you can enable public access, but it's recommended to restrict access to specific IP addresses in production environments.

1. In the Azure Portal, go to the Networking tab of your PostgreSQL server.

2. Under Firewall rules, choose one of the following options:

<dd>

Add your IP address or select **Allow Azure services and resources** to access this server if you want to enable broader access temporarily.

</dd>


3. Click **Save** to apply the firewall settings.


## Connect to PostgreSQL Database

After setting up your PostgreSQL instance, connect to it using the provided credentials.

1. In the Azure Portal, navigate to **All resources** and select your PostgreSQL server instance.

2. Find your connection details (`host`, `port`, `username`, and `database name`).

3. Open a terminal and use the following command to connect to your PostgreSQL database:

<dd>

```sql
psql -h <hostname> -p <port> -U <username> <database>

//example
psql -h appsmith.postgres.database.azure.com -p 5432 -U pgadmin postgres
```

</dd>

## Create the Keycloak Database and User

Once connected to your PostgreSQL database, create a new database for Keycloak and a user with appropriate roles.

1. Create the keycloak database:

```sql
CREATE DATABASE keycloak;
```

2. Create a new user and set a secure password:


```sql
CREATE USER your_username WITH PASSWORD 'your_password';
```

3. Assign the necessary roles to the new user:


```sql
GRANT CONNECT ON DATABASE keycloak TO your_username;
GRANT USAGE ON SCHEMA public TO your_username;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO your_username;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO your_username;
```
Replace `your_username` and `your_password` with your actual credentials.
