---
sidebar_position: 2
description: >-
  The Appsmith platform allows us to share data across pages using URL query
  params & the browser's local storage.
---

# Share Data Across Pages

This guide shows how to share data across different pages in Appsmith using the `navigateTo()` or the `storeValue()` function.


## Using navigateTo() Function

The [navigateTo()](/reference/appsmith-framework/widget-actions/navigate-to) function allows you to navigate between internal app pages or external URLs while passing data as query parameters, such as user inputs or query data.

<dd>

<ZoomImage src="/img/sharedata-page.png" alt="Navigate to action" caption="Navigate to action" />

</dd>


1. Select **Navigate to** from the action selector.

2. Choose the **Target page** where you want to navigate. 

3. In the **Query params**, pass the data (key-value pairs) that you want to share across pages.

<dd>

*Example:* If you want to pass the user ID from a Table's selected row, you can add:

* To pass data using the Action selector, use:


```js
{{{ "id": usersTable.selectedRow.id }}}
```

* To pass data using JS, use:

```js
{{navigateTo('HomePage', { "id": usersTable.selectedRow.id}, 'SAME_WINDOW');}}
```

</dd>

4. To access these values on the destination page, use:

```js
{{appsmith.URL.queryParams.id}}
```


## Use store value


The [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function allows you to persist data across page navigations within the same app by storing key-value pairs in local storage. Unlike using `navigateTo()` with query parameters, which is ideal for passing temporary data between pages, `storeValue()` is better suited for data that needs to persist longer, even after multiple navigations. 



1. Create a JSObject to store the data in local storage.
    
*Example:* To store a user's name and phone number, create a function that saves these values using `storeValue()`.

 ```jsx
   export default {
    saveUserData() {
        const userName = InputName.text; // User's name from an input widget
        const userPhone = InputPhone.text; // User's phone number from another input widget

        storeValue('userName', userName, true); // Save the user's name
        storeValue('userPhone', userPhone, true); // Save the user's phone number

        return { name: appsmith.store.userName, phone: appsmith.store.userPhone };
    }
}
```

    You can also use the **Store value** action to add store values. Make sure you use a unique key to avoid conflicts and retrieve value easily.

2. Retrieve data from the store using the `appsmith.store` object followed by the key of the value you wish to access.
   
   Example:

   ```js
   {{appsmith.store.username}}
   ```
