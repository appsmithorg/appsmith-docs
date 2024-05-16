---
description: >-
  Granular Access Control - App Viewer - Workspace Role permissions in Appsmith
title: App Viewer - Workspace Role
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>App Viewer - Workspace Role </h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

The App Viewer - Workspace Role is specific to each workspace and provides view-only access to apps within that workspace. This page provides detailed insights into the specific permissions associated with the App Viewer - Workspace role. <br/>

 <ZoomImage
    src="/img/GAC-app-viewer-workspace-role-permissions.png" 
    alt="App Viewer - Workspace Role"
    caption="App Viewer - Workspace - Workspace Permissions"
  />

## Permissions

The App Viewer role enables users to view apps, governed by the permissions allocated to the App Viewer - Workspace role in Appsmith, as shown below:

  <div className="gac-permissions">
    <p className="permission-footnote">(✓) Permission Assigned | (-) Permission Not Assigned | (x) Permission Not Applicable</p>

    |                        | Create | Edit | Delete | View | Execute | Make Public | Export | 
    |------------------------|--------|------|--------|------|---------|-------------|--------|
    | Workspace - Apps       | (x)    | (x) | (x)     | (✓)  | (x)     | (x)         | (x)    | 
    | Pages in Apps          | (x)    | (x) | (x)     | (✓)  | (x)     | (x)         | (x)    | 
    | Queries in Pages       | (x)    | (x) | (x)     | (x)  | (✓)     | (x)         | (x)    | 
    | Datasources            | (x)    | (x) | (x)     | (x)  | (✓)     | (x)         | (x)    | 
    | Environments           | (x)    | (x) | (x)     | (✓)  | (✓)     | (x)         | (x)    | 
    | Production Environment | (x)    | (x) | (x)     | (x)  | (✓)     | (x)         | (x)    | 
    | Staging Environment    | (x)    | (x) | (x)     | (x)  | (x)     | (x)         | (x)    | 
  </div>

  For more information about each permission, see [Permissions](/advanced-concepts/granular-access-control/reference/permissions).


## Limitations

 App Viewers do not have permission to create, edit, or delete apps that is does not include permissions to manage apps within workspace.