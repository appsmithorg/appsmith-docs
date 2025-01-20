---
description: >-
  clearStore() reference
---

# clearStore()

This page provides information about the `clearStore()` function signature and parameters, which clears all the data that was stored in the local storage of the browser using the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function.


<ZoomImage src="/img/clearStore.png" alt="clearStore()" caption="clearStore()" />



## Signature

```javascript
clearStore()
```

## Usage

If you have saved an employee's basic information using the `storeValue()` function, you can remove all the stored values by using the `clearStore()` function within a JSObject, as demonstrated below:

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