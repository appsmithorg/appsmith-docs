# Firestore

{% hint style="warning" %}
The following document assumes that you understand the [basics of connecting to databases on Appsmith](../core-concepts/connecting-to-data-sources/connecting-to-databases/). If not, please go over them before reading further.
{% endhint %}

## Connection Settings

The Firestore plugin requires three pieces of information to connect to Firestore.

![Click to expand](../.gitbook/assets/firestore-datasource-form.png)

The above details are available from the Firebase Console. Let's fetch them in turn.

#### Fetching Project ID

1. Go to "Project Settings" in your Firebase console and ensure you're in the "General" tab.
2. Here, you'll find a "Project ID" entry with a value.
3. Copy this value into the "Project ID" field in the Firestore configuration.

#### Fetching Database URL

1. The Database URL need to be formed using the Firebase _project ID_ you found above in the following manner `your-project-id.firebaseio.com`

#### Fetching Service Account Credentials

1. On the service accounts tab, below the code snippet, there is a "Generate new private key" button.
2. Clicking this button will generate a new private key with access to this Firestore instance.
3. This key will be in the form of a JSON file which will be downloaded when you click this button.
4. Copy the **contents** of this file and paste it into the "Service Account Credentials" field.

After filling up the three fields as described above, click on the "Test" button to verify the configuration and click "Save".

## Fetching Data

There are two methods for fetching data from Firestore. One for fetching a single document by a path and another for fetching multiple documents from a collection by a path.

### Fetching Single Document

Select the method "Get Single Document" in the Method dropdown and set the path to the full path of the document you want to load. The path should be provided **without** any leading or trailing `/` characters.

For example, setting the path to `users/sherlock@gmail.com` will get the document with ID `sherlock@gmail.com` inside the collection `users`.

### Fetching Multiple Documents

Select the method "Get Documents in Collection" in the Method dropdown and set the path to the collection from which we want to fetch the documents. The path should be provided **without** any leading or trailing `/` characters.

![Click to expand](../.gitbook/assets/firestore-get-documents-in-collection.png)

**Order By**: Set this to a JSON array of field names or field paths by which the documents should be sorted. For example, if in the given collection, you have the document `{"name": "Sherlock", "role": "Detective"}` and `{"name": "Watson", "role": "Doctor"}`, then specifying `["name"]` in the Order By input will return the documents ordered by the name field in each document. Additionally, any field or path can be prefixed with a `-` to order that field in descending order. So specifying `["name", "-role"]` would sort by `name` field in ascending order and by `role` field in descending order.

**Limit Documents**: This field is a number that specifies the maximum number of documents fetched by the query. Setting this to a _very_ high number may impact the performance of your application, but the impact and how high will depend on the size of the documents being fetched.

**Where Condition**: This is a set of three fields that allow you to apply a filter on the documents being fetched. The first field **Field Path** is the path of a nested field on which to apply the filter. Example values are `name` or `name.first` if the documents look like `{"name": {"first": "Sherlock", "last": "Holmes"}}`.

The second field is the operator and the third is the value to apply the filter with. For array operators like in, the value can be set to a valid JSON-serialized array. For example, the field path can be `name`, the operator can be `in` and the value can be `["Sherlock", "Mycroft"]`. This will filter all documents with a `name` field set to either `"Sherlock"` or `"Mycroft"`.

## Adding New Document\(s\)

There are three methods that can be used to add documents to a collection, depending on the behavior needed.

1. **Set Document**: This method will _set_ the given document at the given _document path_. If a document already exists at the given path, it will be **overridden**. If a document doesn't already exist at this path, the path will be created and this document will be set.
2. **Create Document**: This method will _set_ the given document at the given _document path_. If a document already exists at the given path, this method will **fail** and the given document is **not saved**. If a document doesn't already exist at this path, the path will be created and this document will be set.
3. **Add Document to Collection**: This method will _add_ the given document with an auto-generated document-id, into the given _collection path_. Note that in this method, the given path must point to a collection. If the collection doesn't exist at the given path, it will be created.

All three methods above take a path and a body as inputs. The path is interpreted as described above and the body is expected to contain a valid JSON-serialized object which will make up the document to be used in the operation \(as described above\).

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

Say we want to update the first name to `"Mycroft"`, but leave the rest of the document \(including the last name\) intact. Then the body in the update method should be:

```javascript
{
    "name.first": "Mycroft"
}
```

Note that this method can only update a single document at once. Firestore doesn't provide a way to bulk-update multiple documents at once.

## Deleting Document

The "**Delete Document**" method deletes the document at the given path.

{% hint style="warning" %}
Deleting a document by giving a non-existing path is **NOT** treated as an error.
{% endhint %}

## Server-side Pagination

Firestore supports server-side pagination with the Table widget. There are four fields in the query configuration that influence how this pagination works.

1. **Order By**: This is required to make pagination order predictable. It should be a JSON list of fields to use for ordering. _E.g._, `["field1"]`.
2. **Limit Documents**: This will be the number of documents in each page, _i.e._, the page size. A good value for this might be 10 or 15.
3. **Start After**: This should be set to the _document_ that marks the _end_ of the current page. Usually set to `{{queryName.data[queryName.data.length - 1]}}`. The order by field should be unique for this to work in pagination.
4. **End Before**: This should be set to the _document_ that marks the _start_ of the current page. Usually set to `{{queryName.data[0]}}`.

Once you have your Firestore query configured with these details, ensure the following three steps on your Table widget and the pagination should be ready:

1. The _Table Data_ should be set to `{{queryName.data}}` \(or something loosely similar\).
2. _"Server side pagination"_ should be turned on, in the Table widget.
3. The `onPageChange` should be set to run this Firestore query.

Now try clicking the next and previous page buttons on this Table widget and the data should refresh.

## Using Queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](../core-concepts/displaying-data-read/)
* [Capture Data](../core-concepts/capturing-data-write/)

