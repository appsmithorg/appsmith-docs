---
description: >-
  Configure Roles in Appsmith to use GAC
---
# Roles
Roles in Appsmith are collections of permissions that enable users or groups to access certain operations on resources. Rather than giving individual permissions to users or groups, roles allow users to manage multiple permissions.

## Instance roles

In addition to the [default](/advanced-concepts/invite-users#built-in-roles) roles for applications and workspace, Appmith provides two instance-level roles - **Default Role for all Users** and **Instance Administrator**.

- **Default Role For All Users**: This role applies to all users and can be used to assign a default set of permissions in an instance. It is editable and does not come with any predefined permissions, and Instance Administrators can customize it and assign default permissions to new users joining the instance. By adjusting the permissions in this role, they can ensure that new users have an appropriate level of access.

- **Instance Administrator**: This role provides a user with permission to modify settings at the instance level from the Admin settings. This includes changing the general settings of the instance, such as authentication, email, custom branding, access to view audit logs and granular access control actions. It's important to note that this role has significant control over the instance, so it should only be assigned to trusted users who need these capabilities.

## Custom roles

With custom roles, you can provide fine-grained access control by configuring multiple permissions for the role you are creating. To create a custom role, go to **Admin Settings** > **Access Control** > **Roles** and click the **Add Role** button.

<figure>
  <img src="/img/add_custom_role.png" style= {{width:"700px", height:"auto"}} alt="Add a new Role"/>
  <figcaption align = "center"><i>Add a custom role</i></figcaption>
</figure>

The permissions are grouped into four categories, which helps users manage and access the necessary permissions easily:

- [Application Resources](#application-resources)
- [Datasource and Queries](#datasource-and-queries)
- [Groups and Roles](#groups-and-roles)
- [Others](#others)


### Application resources

In this section, you'll find permissions related to the application and its resources such as pages, widgets, and queries. The table below illustrates the permissions that can be assigned to either a user or a group. Additionally, it explains how each permission behaves at various hierarchical levels.

|   | <div style= {{width:"180px"}}> **Create** </div>| <div style= {{width:"180px"}}> **Edit** </div> | <div style= {{width:"180px"}}> **Delete** </div> | <div style= {{width:"180px"}}> **View** </div> | <div style= {{width:"180px"}}> **Public** </div> | <div style= {{width:"180px"}}> **Export** </div> | 
| --- | --- | --- | --- | --- | --- | --- |
| **Workspace** |  Create applications, pages and queries inside the workspace | Edit any application, page and query inside the workspace | Delete any application, page and query inside the workspace | View any application, page and query inside the workspace. | Make any application inside the workspace public | Export any application in the workspace |
| **App** | Create pages and queries inside the app | Edit pages and queries inside the app | Delete the app and its pages and queries | View the app and its pages and queries. | Make the application public | Export that particular application |
| **Page** | Create queries on the page | Edit the page and its queries | Delete the page and its queries | View the page and its queries | - | - |
| **Query** | - | Edit the query | Delete the query | View the query | - | - |


### Datasource and queries

This section contains permissions related to the actions a user can perform on datasources and queries. The table below lists the different permissions available and outlines how each permission operates at varying hierarchical levels:

| | <div style= {{width:"180px"}}> **Execute** </div> | <div style= {{width:"180px"}}> **Create** </div>| <div style= {{width:"180px"}}> **Edit** </div> | <div style= {{width:"180px"}}> **Delete** </div> | <div style= {{width:"180px"}}> **View** </div> |
| --- | --- | --- | --- | --- | --- |
| **Workspace** | Execute queries on any datasource in the workspace | Create queries on any datasource in the workspace | Edit any datasource in the workspace | Delete any datasource in the workspace | View any datasource in the workspace |
| **Environments** | Execute queries for specific environment (*staging and production*).  | - | - | - | - |
| **Datasource** | Execute queries on that datasource (provided the user also has access to execute on at least one environment) | Create queries on the datasource | Edit values of datasource configurations in all environments | Add/Remove datasource configuration keys in all environments | View datasource configuration values in all environments |
| **Query** | Execute the query | - | - | - | - |


### Groups and roles

This section includes permissions for managing the groups and roles of an Appsmith instance. The table below presents the available permissions that can be assigned to either a user or a group:

| | <div style= {{width:"150px"}}> **Create** </div>| <div style= {{width:"150px"}}> **Edit** </div> | <div style= {{width:"150px"}}> **Delete** </div> | <div style= {{width:"150px"}}> **View** </div> | <div style= {{width:"150px"}}> **Invite User** </div> | <div style= {{width:"150px"}}> **Remove User** </div> | <div style= {{width:"150px"}}> **Associate Role** </div>|
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Groups** | Create a User Group | Edit any User Group | Delete any User Group | View any User Group | Invite an email to any User Group | Remove another user from any User Group | - |
| **Group** | - | Edit the User Group | Delete the User Group | View the User Group | Invite an email to the User Group | Remove another user from the User Group | - |
| **Roles** | Create a Role | Edit any Role | Delete any Role | View any Role | - | - | Assign any role to any User or User Group |
| **Role** | - | Edit the Role | Delete the Role | View the Role | - | - | Assign the role to any User or User Group |


### Others

In this section, users can assign permissions for workspaces and Audit logs.

|  | <div style= {{width:"150px"}}> **Create** </div>| <div style= {{width:"150px"}}> **Edit** </div> | <div style= {{width:"150px"}}> **Delete** </div> | <div style= {{width:"150px"}}> **View** </div> |
| --- | --- | --- | --- | --- |
| **Workspaces** | Create a workspace | Edit any workspace | Delete any workspace | View any workspace |
| **Workspace** | - | Edit the workspace | Delete the workspace | View the workspace |
| **Audit Logs** | - | - | - | View the audit logs |
