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
        <span style={{color: 'green', fontWeight: 'bold'}}>(✓)</span> Permission Assigned
        </p>
        <table className="permissions-table" style={{ width: '100%', display: 'table', marginLeft: '2px' }}>
            <thead>
                <tr>
                    <th></th>
                    <th>Create</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>View</th>
                    <th>Invite User</th>
                    <th>Remove User</th>
                    <th>Associate Role</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>**Groups**</td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td></td>
                </tr>
                <tr>
                    <td>**Roles**</td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td></td>
                    <td></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                </tr>
                <tr>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Default Roles</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td></td>
                    <td></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                </tr>
                <tr>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Custom Roles</td>
                    <td></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td></td>
                    <td></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                </tr>
                <tr>
                    <td>**Workspace**</td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>**Audit Logs**</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>

For more information about each permission, see [Permissions](/advanced-concepts/granular-access-control/reference/permissions).

### Limitations

Despite having extensive permissions, the Instance Administrator role in Appsmith cannot perform the following tasks:

- Inability to execute actions that require workspace-level permissions, such as creating, editing, or deleting apps within a workspace.

## Default Role for All Users

Default Roles for All users helps you in assigning some default permissions to all users across your Appsmith instance.  Initially, the role has [permission to create workspace](/advanced-concepts/granular-access-control/reference/permissions#create-permission), and serves as a blank template for all other permissions. Instance administrators can fully customize this role according to your business needs. For more information, see [How to provide default access to all users](/advanced-concepts/granular-access-control/how-to-guides/configure-default-permissions) guide.

## Administrator Role for Workspace

Administrator Role assigned to a workspace grants full control over all entities within a workspace, allowing users to perform actions such as creating, editing, and deleting entities. 


### Permissions

To perform different tasks, the Administrator - Workspace role in Appsmith has the following permissions:

<div className="gac-permissions">
    <p className="permission-footnote">(✓) Permission Assigned </p>

<table className="permissions-table" style={{ width: '100%', display: 'table', marginLeft: '2px' }}>
    <thead>
        <tr>
            <th></th>
            <th>Create</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>View</th>
            <th>Execute</th>
            <th>Make Public</th>
            <th>Export</th>
        </tr>
    </thead>
    <tbody>
         <tr>
            <td>**Workspace**</td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;All Applications</td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;All Pages</td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;All Queries</td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>**Datasources**</td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;All Datasources</td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>**Environments**</td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Production</td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Staging</td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>**Workflows**</td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
</div>

For more information about each permission, see [Permissions](/advanced-concepts/granular-access-control/reference/permissions).

### Limitations

Workspace Administrators do have some limitations; they lack authority to create workspaces, view audit logs, or manage roles, groups, or users.

## Developer Role for Workspace

The Developer role grants users extensive access to different resources within a workspace, including apps, pages, queries, datasources, and environments.

### Permissions

The Developer role enables users to create, edit, and delete apps within a workspace. They also have control over managing pages, queries, datasources, and environments. These responsibilities are governed by the permissions allocated to the Developer - Workspace role in Appsmith, as shown below:

<div className="gac-permissions">
    <p className="permission-footnote">(✓) Permission Assigned </p>

<table className="permissions-table" style={{ width: '100%', display: 'table', marginLeft: '2px' }}>
    <thead>
        <tr>
            <th></th>
            <th>Create</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>View</th>
            <th>Execute</th>
        </tr>
    </thead>
    <tbody>
         <tr>
            <td>**Workspace**</td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;All Applications</td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;All Pages</td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;All Queries</td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>**Datasources**</td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;All Datasources</td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>**Environments**</td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Production</td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Staging</td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>**Workflows**</td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
</div>

For more information about each permission, see [Permissions](/advanced-concepts/granular-access-control/reference/permissions).

### Limitations

Workspace Developers have the same limitations as Workspace Administrators and, in addition, cannot make apps public or export them.

## App Viewer Role for Workspace


The App Viewer - Workspace Role is specific to each workspace and provides view-only access to apps within that workspace.

### Permissions

The workspace App Viewer role enables users to view apps, governed by the permissions allocated to the App Viewer - Workspace role in Appsmith, as shown below:

  <div className="gac-permissions">
    <p className="permission-footnote">(✓) Permission Assigned </p>

<table className="permissions-table" style={{ width: '100%', display: 'table', marginLeft: '2px' }}>
    <thead>
        <tr>
            <th></th>
            <th>Create</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>View</th>
            <th>Execute</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>**Workspace**</td>
            <td></td>
            <td></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;All Applications</td>
            <td></td>
            <td></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;All Pages</td>
            <td></td>
            <td></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;All Queries</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>**Datasources**</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;All Datasources</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>**Environments**</td>
            <td></td>
            <td></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Production</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
    </tbody>
</table>
</div>

  For more information about each permission, see [Permissions](/advanced-concepts/granular-access-control/reference/permissions).


### Limitations

 Workspace App Viewers do not have permission to create, edit, or delete apps that is it does not include permissions to manage apps within workspace.

## Developer Role for Application

The Developer role for application grants users extensive access to different resources within the given app, including pages, queries, datasources, and environments. When a user is invited to an app and provided developer access, this role is created if not already present.

### Permissions

The Developer role enables users to manage pages, queries, datasources, and environments within the given app. These responsibilities are governed by the permissions allocated to the Developer - Application role in Appsmith, as shown below:

<div className="gac-permissions">
    <p className="permission-footnote">(✓) Permission Assigned </p>

<table className="permissions-table" style={{ width: '100%', display: 'table', marginLeft: '2px' }}>
    <thead>
        <tr>
            <th></th>
            <th>Create</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>View</th>
            <th>Execute</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>**Application**</td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;All Pages</td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;All Queries</td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>**Datasources**</td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Datasource Name</td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>**Environments**</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Production</td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Staging</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
    </tbody>
</table>
</div>

### Limitations

Application Developers do have some constraints; they lack permissions to create applications in workspace, view audit logs, manage workflows, make apps public or export apps, and manage roles, groups, or users.

## App Viewer Role for Application

The App Viewer for Application Role is specific to each workspace and provides view-only access to apps within that application.

### Permissions

The App Viewer role enables users to view pages, governed by the permissions allocated to the App Viewer - Application role in Appsmith, as shown below:

 <div className="gac-permissions">
    <p className="permission-footnote">(✓) Permission Assigned </p>

<table className="permissions-table" style={{ width: '100%', display: 'table', marginLeft: '2px' }}>
    <thead>
        <tr>
            <th></th>
            <th>Create</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>View</th>
            <th>Execute</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>**Application**</td>
            <td></td>
            <td></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;All Pages</td>
            <td></td>
            <td></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
            <td></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;All Queries</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>**Datasources**</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Datasource Name</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>**Environments**</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Production</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Staging</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
    </div>
    
### Limitations

 Application App Viewers do not have permission to create, edit, or delete pages, queries in the app and does not include permissions to manage apps within workspace.