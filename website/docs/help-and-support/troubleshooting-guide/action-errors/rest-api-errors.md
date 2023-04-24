---
sidebar_position: 2
---
# API Errors

## REST API

|  <div style= {{width:"120px"}}> Error Code </div> | <div style= {{width:"230px"}}> Error Title </div>|  Error Message                              |
| -------------    | ----------                     | ------------------------------------- |
| [PE-ARG-5000](#error)   | Invalid query configuration | The URI '$URI' specified in the REST request is invalid.      |
| [PE-ARG-5000](#error-1) | Invalid query configuration | The Content-Type '$CONTENT_TYPE' specified in the REST request is invalid.  |
| [PE-ARG-5000](#error-2) | Invalid query configuration | The REST request is missing an HTTP method. Supported HTTP methods are `$SUPPORTED_METHODS`. |
| [PE-RST-5000](#error-3) | API execution error             | The Appsmith server received an error response from `$ENDPOINT_NAME`.|
| [PE-JSN-4000](#error-4) | Invalid JSON found             | The REST request body has an invalid JSON '$FORMATTED_JSON_BODY'. |
| [PE-PLG-5000](#error-5) | Query execution error             | Appsmith failed to execute the REST request because of an internal error. |


### Query configuration is invalid
This error usually means there is an issue with the way you are specifying the request parameters or formatting the API request itself. This error can occur due to a variety of reasons, such as incorrect enpoint URL, incorrect formatting of requests, incorrect use of HTTP methods, etc.

#### Error
<Message
messageContainerClassName="error"
messageContent="[PE-ARG-5000] The URI '$URI' specified in the REST request is invalid. "></Message>

#### Cause
This error occurs when the URI specified in the request is invalid, improperly formatted or cannot be found.

#### Solution
* To resolve this issue, ensure that the URI is correctly formatted and complete. Eg: `<protocol>://<domain>.<domain>`. 
* Check for typos or missing information such as a missing endpoint or parameter. 
* Ensure that you are using the correct HTTP method (GET, POST, PUT, DELETE, etc.) for the URI you are trying to access. 
* Check that the server is up and running and that there are no connectivity issues. 
* Check the API documentation for any specific requirements or restrictions on the URI format.

---
#### Error
<Message
messageContainerClassName="error"
messageContent="[PE-ARG-5000] The Content-Type '$CONTENT_TYPE' specified in the REST request is invalid."></Message>

#### Cause
This error occurs when the MIME type specified in the request header does not match the expected value or format. The Content-Type header is used to indicate the format of the request body data being sent to the server. It's important to ensure that the Content-Type header is set correctly to ensure that the server can correctly interpret the request and respond accordingly.

Some common Content-Type MIME types for REST requests include:
* application/json: used to indicate that the request body contains data formatted as JSON.
* application/xml: used to indicate that the request body contains data formatted as XML.
* text/plain: used to indicate that the request body contains plain text.

#### Solution
To resolve the error, you should review the API documentation and ensure that the Content-Type header is set to the expected MIME type for the request payload.

---
#### Error
<Message
messageContainerClassName="error"
messageContent="[PE-ARG-5000] HTTPMethod must be set."></Message>

##### Cause
While making HTTP calls, One of the methods have to be used, i.E GET, POST, PUT, DELETE, e.t.c

##### Solution
Provide an ordered list of steps to guide users through the solution.

### API execution error
Explain the error message here

##### Error
<Message
messageContainerClassName="error"
messageContent="[PE-RST-5000] The Appsmith server received an error response from your API."></Message>

##### Cause
Provide background information or context that gives the user additional insight into the problem.


##### Solution
Provide an ordered list of steps to guide users through the solution.


### Invalid JSON found
Explain the error message here

##### Error
<Message
messageContainerClassName="error"
messageContent="[PE-JSN-4000] Plugin failed to parse JSON {0}"></Message>

##### Cause
Provide background information or context that gives the user additional insight into the problem.


##### Solution
Provide an ordered list of steps to guide users through the solution.

### Query execution error
Explain the error message here

##### Error
<Message
messageContainerClassName="error"
messageContent="[PE-PLG-5000] Your API failed to execute."></Message>

##### Cause
Provide background information or context that gives the user additional insight into the problem.

##### Solution
Provide an ordered list of steps to guide users through the solution.


<!-- ### Missing URL

##### Error
<Message
messageContainerClassName="error"
messageContent="DEFAULT_REST_DATASOURCE is not correctly configured. Please fix the following and then re-run: [Missing URL.]"></Message>

##### Cause
This message indicates that the REST API's [URL](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis#url) field in the API editor has been left empty.

##### Solution
This error can be fixed by providing a URL.


### Missing Client Secret, Client ID, Access Token URL

##### Error
<Message
messageContainerClassName="error"
messageContent="DEFAULT_REST_DATASOURCE is not correctly configured. Please fix the following and then re-run: [Missing Client Secret, Missing Client ID, Missing Access Token URL]"></Message>

##### Cause
This message indicates that the mentioned parameter fields - *Client Secret` , `Client ID` and `Access Token URL` have been left empty. These fields are available when you select **OAuth 2.0** option in the **Authentication Type** list. 

##### Solution
This error can be fixed by providing the Client secret, Client ID and the Access Token URL.

### Secret key required

##### Error
<Message
messageContainerClassName="error"
messageContent="Secret key is required when sending session details is switched on, and should be at least 32 characters in length."></Message>

##### Cause

This message indicates that you have select **Yes** in the **Send Appsmith signature header** list but the **Session Details Signature Key** field is empty.

##### Solution
This error can be resolved by filling in the **Session Details Signature Key** field or by selecting **No** option in the **Send Appsmith signature header** field. -->