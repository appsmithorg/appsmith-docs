---
sidebar_position: 2
---
# API Errors

## REST API

|  <div style= {{width:"120px"}}> Error Code </div> | <div style= {{width:"230px"}}> Error Title </div>|  Error Message                              |
| -------------    | ----------                     | ------------------------------------- |
| [PE-ARG-5000](#error)   | Invalid query configuration | The URI '$URI' specified in the REST request is invalid.      |
| [PE-ARG-5000](#error-1) | Invalid query configuration | The Content-Type specified in the REST request is invalid.  |
| [PE-ARG-5000](#error-2) | Invalid query configuration | The REST request is missing an HTTP method.|
| [PE-RST-5000](#error-3) | API execution error             | The Appsmith server received an error response from `<ENDPOINT_NAME>`.|
| [PE-JSN-4000](#error-4) | Invalid JSON             | The REST request body has an invalid JSON `<FORMATTED_JSON_BODY>`. |
| [PE-PLG-5000](#error-5) | Query execution error             | Appsmith failed to execute the REST request because of an internal error. |


### Invalid query configuration
This error usually means there is an issue with how you specify the request parameters or format the API request itself. This error can occur for various reasons, such as incorrect endpoint URL, incorrect formatting of requests, incorrect use of HTTP methods, etc.

#### Error
<Message
messageContainerClassName="error"
messageContent="[PE-ARG-5000] The URI '$URI' specified in the REST request is invalid. "></Message>

#### Cause
This error occurs when the URI specified in the request is invalid, improperly formatted or cannot be found.

#### Solution
* To resolve this issue, ensure the URI is correctly formatted and complete. Eg: `<protocol>://<domain>.<domain>`. 
* Check for typos or missing information, such as a missing endpoint or parameter. 
* Ensure you use the correct HTTP method (GET, POST, PUT, DELETE, etc.) for the URI you are trying to access. 
* Check that the server is up and running and that there are no connectivity issues. 
* Check the API documentation for any specific requirements or restrictions on the URI format.

---
#### Error
<Message
messageContainerClassName="error"
messageContent="[PE-ARG-5000] The Content-Type '$CONTENT_TYPE' specified in the REST request is invalid."></Message>

#### Cause
This error occurs when the MIME type specified in the request header does not match the expected value or format. The Content-Type header indicates the format of the request body data sent to the server. It's important to correctly set the Content-Type header to ensure the server can interpret the request and respond accordingly.

Some common Content-Type MIME types for REST requests include:
* application/json: indicates that the request body contains data formatted as JSON.
* application/xml: indicates that the request body contains data formatted as XML.
* text/plain: indicates that the request body contains plain text.

#### Solution
To resolve the error, review the API documentation and set the Content-Type header to the expected MIME type for the request payload.

---
#### Error
<Message
messageContainerClassName="error"
messageContent="[PE-ARG-5000] The REST request is missing an HTTP method."></Message>

##### Cause
This error usually means that you have not specified the appropriate HTTP method (such as GET, POST, PUT, DELETE, etc.) for the API endpoint you are trying to access. HTTP methods define the type of action you want to perform on the resource identified by the API endpoint URL. Each HTTP method has a specific purpose and capability, and the server expects you to use the correct method for the intended operation.

##### Solution
To resolve this error, you should review the API documentation and ensure you use the correct HTTP method for the endpoint you are trying to access. Some standard HTTP methods used in REST APIs include:

* GET: Used to retrieve data from the server.
* POST: Used to create new resources on the server.
* PUT: Used to update existing resources on the server.
* DELETE: Used to delete resources from the server.

Once you have identified the correct HTTP method, you should update your request code to include the appropriate method in the request. 

### API execution error
If you receive an error message stating that an error occurred during the execution of your API, it means that the server encountered an issue while processing your request.

#### Error
<Message
messageContainerClassName="error"
messageContent="[PE-RST-5000] The Appsmith server received an error response from the API."></Message>

#### Cause
This error occurs when the server is unable to process your API request successfully and receives an error response from the API endpoint. 

The specific cause of the error can vary depending on the API you are using and the details of your request. However, some common reasons for this error include:

* Invalid or missing request parameters: If you are sending invalid or incorrect parameters in your request, the API endpoint may not be able to process your request correctly.
* Authentication issues: If you are not providing valid authentication credentials, or if your credentials are expired or incorrect, the API endpoint may not allow you to access the requested resource.
* Server issues: The API endpoint may be experiencing issues, such as downtime or an outage that prevents it from processing your request.
* API versioning issues: If the API has been updated or changed, it may require different parameters or a different endpoint URL.


#### Solution
To resolve this error, you should carefully review the error message and any relevant documentation to determine the specific cause of the issue. You can also review any logs or debugging information to identify the issue. Once you have identified the cause of the error, you can take the necessary steps to address the issue, such as modifying your request, providing valid credentials, or contacting the API provider for support.


### Invalid JSON
This error usually means that the server is unable to process your request because the JSON in the request body is not in the correct format or contains syntax errors.

#### Error
<Message
messageContainerClassName="error"
messageContent="[PE-JSN-4000] The REST request body has an invalid JSON"></Message>

#### Cause
This error occurs when the JSON data you provided in the request body is not in the correct format, has syntax errors or is missing required fields.

#### Solution
To resolve this error, you should review the JSON data in the request body to ensure that it is in the correct format and does not contain any syntax errors. Some common mistakes that can cause JSON parsing errors include:

* Missing or extra commas: JSON uses commas to separate elements in an array or object. If you are missing a comma or have an extra comma in your JSON, it can cause a parsing error.
* Mismatched brackets or braces: JSON uses brackets and braces to enclose arrays and objects, respectively. If you have mismatched brackets or braces, it can cause a parsing error.
* Invalid data types: JSON has strict rules about data types, and if you have an invalid data type in your JSON, it can cause a parsing error.
* Unicode encoding errors: JSON uses Unicode encoding, and if you have invalid or improperly encoded characters in your JSON, it can cause a parsing error.

Once you have identified the issue with your JSON, you should update the request body to ensure that it is in the correct format and contains no syntax errors.

### Query execution error
This usually means there was an issue with the server-side processing of your request.
#### Error
<Message
messageContainerClassName="error"
messageContent="[PE-PLG-5000] Appsmith failed to execute the REST request because of an internal error."></Message>

#### Cause
There are several reasons why this might happen, such as invalid input, server issues, or connectivity problems.

#### Solution
To resolve this error, you can take the following steps:

* Review the error message: The error message may provide some clues as to the cause of the internal error. Look for any specific error codes or error messages that may indicate the cause of the issue.
* Check the API documentation: Review the API documentation to ensure you use the correct API endpoint, request parameters, and headers. Ensure you follow any best practices or guidelines provided by the API provider.
* Contact the API provider: If the issue persists, you can contact the API provider for support. Provide them with as much information as possible, including the specific error message, any relevant logs, and details about your API request.
* Monitor the API status: If the API provider has a status page or other monitoring tools, you can use these to check for any known issues or outages. If there is an outage or issue with the API, you may need to wait until it is resolved before your request can be processed successfully.

Overall, resolving internal errors with REST requests can be challenging and may require a combination of troubleshooting techniques.

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