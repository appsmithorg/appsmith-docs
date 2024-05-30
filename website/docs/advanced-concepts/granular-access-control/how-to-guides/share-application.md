---
description: >-
  Share a specific application with users.
title: Share Application
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Share Application</h1>

<Tags
  tags={[
    { name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
  ]}
/>

</div>

<!-- vale on -->

When you want to grant access to a specific application within a workspace, you can invite users to that application using the application invite modal present within the application. This page provides step-by-step instructions to share an application.

### Prerequisites

- You have a self-hosted Appsmith Commercial Edition installation. For more information, see the [installation guides](/getting-started/setup/installation-guides).
- You have permission to invite users.
- You are using the default roles. If you are not using the default roles, ensure custom roles are set up, or you have the permission to create custom roles.

### Invite users to application

Follow these steps to invite a user to an application:

1. Open the application within the workspace that you want to share.
2. Click the **Share** button located in the top right corner of the application. This will open an *Application Invite* modal as shown below:
   
     <ZoomImage src="/img/gac-share-application.png" alt="Share Application with users" caption="Share Application with users"/>

3. Enter the email address of the user you want to invite.
4. You may choose to invite a user and provide preconfigured access by assigning a [default role](/advanced-concepts/granular-access-control/reference/default-roles), or you may choose to create a [custom role](/advanced-concepts/granular-access-control/reference/custom-roles).
     - To assign preconfigured access, choose the default role of a Developer or an App Viewer in the **Select a role** dropdown, and click the **Invite** button to send the invitation to the user.
     - To assign a custom role, click the **Assign Custom Role** button. This takes you to a Group configuration screen, where you may update the existing groups to add the user or create a new group, add the user, and assign appropriate roles to the group.

### Troubleshooting

If you face issues, contact the support team using the chat widget at the bottom right of this page.
