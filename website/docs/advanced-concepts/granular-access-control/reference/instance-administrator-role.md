---
description: >-
  Granular Access Control - Instance Administrator Role permissions in Appsmith
title: Instance Administrator Role
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Instance Administrator Role </h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

The Instance Administrator Role operates at the highest level within the platform, primarily focusing on tasks such as configuring instances, managing user groups and roles, creating workspaces, and monitoring audit logs. This page provides detailed insights into the individual permissions associated with the Instance Administrator role.

### Permissions

To perform different tasks, the Instance Administrator role in Appsmith has the following permissions:

#### Workspace and Audit log management
The configuration to manage workspaces is available under the _Others_ tab. The Instance Administrator role has permission to create workspaces.
  - **Create:** Allows the assignee to add new workspaces to the Appsmith instance.
    <ZoomImage
    src="/img/GAC-instance-administrator-others-permissions.png" 
    alt="Add a new Role"
    caption="Instance Administrator - Workspace and Audit Log Permissions"
    />

#### Groups and roles management
The configuration for groups and roles management is available under the _Groups and Roles_ tab. The Instance Administrator role has permissions to create, edit, view, and delete roles, user groups, and invite users, assign roles to users, and remove users.

  <ZoomImage
    src="/img/GAC-instance-administrator-groups-role-permissions.png" 
    alt="Add a new Role"
    caption="Instance Administrator - Group and Roles Permissions"
  />

  - **Group management -** A group is a collection of users used to streamline permission management. The Instance Administrator role can create, edit, view, and delete groups, simplifying user organization and managing their access.

    - **Create:** Allows the assignee to add new user groups to the Appsmith instance.
    - **Edit:** Allows the assignee to update existing user groups in the Appsmith instance.
    - **Delete:** Allows the assignee to remove redundant or obsolete groups from the Appsmith instance to streamline management.
    - **View:** Allows the assignee to review the group details and assignees to ensure alignment with organizational structure.
 
  - **Role management -** A role is a collection of permissions providing access to different resources in Appsmith. Appsmith provides the flexibility to create custom roles, allowing businesses to tailor permissions according to their unique needs. Additionally, [default roles](/advanced-concepts/granular-access-control/concepts/default-roles) are available in self-hosted Appsmith installations. The Instance Administrator role has the authority to manage custom roles, including creation, editing, viewing, and deletion, along with the ability to access default roles.

    - **Create:** Allows the assignee to create new custom roles tailored to organizational needs.
    - **Edit:** Allows the assignee to update existing custom roles to reflect evolving requirements.
    - **Delete:** Allows the assignee to remove obsolete custom roles to maintain clarity and organization.
    - **View:** Allows the assignee to review default and custom role details and permissions for accuracy and relevance.

  - **User management -** A user is an authenticated entity that has access to the Appsmith instance. Users interact with Appsmith to perform different tasks, such as creating and editing apps, accessing data, and collaborating with other users. The Instance Administrator manages users within the Appsmith instance by associating them with specific roles, inviting them to join workspaces or apps, and removing them when necessary, thus securing the Appsmith instance.

    - **Associate Role:** Allows the assignee to assign or update roles of users.
    - **Invite User:** Allows the assignee to invite new users to Appsmith workspaces and applications.
    - **Remove User:** Allows the assignee to remove existing users from the Appsmith instance.

## Limitations

Despite having extensive permissions, the Instance Administrator role in Appsmith cannot perform the following tasks:

- Access or update individual workspaces or app content.
- Perform actions that require workspace-level permissions, such as creating, editing, or deleting apps within a workspace.
