---
description: >-
  Use Default and Custom Roles in Appsmith to configure Granular Access Control
title: Roles
hide_title: true
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

Default roles provide standardized permission sets tailored to meet different user's responsibilities within app-building experience on Appsmith. They come up with a collection of ready-to-use permissions assigned to roles like administrators, developers, and app viewers. You can assign these roles to your users based on your desired permission model. To see the default roles available for your Appsmith instance, toggle the **Default Roles** option on the Roles screen.

 <ZoomImage
    src="/img/GAC-Default-Roles-toggle.png" 
    alt="Toggle the Default Roles options to view Default roles"
    caption="Toggle the Default Roles options to view Default roles"
  />

  ### Scopes

Default roles in Appsmith have below primary scopes, each serving distinct purposes within the access control framework. 

#### Instance level

Instance-level roles have permissions that govern access to Appsmith instance, affecting all workspaces and users within the instance. Some instance-level roles can be tailored to provide specific access to all users. The instance-level roles include:

* **Instance Administrator Role -** The Instance Administrator Role operates at the highest level of the Granular Access Control, and performs tasks such as configuring instances, managing user groups and roles, creating workspaces, and monitoring audit logs. The below table shows the permission configuration for an Instance Administrator role.

    <div className="gac-permissions">
    <p className="permission-footnote">(✓) Permission Assigned | (-) Permission Not Assigned | (x) Permission Not Applicable</p>

    |             | Create | Edit | Delete | View | Execute | Invite User | Remove User | Associate Role |
    |-------------|--------|------|--------|------|---------|-------------|-------------|----------------|
    | Workspace  | (✓) | (x) | (x) | (x) | (x) | (x) | (x) | (x) | (x) |
    | Audit Logs | (x) | (x) | (x) | (✓) | (x) | (x) | (x) | (x) |(x) |
    | Groups     | (✓) | (✓) | (✓) | (✓) | (x) | (✓) | (✓) | (x) |(x) |
    | Roles      | (✓) | (✓) | (✓) | (✓) | (x) | (x) | (x) | (✓) |(x) |
    | Default Roles | (x) | (x) | (x) | (✓) | (x) | (x) | (x) | (✓) |(x) |
    | Custom Roles | (x) | (✓) | (✓) | (✓) | (x) | (x) | (x) | (✓) |(x) |
    </div>

  <div className="gac-permissions">
      <p className="permission-footnote">✅ Permission Assigned | ➖ Permission Not Assigned | ❌ Permission Not Applicable</p>

  |         | Create | Edit | Delete | View | Execute | Invite User | Remove User | Associate Role |
  |-------------|--------|------|--------|------|---------|-------------|-------------|----------------|
  | Workspace   | ✅     | ❌   | ❌      | ❌   | ❌      | ❌          | ❌          | ❌            |
  | Audit Logs  | ❌     | ❌   | ❌      | ✅   | ❌      | ❌          | ❌          | ❌            |
  | Groups      | ✅     | ✅   | ✅      | ✅   | ❌      | ✅          | ✅          | ❌            |
  | Roles       | ✅     | ✅   | ✅      | ✅   | ❌      | ❌          | ❌          | ✅            |
  | Default Roles | ❌  | ❌   | ❌      | ✅   | ❌      | ❌          | ❌          | ✅            |
  | Custom Roles | ❌    | ✅   | ✅      | ✅   | ❌      | ❌          | ❌          | ✅            |
  </div>

  <div className="gac-permissions">
      <p className="permission-footnote">
      <span style={{color: 'green', fontWeight: 'bold'}}>(✓)</span> Permission Assigned |
      <span style={{color: 'gray', fontWeight: 'bold'}}>(-)</span> Permission Not Assigned |
      <span style={{color: '#ed6227', fontWeight: 'bold'}}>(x)</span> Permission Not Applicable
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
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
              </tr>
              <tr>
                  <td>Audit Logs</td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
              </tr>
              <tr>
                  <td>Groups</td>
                  <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                  <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                  <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                  <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                  <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
              </tr>
              <tr>
                  <td>Roles</td>
                  <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                  <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                  <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                  <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
              </tr>
              <tr>
                  <td>Default Roles</td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
              </tr>
              <tr>
                  <td>Custom Roles</td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                  <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                  <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: '#ed6227', fontWeight: 'bold', fontSize: '16px'}}>(x)</span></td>
                  <td><span style={{color: 'green', fontWeight: 'bold', fontSize: '16px'}}>(✓)</span></td>
              </tr>
          </tbody>
      </table>
  </div>

* **Default Roles for All Users -** Default Roles for All users helps you in assigning some default permissions to all users across your Appsmith instance. Initially, these roles have no specific permissions assigned and act as blank templates. Instance administrators can fully customize this role according to your business needs. For more information, see [How to provide default access to all users] guide.

#### Workspace level

Workspace-level roles control access within a specific workspace. These roles are pre-defined, offering standard access controls tailored to each workspace. The workspace level roles are not available for customization. They include:

* **Administrator Role for Workspace -** The Administrator role can create, edit, view and delete all apps, queries and datasources. The below table shows the permission configuration for an Administrator role. For more information about each permission, see [Permissions].

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

* **Developer Role for Workspace -** The Developer role can create apps, pages, queries, datasources, and environments within a workspace. The below table shows the permission configuration for a Developer role. For more information about each permission, see [Permissions].

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

* **App Viewer Role for Workspace -** The App Viewer Role provides read-only access to apps within a workspace. The below table shows the permission configuration for an App Viewer role. For more information about each permission, see [Permissions].
 
    <div className="gac-permissions">
    <p className="permission-footnote">(✓) Permission Assigned | (-) Permission Not Assigned | (x) Permission Not Applicable</p>

    |             | Create | Edit | Delete | View | Execute | Make Public | Export | Invite User | Remove User | Associate Role |
    |-------------|--------|------|--------|------|---------|-------------|-------------|-------------|-------------|----------------|
    | Workspace - Apps       | (x) | (x) | (x) | (✓) | (x) | (x) | (x) | (x) | (x) | (x) |
    | Pages in Apps          | (x) | (x) | (x) | (✓) | (x) | (x) | (x) | (x) | (x) | (x) |
    | Queries in Pages       | (x) | (x) | (x) | (x) | (✓) | (x) | (x) | (x) | (x) | (x) |
    | Datasources            | (x) | (x) | (x) | (x) | (✓) | (x) | (x) | (x) | (x) | (x) |
    | Environments           | (x) | (x) | (x) | (✓) | (✓) | (x) | (x) | (x) | (x) | (x) |
    | Production Environment | (x) | (x) | (x) | (x) | (✓) | (x) | (x) | (x) | (x) | (x) |
    | Staging Environment    | (x) | (x) | (x) | (x) | (x) | (x) | (x) | (x) | (x) | (x) |
    </div>

#### Application level

Application level roles control access within a specific application. These roles are pre-defined with standard access controls for each application. The application level roles are not available for customization, and are on-the-fly created when you share an application by providing Developer or App viewer access to the user. They include:

* **Developer role for application -** The Developer role can create pages, queries, datasources, and environments within an Appsmith app, but cannot create workspaces, and apps. The below table shows the permission configuration for a Developer role. For more information about each permission, see [Permissions].

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

* **App Viewer role for application -** The App Viewer role provides read-only access to the shared app. They can view the app content, but cannot edit or delete app, pages, and more. The below table shows the permission configuration for an App Viewer role. For more information about each permission, see [Permissions].

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

## Custom roles

Custom roles in Appsmith allow users to define specific permission sets tailored to their business needs. With custom roles, instance administrators can fine-tune access levels by assigning granular permissions to different users or user groups. To create a custom role, click the **Add role** button on the Roles screen. For more information on permissions and their relations to the entities in Appsmith, see [Permissions].

 <ZoomImage
    src="/img/GAC-Create-Custom-Roles-Add-Role-button.png" 
    alt="Click the Add role button to create a custom role"
    caption="Click the Add role button to create a custom role"
  />