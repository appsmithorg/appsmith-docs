---
description: >-
  Learn how to invite users to collaborate on your Appsmith workspace or specific applications.
---

# Invite Users

Collaboration in a business environment often requires sharing applications or workspaces among team members who work on different projects simultaneously. Appsmith provides different methods to collaborate by inviting users to access applications and workspaces within the platform.


<ZoomImage
  src="/img/Share_workspace.png" 
  alt="Share workspace with users"
  caption="Share workspace with users"
/>

## Invite users to workspace

Inviting users to a workspace grants them access to all the applications and resources within it. This is ideal for teams working on different projects within the same workspace. To invite users, click the **Share** button located in the top right corner of your workspace on the dashboard. Select the desired role to provide appropriate access. Learn more about roles and its permissions in [Default Roles](/advanced-concepts/granular-access-control/reference/default-roles) and [Custom Roles](/advanced-concepts/granular-access-control/reference/custom-roles).


<!-- vale off -->

<div className="tag-wrapper">

## Invite users to application

<Tags
tags={[
  { name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

:::caution Note
Inviting a user from an application in the Community edition or when you are on a Free plan shares the entire workspace and all applications within it.
:::

Inviting users to a specific application grants them access only to that application within your workspace. This is useful when different teams or individuals are responsible for different applications. To invite users to an application, click the **Share** button in the top right corner of the application. Select default roles such as [Developer](/advanced-concepts/granular-access-control/reference/default-roles#developer-role-for-application) or [App Viewer](/advanced-concepts/granular-access-control/reference/default-roles#app-viewer-role-for-application). You can also assign custom roles by modifying group configurations. For more information, see [Custom Roles](/advanced-concepts/granular-access-control/reference/custom-roles).


## Make application public

You can share an application with external users by making it publicly available. This allows access to the application without requiring users to log into Appsmith. To do so, enable the **Make application public** switch in the **Invite User** modal. Copy the application URL and share it with external users. You can define who can make the application public when using granular access control by assigning _Make Public_ permission to users or user groups. For more information, see [Make Public Permission](/advanced-concepts/granular-access-control/reference/permissions#make-public-permission).
