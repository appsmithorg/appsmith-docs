---
description: >-
  Use Default and Custom Roles in Appsmith to configure Granular Access Control
title: Roles - option 2
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Roles</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

To configure Granular Access Control (GAC), Appsmith provides pre-defined roles along with the flexibility to create your own roles. This page provides information on default and custom roles in Appsmith.

## Default roles

Default roles provide standardized permission sets designed to match different user responsibilities in Appsmith. They include pre-defined permissions tailored for roles such as administrators, developers, and app viewers, and cannot be altered or deleted. You can assign these roles to your users if the permissions align with your desired permission model. To view the default roles available for your Appsmith instance, toggle the **Default Roles**  option on the Roles screen.

 <ZoomImage
    src="/img/GAC-Default-Roles-toggle.png" 
    alt="Toggle the Default Roles options to view Default roles"
    caption="Toggle the Default Roles options to view Default roles"
  />

  ### Scopes

Default roles in Appsmith have below primary scopes, each serving distinct purposes within the access control framework:

* [Instance level](#instance-level)
* [Workspace level](#workspace-level)
* [Application level](#application-level)

#### Instance level

Instance-level roles have permissions that govern access to Appsmith instance, affecting all workspaces and users within the instance. Some instance-level roles can be tailored to provide specific access to all users. The instance-level roles include:

* **Instance Administrator Role -** The Instance Administrator Role operates at the highest level of the Granular Access Control, and performs tasks such as configuring instances, managing user groups and roles, creating workspaces, and monitoring audit logs. For more information, see the [Instance Administrator role](/advanced-concepts/granular-access-control/reference/instance-administrator-role).

* **Default Roles for All Users -** Default Roles for All users helps you in assigning some default permissions to all users across your Appsmith instance. Initially, these roles have no specific permissions assigned and act as blank templates. Instance administrators can fully customize this role according to your business needs. For more information, see [How to provide default access to all users](/advanced-concepts/granular-access-control/how-to-guides/set-up-default-permissions) guide.

#### Workspace level

Workspace-level roles control access within a specific workspace. These roles are pre-defined, offering standard access controls tailored to each workspace. The workspace level roles are not available for customization. They include:

* **Administrator Role for Workspace -** The Administrator role can create, edit, view and delete all apps, queries and datasources. For more information, see [Administrator - Workspace Role](/advanced-concepts/granular-access-control/reference/administrator-workspace-role).

* **Developer Role for Workspace -** The Developer role can create apps, pages, queries, datasources, and environments within a workspace. For more information, see [Developer - Workspace Role](/advanced-concepts/granular-access-control/reference/developer-workspace-role).

* **App Viewer Role for Workspace -** The App Viewer Role provides read-only access to apps within a workspace. The below table shows the permission configuration for an App Viewer role. For more information, see [App Viewer - Workspace Role](/advanced-concepts/granular-access-control/reference/appviewer-workspace-role).
 

#### Application level

Application level roles control access within a specific application. These roles are pre-defined with standard access controls for each application. The application level roles are not available for customization, and are on-the-fly created when you share an application by providing Developer or App viewer access to the user. They include:

* **Developer role for application -** The Developer role can create pages, queries, datasources, and environments within an Appsmith app, but cannot create workspaces, and apps. The below table shows the permission configuration for a Developer role. For more information, see [Developer - Application Role](/advanced-concepts/granular-access-control/reference/developer-application-role).


* **App Viewer role for application -** The App Viewer role provides read-only access to the shared app. They can view the app content, but cannot edit or delete app, pages, and more. The below table shows the permission configuration for an App Viewer role. For more information, see [App Viewer - Application Role](/advanced-concepts/granular-access-control/reference/appviewer-application-role).

## Custom roles

Custom roles in Appsmith allow users to define specific permission sets tailored to their business needs. With custom roles, instance administrators can fine-tune access levels by assigning granular permissions to different users or user groups. To create a custom role, click the **Add role** button on the Roles screen. For more information on permissions and their relations to the entities in Appsmith, see [Permissions](/advanced-concepts/granular-access-control/reference/permissions).

 <ZoomImage
    src="/img/GAC-Create-Custom-Roles-Add-Role-button.png" 
    alt="Click the Add role button to create a custom role"
    caption="Click the Add role button to create a custom role"
  />

### Scopes

Custom roles in Appsmith can have the following primary scopes, each based on the way permissions are assigned to the role:

- **Instance level** - This scope is suitable if you need a role capable of handling instance maintenance, group and role creation tasks. It's recommended to exercise caution when granting the instance level permissions to individuals on your team. This permission grants them the ability to potentially take over any sensitive app, datasource, or other resources with ease.

- **Workspace level** - This scope is suitable for assigning permissions to manage the workspace and its resources.

- **Application level** - This scope is suitable for assigning permissions to manage the application and its resources.