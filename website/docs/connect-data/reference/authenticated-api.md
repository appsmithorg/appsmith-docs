---
description: Connect Appsmith to an Authenticated API.
---

# Authenticated API

This page describes how to connect your application to an API with authentication.

Use this datasource to create multiple queries for the same API. Every query created from this datasource has shared configuration (root URL, authentication, headers, and so on) to avoid re-entering details. If you're only creating a single query for your API, try using a [REST API](/connect-data/reference/rest-api) datasource.

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters available for REST APIs.

<figure>
   <img src="/img/restapi-datasource-config.png" style= {{width:"100%", height:"auto"}} alt="Configuring an Authenticated API datasource."/>
   <figcaption align = "center"><i>Configuring an Authenticated API datasource.</i></figcaption>
</figure>

:::note
The datasource configuration fields do not accept JavaScript code or mustache syntax.
:::

<dl>
  <dt><b>URL</b></dt>
  <dd>

The URL of the service to query. For a guide about connecting to a local APIs, see [Connect Local Database](/connect-data/how-to-guides/how-to-work-with-local-apis-on-appsmith).

  </dd>

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

  </dd><br/>

<dt><b>Authentication Type</b></dt>
  <dd>Sets the method used to authenticate requests. Configure details under the <b>Authentication</b> dropdown after selecting your Authentication Type.</dd><br/>
  <dd><i>Options:</i>
    <ul>
      <li><b>None:</b> Does not send any authentication information.</li>
      <li><b>Basic:</b> Expects a <b>Username</b> and <b>Password</b>, which are sent in each request as a base64-encoded string in the request's Authorization header.</li>
      <li>
        <b>OAuth 2.0:</b> Enables several fields for configuring an OAuth 2.0 integration.
        <ul>
          <li><b>Grant Type:</b> An authorization grant type is a secured representation of the owner’s authorization presented in exchange for an access token.</li>
          <i>Options:</i>
          <ul>
            <li><b>Authorization Code</b> : An authorization code is a temporary code authorized by an authorization server. You can get an access token in exchange for an authorization code. Once you get an access token, you can use it to access the resources or perform actions on behalf of the user.</li>
            <li><b>Client Credentials</b>.</li>
          </ul>
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

## Queries

Once you have set up your Authenticated API datasource, you're ready to create queries.

Visit the [REST API docs](/connect-data/reference/rest-api) to learn about the query configuration parameters.
