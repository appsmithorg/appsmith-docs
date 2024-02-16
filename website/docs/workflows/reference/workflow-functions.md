
# Workflow Functions

Workflow functions in Appsmith enable the creation of dynamic and interactive workflows, facilitating data manipulation, process automation, and user intervention within applications. This page provides information about the workflow functions available in Appsmith, including their signatures, parameters, and usage examples.

## assignRequest()

The `assignRequest()` function creates a pending request that requires user intervention and can be accessed later in your apps to enable users to take action.

### Signature

```javascript
assignRequest({
  "requestName": "String", 
  "message": "String", 
  "resolutions": ["String"], 
  "metadata": {"key": "value"}, 
  "requestToUsers": ["String"], 
  "requestToGroups": ["String"] 
});
```
### Parameters
 
#### requestName `String`

    <dd>
    The name of the request, which serves as its identifier within the workflow. This name can be used to filter requests in as part of [Get requests](/workflows/reference/workflow-queries#get-requests) workflow query by adding it in the `Request name` attribute.
    </dd>

#### message `String` `Optional`
    <dd>
      A descriptive message associated with the request, providing additional context for users. For example, when creating a refund request, you might include a message like "Refund request raised by User 1".
    </dd>

#### resolutions `String[]`
    <dd>
    Represents the possible actions a user can take on the request. The resolution is passed to the [Resolve requests](/workflows/reference/workflow-queries#resolve-requests) workflow query to apply the selected resolution. For example, `['Approve', 'Reject']`.
    </dd>

#### metadata `JSON` `Optional `
    <dd>
    Add data that may be needed to process the request or display more information to the user in your app. For example, you can include a unique identifier for the record associated with the request. Use the identifier in your app to fetch and show the details to user.
    </dd>

#### requestToUsers  
   <dd>
   Specifies the user or users to whom the request will be assigned for resolution. Each element in the array has to be the username for logging into your app. It's mandatory to supply this attribute if you are not supplying `requestToGroups` atribute.
   </dd>

#### requestToGroups `String[]` `Optional`

<dd>
Specifies the group name or names to which the request will be assigned for resolution. When specified, the request will be assigned to all the users belonging to the group or groups. Each group name must be configured in your app and have appropriate permissions to perform actions. It's mandatory to supply this attribute if you are not supplying the `requestToUsers` attribute.
 </dd>