---
description: >-
  Learn who can invite users to workspaces and apps in Appsmith, what each default role can share, and how invitations affect your instance.
title: Invite and Share Permissions
hide_title: true
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Invite and Share Permissions</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Every default workspace and application role in Appsmith can invite other people. This includes **App Viewer**. Each role can invite people only with the same role or a lower one. This page explains who can invite whom, how this appears in the role editor, and what an invitation does.

:::info
This behavior is intentional. It lets people share an app with their colleagues without waiting for an administrator. If some users must not invite others, give them access through a [custom role](#restrict-who-can-invite) instead of a default role.
:::

## Who can invite whom

A user can invite someone only with a role that their own role is allowed to assign. In the **Share** dialog, the role list shows only the roles you are allowed to assign.

### Workspace roles

When you share a workspace, these rules apply:

| Your role in the workspace | You can invite people as | You can change a member's role or remove a member |
| --- | --- | --- |
| **Administrator** | Administrator, Developer, or App Viewer | Yes |
| **Developer** | Developer or App Viewer | No |
| **App Viewer** | App Viewer | No |

Only workspace Administrators can change a member's role or remove a member. Appsmith also blocks the removal of the last Administrator of a workspace.

### Application roles

Sharing a single app is available on Business and Enterprise plans. When you share an app, these rules apply:

| Your role | You can share the app as |
| --- | --- |
| **Administrator** or **Developer** of the workspace that contains the app | Developer or App Viewer of the app |
| **App Viewer** of the workspace that contains the app | App Viewer of the app |
| **Developer** of the app | Developer or App Viewer of the app |
| **App Viewer** of the app | App Viewer of the app |

An App Viewer can't give anyone edit access, and can't invite anyone as an Administrator.

## How this appears in the role editor

In the role editor, the right to invite is the **Associate Role** permission on the **Groups & Roles** tab. **Associate Role** lets the holder assign a role to users and groups. Each default role has **Associate Role** on itself and on the default roles below it.

To see this for a workspace:

1. Go to **Admin Settings** > **Roles**.
2. Turn on **Default Roles**.
3. Open **App Viewer - _workspace name_**.
4. On the **Permissions** tab, open **Groups & Roles** and expand **Roles** > **Default Roles**.

**Associate Role** is selected for **App Viewer - _workspace name_**. It's also selected for **App Viewer - _app name_** for each app in that workspace that has been shared at the app level. The **Developer** and **Administrator** roles show the same pattern, with more roles selected.

Default roles can't be edited, so you can't clear **Associate Role** on a default role.

:::note
**Associate Role** is a different permission from **Invite User**. **Invite User** controls who can add users to groups on the **Groups** page in Admin Settings. It doesn't control the **Share** button. For more information, see [Permissions](/advanced-concepts/granular-access-control/reference/permissions#associate-role-permission).
:::

## Who sees the Share button

The **Share** button on a workspace appears only for users who hold a default role on that workspace, either directly or through a group. Users who get access only through custom roles don't see it.

In an app, the **Share** button can appear for anyone who can open the app. The invite field in the **Share** dialog appears only for users who hold a default role on the app or its workspace. Other users see only the options they have permission for, such as copying the app link.

The **Share** button isn't the security control. When someone sends an invitation, Appsmith checks that they have **Associate Role** on the role they're inviting with. Clearing **Associate Role** is what stops a user from inviting. For more information, see [Restrict who can invite](#restrict-who-can-invite).

## What an invitation does

When someone sends an invitation, Appsmith does one of the following:

* **The email address already belongs to a user on the instance**: Appsmith adds the selected role to that user and sends an email.
* **The email address is new to the instance**: Appsmith creates a user account for that email address, adds the selected role, and sends an invitation email. The person then completes sign-up.

An invited person can complete sign-up even when sign-up is turned off for the instance. The same applies to the setting that limits sign-up to certain email domains. These settings stop people from creating accounts on their own. They don't stop invitations. On a seat-based license, sign-up still needs a free seat. The invited person signs in with the methods that are set up for the instance, such as SSO or form login. For more information, see [Authentication](/getting-started/setup/instance-configuration/authentication).

This means that an App Viewer can bring a new person onto the instance, with App Viewer access to the shared workspace or app.

## Invite a group

You can share a workspace or an app with a group instead of individual users. For a group to appear in the **Share** dialog, you need **View** permission on that group. Grant it on the **Groups & Roles** tab of a custom role, under **Groups**.

**View** permission on a group also lets the holder open that group in Admin Settings and see its members. Give it only to the people who need to share with that group.

## Restrict who can invite

You can't remove the invite ability from a default role. To give people access without the ability to invite:

1. Create a custom role that grants only the access they need. On the **Groups & Roles** tab, leave **Associate Role** and **View** on roles cleared.
2. Assign the custom role to the users, or to a group that contains them.
3. Remove their default workspace and application roles, including any that come from a group.

Appsmith combines the permissions of every role a user holds. If a user still holds any default role on the workspace or app, or any role with **Associate Role** on a default role, that user can still invite. For step-by-step instructions, see [Restrict Who Can Invite Users](/advanced-concepts/granular-access-control/how-to-guides/restrict-user-invites).

:::caution
If someone later shares the workspace or app with that user through the **Share** button, the user gets a default role again and can invite others. To keep access controlled, add new users to the group that holds the custom role. Don't share with them directly.
:::

### Community Edition

Community Edition has the same three workspace roles, with the same invite rules. Community Edition doesn't support custom roles, so you can't stop an App Viewer from inviting other App Viewers. To limit who can reach an app, keep it in a workspace with only the members who need it.

## See also

* [Restrict Who Can Invite Users](/advanced-concepts/granular-access-control/how-to-guides/restrict-user-invites)
* [Default Roles](/advanced-concepts/granular-access-control/reference/default-roles)
* [Permissions](/advanced-concepts/granular-access-control/reference/permissions)
* [View role assignees](/advanced-concepts/granular-access-control/roles#view-role-assignees)
