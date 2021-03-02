# Submitting the form

Now that the form is ready with all the validations, let's configure it to trigger the addition of a new product when new inputs are submitted. This involves two steps:

1. _**Setting up an Insert Query**_ that adds a new product to the table.
2. Adding logic to _**Submit Button**_ of the form to run the insert query.

## Accessing Widget Properties in Queries

To configure an insert query for a widget, you'll have to first write the Query under DB Queries directory and then attach it to the required widget. Let’s follow the below steps to achieve the same:

1. First, navigate to `NewProductPage` and select DB Queries directory.
2. Next, create a _New Query_ named `AddProductQuery` under **Mock Database**
3. Copy the following in the Query Tab

```SQL
INSERT INTO products
("productName", "category", "mrp") VALUES
("{{ProductNameInput.text}}", "{{CategoryDropdown.selectedOptionValue}}", "{{MrpInput.text}}")
```

4. Run the query, and you should see a successful query response

The syntax of the query used here is same as the PostgresSQL, the only difference is we'll be using multiple flower brackets to write javascript and access variables from the page.

To access the value filled by user in `ProductNameInput` widget, we'll use the `text` property. Similarly, to access the selected option from `CategoryDropdown`, you'll be using the `selectedOptionValue`.

What you did here is that you accessed the widgets' property in your query. This is the inverse of what you did in part one, where you accessed **ProductsQuery**'s results in the **Products_Table** widget. To reiterate, widgets, APIs, and DB Queries belonging to the same parent page can access each other's property/data by referencing the appropriate property on their respective names.

## Triggering Action on UI Events

In the previous section, we've created a query that add's items from Form to the products catalog. Now, let's use the the `AddProductQuery` query and trigger it to insert dynamic user input from the `AddProductForm` form. To do this, you'll have to bind the _Submit_ button of the form to invoke **AddProductQuery**:

1. Navigate to `AddProductForm`, and open the settings of the _Submit_ button.
2. Go to **Action → onClick**
3. Choose **Execute DB Query** and select the `AddProductQuery`
4. Set `onSuccess` message as `Product creation successful!`
5. Set `onError` message as `Product creation Failed!`

Try creating a new product using the form now, you'll also see the success and error messages after the form is submitted as you've configured the `onSuccess` and `onError` properties as well.

## Configuring Actions using JavaScript

In the previous section, you used the properties GUI to define **onSuccess** and **onError** events for the **Submit** button. You can do the same using JavaScript. Let's see how.

Click on the **JS** icon next to **onClick**. You’ll see that the long hierarchical GUI that represents **onClick → onSuccess** and **onClick → onError,** converts to JavaScript code like below:

```text
{{AddProductQuery.run(() => showAlert('yay'), () => showAlert('nay'))}}
```

What you see above is the **`run()`** method defined by Appsmith. You can call the method on any DB Query, or an API. This method has the following signature:

```text
run(onSuccess: function, onError: function, params: object): void
```

Clicking on **JS** enables two things:

1. If the field is blank, it allows you to write JavaScript. That is, instead of using the GUI, you could have written this JavaScript yourself to configure the **onSuccess** and **onError** events.
2. If the field is already populated using the GUI, it converts the configured behavior to JavaScript code. Like it did above. You can modify this JavaScript to further customize the behavior.

Note that you bound one action each with the success and error events. In [part 3](https://app.gitbook.com/@appsmith/s/appsmith/~/drafts/-MNo2nMKgdMWZ9VCFlcr/v/v1.3/tutorial/part-3-widget-interaction/running-multiple-actions-on-submit), you'll learn to bind more than one action with each of the events.

{% hint style="info" %}
**JavaScript in Appsmith:**

You can write JavaScript almost anywhere in Appsmith.

Appsmith currently supports two forms of JavaScript code:

1. Single line code or functions, such as ternary conditions
2. Immediately Invoked Function Expressions \(IIFE\)
   {% endhint %}

## Connecting Multiple Pages

You've created a new page **AddProductPage** with a form that allows users to add new products. Now, you want to open this page when the user clicks on an **"Add new product"** button from the **ProductListPage**. Let's set this up:

1. Navigate to **Pages** **→ ProductListPage**
2. Drag-drop the [button widget ](https://docs.appsmith.com/widget-reference/button)at the bottom right of the table
3. Rename widget to **AddProductButton**
4. Change button label to **Add New Product**
5. Go to **Action → onClick → Navigate To**
6. Type **AddProductPage** in **Page Name** field

Your **ProductListPage** now looks like:

![ProductListPage: Note the "Add new product" button](../../.gitbook/assets/image%20%283%29.png)

Let's test this. Click on the "**Add New Product"** button on the ProductListPage. You'll see that the **AddProductForm** page opens up, ready for you to fill the form.

But what's happening here? By selecting the [Navigate To](https://docs.appsmith.com/function-reference/navigateto) option, you set up the button to open a new page when it is clicked. You then specified the name of that page in your app, so Appsmith knows where to redirect the user to.

## What's next?

When you’re comfortable with the basics of building a form, accessing widget's p roperty in DB queries, and binding events using both GUI & JavaScript, read [part 3 ](https://app.gitbook.com/@appsmith/s/appsmith/~/drafts/-MNXsPmxVacsRbqB7S_f/v/v1.3/tutorial/part-2-creating-a-basic-form)of the tutorial to learn to take and process user input.
