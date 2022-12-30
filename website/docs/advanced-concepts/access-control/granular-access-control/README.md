
# Granular Access Control (GAC)

Granular Access Control (GAC), in simple terms, define who can have access to various components of a system and what can they do with that access. Access determines what a user is authorized to do in a system. In Appsmith, you can define the access to different parts of your Appsmith instance (Workspace, Apps, Pages, Datasource etc.) using roles and then map these roles to a user or a group.

Following are the components of an Appsmith instance that help you in implementing GAC.

## Users

## Groups

A group is a collection of users. Groups let you specify roles for multiple users, making it easier to manage the permissions for those users. You can view the exisiting groups and the roles mapped to them or create a new group under Admin Settings.

To create a new group, open Admin Setiings> Access Control> Groups and click "Add group" button at the top right corner of the screen.

To view the existing groups and further look at the users and roles assigned to it - 
1. Click **Groups** under Access Control from the sidebar. You'll see a list of all the groups in your Appsmith instance 
2. Open the group you want to check. 

## Roles 

Permissions are rules that let you define the access to a resource. However, it's difficult to map each permission to a user or a group. A Role is a collection of permissions that enables a user to manage multiple permissions rather than assigning individual permissions to users/groups. Check [Roles](/advanced-concepts/access-control/granular-access-control/roles) to learn more about Roles and permissions.