# Granular Access Control

Granular Access Control (GAC) enables you to specify which users or groups have access to different system components and what actions they can perform within that access. In Appsmith, you can use roles to define access to different parts of your Appsmith instance, such as workspaces, apps, pages, and datasources, and then assign these roles to individual users or groups of users.
:::info
Granular Access Control (GAC) is available only in the [business edition](https://www.appsmith.com/pricing) for self-hosted instances.
:::

Granular Access Control can be implemented in Appsmith using the following elements:
- [Users](#users)
- [Groups](#groups) 
- [Roles](/advanced-concepts/granular-access-control/roles)


<figure>
  <img src="/img/GAC_overview.jpeg" style= {{width:"700px", height:"auto"}} alt="Add a new Role"/>
  <figcaption align = "center"><i>Granular Access Control Overview</i></figcaption>
</figure>


## Users

A user can access the Appsmith instance, workspaces, apps or other resources and perform authorized actions based on the roles assigned to them. Here are some key points to keep in mind:

- Users can be assigned multiple roles. The permissions a user receives are a combination of the permissions in all the roles assigned to them. For example, if a user has been assigned two roles - "Sales" and "Product," the permissions they receive are a combination of the permissions in both roles.
- Users can be added to groups, and roles can be assigned to that group. In addition, a user can be assigned a role directly, and the roles assigned to the groups they belong to also apply to them.
- To manage user roles and permissions, go to **Admin Settings** > **Access Control** > **Users**. It displays a list of all users with their roles and groups assigned to them. You can add a new user to your instance by clicking on **Add Users** at the top right corner of the screen.

<figure>
  <img src="/img/GAC_users.png" style= {{width:"auto", height:"auto"}} alt="Add a new Role"/>
  <figcaption align = "center"><i>Users' Window</i></figcaption>
</figure>



## Groups

A group is a collection of users that allows you to assign roles to multiple users at once, simplifying permission management. Here are some important things to know about groups:

- You can assign multiple roles to a group, and users can belong to multiple groups.
- To create a new group, navigate to **Admin Settings** > **Access Control** > **Groups**, and click the **Add group** button in the upper-right corner of the screen.
- To manage groups and the roles assigned to them, go to **Admin Settings** > **Access Control** > **Groups**. This page shows all the groups, and clicking on one displays the users who are members of the group, along with the roles assigned to them.

When you share an application or workspace, you can invite a group and assign the desired role to it. This makes it easy to grant permissions to multiple users at once, and you can modify the group's roles to update the permissions for all its members simultaneously.


## Further reading

[Roles](/advanced-concepts/granular-access-control/roles)