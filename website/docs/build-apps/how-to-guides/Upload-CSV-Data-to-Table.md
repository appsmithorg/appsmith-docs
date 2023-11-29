---
description: This page shows you how to upload an array of objects, such as CSV, XLS(X), JSON, or TSV files, into a Table widget using a Filepicker widget.
---

# Display and Insert CSV Data in Table

This page shows you how to upload CSV, XLS(X), JSON, or TSV files into a Table widget using a Filepicker widget.


 <figure>
  <img src="/img/uploadcsv.gif" style= {{width:"810px", height:"auto"}} alt="Upload CSV data in Table using Filepicker"/>
  <figcaption align = "center"><i>Upload CSV data in Table using Filepicker</i></figcaption>
</figure>

## Prerequisites

* A datasource containing the data to display. For the list of datasources supported by Appsmith, see [Datasources](/connect-data/reference).
* A [Table](/reference/widgets/table) widget to display data.
* A [Filepicker](/reference/widgets/filepicker) widget to upload files.


:::caution
Any file exceeding 5 MB will be stored as a blob URL, with a maximum file size of 100 MB.
:::

## Display CSV data in Table

Follow these steps to configure the Filepicker widget to upload files:

1. In the Filepicker widget, select **Array of Objects** from the [**Data Format**](/reference/widgets/filepicker#data-format-string) property. This step allows you to specify the data format of the uploaded files.

2. Bind the uploaded CSV file to the Table widget using the [**Table data**](/reference/widgets/table#table-data-arrayobject) property, like:

<dd>

```js
{{FilePicker1.files[0].data}}
```

</dd>

After completing the above steps, you can select a file from your local machine to upload and display it in the Table widget.

## Insert multiple rows using CSV data
To insert multiple rows using CSV data and a Filepicker widget, follow these steps:
1. Select **Array of Objects** as the **Data format** in the Filepicker widget's property.
2. Add a query to insert multiple rows into your datasource using the `files` property of the Filepicker widget. For example to insert multiple rows into a PostgreSQL datasource use the following code where `users` is the table and `user_details` is the Filepicker widget:
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
      FROM json_populate_recordset(null::users, '{{user_details.files[0].data}}');
   ```
   Appsmith automatically parses the CSV file and converts the data to JSON format. This example uses [json_populate_recordset](https://www.postgresql.org/docs/current/functions-json.html) function to the JSON array to a set of specified SQL-typed values.
   
   :::caution important
   Column details in the CSV should match the column details in the datasource. Appsmith does not insert data for a mismatched column.
   :::

  3. In the Filepicker widget's property pane, set the **onFileSelected** event to run the query to insert multiple records. For example:
     
     ```jsx
     {{insert_users.run()}}
     ```
  4. In **Callbacks**, add actions in **On success** to **Show alert** and **Reset widget** after data insertion.
  5. To test, click the Filepicker widget and upload a CSV file.
     
For samples apps to bulk insert data in different datasources, see:
* [PostgreSQL](/learning-and-resources/sample-apps?current-sample-app-type=datasources#postgresql)
* [MongoDB](/learning-and-resources/sample-apps?current-sample-app-type=datasources#mongodb)
* [Snowflake](/learning-and-resources/sample-apps?current-sample-app-type=datasources#snowflake)




