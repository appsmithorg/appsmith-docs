# Insert and Update data in SQL

This guide shows you how to insert and update data in a SQL database

## Prerequisites

* App Connected to [PostgreSQL](/connect-data/reference/querying-postgres) datasource.
* A [Table widget](/reference/widgets/table) connected to a query that holds the data you want to edit and update.
* [Form](/reference/widgets/form) widget or a [JSON Form](/reference/widgets/json-form) Widget to insert or update data.

:::info
When prepared statements are enabled and widget bindings are used, quotes are not required.
:::

##  Insert query

The INSERT query in SQL is a command used for adding new records to a database table, for managing and maintaining your database. To insert data, you can either use the Table widget's inline editing feature to insert data directly from the Table or use a JSON Form/Form widget.

If you are using the one-click binding feature for Table or JSON form,  Appsmith automatically generates insert queries for you. However, if you prefer to manually configure the insert query, you can do so by following the instructions in this section.

### Insert single row

If you want to insert a single row of data into a specific table in your database, follow these steps:

*Example*: you have a `user` table and you want to insert data into it using a JSON form.

1. Connect the **Source Data** property of the JSON form with the Table widget to get the data format.

2. Configure the query to insert data using [formData](/reference/widgets/json-form#formdata-object) reference property:

<dd>

```sql
INSERT INTO users 
(id, phone, name, gender, latitude, longitude, dob, email, image, country) 
VALUES 
(
   {{ JSONForm1.formData.id}}, 
   {{ JSONForm1.formData.phone }}, 
   {{ JSONForm1.formData.name }}, 
   {{ JSONForm1.formData.gender }}, 
   {{ JSONForm1.formData.latitude }}, 
   {{ JSONForm1.formData.longitude }}, 
   {{ JSONForm1.formData.dob }}, 
   {{ JSONForm1.formData.email }}, 
   {{ JSONForm1.formData.image }}, 
   {{ JSONForm1.formData.country }}
);

-- For Form widget, you can use {{Form1.data.Input1}}
-- For Table inline editing: {{Table1.newRow.id}}
```

This query inserts data from a JSON form into the `users` table, populating various columns with data from a JSON form.

</dd>

3. Set the JSON form widget's [onSubmit](/reference/widgets/json-form#onsubmit) event to execute the insert query.

### Bulk Insert

To insert or upload multiple rows of data, for instance, from a CSV or Excel file, you can use the FilePicker widget.


1. In the Filepicker widget, select **Array of Objects** from the Data Format property. 

2. Configure the query to insert data using [files](/reference/widgets/filepicker#files-array) reference property:

<dd>


```sql
INSERT INTO users (id, phone, name, gender, latitude, longitude, dob, email, image, country)
SELECT
	id,
	phone, 
	name,
    gender, 
	latitude, 
	longitude,
    dob, 
    email, 
    image, 
    country
FROM json_populate_recordset(null::users, '{{FilePicker1.files[0].data}}');
```

:::note
Ensure that you turn off prepared statements in the query editor for this configuration. For more details, see [Prepared Statements](/connect-data/concepts/how-to-use-prepared-statements).
:::


</dd>

3. Set the Filepicker widget's **onFilesSelected** event to execute the query.



After completing the above steps, you can select a file from your local machine to upload and insert data.


## Update query

The UPDATE query in SQL is a command for modifying existing records in a database table. 

If you are using the one-click binding feature for Table or JSON form,  Appsmith automatically generates update queries for you. However, if you prefer to manually configure the update query, you can do so by following the instructions in this section.

### Update single row

To update single row, you can either use the Table widget's inline editing feature to update data directly from the Table or use a JSON Form/Form widget.

*Example*: if you have a `user` table, and you need to update the `name` and `phone` fields for a specific record.

1. Connect the **Source Data** property of the JSON form with the Table widget to get the current data.

2. Configure the query to insert data using [formData](/reference/widgets/json-form#formdata-object) reference property:

<dd>

```sql
UPDATE users SET 
  name = {{JSONForm1.formData.name}},
  phone = {{JSONForm1.formData.phone}}
  WHERE id = {{ JSONForm1.formData.id }};

-- For Form widget, you can use {{Form1.data.Input1}}
-- For Table inline editing: {{ Table1.updatedRow.id }}
```


</dd>

3. Set the JSON form widget's [onSubmit](/reference/widgets/json-form#onsubmit) event to execute the update query.

### Update multiple rows

To update multiple rows at once, use the Table widget's inline editing feature.

*Example*: if you want to modify the `name` and `phone` columns for multiple users in a database.

1. In the Table widget's property pane, select **Multiple rows** from the **Update mode** property. 

2. Configure the columns you want to enable for inline editing and set the **Primary Key** column for row identification during updates.

3. Configure the query to insert data using [updatedRows](/reference/widgets/table#updatedrows-arrayobject) reference property:

<dd>

```sql
UPDATE users
SET name = CASE
  {{Table1.updatedRows.map((user) => `WHEN id = ${user.id} THEN '${user.updatedFields.name}'`).join('\n')}}
END,
phone = CASE
 {{Table1.updatedRows.map((user) => `WHEN id = ${user.allFields.id} THEN '${user.updatedFields.phone}'`).join('\n')}}
END
WHERE id IN ({{Table1.updatedRows.map((user) => user.allFields.id).join(',')}});
```
:::note
Ensure that you turn off prepared statements in the query editor for this configuration. For more details, see [Prepared Statements](/connect-data/concepts/how-to-use-prepared-statements).
:::

</dd>

4. Configure a Button widget, and set its **onClick** event to run the update query, and the onSuccess callback to trigger the fetch query that refreshes the table data with the updated information.



