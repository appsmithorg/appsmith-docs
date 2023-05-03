# Granular Access Control

Granular Access Control (GAC) enables you to specify which users or groups have access to different system components and what actions they can perform within that access. In Appsmith, you can use roles to define access to different parts of your Appsmith instance, such as Workspaces, Apps, Pages, and Datasources, and then assign these roles to individual users or groups of users.
:::info
Granular Access Control (GAC) is available only in the [business edition](https://www.appsmith.com/pricing) for self-hosted instances.
:::

Granular Access Control can be implemented in Appsmith using the following components:
- Users
- Groups 
- Roles
The image below gives an overview of how GAC works in Appsmith.

<figure>
  <img src="/img/GAC_overview.jpeg" style= {{width:"350px", height:"auto"}} alt="Add a new Role"/>
  <figcaption align = "center"><i>Granular Access Control Overview</i></figcaption>
</figure>


## Users


A user is an individual who can access the Appsmith instance, workspaces, or apps and perform authorized actions based on the roles assigned to them. Here are some key points to keep in mind:

- Users can be assigned multiple roles. The permissions a user receives are a combination of the permissions in all the roles assigned to them. For example, if a user has been assigned two roles - "Sales" and "Product," the permissions they receive are a combination of the permissions in both roles.
- Users can be added to groups, and roles can be assigned to that group. In addition, a user can be assigned a role directly, and the roles assigned to the groups they belong to also apply to them.
- To manage user roles and permissions, go to **Admin Settings** > **Access Control** > **Users**. It displays a list of all users with their roles and groups assigned to them. You can add a new user to your instance by clicking on **Add Users** at the top right corner of the screen.

<figure>
  <img src="/img/GAC_users.png" style= {{width:"auto", height:"auto"}} alt="Add a new Role"/>
  <figcaption align = "center"><i>Users' Window</i></figcaption>
</figure>



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

Permissions are rules that enable you to control access to a particular resource. However, assigning each permission to a specific user or group can be difficult. Instead, you can use roles to create a set of permissions and assign them to users or groups. This makes it easier to manage multiple permissions at once. Roles allow users to perform certain actions within the system based on the permissions associated with the role. For more information, see [How to configure Roles and Permissions?](/advanced-concepts/access-control/granular-access-control/roles)