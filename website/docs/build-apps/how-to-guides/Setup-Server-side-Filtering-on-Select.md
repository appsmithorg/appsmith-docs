---
description: This page shows you how to set up server-side filtering on a Select widget, which allows you to refine query results based on specific search terms.
---
# Setup Server-side Filtering on Select 

This page shows you how to set up server-side filtering on the Select widget, which allows you to refine query results based on specific search terms.

If you are using the one-click binding feature to connect data, Appsmith automatically generates server-side filtering query for you. However, if you prefer to manually configure the server-side setup, you can do so by following the instructions in this guide.

 <figure>
  <img src="/img/select-filter.gif" style= {{width:"700px", height:"auto"}} alt="Server-side Filtering on Select"/>
  <figcaption align = "center"><i>Server-side Filtering on Select</i></figcaption>
</figure>

## Prerequisites

* A [Select](/reference/widgets/select) widget.
* A query that contains the data you want to filter.


## Configure query

Most databases and APIs support server-side filtering, although the methods of implementation can vary.

*Example:* lets say you want to display names in a Select widget, and when a user searches for a specific term, you want to filter the displayed data accordingly.

Configure the query to fetch data using [filterText](/reference/widgets/select#reference-properties) reference property. 

```sql
SELECT id, name FROM users 
WHERE name LIKE '%{{Select1.filterText}}%'
ORDER BY id LIMIT 10;
```

:::note
Please ensure that you turn off [prepared statements](/connect-data/concepts/how-to-use-prepared-statements) in the query editor for this configuration.
:::



The above query retrieves data using `id` and `name` from the `users` database. It filters results based on text entered in the Select widget's search box, using the `filterText` reference property.



## Configure Select widget

Follow these steps to configure the Select widget to display fetched data, and implement server-side filtering:

1. Connect the filter query to the [**Source data**](/reference/widgets/select#source-data-arrayobject) property of the Select widget, and set the **Label key** and **Value key** properties as required. For this example, set the Label key to `name` and the Value key to `id`.



2. Enable the [**Server-side filtering**](/reference/widgets/select#server-side-filtering-boolean) property.


3. Set the Select widget's [**onFilterUpdate**](/reference/widgets/select#onfilterupdate) event to run the filter query.

After completing these steps, you can search for specific terms using the Search widget's search box.

Check out this sample app for [Server Side Filtering](https://app.appsmith.com/applications/61fbdf232cd3d95ca414b805/pages/6215d4742882606a1df5c695).


### See also

Video on [How To Setup Server-side Filtering For The Select Widget](https://www.youtube.com/watch?v=QDmTwRaLzHg).
