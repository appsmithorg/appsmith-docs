---
description: Permissions in Granular Access Control in Appsmith
title: Permissions 2
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

Permissions in Appsmith govern the level of access and actions users can perform on specific resources within the platform. To assign appropriate permissions to resources so users can efficiently complete their tasks, it is crucial to understand the permissions, their interdependencies, and their cascading impact. This page provides an in-depth overview of permissions, their hierarchy levels, automatic assignments, and interdependencies within the Appsmith access control system.

## Create permission

The **Create** permission defines which resources users are allowed to create. Once granted, it permits users to create new resources in Appsmith. Depending on the hierarchical level at which the permission is assigned, it will have a cascading effect on the child resources, and the same permissions will be inherited by them.

| Hierarchy Level | Automatically assigns | Description |
|-----------------|-------------|-------------|
| **Workspace**   | Edit, View, Delete, Execute | Allows creating, editing, viewing, and deleting applications, pages, and queries. It also permits running queries within the given workspace. |
| **Application** | Edit, View, Delete, Execute | Allows creating, editing, viewing, and deleting pages and queries. It also permits running queries within the given application. |
| **Page**        | Edit, View, Delete, Execute | Allows creating, editing, viewing, deleting, and running queries within the given application. |
| **Datasources** | Edit, View, Delete, Execute | Allows creating, editing, viewing, and deleting datasources. It also grants permission to run queries in all datasources within the workspace. |
| **Datasource**  | Edit, View, Delete, Execute | Allows creating, editing, viewing, and deleting the specified datasource. It also grants permission to run queries in the given datasource. |
| **Environments**| Edit, View, Delete, Execute | Allows creating, editing, viewing, and deleting environments. It also grants permission to run queries in all environments (Production, Staging, and custom created) within the workspace. |
| **Environment** | Edit, View, Delete, Execute | Allows creating, editing, viewing, and deleting the specified environment. It also grants permission to run queries in the given environment (Production, Staging, or custom created) within the workspace. |
| **Groups**      | Edit, View, Delete, Invite User, Remove User | Allows creating, editing, viewing, and deleting groups. It also allows inviting users to the instance or removing users from the instance. |
| **Roles**       | Edit, View, Delete, Associate Role | Allows creating, editing, viewing, and deleting custom roles. It also allows viewing default roles and assigning custom and default roles to users or groups. |
| **Custom Roles**| Edit, View, Delete, Associate Role | Allows creating, editing, viewing, and deleting the specified custom role. It also allows assigning the given custom role to users or groups. |
| **Workspaces**  | NA | When assigned to workspaces under the _Others_ tab, it allows adding new workspaces to the Appsmith instance. |

