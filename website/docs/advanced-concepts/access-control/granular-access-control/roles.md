# Roles
 A Role is a collection of permissions that grant access to perform certain operations on resources and can be assigned to a user or a group. Roles enable users to manage multiple permissions rather than assigning individual permissions to users/groups. In Appsmith, a role can be mapped to multiple permissions and a permission can be mapped to multiple roles. However, a role can't be nested, i.e. it can contain only permissions and not other roles. Roles are useful for efficiently managing permissions to access Appsmith resources.
 
 Appsmith provides three built-in roles - **Administrator**, **Developer** and **App Viewer**.  With Granular Access Control (GAC), you can create a custom role that provides fine-grained access control. 

## Resources

A resource refers to specific components or aspects of an application that can be accessed or modified by users. These resources may include individual pages or views within the application, specific data sets or database tables, or specific actions or functions that can be performed within the application. In Appsmith, resources are classified into the following categories:

* **Application Resources:** These are resources related to the applications built in Appsmith, such as individual pages or views within the application.
* **Datasource and Queries:** These are resources related to databases or queries created in Appsmith, such as a MongoDB setup used as a data source.
* **Groups and Roles:** These are resources related to the roles available for the workspaces in an Appsmith instance. For example, if you have two workspaces - HR and Finance - then roles related to HR and finance would be available.
* **Others:** These are resources related to workspaces and audit logs in Appsmith.

## Permissions

 A permission refers to the ability to perform a certain operation on a resource. Multiple permissions can be clubbed under a role and a permission can be present in multiple roles. The table below lists all the permissions available in Appsmith -


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

Let's understand these permissions in detail.

### Application resources permissions

In Application Resources, here are the permissions that can be assigned to user or a group -

#### Create

With this permission, users can create applications, pages, API queries and JS Objects. Under Application Resources, you can control the **Create** permission at different hierarchical levels:

##### Workspace 

When you grant the **Create** permission to a workspace, it provides access to create applications only in that particular workspace. To enable permission to create workspaces, go to the [Others](#others-permissions) tab.


##### Application

When you grant the **Create** permission to an application, it provides access to create new pages in the respective application.

##### Page

At a more granular level, giving **Create** permission to a specific page allows the user to create API, queries and JS Objects for the respective page. 

#### Edit

**Edit** allows the user to modify the existing applications, pages, API, queries and JS Objects in a workspace. You can edit the app name, pages, and their order, color, icon, theme etc. Edit also enables access to deploy an app and connect to a Git repository. 
Edit permission can be given at different hierarchical levels -

##### Workspace 

When you grant the **Edit** permission to a workspace, it provides access to edit the newly created applications in that particular workspace. 

##### Application

If you want the user to have edit access only to a specific application in a workspace, open the respective workspace tree and check the edit permission adjacent to the respective application. **Edit** for just an application allows you to edit the pages of that application.

##### Page

At a more granular level, giving **Edit** permission to a specific page allows the user to edit API, queries and JS Objects of the respective page. You can edit the page name, clone the page, set it as the home page, and toggle their visibility.

#### View 

**View** only grants a user the access to view and interact with the deployed applications in a workspace. You can't make any changes as you won't be able to access the canvas if you only have the View permission. It applies to all the hierarchical levels in a workspace.

#### Delete

**Delete** gives the user an access to delete the existing applications, pages, or actions (APIs, queries, JSObjects) in a workspace. With the delete permission, one can't edit or create resources, but, the user has the access to delete it.

Delete permission behaves differently at various hierarchical levels -

##### Workspace 

If you give delete permission to the workspace, It gives access to remove any application from the respective workspace. 

##### Application

If you want the user to have delete access only to a specific application in a workspace, open the respective workspace's tree and check the delete permission adjacent to the respective application. **Delete** for just an application allows you to delete the pages of that application.

##### Page

**Delete** access for a particular page allows you to delete the respective page or the resources in the page like APIs, queries, JSObjects. 

#### Export

**Export** allows a user to export the applications in a workspace. If a user has export permission enabled, he can also view the applications in the workspace.
This permission can also be enabled for a particular application, allowing the user to export and view the respective application only.

#### Make public

**Make Public** gives the user an ability to make the application public or private in a workspace.

### Datasource and queries permissions

For datasource and queries, here are the permissions that can be assigned to user or a group -


#### Execute

**Execute** gives a user permission to run DB/API queries created on a datasource. This permission can be given for a workspace or for an individual datasource in a workspace.

##### Workspace

Giving execute permission at a workspace level allows the user to execute any datasource in the workspace.

##### Datasource

If you want the user to have execute access only to a specific datasource in a workspace, open the respective workspace tree and check the execute permission adjacent to the respective datasource. **Execute** for a specific datasource allows the user to execute only that datasource.

##### Page

Going further down the hierarchy, you can give execute access to the queries inside a page. Execute permission at this stage allows the user to run the respective query. Execute permission for a query in page only works if the corresponding datasource also has the execute access.

#### Create

**Create** gives the ability to create datasources in a workspace. In Datasource and queries, you can give the create permission at different hierarchical levels -

##### Workspace

If you give create permission to the workspace, it gives access to create datasources in the respective workspace. 

##### Datasource

If you want the user to have create access only to a specific datasource in a workspace, open the respective workspace tree and check the create permission adjacent to the respective datasource. **Create** for a particular datasource allows the user to make tweaks the datasource configurations and further test, delete or save it.
You can't create queries for a datasource by only giving create access for the datasources in the workspace. To create new queries, check the create permission for the datasource and give the create access to queries under [Application resources permissions](#application-resources-permissions) 

#### Edit 

**Edit** allows the user to change/modify the existing datasources. You can edit the datasource name, configurations and further test and save the datasource. Edit permission can be given at different hierarchical levels -

##### Workspace

If you give edit permission to the workspace, it gives access to modify all the datasources in the respective workspace. 

##### Datasource

If you want the user to have edit access only to a specific datasource in a workspace, open the respective workspace tree and check the edit permission adjacent to the respective datasource. **Edit** for just a datasource allows you to modify the name, configurations of that datasource.

#### View

**View** only allows a user to have view access for the existing datasources. The user can interact with the functionality of the datasource, test the datasource, but can't make any changes with View permission. View permission can be given at different hierarchical levels -

##### Workspace

If you give view permission to the workspace, it gives access to view and execute all the datasources in the respective workspace.

##### Datasource 

If you want the user to have view access only to a specific datasource in a workspace, open the respective workspace tree and check the view permission adjacent to the respective datasource. **View** for just a datasource allows you to view, test and execute that datasource.

#### Delete

**Delete** gives the user an access to delete the existing datasources in a workspace. With the delete permission, one can't edit or create a datasource, but, the user has the access to delete it.
Delete permission can be given at various hierarchical levels - 

##### Workspace

If you give delete permission to the workspace, It gives access to remove any datasource from the respective workspace. 

##### Datasource

**Delete** for a particular datasource allows you to remove that datasource only.

### Groups and roles permissions

For Groups and roles for an Appsmith instance, here are the permissions that can be assigned to user or a group -

#### Create

With this permission, users can create new groups and roles. 

##### Groups

When the create permission is enabled for groups, a user can create a new group. 

##### Roles

With create permission enabled for roles, a user can create a new role. 

#### Edit 

With this permission, users can edit the existing groups and roles. 

##### Groups

When the edit permission is enabled for groups, a user can edit an existing group. 

##### Roles

With edit permission enables for roles, a user can modify an existing role.

:::info

You can't edit the built-in roles from Appsmith. You can only edit the custom roles defined by any user in your instance.
:::

#### View

With this permission, users can only view the existing groups and roles.

#### Delete

This permission grants users to delete and view the existing groups and roles.

:::info

You can't delete the built-in roles from Appsmith. You can only delete the custom roles defined by any user in your instance.
:::

#### Invite Users

This permission grants the user the access to invite users to a group.

#### Remove User

This permission grants the user the access to remove users from a group.

#### Associate Role

With this permission, a user has the access to assign the roles to other users on the instance. Associate role permission, if provided alone, restricts a user from creating new roles or, editing, viewing, and deleting the existing ones, but, they can assign the existing roles to various users on the instance.

### Others permissions

In this section, a user can assign permissions for workspaces and Audit logs.

#### Workspace

Workspace level permissions enables a user to perform actions on the workspaces itself. You can create new workspace or edit, delete the existing ones.

#### Audit logs

Audit logs has View permission, that is, you can restrict users from looking at the Audit logs for your instance. 