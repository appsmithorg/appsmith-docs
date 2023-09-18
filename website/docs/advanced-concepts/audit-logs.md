---
sidebar_position: 6
description: Audit logs allow you to keep records of everything that happens on your instance.
---

# Audit Logs  

<Tags tags={["Business plan", "Enterprise plan", "Beta"]} />

<Tags
  tags={[
    { name: "Business plan", link: "https://www.appsmith.com/pricing" },
    { name: "Enterprise Plan", link: "https://www.appsmith.com/pricing" },
    { name: "Beta" }
  ]}
/>

The audit log is a paper trail of all notable activities on an Appsmith instance. It automatically captures and displays events by recording what activity was performed, who performed it, and when it occurred. With this information, you can ensure that you're able to follow up and address any unexpected or undesirable events. 

:::info
Audit logs are only available in Appsmith [**Enterprise Plan**](https://www.appsmith.com/pricing). They're retained in the database for 1 year.
:::

There are several kinds of events that are logged:

- App-specific activity
    - Changes to pages
    - Datasource configuration
    - Query configuration and execution
    - Deleting apps
- Changes to Administrator settings
    - Instance configuration changes
- User sign-up and login activity

To access the audit logs, on the homepage, go to **Admin Settings > Others > Audit logs**. Within this tab, you can see a list of events that have been tracked under your organization's account. To view the details of a specific event, click on the event description to expand the event and display a complete set of details in JSON format.

<figure>
  <img src="/img/audit-logs.png" style= {{width:"700px", height:"auto"}} alt="Audit logs"/>
  <figcaption align = "center"><i>Audit logs</i></figcaption>
</figure>


## Log contents

Each logged item has several data points that describe that event, including references to related apps, datasources, queries, and workspaces. This data is served in JSON format.

| Data | Description | Details |
|------|-------------|---------|
| **event** | Each action performed on Appsmith app (edit or view mode) is classified as event |  |
| **timestamp** | Displays the date and time of a logged event. |  |
| **user** | Displays the user who made performed this event | `id`, `email`, `name` |
| **resource** | The type of resource on which this event was performed (Query, Datasource, etc.) | `id`, `type`, `name` |
| **app** | Application on which the action is performed. | `id`, `name`, `git` {`branch`, `default`} |
| **workspace** | Workspace on which the action is performed. | `id`, `name` |
| **metadata** | Platform details, such as the Appsmith version. | `appsmithVersion`, `createdAt` |

An example of a log item is given below:

```JSON
{
    "event": "datasource.created",
    "timestamp": "2022-06-29T08:36:33.507+00:00",
    "user": {
        "id": "62bc0f11545c4c00b19d5c65",
        "email": "john@appsmith.com",
        "name": "John Doe"
    },
    "resource": {
        "id": "62bc0f11545c4c00b19d5c59",
        "type": "Datasource",
        "name": "Movies"
    },
    "app": {
        "id": "62bc0f11545c4c00b19d5c68",
        "name": "Standup App",
        "git": {
            "branch": "feat/new-ui",
            "default": "master"
        }
    },
    "workspace": {
        "id": "62bc0f11545c4c00b19d5c64",
        "name": "Appsmith Internal Apps"
    },
    "metadata": {
        "appsmithVersion": "1.7.5",
        "createdAt": "2022-06-29T08:36:33.507+00:00"
    }
}
```

## Tracked events

The following table shows the events that appear in Appsmith's audit logs. In any given log record, you can find the event's name on the record's `event` property.

| Event Name | Description |
|------------|-------------|
| **workspace.created** | Logged when a new workspace is created. |
| **workspace.updated** | Logged when the details of an existing workspace are changed. |
| **workspace.deleted** | Logged when a workspace is deleted. |
| **application.created** | Logged when a new application is created. |
| **application.updated** | Logged when a user edits an existing application. |
| **application.deleted** | Logged when an application is deleted. |
| **application.imported** | Logged when a new application is created via importing with Git or JSON. |
| **application.exported** | Logged when an existing application is exported via Git or JSON. |
| **application.cloned** | Logged when a new application is created via cloning. |
| **application.forked** | Logged when an existing application is forked. |
| **application.deployed** | Logged when a new version of an application is deployed/published. |
| **page.created** | Logged when a new page is created. |
| **page.viewed** | Logged when a user, including any anonymous public users, views a page. |
| **page.updated** | Logged when a user edits a page. |
| **page.deleted** | Logged when a page is deleted. |
| **datasource.created** | Logged when a new datasource is created. Also creates a separate event per environment. |
| **datasource.updated** | Logged when a user edits an existing datasource's configuration. Creates a separate event per environment. |
| **datasource.deleted** | Logged when a datasource is deleted. Only logs a single event for all environments. |
| **query.created** | Logged when a new query is created. |
| **query.updated** | Logged when a user edits an existing query's configuration. |
| **query.deleted** | Logged when a query is deleted. |
| **query.executed** | Logged when an existing query runs. This applies both in Edit and View modes. The execution parameters of the query are included in the log up to a limit of 5 MB.  |
| **user.logged_in** | Logged when a user signs in. |
| **user.logged_out** | Logged when a user signs out. |
| **user.invited** | Logged when someone invites another user to the app or workspace. |
| **user.signed_up** | Logged when a new user logs in for the first time. |
| **instance_setting.updated** | Logged when a change is made to the Appsmith instance's configuration. |
| **role.created** | Logged when a new role is created in granular access controls. |
| **role.updated** | Logged when a role configuration is updated in granular access controls. |
| **role.deleted** | Logged when a role is deleted from granular access controls. |
| **role.assigned_users** | Logged when a role is assigned to users. |
| **role.unassigned_users** | Logged when a role is unassigned from users. |
| **role.assigned_groups** | Logged when a role is assigned to user groups. |
| **role.unassigned_groups** | Logged when a role is unassigned from user groups. |
| **group.created** | Logged when new group is created in granular access controls. |
| **group.updated** | Logged when a group's information is updated in granular access controls. |
| **group.deleted** | Logged when a group is deleted from granular access controls. |
| **group.invite_users** | Logged when users are added to a user group. |
| **group.remove_users** | Logged when users are removed from a user group. |


## Export logs

You can export audit logs from the Appsmith instance to your system as a JSON file. To export logs as a JSON file, go to **Admin Settings > Others > Audit logs**, click the **⋮** icon at the top right corner and click **Download**.