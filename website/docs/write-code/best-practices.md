---
description: Best practices for Writing Functions using JavaScript
---

# Best Practices
Writing clean and performant code is crucial for maintaining codebase quality and ensuring a responsive user experience.
This page provides best practices for writing JavaScript code within Appsmith applications. 

## Use mutable JS variables
Appsmith supports mutable JS variables, which allows you to create global variables that other widgets and functions can read _within a page_. You can update these variables at any time. Using this method, you can store and read data directly from memory, which makes your apps much faster.

Example:
```jsx
export default {
    // Create a global variable
	name: 'sam',

    // Return the value of the global variable
	fetch_name () {
		return this.name;
	},

    //Update the value of the global variable
	update_name () {
		this.name = 'ben';
		return this.name;
	},
}
```
You can also update the mutable variable directly in your widgets.

Example:
```jsx
{{vars.name = "Michael"}}
```
## Use Appsmith store
With mutable JS, each variable created in a JS file is only scoped to the page containing that file. This means these variables cannot be accessed on other pages in your app. JS variables are also limited to the lifetime of the app. When you close the window, the data stored in memory is automatically deleted.
To _share data across pages_ in your application and persist the data, use the storeValue() function.

Example:

In this example, the third parameter `persist` in the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function is set to `true`. This ensures that the value is stored in the browser's local storage and can be used between sessions. Set `persist` to `false` if you do not want to persist the data and remove it on page refresh.

```jsx
export default {
	fetch_name () {
		storeValue('name', 'sam', true);
		return appsmith.store.name;
	},
	update_name () {
		storeValue('name', 'ben', true);
		return appsmith.store.name;
	},
}
```
You can then refer to the stored computed value in widgets.

Example:
```jsx
{{appsmith.store.name}}
```
## Avoid nested operations within widgets

Using Lodash or native JavaScript functions around objects and arrays requires caution.
Arrays and objects nested within each other can reduce performance. Using nested functions such as map, filter, and find can cause performance issues similar to nested loops.

Example:
```jsx
const result = arrayValues.map(item => item.filter(value => value.find(() => {})));
```
Complex logical functions like the above example can adversely affect your app's performance when bound directly to widget properties like `Visible`, `Disabled`, or color attributes like `Text color` or `Background color`.
Appsmith recommends clubbing array and object-related functions instead of deep nesting for improved performance.

Example:

```jsx
export default {
	merge_data: () => {
		const personalData = fetch_user_personal_details.data;
		const locationData = fetch_user_location_details.data;
		return personalData.map(pd => {
			const locationOfCurrentUser = locationData.find(ld => ld.id === pd.id);
			return ({
				...pd,
				...(locationOfCurrentUser ?? {})
			})
		})
	}
}
```
You can then use the above JS object to populate a Table widget.

Example:
In the following example, `DataFactory` is the name of the JS object.
```jsx
{{DataFactory.merge_data()}}
```
