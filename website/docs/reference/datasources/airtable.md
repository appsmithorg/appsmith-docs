---
sidebar_position: 1
---

# Airtable

This page describes how to connect your application to your Airtable bases and use queries to manage their content.

## Connect to Airtable


To add an Airtable datasource, click the (**+**) sign in the **Explorer** tab next to **Datasources**. On the next screen, select the **Airtable** button. Your datasource is created and you are taken to a screen to configure its settings.




### Authentication type

<figure>
  <img src="/img/airtable-datasource-config.png" style={{width: "100%", height: "auto"}} alt="Configuring an Airtable datasource." />
  <figcaption align="center"><i>Configuring an Airtable datasource.</i></figcaption>
</figure>

:::info
Airtable has [deprecated their API Key](https://support.airtable.com/docs/airtable-api-key-deprecation-notice) style of authentication. Please use **Bearer Token** authentication using Airtable's Personal Access Tokens. If you must use an API Key, simply select the **API Key** authentication type and provide the key in the API Key field.
:::

You'll need to [create a Personal Access Token](https://airtable.com/create/tokens) in Airtable and provide it in your datasource configuration. Appsmith automatically handles sending your token in your request headers.

Once you're finished, click **Save** to save your datasource.

## Create queries

You can write [queries](https://docs.appsmith.com/core-concepts/data-access-and-binding/querying-a-database/query-settings) to fetch or write data to Airtable by selecting the **+ New Query**  button on the Airtable datasource page, or by clicking (**+**) next to **Queries/JS** in the **Explorer** tab and selecting your Airtable datasource. You'll be brought to a new query screen where you can write queries.

:::caution info
[The Airtable Web API is rate-limited](https://support.airtable.com/hc/en-us/articles/203313985-Public-REST-API) to 5 requests per second, per base. If you exceed this rate, your requests fail with a 429 status code for the next 30 seconds.
:::

In your queries, you'll need to specify the **Base ID** and **Table Name** to access your data.

The **Base ID** can be found in the URL of the webpage that displays your database. It's the first sub-string after `https://airtable.com/`, prefixed by `app`. For example:

```
https://airtable.com/appZueQaLuTv7fSXjJx/tblPhSJD7fdIKLY3j1/viwqRLKs978DFI6Q?blocks=hide
                     ^^^^^^^^^^^^^^^^^^^
// The Base ID for this URL is: appZueQaLuTv7fSXjJx
```

## List records

<figure>
  <img src="/img/airtable-query-screen.png" style={{width: "100%", height: "auto"}} alt="Configuring a List Records query." />
  <figcaption align="center"><i>Configuring a List Records query.</i></figcaption>
</figure>

Use the **List Records** command to fetch data from your Airtable base. You can use the query configuration settings to filter, sort, and format the data that's returned to your app.

Record data is returned according to the format:

```json
{
  "records": [
    {
      "id": "rec2BjrZNxNjhJ9dO",
      "createdTime": "2023-03-13T15:11:26.000Z",
      "fields": {
        "name": "Bob Jones",
        "employee_id": 1001,
        // ...
      }
    },
    // further records...
  ],
  "offset": "itr534r2Ro2QnjK3x/rec2BjrZNxNjhJ9dO"
}
```

To access your record fields in a widget, it's helpful to use a `map()` function:

```javascript
// binding response data to a Table widget
{{
  AirtableQuery.data.records.map(row => {
    return {
      "Name": row.fields.name,
      "Employee ID": row.fields.employee_id
    }
  })
}}
```

| **Parameter**         | **Description**                                                                    |
| --------------------- | ---------------------------------------------------------------------------------- |
| **Fields**            | Specifies which columns to return, omits the rest.                                 |
| **Filter by Formula** | Returns only the records where this Airtable formula is `true`.                    |
| **Max Records**       | Sets a limit for how many records are allowed to be selected in this query.        |
| **Page Size**         | Sets a limit for how many records can be returned at a time; others are sent in subsequent requests. |
| **Sort**              | Specifies which column to sort by.                                                 |
| **Cell Format**       | Sets whether certain values are returned in `string` or `json` format. For example, ticked checkboxes are `"checked"` in string format, or `true` in JSON format.  |
| **Time Zone**         | Sets the time zone to use for displaying date values.                              |
| **User Locale**       | Sets format for displaying dates according to locale.                              |
| **Offset**            | Takes an `offset` token from the query's prior response that requests the next page of data. |

### Filter and sort

Use the **Filter** setting to request only certain column values from your table records. This is useful for reducing the amount of data you're requesting when you only need a handful of values. Provide the names of the columns you want as an array of strings"

```javascript
["name", "employee_id"]
```

**Filter by formula** performs a check on each record in your base and returns it if the condition is true. Use this to filter your dataset with logical operations. This field expects a formula (such as `employee_id = 1001`) as a string; see [Airtable formulas](https://support.airtable.com/docs/formula-field-reference) for more information.

To have your data sorted in the response, use the **Sort** field. Provide the column names to sort by as an array of strings.

### Server side pagination

To limit the amount of records you receive at once, use **Page Size**; the default setting is 100 records per page.

When there are further pages of records available, the response to your query includes an `offset` key with a string token. Use this token in your query's **Offset** field in your next request to get the next page of data.

To paginate your Airtable query in a [Table widget](/reference/widgets/table):

In the **Offset** field, write:

```javascript
// query's Offset field
{{ this.params.offset || 0 }}
```

In your Table widget, enable **Server side pagination**. In the **onPageChange** event below it, enable JS and use this code, substituting the name of your query for `<query_name>`:

```javascript
// in the Table's onPageChange event
{{
  <query_name>.run({ offset: <query_name>.data.offset })
}}
```

Now when you click one of the page cycle buttons on your Table widget, the query is run again and uses the `offset` value from its previous execution if it exists. Otherwise, your query returns the first page of data.

---

**Example**: fetch all records from a table `users`, 10 records at a time, and put them into a Table widget `UsersTable` with columns for `name`, `date_of_birth`, and `employee_id`.

**Setup**: create a query called `FetchUsers` based on your Airtable datasource. This query should use the **List Records** command, and be configured with the **Base ID** and table name in their appropriate fields.

This query doesn't require filtering or sorting the data, so **Filter**, **Filter by Formula**, and **Sort** can be left blank.

Set the **Page Size** to 10 to limit the number of records you receive at once. To continue setting up pagination for your data, see [pagination](#pagination).

In the **Table Data** property of your Table widget, bind the result of your query:

```javascript
// in the Table Data property of UsersTable
{{
  FetchUsers.data.records.map(row => {
    return {
      "Name": row.fields.name,
      "Date of birth": row.fields.date_of_birth,
      "Employee ID": row.fields.employee_id
    }
  })
}}
```

Your table should fill with data when the query is run.


## Create a record

To add a new record to your Airtable base, use the **Create Records** command.

After you fill in fields for **Base ID** and **Table Name**, you just need to provide an array of objects to the **Records** field. Each object should have a `fields` key containing an object of columns and data:

```javascript
// query's Records field
[
  {
    "fields": {
      "name": "Amal Lee",
      "date_of_birth": "1989/11/2",
      "employee_id": 1005
    }
  },
  // ...
]
```
When records are created successfully, the response includes the data you submitted as well as the ID for each record.

---

**Example**: create a new record in a table `users` with columns for `name`, `date_of_birth`, and `employee_id`.

**Setup**: create your query called `CreateNewUser` based on your Airtable datasource. This query should use the **Create Records** command. Enter the appropriate values for **Base ID** and **Table Name**.

To gather data for the new record, create a [JSON Form](/reference/widgets/json-form) on the canvas called `NewUserForm`. You should already have fields for `name`, `date_of_birth`, and `employee_id`.

In JSON Form's Submit [button](/reference/widgets/button) properties, configure the **onClick** event to execute your query:

```javascript
// Submit button's onClick event
{{ InsertNewUser.run() }}
```

Once these form fields are filled out, you can add their values to your query in the **Records** field like below:

```javascript
// in the Row Object field of your query
{{
  [
    {
      "fields": {
        "name": NewUserForm.formData.name,
        "date_of_birth": NewUserForm.formData.date_of_birth,
        "employee_id": NewUserForm.formData.employee_id
      }
    }
  ]
}}

```

When the Submit button is clicked, your query is executed and the new record is inserted into your Airtable base.

## Update a record

Use the **Update Records** command to modify existing records in your spreadsheet.

After you fill in fields for **Base ID** and **Table Name**, you just need to provide an array of objects to the **Records** field. Each object should have an `id` key with the `id` of the record you are updating, and a `fields` key containing an object with the record's new data:

```javascript
// query's Records field
[
  {
    "id": "recdo3NkX7ucvnJTu"
    "fields": {
      "name": "Amal Lee",
      "date_of_birth": "1989/11/2",
      "employee_id": 1005
    }
  },
  // ...
]
```
When records are updated successfully, the response includes the data you submitted as well as the ID for each record.

---

**Example**: modify a record in a table `users` with columns for `name`, `date_of_birth`, and `employee_id`.

**Setup**: create your query called `UpdateUser` based on your Airtable datasource. This query should use the **Update Records** command. Enter the appropriate values for **Base ID** and **Table Name**. Finally, You should have a [Table widget](/reference/widgets/table) `UsersTable` containing your spreadsheet data from a [**List Records**](#list-records) query.

Create a [JSON Form widget](/reference/widgets/json-form) to use for submitting your updated data. It should come with fields for `name`, `date_of_birth`, and `employee_id`.

When a row is selected in the table, it would be helpful if the JSON Form's fields pre-filled with the row's existing data. To implement this, match the keys in the JSON Form's **Source Data** property with the values from the table row's cells:

```javascript
// JSON Form's Source Data property
{{
  {
    "name": UsersTable.selectedRow.name,
    "date_of_birth": UsersTable.selectedRow.date_of_birth,
    "employee_id": UsersTable.selectedRow.employee_id
  }
}}
```

In JSON Form's Submit [button](/reference/widgets/button) properties, configure the **onClick** event to execute your query:

```javascript
// Submit button's onClick event
{{ UpdateUser.run() }}
```

To add your modified row data to your query, reference them in its **Records** field. You must include the record's `id` in your submission to indicate which record to update. If your data came from an Airtable **List Records** operation, this value was returned in the original response.

```javascript
// in the Row Object field of your query
{{
  [
    {
      "id": UsersTable.selectedRow.rowIndex, // include the record's id
      "fields": {
        "name": NewUserForm.formData.name,
        "date_of_birth": NewUserForm.formData.date_of_birth,
        "employee_id": NewUserForm.formData.employee_id
      }
    }
  ]
}}
```

When the Submit button is clicked, your query is executed and the record is updated in your spreadsheet.

## Delete a record

Use the **Delete A Record** command to delete existing records in your spreadsheet.

After you fill in fields for **Base ID** and **Table Name**, you just need to provide a record's `id` in the **Record ID** field. Each object should have an `id` key with the `id` of the record you are updating, and a `fields` key containing an object with the record's new data:

```javascript
// in the Record field
recdo2NkX3ucpnOLb
```

When record is deleted successfully, the response includes the `id` of the deleted record.

---

**Example**: delete a record from a table `users`.

**Setup**: create your query called `DeleteUser` based on your Airtable datasource. This query should use the **Delete A Record** command. Enter the appropriate values for **Base ID** and **Table Name**. Finally, You should have a [Table widget](/reference/widgets/table) `UsersTable` containing your spreadsheet data from a [**List Records**](#list-records) query.

Create a [Button widget](/reference/widgets/button) on the canvas and update its **Label** to "Delete." Set its **onClick** event to execute your `DeleteUser` query:

```javascript
// in the Delete button's onClick event
{{ DeleteUser.run() }}
```

To delete a record, you need only provide the `id` of the record to delete. In your `DeleteUser` query's **Record ID** field, bind the value of the selected row of the `UsersTable`:

```javascript
// DeleteUser query's Row Index field
{{ UsersTable.selectedRow.id }}
```

Now when the button is clicked, the query is run and the corresponding row is deleted from your Airtable base.

## Commands

**Command** sets the type of action you want to perform with your query.

| **Command**           | **Description**                                                                    |
| ----------------------  | ---------------------------------------------------------------------------------- |
| **List Records**        | Fetch records from a base table.                                                   |
| **Create Records**      | Add new records to a base table.                                                   |
| **Delete A Record**     | Delete a record from a base table by its Record ID.                                |
| **Retrieve A Record**   | Fetch a single record by its Record ID.                                            |
| **Update Records**      | Update existing records in a base table, referenced by their Record ID.            |

## Further reading

* [Table widget](/reference/widgets/table)
* [Form widget](/reference/widgets/form)
* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)