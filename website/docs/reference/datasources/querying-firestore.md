---
sidebar_position: 6
---

# Firestore

On Appsmith, it's pretty straightforward to establish a connection with any datasource, including Firestore.

:::note
The following document assumes that you understand the [basics of connecting to databases on Appsmith](/core-concepts/connecting-to-data-sources/connecting-to-databases.md#connecting-to-a-database). If not, please go over them before reading further.
:::

[Firestore](https://firebase.google.com/docs/firestore) is a NoSQL document database built for automatic scaling, high performance, and ease of application development. While the Firestore interface has many features like traditional databases, as a NoSQL database, it differs from describing relationships between data objects.

What we need to make the connection are the Database URL, Project Id, and Service Account Credentials. With this in mind, let's get started.

## Connecting Firestore on Appsmith

The Firestore plugin requires three pieces of information to connect to Firestore.

* On your Appsmith application, click on the **`+`** icon next to **Datasources** on the left navigation bar under Page1.
* Now, navigate to the Create New tab and choose **Firestore data source**; you'll see the following screenshot:

![Firestore Database Page](</img/Connecting_to_firestore.png>)

The above details are available from the Firebase Console. Let's fetch each one of them:

#### Fetching Project ID

1. Next to the project overview option, click the **setting gear**.
2. In the **`Project Settings`** ensure you're in the "General" tab.
3. You'll find an `Project ID` entry with a value.
4. Copy this value into the Project ID field in the Firestore configuration.

#### Fetching Database URL

1. The Database URL need to be formed using the Firebase _project ID_ you found above in the following manner `your-project-id.firebaseio.com`

#### Fetching Service Account Credentials

![Firebase Service Account Credentials](/img/Firestore_Fetching_account_credentials.png)

1. Go to **`Project Settings`** and click on the **`Service Accounts Tab.`**
2. On the service accounts tab, below the code snippet, there is a **Generate new private key** button.
3. Clicking this button will generate a new private key with access to this Firestore instance.
4. This key will be in the form of a JSON file which will be downloaded when you click this button.
5. Copy the **contents** of this file and paste them into the **Service Account Credentials** field in appsmith.
6. Next, click on the **`Test`** button at the bottom right of the screen. This will help you with understanding whether your configuration is valid or not. If it returns a successful message, hit the 'Save' button to establish a secure connection between Appsmith and Firestore.

The video below explains how to connect to Firestore.

<VideoEmbed host="youtube" videoId="6hpMy2s-xDQ" title="Connecting Firestore on Appsmith" caption="Connecting Firestore on Appsmith"/>


## Understanding Commands

Now that we've successfully connected to Firestore, let's look at how to query the data. First, let's fetch our data from firestore.

:::info
Note: All the commands function mentioned below can be found on the query page.Fetching Single Document
:::

## Fetching Data

First, let's read our data from the database and display it.

There are two methods for fetching data from Firestore: one for fetching a single document by a path and the second for fetching multiple documents from a collection by a path.

### Fetching Single Document

* Click on the **datasources** and choose the database you created.
* Rename the query.
* From the **`Commands`** drop-down, Select the method **`Get Single Document`**.
* Next, set the path to the full path of the document you want to load. The path should be provided **without** any leading or trailing/characters.

For example, setting the path to users/sherlock@gmail.com will get the document with ID sherlock@gmail.com inside the collection users.

Below is a video that shows how you can fetch a single document from the firestore. The below example fetches task details. Here the number represents the issue ID. As a result, **task/issue_id** provides information about that specific issue.

<VideoEmbed host="youtube" videoId="RdieZyfXLfs" title="Fetching Single Document" caption="Fetching Single Document"/>

### Fetching Multiple Documents

* Click on the `datasources` and choose the database you created.
* Rename the query.
* Set the query command to **`Get Documents`** in the Collection.
* Set the `Collection/Document Path *` to the collection name.
* This simple query returns all the task details in the sample data item. Hit the **RUN** button to view all the results.

The video below shows how you can fetch multiple documents from the firestore. The example below fetches all the documents from a collection.

<VideoEmbed host="youtube" videoId="nuc18ARTfGk" title="Fetching Multiple Document" caption="Fetching Multiple Document"/>

We now have our query; let's bind this onto the table widget; for this, follow the below steps:

* Click on the `+` icon next to widgets on the sidebar, search for the **table widget**, and drag and drop it onto the canvas.
* You can make any configurations to any widget via the property pane. Click on the table widget on the canvas; you will see the property pane docked to the sidebar on the right. Now, under the Table Data property, use the moustache syntax to bind the query:

```
{{getTasks.data}}
```

Let's look at how to personalize your query:

**Order By**: Set this to a JSON array of field names or field paths by which the documents should be sorted. For example, if in the given collection, you have the document `{"name": "Sherlock", "role": "Detective"}` and `{"name": "Watson", "role": "Doctor"}`, then specifying `["name"]` in the Order By input will return the documents ordered by the name field in each document. Additionally, any field or path can be prefixed with a `-` to order that field in descending order. So specifying `["name", "-role"]` would sort by the `name` field in ascending order and by the`role` field in descending order.

**Limit Documents**: This field is a number that specifies the maximum number of documents fetched by the query. Setting this to a _very_ high number may impact the performance of your application, but the impact and how high will depend on the size of the documents being fetched.

**Where Condition**: This is a set of three fields that allow you to apply a filter on the documents being fetched. The first field **Field Path** is the path of a nested field on which to apply the filter. Example values are `name` or `name.first` if the documents look like `{"name": {"first": "Sherlock", "last": "Holmes"}}`.

The second field is the operator and the third is the value to apply the filter with. For array operators like in, the value can be set to a valid JSON-serialized array. For example, the field path can be `name`, the operator can be `in` and the value can be `["Sherlock", "Mycroft"]`. This will filter all documents with a `name` field set to either `"Sherlock"` or `"Mycroft"`.

## Adding New Document(s)

There are three methods to add documents to a collection, depending on the behaviour required.

### **Set Document**

This method will set the given document at the given document path. If a document already exists at the given path, it will be overridden. It will create a path for the document if it does not exist at the given path.

The **set document** command can create or update an existing document. It requires a **`collection-name/doc-id`**.

Let’s look at an example to see how a `set document` works.

* Click on the **datasources** and choose the database you created.
* Rename the query.
* Set the query command to “`Set Documents`” in the Collection.
* Now, add the collection and document details.
* Here we will add **`tasks/newdoc`**. In the body section we will add something like:

```
{
    "name":"{{Input2Copy.text}}",
    "assigned_to": "{{Input3Copy.text}}"
}
```

* Now hit “**RUN**”.

If the defined doc-id doesn’t exist, it creates a new doc with the id. So here in the firestore, it will create a new document. The image below depicts the same.

![](/img/firestore_set_document.png)

### Create Document

This method will set the given document at the given document path. If a document already exists at the given path, this method will fail, and the given document is not saved. A new path will be created if the document doesn’t exist on that path.

**Let's look at an example** to see how to create a new document. Let’s assume you have a table which displays data from firestore. Now let's add a modal, to update the value to the database.

:::info
[Modal ](/reference/widgets/modal.md)is a simple UI widget you can use when you want to create Dialogs, Popovers or Alerts.
:::

* Drag and drop a button widget onto the canvas. Open its property pane, set the onClick property to **Open a New Modal**, and choose to **Create New.**
* This will open up a new modal now; let's drag and drop a few widgets to create a form that we can use to add a new task to our database.

Now that the modal’s UI is ready, let's connect it:

* Click on the + icon next to the datasources and choose to Create New + from the Firestore datasource.
* Rename the query to `createTask`.
* Set the commands to **`Create Document.`**
* Set the **`Collection/Document Path *`** to `collection_name/{{Math.random().toString().substring()}}`

For Example:- `tasks/{{Math.random().toString(36).substring(7)}}`

* Finally, set the body property.

For example, you can set a body property like this to collect all the information from the modal widget:

```
{
    "name":"{{Input1.text}}",
    "deadline": "{{DatePicker1.formattedDate}}",
    "issue_id": "{{Input2.text}}",
    "complete": false
}
```

**Here, we have an insert query that collects all the data from the form widgets we've created. Note that we use the mustache syntax to bind the data from the widgets onto the query body.**

Lastly, we’ll need to configure the submit button; for this, go back to the modal and set the button’s onClick property to execute a query and choose **`createTask`** under the events property:

![Modal example to create a new document on firestore.](/img/firestore_modal_example.png)

You can check out this [tutorial](https://appsmith.hashnode.dev/build-a-crud-app-with-a-firestore-database), to learn more about creating the document.

### Add Document to Collection

This method will add the given document with an auto-generated document-id, into the given collection path. Note that the given path must point to a collection in this method. If the collection doesn't exist at the given path, it will be created.

**Let’s look at an example** to see how `add the document to collection` works:

* Click on the **datasources** and choose the database you created.
* Rename the query.
* Set the query command to “**Add Documents to Collection**” in the Collection.
* Now, just add your `collection-name`.
* Here we will add `tasks`.
* Now in the body, add your details:

```
{
    "name":"{{Input2Copy.text}}",
    "assigned_to": "{{Input3Copy.text}}"
}
```

* Now hit **Run**.

A new unique document with the above-mentioned details will be generated in the firestore.

:::info
All three methods above take a path and a body as inputs. The path is interpreted as described above and the body is expected to contain a valid JSON-serialized object which will make up the document to be used in operation (as described above).
:::

## Updating a Document

The "Update Document" method can be used to surgically update only certain fields in a document while leaving the rest of the document as is. It takes the document path pointing to the document that should be updated and a body of changes. For example, if the body is set to the following:

```javascript
{
    "name": "Eve"
}
```

Then the value of the `name` field in the document pointed by path will be changed to `"Eve"`, but no other fields in the document will be changed.

Values of nested fields should be set in the form of field paths. For example, consider the following document that's already saved in our Firestore:

```javascript
{
    "name": {
        "first": "Sherlock",
        "last": "Holmes"
    },
    "role": "Detective"
}
```

Say we want to update the first name to `"Mycroft"`, but leave the rest of the document (including the last name) intact. Then the body in the update method should be:

```javascript
{
    "name.first": "Mycroft"
}
```

:::info
Note that this method can only update a single document at once. Firestore doesn't provide a way to bulk-update multiple documents at once.
:::

Let's look at an example to learn more about updating the document.

The Update operation is quite similar to the create operation.

* Let’s build UI by creating a new custom column on the table by clicking on **ADD A NEW COLUMN** under the columns property.
* Now, rename the column to **Edit**, and click on the cog icon next to it, to configure column settings.
* Under this, we’ll see column-type properties set to a Button type. A modal should open up the necessary fields to update the item when clicked.
* Now, copy-paste Modal1, rename it to Modal2 and set the onClick property of the Edit Task button to open Modal2.
* Here, in the form, we can also set the default value to show existing information, to display this, use the **`selectedRow`** property from the table widget.

![](/img/firestore_update_document.png)

Let’s write the Edit query:

* Click on the **`+`** icon next to the datasources and choose to Create New + from the Firestore datasource.
* Rename the query to **`editTask`**.
* Set the `Collection/Document Path*` to `tasks/{{Table1.selectedRow._ref}}.`
* Finally, set the body property to:

```
{
    "name":"{{Input1Copy.text}}",
    "deadline": "{{DatePicker1Copy.formattedDate}}",
    "assigned_to": "{{Input2Copy.text}}",
    "complete": false
}
```

:::info
Note: The \{{ Table1.selectedRow.\_ref \}} snippet evaluates to the selected row’s \_ref which will be the row we want to edit.
:::

Here, we have an edited query that collects all the data from the form widgets on Modal2. Note that we use the mustache syntax to bind the data from the widgets onto the query body. We’ll now need to configure the submit button; Go back to Modal2, set the button’s onClick property to execute a query, and choose _**editTask**_ under the events property.

<VideoEmbed host="youtube" videoId="yW8m8kydNhQ" title="Updating Document" caption="Updating Document"/>

## Deleting Document

The **Delete Document** method deletes the document at the given path.

* First, select `Delete Document` from the commands drop-down.
* Next, add your document path.

For example, “tasks/issue\_id” and click run to delete that document.

:::note
Deleting a document by giving a non-existing path is **NOT** treated as an error.
:::

* Create a new custom column on the table by clicking on Add a New Column under the columns property.
* Now, rename this column to ‘Delete Task,’ and click on the cog icon next to it, to configure column settings. Under this, we’ll see column-type properties set to a button type.

Now, write the Delete query:

* Click on the `+` icon next to the data sources and choose the Create New + from the Firestore datasource.
* Set the commands to Delete Document.
* Set the `Collection/Document Path*` to:

```
tasks/{{Table1.selectedRow._ref}}
```

Set the Delete Task button’s onClick property to run the `deleteTask` query.

## Server-side Pagination

Firestore supports server-side pagination with the Table widget. There are four fields in the query configuration that influence how this pagination works.

1. **Order By**: This is required to make pagination order predictable. It should be a JSON list of fields to use for ordering. _E.g._, `["field1"]`.
2. **Limit Documents**: This will be the number of documents in each page, _i.e._, the page size. A good value for this might be 10 or 15.
3. **Start After**: This should be set to the _document_ that marks the _end_ of the current page. Usually set to `{{queryName.data[queryName.data.length - 1]}}`. The order by field should be unique for this to work in pagination.
4. **End Before**: This should be set to the _document_ that marks the _start_ of the current page. Usually set to `{{queryName.data[0]}}`.

Once you have your Firestore query configured with these details, ensure the following three steps on your Table widget and the pagination should be ready:

1. The _Table Data_ should be set to `{{queryName.data}}` (or something loosely similar).
2. _`Server side pagination`_ should be turned on, in the Table widget.
3. The `onPageChange` should be set to run this Firestore query.

Now try clicking the next and previous page buttons on this Table widget and the data should refresh.

## Using Queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](/core-concepts/data-access-and-binding/displaying-data-read/)
* [Capture Data](/core-concepts/data-access-and-binding/capturing-data-write/)
