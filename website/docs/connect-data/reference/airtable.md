---
sidebar_position: 1
description: Connect Appsmith to an Airtable base and create queries.
---

# Airtable

This page provides information for connecting your application to your Airtable base and for using queries to manage its content.

## Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to an Airtable base.

<figure>
  <img src="/img/airtable-datasource-config.png" style={{width: "100%", height: "auto"}} alt="Configuring an Airtable datasource." />
  <figcaption align="center"><i>Configuring an Airtable datasource.</i></figcaption>
</figure>

<dl>
  <dt><b>Authentication type</b></dt>
  <dd>Sets the method to use for authenticating your queries to Airtable. Appsmith automatically handles sending your token in your request headers.</dd><br/>
  <dd>

Airtable has [deprecated their API Key](https://support.airtable.com/docs/airtable-api-key-deprecation-notice) style of authentication. Please use **Personal access token** authentication if possible. If you must use an existing API Key, select the **API Key** authentication type and provide the key in the API Key field. Otherwise, you'll need to [create a Personal Access Token](https://airtable.com/create/tokens) in Airtable and provide it in your datasource configuration.

  </dd>
  <dd><i>Options:</i>
    <ul>
     <li><b>API key:</b> Connects to Airtable using the provided existing Airtable API Key.</li>
     <li><b>Personal access token:</b> Connects to Airtable using the provided Airtable Personal Access Token.</li>
    </ul>
  </dd>  
</dl>

## Create queries

The following section is a reference guide that provides a complete description of all the read and write operation commands with their parameters to create Airtable queries.

<figure>
  <img src="/img/airtable-query-screen.png" style={{width: "100%", height: "auto"}} alt="Configuring a List Records query." />
  <figcaption align="center"><i>Configuring a List Records query.</i></figcaption>
</figure>

:::caution info
[The Airtable Web API is rate-limited](https://support.airtable.com/hc/en-us/articles/203313985-Public-REST-API) to 5 requests per second, per base. If you exceed this rate, your requests fail with a 429 status code for the next 30 seconds.
:::

#### Find your Base ID

In your queries, you'll need to specify the **Base ID** and **Table Name** to access your data.

The **Base ID** can be found in the URL of the webpage that displays your database. It's the first sub-string after `https://airtable.com/`, prefixed by `app`. For example:

```
https://airtable.com/appZueQaLuTv7fSXjJx/tblPhSJD7fdIKLY3j1/viwqRLKs978DFI6Q?blocks=hide
                     ^^^^^^^^^^^^^^^^^^^
// The Base ID for this URL is: appZueQaLuTv7fSXjJx
```

### List records

This command to fetches data from your Airtable base. You can use the query configuration fields to filter, sort, and format the data that's returned to your app. The following section lists all the fields available for the **List records** command.

:::info
Appsmith is currently unable to support automatic parameter encoding for Airtable queries. Check the **Fields** and **Sort** parameter examples below, and see this [Airtable API URL Encoder](https://codepen.io/airtable/full/MeXqOg) for more help.
:::

<dl>
  <dt><b>Base ID</b></dt>
  <dd>

A string that uniquely identifies your Airtable base. Find this in your base's URL, [prefixed by `app`](#find-your-base-id).

  </dd>

  <dt><b>Table name</b></dt>
  <dd>

The name of the table to query from your base.
  
  </dd>

  <dt><b>Fields</b></dt>
  <dd>

Specifies which columns to return, omits the rest. Each column name must be written in this field in the format `fields%5B%5D=<COLUMN_NAME>`, and multiple of these columns should be separated by `&`.

For example, the following returns the columns `name` and `date-of-birth`:

```
fields%5B%5D=name&fields%5B%5D=date-of-birth
```

  </dd>

  <dt><b>Filter by formula</b></dt>
  <dd>

Returns only the records where this [Airtable formula](https://support.airtable.com/docs/formula-field-reference) is `true`.
  
  </dd>

  <dt><b>Max records</b></dt>
  <dd>

Sets a limit for how many records are allowed to be selected in this query.
  
  </dd>

  <dt><b>Page size</b></dt>
  <dd>

Sets an integer limit for how many records can be returned at a time; further results are sent in subsequent requests. The default value for this field is `100`.
  
  </dd>

  <dt><b>Sort</b></dt>
  <dd>

Specifies which column to sort results by. Each column name must be written in this field in the format `sort%5B0%5D%5Bfield%5D=<COLUMN_NAME>`

For example, the following value sorts the results by `name`:

```
sort%5B0%5D%5Bfield%5D=name
```
  
  </dd>

  <dt><b>Cell format</b></dt>
  <dd>

Sets whether certain values are returned in `string` or `json` format. For example, ticked checkboxes are `"checked"` in string format, or `true` in JSON format.
  
  </dd>

  <dt><b>Time zone</b></dt>
  <dd>

Sets the time zone to use for displaying date values, expects value like `'America/Chicago'`. See [all supported time zones](https://support.airtable.com/docs/supported-timezones-for-set-timezone).
  
  </dd>

  <dt><b>User locale</b></dt>
  <dd>

Sets format for displaying dates according to locale, expects value like `'hi'` for Hindi. See [all supported locales](https://support.airtable.com/docs/supported-locale-modifiers-for-set-locale).  
  
  </dd>

  <dt><b>Offset</b></dt>
  <dd>

This field expects an `offset` token from the query's prior response. That token acts as a cursor to tell your base where in its records to begin returning results.

  </dd>

</dl>

### Create records

This command creates new entries in your Airtable base. The following section lists all the fields available for the **Create records** command.

<dl>
  <dt><b>Base ID</b></dt>
  <dd>

A string that uniquely identifies your Airtable base. Find this in your base's URL, [prefixed by `app`](#find-your-base-id).

  </dd>

  <dt><b>Table name</b></dt>
  <dd>

The name of the table to query from your base.
  
  </dd>

  <dt><b>Records</b></dt>
  <dd>

Data for the new records to create. Expects an array of objects, where each object has a `fields` key containing an object of column key/value pairs. For example:

```javascript
[
  {
    "fields": {
      "name": {{ UserForm.data.name }},
      "date_of_birth": {{ UserForm.data.date_of_birth }},
      "employee_id": {{ UserForm.data.employee_id }}
    }
  },
]
```
  
  </dd>

</dl>

### Delete a record

This command deletes one entry in your Airtable base. The following section lists all the fields available for the **Delete a record** command.

<dl>
  <dt><b>Base ID</b></dt>
  <dd>

A string that uniquely identifies your Airtable base. Find this in your base's URL, [prefixed by `app`](#find-your-base-id).

  </dd>

  <dt><b>Table name</b></dt>
  <dd>

The name of the table to query from your base.
  
  </dd>

  <dt><b>Record ID</b></dt>
  <dd>

The string ID of the record to delete.
  
  </dd>

</dl>

### Retrieve a record

This command fetches one entry from your Airtable base by its string ID. The following section lists all the fields available for the **Retrieve a record** command.

<dl>
  <dt><b>Base ID</b></dt>
  <dd>

A string that uniquely identifies your Airtable base. Find this in your base's URL, [prefixed by `app`](#find-your-base-id).

  </dd>

  <dt><b>Table name</b></dt>
  <dd>

The name of the table to query from your base.
  
  </dd>

  <dt><b>Record ID</b></dt>
  <dd>

The string ID of the record to retrieve.
  
  </dd>

</dl>

### Update records

This command updates entries in your Airtable base, selected by their string IDs. The following section lists all the fields available for the **Update records** command.

<dl>
  <dt><b>Base ID</b></dt>
  <dd>

A string that uniquely identifies your Airtable base. Find this in your base's URL, [prefixed by `app`](#find-your-base-id).

  </dd>

  <dt><b>Table name</b></dt>
  <dd>

The name of the table to query from your base.
  
  </dd>

  <dt><b>Records</b></dt>
  <dd>

Data for the records to update. Expects an array of objects, where each object has an `id` key containing the ID of the record to update, and a `fields` key containing an object of column key/value pairs. For example:

```javascript
[
  {
    "id": {{ UsersTable.selectedRow.id }},
    "fields": {
      "name": {{ UsersTable.selectedRow.name }},
      "date_of_birth": {{ UsersTable.selectedRow.date_of_birth }},
      "employee_id": {{ UsersTable.selectedRow.employee_id }}
    }
  },
]
```
  
  </dd>

</dl>

