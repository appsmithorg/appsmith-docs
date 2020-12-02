# Binding events

Your form is now both more user-friendly, and less error-prone. Let's configure it to trigger the addition of a new product. It will involve two steps:

1. Setting up an **insert** query that adds a new product in the table
2. Wiring the Submit button of the form to run the **insert** query

## Using JavaScript in queries

Let’s set up the query first:

1. Navigate to **Pages → NewProductPage → DB Queries → +**
2. Navigate to **Mock Database → New Query**
3. Rename the query to **AddProductQuery**
4. Copy the following in the Query tab  `INSERT INTO products ("productName", "category", "mrp") VALUES ('{{ProductNameInput.text}}', '{{CategoryDropdown.selectedOptionValue}}', '{{MrpInput.text}}')` 
5. Run the query
6. You’ll see the notification for a successful query run

Let’s see the query. The main query syntax is the same as that of PostgreSQL, following the format:

```text
INSERT INTO table_name
 (col1, col2, col3, … colN)
VALUES
 (val1, val2, val3, … valN)

```

The only difference is that you’re using the mustache template to write JavaScript within the insert query:

* To get the value input by the user in **ProductNameInput**, you called **.text** method on it
* To get the value of the selected option of **CategoryDropdown**, you called **.selectedOptionValue** on it 

Your query is now set up to insert dynamic user input from the form. 

{% hint style="info" %}
Think of widgets as variables. Similar to variables:

* They have a type.
* They support a set of methods that are invoked via the widget’s name.
* They have a scope. A widget's data and properties can be accessed from only within its parent page. 
{% endhint %}

## Binding events using GUI

Try submitting the form with some valid values. You’ll see that you don't have a way to tell whether the product got added after submitting. Let’s fix it by adding success and error messages:

1. Open the properties of **SubmitButton**
2. Navigate to **onClick → onSuccess** 
3. Choose **Show Message**
4. Type **Yay, product creation successful!**
5. Navigate to **onClick → onError**
6. Choose **Show Message**
7. Type **Nay, product creation failed!**
8. Deploy the app

Try filling the form again with some valid and invalid values to verify that it works as expected.

## Binding events using JavaScript

In the previous section, you used the properties' GUI to defined **onSuccess** and **onError** events for the **Submit** button. You can do the same, and much more using JavaScript in Appsmith. Let's see how.

Click on the **JS** icon next to **onClick**. You’ll see that the long hierarchical GUI that represents **onClick → onSuccess** and **onClick → onError,** converts to JavaScript code like below:

```text
{{AddProductQuery.run(() => showAlert('yay'), () => showAlert('nay'))}}
```

Clicking on **JS** enables the JavaScript editor in a property's field, that is it allows you to write JavaScript in it. You can modify this JavaScript code to further customize the **onClick** event. 

In Appsmith, you can configure a widget’s properties by either using the GUI, or by writing JavaScript code. Most widget-properties can be customized using JavaScript.

## Connecting multiple pages

You've created a form that allows users to add new products. Let's wire the opening of this form with a button on ProductListPage that the user can click to begin product-addition.

1. Navigate to **Pages** **→ ProductListPage**
2. Drag-drop the [button widget ](https://docs.appsmith.com/widget-reference/button)at the bottom right of the table
3. Rename widget to **AddProductButton**
4. Change button label to **Add New Product**
5. Go to **Action → onClick → Navigate To** 
6. Type **AddProductPage** in **Page Name** field

Let's test this. Click on the Add New Product button on the ProductListPage. You'll see that the AddProductForm page opens up, ready for you to fill the form. 

Let's see how you built it. By selecting the [Navigate To](https://docs.appsmith.com/function-reference/navigateto) option, you set up the button to open a new page when it is clicked. You then specified the name of that page in your app, so Appsmith knows where to redirect the user to. 

