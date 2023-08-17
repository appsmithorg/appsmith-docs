---
description: >-
  clearStore() reference
---

# clearStore()

`clearStore()` function clears all the data that was stored in the local storage of the browser using the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function.

## Signature

```javascript
clearStore()
```

*Example:*

Suppose you have stored an employee's basic information using the `storeValue()` function. You can remove all the values using the `clearStore()` function in a JS Object as shown below:

```js
export default {
    writeToStore: () => {
        storeValue("isActive", true). 
        storeValue("name", "Robert") 
        storeValue("pin", 9929) 
        clearStore() // removing all the stored values
    
    }
}
```