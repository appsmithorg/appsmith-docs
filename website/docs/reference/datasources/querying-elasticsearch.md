---
sidebar_position: 5
---

# Elasticsearch

This page describes how to connect to your Elasticsearch database and query it from your Appsmith app.

## Configuration

The Elasticsearch plugin requiresthe following information to establish a connection:

* **Host URL:** Provide the URL where the database is hosted. 
* **Port:** Provide the port on which to connect.
* **Username for Basic Auth / Password for Basic Auth:** Provide the login credentials for your Elasticsearch database.
* **Authorization Header:** Instead of the username/password fields, you can provide an **Authorization Header** to authenticate your queries. This field is only used when the **Username/Password for Basic Auth** fields are empty.

Once you've entered your connection details, click the **Test** button to check that they are working, and then click **Save**.

## Search documents

Queries run on top of indexed documents can be configured using the GET method. For example, the following query searches the `users` index for records where the `name` is `Allen`:

```json
// Path
/users/_search
```

```json
// Body
{
  "query": {
    "match": {
      "user.name": "Allen"
    }
  }
}
```

If you need a single document and you know its `id`, you can also fetch it using just a path:

```json
// Path
/users/_doc/2
```

---

#### Example

> Search an index `users` for documents matching a search term, and display the results in a table widget.

**Setup**: create a [Table widget](/reference/widgets/table) called `UserResults` to display your data. Create a query called `SearchUsers` based on your Elasticsearch datasource.

**Configure the query**:

* Select the **GET** method for your query, and supply the **Path**:

    ```json
    // Path
    /users/_search
    ```

* In the **Body** of the request, write the following snippet:

    ```javascript
    // Body 
    {
    "query": {
        "query_string": {
        "query": {{ UserResults.searchText }},
        "default_field": "*",
        "from": {{ UserResults.pageOffset }}
        "size": {{ UserResults.pageSize }}
        }
    }
    }
    ```

**Configure the table**:

* On the canvas in the `UserResults`'s properties, set **Table Data** to `{{ SearchUsers.data.hits.hits }}`.
* Set the **onSearchTextChanged** event to execute your `SearchUsers` query. When the user types a query into the search bar of the table header, the query runs automatically.
* Turn on the table's **Server side pagination** property and set its **onPageChange** property to also execute your `SearchUsers` query.

Now your table is ready to populate with data as the query is run.

## Create a document

You can create a single new document by using a **Path** `/{index}/_doc/` using the **POST** method, with a JSON body that represents the document values; an `id` is automatically generated.

```json
// Path
/users/_doc/
```

```json
//Body
{
    "name": "Arjun Patil",
    "email": "patila@example.com",
    "date-of-birth": "1989-4-9"
}
```

---

#### Example

> Add a new document to the `users` index, using values entered in a form.

**Setup**:

* Create a query `CreateUser` based on your Elasticsearch datasource, and set it to use the **POST** method.

**Configure the query**:

* Set the **Path** field to `/users/_doc/`.
* Set the **Body** field to:

    ```javascript
    // Body
    {
        "user": {
            "name": {{ NewUserForm.formData.name }},
            "email": {{ NewUserForm.formData.email }},
            "date-of-birth": {{ NewUserForm.formData["date-of-birth"] }}
        }
    }
    ```

**Configure the widgets**:

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

When the Submit button is clicked, your query is executed and the new document is added to your Elasticsearch index.

## Update a document

A single document can be accessed using its `id` within an index using a GET request that has the following path:

```json
// Path
/users/_doc/2
```

---

#### Example

> Retrieve data for a particular document based on its `id`.

**Setup**:

* Create a query `UpdateUser` based on your Elasticsearch datasource, and set it to use the **POST** method.
* Set the **Path** field to `/users/_udpate/{{  }}`.

## Delete a document

Deleting documents only requires a reference to the relevant `id` field that is sent across in a DELETE request. The request below returns the deleted resource if it exists.

```json
// Path
/movies/_doc/5
```

---

#### Example

> SCENARIO

Steps

## Further reading

* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)
* [Table widget](/reference/widgets/table)
* [Form widget](/reference/widgets/form)
