---
description: Action objects are the variables generated for every API / Query
---

# Action

## Run

Each action object contains a run function that is used to execute the API/Query. The run function is asynchronous by nature and can be chained using the callbacks in the function signature.

![](../.gitbook/assets/chaining.gif)

## Signature

```text
run(onSuccess: Function, onError: Function, params: Object): void
```

### Arguments

| Argument Name | Description |
| :--- | :--- |
| **onSuccess** | The function to be executed when the run method succeeds |
| **onError** | The function to be executed when the run method fails |
| **params** | The additional params to be passed to the run method |

## Passing Params to Run

Most API/Queries read values directly from entities as global variables. In some cases such as running an action inside a loop, parameters may need to be passed to the action with values contextual to the execution. This can be achieved using the params argument of the run signature. Params sent to an Action can be accessed using the `this` keyword

```text
{{ this.params.key }}
```

## Data

Each action stores the data from its latest run inside its **data** property. This property is populated only if the action successfully executes and can be accessed as 

```text
{{ Query1.data }}
```

The data type of this property depends on the data

