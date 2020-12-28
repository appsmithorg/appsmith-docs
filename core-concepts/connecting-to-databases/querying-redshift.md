# Querying Redshift

Redshift databases can be queried using the standard [SQL syntax](https://docs.aws.amazon.com/redshift/latest/dg/cm_chap_SQLCommandRef.html). All Redshift queries return an array of objects where each object is a row returned by the query and each property in the object is a column. Appsmith provides template queries to help with the syntax

![Click to expand](../../.gitbook/assets/redshift_select_query.gif)

## Taking Inputs from Widgets

Queries can take inputs from widgets using the mustache syntax inside the query **`{{ searchInput.text }}`** where **searchInput** is the name of the widget and **text** is the property of the widget.

{% hint style="warning" %}
Don't forget to wrap your params with single quotes
{% endhint %}

```sql
select * from users where username like '%{{Text1.text}}%'
```

![Click to expand](../../.gitbook/assets/redshift_query_widget_input.gif)

## Displaying Query Data

Query data can be displayed in a table or chart using the mustache syntax **`{{ queryName.data }}` .** You can read more about displaying query data below

{% hint style="info" %}
The widgets are automatically refreshed when the data is changed
{% endhint %}

{% page-ref page="../building-the-ui/displaying-api-data.md" %}

