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

:::info
The tables on this page show permissions on apps, datasources, environments, and workflows. Every workspace and application default role also includes **Associate Role** on the **Groups & Roles** tab. This lets members invite others with the same role or a lower one. For example, an App Viewer can invite other users as App Viewers. For details, see [Invite and Share Permissions](/advanced-concepts/granular-access-control/reference/invite-and-share-permissions).
:::

## Organization Administrator Role

The Organization Administrator Role (previously Instance Administrator role) operates at the highest level within the platform, managing organization-wide settings such as branding, GAC, licenses, provisioning, and audit logs.

### Permissions

To perform different tasks, the Organization Administrator role in Appsmith has the following permissions:

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

Despite having extensive permissions, the Organization Administrator role in Appsmith cannot perform the following tasks:

- Inability to execute actions that require workspace-level permissions, such as creating, editing, or deleting apps within a workspace.

## Default Role for All Users

Default Role for All Users helps you assign some default permissions to all users across your Appsmith instance. Initially, the role has [permission to create workspace](/advanced-concepts/granular-access-control/reference/permissions?gac-resource=create-others). For all other permissions, instance administrators can fully customize this role according to your business needs. For more information, see [How to provide default access to all users](/advanced-concepts/granular-access-control/how-to-guides/configure-default-permissions).

On the Roles screen, the **Assignees** column shows **All users** for this role. On the role page, the **Assignees** tab shows **Assigned to all users** instead of listing individual users, because membership is implicit for every user in the instance. Configure permissions on the **Permissions** tab. For more information about viewing assignees on other roles, see [View role assignees](/advanced-concepts/granular-access-control/roles#view-role-assignees).

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

### Invite users

Workspace Administrators can invite people to the workspace as Administrator, Developer, or App Viewer. They can also change a member's role and remove members. They can share any app in the workspace as Developer or App Viewer. For more information, see [Invite and Share Permissions](/advanced-concepts/granular-access-control/reference/invite-and-share-permissions).

### Limitations

Workspace Administrators can't create workspaces, view audit logs, or manage users, groups, and roles in **Admin Settings**.

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

### Invite users

Workspace Developers can invite people to the workspace as Developer or App Viewer. They can share any app in the workspace as Developer or App Viewer. They can't invite anyone as Administrator. For more information, see [Invite and Share Permissions](/advanced-concepts/granular-access-control/reference/invite-and-share-permissions).

### Limitations

Workspace Developers can't make apps public, export apps, change a member's role, or remove members. They also can't create workspaces, view audit logs, or manage users, groups, and roles in **Admin Settings**.

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


### Invite users

Workspace App Viewers can invite people to the workspace as App Viewer, and can share any app in the workspace as App Viewer. They can't give anyone edit access. Invited people who don't have an account get one on the instance. To give users view access without the ability to invite, see [Restrict Who Can Invite Users](/advanced-concepts/granular-access-control/how-to-guides/restrict-user-invites).

### Limitations

Workspace App Viewers can't create, edit, or delete apps, and can't change or remove members.

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

### Invite users

Application Developers can share the app as Developer or App Viewer. For more information, see [Invite and Share Permissions](/advanced-concepts/granular-access-control/reference/invite-and-share-permissions).

### Limitations

Application Developers can't create applications in the workspace, view audit logs, manage workflows, make apps public, export apps, or manage users, groups, and roles in **Admin Settings**.

## App Viewer Role for Application

The App Viewer for Application role is specific to each app and provides view-only access to that app. When a user is invited to an app with App Viewer access, this role is created if not already present.

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
    
### Invite users

Application App Viewers can share the app as App Viewer. They can't give anyone edit access. To give users view access without the ability to invite, see [Restrict Who Can Invite Users](/advanced-concepts/granular-access-control/how-to-guides/restrict-user-invites).

### Limitations

Application App Viewers can't create, edit, or delete pages or queries in the app.

## See also

* [Invite and Share Permissions](/advanced-concepts/granular-access-control/reference/invite-and-share-permissions)
* [Restrict Who Can Invite Users](/advanced-concepts/granular-access-control/how-to-guides/restrict-user-invites)
* [Custom Roles](/advanced-concepts/granular-access-control/reference/custom-roles)
* [Permissions](/advanced-concepts/granular-access-control/reference/permissions)
