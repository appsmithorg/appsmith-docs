---
description: Connect Appsmith to an Authenticated API.
---

# Authenticated API

This page gives information to connect Appsmith to an Authenticated API.

Use this datasource to create multiple queries for the same API. Every query created from this datasource has shared configuration (root URL, authentication, headers, and so on) to avoid re-entering details. If you're only creating a single query for your API, try using a [REST API](/reference/datasources/rest-api) datasource.

## Connect Authenticated API

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters available for REST APIs.

<figure>
   <img src="/img/restapi-datasource-config.png" style= {{width:"100%", height:"auto"}} alt="Configuring an Authenticated API datasource."/>
   <figcaption align = "center"><i>Configuring an Authenticated API datasource.</i></figcaption>
</figure>
  
<dl>
  <dt><b>URL</b></dt>
  <dd>Sets the domain that this datasource should query. Queries created from this datasource inherit this as a base URL.</dd><br/>
  <dd>
    For example, if you set <b>URL</b> to <code>https://api.example.com</code>, then its queries would all start with that URL as their base path and you'd add the endpoint (like <code>/users/search/</code>) as a suffix within each query.
  </dd>
</dl>

<dl>
  <dt><b>Headers</b></dt>
  <dd>Sets key/value pairs to send in the header of all HTTP requests to this datasource.</dd>
  <dd><em>To learn how to set up dynamic headers, visit and fork this <a href="https://app.appsmith.com/applications/6200ac292cd3d95ca414dc4f/pages/624eda0551a8863d6c406760">sample app</a></em>.</dd>
</dl>

<dl>
  <dt><b>Query parameters</b></dt>
  <dd>Sets key/value pairs to send as part of all HTTP requests to this datasource.</dd>
</dl>

<dl>
  <dt><b>Authentication Type</b></dt>
  <dd>Sets the method used to authenticate requests. Configure details under the <b>Authentication</b> dropdown after selecting your Authentication Type.</dd><br/>
  <dd><i>Options:</i>
    <ul>
      <li><b>None:</b> Does not send any authentication information.</li>
      <li><b>Basic:</b> Expects a <b>Username</b> and <b>Password</b>, which are sent in each request as a base64-encoded string in the request's Authorization header.</li>
      <li>
        <b>OAuth 2.0:</b> Enables several fields for configuring an OAuth 2.0 integration.
        <ul>
          <li><b>Grant Type:</b> Sets the method that is used to get an access token. Choose from <a href="/core-concepts/connecting-to-data-sources/authentication/authentication-type/oauth2-authentication/authorization-code">Authorization Code</a> or <a href="/core-concepts/connecting-to-data-sources/authentication/authentication-type/oauth2-authentication/client-credentials">Client Credentials</a>.</li>
          <li><b>Add Access Token To:</b> Sets whether the access token is sent as a <b>Request Header</b> or as a query parameter (<b>Request URL</b>).</li>
          <li><b>Header Prefix:</b> When the access token is sent as a header, this sets a string to prefix the access token. A common example is <code>Bearer</code>.</li>
          <li><b>Access Token URL:</b> The endpoint on the authentication server that is used to exchange the authorization code for an access token.</li>
          <li><b>Client ID:</b> The identifier issued to the client by the OAuth provider during app registration.</li>
          <li><b>Client Secret:</b> The secret string issued to the client by the OAuth provider during app registration.</li>
          <li><b>Scopes:</b> Sets the requested scopes that are requested. This field can have multiple comma-separated values.</li>
          <li><b>Client Authorization:</b> Sends the client secret either in the request body as <code>client_id</code> and <code>client_secret</code> parameters, or within the headers encoded as basic HTTP authentication.</li>
          <li><b>Authorization URL:</b> The endpoint on the authentication server that is used to request authentication for the client.</li>
          <li><b>Redirect URL:</b> The URL that the OAuth server should redirect to.</li>
          <li><b>Custom Authentication Parameters:</b> User-defined key/value pairs to be encoded and sent as authentication parameters.</li>
          <li><b>Audience:</b> Expects a URL, specifies the intended audience for the OAuth access token.</li>
          <li><b>Resource:</b> Expects a URL, specifies an application to act as a resource server.</li>
        </ul>
        For more information, see <a href="/core-concepts/connecting-to-data-sources/authentication/authentication-type/oauth2-authentication">OAuth 2.0 Authentication</a>.
      </li>
      <li><b>API Key:</b> Sends a key/value pair which is sent as a base64-encoded string in the request's Authorization header. You can specify the key's prefix, as well as choose whether it's sent in the request header or the query params.</li>
      <li><b>Bearer Token:</b> Sends a bearer token value as a base64-encoded string in the request's Authorization header.</li>
    </ul>
  </dd>  
</dl>

<dl>
  <dt><b>Send appsmith signature header</b></dt>
  <dd>When enabled, it sends an additional key/value pair in the request header in the format: <code>X-Appsmith-Signature: &lt;session-details-signature-key&gt;</code>. For more information, see <a href="/core-concepts/connecting-to-data-sources/authentication/signature-header-in-api-actions">Signature Header</a>.</dd>
</dl>

<dl>
  <dt><b>Use self-signed certificate</b></dt>
  <dd>When enabled, you can upload your own certificate file. For more information, see <a href="/core-concepts/connecting-to-data-sources/authentication/self-signed-certificates">Self-Signed Certificates</a>.</dd>
</dl>


## Queries

Once you have set up your Authenticated API datasource, you're ready to create queries.

**Visit the [REST API docs](/reference/datasources/rest-api) to learn about the query configuration parameters.**