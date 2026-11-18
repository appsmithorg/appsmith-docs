---
description: Set up Kerberos on a self-hosted Appsmith server and connect to Microsoft SQL Server with an Active Directory account.
---

# Connect to SQL Server with Windows Authentication

This page shows how to connect a Microsoft SQL Server datasource with an Active Directory account instead of a SQL Server login. Appsmith signs in with Kerberos, using the account's username and password.

Windows authentication is available from Appsmith v2.8, on self-hosted Appsmith only.

## Where it works

| Setup | Supported | Notes |
| --- | --- | --- |
| Self-hosted Appsmith on Docker, Docker Compose or Kubernetes (Helm) | Yes | Needs the Kerberos settings and network access in [Prerequisites](#prerequisites). |
| On-premises SQL Server 2019, 2022 or 2025 joined to Active Directory | Yes | SQL Server needs a registered service principal name (SPN). |
| SQL Server on Linux joined to Active Directory | Yes | Set up as Microsoft documents for SQL Server on Linux. |
| SQL Server on a virtual machine in Azure or AWS, joined to Active Directory | Yes | Same as on-premises. |
| Default instance, or a named instance on a fixed port | Yes | Enter the port. The SPN must include it. |
| Always On availability group listener, DNS alias or IP address | Yes | Enter the registered name in **Server SPN**. |
| Account in a trusted domain or another forest | Not tested | Needs the other realms in `krb5.conf`. |
| Named instance on a dynamic port | Not tested | Give the instance a fixed port. |
| Appsmith Cloud | No | Appsmith Cloud can't reach your domain controller. |
| Azure SQL Database or Azure SQL Managed Instance | No | They don't accept on-premises Kerberos. |
| Amazon RDS for SQL Server | Not tested | RDS must be joined to AWS Managed Microsoft AD. |
| NTLM | No | Appsmith uses Kerberos only. |
| Local Windows accounts | No | Use a domain account. |
| Keytab file or group Managed Service Account (gMSA) | No | Use the account's password. |
| Each app user signing in with their own Windows account | No | Every query runs as the datasource's account. |

## Prerequisites

Ask your Active Directory and SQL Server admins for these:

1. **An Active Directory account for Appsmith**, such as `svc_appsmith`. A dedicated service account is best.
   - Set its password not to expire, or plan to update the datasource when it changes.
   - Note the realm. It is the Active Directory domain in capital letters, such as `CORP.EXAMPLE.COM`.

2. **A SQL Server login for the account**, with access to the database. For example:

   ```sql
   CREATE LOGIN [CORP\svc_appsmith] FROM WINDOWS;
   USE SalesDb;
   CREATE USER [CORP\svc_appsmith] FOR LOGIN [CORP\svc_appsmith];
   ALTER ROLE db_datareader ADD MEMBER [CORP\svc_appsmith];
   ```

3. **A registered SPN for SQL Server.** The SQL Server service account must have the name `MSSQLSvc/<host>:<port>`, using the host name Appsmith connects to. To check and register it on a Windows machine joined to the domain:

   ```powershell
   setspn -L CORP\sqlsvc
   setspn -S MSSQLSvc/sql01.corp.example.com:1433 CORP\sqlsvc
   ```

4. **Network access from the Appsmith server:**
   - The domain controller on port `88`, TCP and UDP.
   - DNS that resolves your Active Directory domain and the SQL Server host.
   - The SQL Server port, usually `1433`.

5. **Clocks in sync.** The clocks on the Appsmith server and the domain controller must be within 5 minutes of each other.

## Give Appsmith your Kerberos settings

Appsmith reads Kerberos settings from a `krb5.conf` file.

1. Create `krb5.conf`. Replace the realm and domain controller names with your own:

   ```ini
   [libdefaults]
     default_realm = CORP.EXAMPLE.COM
     dns_lookup_kdc = false
     dns_lookup_realm = false
     rdns = false

   [realms]
     CORP.EXAMPLE.COM = {
       kdc = dc01.corp.example.com
       kdc = dc02.corp.example.com
     }

   [domain_realm]
     .corp.example.com = CORP.EXAMPLE.COM
     corp.example.com = CORP.EXAMPLE.COM
   ```

   List your domain controllers under `kdc` rather than turning on `dns_lookup_kdc`. That way the Appsmith server only contacts the servers you list.

2. Put the file in the Appsmith container at `/etc/krb5.conf`. Follow the steps for your installation below.

### Docker Compose

1. Save `krb5.conf` next to your `docker-compose.yml`.
2. Add it to the `volumes` of the Appsmith service:

   ```yaml
   volumes:
     - ./stacks:/appsmith-stacks
     - ./krb5.conf:/etc/krb5.conf:ro
   ```

3. Restart Appsmith:

   ```bash
   docker-compose up -d
   ```

### Docker

Add the file to your `docker run` command:

```bash
docker run -d --name appsmith -p 80:80 \
  -v "$PWD/stacks:/appsmith-stacks" \
  -v "$PWD/krb5.conf:/etc/krb5.conf:ro" \
  appsmith/appsmith-ee
```

### Kubernetes (Helm)

1. Create a ConfigMap from the file:

   ```bash
   kubectl create configmap appsmith-krb5 --from-file=krb5.conf -n <namespace>
   ```

2. Add it to `values.yaml`:

   ```yaml
   extraVolumes:
     - name: krb5
       configMap:
         name: appsmith-krb5
   extraVolumeMounts:
     - name: krb5
       mountPath: /etc/krb5.conf
       subPath: krb5.conf
       readOnly: true
   ```

3. Apply the change:

   ```bash
   helm upgrade <release_name> appsmith-ee/appsmith -n <namespace> -f values.yaml
   ```

If you change the ConfigMap later, restart the Appsmith pods. A file mounted with `subPath` isn't updated in a running pod.

### Another path for the file

To keep the file somewhere other than `/etc/krb5.conf`, set `APPSMITH_JAVA_ARGS` to point to it. For example, save it in the stacks folder and add this line to `stacks/configuration/docker.env`:

```bash
APPSMITH_JAVA_ARGS=-Djava.security.krb5.conf=/appsmith-stacks/configuration/krb5.conf
```

Use a path with no spaces. If `APPSMITH_JAVA_ARGS` already has a value, add this option to it, separated by a space. Restart Appsmith after you change `docker.env`.

Appsmith reads `krb5.conf` again each time it signs in. So you don't need to restart after you change the file itself, unless it is mounted with `subPath`.

## Create the datasource

1. Create a Microsoft SQL Server datasource. For the other fields, see [Microsoft SQL Server](/connect-data/reference/querying-mssql#connection-parameters).
2. Set **Host address** to the SQL Server host name registered in the SPN, such as `sql01.corp.example.com`. Set **Port** to the SQL Server port.
3. Set **Authentication type** to **Windows (Kerberos)**.
4. Set **Username** to the account as `user@REALM`, such as `svc_appsmith@CORP.EXAMPLE.COM`.
   - Appsmith changes the realm to capital letters for you.
   - Without `@REALM`, Appsmith uses `default_realm` from `krb5.conf`.
   - The `DOMAIN\user` form isn't supported.
5. Set **Password** to the account's password.
6. If you connect through a DNS alias, an IP address or a listener, set **Server SPN** to the name registered for SQL Server, such as `MSSQLSvc/sql01.corp.example.com:1433`. Otherwise leave it blank.
7. Click **Test configuration**, then **Save**.

## How Appsmith uses the account

- Appsmith signs in to the domain controller with the datasource's username and password. It never uses a Kerberos ticket that is already on the Appsmith server, so each datasource connects only as its own account.
- The password goes to the domain controller only. SQL Server receives a Kerberos ticket, not the password.
- One sign-in serves all of the datasource's connections, until shortly before the ticket expires.
- If sign-in fails, Appsmith waits before it tries again: 1 minute, then 2, 4 and 8, then every 15 minutes. This keeps a wrong or changed password from locking out the account. Each **Test configuration** click still tries once, so don't click it repeatedly with a wrong password.
- Every query in every app that uses the datasource runs as this one account. SQL Server can't tell which app user ran it.

## Limits

- **Export and Git:** exporting an app or connecting it to Git doesn't keep the datasource's credentials or its authentication type. After you import the app, set **Authentication type** to **Windows (Kerberos)** again and enter the username and password.
- **Password changes:** when the account's password changes or expires, the datasource stops connecting until you enter the new password.
- **One Kerberos setup per Appsmith server:** all datasources on the server use the same `krb5.conf`. To use accounts from more than one realm, list every realm in that file.
- **Downgrading Appsmith:** a version earlier than v2.8 doesn't know Windows authentication. It tries the account as a SQL Server login and fails with `Login failed`.

## Troubleshooting

Appsmith shows these messages when Windows authentication fails.

| Message | What to do |
| --- | --- |
| `Kerberos login failed for … Check the username and password, and that the account is enabled and not locked out.` | Check the username, realm and password. Ask your Active Directory admin whether the account is disabled or locked out. |
| `… The account's password has expired.` | Set a new password in Active Directory, then enter it in the datasource. |
| `… The clocks on the Appsmith server and the domain controller differ by more than 5 minutes.` | Sync the Appsmith server's clock, for example with NTP. |
| `… The domain controller does not know this realm.` | Check the part of the username after `@`. It must match the Active Directory domain. |
| `… Kerberos is not set up on the Appsmith server, or this realm is not in its krb5.conf.` | Check that `krb5.conf` is at `/etc/krb5.conf` in the container, or at the path in `APPSMITH_JAVA_ARGS`, and that it lists the realm. |
| `… The Appsmith server could not reach the domain controller on port 88.` | Check DNS, firewalls and, on Kubernetes, network policies between Appsmith and the domain controller. |
| `… Appsmith waits … seconds before it tries this account again …` | An earlier sign-in failed. Fix the cause shown before it. Saving or testing the datasource tries again at once. |
| `SQL Server's service name (SPN) is not registered in Active Directory.` | Register `MSSQLSvc/<host>:<port>` for the SQL Server service account, or enter the registered name in **Server SPN**. |
| `SQL Server did not accept the Kerberos ticket.` | The SPN may belong to a different account than the one SQL Server runs as, or SQL Server isn't joined to the domain. Check with `setspn -L`. |
| `The Kerberos login worked, but SQL Server refused the account.` | Create a SQL Server login for the account and give it access to the database. See [Prerequisites](#prerequisites). |

## See also

- [Microsoft SQL Server](/connect-data/reference/querying-mssql) - All connection parameters, query examples and data types.
- [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) - Help with other datasource errors.
