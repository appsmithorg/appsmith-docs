---
sidebar_position: 2
description: >-
  The Appsmith platform allows us to share data across pages using URL query
  params & the browser's local storage.
---

# Share Data Across Pages
You can share data between pages by utilizing query parameters or Appsmith's store value, which is a global state object. This page explains how to share data between different pages in your Appsmith applications.

## Use query parameters
Use the query parameter to share data between pages across apps. To pass data between the source and the target page using query parameters, use the [navigateTo()](/reference/appsmith-framework/widget-actions/navigate-to) function.

Example:

In the following example, `page_name` is the name of the target page. 
```jsx
{{navigateTo('page_name', { userId: 547916 })}}
```

## Use store value
Local storage is ideal for persisting data between page navigation within the same app. You can store key-value pairs within the local storage using the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function.
To share data across pages, follow these steps:
1. Create a JS Object to add value to the local storage.
    
   Example:

   In the following example, `username` is the key and `Joseph` is the value.
   ```jsx
   export default {
        populate_store () {
            storeValue('username', 'Joseph', true);
            return appsmith.store.name;
        }
    }
    ```
    You can also use the **Store value** action to add store values. Make sure you use a unique key to avoid conflicts and retrieve value easily.
2. Retrieve data from the store using the `appsmith.store` object followed by the key of the value you wish to access.
   
   Example:
   ```
   {{appsmith.store.username}}
   ```
