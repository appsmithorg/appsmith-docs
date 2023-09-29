---
title: Dynamic Binding in Queries
description: Bind data dynamically in queries.
---

The dynamic binding feature enables you to integrate user inputs into database and API queries.
You can bind values dynamically using the mustache syntax `{{ }}`. 
Appsmith sends payloads containing details of dynamic binding along with meta information when executing a query. During the execution, Appsmith replaces the mustache value with the actual value.

This page explains how dynamic binding works with queries and APIs in Appsmith.

### Database queries

With dynamic binding, you can populate query parameters at runtime.
For example, you have a SQL data source with a `users` table, and a [Select widget](https://docs.appsmith.com/reference/widgets/select) named `userid`.

Use the following syntax to filter the data for the selected user id:

```js
select id, name, email, country
from users u where u.id = {{userid.selectedOptionValue}}
```

### API queries

You can dynamically bind values to your API requests. Appsmith then appends the evaluated values to the endpoint URL.

For example, you have a REST API `https://mock-api.appsmith.com`, and a [Select widget](https://docs.appsmith.com/reference/widgets/select) named `apiversion`. 

Use the following syntax to append the selected api version dynamically:

```js
https://mock-api.appsmith.com/{{apiversion.selectedOptionValue}}
```
You can use dynamic binding with the following:
- URI path
- Query parameters
- Headers
- Body


:::caution 
Appsmith does not support dynamic binding in datasource configurations and recommends [multiple datasource environments](https://docs.appsmith.com/connect-data/how-to-guides/setup-datasource-environments).
If you face issues, contact the support team using the chat widget at the bottom right of this page.
:::
