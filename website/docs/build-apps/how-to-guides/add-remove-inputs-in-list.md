---
description: This page shows you steps to add and remove Inputs from a List dynamically.
---

# Insert Input Fields Dynamically
This page shows how to insert or delete input fields dynamically in a List widget.

1. Drag a List widget onto the canvas.
2. Appsmith auto-populates the List with default widgets. Delete the widgets from the first List item.
3. In the **Items** property, delete the default JSON and bind data from the local storage.

   Example:
   This code binds the data corresponding to `inputValue` in the local storage.
   ```jsx
   {{(appsmith.store.inputValue || [])}}
   ```
4. Drop an Input widget to the first item in the List. 
5. In the Input widget's property pane, set the **Text** property.

   Example:
   In this example, `currentIndex` is the index of the current list item.

   ```jsx
   Input no. {{(currentIndex + 1)}}
   ```
6. Add two Icon Buttons to the canvas. In the property pane of these widgets, set the **Icon** to **+ plus** and **- minus** to add and remove Inputs, respectively.
7. Add an **Execute a JS function** action to the **onClick** event of the **+ plus** Icon button. This function adds an entry to the List and saves the data as an array using the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function.

   Example:
   This code sets the `id` of dynamically added inputs based on the last item's index.
   ```jsx
   addInput: async () => {
		let index = appsmith.store.inputValue ?appsmith.store.inputValue.length: 0;
		storeValue('inputValue',[...(appsmith.store.inputValue||[]), {input:"", id: index}],false);
	}
   ```
8. Add an action to the **0nTextChanged** event of the Input widget to update the store value corresponding to the Input.

   Example:
   ```jsx
   updateStore: async () => {
                   storeValue('inputValue',{input:inp_dynamic.text},false);
   }
   ```
9. Add an Execute a JS function action to the onClick event of the minus icon button. This function deletes inputs and their corresponding values.

   Example:
   ```jsx
   removeInput: async () => {
    appsmith.store.inputValue.pop();
    storeValue('inputValue', appsmith.store.inputValue, false);
   }
   ```
10. To test, click the **+ plus** and **- minus** Icon buttons to add and remove an Input widget from the List.
