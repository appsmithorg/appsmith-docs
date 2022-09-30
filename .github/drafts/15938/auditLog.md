<p style="color: red; font-weight: bold">Links to alert messages:</p><a href="#gdcalert1">alert1</a>

**Intro**

The audit log is the report of all the activities done in Appsmith. It will automatically capture and display events by recording who performed an activity, what when, and where it was performed.

The main log of events for audits and compliance that we’ll provide is around



* **Application-specific activities** - when was a change made to a page, who configured a new datasource, who ran a query and when or who deleted an existing app
* **Administrative configuration changes** - who changed an admin email, when was a new group added or role modified
* **Sensitive information access** - who last accessed user information or billing information pages
* **User sign-up and login activity** - when a new user signed up, when was an attempted login unsuccessful and so on

&lt;Screenshot or Gif of AuditLogs page>

 

**Filtering audit logs **



1. Users - Select the specific user to filter activities based on the user from the dropdown list
2. Events - Filter events based on events. 
3. ResourceId - Select the resource-id from the json to filter the 
4. Date Range - Filter data by specific date range you wish to filter

**Audit Log Properties:**


<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")

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
