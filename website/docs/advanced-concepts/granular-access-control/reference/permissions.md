---
description: >-
  Permissions in Granular Access Control in Appsmith
title: Permissions
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

Permissions in Appsmith determine the level of access and actions users can take on specific resources within the platform. This page provides insights into the permissions available in Appsmith and their corresponding impact on resource access.

## Resources

Resources in Appsmith include pages, queries, datasources, environments, groups, roles, and workspaces. Access permissions are categorized as follows:


### Application Resources

This category governs access privileges to resources associated with workspaces and applications built in Appsmith, such as apps, pages or queries. 

#### Workspace

Below the workspace name, all the applications created in that workspace are displayed. Permissions assigned at the workspace level cascade down to all applications within it. To assign specific permissions to specific apps, see [Application](#application).

| Permission | Automatically assigns |  Cascades to resources |
|------------|-------------|--------------|
| Create | Edit, View, Delete, Execute | All apps, their pages, and queries |
| Edit | View, Execute | View - All apps and pages. View and Execute - queries   | 
| Delete |  View, Execute | View - All apps and pages. View and Execute - queries  | 
| View | Execute | View - All pages of all apps. Execute - all queries of all apps  | 
| Make Public |  View, Execute | View - All pages of all apps. Execute - all queries of all apps | 
| Export | View, Execute | View - All pages of all apps. Execute - all queries of all apps|

#### Application

Under the application name, all the resources created in that application are displayed. Permissions assigned at the application level cascade down to all resources within it. 

| Permission | Automatically assigns |  Cascades to resources |
|------------|-------------|--------------|
| Create | Edit, View, Delete, Execute | All pages and grants Execute permissions to queries |
| Edit | View, Execute | View - All pages. View and Execute - queries   | 
| Delete |  View, Execute | View - All pages. View and Execute - queries  | 
| View | Execute | View - All pages. Execute - queries of all apps  | 
| Make Public |  View, Execute | View - All pages. Execute - queries of all apps | 
| Export | View, Execute | View - All pages. Execute - queries of all apps|

You can assign specific permissions to pages and queries by selecting permissions for every page and query individually.

### Datasources and Environments

The datasources and environments display all the datasources available within the workspace and their corresponding environments. This category controls access to datasources and environments at the workspace level in Appsmith. You must assign individual permissions to both datasources and environments as they are not mutually exclusive. 

#### Datasources

These permissions control the access to datasources within a workspace, and are applicable to all datasources within that workspace. The permissions assigned to datasources do not cascade automatically to queries, and you must assign individual permissions to queries under the [Application Resources](#application-resources) tab. 

| Permission | Automatically assigns |  Cascades to resources |
|------------|-------------|--------------|
| Create | Edit, View, Delete, Execute | All datasources within the workspace |
| Edit | View, Execute | All datasources within the workspace   | 
| Delete |  View, Execute | All datasources within the workspace | 
| View | Execute | All datasources within the workspace  | 
| Execute |  - | All datasources within the workspace | 

#### Datasource

These permissions control access to a specific datasource within the workspace. 

| Permission | Automatically assigns |  Cascades to resources |
|------------|-------------|--------------|
| Create | Edit, View, Delete, Execute | The specific datasource |
| Edit | View, Execute | The specific datasource   | 
| Delete |  View, Execute | The specific datasource | 
| View | Execute | The specific datasource  | 
| Execute |  - | The specific datasource| 


#### Environments

Permissions control the access to the environments within a workspace, and are applicable to all environments for the accessible datasources as defined in the [Datasources](#datasources) section within the workspace. The permissions assigned to environments do not cascade automatically to queries, and you must assign individual permissions to queries under the [Application Resources](#application-resources) tab. 

| Permission | Automatically assigns |  Cascades to resources |
|------------|-------------|--------------|
| Create | Edit, View, Delete, Execute | All environments for accessible datasources |
| Edit | View, Execute | All environments for accessible datasources  | 
| Delete |  View, Execute | All environments for accessible datasources| 
| View | Execute | All environments for accessible datasources | 
| Execute |  - | All environments for accessible datasources | 

#### Environment

These permissions govern access to a specific environment for the accessible datasources as defined in the [Datasources](#datasources) section within the workspace.

| Permission | Automatically assigns |  Cascades to resources |
|------------|-------------|--------------|
| Create | Edit, View, Delete, Execute | Specific environment for accessible datasources |
| Edit | View, Execute | Specific environment for accessible datasources  | 
| Delete |  View, Execute | Specific environment for accessible datasources | 
| View | Execute | Specific environment for accessible datasources  | 
| Execute |  - | Specific environment for accessible datasources  | 

### Workflows

In this category, the permissions govern access to Appsmith workflows. Permissions are assigned at the workspace level, and apply to all workflows within that workspace. 

| Permission | Automatically assigns |  Cascades to resources |
|------------|-------------|--------------|
| Create | Edit, Delete | All workflows within the workspace |
| Edit | - | All workflows within the workspace | 
| Delete |  - | All workflows within the workspace | 


### Groups and Roles

This permission group manages access privileges for default roles and custom roles. 

#### Groups

These permissions govern the access provided to Groups and are applicable at the instance level. Permissions assigned at the groups level apply to all groups within the instance.

| Permission | Automatically assigns |  Cascades to resources |
|------------|-------------|--------------|
| Create | Edit, View, Delete, Invite User, Remove User | - |
| Edit | View, Invite User, Remove User | - |
| Delete |  View | - |
| View | - | - |
| Invite User|  View | - |
| Remove User | View | - |

#### Roles

The permissions govern the access provided default and custom roles at the Appsmith instance level. Permissions assigned at the roles level apply to all roles within the instance. The default roles cannot be removed or modified. For more information about default roles, see [Default Roles](/advanced-concepts/granular-access-control/roles#default-roles).

| Permission | Automatically assigns |  Cascades to resources |
|------------|-------------|--------------|
| Create | Edit, View, Delete, Associate Role | Custom Roles. View and Associate Role for Default Roles|
| Edit | View, Associate Role | Custom Roles. View and Associate Role for Default Roles| 
| Delete |  View, Associate Role | Custom Roles. View and Associate Role for Default Roles | 
| View | Associate Role | Custom and Default Roles | 
| Associate Role|  - | Custom Roles. View and Associate Role for Default Roles| 

##### Custom roles

These permissions define the access applicable to the custom roles created within the Appsmith instance. Permissions assigned at the custom roles level apply to the specified custom role.

| Permission | Automatically assigns |  Cascades to resources |
|------------|-------------|--------------|
| Edit | View, Associate Role | Specified Custom Role| 
| Delete |  View, Associate Role | Specified Custom Role| 
| View | Associate Role | Specified Custom Role | 
| Associate Role|  - | Specified Custom Role| 

### Others

This category oversees access privileges for workspaces and audit logs within the Appsmith instance. 

#### Workspaces

Permissions under this allow users to manage permissions across workspaces in the Appsmith instance.

| Permission | Automatically assigns |  Cascades to resources |
|------------|-------------|--------------|
| Create | - | Allows creating new workspaces in the Instance.| 

#### Workspace

Permissions under this allow users to manage workspaces in the Appsmith instance.

| Permission | Automatically assigns |  Cascades to resources |
|------------|-------------|--------------|
| Edit | - | Allows editing the specified workspace. | 
| Delete |  - | Allows editing the specified workspace.| 

#### Audit logs

Permissions under this allow users to monitor the Appsmith instance by auditing logs.

| Permission | Automatically assigns |  Cascades to resources |
|------------|-------------|--------------|
| View | - | Allows monitoring instance logs. | 
