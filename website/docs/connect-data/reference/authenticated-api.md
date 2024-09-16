---
description: This page provides detailed information on how to establish a connection between Appsmith and an API that mandates authentication for every request.
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Authenticated API

Authenticated APIs require secure access, typically involving some form of authentication. Use this datasource to create queries within the same API, sharing common settings such as base URL, authentication, headers, and more, thereby minimizing redundant configurations. For a single-query setup, consider using a [REST API](/connect-data/reference/rest-api) datasource. This page provides information on how to connect your application to an API that requires authentication.

## Connection parameters

The following section provides a detailed view of essential as well as optional parameters to establish a connection with an API datasource.

<ZoomImage src="/img/restapi-datasource-config.png" alt="Configuring an Authenticated API datasource" caption="Configuring an Authenticated API datasource" />

:::caution
The datasource configuration fields do not accept JavaScript code or bindings using mustache `{{}}` syntax.
:::

### URL

<dd>

The uniform resource locator (URL) specifies the address of the service or endpoint to which the requests will be made. This is typically the base URL of the REST API you are connecting to. If you wish to connect to a local database or API, see the [Connect Local Datasource](/connect-data/how-to-guides/how-to-work-with-local-apis-on-appsmith) guide.

</dd>


### Send Appsmith signature header

<dd>
When enabled, Appsmith adds an extra header, `X-Appsmith-Signature`, to your requests. This header contains a JSON Web Token (JWT) signed with a secret string. You can use this header to verify that the incoming requests are originating from Appsmith. This mechanism ensures the integrity and authenticity of requests originating from Appsmith.
</dd>

### Use self-signed certificate

<dd>
When enabled, this option allows you to upload a self-signed certificate in the .PEM (Privacy Enhanced Mail) format, which is securely stored in an encrypted format. This certificate is then included in the request made by Appsmith to the endpoint.
</dd>

### Headers

<dd>

Headers contain key-value pairs that you include in the header section of your HTTP requests. You use headers to provide information to the server, such as authentication tokens, content types, or custom headers required by the API you are connecting to.

</dd>

### Query parameters

<dd>
Query parameters consist of key-value pairs passed as parameters in the URL of your HTTP requests. You use query parameters to provide specific information to the server, such as filtering criteria, sorting options, or specific data needed for the request.
</dd>


### Authentication type

<dd>
The authentication type setting determines the method used to authenticate requests. You can configure the details under the Authentication dropdown menu. The available options are:
  - **None**- When selected, Appsmith doesn't send authentication information with the request. Use this option if your API doesn't require authentication details in the request.  
  - **Basic**- When selected, Appsmith sends the Username and Password in the Authorization header of each request as a base64-encoded string. Use this option if your API requires username and password details in the request.
  - **OAuth 2.0**- When selected, Appsmith enables integration with APIs that require OAuth 2.0 authentication. With OAuth 2.0 you can configure secure authorization flows, allowing you to grant limited access to resources. For more information, see the [OAuth 2.0 Configuration](#oauth-20) section.
  - **API Key**- When selected, Appsmith sends a key-value pair in the Authorization header of each request. This method is commonly used for API authentication, where the API hosting provider supplies a unique API key to the client for securely accessing the APIs.
  - **Bearer Token**- When selected, Appsmith sends a bearer token value in the Authorization header of each request. This method is commonly used for token-based authentication, where the API hosting provider supplies a token to the client for securely accessing the APIs.
</dd>

## OAuth 2.0

Configuring OAuth 2.0 involves selecting the appropriate authorization flows and specifying configuration parameters for them. This includes defining the Grant type, Authorization URL, Access Token URL, Client ID, Client Secret, Scopes, and other relevant parameters required for integrating APIs that use OAuth 2.0 as an authentication method.

### Grant type
<dd>
  Grant type determines the method for a client application to receive an access token for authenticating requests to a resource server on behalf of a user. The below grant types are available for integration:

  * **Authorization Code** - The authorization code grant type is commonly used for Appsmith user authorization. It works by redirecting the user to the authorization server, where the user logs in and gives consent to Appsmith. Afterward, the authorization server redirects the user back to Appsmith with an authorization code. This code is then exchanged by Appsmith for an access token. The access token acts as a credential, allowing Appsmith to access protected resources on your behalf for future requests.

  * **Client Credentials** - The client credentials grant type is commonly used when the Appsmith application needs access to its own resources, rather than acting on behalf of a user. In this scenario, the client (Appsmith) must be configured on the provider side with its own set of client credentials, typically consisting of a client ID and client secret. Once configured, Appsmith authenticates itself with the authorization server using these credentials. Upon successful authentication, the authorization server issues an access token directly to Appsmith. This access token then serves as the Appsmith credential, enabling it to access its own resources for future requests.

</dd>

### Add Access Token To

<dd>
The parameter _Add Access Token To_ defines where to include the access token in the request. The available options are:

  * **Request Header** - This method is commonly used for security reasons, as it keeps the token hidden from users and prevents it from being exposed in the URL. When selected, Appsmith includes the access token in a request header. Choose this option if the API requires the access token to be provided as part of the request header. 

  * **Request URL** - This method is simple and straightforward, but it may be less secure if the URL, containing sensitive information like access tokens, is stored or recorded. When selected, Appsmith includes the access token as a query parameter in the request URL. Choose this option if the API requires the access token to be passed as a query parameter in the request URL. 
</dd>

### Header prefix

<dd>
Specifies the string that precedes the access token when included as a header. The most commonly used term for this prefix is `Bearer`, but it's important to verify what your API expects. For example, in Baserow, when authorizing an API using a JSON Web Token (JWT), Baserow expects you to prefix the access token with the term `JWT`.
</dd>


### Access token URL

<dd>
   The _Access Token URL_ is the endpoint on the authentication server used to exchange the authorization code for an access token. This URL is essential for obtaining access tokens, which are necessary for authenticating requests to protected resources. Appsmith uses the same URL to also generate new access tokens when an existing token expires, ensuring uninterrupted access to resources without requiring user re-authentication. You can get this API information from the official API documentation of the provider.
</dd>


### Client ID

<dd>
  The _Client ID_ is a unique identifier issued to your client application by the OAuth provider during the registration process. This identifier is used to authenticate your application when interacting with the OAuth provider's authentication server. You can typically find this information in the developer console or dashboard provided by the OAuth provider after registering your application.           
</dd>


### Client secret

<dd>
The _Client secret_ is a confidential string issued to your client application by the OAuth provider during the registration process. This secret is used to authenticate your application when making requests to the OAuth provider's authentication server. Like the Client ID, you can find this information in the developer console or dashboard provided by the OAuth provider after registering your application.         
</dd>

### Scopes

<dd>
  _Scopes_ specify the permissions required by your application to access protected resources on behalf of the user. When making requests to the authentication server of the OAuth provider, you can specify one or more scopes that define the level of access your application needs. The OAuth provider defines the scopes that correspond to different types of user data or actions within their ecosystem, you add these scopes when registering your application with the provider. 
  
  During configuring the parameter on Appsmith, you may choose to add one or more scopes as comma-separated values from the defined list of scopes supplied during registering the application with the provider. For example, when integrating with a user's Google Account using OAuth 2.0, you might request scopes such as `profile` to access basic profile information or `email` to access the user's email address. Similarly, when reading files from Dropbox, you define a scope such as `files.content.read` to allow file reading operations.     
</dd>

### Client Authentication

<dd>
The _Client Authentication_ parameter determines how Appsmith can share the client credentials (client ID and client secret) when communicating with the OAuth 2.0 authorization server. The available options are:

* **Send client credentials in body** - When selected, the client credentials are directly added in the request body as parameters. Typically, you add the client ID and client secret as form parameters in a URL-encoded or JSON-encoded request body.

 <ZoomImage src="/img/rest-api-form-encoded.png" alt="Client ID and secret sent as form URL encoded." caption="Client ID and secret sent as form URL encoded" />


* **Send as Basic Auth header** - When selected, the client ID and client secret are merged into a unified string and included in the Authorization header using the Basic Authentication scheme. This amalgamated string, consisting of the client ID and client secret separated by a colon, is then encoded in base64. Subsequently, this encoded string is prefixed with the term _Basic_.

  For example, if the client ID is `my_client_id` and the client secret is `my_client_secret`. The resulting string after concatenation and base64 encoding is `my_client_id:my_client_secret` and the final header appears as:
  
  ```javascript
  Authorization: Basic bXlfY2xpZW50X2lkOm15X2NsaWVudF9zZWNyZXQ=
  ```

</dd>

### Authorization URL

<dd>
    The _Authorization URL_ parameter is specific to the Authorization code grant type. It denotes the endpoint on the authentication server used to start the authentication process for the client application, which seeks authorization on behalf of the user.

    Appsmith uses this URL to redirect users to the provider's end and starts the authentication flow. When redirected, users log in and grant permissions to Appsmith. Subsequently, after successful authentication and authorization, the authorization server redirects the user back to Appsmith with an authorization code.

</dd>

### Redirect URL

<dd>
The _Redirect URL_ parameter is only available for the Authorization code grant type. Use the **Copy** button next to the parameter to copy and configure it on the OAuth provider. It acts as the endpoint to which the OAuth server redirects the flow after the user authenticates and authorizes Appsmith. While redirecting, the OAuth server includes an authorization code for further interaction between Appsmith and the OAuth server. 
</dd>

### Custom Authentication Parameters

<dd>
The _Custom Authentication Parameters_ setting is available only for the Authorization code grant type. It allows users to tailor the OAuth 2.0 authorization code flow to their specific needs or preferences. These parameters provide more control over the authentication process and enable the implementation of custom logic or processing at the OAuth provider level. 

Configure these parameters on Appsmith to customize authentication interactions and behaviors. For example, in Google OAuth 2.0, you can configure the `prompt` parameter to force users to select an account or provide consent. Similarly, in Dropbox OAuth 2.0, you can configure the `token_access_type` parameter to specify whether the access token is short-lived or long-lived and affects the token's validity period. 
</dd>


###  Authorization expires in (seconds)

<dd> 
Appsmith uses refresh tokens to generate new access tokens whenever the existing ones expire. Some OAuth provider doesn't specify the expiry duration (`expires_in` or `expires_at`) for access tokens. In such cases, use the _Authorization expires in (seconds)_ parameter that specifies the expiry time for the access token. This parameter is available only for the Authorization code grant type. When set, Appsmith uses the duration to determine when to invalidate the existing access token and generate a new access token. For example, Salesforce doesn't provide an expiry for the access token. You can configure this parameter for Appsmith to determine when to expire and refresh the access token after expiry.
</dd>


###  Audience

<dd>
The _Audience_ parameter expects a URI and identifies the resource server or API endpoint that will accept the access token. When configuring the parameter on Appsmith to pass the audience value, refer to the official documentation of the OAuth provider and the specific requirements and guidelines around audience setting.
</dd>

###  Resource

<dd>
The _Resource_ parameter expects an application URL that act as a protected resource server that Appsmith accesses on behalf of the user. The resource can contain different entities such as API endpoints, web services, files, or any other resource that requires access control. The responsibility of hosting and providing access to these protected resources lies with the resource server. When configuring the parameter on Appsmith to pass the resource value, refer to the official documentation of the OAuth provider and the specific requirements and guidelines around resource setting.
</dd>

###  Send scope with refresh token

<dd>
The _Send scope with refresh token_ setting is available only for the Authorization code grant type and determines whether to include the scopes with the refresh token when requesting a new access token. Some OAuth providers require a client application, which requests an access token using a refresh token, to include scopes in the authorization request. These scopes indicate the specific actions or resources the application needs access to when generating a new access token. In such cases, you need to configure this setting so that Appsmith includes the original scopes, defined as part of the [Scopes](#scopes) parameter in the authorization request for generating a new access token using a refresh token. 
</dd>

###   Send client credentials with (on refresh token) 

<dd>
The _Send client credentials with (on refresh token)_ setting is available only for the Authorization code grant type. It determines how Appsmith can share the client credentials (client ID and client secret) when communicating with the OAuth 2.0 authorization server for requesting a new access token using a refresh token. The available options are:


* **Body** - When selected, the client credentials are directly added to the request body as parameters. Typically, you add the client ID and client secret as form parameters in a URL-encoded or JSON-encoded request body as shown below:

 <ZoomImage src="/img/rest-api-form-encoded.png" alt="Client ID and secret sent as form URL encoded." caption="Client ID and secret sent as form URL encoded" />


* **Header** - When selected, Appsmith merges the client ID and client secret into a unified string separated by a colon, uses the Basic Authentication (base64) encryption,  prefixed with the term _Basic_, and adds it in the Authorization header. 

  For example, if the client ID is `my_client_id` and the client secret is `my_client_secret`, the resulting string after concatenation and base64 encoding would be `my_client_id:my_client_secret`, and the final header would appear as:
  
  ```javascript
  Authorization: Basic bXlfY2xpZW50X2lkOm15X2NsaWVudF9zZWNyZXQ=
  ```

</dd>

## Queries

Once you have configured your Authenticated API datasource, create queries to interact with the APIs. For detailed information on configuring queries, refer to the [REST API documentation](/connect-data/reference/rest-api).


## Troubleshooting

If you are facing issues, refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors), or contact support via the chat widget at the bottom right of this page.

## See Also

- [Download Files](/connect-data/how-to-guides/how-to-download-files-using-api) - Learn how to download files using a URL with API integrations.
- [Upload Files using API](/build-apps/how-to-guides/Send-Filepicker-Data-with-API-Requests) - Step-by-step guide on how to upload files via API using the Filepicker widget.
- [Setup Server-Side Pagination ](/build-apps/how-to-guides/Server-side-pagination-in-table) - Learn how to efficiently handle large datasets by implementing Server-side pagination in Table.