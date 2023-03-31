---
sidebar_position: 2
---
# REST API Errors


|  <div style= {{width:"120px"}}> Error Code </div> | <div style= {{width:"230px"}}> Error Type </div>|  Explanation                              |
| -------------    | ----------                     | ------------------------------------- |
| [PE-ARG-5000](#pe-arg-5000)       | ACTION_CONFIGURATION_ERROR |       |
| [PE-RST-5000](#pe-rst-5000)      | INTERNAL_ERROR             | |
| [PE-JSN-4000](#pe-jsn-4000)      | INTERNAL_ERROR             |  |
| [PE-PLG-5000](#pe-plg-5000)      | INTERNAL_ERROR             |  |


## PE-ARG-5000

##### Error
<Message
messageContainerClassName="error"
messageContent="Invalid value for URI."></Message>

##### Cause
Provide background information or context that gives the user additional insight into the problem.

##### Solution
Provide an ordered list of steps to guide users through the solution.

---
##### Error
<Message
messageContainerClassName="error"
messageContent="Invalid value for Content-Type."></Message>

##### Cause
Provide background information or context that gives the user additional insight into the problem.

##### Solution
Provide an ordered list of steps to guide users through the solution.

---
##### Error
<Message
messageContainerClassName="error"
messageContent="HTTPMethod must be set."></Message>

##### Cause
Provide background information or context that gives the user additional insight into the problem.


##### Solution
Provide an ordered list of steps to guide users through the solution.

## PE-RST-5000

##### Error
<Message
messageContainerClassName="error"
messageContent="The Appsmith server received an error response from your API."></Message>

##### Cause
Provide background information or context that gives the user additional insight into the problem.


##### Solution
Provide an ordered list of steps to guide users through the solution.


## PE-JSN-4000

##### Error
<Message
messageContainerClassName="error"
messageContent="Plugin failed to parse JSON {0}"></Message>

##### Cause
Provide background information or context that gives the user additional insight into the problem.


##### Solution
Provide an ordered list of steps to guide users through the solution.

## PE-PLG-5000

##### Error
<Message
messageContainerClassName="error"
messageContent="Your API failed to execute."></Message>

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