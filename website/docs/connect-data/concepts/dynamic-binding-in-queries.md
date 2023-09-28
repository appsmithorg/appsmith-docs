---
title: Dynamic Binding in Queries
description: Bind data dynamically in queries.
---

The dynamic binding feature enables you to integrate user inputs into database and API queries.

You can bind values dynamically using the mustache syntax `{{ }}`. 
Appsmith sends payloads containing details of dynamic binding along with meta information when executing a query. During the evaluation, Appsmith replaces the mustache value with the actual value.

This topic explains how dynamic binding works with queries and APIs in Appsmith.

### Database queries

For example, you have a SQL data source with a `USERS` table, and an [Input widget](https://docs.appsmith.com/reference/widgets/input) named `username`. You can dynamically bind the **Text** property of the Input widget as a query parameter in your SQL query to insert the text using the following syntax:

```js
INSERT INTO USERS (name) VALUES ('{{username.text}}')
```

### API queries

You can use dynamic binding with the following:
- URI path
- Query parameters
- Headers

#### URI path

For example, you have a REST API `https://appsmithdocs.example.com`, and an [Input widget](https://docs.appsmith.com/reference/widgets/input) named `uriparam`. You can dynamically bind the **Text** property of the Input widget to the API URL path using the following syntax:

```js
https://appsmithdocs.example.com/{{uriparam.text}}
```

#### Query parameters

For example, you have a REST API `https://appsmithdocs.example.com`, and an [Select widget](https://docs.appsmith.com/reference/widgets/select) named `queryparams`. You can dynamically bind the selected value of the Select widget as the query parameters using the following syntax:

```js
https://appsmithdocs.example.com/uri-param?{{<queryparams.selectedOptionValue>}}
```

#### Headers

For example, you have a REST API `https://appsmithdocs.example.com`, and [Select widgets](https://docs.appsmith.com/reference/widgets/select) named `header_key` and `header_value`. 
You can dynamically bind the selected value of the Select widgets to the header.

<img src="/img/dynamic-binding-api-headers.png" style= {{width:"700px", height:"auto"}} alt="Dynamic binding in API headers"/>

To do this, use the following syntax:

##### Key in headers
```js
{{header_key.selectedOptionValue}}
```

##### Value in headers
```js
{{header_value.selectedOptionValue}}
```

:::caution 
Appsmith does not support dynamic binding in datasource configurations and recommends [multiple datasource environments](https://docs.appsmith.com/connect-data/how-to-guides/setup-datasource-environments).
If you face issues, contact the support team using the chat widget at the bottom right of this page.
:::
