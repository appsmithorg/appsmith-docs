---
description: Connect Appsmith to an Authenticated API and create queries.
---

# Authenticated API

This page gives information to connect Appsmith to an Authenticated API and to read and write data in your applications.

Use this datasource to create multiple queries for the same API. Every query created from this datasource has shared configuration (root URL, authentication, headers, and so on) to avoid re-entering details. If you're only creating a single query for your API, try using a [REST API](/reference/datasources/rest-api) datasource.

## Connect Authenticated API

:::caution 
If you are a self-hosted user, you must whitelist the IP address of the Appsmith deployment `18.223.74.85` and `3.131.104.27` on your API instance or VPC before connecting to the API.
:::

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters available for REST APIs.

<figure>
   <img src="/img/restapi-datasource-config.png" style= {{width:"100%", height:"auto"}} alt="Configuring an Authenticated API datasource."/>
   <figcaption align = "center"><i>Configuring an Authenticated API datasource.</i></figcaption>
</figure>
  
<dl>
  <dt><b>URL</b></dt>
  <dd>Sets the endpoint to query.</dd>
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
      <li><b>Basic:</b> Expects a <b>Username</b> and <b>Password</b> to be used for authenticating HTTP requests.</li>
      <li><b>OAuth 2.0:</b> Enables several fields for configuring an OAuth 2.0 integration. For more information, see <a href="/core-concepts/connecting-to-data-sources/authentication/authentication-type/oauth2-authentication">OAuth 2.0 Authentication</a>.</li>
      <li><b>API Key:</b> Sends a key/value pair to be used for authorization. You can specify the key's prefix, as well as choose whether it's sent in the request header or the query params.</li>
      <li><b>Bearer Token:</b> Sends a token value in the request headers to be used for authenticating the user, in the format <code>Authorization: Bearer &lt;your-token&gt;</code>.</li>
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