---
description: >-
  Invite users to a workspace or an application in Appsmith.
---


# Invite Users

Appsmith allows you to share your application with the end user or with a team member for collaboration. There are multiple ways to share your application in Appsmith. You can either share your workspace or share a specific application.

## Default roles

In Appsmith, there are built-in roles that you can assign to a user for accessing the applications: 

- **Administrator**
- **Developer** 
- **App Viewer** 

These roles are fixed and cannot be changed by users. Each role comes with specific permissions and access levels.

## Share workspace

When you share a workspace with a user, they can access all the applications in that workspace. Follow the steps below to share a workspace:
1. Go to the homepage and navigate to the workspace you want to share.
2. Click the **Share** button from the right corner.
3. In the **Invite users** modal, enter the email of the user and select an appropriate role for them.
3. Click **Invite**.

<ZoomImage
  src="/img/Share_workspace.png" 
  alt="Display images on table row selection"
  caption="Sharing a workspace"
/>

:::info
In Appsmith's community edition, you can only share your workspace, i.e, when you invite a user from the application, the entire workspace is shared with the assigned role.
:::

### Default roles for workspace

The table below shows the permissions available for each role when you share a workspace:

|Role           |	<div style= {{width:"150px"}}> Create App </div> | <div style= {{width:"150px"}}> Edit App </div>  |<div style= {{width:"150px"}}> View App </div> |<div style= {{width:"150px"}}> Delete App </div>| <div style= {{width:"150px"}}> Make App Public </div> | <div style= {{width:"150px"}}> Invite Users </div>   | <div style= {{width:"150px"}}> Manage Users </div>  |
|---------------|-----------------------------------------------|--------------------------------------------|------------------------------------------|-------------------------------------------|-------------------------------------------------------|------------------------------------------------------|-----------------------------------------------------|
| **Administrator** |Create applications, pages and queries inside the workspace in any environment |Edit any application, page and query inside the workspace in any environment |View any application, page and query inside the workspace in any environment |Delete any application, page and query inside the workspace in any environment |Make any application inside the workspace public |Invite other users to the workspace | Manage users in a workspace |
|**Developer**      | Create applications, pages and queries inside the workspace in any environment |Edit any application, page and query inside the workspace in any environment |View any application, page and query inside the workspace in any environment |Delete any application, page and query inside the workspace in any environment |	-             |Invite other users to the workspace |	-             |
|**App Viewer**     |	-             |-             |View any application, page & execute actions inside the workspace in production environment (Cannot see queries and datasources) |-|           -     |Invite other users to the workspace only as **App Viewer** |	-|

<div className="tag-wrapper">

## Share application

<Tags
  tags={[
    {
      name: "Business",
      link: "https://www.appsmith.com/pricing",
      additionalClass: "business",
    }
  ]}
/>
</div>

<!-- vale on -->

If you want the user to have access to a specific application in a workspace, follow the steps below:

1. Open the app you want to share and click **Share** at the top right corner.
2. Enter the email of the user and select an appropriate role for them.
3. Click **Invite**.

<ZoomImage
  src="/img/share_application.png" 
  alt="Display images on table row selection"
  caption="Inviting a user to an application"
/>

### Default roles for application

The table below shows the permissions available for each role when you share an application:

|Role           |	<div style= {{width:"150px"}}> Create </div> | <div style= {{width:"150px"}}> Edit </div>  |<div style= {{width:"150px"}}> View </div> |<div style= {{width:"150px"}}> Delete </div>| <div style= {{width:"150px"}}> Make App Public </div> | <div style= {{width:"150px"}}> Invite Users </div>   | <div style= {{width:"150px"}}> Manage Users </div>  |
|---------------|-----------------------------------------------|--------------------------------------------|------------------------------------------|-------------------------------------------|-------------------------------------------------------|------------------------------------------------------|-----------------------------------------------------|
|**Developer**      | Create pages, datasources and queries inside the app in any environment |Edit pages, datasources and queries inside the app in any environment |View the app, its pages, datasources and queries in any environment |Delete the app, its pages, datasources and queries in any environment |-|Invite other users with an equivalent or a lower role |	-       |
|**App Viewer**     |	-              |     -          |View the app and execute actions in production environment (Cannot see queries,datasources)|-|           -     |Invite users only as **App Viewer** |	-|

## Make application public

You can make your applications public and share them with users who are not part of your workspace. These external users do not need to log in to Appsmith to access the shared applications. They will only be able to see the production environment of your deployed application.

To make an application public, you can click on the **Share** button within the application and turn on the **Make application public** switch. Once enabled, click **Copy Application URL** to copy the application link and share the application with your users.

:::info
Only users with Administrator roles for a workspace can make applications public.
:::

## Further reading

- [Granular Access Control](/advanced-concepts/granular-access-control)
