---
description: This page shows you how to set up server-side filtering on a Select widget, which allows you to refine query results based on specific search terms.
---
# Setup Server-side Filtering on Select 

This page shows you how to set up server-side filtering on a Select widget, which allows you to refine query results based on specific search terms.

 <figure>
  <img src="/img/select-filter-1.gif" style= {{width:"700px", height:"auto"}} alt="Filter Table Data Using Datepicker"/>
  <figcaption align = "center"><i>Filter Table Data Using Datepicker</i></figcaption>
</figure>

## Configure query

Most databases and APIs support server-side filtering, although the methods of implementation can vary.

<dd>

*Example:* lets say you want to display names in a Select widget, and when a user searches for a specific term, you want to filter the displayed data accordingly.

 Configure the query to fetch data using [filterText](/reference/widgets/select#reference-properties) reference properties:

```sql
SELECT id, name FROM users 
WHERE name LIKE '%{{Select1.filterText}}%'
ORDER BY id LIMIT 10;
```

The above query retrieves data using `id` and `name` from the `users` database, with the results being filtered based on the text entered in the search tab of the Select widget.


</dd>

## Configure Select widget

Follow these steps to configure the Select widget to display fetched data, and implement server-side filtering:

1. Bind the filter query into the [**Source data**](/reference/widgets/select#source-data-arrayobject) property of the Select widget. Additionally, you can enable *JS* and add:

<dd>

*Example*: 

```js
{{fetchData.data}}
```

If the retrieved data is not in the desired format, you can use JavaScript to transform it before passing it to the widget, like:

```js
{{fetchData.data.map( user => ({label: user.name, value: user.name}))}}
```

</dd>

2. Enable the [**Server-side filtering**](/reference/widgets/select#server-side-filtering-boolean) property.


3. Set the Select widget's [**onFilterUpdate**](/reference/widgets/select#onfilterupdate) event to run the filter query.


### See also

* Video on [How To Setup Server-side Filtering For The Select Widget](https://www.youtube.com/watch?v=QDmTwRaLzHg).
* Sample app for [Server Side Filtering](https://app.appsmith.com/applications/61fbdf232cd3d95ca414b805/pages/6215d4742882606a1df5c695).

