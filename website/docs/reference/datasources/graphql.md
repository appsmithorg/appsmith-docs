---
sidebar_position: 8
---
# GraphQL

This page describes how to connect your application to a GraphQL API and use queries to manage its content.

<VideoEmbed host="youtube" videoId="KPLrbp-4Y6E" title="How To Build Apps With GraphQL APIs feat. Hasura" caption=""/>

## Connect to GraphQL

To add a GraphQL datasource, click the (**+**) sign in the **Explorer** tab next to **Datasources**. On the next screen, select the **Authenticated GraphQL API** button. Your datasource is created and you are taken to a screen to configure its settings.

If your API doesn't require authentication, you can select the **GraphQL API** datasource instead and skip the configuration screen.

<figure>
  <img src="/img/graphql-datasource-config.png" style={{width: "100%", height: "auto"}} alt="Configuring a GraphQL datasource" />
  <figcaption align="center"><i>Configuring a GraphQL datasource.</i></figcaption>
</figure>

:::tip
If you want to connect to a local api, you can use a service like ngrok to expose it. For more information, see [How to connect to local api on Appsmith](/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith).
:::

To connect to a GraphQL API endpoint, Appsmith needs the following parameters. All required fields are suffixed with an asterisk (*).

**URL*:** provide the URL of the GraphQL service to query. If you are on a self-hosted instance and connecting to an API on `localhost`, use `host.docker.internal` on Windows and macOS hosts and `172.17.0.1` on Linux hosts to access services running on the host machine from within the container.

**Headers:**  provide any header key-value pairs that you'd like to include in your HTTP requests.

**Query Parameters:** provide any parameters that should be passed as key-value pairs in the URL of your requests.

**Send Appsmith signature header:** choose whether to include a special token in your request headers to help prove authenticity and integrity. For more information, read [signature headers](/core-concepts/connecting-to-data-sources/authentication/signature-header-in-api-actions).

**Authentication Type:** choose the style of authentication to use for your queries. To read more about some of the options, visit [authentication types](/core-concepts/connecting-to-data-sources/authentication/authentication-type).

**Use self-signed certificate:** choose whether to upload your own self-signed certificate for encryption. For more information, read [self-signed certificates](/core-concepts/connecting-to-data-sources/authentication/self-signed-certificates).

## Create queries

<figure>
  <img src="/img/graphql-query-config.png" style={{width: "100%", height: "auto"}} alt="Creating a GraphQL query." />
  <figcaption align="center"><i>Creating a GraphQL query.</i></figcaption>
</figure>

You can write [queries](https://docs.appsmith.com/core-concepts/data-access-and-binding/querying-a-database/query-settings) to fetch or write data by selecting the **+ New Query**  button on the Authenticated GraphQL datasource page, or by clicking (**+**) next to **Queries/JS** in the **Explorer** tab and selecting your GraphQL datasource. You'll be brought to a new query screen where you can write queries.

GraphQL queries are written in the **Body** tab of the query screen. Use the **Query** window to construct your query or mutation, and the adjacent **Query Variables** window to add any variables to map into your query.

### Fetch records

Use a query like the one below to retrieve records from your datasource.

```javascript
query GetUserPosts {
  user (name: "<user-name>") {
    posts (last: 5) {
			id
      title
      slug
    }
  }
}
```

Depending on the schema of the API you are querying, it's highly recommended to use arguments like `first`, `last`, `limit`, etc. to prevent querying huge numbers of records at once. The preceding example used `last: 5` to only return the most recent 5 results.

#### Server side pagination

Pagination help improve your app's performance by requesting only parts of a dataset at a time, instead of the entire set at once. Special pagination settings for your GraphQL query can be found in the **Pagination** tab of the query screen.

To use pagination, first define the variables you need in the body of your query. For example:

```javascript
query GetAllPosts (limit: $limit, offset: $offset) {
  posts (limit: $limit, offset: $offset) {
    id
    title
    slug
  }
}
```

In the example, there are two variables defined in the first line of the query: `limit` and `offset`. Variables declared this way can be selected and used in the **Pagination** tab.

##### Offset-based pagination

This style uses parameters to define a **limit** (maximum number of results) and an **offset** (number of records to skip before returning results).

* **Limit Variable**: Selects which variable to use as the query's limit.
* **Limit Value**: Sets the maximum number of records that can be returned from the query.
* **Offset Variable**: Selects which variable to use as the query's offset.
* **Offset Value**: Sets how many records to skip before returning new records in the query.

For example, imagine you have a Table widget `PostsTable`. Take a look at the following query:

```
query GetAllPosts (limit: $limit, offset: $offset) {
  posts (limit: $limit, offset: $offset) {
    id
    title
    slug
  }
}
```

* **Limit Variable** should be set to `limit`, and **Offset Variable** should be set to `offset`.
* To connect your query to your `PostsTable`, you'd set **Limit Value** to `{{ PostsTable.pageSize }}` and **Offset Value** to `{{ PostsTable.pageOffset }}`.

##### Cursor-based pagination

Cursor-based pagination (or "keyset pagination") works by returning a pointer to a specific item in the dataset. One of the most important strengths of cursor pagination is querying real-time data. This is because cursors don't require the data to remain static.

It uses **before** and **after** cursors to traverse the data. Let's define a few terms related to cursor-based Pagination.

**Configure Previous Page**

* **Limit Variable Name**: Select the variable from the query that holds the last or previous limit value.
* **Limit Variable Value**: Override the value for the previous number of rows to be fetched.
* **Start Cursor Variable**: Select the variable which holds the _before cursor_.
* **Start Cursor Value**: Binding the widget action to the previous page activity.

**Configure Next Page**

* **Limit Variable Name**: Select the variable from the query that holds the first or next limit value.
* **Limit Variable Value**: Update the value for the number of rows fetched next.
* **Start Cursor Variable**: Select the variable which holds the _after_ cursor.
* **Start Cursor Value**: Binding the widget action to the next page activity.

The following example describes how Cursor Based Pagination works by displaying a GitHub repository’s issues in a list widget using [GitHub’s GraphQL API](https://docs.github.com/en/graphql).

In this case, you can declare the pagination variables that stand for **before**, **after**, **first**, and **last**.

Run the following code before defining values for cursor-based pagination:

  ```
  query nodesPagination{ 
    repository(owner:"appsmithorg", name:"appsmith"){
      issues(orderBy:{field:CREATED_AT, direction:DESC},first:6){
          id
          number
          title
        }
        pageInfo{
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  }
  ```

* Add the **before**, **after**, **first**, and **last variables** in the code as highlighted below:

  ```
  query nodesPagination($afterValue:String,$beforeValue:String,$firstValue:Int,$lastValue:Int){ 
    repository(owner:"appsmithorg", name:"appsmith"){
      issues(orderBy:{field:CREATED_AT, direction:DESC},first:$firstValue, last:$lastValue, after:$afterValue, before:$beforeValue){
          id
          number
          title
        }
        pageInfo{
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  }
  ```

* In the pagination section, select **Paginate via Cursor based**, and map the values as follows:

  ```
  Configure Previous Page
  Limit Variable Name: lastValue 
  Limit Variable Value: {{Table1.pageSize}} //your table or list's page size

  Start Cursor Variable: beforeValue
  Start Cursor Value: {{testapi.data.data.repository.issues.pageInfo.startCursor}}

  Configure Next Page
  Limit Variable Name: firstValue
  Limit Variable Value: this is by default the same value as the "previous page" configuration's value. If you want to override this, please select the checkbox "enable separate value for first limit variable"

  End Cursor Variable: afterValue
  End Cursor Value: {{testapi.data.data.repository.issues.pageInfo.endCursor}}
  ```

* Set list widget’s Items property to:

  ```
  {{yourquery.data.data.repository.issues.nodes}}
  ```

---

#### Example

> Fetch issues from a sample `users` API, 10 records at a time, and put them into a Table widget `UsersTable` with columns for `name`, `id`, and `email`.

**Setup:** to access the sample GraphQL API, create a **GraphQL API** datasource with the following URL:

```https://viable-mosquito-19.hasura.app/v1/graphql```

Then, create a query called `FetchUsers` based on your GraphQL datasource as a `POST` type request.

* Create a [Table widget](/reference/widgets/table) on the canvas called `UsersTable`.

* In the **Body** tab of your `FetchUsers` query page, fill in your query in the main **Query** box, and add any variables in JSON format in the adjacent **Query Variables** box.

  ```javascript
  // In the QUERY window:
  query GetUsers ($limit: Int!, $offset: Int!){
    users(limit: $limit, offset: $offset){
      name
      id
      email
    }
  }
  ```

* In the **Pagination** tab of your query:
  * Select **Paginate via Cursor based**
  * Set **Limit Variable** to `limit`
  * Set **Limit Value** to `{{ UsersTable.pageSize }}`
  * Set **Offset Variable** to `offset`
  * Set **Offset Value** to `{{ UsersTable.pageOffset }}`

* In the **Table Data** property of your Table widget, bind the result of your query:

  ```javascript
  // in the Table Data property of IssueTable
  {{ FetchUsers.data.data.users }}
  ```

* In the Table's properties, turn on **Server Side Pagination**
  * In the **onPageChange** event that appears, choose to execute the `FetchUsers` query.

Now your table should fill with data when the query is run, and the page buttons in the table header cycle through the records.

### Insert a record

Use an insert mutation to add new records to your GraphQL datasource.

```javascript
mutation CreatePost {
  createPost(data: {author: "Amal", title: ... }) {
    post {
			id
      author
      title
    }
  }
}
```

The `createPost` method takes the new record data, and once the request is processed, the API responds with the new `post{...}` data to confirm the operation.

---

#### Example

> Create a new user in a sample `users` API.

**Setup:** to access the sample GraphQL API, create a **GraphQL API** datasource with the following URL:

```https://viable-mosquito-19.hasura.app/v1/graphql```

Then, create a query called `CreateUser` based on your GraphQL datasource as a `POST` type request.


* Start by [fetching existing users](#fetch-records) from the API into a Table widget `UsersTable` with a query called `FetchUsers`.

* To gather data for the new record, create a [JSON Form](/reference/widgets/json-form) on the canvas called `NewUserForm`. Add **Source Data** to the JSON Form to create input fields:

  ```javascript
  {{
    {
      name: "",
      email: ""
    }
  }}
  ```

* In the JSON Form's Submit [button](/reference/widgets/button) properties, configure the **onClick** event to execute your query:

  ```javascript
  // Submit button's onClick event
  {{ CreateUser.run() }}
  ```

* Once these form fields are filled out, you can add their values to your query in the **Body** tab like below:

  ```javascript
  // In the QUERY window
  mutation CreateUser (
    $name: String!,
    $email: String!
  ) {
    insert_users_one(
			object: {
				name: $name,
				email: $email				
			}
		)
		{
			name,
			email
		}
  }
  ```

  ```javascript
  // In the QUERY VARIABLES window
  {
    "name": {{ NewUserForm.formData.name }},
    "email": {{ NewUserForm.formData.email }}
  }
  ```

When the Submit button is clicked, your query is executed and the new record is inserted. If it is successful, you should receive the new record's `name` and `email` fields back in response.

### Update a record

Use an update mutation to modify an existing record in your dataset.

```javascript
mutation UpdatePost {
  updatePost(data: {id: "<id>", title: "New Title" }) {
    post {
			id
      author
      title
    }
  }
}
```

The `updatePost` method uses the new values to update the dataset, and once the request is processed, the API responds with the new `post{...}` data to confirm the operation.

---

#### Example

> Update an existing user in a sample `users` API.

**Setup:** to access the sample `users` GraphQL API, create a **GraphQL API** datasource with the following URL:

```https://viable-mosquito-19.hasura.app/v1/graphql```

Then, create a query called `UpdateUser` based on your GraphQL datasource as a `POST` type request.

* Start by [fetching existing users](#fetch-records) from your repository into a Table widget `UsersTable` with a query called `FetchUsers`. You'll need this to get your existing user data.

* To gather new values for the record, create a [JSON Form](/reference/widgets/json-form) on the canvas called `UpdateUserForm`. Add **Source Data** to the JSON Form to create input fields, referencing the records in your `UsersTable` to help pre-fill the fields:

  ```javascript
  {{
    {
      id: {{ UsersTable.selectedRow.id }} // this value should not be changed
      name: {{ UsersTable.selectedRow.name }},
      email: {{ UsersTable.selectedRow.email }}
    }
  }}
  ```

* In the JSON Form's Submit [button](/reference/widgets/button) properties, configure the **onClick** event to execute your query:

  ```javascript
  // Submit button's onClick event
  {{ UpdateUser.run() }}
  ```

* Once these form fields are filled out, you can add their values to your query in the **Body** tab like below.
  * This code selects a record by its primary key (`id`), and uses `_set` to show which values to update on the record.

  ```javascript
  // In the QUERY window
  mutation UpdateUser (
    $id: Int!,
    $name: String,
    $email: String
  ) {
    update_users_by_pk(
			pk_columns: {
				id: $id
			},
			_set: {
				name: $name,
				email: $email
			}
		)
		{
      id,
			name,
			email
		}
  }
  ```

  ```javascript
  // In the QUERY VARIABLES window
  {
    "id": {{ UsersTable.selectedRow.id }},
    "name": {{ UpdateUserForm.formData.name }},
    "email": {{ UpdateUserForm.formData.email }}
  }
  ```

When the Submit button is clicked, your query is executed and the record is updated with new values. If the operation is successful, you'll receive a response with the record's `id`, `name`, and `value` as confirmation.

### ​Delete a record​

Use a delete mutation to delete an existing record from your dataset.

```javascript
mutation DeletePost {
  deletePost(data: {id: "<id>"}) {
    post {
			id
      author
      title
    }
  }
}
```

The `deletePost` method uses the passed values to locate the record to delete, and once the request is processed, the API responds with the deleted `post{...}` data to confirm the operation.

---

#### Example

> Delete an existing user in a sample `users` API.

**Setup:** to access the sample `users` GraphQL API, create a **GraphQL API** datasource with the following URL:

```https://viable-mosquito-19.hasura.app/v1/graphql```

Then, create a query called `DeleteUser` based on your GraphQL datasource as a `POST` type request.

* Start by [fetching existing users](#fetch-records) from your repository into a Table widget `UsersTable` with a query called `FetchUsers`. You'll need this to get your existing user data.

* Create a [Button widget](/reference/widgets/button) on the canvas and update its **Label** to "Delete." Set its **onClick** event to execute your `DeleteUser` query:

  ```javascript
  // in the Delete button's onClick event
  {{ DeleteUser.run() }}
  ```

* To delete a record, pass its `id` in your query:

  ```javascript
  // In the QUERY window
  mutation DeleteUser ($id: Int!) {
    delete_users_by_pk(id: $id)
    {
      id
			name
    }
  }
  ```

  ```javascript
  // In the QUERY VARIABLES window
  {
    "id": {{ UsersTable.selectedRow.id}}
  }
  ```

When the Submit button is clicked, your query is executed and the record is deleted. If the operation is successful, you should receive the record's `id` and `name` as confirmation.

## Further reading

* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)
* [Table widget](/reference/widgets/table)
* [Form widget](/reference/widgets/form)
