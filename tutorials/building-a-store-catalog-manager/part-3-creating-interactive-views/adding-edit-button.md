# Accessing properties between widgets

You've built a page to view all products, and another page to add a new product. We now move on to the third functionality of enabling a user to edit a product. Let's add an **Edit** button in each row of the table. On clicking the **Edit** button, a form modal will open which will allow users to edit the product in the corresponding row.

1. Open **Products\_Table**’s properties
2. Click on **ADD A NEW** **COLUMN** under **Columns**
3. Click the ⚙️ icon to access column settings
4. Change the column type to **Button**
5. Label the button as **Edit** under button properties

You'll see an Edit button in the last column of each row. A Row Button adds a button action for each row. Let's configure the Edit button.

1. Open **Products\_Table**’s properties
2. Go to **Button column's** settings by clicking the ⚙️ icon
3. Choose the action **Open Modal** from the **onClick** dropdown
4. Choose **New Modal**
5. Rename the new modal to **EditProductModal** using its properties 
6. Choose **Modal Type** as **Form Modal**
7. Rename the modal’s title to **Edit Product**

The **Product\_Table** now looks like this:

![ProductListPage: Note the addition of the Actions column in right having the Edit buttons](../../../.gitbook/assets/image%20%285%29.png)

Click on the **Edit** button of any row. You will see that **EditProductModal** is an empty form. Let’s populate the form with widgets such that:

* It looks exactly like the **AddProductForm** 
* Its properties are configured in the same way as that of **AddProductForm**

{% hint style="info" %}
**Naming:**

The names of widgets inside your **EditProductModal** are the same as that of the names of widgets inside **AddProductForm**. This is valid because they both belong to different parent pages. Names must be unique only within the page - across widgets, APIs, and DB queries, that is, a widget and an API within the same parent page also can't be assigned the same name.
{% endhint %}

After doing this, **EditProductModal** will look like below:

![](https://lh4.googleusercontent.com/YcO2UY_zzOZoqz94uEZ23C8UlaLlGkg3Ty0NHHU7aOWGd1aZYJaUPJ3T14kxamGoUk2i2yv3q7q9sd45-D4uvFHTwsZn8Nu1DE_eoWtIhXP-jKPIcBMBbYP0QyzjUd1qV9-xwTFM)

Notice, that like **AddProductForm**, all the form-fields in **EditProductModal** are empty. However, to edit a product, you'll want them to be pre-filled with the values of the product that you want to update. This means that:

* **ProductNameInput** should show the **productName** value of the selected row
* **MrpInput** should show **mrp** value of the selected row
* **CategoryDropdown** should show **category** value of the selected row
* **ProductNameInput** should show the value of column **productName** of the selected row
* **MrpInput** should show the value of column **mrp** of the selected row
* **CategoryDropdown** should show the value of column **category** of the selected row

Let's configure all the above.

To set a default value of **ProductNameInput**:

1. Open properties of **ProductNameInput**
2. Set **Default** **Text** to `{{Products_Table.selectedRow.productName}}`
3. Verify that the **Evaluated** **Value** of the property is as per the value in the selected row

Note that you just wrote JavaScript to set the **Default Text**. Here, `Products_Table.selectedRow` has all the column values of the selected row. By referencing **`productName`** on it, you're accessing the value of **productName** column. By setting **Default** **Text** to this, you’re pre-filling the form with this value.

What you did above was that you accessed the [table widget's](https://docs.appsmith.com/widget-reference/table) property [selectedRow's](https://docs.appsmith.com/widget-reference/table#selected-row) column values, in the [form widget](https://docs.appsmith.com/widget-reference/form). Appsmith allows you to access the property of one widget in another widget using a set of properties exposed by every widget. For example, here you used the [table widget's ](https://docs.appsmith.com/widget-reference/table) [`selectedRow`](https://docs.appsmith.com/widget-reference/table#selected-row)property. For a widget, check its exposed properties under the **Internal Properties** section in its **Widgets Reference** guide.

Note that since the scope of a widget is limited to its parent page, a widget shares its properties only with other widgets, queries, and APIs defined within the same page. For example, in this case, `Products_Table.selectedRow` can be accessed only in other widgets, queries, and APIs of **ProductListPage**. `Products_Table.selectedRow` can't be accessed from any widget, query, or API of **AddProductPage**.

{% hint style="info" %}
**Accessing data across pages:**

To access a widget's properties or an APIs/DB Query's results on another page, there are two ways:

1. Store the data in your browser cache using the [storeValue](../../../framework-reference/store-value.md) function, so that it's available for accessing even when the user moves to another page in your app.
2. Pass the data as a query param in the URL of the page you redirect the user to. This can be done using the [navigateTo](../../../framework-reference/navigateto.md) function.
{% endhint %}

Let's now set a default value for **MrpInput**:

1. Open properties of **MrpInput**
2. Set **Default** **Text** to `{{Products_Table.selectedRow.mrp}}`
3. Verify that the **Evaluated Value** of the property is as per the value in the selected row

To set a default value for CategoryDropdown:

1. Open **CategoryDropdown**'s properties
2. Set **Default** **Option** to `{{Products_Table.selectedRow.category}}`
3. Verify that the **Evaluated** **Value** of the property is as per the value in the selected row

Verify that when you click on the Edit button of a row, your form will get populated with the selected row's values.

