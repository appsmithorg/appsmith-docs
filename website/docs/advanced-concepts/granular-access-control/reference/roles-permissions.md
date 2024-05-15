---
description: >-
  Permissions in Granular Access Control in Appsmith
title: Role Permissions
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Role Permissions</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Permissions in Appsmith govern the level of access and actions users can perform on specific resources within the platform. To assign appropriate permission to resources so that a user can efficiently complete their job, understanding the permissions, their interdependencies and cascading impact is paramount. This page provides insights into the array of permissions available in Appsmith, their interdependencies and their applicability across different resources.

## Resources

Resources refer to distinct components of an application that users can access or modify. These include individual pages or queries within the application, specific datasources or environments, groups and roles, as well as workspaces. In Appsmith, access to these resources is categorized as follows:


### Create

The **Create** permission defines which resources are eligible for creation, and once mapped allows users to create new resources in Appsmith.


  - first level hierarchy - Permissions at this level cascade down to all sub-resources within each category.
  - second level hierarchy - Permissions at this level apply only to specific sub-resources within each category.

  A table that shows how the permission hierarchy maps to each resource:

| Permission | Applications | Datasources | Environments | Workflows | Roles |
|------------|--------------|-------------|--------------|-----------|-------|
| First Level Hierarchy | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| Second Level Hierarchy | - | - | - | - | - |


#### Hierarchy

| Level               | Applications | Datasources | Environments | Workflows | Roles |
|---------------------|--------------|-------------|--------------|-----------|-------|
| **First Level**     | ✔️            | ✔️          | ✔️            | ✔️         | ✔️     |
| **Second Level**    | -            | -           | -            | -         | -     |


#### Cascading impact
Permissions at the first level hierarchy cascade down to all sub-resources within each category, while permissions at the second level hierarchy apply only to specific sub-resources within each category.

#### Interdependency
Describe any dependencies or relationships between this permission and others.

### Edit

- Permissions related to editing existing resources within Appsmith.
- Define the 
  - first level hierarchy - Permissions at this level cascade down to all sub-resources within each category.
  - second level hierarchy - Permissions at this level apply only to specific sub-resources within each category.

| Permission | Applications | Datasources | Environments | Workflows | Roles |
|------------|--------------|-------------|--------------|-----------|-------|
| First Level Hierarchy | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| Second Level Hierarchy | - | - | - | - | - |

#### Cascading impact
Permissions at the first level hierarchy cascade down to all sub-resources within each category, while permissions at the second level hierarchy apply only to specific sub-resources within each category.

#### Interdependency
Describe any dependencies or relationships between this permission and others.

## Delete

- Permissions related to deleting existing resources within Appsmith.
- Define the 
  - first level hierarchy - Permissions at this level cascade down to all sub-resources within each category.
  - second level hierarchy - Permissions at this level apply only to specific sub-resources within each category.

| Permission | Applications | Datasources | Environments | Workflows | Roles |
|------------|--------------|-------------|--------------|-----------|-------|
| First Level Hierarchy | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| Second Level Hierarchy | - | - | - | - | - |

#### Cascading impact
Permissions at the first level hierarchy cascade down to all sub-resources within each category, while permissions at the second level hierarchy apply only to specific sub-resources within each category.

#### Interdependency
Describe any dependencies or relationships between this permission and others.

## View

- Permissions related to viewing resources within Appsmith.

#### Cascading impact
Permissions at the first level hierarchy cascade down to all sub-resources within each category, while permissions at the second level hierarchy apply only to specific sub-resources within each category.


#### Interdependency
Describe any dependencies or relationships between this permission and others.

## Execute

- Permissions related to executing actions or workflows within Appsmith.

#### Interdependency
Describe any dependencies or relationships between this permission and others.

## Invite User

- Permissions related to inviting users to collaborate within Appsmith.

#### Interdependency
Describe any dependencies or relationships between this permission and others.

## Remove User

- Permissions related to removing users from collaboration within Appsmith.

#### Interdependency
Describe any dependencies or relationships between this permission and others.

## Associate Role

- Permissions related to associating roles with users within Appsmith.

#### Interdependency
Describe any dependencies or relationships between this permission and others.

## Make Public

- Permissions related to making resources public within Appsmith.

#### Interdependency
Describe any dependencies or relationships between this permission and others.

## Export

- Permissions related to exporting resources within Appsmith.

#### Interdependency
Describe any dependencies or relationships between this permission and others.
