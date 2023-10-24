# Insert and Update data in SQL

This guide shows you how to insert and update data in a PostgreSQL database. The query configuration may differ when working with other SQL database.


## Prerequisites

* App Connected to [PostgreSQL](/connect-data/reference/querying-postgres) datasource.
* A [Table widget](/reference/widgets/table) connected to a query that holds the data you want to edit and update.
* [Form](/reference/widgets/form) widget or a [JSON Form](/reference/widgets/json-form) Widget to insert or update data.


## Insert single row

 To insert data, you can either use the Table widget's inline editing feature to insert data directly from the Table or use a JSON Form/Form widget. If you want to insert a single row of data into a specific table in your database, follow these steps:

*Example*: you have a `user` table and you want to insert data into it using a JSON form.

1. Connect the [**Source Data**](/reference/widgets/json-form#source-data-json) property of the JSON form with the Table widget to get the data format.

2. Configure the query to insert data using [formData](/reference/widgets/json-form#formdata-object) reference property:

<dd>

```sql
-- For Form widget, you can use {{Form1.data.Input1}}
-- For Table inline editing: {{Table1.newRow.id}}

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


```



</dd>

3. Turn off prepared statements in the query editor for this configuration. For more details, see [Prepared Statements](/connect-data/concepts/how-to-use-prepared-statements).




4. Set the JSON form widget's [onSubmit](/reference/widgets/json-form#onsubmit) event to execute the insert query.

## Insert multiple rows

To insert multiple rows of data, for instance uploading data from a CSV or Excel file, you can use the FilePicker widget.


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


## Update single row

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

## Update multiple rows

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

The query updates the `name` and `phone` fields for multiple rows in the "users" table. It does so by applying conditional changes based on the data provided in the updatedRows property of a Table widget. 

</dd>

4. Turn off prepared statements in the query editor for this configuration. For more details, see [Prepared Statements](/connect-data/concepts/how-to-use-prepared-statements).



5. Configure a Button widget, and set its **onClick** event to run the update query, and the onSuccess callback to trigger the fetch query that refreshes the table data with the updated information.



