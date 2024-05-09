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

The Instance Administrator Role operates at the highest level within the platform, primarily focusing on tasks such as configuring instances, managing user groups and roles, creating workspaces, and monitoring audit logs. Users assigned to this role ensure the operation and security of the instance but do not access individual workspaces or app content. This page provides detailed insights into the individual permissions associated with the Instance Administrator role.

### Permissions

To perform different tasks, the Instance Administrator role in Appsmith has the following permissions:

#### Workspace management
The configuration to manage workspaces is available under the _Others_ tab. The Instance Administrator role has permission to create workspaces.
  - **Create:** Allows the assignee to add new workspaces to the Appsmith instance.
    <ZoomImage
    src="/img/GAC-instance-administrator-others-permissions.png" 
    alt="Add a new Role"
    caption="Instance Administrator - Workspace and Audit Log Permissions"
    />

#### Groups and roles management
The configuration for groups and roles management is available under the _Groups and Roles_ tab. The Instance Administrator role has permissions to create, edit, view, and delete user groups, invite users, associate roles, and remove users.

  <ZoomImage
    src="/img/GAC-instance-administrator-groups-role-permissions.png" 
    alt="Add a new Role"
    caption="Instance Administrator - Group and Roles Permissions"
  />

  - **Group management -** The Instance Administrator role has permissions to create, edit, view, and delete groups.

    - **Create:** Allows the assignee to add new user groups to the Appsmith instance.
    - **Edit:** Allows the assignee to update existing user groups in the Appsmith instance.
    - **Delete:** Allows the assignee to remove redundant or obsolete groups from the Appsmith instance to streamline management.
    - **View:** Allows the assignee to review the group details and assignees to ensure alignment with organizational structure.
 
  - **Role management -** The Instance Administrator role has permissions to create, edit, view, and delete custom roles, and view default roles.
    - **Create:** Allows the assignee to create new custom roles tailored to organizational needs.
    - **Edit:** Allows the assignee to update existing roles to reflect evolving requirements.
    - **Delete:** Allows the assignee to remove obsolete roles to maintain clarity and organization.
    - **View:** Allows the assignee to review role details and permissions for accuracy and relevance.

  - **User management -** The Instance Administrator role has permissions to manage users, including associating users to roles, inviting users to workspace or apps, and removing users.

    - **Associate Role:** Allows the assignee to assign or update roles of users.
    - **Invite:** Allows the assignee to invite new users to Appsmith workspaces and applications.
    - **Delete:** Allows the assignee to remove existing users from the Appsmith instance.

## Limitations

Despite having extensive permissions, the Instance Administrator role in Appsmith cannot perform the following tasks:

- Access or update individual workspaces or app content.
- Perform actions that require workspace-level permissions, such as creating, editing, or deleting apps within a workspace.
