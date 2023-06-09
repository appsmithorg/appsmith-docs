---
sidebar_position: 16
---
# Snowflake

This page provides information for connecting your application to your Snowflake database and using queries to manage its content.


## Connect Snowflake

:::caution important
To connect to Snowflake, you must whitelist the IP addresses 18.223.74.85 and 3.131.104.27 of the Appsmith deployment, as well as your own machine's IP address. See Snowflake's [Network Policies](https://docs.snowflake.com/en/user-guide/network-policies#creating-network-policies) docs for more details.
:::

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to a Snowflake database.

<figure>
  <img src="/img/snowflake-datasource-config.png" style={{width: "100%", height: "auto"}} alt="Configuring a Snowflake datasource." />
  <figcaption align="center"><i>Configuring a Snowflake datasource.</i></figcaption>
</figure>

<dl>
  <dt><b>Account Name</b></dt>
  <dd>This field expects an identifier for your Snowflake account. This consists of your organization name and your account name separated by a hyphen: <code>orgName-accountName</code>. You can find your organization name and account name on the Snowflake dashboard at the bottom-left of the page; click the string next to the Snowflake logo to open an information box with your details.</dd><br />

  <figure>
    <img src="/img/snowflake-account-name.png" style={{width: "100%", height: "auto"}} alt="Find your account name on the Snowflake dashboard at the bottom-left of the page." />
    <figcaption align="center"><i>Find your account name on the Snowflake dashboard at the bottom-left of the page.</i></figcaption>
  </figure>

  <dt><b>Warehouse</b></dt>
  <dd>Specifies the virtual warehouse to use once connected.</dd><br />

  <dt><b>Database</b></dt>
  <dd>Specifies the database to use once connected.</dd><br />

  <dt><b>Default Schema</b></dt>
  <dd>Sets which database schema structure should appear as a preview in the Appsmith sidebar; when this is configured, you can see the tables and columns available under the specified schema. The field does not limit which schemas you are able to query.</dd><br />
  
  <dt><b>Role</b></dt>
  <dd>The role to use for performing queries.</dd><br />

  <dt><b>Username</b></dt>
  <dd>The username for your Snowflake account.
  </dd><br />

  <dt><b>Password</b></dt>
  <dd>The password for your Snowflake account.
  </dd><br />
</dl>

## Query Snowflake

The following section provides examples of creating basic CRUD queries for Snowflake.

### Fetch data

```sql
SELECT * FROM customer
OFFSET {{ CustomerTable.pageOffset }} ROWS
FETCH NEXT {{ CustomerTable.pageSize }} ROWS ONLY;
```

In the above example, `CustomerTable` is the name of the Table widget used to display the data using [**server-side pagination**](/reference/widgets/table#server-side-pagination) to control how much data is queried at once.

### Insert data

```sql
INSERT INTO customer
  (id, name, address, email)
VALUES
(
  DEFAULT,
  {{ NameInput.text }},
  {{ AddressInput.text }},
  {{ EmailInput.text }}
);
```

In the above example, `NameInput`, `AddressInput`, and `EmailInput` are the names of the widgets used to capture input from the user for name, address, and email fields, respectively.

### Update data

```sql
UPDATE customer
  SET email = {{ EmailInput.text }}
  WHERE id = {{ CustomerTable.selectedRow.id }};
```

In the above example, `EmailInput` is the name of the Input widget used to capture the email entered by the user. `CustomerTable` is the Table widget where the user selects the row to update the user's email.

### Delete data

```sql
DELETE FROM customer WHERE id = {{ CustomerTable.selectedRow.id }};
```

In the above example, `CustomerTable` is the name of the Table widget where the user selects the row for deletion.

## See also

[Data access and binding](/core-concepts/data-access-and-binding)
