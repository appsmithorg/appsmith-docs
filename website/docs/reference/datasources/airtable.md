---
sidebar_position: 1
---

# Airtable

[Airtable ](https://airtable.com/)is an easy-to-use online platform for creating and sharing relational databases. The user interface is simple, colorful, friendly, and allows anyone to spin up a database in minutes.&#x20;

:::info
To integrate Airtable with Appsmith, you should understand the [basics of connecting to databases](core-concepts/connecting-to-data-sources/) on Appsmith.
:::

On Appsmith, it's pretty straightforward to establish a connection with any datasource, including Airtable. With this integration, you can perform different operations using a custom UI built on Appsmith, with minimal configurations.

## Create Airtable Datasource

To add an Airtable datasource, navigate to **Explorer** >> Click plus sign **(+)** next to **Datasources** >> **Select Airtable under APIs.**

<figure>
  <object data="https://www.youtube.com/embed/pXjkT_n4uhI?autoplay=0" width='750px' height='400px'></object> 
  <figcaption align="center"><i>Create Airtable Datasource</i></figcaption>
</figure>

## Connection Settings

Configure the Airtable datasource as illustrated below:

#### Authentication Type

Appsmith allows you to select from the available authentication types to integrate with an Airtable database:

![Create Airtable Datasource ](</img/Create_Airtable_Datasource.png>)

* **API Key:** [Airtable API](https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key-) key allows you to use public API to create, fetch, update, and delete records on the [bases](https://support.airtable.com/hc/en-us/articles/202576419-Introduction-to-Airtable-bases) you have access to in Airtable.
* **Bearer Token:** [Bearer Tokens](https://airtable.com/api) are the predominant access token used with OAuth 2.0.

:::info
[The API is limited](https://support.airtable.com/hc/en-us/articles/203313985-Public-REST-API) to 5 requests per second per base. If you exceed this rate, you will receive a 429 status code and will need to wait 30 seconds before subsequent requests will succeed.
:::

### API Key

Let's see how you can fetch your API key.

<figure>
  <object data="https://www.youtube.com/embed/1ERdreXERFw?autoplay=0" width='750px' height='400px'></object> 
  <figcaption align="center"><i>Fetching Airtable API Key</i></figcaption>
</figure>

* Open your Airtable console.&#x20;
* Navigate to your account page in the top-right corner.&#x20;
* On your account overview page, under the API heading, there's a button that says **`Generate API key.`**
* Now copy the generated API key and paste it into the API Key section.&#x20;

API Key will look something like this:

```
keyNT5AcMPxxxx
```

### Bearer Token

This is a single string that is the authentication of the API request, sent in an HTTP “Authorization” header. You can authenticate to the API by providing your API key in the HTTP authorization bearer token header.

* In the Airtbale Datasource Section.&#x20;
* Select **Bearer Token** as the authentication type.&#x20;
* Now, paste your API key and click **Save**.

## Create Queries&#x20;

You can add queries to Airtable datasource by selecting the **New API +** button available on the datasource page or by navigating to **Explorer** >> Click plus sign **(+)** next to **Queries/JS** >> Select the **datasource** name (AirtableDatasource).

### Query&#x20;

You can create queries to fetch, update and delete data from a datasource using the Appsmith query editor. Airtable supports the following query methods:

| Query Name                                                     | Description                                         |   |
| -------------------------------------------------------------- | --------------------------------------------------- | - |
| ****[**List Records**](airtable.md#list-records)****           | Fetches all the records from the airtable database. |   |
| ****[**Create Records**](airtable.md#create-records)****       | Creates a new record in the airtable database.      |   |
| ****[**Delete A Record**](airtable.md#delete-records)****      | Delete a specific record ID.                        |   |
| ****[**Retrieve A Record**](airtable.md#retrieve-a-record)**** | Retrieve an existing record.                        |   |
| ****[**Update Records**](airtable.md#update-records)****       | Update a few fields in a record.                    |   |

You can check the [Query Settings Guide](core-concepts/data-access-and-binding/querying-a-database/query-settings.md) to learn more about queries.

## List Records

List command lets you display all the data from the airtable database. With Appsmith, you can present data that has been filtered and sorted based on fields, records, time zones, etc. You can pass the below parameters to List Records.

:::info
All required fields are suffixed with an asterisk (\*).
:::

* ****[**Base ID**](airtable.md#baseid)**\*** - An Airtable base contains all the information you need for a particular project or collection. You can get the base ID from the base’s API page. [Learn More. ](https://support.airtable.com/hc/en-us/articles/4405741487383-Understanding-Airtable-IDs)
* ****[**Table Name**](airtable.md#table-name)**\*** - Name of your Airtable table.&#x20;
* **Fields**: Only data for fields whose names are in this list will be included in the result. If you don't need every field, you can use this parameter to reduce the amount of data transferred.&#x20;
* **Filter by Formula:** You can use a formula to filter records. The formula will be evaluated for each record.&#x20;
* **Max Records:** The most records possible will be returned in response to your queries. You might need to load more pages to reach this total if this number is greater than pageSize, which by default is 100. [Learn More. ](https://support.airtable.com/hc/en-us/articles/4405741487383-Understanding-Airtable-IDs)
* **Page Size:** The number of records each request's response included. The number must be less than or equal to 100.
* **Sort:** Names of the columns used to sort the results. It specifies how the records will be ordered. [Learn More. ](https://airtable.com/appUg9qjAO1OQoNX5/api/docs#curl/table:tasks:list)
* **View:** You can add the name or ID of a view created on the airtable table.&#x20;
* **Cell Format**: You can supply the format you want to use for the cell values.&#x20;
* **Time Zone**: The [time zone](https://support.airtable.com/hc/en-us/articles/216141558-Supported-timezones-for-SET-TIMEZONE) is used to format dates when using string as the cellFormat.&#x20;
* **User Locale**: The [user locale](https://support.airtable.com/hc/en-us/articles/220340268-Supported-locale-modifiers-for-SET-LOCALE) is used to format dates when using string as the cellFormat.&#x20;
* **Offset:** The response will contain an offset if there are more records. Pagination will stop when you’ve reached the end of your table.

<figure>
  <object data="https://www.youtube.com/embed/-1NwawxZ-XI?autoplay=0" width='750px' height='400px'></object> 
  <figcaption align="center"><i>Using the List Records Command</i></figcaption>
</figure>

* Click on the **+** icon next to the **queries/js** and choose your airtable datasource.
* Rename the query.
* From the Commands drop-down, Select the method **`List Records`**.
* Next, add your **Base ID** and **Table Name**.

Once the parameters have been specified, click **Run**. The response section will now display all of the airtable data.

To better understand how the list record command works, let's look at an _**example**._

Let’s assume we have a task manager database, which displays - _Task Name, Deadline, and Task Manager’s Name,_ as shown below:

```
| Name                    | Deadline     | Manager |
|-------------------------|--------------|---------|
| Review OSW              | 25 June 2022 | Harshil |
| Finalize budget         | 4 July 2022  | Pranay  |
| Firestore Docs Update   | 30 June 2022 | Harshil |
| Heroku Deployment Issue | 26 June 2022 | Nikhila |
```

<figure>
  <object data="https://www.youtube.com/embed/YKOFXEQUtgc?autoplay=0" width='750px' height='400px'></object> 
  <figcaption align="center"><i>List Record Example</i></figcaption>
</figure>

* After creating the **list\_records** query, Click on the plus **(+)** icon next to the queries/js and create a New **JS Object.**&#x20;
* Rename the JS Object to **GetAirtableRecordsData**.&#x20;
* Now, paste the below code:

```
export default {
	readAirtableData: () => {
		return list_tasks.data.records.map((airtableRecord) => {
			return {
				"id" : airtableRecord.id,
				"createdTimeDate" : airtableRecord.createdTime,
				"Manager" : airtableRecord.fields.Manager,
				"TaskName" : airtableRecord.fields.Name,
				"Deadline" : airtableRecord.fields.Deadline
			}
		})
	}
}
```

* Next, add a table widget to your canvas, and name it **`Tasks_list`**.
* In the Table data property, paste:

```
{{GetAirtableRecordsData.readAirtableData()}}
```

The [table widget](/widgets/table/) will display all of your Airtable data.&#x20;

## Create Records&#x20;

This method will let you create a new record for the Airtable database. You can pass the below parameters to Create Records.

* ****[**Base ID**](airtable.md#baseid)**\*** - An Airtable base contains all the information you need for a particular project or collection. You can get the base ID from the base’s API page. [Learn More.](https://support.airtable.com/hc/en-us/articles/4405741487383-Understanding-Airtable-IDs)
* ****[**Table Name**](airtable.md#table-name)**\*** - Name of your Airtable table.&#x20;
* ****[**Records**](airtable.md#records)**\*** - A record is the base equivalent of a row in a spreadsheet.

<figure>
  <object data="https://www.youtube.com/embed/bAVUsK-Cvj4?autoplay=0" width='750px' height='400px'></object> 
  <figcaption align="center"><i>Using Create Records Command</i></figcaption>
</figure>

* Click on the + icon next to the queries/js and choose your airtable datasource.&#x20;
* Rename the query.&#x20;
* From the Commands drop-down, Select the method **Create Records.**&#x20;
* Next, add your **Base ID** and **Table Name.**
* Now, in the **records** section add your data. Example format:&#x20;

```
[ {      
"fields": {        
"Name": "Customer research",       
 "Status": "Done",       
 "Flagged": true     
 }    
}]

```

Let’s take an **example** to get a better understanding of how the create records command works.

<figure>
  <object data="https://www.youtube.com/embed/B07VmB8rac8?autoplay=0" width='750px' height='400px'></object> 
  <figcaption align="center"><i>Create Records example
</i></figcaption>
</figure>

* Drag and drop a button widget into the canvas, and change the title to **“Create New Task”.**&#x20;
* Now, set buttons **onClick** event to Open a New [Modal](/widgets/modal.md), and choose to Create New**.**
* This will open up a new modal now; let's drag and drop a [JS Form widget](/widgets/json-form.md) into the modal.&#x20;
* Next, in the source data section, connect your createTask query.

```
{
  "id": "recWwqHTxvjsF505l",
  "createdTime": "2022-07-02T12:43:52.000Z",
  "fields": {
    "Deadline": "2022-06-30",
    "Name": "Task Name",
    "Manager": "Name"
  }
}
```

* If you want you can hide some fields from the Field Configuration. For example, _id or created time._
* Now, in the **onSubmit** option, Choose **createTask** query from the "`execute a query`" option.&#x20;
* Now go to **createTask** query, and edit the **records section:**

```
[{      "fields": 
	{       
	"Name": {{JSONForm1.formData.fields.Name}},       
	"Deadline": {{JSONForm1.formData.fields.Deadline}},       
	"Manager": {{JSONForm1.formData.fields.Manager}}   
}   
}]
```

## Delete a Record

The Delete Record command deletes a particular record from the airtable database. You can pass the below parameters to Delete Records.

* ****[**Base ID**](airtable.md#baseid)**\*** - An Airtable base contains all the information you need for a particular project or collection. You can get the base ID from the base’s API page. [Learn More.](https://support.airtable.com/hc/en-us/articles/4405741487383-Understanding-Airtable-IDs)
* ****[**Table Name**](airtable.md#table-name)**\*** - Name of your Airtable table.&#x20;
* ****[**Record ID**](airtable.md#record-id)**\*** - Within Airtable, each record has a unique identifier known as a [Record ID.](https://support.airtable.com/hc/en-us/articles/360051564873-Record-ID)

<figure>
  <object data="https://www.youtube.com/embed/vincNd_J_8A?autoplay=0" width='750px' height='400px'></object> 
  <figcaption align="center"><i></i></figcaption>
</figure>

* Click on the **+** icon next to the **queries/js** and choose your airtable datasource.&#x20;
* Rename the query.&#x20;
* From the Commands drop-down, Select the method **Delete A Record.**&#x20;
* Next, add your **Base ID** and **Table Name.**&#x20;
* Now, add your **record ID** to delete a specific record. The Record ID will look like this:

```
rec7HiLAy2TkPxxxx
```

* Now **run** the query.

Let’s take an **example** to understand how the delete records command works.

In this example, we will use the [Modal widget](/widgets/modal.md) to delete the selected records.

<figure>
  <object data="https://www.youtube.com/embed/WKfjTDp-p8k?autoplay=0" width='750px' height='400px'></object> 
  <figcaption align="center"><i></i></figcaption>
</figure>

* Let's edit the table widget we created in the **List Record Example.**&#x20;
* Add a column to the table property and name it "**delete**."&#x20;
* Now, in the column control property, change the column type to the icon button and select the delete icon.&#x20;
* Open the table property pane, set the Delete button’s onClick property to **Open a New Modal,** and **choose to Create New.**&#x20;
* This will open up a new modal now; let's drag and drop a few widgets to create a dialog.
* Drag and drop a text widget to modal and set its property name to:

```
{{Table1.selectedRow.id}}
```

* Now, Bind **deleteTasks** query to the **onClick** event of the Confirm button.&#x20;
* Finally, change the **record ID** in the deleteTasks query to:

```
{{Table1.selectedRow.id}}
```

## Retrieve A Record

Retrieve record lets you fetch data for a particular record ID. You can pass the below parameters to Retrieve A Records.

* ****[**Base ID**](airtable.md#baseid)**\*** - An Airtable base contains all the information you need for a particular project or collection. You can get the base ID from the base’s API page. [Learn More.](https://support.airtable.com/hc/en-us/articles/4405741487383-Understanding-Airtable-IDs)
* ****[**Table Name**](airtable.md#table-name)**\*** - Name of your Airtable table.&#x20;
* ****[**Record ID**](airtable.md#record-id)**\*** - Within Airtable, each record has a unique identifier known as a [Record ID.](https://support.airtable.com/hc/en-us/articles/360051564873-Record-ID)

<figure>
  <object data="https://www.youtube.com/embed/sGITfLFYS5Q?autoplay=0" width='750px' height='400px'></object> 
  <figcaption align="center"><i>Use the Retrieve a record command
</i></figcaption>
</figure>

* Click on the **+** icon next to the queries/js and choose your airtable datasource.&#x20;
* Rename the query.&#x20;
* Set the commands to **Retrieve A Record.**&#x20;
* Now, paste your **baseID** and **table Name.**&#x20;
* Next, add your **Record ID** to Retrieve a specific record.  The Record ID will look like this:

```
rec7HiLAy2TkPWxxx
```

* Now **run** the query.

## Update Records

Use the Update Records method to update only specific fields in a database and keep the rest of the fields unchanged. You need to pass the below parameters to Update Records.

* ****[**Base ID**](airtable.md#baseid)**\*** - An Airtable base contains all the information you need for a particular project or collection. You can get the base ID from the base’s API page. [Learn More.](https://support.airtable.com/hc/en-us/articles/4405741487383-Understanding-Airtable-IDs)
* ****[**Table Name**](airtable.md#table-name)**\*** - Name of your Airtable table.&#x20;
* ****[**Records**](airtable.md#records)**\*** - A [record ](https://support.airtable.com/hc/en-us/articles/360021333094-Getting-started-tables-records-and-fields)is the base equivalent of a row in a spreadsheet.


<figure>
  <object data="https://www.youtube.com/embed/Rf-4jIBXHEw?autoplay=0" width='750px' height='400px'></object> 
  <figcaption align="center"><i>Use the Update Records Command
</i></figcaption>
</figure>

* Click on the **+** icon next to the queries/js and choose your airtable datasource.&#x20;
* Rename the query.&#x20;
* Set the commands to **Update Records.**&#x20;
* Now, paste your **baseID** and **table Name.**&#x20;
* Next, in the **records** section add your data. Example Format:

```
[{
  "id": "ID for the record",
  "fields": {
    "Text": "Text"
    }
}]
```

Let’s take an **example** to update our records.

<figure>
  <object data="https://www.youtube.com/embed/0omjwAbe49M?autoplay=0" width='750px' height='400px'></object> 
  <figcaption align="center"><i>Example for an update records command
</i></figcaption>
</figure>

* Edit the table widget **`Tasks_list`** created in the List Record Example.&#x20;
* Add a column to the table property and name it "**Update**."
* Now, in the column control property, change the column type to a button and rename the label to “**edit**”.&#x20;

:::info
To make it more UI friendly, you can even use the icon button instead of the button.
:::

* Bind the open event of a modal window to the **onClick** event of an update button. Either choose an existing modal or create a new one by choosing Create New.&#x20;
* Now, let's drag and drop a few widgets to create a form that you can use to add a new task to the database.&#x20;
* Drag and drop the input widgets and set its property name to:

```
#For Task Name - {{Table1.selectedRow.Name}}
#For Manager Name - {{Table1.selectedRow.Manager}}
#For Deadline  - {{Table1.selectedRow.Deadline}}
```

* Now, set the confirm button’s **onClick** event to “**execute a query**” and select **update\_task** query.&#x20;
* Finally, change the records section in the **update\_task** query to:

```
[{
  "id": "{{Table1.selectedRow.id}}",
  "fields": { 
    "Name": "{{Input1.text}}",
    "Manager": "{{Input2.text}}",
    "Deadline": "{{Input3.text}}"
  }
}]
```

## Common Settings

There are a few settings listed below that are common to many operations that you will perform on the Airtable:

#### **BaseID**

To find a Base ID in the [Airtable API](https://www.airtable.com/api), click on the help button near the top-right of your screen. This will open a menu where you will see the **API documentation** option.

Click on the button to open the API documentation. The API documentation for the base you are working with will have the **base name** and **base id** details, as shown in the screenshot below.

![Getting BaseID](/img/baseIDInAPIDocumentation.jpeg)

#### Table Name&#x20;

Open your database to get the table name; it is in the top-left corner. For example, the table name for the image below is "_Tasks_."

![Getting Table Name](/img/airtable_doc_3.png)

#### Records

A [record ](https://support.airtable.com/hc/en-us/articles/360021333094-Getting-started-tables-records-and-fields)is the base equivalent of a row in a spreadsheet. Each record is an item in a list. For example, in a table of books, each record is a different book. Unlike a spreadsheet, a record in a mobile Airtable base appears as a tappable card.

#### Record ID&#x20;

Within Airtable, each record has a unique identifier known as a Record ID. If you are familiar with Entity-Relationship Diagrams or ERDs, then the record id would be the primary key. For most, record IDs remain behind the scenes.

After expanding a record, take notice of your web address bar. The URL will be as below**:**&#x20;

```
airtable.com/appxxxxxxxxx/tblxxxxxxxxx/viwxxxxxxxx/recxxxxxxxx
```

The `recxxxxxxx` portion of the URL string is the unique record id.

```
Example URL - https://airtable.com/appUgxxxxx/tblxZhrixxxxx/viwGM7xxxxx/recw3xxxxx?blocks=hide

appUgxxxxx- Base ID
tblxZhrixxxxx - Table ID
viwGM7xxxxx - View ID
Recw3xxxxx - Record ID
```

:::info
Use the [List Records command](airtable.md#list-records) to get the record ID for each record.
:::

With Appsmith Airtable integration, it is possible to create apps that seamlessly connect with the Airtable database and provide additional flexibility for updating and analyzing data.

## Using Queries in applications&#x20;

Once you have successfully run a Query, you can use it in your application to:

* [Display Data ](core-concepts/data-access-and-binding/displaying-data-read/)
* [Capture Data ](core-concepts/data-access-and-binding/capturing-data-write/capture-form-data.md)
* [Execute Queries](core-concepts/data-access-and-binding/querying-a-database/)
