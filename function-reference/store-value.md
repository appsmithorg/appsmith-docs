---
description: This function is used to store key-value data within browser local storage.
---

# Store Value

![Click to expand](../.gitbook/assets/storeValue.gif)

## Signature

```text
storeValue(key: string, value: any): void
```

### Arguments

| Argument Name | Description |
| :--- | :--- |
| **key** | Name of the key to store the value against |
| **value** | Value to give the key you are creating/updating |

## Reading values

You can read values from the store by referencing the key inside the appsmith.store object

```text
{{ appsmith.store.key }}
```

