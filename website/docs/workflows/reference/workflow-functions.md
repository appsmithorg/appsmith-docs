
# Workflow Functions

## assignRequest()

The `assignRequest()` function creates a pending request that requires user intervention, and can be later accessed in your apps to build an interface for users to take action. 

### Signature

```javascript
assignRequest({
  "requestName": "String", 
  "message": "String", 
  "resolutions": ["Strings"], 
  "metadata": {"any": "json"}, 
  "requestToUsers": ["emails in Strings"], 
  "requestToGroups": ["user group names in Strings"] 
});
```
### Parameters
 
#### requestName `String`

    <dd>
    The name of the request that identifies it within the workflow. This request name can be used to filter the requests as part of [Get requests](/workflows/reference/workflow-queries#get-requests) by adding it in the `Request name` attribute.
    </dd>

#### message `String` `Optional`
    <dd>
      Add the information associated with the request that you may want to share with app. For example, when creating a refund request, you may want to create a descriptive message _Refund raised by User 1_. 
    </dd>

#### resolutions `String[]`
    <dd>
    An array of strings representing the possible resolutions/actions that can be taken for the request. For example, `['Approve', 'Reject']`
    </dd>

#### metadata `JSON` `Optional `
    <dd>
    Add data that you may need to process the request. For example, you may want the unique identifier of the record, so that in Appsmith app you can query the data and fetch the details. Bind this to the view button in a Table widget and open a modal to show the detailed view to users.
    </dd>

#### requestToUsers  
   <dd>
   An array of email addresses specifying the users to whom the request is assigned. The request will be available for these users to take action. This is mandatory if you are not supplying `requestToGroups`.
   </dd>

#### requestToGroups `String[]` `Optional`

<dd>
An array of user group names specifying the groups of users to whom the request is assigned. If supplied, the request will be available for users belonging to these groups to take action. This is mandatory if you are not supplying `requestToUsers`.
 </dd>