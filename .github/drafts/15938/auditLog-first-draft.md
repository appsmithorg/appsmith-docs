**Intro**

The audit log is the report of all the activities done in Appsmith. It will automatically capture and display events by recording who performed an activity, what when, and where it was performed.

The main log of events for audits and compliance that we’ll provide is around



* **Application-specific activities** - when was a change made to a page, who configured a new datasource, who ran a query and when or who deleted an existing app
* **Administrative configuration changes** - who changed an admin email, when was a new group added or role modified
* **User sign-up and login activity** - when a new user signed up, when was an attempted login unsuccessful and so on

<p style="color: red; font-weight: bold">screenshot or gif of the auditLog screen</p>

 

**Filtering audit logs **



1. Users - To get a trace of activities performed by a user, filter by their email address.
2. Event names - Filter events by their name, for example for logs for query executions can be accessed by filtering by the query.executed event 
3. Resource ID - A resourceID identifies each entity on your Appsmith instance be it a workspace, application, page, datasource, query or JSObject.

**Audit Log Properties:**

<p style="color: red; font-weight: bold">screenshot of the auditLog json</p>

<table>
  <tr>
   <td>event
   </td>
   <td>Each action performed on Appsmith app(edit or view mode) is classified as event
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td>Displays the date and time of a logged event.
   </td>
  </tr>
  <tr>
   <td>user
   </td>
   <td>Displays the user who made performed this event
   </td>
  </tr>
  <tr>
   <td>resource
   </td>
   <td>It is the type of resource on which this event was performed on.
   </td>
  </tr>
  <tr>
   <td>app
   </td>
   <td>Application on which the action is performed.
   </td>
  </tr>
  <tr>
   <td>workspace
   </td>
   <td>Workspace on which the action is performed.
   </td>
  </tr>
  <tr>
   <td>metadata
   </td>
   <td>Appsmith version and created
   </td>
  </tr>
</table>
