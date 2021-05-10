# OAuth 2.0

Appsmith supports the OAuth 2.0 specification with the following grant types: 

* [Authorization code](https://tools.ietf.org/html/rfc6749#section-1.3.1) 
* [Client credentials](https://tools.ietf.org/html/rfc6749#section-1.3.4)

## Authorization Code

The authorization code grant is used for 3 legged authentication flows where the resource owner grants consent to share their credentials with the authorization server. In Appsmith, since most APIs will need to run in the background, we enforce the authorization process before the data source can be used in an API. Once the authorization process is complete, the Appsmith server takes care of re-authentication for expired tokens.

Now to set up an API with OAuth 2.0 authorization, click on the `+` icon next to the API section

![](../../../../.gitbook/assets/authorization_code.gif)

You need to fill in the following details to use the authorization code flow:

* **Add Access Token To:** This field configures the field in which the access token information will be sent in the API request. \(Query parameter or Header\).
* **Header Prefix:** In case of sending the access token as an Authorization header, you can configure the prefix to be used using this field.
* **Access Token URL:** This is the endpoint on the authentication server that Appsmith should hit to exchange the authorization code for an Access Token.
* **Client ID:** The client identifier issued to the client during the application registration process
* **Client Secret:** The client secret issued to the client during the application registration process. This field is encrypted and stored in the Appsmith database. To avoid any security threats over the network, Appsmith does not allow users to view the client secret after the data source is saved.
* **Scope\(s\):** The scope of the access request. It may have multiple comma-separated values.
* **Authorization URL:** This is the endpoint on the Authorization Server that Appsmith will redirect you to retrieve an authorization code. This URL must expect query parameters according to the authorization code request [specification](https://tools.ietf.org/html/rfc6749#section-4.1.1) and respond with the corresponding [response](https://tools.ietf.org/html/rfc6749#section-4.1.2) for success and error states.
* **Custom Authentication Parameters:** These optional parameters may be configured if your authorization server expects certain extra values to enable refreshing tokens without user intervention. Google expects 2 additional parameters prompt: consent & access\_type:offline
* **Client Authentication:** This configures the field in the request where the credentials should be sent in order to exchange for an access token. The request can be sent as a JSON object in the body or as a Base64 Encoded string in the headers

{% hint style="warning" %}
Add the Appsmith callback URL to your list of allowed`Redirect URIs`in the authentication application. This URL of the form `https://<your-domain-origin-or-ip>/api/v1/datasources/authorize`To allow Appsmith cloud allow`https://app.appsmith.com/api/v1/datasources/authorize`
{% endhint %}

## Client Credentials

The client credentials grant is typically used for server-to-server communication. This means that this type of data source will not require intervention from the user once configured. Appsmith safely encrypts your credentials and reuses these credentials for all the API requests made using this data source.

![](../../../../.gitbook/assets/client-credentials.gif)

The fields relevant to this grant type are as follows:

* **Add Access Token To:** This field configures the field in which the access token information will be sent in the API request. \(Query parameter or Header\).
* **Header Prefix:** In case of sending the access token as an Authorization header, you can configure the prefix to be used using this field.
* **Access Token URL:** This is the endpoint on the authentication server that Appsmith should hit to exchange the authorization code for an Access Token.
* **Client ID:** The client identifier issued to the client during the application registration process
* **Client Secret:** The client secret issued to the client during the application registration process. This field is encrypted and stored in the Appsmith database. To avoid any security threats over the network, Appsmith does not allow users to view the client secret after the data source is saved.
* **Scope\(s\):** The scope of the access request. It may have multiple comma-separated values.

{% hint style="warning" %}
In case you feel like there may have been a data breach in your infrastructure, you can simply invalidate your client credentials at the authorization server to immediately revoke Appsmith's access to your resources.
{% endhint %}

