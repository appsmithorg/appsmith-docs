---
description: >-
  storeValue() reference
---

# storeValue()

The storeValue() function stores the data in the browser's local storage as key-value pairs that represent storage objects and can be later accessed anywhere in the application.

<VideoEmbed host="youtube" videoId="UUvJn8oWqNs" title="How to use the StoreValue Function" caption="How to use the StoreValue Function"/>


You can store a value using the storeValue() function by passing the parameters shown in the signature. 

## Signature

The syntax for storeValue() function is given below:

```javascript
storeValue(key: string, value: any, persist? = true): Promise
```

| Argument    | Description              |
| --------------|--------------------------- |
| **key**          | Name of the key.        |
| **value**        | The data you want to save using storeValue(). You can save any data type in the Appsmith store.  |
| **persist**      | Defaults to **true**. **True** persists the key-value pair in the browser's local storage, and you can use it between sessions. A **false** doesn't persist the value and removes the key once the page refreshes or is closed.            |

*Example 1:* If you want to store the text of an input widget, you can use storeValue() as shown below:

```javascript
{{storeValue('email',input1.text)}}
```

Here, `email` is the key where the value is stored, and `input1.text` is the value in the input widget that's saved in the storage object.

*Example 2*:  You can save any data type with storeValue(). The code snippet below shows how to store employees' basic information using a function inside a JS Object. 

```javascript

export default {
	writeToStore: () => {
		storeValue("isActive", true). // Boolean
		storeValue("name", "Robert") // String 
		storeValue("pin", 9929) // Number
	
	}
}
```
## Access value

You can access the values from the store by referencing the key inside the store object.

```javascript

{{ appsmith.store.KEY_NAME }}
```
*Example*: If you have stored a value with the key `email`, you can access this value anywhere in the application using the code snippet given below: 

```javascript
{{appsmith.store.email}}
```

## Modify value

You can update the saved value in the store, by overwriting the data using its key. 

*Example*: If you have stored a boolean value with the key `isActive`, you can update the boolean value from `True` to `False` using a JS Object as shown below:

```javascript

export default {
	updateStore: () => {
		if(appsmith.store.isActive === true)
			storeValue("isActive", false) 
	}
}
```

## Store multiple values

If you need to store many values, instead of making multiple calls to the `storeValue` function, it's recommended to use an object array to store the values. All values can be assigned in a single `storeValue()` function as shown below:

```javascript

//employee data
storeValue("user", { "name": "Bar Crouch", "email": "bar@appsmith.com", "pin": "9984"}) 
```

The below example shows how to access the name of the employee that you have stored:

```javascript

//Access store using a JSobject
    export default {
	userName: () => {
		let user = appsmith.store.user.name
		return user
	}
}
//Text binding

{{appsmith.store.user.name}}
```

You can update the saved employee data in the storage as shown below:

```javascript

//updating employee data
export default {
	complexUpdate: () => {
		let user = appsmith.store.user // { "name": "Bar Crouch", "email": "bar@appsmith.com"}
		user.email = "barty.crouch@appsmith.com"
		user.city = "Bangalore"
		storeValue("user", user)
	}
}
```

## Storage states

Appsmith’s storeValue() function consists of two storage states: persistent and session state.

#### Persistent state

If you store value in the persistent state, it remains in the store across different sessions/pages and value is saved even if the page is reloaded. By default, the `persist` argument is set to **true** in storeValue() and so the data is saved in a persistent state. 

**Example**: if you don't define the value for persist argument, the value is saved in the persistent state by default.

```
{{storeValue('one',Input1.text)}}
```
The persistent state is cleared out when the user logs out.

#### Session state

You can use the session state to store the value you wish to hold until the page reloads or a user closes the window. To save data in this way, add `false` to the `persist` argument in the storeValue() function.

```javascript
{{storeValue('two',Input2.text, false)}}
```
Session state (`persist=false`) is only available till the user exits the app or refreshes a page.

:::info
If the **same key** is available in the session and persisted states, the **session** value gets a preference.
:::

Check the sample app to learn more about [persistent and session states](https://app.appsmith.com/app/appsmith-store/page1-627b8afe0b47255c28137dca).

## Asynchronous behavior of store value

storeValue() is asynchronous, so its execution isn't dependent on another function or task. To handle this scenario, you'll have to use async/await to control the execution.

**Example**: suppose there is a JS function that calls an API that returns a unique identifier, and you want to save the value returned using `storeValue()`.

```javascript
export default {
    getUniqueValue: () => {
        GetUniqueNameAPI.run()
        storeValue("uniqueEmail", GetUniqueNameAPI.data.uniqueName);
        showAlert("Success! Store value set: " + appsmith.store.uniqueEmail);
    }
}
```

When you run the function, you expect an alert success message with the value stored in the key `uniqueEmail` but it shows `undefined`. 
As storeValue() is asynchronous, it may execute while the API call is in progress and the value isn't saved in the storage resulting in `undefined` value.

To handle such a scenario, you can use **async/await** to ensure that the storeValue() function waits for the API call to complete execution.
**Example**: modify the code to use async/await as shown below:

```javascript
export default {
     getUniqueValue: async () => {
         await GetUniqueNameAPI.run()
         await storeValue("uniqueEmail", GetUniqueNameAPI.data.uniqueName);
         showAlert("Success, Store value set: " + appsmith.store.uniqueEmail);
    }
}
```

The `getUniqueValue` function calls  `GetUniqueNameAPI.run()` to fetch data from the API. The prefix `await` to the `GetUniqueNameAPI` call ensures that the control waits for API execution to complete and then moves to the following line. The prefix `await` to the `storeValue()` ensures that the value gets added to the store for the given key before executing `showAlert` in the next line.