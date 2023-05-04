# Granular Access Control

Granular Access Control (GAC) enables you to specify which users or groups have access to different system components and what actions they can perform within that access. In Appsmith, you can use roles to define access to different parts of your Appsmith instance, such as Workspaces, Apps, Pages, and Datasources, and then assign these roles to individual users or groups of users.

:::info
Granular Access Control (GAC) is available only in the [business edition](https://www.appsmith.com/pricing) for self-hosted instances.
:::

Following are the components of an Appsmith instance that help you implement GAC.

## Users

A user refers to an individual who has been granted access to the Appsmith platform and has a unique login associated with their account. Users can be assigned roles and determine what actions they're authorized to perform within the Appsmith platform. For example, a user with the "Admin" role may have access to all parts of the Appsmith platform and the ability to perform any action within it. In contrast, a user with the "Developer" role may only have access to certain parts of the platform and be limited to specific actions.

Users under *Admin Settings* > *Access Control* at the sidebar give you a list of all users with the roles and groups assigned to it on your Appsmith instance. You can add a new user to your instance by clicking on "**Add Users**" at the top right corner of the screen.

![](/img/Users_list.png)

If you want to add a user to a group, open the user from the user's list, and In the groups tab, add the user to a new group from the "**All Groups**" list. Similarly, If you want to assign a role to a user, open the user from the user's list, and in the roles tab, pick the desired roles from the "**All Roles**" list.

<VideoEmbed host="youtube" videoId="mJFlnd94Zd0" title="Add a user to group/Assign a role" caption="Add a user to group/Assign a role"/>

## Groups

A group is a collection of users. Groups let you specify roles for multiple users, making it easier to manage the permissions for those users. You can view the existing groups and the roles mapped to them or create a new group under Admin Settings.

To create a new group, open *Admin Settings* > *Access Control* > Groups and click the "**Add group**" button at the top right corner of the screen.

![](/img/Groups.png)

To view the existing groups and further look at the users and roles assigned to them - 
1. Click **Groups** under Access Control from the sidebar. You'll see a list of all the groups in your Appsmith instance 
2. Open the group you want to check. 
In the roles tab, within the selected group, you can also assign a new role to the group from the "**All Roles**" list.

![](/img/Existing_groups_info.gif)

## Roles 

Permissions are rules that enable you to control access to a particular resource. However, assigning each permission to a specific user or group can be difficult. Instead, you can use roles to create a set of permissions and assign them to users or groups. This makes it easier to manage multiple permissions at once. Roles allow users to perform certain actions within the system based on the permissions associated with the role. For more information, see [How to configure Roles and Permissions?](/advanced-concepts/granular-access-control/roles)