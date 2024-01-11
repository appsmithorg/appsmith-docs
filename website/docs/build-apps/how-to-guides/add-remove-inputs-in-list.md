---
description: This page shows you steps to dynamically add and remove Inputs from a List.
---

# Add and Remove Inputs Dynamically
Creating a user-interactive app in Appsmith may require adding and removing UI elements on the fly. This page shows you how to build an application where users can use buttons to insert and remove input fields in a List widget dynamically.

To add and remove Inputs from a List widget, follow these steps:
1. Drag a List widget to the canvas.
2. Appsmith autopopulates the List with dummy values and widgets. Delete all the widgets from the List.
3. Add an Input widget to the List. 
4. In the Input widget's property pane, set the **Text** property in **Label**.

   Example:
   In this example, `currentIndex` is the index of the current list item.

   ```jsx
   Input no. {{(currentIndex + 1)}}:
   ```
5. Set the **Placeholder** property of the Input widget.
   
   Example:
   ```jsx
   {{currentIndex + 1}} Item 
   ```
6. Add two Icon Buttons to the canvas. In the property pane of these widgets, set the **Icon** to **+ plus** and **- minus** to add and remove Inputs respectively.
7. Add **Execute a JS function** action to the **onClick** event of the **+ plus** Icon button to add a new Input to the List and store the items details as an array in the local storage using the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function.

   Example:
   The following code sets the `id` of each dynamically added input based on the index of the last list item.
   ```jsx
   addInput: async () => {
		let index = appsmith.store.inputValue ?appsmith.store.inputValue.length: 0;
		storeValue('inputValue',[(appsmith.store.inputValue||[]), {input:"", id: index}],false);
	}
   ```
   In order to save this data to a datasource, you must execute a query on any event that inserts the newly added input details as an array into the database.
8. Add **Execute a JS function** action to the **onClick** event of the **- minus** Icon button to remove an Input from the List and remove the corresponding values fromm the local storage.

   Example:
   ```jsx
   removeInput: async () => {
    appsmith.store.inputValue.pop();
    storeValue('inputValue', appsmith.store.inputValue, false);
   }
   ```
9.  In the List widget's property pane, set its visibility to hide the widget if `inputValue` is empty.
   
   Example:
   ```jsx
   {{!appsmith.store.inputValue}}
   ```
10. To test, click on the **+ plus** Icon button to add an Input widget to the List.
