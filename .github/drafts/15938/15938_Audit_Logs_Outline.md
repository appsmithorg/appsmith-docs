# Audit logs

The audit log is a report of all activities that occur on an Appsmith instance. It will automatically capture and display events by recording who performed an activity, when it occurred, and where it was performed. With this information, you can ensure that you're able to easily follow up and address any unexpected or undesirable events.

---

{Screenshot of audit logs page}

You can find audit logs by navigating to your Admin Settings page, and finding the **Audit Logs** tab under the **Others** heading. From here, you can see all the events that have been tracked under your organization's account, along with the user, date, and time that the event was logged. Click the arrow next to any event to expand it and see its full set of details in JSON form.

## Logged events

There are several types of events tracked in Appsmith's audit logs:

- App-specific activity
    - Changes to pages/widgets
    - Datasource configuration
    - Running queries
    - Deleting apps

- Admin settings changes
    - Who changed certain settings

- User sign-up and login activity

| Event Name | Description |
|------------|-------------|
| workspace.created | Logged when a new workspace is created. |
| workspace.updated | Logged when the details of an existing workspace are changed. |
| workspace.deleted | Logged when a workspace is deleted. |
| application.created | Logged when a new application is created. |
| application.updated | Logged when a user edits an existing application. |
| application.deleted | Logged when an application is deleted. |
| application.imported | Logged when a new application is created via importing with Git or JSON. |
| application.exported | Logged when an existing application is exported via Git or JSON. |
| application.cloned | Logged when a new application is created via cloning. |
| application.forked | Logged when an existing application is forked. |
| application.deployed | Logged when a new version of an application is deployed/published. |
| page.created | Logged when a new page is created. |
| page.viewed | Logged when a user, including any anonymous public users, views a page. |
| page.updated | Logged when a user edits a page. |
| page.deleted | Logged when a page is deleted. |
| datasource.created | Logged when a new datasource is created. |
| datasource.updated | Logged when a user edits an existing datasource's configuration. |
| datasource.deleted | Logged when a datasource is deleted. |
| query.created | Logged when a new query is created. |
| query.updated | Logged when a user edits an existing query's configuration. |
| query.deleted | Logged when a query is deleted. |
| query.executed | Logged when an existing query runs. |
| user.logged_in | Logged when a user logs into the platform. |
| user.logged_out | Logged when a user logs out of the platform. |
| user.invited | Logged when someone sends an invite to the platform. |
| user.signed_up | Logged when a new user logs in for the first time. |
| instance_setting.updated | Logged when a change is made to the platform instance's configuration. |

## Audit log format

Each logged item has a number of data points that describe that event, as well as any related apps, datasources, queries, and workspaces. This data is organized into JSON format.

| Data | Description | Details |
|------|-------------|---------|
| event | Each action performed on Appsmith app (edit or view mode) is classified as event |  |
| timestamp | Displays the date and time of a logged event. |  |
| user | Displays the user who made performed this event | `id`, `email`, `name` |
| resource | The type of resource on which this event was performed (Query, Datasource, etc.) | `id`, `type`, `name` |
| app | Application on which the action is performed. | `id`, `name`, `git` {`branch`, `default`} |
| workspace | Workspace on which the action is performed. | `id`, `name` |
| metadata | Platform details, such as the Appsmith version. | `appsmithVersion`, `createdAt` |

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

## Searching audit logs

{Video demo: exploration of logs and filtering}

There are a number of filters available to help you quickly search for a subset of your logs. You can filter your logs by:
- User: To get a trace of activities performed by a user, filter by their email address.
- Event: Filter events by their name; for example, to find all logs related to query execution, filter by the `query.executed` event.
- ResourceId: A resourceID identifies each entity on your Appsmith instance, be it a workspace, application, page, datasource, query or JSObject.
- Date Range: Narrow down logs by searching for only a certain range of time.

From the JSON area of any event, you may also click any of the values to search for other instances of that value.