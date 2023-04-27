---
sidebar_position: 4
description: >-
  Allow external users to access applications built using Appsmith by inviting
  them to the workspace.
---

# Share Applications

Appsmith allows you to share your application with the end user or with a team member for collaboration. There are multiple ways to share your application in Appsmith. You can either share your workspace or share a specific application.

## Share workspace

When you share a workspace with a user, they can access all the applications in that workspace. Follow the steps below to share a workspace:
1. Go to the Workspace homepage and navigate to the workspace you want to share.
2. Click the **Share** button from the right corner.
3. In the invite modal, enter the email of the user and select an appropriate role for them.
3. Click **Invite**.

![](/img/Share_workspace.png)

## Share application

If you are using Appsmith's community edition, inviting a user to an application grants access to the entire workspace.

:::info
Granting access to specific applications in a workspace is only available for the [business edition](https://www.appsmith.com/pricing).
:::
If you want the user to just have access to a specific application in a workspace, follow the steps below:

1. Open the app you want to share and click **Share** at the top right corner.
2. Enter the email of the user and select an appropriate role for them.
3. Click **Invite**.

![](/img/share_application.png)


### Make application public

You can make your applications public and share them with users who are not part of your workspace. These external users do not need to log in to Appsmith to access the shared applications.

To make an application public, you can click on the **Share** button within the application and turn on the **Make application public** switch. Once enabled, a link to the application is displayed in the modal. To share the application, copy the link and share it with your users.

:::info
Only users with Administrator roles can make applications public.
:::

## Default roles

In Appsmith, there are predefined roles that you can assign to a user for accessing the applications. These roles are predefined and cannot be deleted by the user. There are three default roles:

- Administrator
- Developer 
- App Viewer 

The table below shows the permissions available for each role:

|Role           |	Create App        | Edit App         |	View App         | Make App Public   | Invite Users      | Manage Users        |
|---------------|-------------------|------------------|-------------------|-----------------  |-------------------|---------------------|
| Administrator |	:white_check_mark:|:white_check_mark:|:white_check_mark: |:white_check_mark: |:white_check_mark: |	:white_check_mark: |
|Developer      | :white_check_mark:|:white_check_mark:|:white_check_mark: |	:x:              |:white_check_mark: |	:x:                |
|App Viewer     |	:x:               |:x:               |:white_check_mark: |           :x:     |:white_check_mark: * (only as App Viewer role)|	:x:|

|Role|	Create/Edit App |	View App | Make App Public | Invite Users | Manage Users |
|----|------------------|----------|-----------------|--------------|--------------|
| Administrator |	:heavy_check_mark: |	:heavy_check_mark: |	:heavy_check_mark: |	:heavy_check_mark: |	:heavy_check_mark: |
|Developer |	:heavy_check_mark:|	:heavy_check_mark:|	:heavy_multiplication_x:|	:heavy_check_mark:|	:heavy_multiplication_x:|
|App Viewer|	:heavy_multiplication_x:|	:heavy_check_mark:|	:heavy_multiplication_x:|	:heavy_check_mark: (only as App Viewer role)|	:heavy_multiplication_x:|


## Further reading

- [Granular Access Control](/advanced-concepts/access-control/granular-access-control)