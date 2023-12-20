---
description: This page shows you how to edit items on List through inline editing.
---

# Edit List Data
This page shows you how to edit items on the List widget. You will learn how to edit, delete, and duplicate a List item using action buttons within the widget.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/0wn5llvSYN5A17GQUVKB?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

## Prerequisites
- A List widget connected to a query that holds the data you want to edit and update.

## Edit list item
To edit a List item using an icon, follow these steps:
1. Drop an Icon button to the List widget and select **edit** in **Icon** from the property pane.
2. Drop a Modal widget on to the canvas and add the required widgets to display specific details from the List item.
   Rename the buttons on the Modal to `Reset` and `Update`. 
3. Add a new query to update the List data.

   Example:
   ```sql
   UPDATE product
    SET name = {{inp_addProductTitle.text}},
    description = {{inp_addProductDescription.text}},
    type = 'OTHER',
		image = {{inp_addImgUrl.text}}
    WHERE id = {{utils.activeEditProduct ? utils.activeEditProduct.id : ''}};
   ```
4. Create a JS Object to run the update query, close the Modal, and fetch the updated data from the datasource.

   Example:
   ```jsx
   updateProduct: async () => {
		await updateProduct.run();
		closeModal('mdl_manageProduct');
		showAlert('Product Updated', 'success');
		getProducts.run();
	}
   ```
5. Add **Execute a JS function** action to the **onClick** event of the `Update` button on the modal.
6. Add a **Show modal** action to the **onClick** event of the Icon. Select the Modal created in Step 2.

## Delete list item
To delete a list item using an icon, follow these steps:
1. Drop an Icon button to the List widget and select **trash** in **Icon** from the property pane.
2. Drop a Modal widget on to the canvas and design it to show a confirmation message with `Close` and `Delete` buttons.
3. Add a **Show modal** action to the **onClick** event of the Icon.
4. Add a query to delete the list item based on the [triggeredItem](/reference/widgets/list#triggereditem-object) property.
   
   Example:
   ```sql
   DELETE FROM product 
   WHERE id = {{lst_products.triggeredItem && lst_products.triggeredItem.id}}; 
   ```
5. Add **Execute query** action to the **onClick** event of the `Delete` button to run delete query.

## Duplicate list item
To duplicate a list item using an icon, follow these steps:
1. Drop an Icon button to the List widget and select **duplicate** in **Icon** from the property pane.
2. Configure the Icon's **onClick** event to run a query to duplicate the data corresponding to the triggered item in the datasource except the Id.
   
   Example:
   ```sql
   INSERT INTO product
  (name, description, type, image, updated)
    VALUES
    (
        {{lst_products.triggeredItem.name}},
        {{lst_products.triggeredItem.description}},
        'OTHER',
        {{lst_products.triggeredItem.image}},
        {{new Date().toISOString()}}
    )
	RETURNING*;
   ```
3. Execute the fetch query for the List widget to reflect the changes.

:::info
To insert the ID value, choose a UUID generator or let your data source auto-generate the ID.
:::

## Edit list item inline
To implement inline editing of list items using a Select widget, follow these steps:
1. Drop a Select widget to the List widget. Bind data to the widget to populate values from a specific column.
2. Create a new query to update the column value for the triggered row.

   Example:
   ```sql 
   UPDATE public."product" SET
    state = '{{lst_products.triggeredItem.sel_state.selectedOptionValue}}'
  WHERE id = {{lst_products.triggeredItem.id}}; -- Specify a valid condition here. Removing the condition may update every row in the table!
   ```
3. Add an action to the **onOptionChange** event of the Select widget to run the update query.
4. Set the **On success** callback to execute the fetch query for the List widget to reflect the changes.
