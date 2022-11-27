---
sidebar_position: 5
---
# Store Value

This function stores key-value data to access later anywhere in the app.

:::info
Appsmith  `storeValue`  works similar to the browser's localStorage method [setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem).
:::




<VideoEmbed host="youtube" videoId="UUvJn8oWqNs" title="How to use the StoreValue Function" caption="How to use the StoreValue Function"/>


## Signature

```javascript
storeValue(key: string, value: any, persist? = true): Promise
```

### Arguments

| Argument Name | Description                                                                                                                                                                                                                      |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **key**       | Name of the key                                                                                                                                                                                                                  |
| **value**     | Add/Update the value of the given key                                                                                                                                                                                            |
| **persist**   | Defaults to **true**. **True** persists the key-value pair in the browser's local storage, and you can use it between sessions. A **false** doesn't persist the value and removes the key once the page refreshes or is closed. |

## Accessing store value

You can access the values from the store by referencing the key inside the store object.

```javascript
{{ appsmith.store.key }}
```

:::info
Store value is **asynchronous**. Thus, the execution of the function **doesn't** happen **simultaneously**, so when you try to **read** the key from the **store** in the **following line,** it might **not** always give the **expected** result.
:::

### Reading store value with async and await

Store value is an asynchronous action, and you get some unexpected results when you try to read the key (you added) in the **following** line. You sometimes want to **read** the store value right after you set it. To achieve this, you can use  `async`  and  `await` .

Let’s take an example where you have an API that returns a unique identifier. You wish to store its value in the appsmith store instead of calling the API. You have a JSObject that calls the API, stores the value in store, reads the stored value, and performs operations. But when you try to read the stored value, you get the key’s value as  `undefined`  because the key doesn’t exist in the store, and your code logic fails.

```javascript
export default {
    getUniqueValue: async () => {
        GetUniqueNameAPI.run(
            () => {
                storeValue("uniqueEmail", GetUniqueNameAPI.data.uniqueName);
            }
        )
        showAlert("Success! Store value set: " + appsmith.store.uniqueEmail);
    }
}
```

The  `getUniqueValue`  function calls an API  `GetUniqueNameAPI.run()` ` ``` and stores the value in the appsmith store with a key  `uniqueEmail` . When you try to retrieve the value for  `uniqueEmail`  in the next line, the function shows an alert  `Success! Store value set:` ` ```` ` `undefined` .

![A store returns undefined when the storeValue function execution isn't completed.](</img/Appsmith_Framework__Widget_Actions__StoreValue__Undefined_Value.png>)

**Why was the key not available in store when you added it?**

The key isn't added to the store and gives  `undefined`  value as the API call is in progress.

**How to handle such a scenario?**

You can use async and await to ensure your key has a valid value stored in the appsmith store for such scenarios. When using the  `async`  and  `await`  keywords, execution waits for the API call to complete before moving ahead to the next line.

Let’s modify the code snippet so that the store adds a valid value.

```javascript
export default {
     getUniqueValue: async () => {
         await GetUniqueNameAPI.run(
              () => {
                 storeValue("uniqueEmail", GetUniqueNameAPI.data.uniqueName);
                 }
        )
        showAlert("Success, Store value set: " + appsmith.store.uniqueEmail);
    }
}
```

The  `getUniqueValue`  function calls  `GetUniqueNameAPI.run()` . The  `async`  block embedded in the run method adds the API response value in the appsmith store. The prefix  `await`  to the  `GetUniqueNameAPI`  call ensures that the control waits for API execution to complete and add the value to the store for the given key. You can read the value from the store for the given key once the execution moves to the next line.

![The await keyword ensures that the storeValue function execution is completed and returns a valid value for the given key](</img/Appsmith_Framework__Widget_Actions__StoreValue__Valid_Value.png>)

## Scopes

In Appsmith, two types of scopes are available for the storeValue function. The first is a persistent (persistent store), and the second is a session (session store).

:::info
The  `storeValue`  in Appsmith works similar to the browser's localStorage method [setItem.](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)
:::

#### Persistent store

If you store a value in the persistent store, it remains in the store across different sessions/pages. For example, if you store a value in a persistent store, the value gets saved even if the page is reloaded.

You can set a persistent value by simply calling the store value with two parameters:

* Key - Name of the Key
* Value - The value for the given key

Lets see how it works:

* Drag and drop the _**input widget**_ to the canvas.
* Select the input widget and go to the widget properties.
* Scroll down to the Actions section, select the `onTextChanged` action, and toggle the `JS` label.
* Copy and paste the code below, adjusting the value if needed.

:::info
By default, persist is set as `true`. Define `persist = false` to use a [session store](store-value.md#session-store).
:::

```
{{storeValue('one',Input1.text)}}
```

Here, `one` is the key, and `Input1.text` is the value.

:::info
The **persisted** state is **cleared** out when a user **logs out**.
:::

#### Session store

You can use the session store to store the value you wish to hold until the page reloads or a user closes the window.

Lets see how it works:

* Drag another **input widget** to the canvas.
* Select the input widget and go to the widget properties.
* Scroll down to the Actions section, select the `onTextChanged` action, and toggle the `JS` label.
* Copy and paste the code below, adjusting the value if needed.

```javascript
{{storeValue('two',Input2.text, false)}}
```

:::info
Session store (**`persist=false`**) is only available till the user exits the app or refreshes a page.
:::

The GIF below demonstrates how both functions work.

![Persistent vs Session Store]( /img/Store\_value\_2.gif)

:::info
If the **same key** is **available** in the **session** and **persisted** states, the **session** value gets a **preference**.
:::

You can see the storeValue in action or fork the app and learn more about [persistent and session stores](https://app.appsmith.com/app/appsmith-store/page1-627b8afe0b47255c28137dca).

## Clear store value

To clear the value in the store, you can set its value to **undefined**.

```javascript
{{
    storeValue("userID", undefined);
}}
```

**Clear Persistent store value**

If you want a clear persistent store value, you must define two parameters as follows:

```javascript
{{
    storeValue('one', undefined); 
}}
```

**Clear Session store value**

If you want to clear the session store value, you must define three parameters as follows:

```javascript
{{
    storeValue('two', undefined, false);
}}
```


> If you need to store many values, instead of making multiple calls to the ```storeValue``` function, it is **recommended** to use an object array to store the values. For instance:

```js
storeValue("showSelect", true); storeValue("showTable", true); storeValue("showButton", true); .....
``` 
All values can be assigned in a single ```storeValue()``` function as shown below:
```js
storeValue("flags", { showSelect: true, showTable: true, showButton: true });
```






### What's next

Check out the app to [learn more about persistent and session stores](https://app.appsmith.com/app/appsmith-store/page1-627b8afe0b47255c28137dca).[ ](https://app.appsmith.com/app/appsmith-store/page1-627b8afe0b47255c28137dca)You can fork this app to have a better understanding of it.
