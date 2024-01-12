---
description: This page shows you steps to add and remove Inputs from a List dynamically.
---

# Insert Input Fields Dynamically
This page shows how to insert or delete input fields dynamically to a List widget.

1. Drag a List widget to the canvas.
2. Appsmith auto-populates the List with default widgets. Delete the widgets from the first List item.
3. Delete the default items from the List widget's property pane and bind data to **Items**.

   Example:
   This code binds the data corresponding to `inputValue` in the local storage. An empty array is bound to the List if this value is empty.
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
7. Add two Icon Buttons to the canvas. In the property pane of these widgets, set the **Icon** to **+ plus** and **- minus** to add and remove Inputs, respectively.
8. Add an **Execute a JS function** action to the **onClick** event of the **+ plus** Icon button. This function adds an entry to the List and saves the data as an array using the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function.

   Example:
   This code sets the `id` of dynamically added inputs based on the last item's index.
   ```jsx
   addInput: async () => {
		let index = appsmith.store.inputValue ?appsmith.store.inputValue.length: 0;
		storeValue('inputValue',[(appsmith.store.inputValue||[]), {input:"", id: index}],false);
	}
   ```
   To save input data to a datasource, execute a query that inserts the input details as an array into the database.
9. Add an Execute a JS function action to the onClick event of the minus icon button. This function deletes inputs and their corresponding values.

   Example:
   ```jsx
   removeInput: async () => {
    appsmith.store.inputValue.pop();
    storeValue('inputValue', appsmith.store.inputValue, false);
   }
   ```
10. To test, click the **+ plus** and **- minus** Icon buttons to add and remove an Input widget from the List.
