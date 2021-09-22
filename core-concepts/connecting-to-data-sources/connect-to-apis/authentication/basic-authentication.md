# Basic

To share basic authentication details across multiple APIs, you can use the `Basic` authentication mechanism within datasources. To do this, click on the `+` icon next to the datasources section and add an Authenticated API. Enter the Base URL of the API \(ex. **https://airtable.com**\) and select the authentication type as **Basic**. 

The username and password can now be configured under the authentication section and will add the base64 version of the username:password to the header of all APIs added under this datasource. Save this datasource and add a new API

![](../../../../.gitbook/assets/auth-api.gif)

