---
title: Session 5
hide_title: false
---

<!-- vale off -->

## Getting Started 

**Ignore this if you were able to attend the previous Session.**

1. Sign up on this instance: [Training Instance](https://training.app.appsmith.com/user/signup)

2. Create a workspace of your own and name it as **\<Name\>-Training-Workspace**

3. Share access to your workspace to **Training Admin** as Administrator

4. From the workspace, click on the top-right **info icon**, then select **Chat with us**. This is Appsmith’s support assistant that can help you with any issues. Send a test message to familiarize yourself with the support feature.

## Implementing Granular Access Control and Programmatic Permissions

1. **Role-Based Access Control**

<dd>

* Every workspace comes with three default roles: **Administrator, Developer, and App Viewer**.  
* Custom **Groups** and **Roles** can also be created to define access more precisely.
* Here is an example of how to set Custom Groups and Roles:
  - Navigate to **Admin Settings → Groups** under **Access Control**.  
  - Click **Create Group**, name it **Agents**, and assign users to this group.  
  - Switch to the **Roles** tab and create a new role named **Agent Role**.  
  - Configure the role by assigning specific permissions.
*  Here are the main permissions you can assign to a Role
  - **Workspace Access** – Define who can access or modify workspace settings.  
  - **App Access** – Control view and edit rights for applications.  
  - **Page Access** – Restrict or grant access to specific pages within an app.  
  - **JSObjects & Queries** – Allow or deny execution/edit permissions on queries and JavaScript objects.  
  - **Datasource & Workflow Access** – Set permissions on which datasources and workflows users can interact with.  
* Below are some of the additional permission you can assign as well
  - Who can **create workspaces**.  
  - Who can **invite users** to a workspace or application.  
  - Who can **create Groups and Roles**.  
  - Who can **view Audit Logs** for tracking user activity.
* Finally after saving the changes made to your new Role, go back to the Group and assign this Role.
* You can assign the Role either to a Group of users or at a user level as well

</dd>

2. **Programmatic Permissions**

<dd>

* Ensure that **Programmatic Access Control** is enabled in **Admin Settings**.  
* Once enabled, you can dynamically manage user access within your application using logic based on user groups.  
* **Examples of Programmatic Access:**
  - **Show or hide UI elements** based on user groups:
  ```appsmith.user.groups.includes("<GROUP_NAME>")```
  *(User this to control visibility of tables, forms, buttons, etc dynamically)*
  - **Conditionally execute actions** based on user roles:
  ```jsx
  if (appsmith.user.groups.includes("Agents")) {
      submitData.run();
  } else {
      showAlert("You do not have permission to perform this action.");
  }
  ```

</dd>

## Utilizing Audit Logs for Monitoring and Compliance

1. **Viewing Audit Logs**

<dd>

* Navigate to **Admin Settings → Audit Logs**.  
  *(Ensure you have the necessary permissions granted by your instance administrator.)*
* Here you can view:
  - **User Activity:** Logins, sign-ups, and invitations.
  - **Application Modifications:** Changes in queries, deployments, and settings.
  - **Access Logs:** Identify who viewed, edited, modified the application or triggered some actions.

</dd>

2. **Filtering and Analyzing Logs**
<dd>

* Use filters such as **Events**, **Users**, or **Date Range** to refine log records.
* Example:
  - Find logs where a specific query was executed by multiple users within a selected time period.
* Click the **three-dot menu** (top-right) to **⬇ Download** the audit logs for further analysis or compliance review.

</dd>