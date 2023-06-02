# Client Credentials

The client credentials grant is typically used for server-to-server communication. This means that this type of data source doesn't require intervention from the user once configured. Appsmith safely encrypts your credentials and reuses these credentials for all the API requests made using this data source.

![](/img/client-credentials.gif)

The fields relevant to this grant type are as follows:

* `Add Access Token To`**:** This field configures the field in which the access token information is sent in the API request. (Query parameter or Header).
* `Header Prefix`**:** In case of sending the access token as an Authorization header, you can configure the prefix to be used while using this field.
* `Access Token URL`**:** This is the endpoint on the authentication server that Appsmith should hit to exchange the authorization code for an Access Token.
* `Client ID`**:** The client identifier issued to the client during the application registration process
* `Client Secret`**:** The client secret issued to the client during the application registration process. This field is encrypted and stored in the Appsmith database. To avoid any security threats over the network, Appsmith does not allow users to view the client secret after the data source is saved.
* `Scope(s)`**:** The scope of the access request. It may have multiple comma-separated values.

:::note
In case you feel like there may have been a data breach in your infrastructure, you can simply invalidate your client credentials at the authorization server to immediately revoke Appsmith's access to your resources.
:::
