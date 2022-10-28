---
sidebar_position: 4
---

# Tracked Events

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
| **query.executed** | Logged when an existing query runs. This applies both in Edit and View modes. |
| **user.logged_in** | Logged when a user signs in. |
| **user.logged_out** | Logged when a user signs out. |
| **user.invited** | Logged when someone invites another user to the app or workspace. |
| **user.signed_up** | Logged when a new user logs in for the first time. |
| **instance_setting.updated** | Logged when a change is made to the Appsmith instance's configuration. |