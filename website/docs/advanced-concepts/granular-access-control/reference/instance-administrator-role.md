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

 <ZoomImage
    src="/img/GAC-instance-administrator-groups-role-permissions.png" 
    alt="Add a new Role"
    caption="Instance Administrator - Group and Roles Permissions"
  />

## Permissions

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

## Limitations

Despite having extensive permissions, the Instance Administrator role in Appsmith cannot perform the following tasks:

- Inability to access or update individual workspaces or app content. This means that Instance Administrators cannot view or edit the specific content within each workspace or app, such as queries, datasources, or their configurations. 
- Inability to execute actions that require workspace-level permissions, such as creating, editing, or deleting apps within a workspace.
