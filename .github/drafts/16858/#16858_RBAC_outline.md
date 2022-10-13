# Role-based Access Control (RBAC)
Role-based access control (RBAC) is a mechanism that restricts system access. It involves setting permissions and privileges to enable access to authorized users. Most large organizations use role-based access control to provide their employees with varying levels of access based on their roles and responsibilities.
In Appsmith, you can invite users, create groups and further define roles that consists of certain accessibility rules to control access to specific apps, resources etc. 

## Access Control in Appsmith
Explain the concepts around Access control in Appsmith.
Take an example and explain each concept in brief -
- User
- Groups
- Role (*Will have detailed explanation in a separate document.*)

# How to model Access Control in Appsmith
(We need at least 3 use cases to explain the functionality of Access control in Appsmith.)

## Invite users (Use Case-1)
Invite a user/group to a workspace or an app and who can invite(user/group). You can define the roles accordingly.
- Allow only selected user(s)/group(s) to a workspace.
- Define which workspaces are available for invitation.

## Share (Use Case-2)
This section will talk about the sharing apps/workspaces and the roles related to it.
- Allow sharing of apps or a workspace.
- Allow only selected user(s)/group(s) to be able to share applications/workspace.
- Define which application(s)/workspace would be available for sharing.

## Restrict access (Use Case-3)
- Allow only selected user(s)/group(s) to be able to access the resource - 
    - Query (read/write permissions)
    - API (Run/fetch)
    - Widgets
        - Events, styles, propeties
    - JSObjects
    - Datasources
- Allow only selected user (admin) to create workspace(s)
- Only selected users can create/deploy apps.
- For app end users, allow only view access.

# Conclusion (Not a heading)
Summarize the power of Access control in Appsmith referring to the explanations above.

