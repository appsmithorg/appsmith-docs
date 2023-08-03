---
sidebar_position: 8
description: Connect Appsmith to a GraphQL API and create queries.
---
# GraphQL

This page provides information for connecting your application to a GraphQL API and for using queries to manage its content.

## Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to a GraphQL API.

<figure>
  <img src="/img/graphql-datasource-config.png" style={{width: "100%", height: "auto"}} alt="Configuring a GraphQL datasource" />
  <figcaption align="center"><i>Configuring a GraphQL datasource.</i></figcaption>
</figure>

<dl>
  <dt><b>URL</b></dt>
  <dd>
  
The URL of the GraphQL service to query. For a guide about connecting to a local APIs, see [Connect Local Database]("/connect-data/how-to-guides/how-to-work-with-local-apis-on-appsmith").

</dd><br/>

  <dt><b>Headers</b></dt>
  <dd>
  
Key-value pairs to include in the header section of your HTTP requests.

  </dd><br/>

  <dt><b>Query parameters</b></dt>
  <dd>
  
Key-value pairs that should be passed as parameters in the URL of your HTTP requests.

  </dd><br/>

  <dt><b>Send Appsmith signature header</b></dt>
  <dd>
  
When enabled, you can enter a secret string of at least 32 characters in the <b>Session Details Signature Key</b> field. Every API call made to this datasource then includes an additional header, <code>X-Appsmith-Signature</code>, whose value is a <a href="https://jwt.io">JSON Web Token (JWT)</a> signed with a signature created from your secret string. This can be used to help prove the integrity and authenticity of your requests originating from Appsmith.

  </dd><br/>timestamp

<dt><b>Authentication Type</b></dt>
  <dd>Sets the method used to authenticate requests. Configure details under the <b>Authentication</b> dropdown after selecting your Authentication Type.</dd><br/>
  <dd><i>Options:</i>
    <ul>
      <li><b>None:</b> Does not send any authentication information.</li>
      <li><b>Basic:</b> Expects a <b>Username</b> and <b>Password</b>, which are sent in each request as a base64-encoded string in the request's Authorization header.</li>
      <li>
        <b>OAuth 2.0:</b> Enables several fields for configuring an OAuth 2.0 integration.
        <ul>
          <li><b>Grant Type:</b> An authorization grant type is a secured representation of the owner’s authorization presented in exchange for an access token. <br/>
          <i>Options:</i>
          <b>Authorization Code</b> : An authorization code is a temporary code authorized by an authorization server. You can get an access token in exchange for an authorization code. Once you get an access token, you can use it to access the resources or perform actions on behalf of the user.<br/>
         <b>Client Credentials</b>.
         </li>
          <li><b>Add Access Token To:</b> Sets whether the access token is sent as a <b>Request Header</b> or as a query parameter (<b>Request URL</b>).</li>
          <li><b>Header Prefix:</b> When the access token is sent as a header, this sets a string to prefix the access token. A common example is <code>Bearer</code>.</li>
          <li><b>Access Token URL:</b> The endpoint on the authentication server that is used to exchange the authorization code for an access token.</li>
          <li><b>Client ID:</b> The identifier issued to the client by the OAuth provider during app registration.</li>
          <li><b>Client Secret:</b> The secret string issued to the client by the OAuth provider during app registration.</li>
          <li><b>Scopes:</b> Sets the requested scopes that are requested. This field can have multiple comma-separated values.</li>
          <li><b>Client Authorization:</b> Sends the client secret either in the request body as <code>client_id</code> and <code>client_secret</code> parameters or within the headers encoded as basic HTTP authentication.</li>
          <li><b>Authorization URL:</b> The endpoint on the authentication server that is used to request authentication for the client.</li>
          <li><b>Redirect URL:</b> The URL that the OAuth server should redirect to.</li>
          <li><b>Custom Authentication Parameters:</b> User-defined key/value pairs to be encoded and sent as authentication parameters.</li>
          <li><b>Audience:</b> Expects a URL, specifies the intended audience for the OAuth access token.</li>
          <li><b>Resource:</b> Expects a URL, specifies an application to act as a resource server.</li>
        </ul>
      </li>
      <li><b>API Key:</b> Sends a key/value pair which is sent as a base64-encoded string in the request's Authorization header. You can specify the key's prefix, as well as choose whether it's sent in the request header or the query params.</li>
      <li><b>Bearer Token:</b> Sends a bearer token value as a base64-encoded string in the request's Authorization header. If you are using OIDC protocol to log in to your instance, you can use the <a href="/getting-started/setup/instance-configuration/authentication/json-web-tokens-jwt#access-token">access token</a> of the logged-in user as a bearer token.</li>
    </ul>
  </dd><br/>

<dt><b>Use self-signed certificate</b></dt>
  <dd>
  
When enabled, you can upload your own self-signed certificate for accessing your endpoint. These can be useful for accessing your API without relying on external agnecies to issue certificates for authenticating the origin of your requests.

  </dd>
  <dd>
  
This information needs to be provided in .PEM (_Privacy Enhanced Mail_) format. The certificate information is stored securely in an encrypted format in the database.

  </dd>

</dl>

## Create queries

The following section is a reference guide that provides a complete description of all the read and write operation commands with their parameters to create GraphQL queries.

<figure>
  <img src="/img/graphql-query-config.png" style={{width: "100%", height: "auto"}} alt="Creating a GraphQL query." />
  <figcaption align="center"><i>Creating a GraphQL query.</i></figcaption>
</figure>

GraphQL queries are written in the **Body** tab of the query screen. Use the **Query** window to construct your query or mutation, and the adjacent **Query Variables** window to add any variables to map into your query.

### Fetch records

Use a query like the one below to retrieve records from your datasource.

In the example below, `UsersTable` is the name of a Table widget used to search for a user by name and display the results. This query uses `limit` and `offset` to implement [**server-side pagination**](/reference/widgets/table#server-side-pagination).

In the **Query** window:

```javascript
query GetUserData (name: String!, $limit: Int!, $offset: Int!) {
  user (name: $name, first: $first, offset: $offset) {
    id
    name
    email
    date_of_birth
  }
}
```

In the **Query variables** window:

```javascript
{
  "name": {{ UsersTable.searchText }},
  "limit": {{ UsersTable.pageSize }},
  "offset": {{ UsersTable.pageOffset }}
}
```

### Insert a record

Use an insert mutation to add new records to your GraphQL datasource.

In the example below, `CreateUserForm` is the name of a [Form widget](/reference/widgets/form) used to collect input for the new record.

In the **Query** window:

```javascript
mutation CreateUser (name: String!, email: String!, date_of_birth: String!){
  createUser(name: $name, email: $email, date_of_birth: $date_of_birth) {
    id
    name
    email
    date_of_birth
  }
}
```

In the **Query variables** window:

```javascript
{
  "name": {{ CreateUserForm.data.name }},
  "email": {{ CreateUserForm.data.email }},
  "date_of_birth": {{ CreateUserForm.data.date_of_birth }}
}
```

### Update a record

Use an update mutation to modify an existing record in your dataset.

In the example below, `UpdateUserForm` is the name of a [Form widget](/reference/widgets/form) used to collect input for the new record.

In the **Query** window:

```javascript
mutation UpdateUser (id: Int!, name: String, email: String, date_of_birth: String){
  updateUser(id: $id, name: $name, email: $email, date_of_birth: $date_of_birth) {
    id
    name
    email
    date_of_birth
  }
}
```

In the **Query variables** window:

```javascript
{
  "id": {{ UpdateUserForm.data.id }}
  "name": {{ UpdateUserForm.data.name }},
  "email": {{ UpdateUserForm.data.email }},
  "date_of_birth": {{ UpdateUserForm.data.date_of_birth }}
}
```

### ​Delete a record​

Use a delete mutation to delete an existing record from your dataset.

In the example below, `UsersTable` is the name of a Table widget used to display the results from a previous query.

In the **Query** window:

```javascript
mutation DeleteUser (id: Int!){
  deleteUser(id: $id) {
    id
    name
    email
    date_of_birth
  }
}
```

In the **Query variables** window:

```javascript
{
  "id": {{ UpdateUserForm.data.id }}
}
```
