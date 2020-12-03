# ?

Your **ProductListPage** is a dashboard that lists products in a table. Let's add an **Edit** button in each row of the table. The button on click will open a form modal that allows users to edit the product in that row.

1. Open **Products\_Table**’s properties
2. Click on **New** **Button** under **Actions → Row Button**
3. Rename the button to **Edit**
4. Choose the action **Open Modal** from the **Actions** dropdown
5. Choose **New Modal**
6. Rename the new modal to **EditProductModal** using its properties 
7. Choose **Modal Type** as **Form Modal**
8. Rename the modal’s title to **Edit Product**

You will see that **EditProductModal** has an empty form. Let’s populate the form with widgets such that:

* It looks exactly like the **AddProductForm** 
* Its properties are configured in the same way as that of **AddProductForm**

After doing this, **EditProductModal** will look like below:

![](https://lh4.googleusercontent.com/YcO2UY_zzOZoqz94uEZ23C8UlaLlGkg3Ty0NHHU7aOWGd1aZYJaUPJ3T14kxamGoUk2i2yv3q7q9sd45-D4uvFHTwsZn8Nu1DE_eoWtIhXP-jKPIcBMBbYP0QyzjUd1qV9-xwTFM)

## Setting default values in widgets

All the form-fields in EditProductModal are empty. However, to edit a product, you'll want them to be pre-filled with the selected product's existing values:

* **ProductNameInput** will show value of column **productName** of the product in the selected row
* **MrpInput** will show value of column **mrp** of the product in the selected row
*  **CategoryDropdown** will show the selected option as the value of column **category** of the product in the selected row

Let's configure all the above.

Set default value in **ProductNameInput**: 

1. Open properties of **ProductNameInput**
2. Set **Default** **Text** to `{{Products_Table.selectedRow.productName}}`
3. Verify that the **Evaluated** **Value** of the property is as per the value in the selected row

Note that you just wrote JavaScript to set the **Default Text**. Here `Products_Table.selectedRow` ****has all the column values of the selected row. By calling `productName` ****on it, you're accessing the value of productName column. By setting **Default** **Text** to this, you’re pre-filling the form with this value. 

{% hint style="info" %}
When you place your cursor in the Default Text field, you again see the modal with **Expected Value** and **Evaluated Value**. Here the **Exptected Value** is **String**. This means that you can write anything 
{% endhint %}

Set default value in **MrpInput**: 

1. Open properties of **MrpInput**
2. Set **Default** **Text** to `{{Products_Table.selectedRow.mrp}}`
3. Verify that the **Evaluated Value** of the property is as per the value in the selected row

Set default value in **CategoryDropdown**:

1. Open **CategoryDropdown**'s properties
2. Set **Default** **Option** to `{{Products_Table.selectedRow.category}}`
3. Verify that the **Evaluated** **Value** of the property is as per the value in the selected row





  


