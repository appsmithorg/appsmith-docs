# Audit logs

Audit logs are a vital way to keep records of user activity related to app changes, platform settings, and sensitive data. With access to this information, you can ensure that you're able to easily follow up and address any unexpected or undesirable events.

{Screenshot of audit logs page}

---

## Logged events

(Should we include the technical names of the events? Or maybe one example event per type? i.e. `datasource.created` etc.)

There are several types of events tracked in Appsmith's audit logs:

- App-specific activity
    - Changes to pages/widgets (`page.updated`)
    - Datasource configuration(`datasource.updated`)
    - Running queries(`query.executed`)
    - Deleting apps

- Admin settings changes
    - Who changed certain settings (`instance_setting.updated`)
    - Changes/new groups or roles (`group.updated`)

- Sensitive information access
    - Which users have accessed user data
    - Which users have accessed billing data

- User sign-up and logins
    - New users
    - Unsuccessful logins

## Event details

Each logged item has a number of data points that describe that event, as well as any related apps, datasources, queries, and workspaces.

| Data | Description | Details |
|------|-------------|---------|
| event | Each action performed on Appsmith app(edit or view mode) is classified as event |  |
| timestamp | Displays the date and time of a logged event. |  |
| user | Displays the user who made performed this event | `id`, `email`, `name`, `ipAddress` |
| resource | The type of resource on which this event was performed (Query, Datasource, etc.) | `id`, `type`, `name` |
| app | Application on which the action is performed. | `id`, `name`, `git` {`branch`, `default`} |
| workspace | Workspace on which the action is performed. | `id`, `name` |
| metadata | Platform details, such as the Appsmith version. | `ipAddress`, `appsmithVersion`, `createdAt` |

Below is an example of a log item:

```JSON
{
    "event": "datasource.created",
    "timestamp": "2022-06-29T08:36:33.507+00:00",
    "user": {
        "id": "62bc0f11545c4c00b19d5c65",
        "email": "john@appsmith.com",
        "name": "John Doe",
        "ipAddress": "223.183.39.7"
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
        "ipAddress": "223.183.39.7",
        "appsmithVersion": "1.7.5",
        "createdAt": "2022-06-29T08:36:33.507+00:00"
    }
}
```

## Searching audit logs

You can find audit logs by navigating to your Admin Settings page, and finding the **Audit Logs** tab under the **Others** heading. From here, you can see all the events that have been tracked under your organization's account, along with the user, date, and time that the event was logged. Click the arrow next to any event to expand it and see its full set of details in JSON form.

{Video demo: exploration of logs and filtering}

There are a number of filters available to help you quickly search for a subset of your logs. You can filter your logs by:
- User
- Event
- ResourceId
- Date Range

From the JSON area of any event, you may also click any of the values to search for other instances of that value.

## Conclusion