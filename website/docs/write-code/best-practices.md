---
description: Best practices for Writing Functions using JavaScript
---

# JavaScript Best Practices
JavaScript code is essential when developing apps on the Appsmith platform. Writing clean and performant code is crucial for maintaining codebase quality and ensuring a responsive user experience.
This document provides best practices for writing JavaScript code within Appsmith applications. 

## Use mutable JS variables to share data within page
Appsmith supports mutable JS variables, which allows you to create global variables that can be read by other widgets and functions. You can update these variables at any time. With global variables, you can write code that is simpler and shorter without using the Appsmith store. Using this method, you can store and read data directly from memory, which makes your apps much faster.

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
## Use Appsmith store to share data across pages
With mutable JS, each variable created in a JS file is only scoped to the page containing that file. This means these variables cannot be accessed on other pages in your app. JS variables are also limited to the lifetime of the app. When you close the window, the data stored in memory is automatically deleted.
To share data across pages in your application, use the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function.

Example:

In this example, the third parameter in the `storeValue` function is [persist](/reference/appsmith-framework/widget-actions/store-value#persist). When `persist` is set to `false`, the value does not persist and is removed when the page is refreshed or closed. To save the value in the browser's local storage and use it between sessions, set `persist` to `true`.

```jsx
export default {
	fetch_name () {
		storeValue('name', 'sam', false);
		return appsmith.store.name;
	},
	update_name () {
		storeValue('name', 'ben', false);
		return appsmith.store.name;
	},
}
```
You can then refer to the stored computed value in widgets.

Example:
```jsx
{{appsmith.store.name}}
```
## Avoid nested operations

Using Lodash or native JavaScript functions around objects and arrays requires caution.
Arrays and objects nested within each other can reduce performance. Using nested functions such as map, filter, and find can cause performance issues similar to nested loops.

Example:
```jsx
const result = arrayValues.map(item => item.filter(value => value.find(() => {})));
```
Complex logical functions like the above example can adversely affect the performance of your app when bound directly to widget properties like `Visible`, `Disabled`, or color attributes like `Text color` or `Background color`.
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
