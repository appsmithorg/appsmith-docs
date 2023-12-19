---
description: This page shows you how to edit items on List through inline editing.
---

# Edit List Data
This page shows you how to edit items on List through inline editing. You will learn how to edit, delete, and duplicate a List item using Action buttons within the widget.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/dbdJIVamvNUvVhwYm5GU?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

## Prerequisites
- A List widget connected to a query that holds the data you want to edit and update.

## Edit list item
To edit a List item using an icon, follow these steps:
1. Drop an Icon button in the List widget.
2. Add a **Show modal** action to the **onClick** event of the Icon.
3. Select **New Modal** and add the required widgets to display specific details from the List item.
   Rename the buttons on the Modal to `Reset` and `Update`.
4. Add **Execute a JS function** action to the **onClick** event of the `Update` button on the modal. 
   
   Example:
   ```jsx
   updateProduct: async () => {
		await updateProduct.run();
		closeModal('mdl_manageProduct');
		showAlert('Product Updated', 'success');
		getProducts.run();
	}
   ```
   The above function runs a query named `updateProduct` to update the data, closes the Modal named `mdl_manageProduct`, and fetches the updated data from the datasource.

   Example of the update query:
   ```sql
   UPDATE product
    SET name = {{inp_addProductTitle.text}},
    description = {{inp_addProductDescription.text}},
    type = 'OTHER',
		image = {{inp_addImgUrl.text}}
    WHERE id = {{utils.activeEditProduct ? utils.activeEditProduct.id : ''}};
   ```

## Delete list item
To delete a list item using an icon, follow these steps:
1. Drop an Icon button in the List widget.
2. Add a **Show modal** action to the **onClick** event of the Icon.
3. Select **New Modal** and add a confirmation message to it with `Close` and `Delete` buttons.
4. Add **Execute query** action to the **onClick** event of the `Delete` button to run delete query.

   Example:
   ```sql
   DELETE FROM product 
   WHERE id = {{lst_products.triggeredItem && lst_products.triggeredItem.id}}; 
   ```
   The above query deletes the product details based on the triggered list item's id.

## Duplicate list item
To duplicate a list item using an icon, follow these steps:
1. Drop an Icon button in the List widget.
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

## Change status
To change the status of a list item using a Select widget, follow these steps:
1. Drop a Select widget to the List widget. Map the Select widget's options to the status values.
2. Add an action to the **onOptionChange** event of the List widget to run the status change query.

   Example:
   ```sql
   UPDATE public."features" SET
    state = '{{lst_products.triggeredItemView.state_select.selectedOptionValue}}'
  WHERE id = {{lst_products.triggeredItem.id}}; -- Specify a valid condition here. Removing the condition may update every row in the table!
   ```
3. Set the **On success** callback to execute the fetch query for the List widget to reflect the changes.