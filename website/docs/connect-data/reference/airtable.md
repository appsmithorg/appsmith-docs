---
sidebar_position: 1
---

# Airtable

This page describes how to connect your application to your Airtable bases and use queries to manage their content.

<VideoEmbed host="youtube" videoId="cmr2-SsBR3w" title="Build CRUD apps with Appsmith and Airtable" caption="Build CRUD apps with Appsmith and Airtable"/>

## Connect to Airtable

<figure>
  <img src="/img/airtable-datasource-config.png" style={{width: "100%", height: "auto"}} alt="Configuring an Airtable datasource." />
  <figcaption align="center"><i>Configuring an Airtable datasource.</i></figcaption>
</figure>

To add an Airtable datasource, click the (**+**) sign in the **Explorer** tab next to **Datasources**. On the next screen, select the **Airtable** button. Your datasource is created and you are taken to a screen to configure its settings.

### Authentication type

:::info
Airtable has [deprecated their API Key](https://support.airtable.com/docs/airtable-api-key-deprecation-notice) style of authentication. Please use **Bearer Token** authentication using Airtable's Personal Access Tokens. If you must use an API Key, simply select the **API Key** authentication type and provide the key in the API Key field.
:::

You'll need to [create a Personal Access Token](https://airtable.com/create/tokens) in Airtable and provide it in your datasource configuration. Appsmith automatically handles sending your token in your request headers.

Once you're finished, click **Save** to save your datasource.

## Create queries

<figure>
  <img src="/img/airtable-query-screen.png" style={{width: "100%", height: "auto"}} alt="Configuring a List Records query." />
  <figcaption align="center"><i>Configuring a List Records query.</i></figcaption>
</figure>

You can write [queries](https://docs.appsmith.com/connect-data/reference/query-settings) to fetch or write data to Airtable by selecting the **+ New Query**  button on the Airtable datasource page, or by clicking (**+**) next to **Queries/JS** in the **Explorer** tab and selecting your Airtable datasource. You'll be brought to a new query screen where you can write queries.

<a name="base-id"></a>

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

When binding your data to a [Table](/reference/widgets/table) or [List widget](/reference/widgets/list), it's helpful to use a `map()` function:

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
| **Base ID**           | A string that uniquely identifies your Airtable base. Find this in your base's URL [prefixed by `app`](#base-id).    |
| **Table Name**        | Name of the table to query from your base.                                         |
| **Fields**            | Specifies which columns to return, omits the rest. `fields%5B%5D=<COLUMN_NAME>`    |
| **Filter by Formula** | Returns only the records where this Airtable formula is `true`.                    |
| **Max Records**       | Sets a limit for how many records are allowed to be selected in this query.        |
| **Page Size**         | Sets a limit for how many records can be returned at a time; others are sent in subsequent requests. |
| **Sort**              | Specifies which column to sort by. `sort%5B0%5D%5Bfield%5D=<COLUMN_NAME>`          |
| **Cell Format**       | Sets whether certain values are returned in `string` or `json` format. For example, ticked checkboxes are `"checked"` in string format, or `true` in JSON format.  |
| **Time Zone**         | Sets the time zone to use for displaying date values, expects value like `'America/Chicago'`. See [all supported time zones](https://support.airtable.com/docs/supported-timezones-for-set-timezone).                              |
| **User Locale**       | Sets format for displaying dates according to locale, expects value like `'hi'` for Hindi. See [all supported locales](https://support.airtable.com/docs/supported-locale-modifiers-for-set-locale).                          |
| **Offset**            | Takes an `offset` token from the query's prior response that requests the next page of data. |

### Filter and sort

:::info
Appsmith is currently unable to support automatic parameter encoding for Airtable queries. Check the Filter and Sort examples below, and see this [Airtable API URL Encoder](https://codepen.io/airtable/full/MeXqOg) for more help.
:::

Use the **Filter** setting to request only certain column values from your table records. This is useful for reducing the amount of data you're requesting when you only need a handful of values. To provide a search field, enter the name of the column to sort by prefixed with the string: `fields%5B%5D=`.

```javascript
// Return only "Name" column, chosen with Select widget
fields%5B%5D={{ ColumnSelect.selectedOptionValue }}
// evaluates to: fields%5B%5D=name
```
```javascript
// Return "Name" and "Employee ID" columns, chosen with MultiSelect widget
{{
  `fields%5B%5D=${ColumnsSelect.selectedOptionValues.join('&fields%5B%5D=')}`
}}
// evaluates to: fields%5B%5D=name&fields%5B%5D=employee_id
```

**Filter by formula** performs a check on each record in your base and returns it if the condition is true. Use this to filter your dataset with logical operations. This field expects a formula (such as `employee_id = 1001`) as a string; see [Airtable formulas](https://support.airtable.com/docs/formula-field-reference) for more information.

To have your data sorted in the response, use the **Sort** field. To provide a search field, enter the name of the column to sort by prefixed with the string: `sort%5B0%5D%5Bfield%5D=`.

```javascript
// Sort by "Employee ID" column, chosen with Select widget
sort%5B0%5D%5Bfield%5D={{ SortSelect.selectedOptionValue }}
// evaluates to: sort%5B0%5D%5Bfield%5D=employee_id
```
```javascript
// Sort by "Employee ID" column in descending order
sort%5B0%5D%5Bfield%5D={{ SortSelect.selectedOptionValue }}&sort%5B0%5D%5Bdirection%5D={{ DirectionSelect.selectedOptionValue }}
// evaluates to: sort%5B0%5D%5Bfield%5D=employee_id&sort%5B0%5D%5Bdirection%5D=desc
```

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

#### Example

> Fetch all records from a table `Bugs and issues`, 10 records at a time, and put them into a Table widget `IssueTable` with columns for `name`, `opened_date`, and `days_old`.

:::info
This example uses the "Bug Tracker" Airtable base template. [Fork this template](https://www.airtable.com/templates/bug-tracker/expOzMycWirMsUOTL) to follow along.
:::

* Create a query called `FetchIssues` based on your Airtable datasource. This query should use the **List Records** command, and be configured with the **Base ID** and table name in their appropriate fields.

  This query doesn't require filtering or sorting the data, so **Filter**, **Filter by Formula**, and **Sort** can be left blank.

* Set the **Page Size** to 10 to limit the number of records you receive at once. To continue setting up pagination for your data, see [pagination](#pagination).

* In the **Table Data** property of your Table widget, bind the result of your query:

  ```javascript
  // in the Table Data property of UsersTable
  {{
    FetchIssues.data.records.map(record => {
      return {
        name: record.fields.Name,
        opened_date: record.fields["Opened date"],
        days_old: record.fields["Days old"]
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

| **Parameter**         | **Description**                                                                    |
| --------------------- | ---------------------------------------------------------------------------------- |
| **Base ID**           | A string that uniquely identifies your Airtable base. Find this in your base's URL [prefixed by `app`](#base-id).    |
| **Table Name**        | Name of the table to query from your base.                                         |
| **Records**           | Data for the new records to create. Expects an array of objects.                   |

---

#### Example

> Create a new record in a table `Bugs and issues` with columns for `name`, `opened_date`, and `days_old`.

:::info
This example uses the "Bug Tracker" Airtable base template. [Fork this template](https://www.airtable.com/templates/bug-tracker/expOzMycWirMsUOTL) to follow along.
:::

* Create your query called `CreateIssue` based on your Airtable datasource. This query should use the **Create Records** command. Enter the appropriate values for **Base ID** and **Table Name**.

* To gather data for the new record, create a [JSON Form](/reference/widgets/json-form) on the canvas called `NewIssueForm`. Add **Source Data** to the JSON Form to create input fields:

```json
{{
  {
    name: "",
    opened_date: "",
    days_old: ""
  }
}}
```

* In JSON Form's Submit [button](/reference/widgets/button) properties, configure the **onClick** event to execute your query:

  ```javascript
  // Submit button's onClick event
  {{ CreateIssue.run() }}
  ```

* Once these form fields are filled out, you can add their values to your query in the **Records** field like below:

  ```javascript
  // in the Row Object field of your query
  {{
    [
      {
        "fields": {
          "name": NewIssueForm.formData.name,
          "opened_date": NewIssueForm.formData.opened_date,
          "days_old": NewIssueForm.formData.days_old
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

| **Parameter**         | **Description**                                                                    |
| --------------------- | ---------------------------------------------------------------------------------- |
| **Base ID**           | A string that uniquely identifies your Airtable base. Find this in your base's URL [prefixed by `app`](#base-id).    |
| **Table Name**        | Name of the table to query from your base.                                         |
| **Records**           | Data for the records to update. Expects an array of objects.                       |

---

#### Example

> Modify a record in a table `Bugs and issues` with columns for `name`, `opened_date`, and `days_old`.

:::info
This example uses the "Bug Tracker" Airtable base template. [Fork this template](https://www.airtable.com/templates/bug-tracker/expOzMycWirMsUOTL) to follow along.
:::

* Create your query called `UpdateIssue` based on your Airtable datasource. This query should use the **Update Records** command. Enter the appropriate values for **Base ID** and **Table Name**. Finally, You should have a [Table widget](/reference/widgets/table) `IssueTable` containing your spreadsheet data from a [**List Records**](#list-records) query.

* Create a [JSON Form widget](/reference/widgets/json-form) called `UpdateIssueForm` to use for submitting your updated data. Add **Source Data** to the JSON Form to create input fields. Reference the existing row in the Table widget to have the form fields pre-filled:

```json
{{
  {
    name: IssueTable.selectedRow.name,
    opened_date: IssueTable.selectedRow.opened_date,
    days_old: IssueTable.selectedRow.days_old
  }
}}
```

* In JSON Form's Submit [button](/reference/widgets/button) properties, configure the **onClick** event to execute your query:

  ```javascript
  // Submit button's onClick event
  {{ UpdateIssue.run() }}
  ```

* To add your modified row data to your query, reference them in its **Records** field. You must include the record's `id` in your submission to indicate which record to update. If your data came from an Airtable **List Records** operation, this value was returned in the original response.

  ```javascript
  // in the Row Object field of your query
  {{
    [
      {
        "id": IssueTable.selectedRow.rowIndex, // include the record's id
        "fields": {
          "name": UpdateIssueForm.formData.name,
          "opened_date": UpdateIssueForm.formData.opened_date,
          "days_old": UpdateIssueForm.formData.days_old
        }
      }
    ]
  }}
  ```

When the Submit button is clicked, your query is executed and the record is updated in your database.

## Delete a record

Use the **Delete A Record** command to delete existing records in your spreadsheet.

After you fill in fields for **Base ID** and **Table Name**, you just need to provide a record's `id` in the **Record ID** field. Each object should have an `id` key with the `id` of the record you are updating, and a `fields` key containing an object with the record's new data:

```javascript
// in the Record field
recdo2NkX3ucpnOLb
```

When record is deleted successfully, the response includes the `id` of the deleted record.

| **Parameter**         | **Description**                                                                    |
| --------------------- | ---------------------------------------------------------------------------------- |
| **Base ID**           | A string that uniquely identifies your Airtable base. Find this in your base's URL [prefixed by `app`](#base-id).    |
| **Table Name**        | Name of the table to query from your base.                                         |
| **Record ID**         | Record ID of the record to delete.                                                 |

---

#### Example

> Delete a record from a table `Bugs and issues`.

:::info
This example uses the "Bug Tracker" Airtable base template. [Fork this template](https://www.airtable.com/templates/bug-tracker/expOzMycWirMsUOTL) to follow along.
:::

* Create your query called `DeleteIssue` based on your Airtable datasource. This query should use the **Delete A Record** command. Enter the appropriate values for **Base ID** and **Table Name**. Finally, You should have a [Table widget](/reference/widgets/table) `IssueTable` containing your spreadsheet data from a [**List Records**](#list-records) query.

* Create a [Button widget](/reference/widgets/button) on the canvas and update its **Label** to "Delete." Set its **onClick** event to execute your `DeleteIssue` query:

  ```javascript
  // in the Delete button's onClick event
  {{ DeleteIssue.run() }}
  ```

* To delete a record, you need only provide the `id` of the record to delete. In your `DeleteIssue` query's **Record ID** field, bind the value of the selected row of the `IssueTable`:

  ```javascript
  // DeleteUser query's Row Index field
  {{ IssueTable.selectedRow.id }}
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

* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)
* [Table widget](/reference/widgets/table)
* [Form widget](/reference/widgets/form)
