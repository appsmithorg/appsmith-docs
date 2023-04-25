# Basic

Basic authentication is a simple method for verifying the identity of users making requests to an API. It involves sending an HTTP header with a base64-encoded username and password. This process is simple to set up and configure, making it convenient for developers to implement in their APIs.

## How does basic authentication work

The `base64(username:password)` portion is the base64-encoded version of the string username:password. This allows the server to verify the identity of the user making the request without sending the `plaintext` password over the network.

When the server receives a request with the Authorization header, it decodes the base64-encoded string and checks the `username` and `password` against its own records. If the credentials are valid, the server allows the request to proceed. If the credentials are invalid or missing, the server returns an **HTTP 401** Unauthorized error to the client.

To share basic authentication details across multiple APIs, you can use the `Basic` authentication mechanism within datasources. To do this:

 <VideoEmbed host="youtube" videoId="SM0K4XkkJgM" title="basic authentication" caption="Basic Authentication"/> 

* Click the `+` icon next to the datasources section 
* Add an Authenticated API
* Enter the Base URL of the API (example: `https://mock-api.appsmith.com`) and select the authentication type as **Basic**.

The base64-encoded username and password are automatically added to the header of the API request, allowing the API to verify the identity of the user making the request.





## Authentication


![Select Basic from the available Authentication Type](</img/basic-auth.png>)


### Username
The username is a string that identifies the user making the request to the API. It's often a combination of the user's first and last name, or it could be a unique identifier like an email address or employee number.

### Password
Password is a **secret string** that's used to verify the identity of the user making a request to an API. The password is sent as part of the Authorization header in an HTTP request, along with the username, to the server that's hosting the API.

The server uses the password to verify the identity of the user and determine whether the request should be allowed to proceed. **The password is stored in a encrypted form**, to protect it from being accessed by unauthorized users.

:::info important
The Appsmith's system doesn't store any information about query responses or user inputs. Appsmith only acts as a proxy and never logs or stores the private/confidential data in Appsmith's data stores.
:::