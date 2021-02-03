---
description: >-
  The run function exists on the API/Query entity object and is used to execute
  the API/Query
---

# Run

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

Most API/Queries read values directly from entities as global variables. In some cases such as running an action inside a loop, parameters may need to be passed to the action with values contextual to the execution. This can be achieved using the params argument of the run signature. Params sent to an action can be accessed as

```text
{{ this.params.key }}
```

