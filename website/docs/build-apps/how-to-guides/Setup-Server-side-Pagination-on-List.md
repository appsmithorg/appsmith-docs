---
description: This page shows you how to set up server-side pagination on a List widget, which allows you to manage and display large datasets within your application.
---
# Setup Server-side Pagination on List


This page shows you how to set up server-side pagination on the List widget, which allows you to manage and display large datasets within your application. It involves fetching and displaying only a portion of data from the server at a time, enhancing performance.


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/QFU0eSthcvD1KWz9MxFq?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


## Configure query

Most databases and APIs support server-side pagination, although the methods of implementation can vary.

Create a query to fetch data from the database or API using [pageSize](/reference/widgets/list#pagesize-number), and [pageNo](/reference/widgets/list#pageno-number) reference properties to implement pagination.

<dd>

Example:

* For PostgreSQL, you can configure the query as follows:

```sql
SELECT * FROM users LIMIT {{ List1.pageSize }} OFFSET {{ (List1.pageNo - 1) * List1.pageSize }}
```

* For the REST API, the page number can be passed as a query parameter to retrieve the corresponding subset of data, like:

```api
https://mock-api.appsmith.com/users?page={{List1.pageNo}}
```

You can refer to the [datasource reference](https://appsmith-docs-9z74fyp29-get-appsmith.vercel.app/connect-data/reference) for specific instructions on setting up pagination for your selected datasource.


</dd>


## Configure List widget

Follow these steps to configure the List widget to display fetched data, and implement server-side pagination:

1. Connect the query data to the [**Items**](/reference/widgets/list#items-string) property of the List widget.

<dd>

*Example*: 

```js
{{fetchData.data}}
```

</dd>

2. Enable the [**Server-side pagination**](/reference/widgets/list#server-side-pagination) property.


3. Set the List widget's [**onPageChange**](/reference/widgets/list#onpagechange) event to run the pagination query.

With this setup, users can paginate through data, ensuring an efficient browsing experience.

## Configure total records

To provide the user with information about the number of records in the List, you can configure the [**Total records**](/reference/widgets/list#total-records-number) property.

1. Create a query to fetch the total record count.

<dd>

*PostgreSQL Example*:

```sql
SELECT COUNT(*) FROM users;
```

This SQL query counts and returns the total number of records (rows) in the `users` table.

</dd>

2. To display the count, add the following code to the **Total records** property:

<dd>

```js
{{fetch_users_count.data[0].count}}
```
</dd>
