---
description: >-
  Granular Access Control - Default Roles in Appsmith
title: Default Roles
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Default Roles </h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->
This page provides detailed insights into the individual permissions associated with the default roles available in Appsmith.

## Instance Administrator Role

The Instance Administrator Role operates at the highest level within the platform, primarily focusing on tasks such as configuring instances, managing user groups and roles, creating workspaces, and monitoring audit logs. 

### Permissions

To perform different tasks, the Instance Administrator role in Appsmith has the following permissions:

  <div className="gac-permissions">
        <p className="permission-footnote">
        <span style={{color: 'green', fontWeight: 'bold'}}>(✓)</span> Permission Assigned |
        <span style={{color: 'gray', fontWeight: 'bold'}}>( )</span> Permission Not Assigned |
        <span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span> Permission Not Applicable
        </p>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Create</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>View</th>
                    <th>Execute</th>
                    <th>Invite User</th>
                    <th>Remove User</th>
                    <th>Associate Role</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Workspace</td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                </tr>
                <tr>
                    <td>Audit Logs</td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                </tr>
                <tr>
                    <td>Groups</td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                </tr>
                <tr>
                    <td>Roles</td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                </tr>
                <tr>
                    <td>Default Roles</td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                </tr>
                <tr>
                    <td>Custom Roles</td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: '#ed6227', fontWeight: 'bold'}}>-</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                </tr>
            </tbody>
        </table>
    </div>

For more information about each permission, see [Permissions](/advanced-concepts/granular-access-control/reference/permissions).

### Limitations

Despite having extensive permissions, the Instance Administrator role in Appsmith cannot perform the following tasks:

- Inability to access or update individual workspaces or app content. This means that Instance Administrators cannot view or edit the specific content within each workspace or app, such as queries, datasources, or their configurations. 
- Inability to execute actions that require workspace-level permissions, such as creating, editing, or deleting apps within a workspace.

## Default Role for All Users

Default Roles for All users helps you in assigning some default permissions to all users across your Appsmith instance. Initially, these roles have no specific permissions assigned and act as blank templates. Instance administrators can fully customize this role according to your business needs. For more information, see [How to provide default access to all users](/advanced-concepts/granular-access-control/how-to-guides/set-up-default-permissions) guide.

## Administrator Role for Workspace

Administrator Role assigned to a workspace grants full control over all entities within a workspace, allowing users to perform actions such as creating, editing, and deleting entities. 


### Permissions

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

### Limitations

Administrators do have some limitations; they lack authority to create workspaces, view audit logs, or manage roles, groups, or users.

## Developer Role for Workspace

The Developer role grants users extensive access to different resources within a workspace, including apps, pages, queries, datasources, and environments.

### Permissions

The Developer role enables users to create, edit, and delete apps within a workspace. They also have control over managing pages, queries, datasources, and environments. These responsibilities are governed by the permissions allocated to the Developer - Workspace role in Appsmith, as shown below:

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

### Limitations

Developers do have some constraints; they lack permissions to create workspaces, view audit logs, make apps public or export apps, and manage roles, groups, or users.

## App Viewer Role for Workspace


The App Viewer - Workspace Role is specific to each workspace and provides view-only access to apps within that workspace.

### Permissions

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


### Limitations

 App Viewers do not have permission to create, edit, or delete apps that is does not include permissions to manage apps within workspace.

## Developer Role for Application

### Permissions

<div className="gac-permissions">
    <p className="permission-footnote">(✓) Permission Assigned | (-) Permission Not Assigned | (x) Permission Not Applicable</p>

    |             | Create | Edit | Delete | View | Execute | Make Public | Export | Invite User | Remove User | Associate Role |
    |-------------|--------|------|--------|------|---------|-------------|-------------|-------------|-------------|----------------|
    | Application            | (✓) | (✓) | (✓) | (✓) | (x) | (✓) | (✓) | (x) | (x) | (x) |
    | Pages in Application   | (✓) | (✓) | (✓) | (✓) | (x) | (x) | (x) | (x) | (x) | (x) |
    | Queries in Pages       | (x) | (✓) | (✓) | (✓) | (✓) | (x) | (x) | (x) | (x) | (x) |
    | Datasources            | (✓) | (-) | (-) | (✓) | (✓) | (x) | (x) | (x) | (x) | (x) |
    | Environments           | (✓) | (✓) | (✓) | (✓) | (✓) | (x) | (x) | (x) | (x) | (x) |
    | Production Environment | (x) | (✓) | (✓) | (x) | (✓) | (x) | (x) | (x) | (x) | (x) |
    | Staging Environment    | (x) | (-) | (-) | (x) | (✓) | (x) | (x) | (x) | (x) | (x) |
    </div>

### Limitations

## App Viewer Role for Application

### Permissions

 <div className="gac-permissions">
    <p className="permission-footnote">(✓) Permission Assigned | (-) Permission Not Assigned | (x) Permission Not Applicable</p>

    |             | Create | Edit | Delete | View | Execute | Make Public | Export | Invite User | Remove User | Associate Role |
    |-------------|--------|------|--------|------|---------|-------------|-------------|-------------|-------------|----------------|
    | Application            | (x) | (x) | (x) | (✓) | (x) | (x) | (x) | (x) | (x) | (x) |
    | Pages in Application   | (x) | (x) | (x) | (✓) | (x) | (x) | (x) | (x) | (x) | (x) |
    | Queries in Pages       | (x) | (x) | (x) | (x) | (✓) | (x) | (x) | (x) | (x) | (x) |
    | Datasources            | (x) | (x) | (x) | (x) | (✓) | (x) | (x) | (x) | (x) | (x) |
    | Environments           | (x) | (x) | (x) | (✓) | (✓) | (x) | (x) | (x) | (x) | (x) |
    | Production Environment | (x) | (x) | (x) | (x) | (✓) | (x) | (x) | (x) | (x) | (x) |
    | Staging Environment    | (x) | (x) | (x) | (x) | (x) | (x) | (x) | (x) | (x) | (x) |
    </div>
    
### Limitations