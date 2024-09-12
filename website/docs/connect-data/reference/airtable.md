---
sidebar_position: 1
description: Connect Appsmith to an Airtable base and create queries.
---

# Airtable

This page provides information for connecting your application to your Airtable base and for using queries to manage its content.

<VideoEmbed host="youtube" videoId="9aQe18DPYXI" title="Build a MongoDB Panel" caption="Build a MongoDB Panel"/>


## Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to an Airtable base.

<ZoomImage
  src="/img/airtable-datasource-config.png" 
  alt="Configuring an Airtable datasource"
  caption="Configuring an Airtable datasource"
/>

#### Authentication type

<dd>Sets the method to use for authenticating your queries to Airtable. Appsmith automatically handles sending your token in your request headers.</dd><br/>
<dd>
    <i>Options:</i>
  <ul>
    <li><b>API key:</b> This authentication type has been deprecated by Airtable. For more information, see <a href="https://support.airtable.com/docs/airtable-api-key-deprecation-notice">Airtable Api Key Deprecation Notice</a>.</li>
    <li><b>Personal access token:</b> Connects to Airtable using the provided Airtable Personal Access Token.</li>
  </ul>
</dd>

## Create queries

The following section is a reference guide that provides a complete description of all the read and write operation commands with their parameters to create Airtable queries.

<ZoomImage
  src="/img/airtable-query-screen.png" 
  alt="Configuring a List Records query"
  caption="Configuring a List Records query"
/>

:::caution
[The Airtable Web API is rate-limited](https://support.airtable.com/hc/en-us/articles/203313985-Public-REST-API) to 5 requests per second, per base. If you exceed this rate, your requests fail with a 429 status code for the next 30 seconds.
:::



#### Find your Base ID

In your queries, you'll need to specify the **Base ID** and **Table Name** to access your data.

The **Base ID** can be found in the URL of the webpage that displays your database. It's the first sub-string after `https://airtable.com/`, prefixed by `app`. For example, the Base ID for the following URL is `appZueQaLuTv7fSXjJx`:

```
https://airtable.com/appZueQaLuTv7fSXjJx/tblPhSJD7fdIKLY3j1/viwqRLKs978DFI6Q?blocks=hide
```

For more information, see [Finding Airtable IDs](https://support.airtable.com/docs/finding-airtable-ids).

### List records

This command to fetches data from your Airtable base. You can use the query configuration fields to filter, sort, and format the data that's returned to your app. The following section lists all the fields available for the **List records** command.

#### Base ID

<dd>

A string that uniquely identifies your Airtable base. To find your Base ID, see [Find your Base ID](#find-your-base-id).

</dd>

#### Table name

<dd>

The name of the table to query from your base.

</dd>

#### Fields

<dd>

Specifies which columns to return. If left blank, all columns are returned. The input to this field must be encoded using the JavaScript [`encodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) method. See below:

Each column to return is written as `fields[]=COLUMN_NAME`. For example, to return a column called `name`:

```javascript
{{ encodeURI("fields[]=name") }}
```

To return multiple columns, separate the strings with `&`. For example, to return both `name` and `date_of_birth`:

```javascript
{{ encodeURI("fields[]=name") + "&" + encodeURI("fields[]=date_of_birth") }}
```

Below, a variable number of columns are chosen with a [Multi-Select widget](/reference/widgets/multiselect) and each is encoded and joined with an `&`:

```javascript
{{
  MultiSelect1.selectedOptionValues.map(value => {
    return encodeURI(`fields[]=${value}`)
  }).join("&")
}}
```

</dd>

#### Filter by formula

<dd>

Expects an [Airtable formula](https://support.airtable.com/docs/formula-field-reference), which only returns the records where the formula evaluates to `true`. For example:

You can return only records where the `permissionLevel` column is `admin`:

```javascript
permissionLevel = "admin"
```

Or you can return records where the percentage of positive reviews are above an 85% threshold:

```javascript
goodReviews / SUM(goodReviews, badReviews) > .85
```
  
</dd>

#### Max records

<dd>

Sets a limit for how many records are allowed to be selected in this query.
  
</dd>

#### Page size

<dd>

Sets an integer limit for how many records can be returned at a time; further results are sent in subsequent requests. The default value for this field is `100`.
  
</dd>

#### Sort

<dd>

Specifies which column to sort results by. The input for this field must be encoded using the JavaScript [`encodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) method. See below:
  
Each column to sort by is written as `sort[SORT_LEVEL_INDEX][field]=COLUMN_NAME`. For example, to sort by a column called `name`:

```javascript
{{ encodeURI("sort[0][field]=name") }}
```

To sort by multiple columns, separate the strings with `&`. For example, to sort by `name` and then by `date_of_birth`:

```javascript
{{ encodeURI("sort[0][field]=name") + "&" + encodeURI("sort[1][field]=date_of_birth") }}
```

Below, a variable number of columns are chosen with a [Multi-Select widget](/reference/widgets/multiselect) and each is encoded and joined with an `&`:

```javascript
{{
  MultiSelect1.selectedOptionValues.map((value, index) => {
    return encodeURI(`sort[${index}][field]=${value}`)
  }).join("&")
}}
```

</dd>

#### Cell format

<dd>

Sets whether certain values are returned in `string` or `json` format. For example, ticked checkboxes are `"checked"` in string format, or `true` in JSON format.
  
</dd>

#### Time zone

<dd>

Sets the time zone to use for displaying date values, expects value like `'America/Chicago'`. For more information, see [Supported Timezones for SET_TIMEZONE](https://support.airtable.com/docs/supported-timezones-for-set-timezone).
  
</dd>

#### User locale

<dd>

Sets format for displaying dates according to locale, expects a value like `'en-gb'` for British English. For more information, see [Supported locale modifiers for SET_LOCALE](https://support.airtable.com/docs/supported-locale-modifiers-for-set-locale).  
  
</dd>

#### Offset

<dd>

This field expects an `offset` token from the query's prior response. That token acts as a cursor to tell your base where in its records to begin returning results.

</dd>


### Create records

This command creates new entries in your Airtable base. The following section lists all the fields available for the **Create records** command.

#### Base ID

<dd>

A string that uniquely identifies your Airtable base. To find your Base ID, see [Find your Base ID](#find-your-base-id).

</dd>

#### Table name

<dd>

The name of the table to query from your base.

</dd>

#### Records

<dd>

Data for the new records to create. Expects an array of objects, where each object has a `fields` key containing an object of column key-value pairs. For example:

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


### Delete a record

This command deletes one entry in your Airtable base. The following section lists all the fields available for the **Delete a record** command.

#### Base ID

<dd>

A string that uniquely identifies your Airtable base. To find your Base ID, see [Find your Base ID](#find-your-base-id).

</dd>

#### Table name

<dd>

The name of the table to query from your base.

</dd>

#### Record ID

<dd>

The string ID of the record to delete.

</dd>

### Retrieve a record

This command fetches one entry from your Airtable base by its string ID. The following section lists all the fields available for the **Retrieve a record** command.

#### Base ID

<dd>

A string that uniquely identifies your Airtable base. To find your Base ID, see [Find your Base ID](#find-your-base-id).

</dd>

#### Table name

<dd>

The name of the table to query from your base.

</dd>

#### Record ID

<dd>

The string ID of the record to retrieve.

</dd>

### Update records

This command updates entries in your Airtable base, selected by their string IDs. The following section lists all the fields available for the **Update records** command.

#### Base ID

<dd>

A string that uniquely identifies your Airtable base. To find your Base ID, see [Find your Base ID](#find-your-base-id).

</dd>

#### Table name

<dd>

The name of the table to query from your base.

</dd>

#### Records

<dd>

Data for the records to update. Expects an array of objects, where each object has an `id` key containing the ID of the record to update, and a `fields` key containing an object of column key-value pairs. For example:

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



## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or contact the support team using the chat widget at the bottom right of this page.

## See Also

- [Display and Lookup Data in Table](/build-apps/how-to-guides/display-search-and-filter-table-data) - Learn how to display query results in a Table and enable users to look up data with ease.
- [Search and Filter Table Data](/build-apps/how-to-guides/search-and-filter-table-data) - Guide on adding search and filter functionality to Tables for better data navigation.
- [Update Data](/build-apps/how-to-guides/submit-form-data) - Understand how to update data in your application using Form widget.
- [Insert Data](/build-apps/how-to-guides/insert-data) - Step-by-step instructions on inserting new records into your database using Form widget.
