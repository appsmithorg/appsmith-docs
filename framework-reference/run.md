---
description: >-
  Query objects are the javascript variables generated for every Query created
  under a datasource
---

# Query

## Run

Each query object contains a run function that is used to execute the query. The run function is asynchronous by nature and can be chained using the callbacks in the function signature.

![](../.gitbook/assets/chaining.gif)

## Signature

```javascript
run(onSuccess: Function, onError: Function, params: Object): void
```

### Arguments

| Argument Name | Description |
| :--- | :--- |
| **onSuccess** | The function to be executed when the run method succeeds |
| **onError** | The function to be executed when the run method fails |
| **params** | The additional params to be passed to the run method |

## Passing Params to Run

Most Queries read values directly from entities as global variables. In some cases such as running a query inside a loop, parameters may need to be passed to the query with values contextual to the execution. This can be achieved using the params argument of the run signature. Params sent to a query can be accessed using the `this` keyword

```javascript
{{ this.params.key }}
```

## onSuccess

The onSuccess Function is run when a query is run successfully. The function returns the response of the query and the params passed to it in the callback arguments.

```javascript
onSuccess(response, params): void
```

## onError

The onError Function is run when a query execution fails. The function returns the response of the query and the params passed to it.

```javascript
onError(response, params): void
```

## Data

Each query stores the data from its latest run inside its **data** property. This property is populated only if the query successfully executes and can be accessed as

```javascript
{{ Query1.data }}
```

The data type of this property depends on the data

