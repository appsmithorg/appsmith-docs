# Query Object

## Run

Each query object contains a run function used to execute the query. The run function is asynchronous by nature and can be chained using the callbacks in the function signature.

![](../../.gitbook/assets/chaining.gif)

### Signature

You can now use [JavaScript Promises](../../core-concepts/writing-code/javascript-promises.md) (recommended).

```
run(params: Object): Promise
```

If you want to use <mark style="color:orange;">Callbacks</mark> (not recommended), copy the signature below:

```javascript
run(onSuccess: Function, onError: Function, params: Object): void
```

where **onSuccess** and **onError** are functions and **params** is a dictionary of key-value pairs.

{% hint style="info" %}
We suggest you use the JavaScript Promise signature as it makes the code easy and readable. Callbacks are an old way and will be deprecated soon.

We recommend using the following Promise syntax:

```
Query.run(params)
    .then(() => {...}) // run after the query is successful
    .catch(() => {...}) // run if the query encounters any errors
```
{% endhint %}

#### Arguments

| Argument Name | Description                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------- |
| **params**    | An object containing key-value pairs to pass into the query, accessed with `this.params.key` |
| **onSuccess** | The function to be executed when the run method succeeds                                     |
| **onError**   | The function to be executed when the run method fails                                        |

### Passing Params to Run

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

{% embed url="https://youtu.be/oktXirbay8U" %}
Use `{{this.params.key}}` within your query to access any params you passed within the `.run(params)` function.
{% endembed %}

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

## Data

Each query stores the data from its latest run inside its **data** property. This property is populated only if the query successfully executes and can be accessed as

```javascript
{{ Query1.data }}
```

The data type of this property depends on the data.
