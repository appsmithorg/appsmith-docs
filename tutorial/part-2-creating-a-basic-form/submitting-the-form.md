# Binding events

Your form is now both more user-friendly, and less error-prone. Let's configure it to trigger the addition of a new product. It will involve two steps:

1. **Setting up an insert query** that adds a new product to the table
2. Wiring the Submit button of the form to **run the insert query**

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

* To get the value filled by the user in **ProductNameInput**, you called the method `text` on it
* To get the value of the selected option of **CategoryDropdown**, you called the method `selectedOptionValue` on it 

Your query is now set up to insert dynamic user input from the form. 

{% hint style="info" %}
Think of widgets as variables. Similar to variables:

* They have a type.
* They support a set of methods that are invoked via the widget’s name.
* They have a scope. A widget's data and properties can be accessed from only within its parent page. 


## Binding events using GUI

Let's bind the Submit button of the for to invoke this AddProductQuery. 

1. Open the properties of **SubmitButton**
2. Go to **Action → onClick**
3. Choose **Execute DB Query → AddProductQuery**

Try creating a new product using the form. You’ll notice that you don't have a way to tell whether the product got added after submitting, or not. It's because you haven't set up a success or an error message. Let's do that:

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

In the previous section, you used the properties GUI to defined **onSuccess** and **onError** events for the **Submit** button. You can do the same using JavaScript. Let's see how.

Click on the **JS** icon next to **onClick**. You’ll see that the long hierarchical GUI that represents **onClick → onSuccess** and **onClick → onError,** converts to JavaScript code like below:

```text
{{AddProductQuery.run(() => showAlert('yay'), () => showAlert('nay'))}}
```

Clicking on **JS** enables two things:

* If the field is blank, it allows you to write JavaScript. That' is, instead of using the GUI, you could have written the JavaScript to configure the **onSuccess** and **onError** events.
* If the field is already populated using the GUI, it converts the configured behavior to JavaScript code. Like it did above. You can modify this JavaScript to further customize the behavior. 

## Connecting multiple pages

You've created a new page **AddProductPage** with a form that allows users to add new products. You want to open this page when the user clicks on an **"Add new product"** button from the **ProductListPage**. Let's set this up:

1. Navigate to **Pages** **→ ProductListPage**
2. Drag-drop the [button widget ](https://docs.appsmith.com/widget-reference/button)at the bottom right of the table
3. Rename widget to **AddProductButton**
4. Change button label to **Add New Product**
5. Go to **Action → onClick → Navigate To** 
6. Type **AddProductPage** in **Page Name** field

Let's test this. Click on the Add New Product button on the ProductListPage. You'll see that the AddProductForm page opens up, ready for you to fill the form. 

But what's happening here? By selecting the [Navigate To](https://docs.appsmith.com/function-reference/navigateto) option, you set up the button to open a new page when it is clicked. You then specified the name of that page in your app, so Appsmith knows where to redirect the user to. 

## What's next?

When you’re comfortable with the basics of building a form, writing JavaScript in queries, and binding events using both GUI & JavaScript, read [part 3 ](https://app.gitbook.com/@appsmith/s/appsmith/~/drafts/-MNXsPmxVacsRbqB7S_f/v/v1.3/tutorial/part-2-creating-a-basic-form)of the tutorial to learn to take and process user input.

