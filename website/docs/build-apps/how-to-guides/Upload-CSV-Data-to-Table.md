---
description: This page shows you how to insert CSV data using a Filepicker widget.
---

# Insert CSV Data

This guide walks you through the process of inserting multiple rows into a datasource using CSV data uploaded through the Filepicker widget.

## Prerequisites
* A connected datasource to insert data. For the list of datasources supported by Appsmith, see [Datasources](/connect-data/reference).

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
   Appsmith automatically parses the CSV file and converts the data to JSON format. This example uses [json_populate_recordset](https://www.postgresql.org/docs/current/functions-json.html) PostgreSQL function to convert the JSON array to a set of specified SQL-typed values.
   
   :::caution important
   Column details in the CSV should match the column details in the datasource. Appsmith does not insert data for a mismatched column.
   :::

  1. You can format the data within the JSON before inserting it into the datasource. 
     Here is an example of a JS object that formats `dob` using Moment.js and concatenates the `name` and `lastname` to populate the name of users:
     
     ```jsx
     	async myFun2 () {
		      let users = user_details.files[0].data;
		      Object.keys(users).forEach(function(key) {
			      users[key]["dob"] = moment(users[key]["dob"]).format('MMMM DD YYYY, h:mm:ss a');
               users[key]["name"] = users[key]["name"] + users[key]["lastname"];		
     })
     ```
     You can then use this JSON object to insert data.
  1. In the Filepicker widget's property pane, set the **onFileSelected** event to run the query to insert multiple records. For example:
     
     ```jsx
     {{insert_users.run()}}
     ```
  2. In **Callbacks**, add actions in **On success** to **Show alert** and **Reset widget** after data insertion.
  3. To test, click the Filepicker widget and upload a CSV file.
     
For sample apps to bulk insert data in different datasources, see [PostgreSQL](/learning-and-resources/sample-apps?current-sample-app-type=datasources#postgresql), [MongoDB](/learning-and-resources/sample-apps?current-sample-app-type=datasources#mongodb), [Snowflake](/learning-and-resources/sample-apps?current-sample-app-type=datasources#snowflake).