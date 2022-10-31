---
sidebar_position: 1
---

# Filtering Audit Logs

Active workspaces generate thousands of log events. To help you quickly find the log you're looking for, Appsmith offers a number of search filters:

<figure>
<object data="https://www.youtube.com/embed/KIIHDeTJuaY" width='750px' height='400px'></object> 
<figcaption align = "center"><i>Use filters to find specific types of log records 
</i></figcaption>
</figure>

- User: Users are identified by their email address. To get a trace of activities performed by a certain user, filter by that address.
- Event: Logs are triggered by specific occurrences called Events, which each have a name. For example, to find all logs related to query execution, filter by the `query.executed` event. For a complete list of events and their names, see the [Tracked Events](tracked-events.md) page.
- ResourceId: A resourceID identifies each entity on your Appsmith instance, be it a workspace, app, page, datasource, query or JSObject.
- Date Range: Show logs from only a certain period of time.

From the JSON area of any event (accessed by clicking the log record), you can use the 🔍`event`, 🔍`email`, or 🔍`resource.id` buttons to add that value to the search filters.