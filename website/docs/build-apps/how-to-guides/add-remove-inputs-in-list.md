---
description: This page shows you steps to dynamically add and remove Inputs from a List.
---

# Insert Input Fields Dynamically
This page shows you how to build an application where you can use buttons to insert and remove input fields in a List widget dynamically.

1. Drag a List widget to the canvas.
2. Appsmith autopopulates the List with default widgets. Delete the widgets from the first List item.
3. In the List widget's property pane, delete the default items and bind data to **Items** using the local storage. This would be the data corresponding to the Input widgets you add to the List.

   Example:
   The following code binds the data corresponding to `inputValue` present in the local storage. If this value is empty, an empty array is bound to the List.
   ```jsx
   {{(appsmith.store.inputValue || [])}}
   ```
4. Set the List widget's visibility to hide the widget if `inputValue` is empty.
   
   Example:
   ```jsx
   {{!appsmith.store.inputValue}}
   ```
5. Add an Input widget to the List. 
6. In the Input widget's property pane, set the **Text** property in **Label**.

   Example:
   In this example, `currentIndex` is the index of the current list item.

   ```jsx
   Input no. {{(currentIndex + 1)}}
   ```
7. Add two Icon Buttons to the canvas. In the property pane of these widgets, set the **Icon** to **+ plus** and **- minus** to add and remove Inputs respectively.
8. Add **Execute a JS function** action to the **onClick** event of the **+ plus** Icon button to add a new Input to the List and store the items details as an array in the local storage using the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function.

   Example:
   The following code sets the `id` of each dynamically added input based on the index of the last list item.
   ```jsx
   addInput: async () => {
		let index = appsmith.store.inputValue ?appsmith.store.inputValue.length: 0;
		storeValue('inputValue',[(appsmith.store.inputValue||[]), {input:"", id: index}],false);
	}
   ```
   In order to save this data to a datasource, you must execute a query on any event that inserts the newly added input details as an array into the database.
9. Add **Execute a JS function** action to the **onClick** event of the **- minus** Icon button to remove an Input from the List and remove the corresponding values from the local storage.

   Example:
   ```jsx
   removeInput: async () => {
    appsmith.store.inputValue.pop();
    storeValue('inputValue', appsmith.store.inputValue, false);
   }
   ```
10. To test, click on the **+ plus** and **- minus** Icon buttons to add and remove an Input widget from the List.
