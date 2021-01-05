# Querying MongoDB

Mongo databases can be queried using the mongo database [command syntax](https://docs.mongodb.com/manual/reference/command/nav-crud/). This syntax is slightly different from the database methods mongo collection methods you may be familiar with. All mongo queries return an array of objects where each object is a mongo document and properties of the object are the keys of the document. 

Appsmith provides template queries to help with the syntax

![Click to expand](../../.gitbook/assets/mongo-query.gif)

## Taking Inputs from Widgets

Queries can take inputs from widgets using the mustache syntax inside the query **`{{ searchInput.text }}`** where **searchInput** is the name of the widget and **text** is the property of the widget.

{% hint style="warning" %}
You may need to wrap your string mustache bindings in quotes to make your query a valid JSON
{% endhint %}

```javascript
{
  "find": "users",
  "filter": {
    "role": "{{statusDropdown.selectedOptionValue}}"
  },
  "limit": 10
}
```

![Click to expand](../../.gitbook/assets/mongo-query-binding.gif)

## Displaying Query Data

Query data can be displayed in a table or chart using the mustache syntax **`{{ queryName.data }}` .** You can read more about displaying query data below

{% page-ref page="../building-the-ui/displaying-api-data.md" %}

