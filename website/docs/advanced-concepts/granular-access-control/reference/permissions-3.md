---
description: Permissions in Granular Access Control in Appsmith
title: Permissions 3
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Permissions</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Permissions in Appsmith govern the level of access and actions users can perform on specific resources within the platform. To assign appropriate permissions to resources, so users can efficiently complete their tasks, it's crucial to understand the permissions, their interdependencies, and their cascading impact. This page provides an in-depth overview of permissions, their assignments, and interdependencies within the Appsmith access control system.

## Create permission

The **Create** permission defines which resources users are allowed to create. Once granted, it permits users to create new resources in Appsmith. Depending on the resource to which the permission is assigned, it will have a cascading effect on the child resources, and the same permissions will be inherited by them.



<details id="application-resources">
  <summary>Application Resources</summary>
  <table>
    <thead>
      <tr>
        <th>Resource</th>
        <th>Cascading Permissions</th>
        <th>Permission Impact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Workspace</b></td>
        <td>Edit, View, Delete, Execute</td>
        <td>Allows creating, editing, viewing, and deleting applications, pages, and queries. It also permits running queries within the given workspace.</td>
      </tr>
      <tr>
        <td><b>Application</b></td>
        <td>Edit, View, Delete, Execute</td>
        <td>Allows creating, editing, viewing, and deleting pages and queries. It also permits running queries within the given application.</td>
      </tr>
      <tr>
        <td><b>Page</b></td>
        <td>Edit, View, Delete, Execute</td>
        <td>Allows creating, editing, viewing, deleting, and running queries within the given application.</td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>Datasources & Environments</summary>
  <table>
    <thead>
      <tr>
        <th>Resource</th>
        <th>Cascading Permissions</th>
        <th>Permission Impact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Datasources</b></td>
        <td>Edit, View, Delete, Execute</td>
        <td>Allows creating, editing, viewing, and deleting datasources. It also grants permission to run queries in all datasources within the workspace.</td>
      </tr>
      <tr>
        <td><b>Datasource</b></td>
        <td>Edit, View, Delete, Execute</td>
        <td>Allows creating, editing, viewing, and deleting the specified datasource. It also grants permission to run queries in the given datasource.</td>
      </tr>
      <tr>
        <td><b>Environments</b></td>
        <td>Edit, View, Delete, Execute</td>
        <td>Allows creating, editing, viewing, and deleting environments. It also grants permission to run queries in all environments (Production, Staging, and custom created) within the workspace.</td>
      </tr>
      <tr>
        <td><b>Environment</b></td>
        <td>Edit, View, Delete, Execute</td>
        <td>Allows creating, editing, viewing, and deleting the specified environment. It also grants permission to run queries in the given environment (Production, Staging, or custom created) within the workspace.</td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>Groups & Roles</summary>
  <table>
    <thead>
      <tr>
        <th>Resource</th>
        <th>Cascading Permissions</th>
        <th>Permission Impact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Groups</b></td>
        <td>Edit, View, Delete, Invite User, Remove User</td>
        <td>Allows creating, editing, viewing, and deleting groups. It also allows inviting users to the instance or removing users from the instance.</td>
      </tr>
      <tr>
        <td><b>Roles</b></td>
        <td>Edit, View, Delete, Associate Role</td>
        <td>Allows creating, editing, viewing, and deleting custom roles. It also allows viewing default roles and assigning custom and default roles to users or groups.</td>
      </tr>
      <tr>
        <td><b>Custom Roles</b></td>
        <td>Edit, View, Delete, Associate Role</td>
        <td>Allows creating, editing, viewing, and deleting the specified custom role. It also allows assigning the given custom role to users or groups.</td>
      </tr>
    </tbody>
  </table>
</details>

<details>
  <summary>Others</summary>
  <table>
    <thead>
      <tr>
        <th>Resource</th>
        <th>Cascading Permissions</th>
        <th>Permission Impact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Workspaces</b></td>
        <td>NA</td>
        <td>When assigned to workspaces, it allows adding new workspaces to the Appsmith instance.</td>
      </tr>
    </tbody>
  </table>
</details>

## Edit permission

The **Edit** permission defines which resources users are allowed to modify. Once granted, it permits users to edit existing resources in Appsmith. Depending on the resource to which the permission is assigned, it will have a cascading effect on the child resources, and the same permissions will be inherited by them.



<details id="application-resources">
  <summary>Application Resources</summary>
  <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Cascading Permissions</th>
          <th>Permission Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Workspace</b></td>
          <td>View, Execute</td>
          <td>Allows editing, viewing, and running queries within the given workspace.</td>
        </tr>
        <tr>
          <td><b>Application</b></td>
          <td>View, Execute</td>
          <td>Allows editing, viewing, and running queries within the given application.</td>
        </tr>
        <tr>
          <td><b>Page</b></td>
          <td>View, Execute</td>
          <td>Allows editing, viewing, and running queries within the given application.</td>
        </tr>
      </tbody>
    </table>
</details>

<details>
  <summary>Datasources & Environments</summary>
  <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Cascading Permissions</th>
          <th>Permission Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Datasources</b></td>
          <td>View, Execute</td>
          <td>Allows editing, viewing, and running queries in all datasources within the workspace.</td>
        </tr>
        <tr>
          <td><b>Datasource</b></td>
          <td>View, Execute</td>
          <td>Allows editing, viewing, and running queries in the given datasource.</td>
        </tr>
        <tr>
          <td><b>Environments</b></td>
          <td>View, Execute</td>
          <td>Allows editing, viewing, and running queries in all environments within the workspace.</td>
        </tr>
        <tr>
          <td><b>Environment</b></td>
          <td>View, Execute</td>
          <td>Allows editing, viewing, and running queries in the given environment within the workspace.</td>
        </tr>
      </tbody>
    </table>
</details>

<details>
  <summary>Groups & Roles</summary>
  <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Cascading Permissions</th>
          <th>Permission Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Groups</b></td>
          <td>View, Invite User, Remove User</td>
          <td>Allows editing, viewing, inviting users to, and removing users from the instance.</td>
        </tr>
        <tr>
          <td><b>Roles</b></td>
          <td>View, Associate Role</td>
          <td>Allows editing, viewing, and assigning custom and default roles to users or groups.</td>
        </tr>
        <tr>
          <td><b>Custom Roles</b></td>
          <td>View, Associate Role</td>
          <td>Allows editing, viewing, and assigning the given custom role to users or groups.</td>
        </tr>
      </tbody>
    </table>
</details>

## Delete permission

The **Delete** permission defines which resources users are allowed to remove. Once granted, it permits users to delete existing resources in Appsmith. Depending on the resource to which the permission is assigned, it will have a cascading effect on the child resources, and the same permissions will be inherited by them.


<details>
  <summary>Application Resources</summary>
  <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Cascading Permissions</th>
          <th>Permission Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Workspace</b></td>
          <td>View, Execute</td>
          <td>Allows deleting, viewing, and running queries within the given workspace.</td>
        </tr>
        <tr>
          <td><b>Application</b></td>
          <td>View, Execute</td>
          <td>Allows deleting, viewing, and running queries within the given application.</td>
        </tr>
        <tr>
          <td><b>Page</b></td>
          <td>View, Execute</td>
          <td>Allows deleting, viewing, and running queries within the given application.</td>
        </tr>
      </tbody>
    </table>
</details>
<details>
  <summary>Datasources & Environments</summary>
  <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Cascading Permissions</th>
          <th>Permission Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Datasources</b></td>
          <td>View, Execute</td>
          <td>Allows deleting, viewing, and running queries in all datasources within the workspace.</td>
        </tr>
        <tr>
          <td><b>Datasource</b></td>
          <td>View, Execute</td>
          <td>Allows deleting, viewing, and running queries in the given datasource.</td>
        </tr>
        <tr>
          <td><b>Environments</b></td>
          <td>View, Execute</td>
          <td>Allows deleting, viewing, and running queries in all environments within the workspace.</td>
        </tr>
        <tr>
          <td><b>Environment</b></td>
          <td>View, Execute</td>
          <td>Allows deleting, viewing, and running queries in the given environment within the workspace.</td>
        </tr>
      </tbody>
    </table>
</details>
<details>
  <summary>Groups & Roles</summary>
  <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Cascading Permissions</th>
          <th>Permission Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Groups</b></td>
          <td>View</td>
          <td>Allows deleting and viewing groups within the instance.</td>
        </tr>
        <tr>
          <td><b>Roles</b></td>
          <td>View, Associate Role</td>
          <td>Allows deleting, viewing, and assigning custom and default roles to users or groups.</td>
        </tr>
        <tr>
          <td><b>Custom Roles</b></td>
          <td>View, Associate Role</td>
          <td>Allows deleting, viewing, and assigning the given custom role to users or groups.</td>
        </tr>
      </tbody>
    </table>
</details>

## View permission

The **View** permission allows users to see and access resources within Appsmith. However, it does not grant them the ability to modify or delete these resources. It primarily serves to provide visibility into various components of the platform.

<details>
  <summary>Application Resources</summary>
  <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Cascading Permissions</th>
          <th>Permission Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Workspace</b></td>
          <td>Execute</td>
          <td>Allows viewing and running queries within the given workspace.</td>
        </tr>
        <tr>
          <td><b>Application</b></td>
          <td>Execute</td>
          <td>Allows viewing and running queries within the given application.</td>
        </tr>
        <tr>
          <td><b>Page</b></td>
          <td>Execute</td>
          <td>Allows viewing and running queries within the given application.</td>
        </tr>
      </tbody>
    </table>
</details>

<details>
  <summary>Datasources & Environments</summary>
   <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Cascading Permissions</th>
          <th>Permission Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Datasources</b></td>
          <td>Execute</td>
          <td>Allows viewing and running queries in all datasources within the workspace.</td>
        </tr>
        <tr>
          <td><b>Datasource</b></td>
          <td>Execute</td>
          <td>Allows viewing and running queries in the given datasource.</td>
        </tr>
        <tr>
          <td><b>Environments</b></td>
          <td>Execute</td>
          <td>Allows viewing and running queries in all environments within the workspace.</td>
        </tr>
        <tr>
          <td><b>Environment</b></td>
          <td>Execute</td>
          <td>Allows viewing and running queries in the given environment within the workspace.</td>
        </tr>
      </tbody>
    </table>
</details>

<details>
  <summary>Groups & Roles</summary>
  <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Cascading Permissions</th>
          <th>Permission Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Groups</b></td>
          <td>NA</td>
          <td>Allows viewing groups within the instance.</td>
        </tr>
        <tr>
          <td><b>Roles</b></td>
          <td>Associate Role</td>
          <td>Allows viewing and assigning custom and default roles to users or groups.</td>
        </tr>
        <tr>
          <td><b>Custom Roles</b></td>
          <td>Associate Role</td>
          <td>Allows viewing and assigning the given custom role to users or groups.</td>
        </tr>
      </tbody>
    </table>
</details>

 <details>
  <summary>Others</summary>
    <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Cascading Permissions</th>
          <th>Permission Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Audit logs</b></td>
          <td>NA</td>
          <td>Allows viewing the Appsmith instance audit logs that helps in monitoring the instance.</td>
        </tr>
      </tbody>
    </table>
  </details>

## Execute permission

The **Execute** permission defines which resources users are allowed to run. Once granted, it permits users to execute actions such as running queries in Appsmith. Depending on the resource to which the permission is assigned, it will have a cascading effect on the child resources, and the same permissions will be inherited by them.

<details id="application-resources">
  <summary>Application Resources</summary>
  <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Cascading Permissions</th>
          <th>Permission Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Workspace</b></td>
          <td>NA</td>
          <td>Allows running queries within the given workspace.</td>
        </tr>
        <tr>
          <td><b>Application</b></td>
          <td>NA</td>
          <td>Allows running queries within the given application.</td>
        </tr>
        <tr>
          <td><b>Page</b></td>
          <td>NA</td>
          <td>Allows running queries within the given application.</td>
        </tr>
      </tbody>
    </table>
</details>

<details>
  <summary>Datasources & Environments</summary>
  <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Cascading Permissions</th>
          <th>Permission Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Datasources</b></td>
          <td>NA</td>
          <td>Allows running queries in all datasources within the workspace.</td>
        </tr>
        <tr>
          <td><b>Datasource</b></td>
          <td>NA</td>
          <td>Allows running queries in the given datasource.</td>
        </tr>
        <tr>
          <td><b>Environments</b></td>
          <td>NA</td>
          <td>Allows running queries in all environments within the workspace.</td>
        </tr>
        <tr>
          <td><b>Environment</b></td>
          <td>NA</td>
          <td>Allows running queries in the given environment within the workspace.</td>
        </tr>
      </tbody>
    </table>
</details>

## Make Public permission

The **Make Public** permission allows users to make certain resources publicly accessible. Once granted, it permits users to change the access level of resources, making them available to the public. Depending on the resource to which the permission is assigned, it will have a cascading effect on the child resources, and the same permissions will be inherited by them.

<details>
  <summary>Application Resources</summary>
   <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Cascading Permissions</th>
          <th>Permission Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Workspace</b></td>
          <td>View, Execute</td>
          <td>Allows making all applications publicly accessible within the given workspace, and allows viewing and running queries to view the application when applications are publicly accessible.</td>
        </tr>
        <tr>
          <td><b>Application</b></td>
          <td>View, Execute</td>
          <td>Allows making the given application publicly accessible, and allows viewing and running queries to view the application when it's publicly accessible.</td>
        </tr>
      </tbody>
    </table>
</details>

## Export permission

The **Export** permission defines which resources users are allowed to export. Once granted, it permits users to export data and resources from Appsmith. Depending on the resource to which the permission is assigned, it will have a cascading effect on the child resources, and the same permissions will be inherited by them.

<details>
  <summary>Application Resources</summary>
  <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Cascading Permissions</th>
          <th>Permission Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Workspace</b></td>
          <td>View, Execute</td>
          <td>Allows viewing application, exporting data and resources, and running queries required to view application and exporting data within the given workspace.</td>
        </tr>
        <tr>
          <td><b>Application</b></td>
          <td>View, Execute</td>
          <td>Allows viewing application, exporting data and resources, and running queries required to view application and exporting data within the given application.</td>
        </tr>
      </tbody>
    </table>
</details>

## Invite User permission

The **Invite User** permission defines which resources users are allowed to invite new users to. Once granted, it permits users to invite other users to access the resources in Appsmith. Depending on the resource to which the permission is assigned, it will have a cascading effect on the child resources, and the same permissions will be inherited by them.

<details>
  <summary>Groups & Roles</summary>
  <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Cascading Permissions</th>
          <th>Permission Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Groups</b></td>
          <td>View</td>
          <td>Allows viewing the groups, and inviting users to workspaces and applications within the instance.</td>
        </tr>
      </tbody>
    </table>
</details>

## Remove User permission

The **Remove User** permission defines which users can be removed from specific resources. Once granted, it permits users to remove other users from the resources in Appsmith. Depending on the resource to which the permission is assigned, it will have a cascading effect on the child resources, and the same permissions will be inherited by them.

<details>
  <summary>Groups & Roles</summary>
  <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Cascading Permissions</th>
          <th>Permission Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Groups</b></td>
          <td>View, Invite User</td>
          <td>Allows viewing groups, inviting users to workspaces, and applications, and removing users from groups within the instance that helps removing their access to the instance.</td>
        </tr>
      </tbody>
    </table>
</details>

## Associate Role permission

The **Associate Role** permission defines which users can be assigned to specific roles within resources. Once granted, it permits users to assign or change roles of other users in Appsmith. Depending on the resource to which the permission is assigned, it will have a cascading effect on the child resources, and the same permissions will be inherited by them.

<details>
  <summary>Groups & Roles</summary>
  <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Cascading Permissions</th>
          <th>Permission Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Roles</b></td>
          <td>NA</td>
          <td>Allows assigning default and custom roles to users within the instance.</td>
        </tr>
        <tr>
          <td><b>Custom Roles</b></td>
          <td>NA</td>
          <td>Allows assigning the given custom role to users within the instance.</td>
        </tr>
      </tbody>
    </table>
</details>