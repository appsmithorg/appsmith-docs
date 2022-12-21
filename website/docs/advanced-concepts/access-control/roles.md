

# Roles
 A Role is a collection of permissions that defines access for entities or resources which can be further assigned to a user or a group. Roles allow you to adjust multiple permissions rather than assigning individual permissions to users/groups. In Appsmith, a role can contain multiple permissions and a permission can be present in multiple roles. However, a role can't be nested, i.e, it can contain only permissions, not other roles. 
 
 In an Appsmith instance, there are three roles available by default -

 1. **Admin**
 2. **Developer**
 3. **App Viewer**

## Resource

When you open a role, the permissions are divided into different tabs based on the resource they affect. 

```
raw lines - On the roles configuration screen under the App resources tab, you'll get a dropdown list of all the workspaces on your instance.
```

## Permissions

Introduction to permissions and followed by what the tabs/resources (App Resources, Datasource and queries, Groups and Roles, Others) on the permission screen mean 

|  Permissions       |    Description                                                     |   Resource   |
| ---------------    |------------------------------------------------------------------- | ------------ |
| **Create**         | It allows you to create, edit, view, delete resources like app(pages, themes,app names), datasources(queries, API's) etc. You can also define users to have the access to create groups and roles          | App Resources/ Datasource and queries/ Groups and roles/ others. |
| **Edit**           |It allows you to edit and view resources like app(pages, themes,app names), datasources(queries, API's) etc. You can also define users to have the access to create groups and roles | App Resources/ Datasource and queries/ Groups and roles/ others. |
| **View**           |It allows you to only view resources like app(pages, themes,app names), datasources(queries, API's) etc. With the View permission, a user can only view the existing groups and roles | App Resources/ Datasource and queries/ Groups and roles/ others. |
| **Delete**         |It allows you to delete resources like app(pages, themes,app names), datasources(queries, API's) etc. You can also define users to have the access to delete groups and roles | App Resources/ Datasource and queries/ Groups and roles/ others. |  
| **Export**         |Allows you to export applications in a workspace. | App Resources | 
| **Invite**         |Allows you to invite users to a user group | Groups and Roles     |
| **Make public**    |It allows you to make the applications public in a workspace |App Resources|
| **Execute**        |It gives you the ability to execute queries on a datasource | Datasource and queries |
| **Remove users**   | It gives you the ability to remove a user from a group| Groups and roles |

### App resources permissions

On an application level, here are the permissions that can be assigned to user or a group -

#### Create

`Create` gives the ability to create applications in a workspace, pages of an application or actions (APIs, queries, JSObjects) in a page. In App resources, you can give the create permission at different hierarchical levels -

##### Create access for workspace 

 If you give create permission to the workspace, It gives access to create applications in the respective workspace.

:::note
    Under App resources, you can only define access for the applications in a workspace. To have access for the workspace itself, go to others tab and check the permission adjacent to workspace.
:::

:::info
    Giving `Create` permission to a workspace has a cascading effect, i.e, it gives create, edit, view, delete permission to all the applications in the workspace. 
:::

##### Create access for an application

If you want the user to have create access only to a specific application in a workspace, open the respective workspace's dropdown and check the create permission adjacent to the repsective application. `Create` for just an application allows you to create resources like page, action (APIs, queries, JSObjects). 

##### Create access for a page

Going granular, you can give `create` access to a page in an application. It allows you to create resources like APIs, queries, JSObjects for one page.

#### Edit

`Edit` allows the user to change/ modify the existing applications, pages, or actions (APIs, queries, JSObjects) in a workspace. You can edit the app name, pages, and their order, color, icon, theme etc. Edit also gives you the access for deploying an app and connecting to your Git repository. 

Edit permission can be given at different hierarchical levels -

##### Edit access for a workspace 

 If you give edit permission to the workspace, It gives access to modify all the applications in the respective workspace.

:::info
    Giving `Create` permission to a workspace has a cascading effect, i.e, it gives edit and view permission to all the applications in the workspace. 
:::

##### Edit access for an application

If you want the user to have edit access only to a specific application in a workspace, open the respective workspace's dropdown and check the edit permission adjacent to the respective application. `Edit` for just an application allows you to edit resources like page, actions (APIs, queries, JSObjects), Git connection etc. 

##### Edit access for a page

`Edit` access for a particular page allows you to make changes on the respective page. You can edit the page name, clone the page, set it as the home page, and toggle their visibility.

#### View 

`View` only allows a user to just have view access for the existing applications, pages, or actions (APIs, queries, JSObjects) in a workspace. You can't make any changes if you kust have the View permission. It applies to all the hierarchical levels in a workspace.

#### Delete

`Delete` gives the user an access to delete the existing applications, pages, or actions (APIs, queries, JSObjects) in a workspace. With the delete permission, one can't edit or create resources, but, the user has the access to delete it.

Delete permission behaves differently at various hierarchical levels -

##### Delete access for a workspace 

 If you give delete permission to the workspace, It gives access to remove any application in the respective workspace. 

##### Delete access for an application

If you want the user to have delete access only to a specific application in a workspace, open the respective workspace's dropdown and check the delete permission adjacent to the respective application. `Delete` for just an application allows you to delete resources like page, actions (APIs, queries, JSObjects).

##### Delete access for a Page

`Delete` access for a particular page allows you to delete the respective page or the resources in the page like APIs, queries, JSObjects. 

#### Export

`Export` allows a user to export the applications in a workspace. If a user has export permission enabled, he can also view the applications in the workspace.
This permission can also be enabled for a particular application, allowing the user to export and view the respective application only.

#### Make public

`Make Public` gives the user an ability to make the application public or private in a workspace.

### Datasource and queries permissions

Explain what permissions can be defined here followed by the brief explanation of each permission with example.


#### Execute

#### Create

#### Edit 

#### View

#### Delete

### Groups and roles permissions

Explain what permissions can be defined here followed by the brief explanation of each permission with example.


#### Create

#### Edit 

#### View

#### Delete

#### Invite Users

#### Remove User

#### Associate Role

### Others permissions

Explain what permissions can be defined here followed by the brief explanation of each permission with example.

#### Workspace

#### Audit logs