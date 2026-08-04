---
description: >-
  Use Default and Custom Roles in Appsmith to configure Granular Access Control
title: Roles
hide_title: true
toc_max_heading_level: 2
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
    alt="Toggle the Default roles options to view Default Roles"
    caption="Toggle the Default roles options to view Default Roles"
  />


### Instance level

Instance-level default roles have permissions that govern access to Appsmith instance, affecting all workspaces and users within the instance. Some instance-level roles can be tailored to provide specific access to all users. The instance-level roles include:

* [Organization Administrator Role](/advanced-concepts/granular-access-control/reference/default-roles#organization-administrator-role) - to configure instances, manage user groups and roles, create workspaces, and monitor audit logs.

* [Default Roles for All Users](/advanced-concepts/granular-access-control/reference/default-roles#default-role-for-all-users) - helps you define some default permissions that will be applicable to all users across your Appsmith instance.

### Workspace level

Workspace-level default roles control access within a specific workspace. These roles are pre-defined, offering standard access controls tailored to each workspace. The workspace level roles are not available for customization. They include:

* [Administrator - Workspace Role](/advanced-concepts/granular-access-control/reference/default-roles#administrator-role-for-workspace) - to create, edit, view and delete apps, queries, datasources, environments, export apps and make apps public within a workpsace.

* [Developer - Workspace Role](/advanced-concepts/granular-access-control/reference/default-roles#developer-role-for-workspace) - to create, edit, and delete apps, pages, queries, datasources, and environments within a workspace.

* [App Viewer - Workspace Role](/advanced-concepts/granular-access-control/reference/default-roles#app-viewer-role-for-workspace) - to provide read-only access to apps within a workspace.
 

### Application level

Application level default roles control access within a specific application. These roles are pre-defined with standard access controls for each application. The application level roles are not available for customization, and are on-the-fly created when you share an application by providing Developer or App viewer access to the user. They include:

* [Developer - Application Role](/advanced-concepts/granular-access-control/reference/default-roles#developer-role-for-application) - to create pages, queries, datasources, and environments within an Appsmith app, but cannot create workspaces, and apps.


* [App Viewer - Application Role](/advanced-concepts/granular-access-control/reference/default-roles#app-viewer-role-for-application) - to provide read-only access to the shared app.

## Custom roles

Custom roles in Appsmith allow users to define specific permission sets tailored to their business needs. With custom roles, instance administrators can fine-tune access levels by assigning granular permissions to different users or user groups. To create a custom role, click the **Add role** button on the Roles screen. For more information about setting up a custom role, see [Custom Roles](/advanced-concepts/granular-access-control/reference/custom-roles).

 <ZoomImage
    src="/img/GAC-Create-Custom-Roles-Add-Role-button.png" 
    alt="Click the Add role button to create a custom role"
    caption="Click the Add role button to create a custom role"
  />

## View role assignees

The Roles screen shows how each role is assigned. The **Assignees** column lists direct assignment counts as `N users · M groups`. For the [Default Role for All Users](/advanced-concepts/granular-access-control/reference/default-roles#default-role-for-all-users), the column shows **All users** instead of numeric counts, because every user in the instance inherits that role.

To review who has a role:

1. Go to **Admin Settings** > **Roles**.
2. Open the role.
3. Select the **Assignees** tab. Use the **Permissions** tab to configure the role's permission tree.

The **Assignees** tab is view-only. It lists users who have the role either directly or through a group. To assign or unassign a role, use the [Users](/getting-started/setup/instance-configuration/user-management#users) or [Groups](/getting-started/setup/instance-configuration/user-management#groups) pages.

### Assignee sources

Each user row shows the assignment source:

* **Direct**: You assigned the role to the user.
* **via group name**: You assigned the role to a group that includes the user. The group name links to that group's settings page.

A user can show both sources when you assign the role directly and through one or more groups. Users provisioned through System for Cross-domain Identity Management (SCIM) show a provisioned indicator next to their username. For more information, see [User Provisioning & Group Sync](/advanced-concepts/user-provisioning-group-sync).

### Filter and search assignees

Use the filter control on the **Assignees** tab to narrow the list:

| Filter | Shows |
| --- | --- |
| **All** | Users with the role from any source |
| **Direct** | Users assigned the role directly |
| **Via group** | Users who inherit the role through a group |

Use the search field on the role page to find assignees by username. Scroll the list to load more results when a role has many assignees.

### Default Role for All Users

For the **Default Role for All Users**, the **Assignees** tab shows **Assigned to all users** instead of an enumerated list. Membership is implicit for every user in the instance. Configure the permissions for this role on the **Permissions** tab. For more information, see [Configure Default Access to Apps](/advanced-concepts/granular-access-control/how-to-guides/configure-default-permissions).

## See also

* [Custom Roles](/advanced-concepts/granular-access-control/reference/custom-roles)
* [Default Roles](/advanced-concepts/granular-access-control/reference/default-roles)
* [Permissions](/advanced-concepts/granular-access-control/reference/permissions)
* [User Management](/getting-started/setup/instance-configuration/user-management)
