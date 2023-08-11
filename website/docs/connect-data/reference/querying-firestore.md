---
sidebar_position: 6
description: Connect Appsmith to a Firestore database and create queries.
---

# Firestore

This page provides information for connecting your application to your Firestore database and for using queries to manage its content.

## Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to a Firestore database.

<figure>
  <img src="/img/firestore-datasource-config.png" style={{width: "100%", height: "auto"}} alt="Configuring a Firestore datasource." />
  <figcaption align="center"><i>Configuring a Firestore datasource.</i></figcaption>
</figure>

<dl>
  <dt><b>Database URL</b></dt>
  <dd>

The domain or network location of your database instance. This value includes your **Project ID** in the format `https://PROJECT_ID.firebaseio.com`.

  </dd>

  <dt><b>Project ID</b></dt>
  <dd>

The unique identifier for your Firestore project, accessible in your Firebase project's **Project Settings**. For more information, see [Understand Firebase projects](https://firebase.google.com/docs/projects/learn-more#project-id).

  </dd>

  <dt><b>Service account credentials</b></dt>
  <dd>

A string of credentials generated on Firebase that is used to authenticate your queries. You can generate these credentials from your Firebase project's **Project Settings** page under **Service Accounts**. Open the downloaded file and copy-paste its entire contents into the **Service account credentials** field in your Appsmith datasource configuration. For

  </dd>
</dl>

## Create queries

The following section is a reference guide that provides a complete description of all the read and write operation commands with their parameters to create Firestore queries.

<figure>
  <img src="/img/firestore-query-config.png" style={{width: "100%", height: "auto"}} alt="Configuring a Firestore query." />
  <figcaption align="center"><i>Configuring a Firestore query.</i></figcaption>
</figure>

### List Documents

This command lists all documents from a given collection. The following section lists all the fields available for the **List Documents** command.

<dl>
  <dt><b>Collection Name</b></dt>
  <dd>

The name of the collection to query.

  </dd>

  <dt><b>Where</b></dt>
  <dd>

Defines conditions that documents' column values must meet to appear in your results. The available comparison operators are `==`, `<`, `<=`, `>=`, `>`, `in`, `contains`, and `contains any`.

  </dd>
  <dd><i>Options:</i>
    <ul>
     <li><b>Add condition:</b> Adds another simple single-line expression.</li>
     <li><b>Add group condition:</b> Adds a nested expression with multiple levels of <code>AND</code> statements.</li>
    </ul>
  </dd>
  <dd>
    <figure>
      <img src="/img/firestore-where-conditions.png" style={{width: "100%", height: "auto"}} alt="Use Where conditions to create multiple levels of filtering." />
      <figcaption align="center"><i>Use Where conditions to create multiple levels of filtering.</i></figcaption>
    </figure>
  </dd>

  <dt><b>Order by</b></dt>
  <dd>

Sorts query results by a column value. Expects a JSON array containing a single string which is the column's name. By default this sorts in ascending order, or you can add a `-` prefix to the column name to sort in descending order. For example, `["name"]` is ascending and `["-name"]` is descending.

  </dd>

  <dt><b>Start after</b></dt>
  <dd>

Sets a record that acts as a starting cursor for pagination. Expects an object that is a whole document, i.e. a document that was returned from a prior query. For example, you can pass the last record from the most recent execution of a query:

```javascript
{{ ListQuery.data[ListQuery.data.length - 1] }}
```

Each time the query is run, it fetches the next set of results that come after the previous execution. 

  </dd>

  <dt><b>End before</b></dt>
  <dd>

Sets a record that acts as an ending cursor for pagination. Expects an object that is a whole document, i.e. a document that was returned from a prior query. For example, you can pass the first record from the most recent execution of a query:

```javascript
{{ ListQuery.data[0] }}
```

When the query is paged backwards, it fetches the set of results that lead up to the current results.

  </dd>

  <dt><b>Limit</b></dt>
  <dd>

Sets a limit for how many documents may be returned by the query.

  </dd>
</dl>

### Create Document

This command creates a new document within a given collection. Firestore automatically generates an identifier for the created document. The following section lists all the fields available for the **Create Document** command.

<dl>
  <dt><b>Collection Name</b></dt>
  <dd>

The name of the collection where the new document should be created.

  </dd>

  <dt><b>Body</b></dt>
  <dd>

Expects a JSON object that represents the document to be created. For example:

```javascript
{
	"name": {{ NameInput.text }},
	"email": {{ EmailInput.text }},
	"date_of_birth": {{ DatePicker.selectedDate }}
}
```

  </dd>

  <dt><b>Timestamp Path</b></dt>
  <dd>

When filled, adds a timestamp key-value pair into the created document that shows when the document was created. Expects an array with a single string value, for example `["TIMESTAMP_KEY_NAME"]`. The string you provide in this field is used as the key to the timestamp value in your document. You can create a timestamp key-value pair within a nested object by using `.` to specify the path.

  </dd>
  <dd>
  
For example, the value <code>["meta.dateCreated"]</code> adds the following to your document:

```json
{
  "meta": {
    "dateCreated": {
      "seconds": 1681997026,
      "nanos": 409000000
    },
  },
  // ...
}
```
  
  </dd>
</dl>

### Update Document

This command updates an existing document at a given path. The following section lists all the fields available for the **Update Document** command.


<dl>
  <dt><b>Collection/Document path</b></dt>
  <dd>

The path to the document to update. For example, the path `Users/Admins/admin001` refers to a document `admin001` in the the `Admins` directory of the `Users` Collection.

  </dd>

  <dt><b>Body</b></dt>
  <dd>

Expects a JSON object that represents the new key-value pairs to update the document with. You only need to include the key-value pairs that are changing, adding all keys is not necessary. For example:

```javascript
{
	"name": {{ NewNameInput.text }}
}
```

  </dd>

  <dt><b>Delete Key Path</b></dt>
  <dd>

When filled, deletes the key located at the path specified by this field. You can delete nested keys by providing the path from the root of the object. Expects an array with a single string value, for example `["PARENT_KEY.KEY_TO_DELETE"]`.

  </dd>

  <dt><b>Timestamp Path</b></dt>
  <dd>

When filled, adds a timestamp key-value pair into the created document that shows when the document was updated. Expects an array with a single string value, for example `["TIMESTAMP_KEY_NAME"]`. The string you provide in this field is used as the key to the timestamp value in your document. You can create a timestamp key-value pair within a nested object by using `.` to specify the path.

  </dd>
  <dd>
  
For example, the value <code>["meta.lastModified"]</code> adds the following to your document:

```json
{
  "meta": {
    "lastModified": {
      "seconds": 1681997026,
      "nanos": 409000000
    },
  },
  // ...
}
```

  </dd>
</dl>

### Delete Document

This command deletes an existing document at a given path. The following section lists all the fields available for the **Delete Document** command.

<dl>
  <dt><b>Collection/Document path</b></dt>
  <dd>

The path to the document to delete. For example, the path `Users/Admins/admin001` refers to a document `admin001` in the the `Admins` directory of the `Users` Collection.

  </dd>
</dl>

### Get Document

This command fetches a single existing document at a given path. The following section lists all the fields available for the **Get Document** command.

<dl>
  <dt><b>Collection/Document path</b></dt>
  <dd>

The path to the document to fetch. For example, the path `Users/Admins/admin001` refers to a document `admin001` in the the `Admins` directory of the `Users` Collection.

  </dd>
</dl>

### Upsert Document

This command creates a new document or replaces an existing document at the given path. The following section lists all the fields available for the **Upsert Document** command.

If you use **Upsert Document**, your query completely replaces whatever record exists at the given path, so be sure to provide all necessary fields including those that have not changed.

<dl>
  <dt><b>Collection/Document path</b></dt>
  <dd>

The path to the document to update. For example, the path `Users/Admins/admin001` refers to a document `admin001` in the the `Admins` directory of the `Users` Collection.

  </dd>

  <dt><b>Body</b></dt>
  <dd>

Expects a JSON object that represents the document to be created. If a document already exists at the path given in **Collection/Document path**, this command completely replaces it with the content of this field. For example:

```javascript
{
	"name": {{ NameInput.text }},
	"email": {{ EmailInput.text }},
	"date_of_birth": {{ DatePicker.selectedDate }}
}
```

  </dd>

  <dt><b>Timestamp Path</b></dt>
  <dd>

When filled, adds a timestamp key-value pair into the created document that shows when the document was created. Expects an array with a single string value, for example `["TIMESTAMP_KEY_NAME"]`. The string you provide in this field is used as the key to the timestamp value in your document. You can create a timestamp key-value pair within a nested object by using `.` to specify the path.

  </dd>
  <dd>
  
For example, the value <code>["meta.dateCreated"]</code> adds the following to your document:

```json
{
  "meta": {
    "dateCreated": {
      "seconds": 1681997026,
      "nanos": 409000000
    },
  },
  // ...
}
```

  </dd>
</dl>

### Add document to collection

This command creates a new document within a given collection, under the identifier you provide. The following section lists all the fields available for the **Add document to collection** command.

<dl>
  <dt><b>Collection/Document path</b></dt>
  <dd>

The path to where the document should be created. The last part of this string becomes the document's identifier. For example, a path `Users/Admins/admin001` will create a document `admin001` in the `Users` Collection in the `Admins` directory.

  </dd>

  <dt><b>Body</b></dt>
  <dd>

Expects a JSON object that represents the document to be created. For example:

```javascript
{
	"name": {{ NameInput.text }},
	"email": {{ EmailInput.text }},
	"date_of_birth": {{ DatePicker.selectedDate }}
}
```

  </dd>

  <dt><b>Timestamp Path</b></dt>
  <dd>

When filled, adds a timestamp key-value pair into the created document that shows when the document was created. Expects an array with a single string value, for example `["TIMESTAMP_KEY_NAME"]`. The string you provide in this field is used as the key to the timestamp value in your document. You can create a timestamp key-value pair within a nested object by using `.` to specify the path.

  </dd>
  <dd>
  
For example, the value <code>["meta.dateCreated"]</code> adds the following to your document:

```json
{
  "meta": {
    "dateCreated": {
      "seconds": 1681997026,
      "nanos": 409000000
    },
  },
  // ...
}
```

  </dd>
</dl>

## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or contact the support team using the chat widget at the bottom right of this page.