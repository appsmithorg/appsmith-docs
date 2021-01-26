# Postgres

{% hint style="warning" %}
The following document assumes that you understand the [basics of connecting to databases on Appsmith](../core-concepts/connecting-to-databases/). If not, please go over them before reading further.
{% endhint %}

PostgreSQL databases can be queried using the standard [SQL syntax](https://www.postgresql.org/docs/12/index.html). All PostgreSQL queries return an array of objects where each object is a row returned by the query and each property in the object is a column.

![](../.gitbook/assets/postgres.gif)

## Taking Inputs from Widgets

Queries can take inputs from widgets using javascript inside the query and referencing the widget property. Open `{{ }}` inside the query to write javascript and access other entities on the page using their names.

{% hint style="info" %}
You may need to wrap your string mustache bindings in single quotes to pass string values to Postgres
{% endhint %}

```javascript
select * from users where id = '{{ Table1.selectedRow.id }}'
```

{% page-ref page="../core-concepts/connecting-to-databases/querying-a-database.md" %}

