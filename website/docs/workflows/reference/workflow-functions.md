
# Workflow Functions

## Assign Request

In your workflow, to create requests that need human intervention, use `assignRequests`. These requests are generated for every workflow run, and eligible requests are added to the stack. The `assignRequests` needs below parameters:

### Signature

```javascript
appsmith.workflows.assignRequest({
  "requestName": "String", //mandatory
  "message": "String", // Optional
  "resolutions": ["Strings"], // non-empty array
  "metadata": {"any": "json"}, // Optional
  "requestToUsers": ["emails in Strings"], // Optional if requestToGroups is present
  "requestToGroups": ["user group names in Strings"] // Optional if requestToUsers is present
});
```

* `requestName` mandatory 
    <dd>
    The name of the request, and identifies the request within the workflow. This request name can be used to filter the requests as part of [Get requests](#get-requests) by adding the [Request name](#request-name).
    </dd>
* `message` optional String
    <dd>
      Add the infromation that you may want to share with user. For example, a Refund request raised by User 1 for $ 15. 
    </dd>

* `resolutions` mandatory Array of Strings
    <dd>
    An array of strings representing the possible resolutions/actions that can be taken for the request. For example, `['Approve', 'Reject']`
    </dd>
* `metadata` Optional JSON
    <dd>
    Additional data that you may need to process the request. For example, you may want the unique identifier of the record, so that in Appsmith app you can query the data and fetch the details. Bind this to the view button in a Table widget and open a modal to show the detailed view to users.
    </dd>
* `requestToUsers` Optional. Array
   <dd>
   An array of email addresses specifying the users to whom the request is assigned. The request will be available for these users to take action. This is mandatory if you are not supplying `requestToGroups`.
   </dd>
* `requestToGroups` Optional. Array 
    <dd>
    An array of user group names specifying the groups of users to whom the request is assigned. If supplied, the request will be available for users belonging to these groups to take action. This is mandatory if you are not supplying `requestToUsers`.
    </dd>