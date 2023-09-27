---
title: Dynamic Binding
description: Bind data dynamically in Appsmith.
---

Binding properties in Appsmith allow you to specify how data from a data source should be bound to UI components. For example, you can bind a table widget to a database query so that it displays the results of that query.

Dynamic binding in Appsmith lets you use dynamic values within widget properties, query parameters, API paths, and search parameters.

Appsmith supports dynamic binding with the following:

- Widgets
- Queries
- APIs

This topic explains the significance of dynamic binding in building applications and how it works with queries and APIs in Appsmith.

For more information about binding data to widgets, see [Bind Data to Widgets](https://docs.appsmith.com/core-concepts/building-ui/dynamic-ui).

## Significance of dynamic binding in Appsmith

Dynamic binding is an integral part of Appsmith's interactive and data-driven applications and has several key benefits:

- **Real-time data**: dynamic binding allows you to display real-time data updates in your application. This is particularly critical for applications that require live data, such as dashboards and monitoring tools.
- **User interaction**: it enables you to build applications that respond to user input immediately. For example, you can create forms that update data in the database when a user submits the form.
- **Reduced development time**: Appsmith's visual approach to dynamic binding reduces the need for extensive manual coding, speeding up the development process and making it accessible to a broad range of users, including non-developers.
- **Flexibility**: you can easily change the data source or update the binding properties without rewriting the entire application, providing flexibility and scalability.

## How dynamic binding works in Appsmith

You can bind values dynamically in Appsmith using the moustache syntax `{{ }}`.

Appsmith replaces the moustache value with the actual value during evaluation. 

### Queries

For example, you have a SQL data source with a `USERS` table, and an [Input widget](https://docs.appsmith.com/reference/widgets/input) named `inputWidget`. You can dynamically bind the **Text** property of the input widget as a query parameter in your SQL query to insert the text using the following syntax:

```js
INSERT INTO USERS (name) VALUES ('{{inputWidget.text}}')
```

For more information about dynamic binding in queries, see [References](https://docs.appsmith.com/connect-data/reference).

### APIs

In Appsmith, you can use dynamic binding in the following:
- API URL paths
- Query parameters
- Headers

#### API URL paths

For example, you have a REST API `https://appsmithdocs.example.com`, and an [Input widget](https://docs.appsmith.com/reference/widgets/input) named `inputWidget`. You can dynamically bind the **Text** property of the input widget to the API URL path using the following syntax:

```js
https://appsmithdocs.example.com/{{inputWidget.text}}
```

For more information about dynamic binding in REST APIs, see [REST API](https://docs.appsmith.com/connect-data/reference/rest-api#query-rest-api).

#### Query parameters

For example, you have a REST API `https://appsmithdocs.example.com`, and an [Input widget](https://docs.appsmith.com/reference/widgets/input) named `inputWidget`. You can dynamically bind the **Text** property of the input widget as the query parameters using the following syntax:

```js
https://appsmithdocs.example.com/uri-param?{{<inputWidget.text>}}
```

#### Headers

For example, you have a REST API `https://appsmithdocs.example.com`, and [Input widgets](https://docs.appsmith.com/reference/widgets/input) named `headername` `inputWidget`. You can dynamically bind the **Text** property of the input widgets to the header using the following syntax:

```js
{{<headername.text>}} - {{<inputWidget.text>}}
```

:::info Dynamic binding in data source configurations
Appsmith does not support dynamic binding in data source configurations and recommends multiple data source environments.
Fore more information on multiple data source environments, see [Setup Multiple Datasource Environments](https://docs.appsmith.com/connect-data/how-to-guides/setup-datasource-environments).
:::