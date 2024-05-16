---
description: >-
  Granular Access Control - Administrator - Workspace Role permissions in Appsmith
title: Administrator - Workspace Role
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Administrator - Workspace Role </h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Administrator Role assigned to a Workspace grants full control over all entities within a workspace, allowing users to perform actions such as creating, editing, and deleting entities. This page provides detailed insights into the individual permissions associated with the Administrator - Workspace role.

 <ZoomImage
    src="/img/GAC-administrator-workspace-role.png" 
    alt="Administrator - Workspace Role"
    caption="Administrator - Workspace - Workspace Permissions"
  />

## Permissions

To perform different tasks, the Administrator - Workspace role in Appsmith has the following permissions:

<div className="gac-permissions">
    <p className="permission-footnote">(✓) Permission Assigned | (-) Permission Not Assigned | (x) Permission Not Applicable</p>

    |             | Create | Edit | Delete | View | Execute | Make Public | Export | Invite User | Remove User | Associate Role |
    |-------------|--------|------|--------|------|---------|-------------|-------------|-------------|-------------|----------------|
    | Workspace - Apps       | (✓) | (✓) | (✓) | (✓) | (x) | (✓) | (✓) | (x) | (x) | (x) |
    | Pages in Apps          | (✓) | (✓) | (✓) | (✓) | (x) | (x) | (x) | (x) | (x) | (x) |
    | Queries in Pages       | (x) | (✓) | (✓) | (✓) | (✓) | (x) | (x) | (x) | (x) | (x) |
    | Datasources            | (✓) | (✓) | (✓) | (✓) | (✓) | (x) | (x) | (x) | (x) | (x) |
    | Environments           | (✓) | (✓) | (✓) | (✓) | (✓) | (x) | (x) | (x) | (x) | (x) |
    | Production Environment | (x) | (✓) | (✓) | (x) | (✓) | (x) | (x) | (x) | (x) | (x) |
    | Staging Environment    | (x) | (✓) | (✓) | (x) | (✓) | (x) | (x) | (x) | (x) | (x) |
    | Workflows              | (✓) | (✓) | (✓) | (x) | (x) | (x) | (x) | (x) | (x) | (x) |
    </div>

For more information about each permission, see [Permissions](/advanced-concepts/granular-access-control/reference/permissions).

## Limitations

Administrators do have some limitations; they lack authority to create workspaces, view audit logs, or manage roles, groups, or users.