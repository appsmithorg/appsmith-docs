# Displaying Data (Read)

This document presumes you have successfully [connected to a data source](/core-concepts/connecting-to-data-sources) and have a Query that fetches data.

## Displaying Data in a widget

Widget properties can be edited via the property pane which is opened using the top-right icon (Edit Widget Properties). Data from a [Query](/core-concepts/data-access-and-binding/querying-a-database) can be set in a widget property by referencing the name (unique identifier) of the Query.

:::tip
Appsmith is **Reactive** so the widgets are automatically updated whenever the data in the Query changes
:::

For example, you can bind the results of the Query as below

```javascript
{{ fetch_users.data.users }}
```

![](</img/bind-table_(2)_(4).gif>)

For more information about using [Table widgets](/reference/widgets/table) to show data from queries, see [display data in tables](/reference/widgets/table#display-data-in-tables).

:::note
Each widget property has a specific data type that it validates its value against. If the data type mismatches, it will throw an error. This can be fixed using javascript to transform the value of the property
:::

## Transforming Data

You can use Javascript inside to transform Query data when binding it to a property. Let us take an example of a Query that returns an array of objects that need to be populated in a [dropdown](/reference/widgets/select.md). Directly binding the data will lead to an error as shown below

A [select](/reference/widgets/select.md) needs an Array\<label, value> in its option field, so to connect this data to a dropdown, we need to transform the data in the [dropdown options property.](/reference/widgets/select#widget-properties)

**Example Query Data**

```javascript
[
  {
    "id": 1,
    "name": "test",
    "status": "APPROVED",
    "gender": "",
    "avatar": "https://robohash.org/sednecessitatibuset.png?size=100x100&set=set1",
    "email": "barty.crouch@gmail.com",
    "address": "St Petersberg #911 4th main",
    "createdAt": "2020-03-16T18:00:05.000Z",
    "updatedAt": "2020-08-12T17:29:31.980Z"
  },
  {
    "id": 2,
    "name": "Jenelle Kibbys",
    "status": "APPROVED",
    "gender": "Female",
    "avatar": "https://robohash.org/quiaasperiorespariatur.bmp?size=100x100&set=set1",
    "email": "jkibby1@hp.com",
    "address": "85 Tennessee Plaza",
    "createdAt": "2019-10-04T03:22:23.000Z",
    "updatedAt": "2019-09-11T20:18:38.000Z"
  },
  {
    "id": 3,
    "name": "Demetre",
    "status": "APPROVED",
    "gender": "Male",
    "avatar": "https://robohash.org/iustooptiocum.jpg?size=100x100&set=set1",
    "email": "aaaa@bbb.com",
    "address": "262 Saint Paul Park",
    "createdAt": "2020-05-01T17:30:50.000Z",
    "updatedAt": "2019-10-08T14:55:53.000Z"
  }
]
```

**Transformation Code**

The following example iterates over a data set and returns data in an `Array<label, value>` format

```javascript
{{
  QueryName.data.map((row) => {
      return { label: row.name, value: row.id };
  });
}}
```
