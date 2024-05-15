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

Permissions in Appsmith determine the level of access and actions users can take on specific resources within the platform. This page offers insights into the range of permissions available in Appsmith and the corresponding access levels they provide.

## Resources

Resources defines different components of an application that users can access or modify. These include individual pages or queries within the application, specific datasources or environments, groups, roles, and workspaces. In Appsmith, access to these resources is categorized as follows:

### Application Resources

This category governs access privileges to resources associated with applications built in Appsmith, such as individual pages or queries. Below are the permissions available to manage access to application-level resources:

#### Workspace

Beneath the workspace name, all the applications created in that workspace are displayed. You can specify who can access these applications by individually assigning permissions to these apps or opt to grant similar permissions to all apps under the workspace by selecting the permissions available next to your workspace name. Workspace permissions are as follows:

| Permission | Cascades |  Impact on Resources |
|------------|-------------|--------------|
| Create | Edit, View, Delete, Execute | All apps, their pages, and the ability to execute their queries |
| Edit | View, Execute | View - All apps and their pages. View and Execute - their queries   | 
| Delete |  View, Execute | View - All apps and their pages. View and Execute - their queries  | 
| View | Execute | View - All pages of all apps. Execute - all queries of all apps  | 
| Make Public |  View, Execute | View - All pages of all apps. Execute - all queries of all apps | 
| Export | View, Execute | View - All pages of all apps. Execute - all queries of all apps|

#### Application

Underneath the application name, all the resources created in that application are displayed. You can specify who can access these resources by individually assigning permissions to these apps or opt to grant similar permissions to all app resources under the application by selecting the permissions available next to your application name. Application permissions are as follows:

| Permission | Cascades |  Impact on Resources |
|------------|-------------|--------------|
| Create | Edit, View, Delete, Execute | All pages and also grants Execute permissions to their queries |
| Edit | View, Execute | View - All pages. View and Execute - their queries   | 
| Delete |  View, Execute | View - All pages. View and Execute - their queries  | 
| View | Execute | View - All pages. Execute - all queries of all apps  | 
| Make Public |  View, Execute | View - All pages. Execute - all queries of all apps | 
| Export | View, Execute | View - All pages. Execute - all queries of all apps|

### Datasources and Environments

This category controls access to datasources and environments created at the workspace level in Appsmith. These permissions are applicable to all the Datasources and Environments, or you may also choose to assign permissions to individual datasources and environments within the workspace. The permissions assigned to datasources and environments do not cascade automatically to queries, and you must assign individual permissions to queries under the [Application Resources](#application-resources) tab. 

#### Datasources

These permissions control the access to datasources within a workspace, and are applicable to all datasources within that workspace. These permissions are also to be individually assigned environments under the [Environments](#environments) section, and are not mutually exclusive. The table below shows the permissions available at the datasource level, their cascading impact, and applicability to individual resources:

| Permission | Cascades |  Impact on Resources |
|------------|-------------|--------------|
| Create | Edit, View, Delete, Execute | All datasources within the workspace |
| Edit | View, Execute | All datasources within the workspace   | 
| Delete |  View, Execute | All datasources within the workspace | 
| View | Execute | All datasources within the workspace  | 
| Execute |  - | All datasources within the workspace | 

#### Datasource

The Permissions govern the access to a specific datasource within the workspace. The table below shows the permissions available at the datasource level, their cascading impact, and applicability to individual resources:

| Permission | Cascades |  Impact on Resources |
|------------|-------------|--------------|
| Create | Edit, View, Delete, Execute | The specific datasource |
| Edit | View, Execute | The specific datasource   | 
| Delete |  View, Execute | The specific datasource | 
| View | Execute | The specific datasource  | 
| Execute |  - | The specific datasource| 


#### Environments

Permissions control the access to the environments within a workspace, and are applicable to all environments for the accessible datasources as defined in the [Datasources](#datasources) section within the workspace. The table below shows the permissions available at the environments level, their cascading impact, and applicability to individual resources:

| Permission | Cascades |  Impact on Resources |
|------------|-------------|--------------|
| Create | Edit, View, Delete, Execute | All environments for accessible datasources |
| Edit | View, Execute | All environments for accessible datasources  | 
| Delete |  View, Execute | All environments for accessible datasources| 
| View | Execute | All environments for accessible datasources | 
| Execute |  - | All environments for accessible datasources | 

#### Environment

These permissions govern the access to a specific environment for the accessible datasources as defined in the [Datasources](#datasources) section within the workspace. The table below shows the permissions available at the environment level, their cascading impact, and applicability to individual resources:

| Permission | Cascades |  Impact on Resources |
|------------|-------------|--------------|
| Create | Edit, View, Delete, Execute | Specific environment for accessible datasources |
| Edit | View, Execute | Specific environment for accessible datasources  | 
| Delete |  View, Execute | Specific environment for accessible datasources | 
| View | Execute | Specific environment for accessible datasources  | 
| Execute |  - | Specific environment for accessible datasources  | 

### Workflows

In this category, the permissions govern the access provided to Appsmith workflows, and are applicable to all the workflows within the workspace. You must grant access to each workspace individually to provide access to the workflows present in each workspace. The table below shows the permissions available at workspace levels for workflows, their cascading impact, and their applicability:

| Permission | Cascades |  Impact on Resources |
|------------|-------------|--------------|
| Create | Edit, Delete | All workflows within the workspace |
| Edit | - | All workflows within the workspace | 
| Delete |  - | All workflows within the workspace | 


### Groups and Roles

This permission group manages access privileges for default roles available within workspaces and instances, as well as custom roles created to define access privileges for an Appsmith instance. 

#### Groups

These permissions govern the access provided to Groups and are applicable at the Appsmith instance level. The users assigned to this permission group can manage all users of the Appsmith instance based on permissions assigned. The table below showcases the permissions available, their cascading impact, and applicability:

| Permission | Cascades |  Impact on Resources |
|------------|-------------|--------------|
| Create | Edit, View, Delete, Invite User, Remove User | - |
| Edit | View, Invite User, Remove User | - |
| Delete |  View | - |
| View | - | - |
| Invite User|  View | - |
| Remove User | View | - |

#### Roles

The permissions govern the access provided default and custom roles at the Appsmith instance level. The users associated with this permission group can manage all roles of the Appsmith instance based on permissions assigned. The default roles cannot be removed or modified. For more information about default roles, see [Default Roles](/advanced-concepts/granular-access-control/roles#default-roles).

The table below showcases the permissions available, their cascading impact, and applicability:


| Permission | Cascades |  Impact on Resources |
|------------|-------------|--------------|
| Create | Edit, View, Delete, Associate Role | For all Custom Roles. View and Associate Role for Default Roles|
| Edit | View, Associate Role | For all Custom Roles. View and Associate Role for Default Roles| 
| Delete |  View, Associate Role | For all Custom Roles. View and Associate Role for Default Roles | 
| View | Associate Role | For all Custom and Default Roles | 
| Associate Role|  - | For all Custom Roles. View and Associate Role for Default Roles| 

##### Custom roles

These permissions define the access applicable to the custom roles created within the Appsmith instance. The users assigned to this permission group can manage one or more custom roles based on permissions assigned. The table below showcases the permissions available, their cascading impact, and applicability:

| Permission | Cascades |  Impact on Resources |
|------------|-------------|--------------|
| Edit | View, Associate Role | Specified Custom Role| 
| Delete |  View, Associate Role | Specified Custom Role| 
| View | Associate Role | Specified Custom Role | 
| Associate Role|  - | Specified Custom Role| 

### Others

This category oversees access privileges for workspaces and audit logs within the Appsmith instance. The permissions available are:

#### Workspaces

Permissions under this allow users to manage permissions across workspaces in the Appsmith instance.

| Permission | Cascades |  Impact on Resources |
|------------|-------------|--------------|
| Create | - | Allows creating new workspaces in the Instance.| 

#### Workspace

Permissions under this allow users to manage workspaces in the Appsmith instance.

| Permission | Cascades |  Impact on Resources |
|------------|-------------|--------------|
| Edit | - | Allows editing the specified workspace. | 
| Delete |  - | Allows editing the specified workspace.| 

### Audit logs

Permissions under this allow users to monitor the Appsmith instance by auditing logs.

| Permission | Cascades |  Impact on Resources |
|------------|-------------|--------------|
| View | - | Allows monitoring instance logs. | 
