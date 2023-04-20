---
sidebar_position: 6
---

# Firestore

This page describes how to connect your application to your Firestore database and use queries to manage its content.

<VideoEmbed host="youtube" videoId="Npwf5LW0MXA" title="Build CRUD apps with Appsmith and Firebase" caption="Build CRUD apps with Appsmith and Firebase"/>

## Connect to Firestore

<figure>
  <img src="/img/firestore-datasource-config.png" style={{width: "100%", height: "auto"}} alt="Configuring a Firestore datasource." />
  <figcaption align="center"><i>Configuring a Firestore datasource.</i></figcaption>
</figure>

To add a Firestore datasource, click the (**+**) sign in the **Explorer** tab next to **Datasources**. On the next screen, select the **Firestore** button. Your datasource is created and you are taken to a screen to configure its settings.

The Firestore plugin requires three pieces of information which are available from the Firebase Console:

<figure>
  <img src="/img/firestore-project-settings.png" style={{width: "80%", height: "auto"}} alt="Find your connection details in the project settings of your Firestore console." />
  <figcaption align="center"><i>Find your connection details in the project settings of your Firestore console.</i></figcaption>
</figure>

* **Project ID**
    * Find this value under the **General** tab in your project settings.
* **Database URL**
    * Build this value from your Project ID: `https://<project-id>.firebaseio.com`
* **Service Account Credentials**
    * Under the **Service Accounts** tab in your project settings, click **Generate new private key**. Open the downloaded file and copy-paste its entire contents into the **Service Account Credentials** field in your Appsmith datasource configuration.

## Create queries

<figure>
  <img src="/img/firestore-query-config.png" style={{width: "100%", height: "auto"}} alt="Configuring a Firestore query." />
  <figcaption align="center"><i>Configuring a Firestore query.</i></figcaption>
</figure>

You can write [queries](https://docs.appsmith.com/core-concepts/data-access-and-binding/querying-a-database/query-settings) to fetch or write data to Firestore by selecting the **+ New Query**  button on the Firestore datasource page, or by clicking (**+**) next to **Queries/JS** in the **Explorer** tab and selecting your Firestore datasource. You'll be brought to a new query screen where you can write queries.

## Fetch documents

There are two commands available for fetching your data:

* **List Documents**: Fetch all documents in a given collection. Allows filtering results by additional parameters.
* **Get Document**: Fetch a single document by its path.

Record data is returned according to the format:

```json
{
  "date_of_birth": "1989-06-07",
  "_ref": {
    "path": "users/2",
    "id": "2"
  },
  "name": "Amal",
  "email": "amal@example.com"
}
```

| **Parameter**         | **Description**                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Where**             | Defines conditions that documents' column values must meet to appear in your results.                         |
| **Order By**          | Sorts query results by a column value. Expects an array containing a single string which is the column's name. Sorts by the given column in ascending order by default, or you can add a "-" prefix to sort in descending order. (`["name] / ["-name"]`).                                              |
| **Start After**       | Sets a starting pagination cursor for searching documents. Expects an object that is a whole document result. |
| **End Before**        | Sets an ending pagination cursor for searching documents. Expects an object that is a whole document result.  |
| **Limit Documents**   | Sets a limit for how many documents may be returned by the query.                                             |


### Server-side Pagination

To set up server-side pagination for your **List Documents** query called `ListUsers` and a table called `UsersTable`:

1. In the properties for your `ListUsers` query, set **Start After** to:
    ```javascript
    {{ ListUsers.data[ ListUsers.data.length - 1 ] }}
    ```
2. Set **End After** to:
    ```javascript
    {{ ListUsers.data[0] }}
    ```
3. Set **Limit Documents** to:
    ```javascript
    {{ UsersTable.pageSize }}
    ```
4. In the `UsersTable`'s properties on the canvas, set **Table Data** to:
    ```javascript
    {{ ListUsers.data }}
    ```
5. Turn on the table's **Server side pagination** property and set its **onPageChange** property to execute your `ListUsers` query.

When you click the page buttons in the table's header, the pages should now cycle through your dataset.

---

#### Example

> Fetch all documents from a Firestore collection `users`, 10 at a time, and put them into a table widget `UsersTable`.

**Setup**: create a [Table widget](/reference/widgets/table) called `UsersTable` to display your data. Create a query called `ListUsers` based on your Firestore datasource.

* Select the **List** command for your query, and enter `users` in the **Collection** field. 
* In the properties for your `ListUsers` query, set **Start After** to `{{ ListUsers.data[ ListUsers.data.length - 1 ] }}`.
* Set **End After** to `{{ ListUsers.data[0] }}`.
* Set **Limit Documents** to `{{ UsersTable.pageSize }}`.
* On the canvas in the `UsersTable`'s properties, set **Table Data** to `{{ ListUsers.data }}`.
* Turn on the table's **Server side pagination** property and set its **onPageChange** property to execute your `ListUsers` query.

Your table should populate with data once your query is run.

## Create a document

Use the **Create Document** command to create a new document in a specified collection and path. Alternatively, use the **Add Document to Collection** command to create a new document in a given collection, allowing Firestore to auto-generate the document's path.

After filling in the desired collection/path, enter your document data in the **Body** field of the query:

```javascript
{
	"name": "Nick",
	"email": "nick@example.com",
	"date_of_birth": "1995-11-11"
}
```

---

#### Example

> Create a new document in the `users` collection with values for `name`, `email`, and `date_of_birth`.

**Setup**: create a [Table widget](/reference/widgets/table) called `UsersTable` to display your data. Use a **List** query to display your collection of documents in the table.

* Create a query `CreateUser` based on your Firestore datasource, and set it to use the **Add Document to Collection** command.
* Set the **Collection/Document Path** field to `users`.
* To gather data for the new record, create a [JSON Form](/reference/widgets/json-form) on the canvas called `NewUserForm`. Add **Source Data** to the JSON Form to create input fields:

    ```json
    {
        name: "",
        email: "",
        date_of_birth: ""
    }
    ```

* In JSON Form's Submit [button](/reference/widgets/button) properties, configure the **onClick** event to execute your query:

    ```javascript
    // Submit button's onClick event
    {{ CreateUser.run() }}
    ```
    * Add an **onSuccess** action to run the `ListUsers` query to refresh your table data.

* Once these form fields are filled out, you can add their values to your query in the **Body** field like below:

    ```javascript
    // in the Body field of your query
    {{
    {
        "name": NewUserForm.formData.name,
        "email": NewUserForm.formData.email,
        "date_of_birth": NewUserForm.formData.date_of_birth
    }
    }}
    ```

When the Submit button is clicked, your query is executed and the new record is inserted into your Firestore collection.

## Update a document

Use the **Update Document** command to modify an existing document.

Provide the target's **Collection/Document Path**, and enter your document data in the **Body** field of the query.

:::info
When using **Update Document**, you only need to provide the fields that have been changed. If you use **Upsert Document**, your query completely replaces whatever record exists at the given path, so be sure to provide all necessary fields including those that have not changed.
:::

```javascript
{
	"name": "Nicholas",
	"email": "nicholas@example.com"
}
```

---

#### Example

> Update the `name` and `email` values of a document in the `users` collection.

**Setup**: create a [Table widget](/reference/widgets/table) called `UsersTable` to display your data. Use a **List** query to display your collection of documents in the table.

* Create a query `UpdateUser` based on your Firestore datasource, and set it to use the **Update Document** command.
* Set the **Collection/Document Path** field to `users`.
* To gather data for the new record, create a [JSON Form](/reference/widgets/json-form) on the canvas called `UpdateUserForm`. Add **Source Data** to the JSON Form to create input fields. Reference the existing row in the Table widget to have the form fields pre-filled:

    ```json
    {{
    {
        name: UserTable.selectedRow.name,
        email: UserTable.selectedRow.email,
        date_of_birth: UserTable.selectedRow.date_of_birth
    }
    }}
    ```

* In JSON Form's Submit [button](/reference/widgets/button) properties, configure the **onClick** event to execute your query:

    ```javascript
    // Submit button's onClick event
    {{ UpdateUser.run() }}
    ```
    * Add an **onSuccess** action to run the `ListUsers` query to refresh your table data.

* Once these form fields are filled out, you can add their values to your query in the **Body** field like below:

    ```javascript
    // in the Body field of your query
    {{
    {
        "name": UpdateUserForm.formData.name,
        "email": UpdateUserForm.formData.email,
        "date_of_birth": UpdateUserForm.formData.date_of_birth
    }
    }}
    ```

When the Submit button is clicked, your query is executed and the new values are updated on the document.



## Deleting a document

Use the **Delete Document** command to delete an existing document by its collection/path.

---

#### Example

> Delete a document from the `users` collection.

**Setup**: create a [Table widget](/reference/widgets/table) called `UsersTable` to display your data. Use a **List** query to display your collection of documents in the table.

* Create a query `DeleteUser` based on your Firestore datasource, and set it to use the **Delete Document** command.
* Provide the **Collection/Document Path** of the document to delete by referencing the `UsersTable`'s selected row:

    ```javascript
    {{ UsersTable.selectedRow._ref.path }}
    ```

* Add a [button](/reference/widgets/button) to the canvas and update its **Label** to `Delete`. Configure the **onClick** event to execute your query:

    ```javascript
    // Delete button's onClick event
    {{ DeleteUser.run() }}
    ```
    * Add an **onSuccess** action to run the `ListUsers` query to refresh your table data.


When the Submit button is clicked, your query is executed and the document is deleted.

## Commands

Below are the commands available for use with Firestore:

| **Command**                    | **Description**                                                                           |
| -----------------------------  | ----------------------------------------------------------------------------------------- |
| **List Documents**             | Fetch documents in a given collection. Allows filtering results by additional parameters. |
| **Create Document**            | Add a new document at a specified path.                                                   |
| **Update Document**            | Make changes an existing document.                                                        |
| **Delete Document**            | Delete an existing document.                                                              |
| **Get Document**               | Fetch a single document by its collection/path.                                           |
| **Upsert Document**            | Replaces an existing document or creates a new document at the specified path.            |
| **Add Document to Collection** | Add a new document to a collection with a path generated by Firestore.                    |

## Further reading

* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)
* [Table widget](/reference/widgets/table)
* [Form widget](/reference/widgets/form)