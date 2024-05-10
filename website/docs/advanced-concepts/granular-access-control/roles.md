---
description: >-
  Use Default and Custom Roles in Appsmith to configure Granular Access Control
---
# Roles
To configure Granular Access Control (GAC), Appsmith provides pre-defined roles along with the flexibility to create your own roles. This page provides information on default and custom roles in Appsmith.

## Default roles

Default roles provide standardized permission sets tailored to meet different user's responsibilities within app-building experience on Appsmith. They come up with a collection of ready-to-use permissions assigned to roles like administrators, developers, and app viewers. You can assign these roles to your users based on your desired permission model. To see the default roles available for your Appsmith instance, toggle the **Default Roles** option on the Roles screen.

 <ZoomImage
    src="/img/GAC-Default-Roles-toggle.png" 
    alt="Toggle the Default Roles options to view Default roles"
    caption="Toggle the Default Roles options to view Default roles"
  />

  ### Scopes

Default roles in Appsmith have below primary scopes, each serving distinct purposes within the access control framework. 

 <ZoomImage
    src="/img/GAC-Default-Roles.png" 
    alt="Default Roles in Granular Access Control"
    caption="Default Roles in Granular Access Control"
  />

#### Instance level

Instance-level roles have permissions that govern access to Appsmith instance, affecting all workspaces and users within the instance. Some instance-level roles can be tailored to provide specific access to all users. The instance-level roles include:

##### Instance Administrator Role

The Instance Administrator Role operates at the highest level of the Granular Access Control, and performs tasks such as configuring instances, managing user groups and roles, creating workspaces, and monitoring audit logs. The below table shows the groups and roles permission configuration for an Instance Administrator role.

 <ZoomImage
    src="/img/GAC-instance-administrator-groups-role-permissions.png" 
    alt="Add a new Role"
    caption="Instance Administrator - Group and Roles Permissions"
  />


|             | Create | Edit | Delete | View | Execute | Invite User | Remove User | Associate Role |
|------------|-------|-------|--------|---|---|---|--|--|
| Workspace  | <input type="checkbox" checked/> | ❌  |❌  |❌  |❌  |❌  |❌  |❌  |
| Audit Logs | ❌  |❌  |❌  | <input type="checkbox" checked/>  |❌  |❌  |❌  |❌  |
| Groups   | <input type="checkbox" checked/> | <input type="checkbox" checked/> | <input type="checkbox" checked/> |<input type="checkbox" checked/> | ❌  | <input type="checkbox" checked/> | <input type="checkbox" checked/>| ❌ |
| Roles   | <input type="checkbox" checked/> | <input type="checkbox" checked/> | <input type="checkbox" checked/> |<input type="checkbox" checked/> | ❌  | ❌  |❌ | <input type="checkbox" checked/> | 
| Default Roles   | <input type="checkbox"/> | <input type="checkbox"/> | <input type="checkbox"/> |<input type="checkbox" checked/> | ❌  | ❌  |❌ | <input type="checkbox" checked/> | 
| Custom Roles   | <input type="checkbox"/> | <input type="checkbox" checked/> | <input type="checkbox" checked/> |<input type="checkbox" checked/> | ❌  | ❌  |❌ | <input type="checkbox" checked/> | 

##### Default Roles for All Users

Default Roles for All users helps you in assigning some default permissions to all users across your Appsmith instance. Initially, these roles have no specific permissions assigned and act as blank templates. Instance administrators can fully customize this role according to your business needs.


#### Workspace level

Workspace-level roles control access within a specific workspace. These roles are pre-defined, offering standard access controls tailored to each workspace. The workspace level roles are not available for customization. They include:

##### Administrator Role for Workspace 

An Administrator role can create, edit, and delete entities like apps, pages, and more in a workspace, make apps public or export apps, but cannot create workspaces, view audit logs, manage roles, groups, or users. The below table shows permissions configuration for an Administrator role:

##### Developer Role for Workspace 

The Developer role can create apps, pages, queries, datasources, and environments within a workspace, but cannot create workspaces, view audit logs, make apps public or export apps, manage roles, groups, or users.

##### App Viewer Role for Workspace

The App Viewer Role provides read-only access to apps within a workspace. For example, users assigned an App Viewer role can only view app content, but cannot edit or delete apps, pages, and more. 

#### Application level

Application level roles control access within a specific application. These roles are pre-defined with standard access controls for each application. The application level roles are not available for customization, and are on-the-fly created when you share an application by providing Developer or App viewer access to the user. They include:

##### Developer role for application 

The Developer role can create pages, queries, datasources, and environments within an Appsmith app, but cannot create workspaces, and apps.

##### App Viewer role for application

The App Viewer role provides read-only access to the shared app. They can view the app content, but cannot edit or delete app, pages, and more. 


## Custom roles

Custom roles in Appsmith allow users to define specific permission sets tailored to their business needs. With custom roles, instance administrators can fine-tune access levels by assigning granular permissions to different users or user groups. To create a custom role, click the **Add role** button on the Roles screen. For more information on permissions and their relations to the entities in Appsmith, see [Permissions].

 <ZoomImage
    src="/img/GAC-Create-Custom-Roles-Add-Role-button.png" 
    alt="Click the Add role button to create a custom role"
    caption="Click the Add role button to create a custom role"
  />