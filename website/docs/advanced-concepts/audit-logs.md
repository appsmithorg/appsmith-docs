---
sidebar_position: 6
description: Audit logs allow you to keep records of everything that happens on your instance.
title: Audit Logs
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1> Audit Logs </h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>
</div>

<!-- vale on -->

The audit log is a paper trail of all notable activities on an Appsmith instance. It automatically captures and displays events by recording what activity was performed, who performed it, and when it occurred. With this information, you can ensure that you're able to follow up and address any unexpected or undesirable events.

There are several kinds of events that are logged:

- App-specific activity
  - Changes to pages
  - Datasource configuration
  - Query configuration and execution
  - Deleting apps
  - Importing and exporting pages or resources from a file
- Changes to Administrator settings
  - Instance configuration changes
- User sign-up and login activity

To access the audit logs, on the homepage, go to **Admin Settings > Others > Audit logs**. Within this tab, you can see a list of events that have been tracked under your organization's account. To view the details of a specific event, click on the event description to expand the event and display a complete set of details in JSON format.

<ZoomImage
  src="/img/audit-logs.png" 
  alt="Audit logs"
  caption="Audit logs"
/>

## Log contents

Each logged item has several data points that describe that event, including references to related apps, datasources, queries, and workspaces. This data is served in JSON format.

| Data          | Description                                                                      | Details                                   |
| ------------- | -------------------------------------------------------------------------------- | ----------------------------------------- |
| **event**     | Each action performed on Appsmith app (edit or view mode) is classified as event |                                           |
| **timestamp** | Displays the date and time of a logged event.                                    |                                           |
| **user**      | Displays the user who made performed this event                                  | `id`, `email`, `name`                     |
| **resource**  | The type of resource on which this event was performed (Query, Datasource, etc.) | `id`, `type`, `name`                      |
| **app**       | Application on which the action is performed.                                    | `id`, `name`, `git` {`branch`, `default`} |
| **workspace** | Workspace on which the action is performed.                                      | `id`, `name`                              |
| **page**      | Page on which the action is performed. Set for page-scoped events, such as partial imports and exports. | `id`, `name`                              |
| **partialResourceCounts** | Number of resources included in a partial import or export. Set only on `application.partial_exported` and `application.partial_imported` events. | `actionCount`, `actionCollectionCount`, `datasourceCount`, `jsLibCount`, `hasWidgets` |
| **metadata**  | Platform details, such as the Appsmith version.                                  | `appsmithVersion`, `createdAt`            |

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

A partial export or import record also includes the page and the number of resources in the file. In `partialResourceCounts`, `actionCount` is the number of queries, `actionCollectionCount` is the number of JS objects, `jsLibCount` is the number of JS libraries, and `hasWidgets` is `true` when the file includes widgets. For example:

```JSON
{
    "event": "application.partial_exported",
    "resource": {
        "id": "<application-id>",
        "type": "Application",
        "name": "Sample App"
    },
    "workspace": {
        "id": "<workspace-id>",
        "name": "Sample Workspace"
    },
    "page": {
        "id": "<page-id>",
        "name": "Page1"
    },
    "partialResourceCounts": {
        "actionCount": 3,
        "actionCollectionCount": 0,
        "datasourceCount": 1,
        "jsLibCount": 0,
        "hasWidgets": true
    }
}
```

In the audit log list, these records show as **partially exported** or **partially imported**, followed by the page, the workspace, and the resources that were included. Resource types with a count of zero are left out. For example: `from Page1 in Sample Workspace · 3 queries, 1 datasource, widgets`.

## Tracked events

The following table shows the events that appear in Appsmith's audit logs. In any given log record, you can find the event's name on the record's `event` property.

| Event Name                   | Description                                                                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **workspace.created**        | Logged when a new workspace is created.                                                                                                                            |
| **workspace.updated**        | Logged when the details of an existing workspace are changed.                                                                                                      |
| **workspace.deleted**        | Logged when a workspace is deleted.                                                                                                                                |
| **application.created**      | Logged when a new application is created.                                                                                                                          |
| **application.updated**      | Logged when a user edits an existing application.                                                                                                                  |
| **application.deleted**      | Logged when an application is deleted.                                                                                                                             |
| **application.imported**     | Logged when a new application is created via importing with Git or JSON.                                                                                           |
| **application.exported**     | Logged when an existing application is exported via Git or JSON.                                                                                                   |
| **application.partial_exported** | Logged when a user exports selected resources (widgets, queries, JS objects, datasources, or JS libraries) from a page to a JSON file. A partial export logs this event instead of `application.exported`. |
| **application.partial_imported** | Logged when a user imports resources from a partial export JSON file into a page. Only imports from an uploaded file log this event. |
| **application.cloned**       | Logged when a new application is created via cloning.                                                                                                              |
| **application.forked**       | Logged when an existing application is forked.                                                                                                                     |
| **application.deployed**     | Logged when a new version of an application is deployed/published.                                                                                                 |
| **page.created**             | Logged when a new page is created.                                                                                                                                 |
| **page.viewed**              | Logged when a user, including any anonymous public users, views a page.                                                                                            |
| **page.updated**             | Logged when a user edits a page.                                                                                                                                   |
| **page.deleted**             | Logged when a page is deleted.                                                                                                                                     |
| **datasource.created**       | Logged when a new datasource is created. Also creates a separate event per environment.                                                                            |
| **datasource.updated**       | Logged when a user edits an existing datasource's configuration. Creates a separate event per environment.                                                         |
| **datasource.deleted**       | Logged when a datasource is deleted. Only logs a single event for all environments.                                                                                |
| **query.created**            | Logged when a new query is created.                                                                                                                                |
| **query.updated**            | Logged when a user edits an existing query's configuration.                                                                                                        |
| **query.deleted**            | Logged when a query is deleted.                                                                                                                                    |
| **query.executed**           | Logged when an existing query runs. This applies both in Edit and View modes. The execution parameters of the query are included in the log up to a limit of 5 MB. |
| **user.logged_in**           | Logged when a user signs in.                                                                                                                                       |
| **user.logged_out**          | Logged when a user signs out.                                                                                                                                      |
| **user.invited**             | Logged when someone invites another user to the app or workspace.                                                                                                  |
| **user.signed_up**           | Logged when a new user logs in for the first time.                                                                                                                 |
| **instance_setting.updated** | Logged when a change is made to the Appsmith instance's configuration.                                                                                             |
| **role.created**             | Logged when a new role is created in granular access controls.                                                                                                     |
| **role.updated**             | Logged when a role configuration is updated in granular access controls.                                                                                           |
| **role.deleted**             | Logged when a role is deleted from granular access controls.                                                                                                       |
| **role.assigned_users**      | Logged when a role is assigned to users.                                                                                                                           |
| **role.unassigned_users**    | Logged when a role is unassigned from users.                                                                                                                       |
| **role.assigned_groups**     | Logged when a role is assigned to user groups.                                                                                                                     |
| **role.unassigned_groups**   | Logged when a role is unassigned from user groups.                                                                                                                 |
| **group.created**            | Logged when new group is created in granular access controls.                                                                                                      |
| **group.updated**            | Logged when a group's information is updated in granular access controls.                                                                                          |
| **group.deleted**            | Logged when a group is deleted from granular access controls.                                                                                                      |
| **group.invite_users**       | Logged when users are added to a user group.                                                                                                                       |
| **group.remove_users**       | Logged when users are removed from a user group.                                                                                                                   |
| **approved_analytics_policy.updated** | Logged when an administrator changes the [approved analytics](/getting-started/setup/instance-configuration/approved-analytics) switch or the list of approved measurement IDs. |
| **approved_analytics_settings.updated** | Logged when an app author changes an app's or a page's [approved analytics](/getting-started/setup/instance-configuration/approved-analytics) settings. |

## Export logs

You can export audit logs from the Appsmith instance to your system as a JSON file. To export logs as a JSON file, go to **Admin Settings > Others > Audit logs**, click the **⋮** icon at the top right corner and click **Download**.
