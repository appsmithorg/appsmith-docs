---
sidebar_position: 2
---
# REST API Errors

<figure>
  <img src="/img/api-execution-error.png" alt="API execution error"/>
  <figcaption align = "center"><i>API execution error</i></figcaption>
</figure>

|  <div style= {{width:"120px"}}> Error Code </div> | <div style= {{width:"230px"}}> Title </div>|  Message                              |
| -------------    | ----------                     | ------------------------------------- |
| PE-ARG-5000      | Query configuration is invalid | URI is invalid. Please rectify the URI and try again      |
| PE-ARG-5000      | Query configuration is invalid | Invalid value for Content-Type  |
| PE-ARG-5000      | Query configuration is invalid | HTTPMethod must be set |
| PE-RST-5000      | Query configuration is invalid | An error occurred during the execution of your API. Please check the error logs for more details.|
| PE-JSN-4000      | Query configuration is invalid | Plugin failed to parse JSON "{0}" |
| PE-PLG-5000      | Query configuration is invalid | {0} |


### Missing URL

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
This error can be resolved by filling in the **Session Details Signature Key** field or by selecting **No** option in the **Send Appsmith signature header** field.