---
sidebar_position: 3
---
# Query Object

This page describes how to use the Query object to set up the flow of data in your app with code.

## Run

Calling a query's `run()` function executes that query. `run()` is asynchronous and can be promise-chained using the callbacks in the function signature. It can't be used in [synchronous fields](/core-concepts/writing-code/workflows#display-data-from-async-js-function).

### Signature

```
run(params: Object): Promise
```

:::info
We suggest you use the JavaScript Promise signature as it makes the code easy and readable. Callbacks are an old way and will be deprecated soon.

We recommend using the following Promise syntax:

```
Query.run(params)
    .then(() => {...}) // run after the query is successful
    .catch(() => {...}) // run if the query encounters any errors
```
:::

#### Arguments

| Argument Name | Description                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------- |
| **params**    | An object containing key-value pairs to pass into the query, accessed with `this.params.key` |
| **onSuccess** | The function to be executed when the run method succeeds                                     |
| **onError**   | The function to be executed when the run method fails                                        |

### Passing parameters to `run()`

Most Queries read values directly from entities as global variables. In some cases, like running a query inside a loop, parameters may need to be passed to the query with values contextual to the execution. It can be achieved using the params argument of the run signature. Please see the example below.

```
UsersApi.run({ org: "Appsmith" })
    .then((response) => showAlert(response) )
    .catch((error) => showAlert(error, 'error'))
```

Params sent to a query can be accessed using the `this` keyword

```javascript
{{ this.params.key }}
```

Please see the quick demo below showing how to access your params from `Query.run(params)` within the query. We'll use the [Postman Echo API](https://learning.postman.com/docs/developer/echo-api/), which will echo our request. We'll pass it `{ phrase: "hello, world!" }` , and then receive it back as a response:


<VideoEmbed host="youtube" videoId="oktXirbay8U" title="Use this.params.key within your query to access any params you passed within the .run(params) function." caption="Use this.params.key within your query to access any params you passed within the .run(params) function."/>

### onSuccess

The onSuccess function is run when a query runs successfully. The function returns the response of the query and the params passed to it in the callback arguments.

```javascript
onSuccess(response, params): void
```

### onError

The onError function is run when a query execution fails. The function returns the response of the query and the params passed to it.

```javascript
onError(response, params): void
```

### Callbacks (deprecated)

:::caution info
This style is deprecated in Appsmith. Reference this function signature only if you have existing callback-style syntax in your app.
:::

```javascript
run(onSuccess: Function, onError: Function, params: Object): void
```

## Properties

| Property         | Description                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------- |
| **data**         | Contains the response body from the last successful execution of this query. If this property is referenced in a widget's property field, the query is automatically run on page load. |
| **responseMeta** | Contains metadata from the last response to this query's execution.                          |
| **clear()**      | Empties all data from the query's **`data`** property.                                       |
| [**run()**](#signature) | Executes the query when called. Can't be called in sync fields; see [sync vs. async fields](/core-concepts/writing-code/workflows#display-data-from-async-js-function). |