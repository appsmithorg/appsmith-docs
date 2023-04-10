---
sidebar_position: 6
description: Audit logs allow you to keep records of everything that happens on your instance.
---

# Audit logs

The audit log is a paper trail of all notable activities on an Appsmith instance. It automatically captures and displays events by recording what activity was performed, who performed it, and when it occurred. With this information, you can ensure that you're able to follow up and address any unexpected or undesirable events.


:::info
Audit logs are only available on self-hosted, [**Business Edition**](https://www.appsmith.com/pricing) instances of Appsmith. They're retained in the database for a period of 1 year.
:::

![Access the Audit Logs from the Admin Settings page.](</img/as_auditlogs.png>)

You can find audit logs by navigating to your [Admin Settings](/getting-started/setup/instance-configuration/) page, and finding the **Audit Logs** tab under the **Others** heading. From here, you can see all the events that have been tracked under your organization's account, along with the user, date, and time that the event was logged. Click the arrow next to any event to expand it and see its complete set of details in JSON form.

There are several kinds of events that are logged:

- App-specific activity
    - Changes to pages
    - Datasource configuration
    - Query configuration and execution
    - Deleting apps

- Changes to Administrator settings
    - Instance configuration changes

- User sign-up and login activity

For an exhaustive list of events, see [Tracked Events](#tracked-events).

## Log contents

Each logged item has a number of data points that describe that event, including references to related apps, datasources, queries, and workspaces. This data is served in JSON format.

| Data | Description | Details |
|------|-------------|---------|
| **event** | Each action performed on Appsmith app (edit or view mode) is classified as event |  |
| **timestamp** | Displays the date and time of a logged event. |  |
| **user** | Displays the user who made performed this event | `id`, `email`, `name` |
| **resource** | The type of resource on which this event was performed (Query, Datasource, etc.) | `id`, `type`, `name` |
| **app** | Application on which the action is performed. | `id`, `name`, `git` {`branch`, `default`} |
| **workspace** | Workspace on which the action is performed. | `id`, `name` |
| **metadata** | Platform details, such as the Appsmith version. | `appsmithVersion`, `createdAt` |

Below is an example of a log item:

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

## Filtering audit logs

Active workspaces generate thousands of log events. To help you quickly find the log you're looking for, Appsmith offers a number of search filters:

<figure>
    <object data="https://www.youtube.com/embed/KIIHDeTJuaY" width='100%' height='400px'></object> 
    <figcaption align = "center"><i>Use filters to find specific types of log records 
    </i></figcaption>
</figure>

- User: Users are identified by their email. To see a certain user's activity, filter the logs by their email.
- Event: Logs are triggered by specific occurrences called Events, which each have a name. For example, to find all logs related to query execution, filter by the `query.executed` event. For a complete list of events and their names, see [Tracked Events](#tracked-events).
- ResourceId: A resourceID identifies each entity on your Appsmith instance, be it a workspace, app, page, datasource, query, or JSObject.
- Date Range: Show logs from only a certain period of time.

From the JSON area of any event (accessed by clicking the log record), you can use the 🔍`event`, 🔍`email`, or 🔍`resource.id` buttons to add that value to the search filters.

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
| **datasource.created** | Logged when a new datasource is created. |
| **datasource.updated** | Logged when a user edits an existing datasource's configuration. |
| **datasource.deleted** | Logged when a datasource is deleted. |
| **query.created** | Logged when a new query is created. |
| **query.updated** | Logged when a user edits an existing query's configuration. |
| **query.deleted** | Logged when a query is deleted. |
| **query.executed** | Logged when an existing query runs. This applies both in Edit and View modes. The execution parameters of the query are included in the log up to a limit of 5 MB.  |
| **user.logged_in** | Logged when a user signs in. |
| **user.logged_out** | Logged when a user signs out. |
| **[Deprecated] user.invited** | [This event is deprecated from `v1.9.16` in favour of `role.assigned`] Logged when someone invites another user to the app or workspace. |
| **user.signed_up** | Logged when a new user logs in for the first time. |
| **instance_setting.updated** | Logged when a change is made to the Appsmith instance's configuration. |

### Export
Users can export audit logs by either querying or exporting the `auditLog` collection from the Mongo DB on Appsmith instance. The user would need to have root access to the Appsmith deployment to perform this action.
