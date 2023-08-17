---
description: >-
  removeValue() reference
---

# removeValue()

The removeValue() function clears the value associated with a specified key, which was previously stored in the browser's local storage using the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function.

## Signature

The syntax for the removeValue() function is given below:

```js
removeValue(key: string)

```
| Argument    | Description              |
| --------------|--------------------------- |
| **key**       | Name of the key.        |

*Example*: If you want to remove the value with key `isActive`, you can use the removeValue() function as shown below:  

```js
removeValue("isActive")
```