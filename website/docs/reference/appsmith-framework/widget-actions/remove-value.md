---
description: >-
  removeValue() reference
toc_max_heading_level: 2
---

# removeValue()

The removeValue() function clears the value associated with a specified key, which was previously stored in the browser's local storage using the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function.

## Signature


```js
removeValue(key: string)

```
### Parameters

#### key

<dd>

A string containing the key name that acts as a unique identifier to access the associated value.

</dd>


*Example*: 

If you want to remove the value with key `isActive`, you can use the `removeValue()` function using a JS Object as shown below:  

```js
export default {
    deleteStore: () => {
        storeValue("isActive", true)
        removeValue("isActive")
            }
}
```