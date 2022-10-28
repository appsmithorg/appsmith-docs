# Log Contents

Each logged item has a number of data points that describe that event, as well as any related apps, datasources, queries, and workspaces. This data is organized into JSON format.

| Data          | Description                                                                      | Details                                   |
| ------------- | -------------------------------------------------------------------------------- | ----------------------------------------- |
| **event**     | Each action performed on Appsmith app (edit or view mode) is classified as event |                                           |
| **timestamp** | Displays the date and time of a logged event.                                    |                                           |
| **user**      | Displays the user who made performed this event                                  | `id`, `email`, `name`                     |
| **resource**  | The type of resource on which this event was performed (Query, Datasource, etc.) | `id`, `type`, `name`                      |
| **app**       | Application on which the action is performed.                                    | `id`, `name`, `git` {`branch`, `default`} |
| **workspace** | Workspace on which the action is performed.                                      | `id`, `name`                              |
| **metadata**  | Platform details, such as the Appsmith version.                                  | `appsmithVersion`, `createdAt`            |

Below is an example of a log item:

```json
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
