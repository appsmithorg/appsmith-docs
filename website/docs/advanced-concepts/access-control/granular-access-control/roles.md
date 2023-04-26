# Roles
A Role is a collection of permissions that grant access to certain operations on resources and can be assigned to a user or a group. Roles enable users to manage multiple permissions rather than giving individual permissions to users/groups. In Appsmith, a role can be mapped to multiple permissions, and permission can be mapped to various roles. However, a role can't be nested, that's, it can contain only permissions and not other roles. Roles are useful for efficiently managing permissions to access Appsmith resources.
 
## Default roles

A default role is an Appsmith generated role, they're generated during the creation of an Instance or a Workspace. They can't be deleted by the user.

Appsmith provides three built-in roles - **Administrator**, **Developer**, and **App Viewer**. With Granular Access Control (GAC), you can create a custom role that provides fine-grained access control.

### Default role for all users

The **Default Role For All Users** role sets the base level of access given to all users of an instance. The Instance Administrators can modify this role to provide the right level of access to their new users. Some use cases that can be solved with this role are:

* Provide view access to certain important apps in an instance.
* Remove the ability to create workspaces or apps for new users.
* Limit the creation of apps to a single team workspace.

## Permissions

Permission refers to the ability to perform a particular operation on a resource. You can club multiple permissions under a role, and permission can be present in various roles. The table below lists all the permissions available in Appsmith -


|  Permissions       |    Description                                                     |   Resource   |
| ---------------    |------------------------------------------------------------------- | ------------ |
| **Create**         | Enables permission to create, edit, view, and delete resources. You can also grant users access to create groups and roles. | [Application Resources](#application-resources-permissions), [Datasource and queries](#datasource-and-queries-permissions), [Groups and roles](#groups-and-roles-permissions), [others](#others-permissions). |
| **Edit**           |Enables permission to edit and view resources. You can also grant users access to create groups and roles | [Application Resources](#application-resources-permissions), [Datasource and queries](#datasource-and-queries-permissions), [Groups and roles](#groups-and-roles-permissions), [others](#others-permissions). |
| **View**           |Enables permission to only view resources. With the View permission, a user can only view the existing groups and roles | [Application Resources](#application-resources-permissions), [Datasource and queries](#datasource-and-queries-permissions), [Groups and roles](#groups-and-roles-permissions), [others](#others-permissions). |
| **Delete**         |Enables permission to delete resources. You can also grant users access to delete groups and roles |[Application Resources](#application-resources-permissions), [Datasource and queries](#datasource-and-queries-permissions), [Groups and roles](#groups-and-roles-permissions), [others](#others-permissions). |  
| **Export**         |Grants users permission to export applications in a workspace. | [Application Resources](#application-resources-permissions) | 
| **Invite**         |Grants users permission to invite users to a user group | [Groups and roles](#groups-and-roles-permissions)     |
| **Make public**    |Grants users permission to make the applications public in a workspace |[Application Resources](#application-resources-permissions)|
| **Execute**        |Grants users permission to execute queries on a datasource | [Datasource and queries](#datasource-and-queries-permissions) |
| **Remove users**   |Grants users permission to remove a user from a group| [Groups and roles](#groups-and-roles-permissions) |

## Resources

A resource refers to specific components or aspects of an application that can be accessed or modified by users. These resources may include individual pages or views within the application, particular data sets or database tables, or specific actions or functions that can be performed within the application. In Appsmith, resources are classified into the following categories:

* **Application Resources:** These are resources related to the applications built in Appsmith, such as individual pages or views within the application.
* **Datasource and Queries:** These are resources related to databases or queries created in Appsmith, such as a MongoDB setup used as a data source.
* **Groups and Roles:** These are resources related to the roles available for the workspaces and custom groups & roles available in an Appsmith instance. For example, if you have two workspaces - H.R. and Finance - then roles related to H.R. and finance would be available.
* **Others:** These are resources related to workspaces and audit logs in Appsmith.

All the permissions for each resource are explained in detail below.

### Application resources permissions

In Application Resources, the table below shows the permissions that can be assigned to a user or a group and how each permission behaves at different heirarchial levels:

|  <div style= {{width:"120px"}}>Heirarchy</div> | <div style= {{width:"150px"}}> Create </div>| <div style= {{width:"150px"}}> Edit </div> | <div style= {{width:"150px"}}> Delete </div> | <div style= {{width:"150px"}}> View </div> | <div style= {{width:"150px"}}> Public </div> | <div style= {{width:"150px"}}> Export </div> | 
| --- | --- | --- | --- | --- | --- | --- |
| Workspace | Users can create applications, pages & queries inside the workspace | Users can edit any application, page & query inside the workspace | Users can delete any application, page & query inside the workspace | Users can view any application, page & query inside the workspace. | Users can make any application inside the workspace public | Users can export any application inside the workspace |
| App | Users can create pages & queries inside the app | Users can edit pages & queries inside the app | Users can delete the app & its pages & queries | Users can view the app & its pages & queries. | Users can make the application public | Users can export the application |
| Page | Users can create queries on the page | Users can edit the page & its queries | Users can delete the page & its queries | Users can view the page & its queries | NA | NA |
| Query | NA | Users can edit the query | Users can delete the query | Users can view the query | NA | NA |


### Datasource and queries permissions

For datasource and queries, here are the permissions that can be assigned to a user or a group -

|  <div style= {{width:"120px"}}>Heirarchy</div> | <div style= {{width:"150px"}}> Execute </div> | <div style= {{width:"150px"}}> Create </div>| <div style= {{width:"150px"}}> Edit </div> | <div style= {{width:"150px"}}> Delete </div> | <div style= {{width:"150px"}}> View </div> |
| --- | --- | --- | --- | --- | --- |
| Workspace | Users can execute queries on any datasource in the workspace | Users can create queries on any datasource in the workspace | Users can edit any datasource in the workspace | Users can delete any datasource in the workspace | Users can view any datasource in the workspace |
| Datasource | Users can execute queries on the datasource | Users can create queries on the datasource | Users can edit the datasource | Users can delete the datasource | Users can view the datasource |
| Query | users can execute the query | NA | NA | NA | NA |


### Groups and roles permissions

For Groups and roles for an Appsmith instance, here are the permissions that can be assigned to a user or a group -

|  <div style= {{width:"120px"}}>Heirarchy</div> | <div style= {{width:"150px"}}> Create </div>| <div style= {{width:"150px"}}> Edit </div> | <div style= {{width:"150px"}}> Delete </div> | <div style= {{width:"150px"}}> View </div> | <div style= {{width:"150px"}}> Invite User </div> | <div style= {{width:"150px"}}> Remove User </div> | <div style= {{width:"150px"}}> Associate Role </div>|
| --- | --- | --- | --- | --- | --- | --- | --- |
| Groups | Users can create a User Group | Users can edit any User Group | Users can delete any User Group | Users can view any User Group | Users can invite an email to any User Group | Users can remove another user from any User Group | NA |
| Group | NA | Users can edit the User Group | Users can delete the User Group | Users can view the User Group | Users can invite an email to the User Group | Users can remove another user from the User Group | NA |
| Roles | Users can create a Role | Users can edit any Role | Users can delete any Role | Users can view any Role | NA | NA | Users can assign any role to any User or User Group |
| Role | NA | Users can edit the Role | Users can delete the Role | Users can view the Role | NA | NA | Users can assign the role to any User or User Group |


### Others permissions

In this section, users can assign permissions for workspaces and Audit logs.

|  <div style= {{width:"120px"}}>Heirarchy</div> | <div style= {{width:"150px"}}> Create </div>| <div style= {{width:"150px"}}> Edit </div> | <div style= {{width:"150px"}}> Delete </div> | <div style= {{width:"150px"}}> View </div> |
| --- | --- | --- | --- | --- |
| Workspaces | Users can create a workspace | Users can edit any workspace | Users can delete any workspace | Users can view any workspace |
| Workspace | NA | Users can edit the workspace | Users can delete the workspace | Users can view the workspace |
| Audit Logs | NA | NA | NA | Users can view the audit logs |
