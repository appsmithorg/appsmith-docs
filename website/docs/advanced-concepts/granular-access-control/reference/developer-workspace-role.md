---
description: >-
  Granular Access Control - Developer - Workspace Role permissions in Appsmith
title: Developer - Workspace Role
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Developer - Workspace Role </h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

The Developer role grants users extensive access to different resources within a workspace, such as apps, pages, queries, datasources, and environments. This page provides detailed insights into the individual permissions associated with the Developer - Workspace role.

 <ZoomImage
    src="/img/GAC-developer-workspace-role.png" 
    alt="Developer - Workspace Role"
    caption="Developer - Workspace - Workspace Permissions"
  />

## Permissions

To perform different tasks, the Developer - Workspace role in Appsmith has the following permissions:

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

## Limitations

Developers do have some limitations; they lack permissions to create workspaces, view audit logs, make apps public or export apps, manage roles, groups, or users. 