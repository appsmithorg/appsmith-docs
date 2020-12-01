# Configuring default values

Your form fields are currently empty because you’ve configured them like that in AddProductForm. However, for editing a product, you’ll need the form to be pre-filled with existing values. Let’s configure that.  


1. Open properties of ProductNameInput
2. Set Default Text to {{Products\_Table.selectedRow.productName}}
3. Deploy the app

Products\_Table.selectedRow.productName gets productName column’s value of the selected row. By setting Default Text to this you’re pre-filling the form with the selected row's product name. Note that you just wrote JavaScript to set the default text. You can write plain text as well in this field to set a static default value.   


Try clicking on Edit of a row to verify that the product name is populated with the correct value.  


Let’s configure the default value for Category as well.

1. Open CategoryDropdown's properties
2. Set Default Option to {{Products\_Table.selectedRow.category}}
3. Verify that the Evaluated Value of the property is as per the value in the selected row

Let’s configure default value for MRP:

1. Open MrpInput's properties
2. Set Default Text to {{Products\_Table.selectedRow.mrp}}

Verify that the Evaluated Value of the property is as per the value in the selected row

