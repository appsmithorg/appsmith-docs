# Redshift

{% hint style="warning" %}
The following document assumes that you understand the [basics of connecting to databases on Appsmith](../core-concepts/connecting-to-databases/). If not, please go over them before reading further.
{% endhint %}

Redshift databases can be queried using the standard [SQL syntax](https://docs.aws.amazon.com/redshift/latest/dg/cm_chap_SQLCommandRef.html). All Redshift queries return an array of objects where each object is a row returned by the query and each property in the object is a column. Appsmith provides template queries to help with the syntax

![Click to expand](../.gitbook/assets/redshift_select_query.gif)

## Taking Inputs from Widgets

Queries can take inputs from widgets using javascript inside the query and referencing the widget property. Open `{{ }}` inside the query to write javascript and access other entities on the page using their names.

{% hint style="warning" %}
You may need to wrap your string mustache bindings in single quotes to pass string values to Redshift
{% endhint %}

```sql
select * from users where username like '%{{Text1.text}}%'
```

![Click to expand](../.gitbook/assets/redshift_query_widget_input.gif)

{% page-ref page="../core-concepts/connecting-to-databases/querying-a-database.md" %}

