---
sidebar_position: 2
---

# Using Forms

In the first part of this tutorial, you've created a single page app to view products for **Oakry**. In this part, you'll extend the app to a multi-page app, where you'll be creating a new page, and learn how to:

* Create a form to accept the new product's details from a user
* Add validations to the form fields
* Access widgets state in queries to insert dynamic input
* Bind the form's submit button to trigger the addition of a new product

We'll also add a button on the **ProductListPage** that takes us to our new page and opens this form. Let's get started!

## Creating your first form

First, to add new products to the catalog, you'll need to create a new [form widget](/reference/widgets/form.md). To keep things more organized, do this on a new page to avoid affecting the catalog page. Follow the below steps:

1. Create a new _**Page**_ by clicking on the "+" icon next to the **Pages** directory.
2. Rename the page to **`NewProductPage`**
3. Find and add a new **Form** widget by clicking on the "+" icon under the Widget directory to the page.
4. Rename the form to **`AddProductForm`**
5. Your new Form will have a few widget components automatically: A text widget that acts as a title, and two buttons near the bottom.
   * Click on its text widget that currently says "Form" and update its **Text** property to **`Add a Product \(Oakry\)`**.
   * Find the button at the bottom that has the label "Submit", and rename that widget to **`SubmitButton`**.

## Adding Input Widgets to the Form

The created form does not have any input fields. Now, add a new [input widget](/reference/widgets/input.md) onto the empty form (_AddProductForm_) by simply selecting it and dropping it onto the canvas. Rename the input widget to **`ProductNameInput`**.

:::info
Having trouble dragging your Input widget onto your Form widget? Try dragging it more quickly! Widgets will automatically adjust their size and position to make room for any new widgets you drag onto the canvas. But if you drag them quickly, you can place things inside of certain widgets like the Form and Container. To learn more about how it works, take a look at this [demonstration](https://www.youtube.com/watch?v=NB8Btt0aw0g)!
:::

Below is a screenshot of how your form should look:

![](/img/as_storeTutorial_addForm.png)

The input widget begins with a **Label** field, but we can also use a separate [text widget](/reference/widgets/text.md) to have a bit more control over its placement. Let's add a text widget to the left of **ProductNameInput**. Then, open the new text widget's properties and update its **Text** property to **`Product Name`:** to change the display text. You can remove the input widget's label by clearing out the **Label** field in its properties.

At the same time, let's go ahead and give the **`AddProductForm`** a proper title: Find its text widget label at the top of the form and set its **Text** property to **`Add A Product:`**.

## **Configuring Input Widgets**

You can also configure input fields on Appsmith. For example, you can set data types, placeholders, custom error messages, and more. Now, open the properties for `ProductNameInput` and set the following:

1. The **Data Type** property should be set to `Text`.
2. Make the input required by toggling the **Required** switch.

The data type property sets the allowed data-type of input -- in this case, the user may only provide text. However, based on your use cases you can change it to a number, password, or an email. The **Required** switch makes the field mandatory.

:::info
The form-submit button is automatically disabled if no input is provided for a mandatory field. To check out more properties and configurations, check out the docs [here](/reference/widgets/input.md#properties).
:::

## Adding a Select Widget to the Form

Let's add another field to the **`AddProductForm`** that enables users to choose the product category. For this, you'll have to drag and drop a [Select widget](/reference/widgets/select.md) and rename it to **`CategorySelect`**. Also, to keep the form clean, add a text widget to use as a label next to **`CategorySelect`**. Set the text widget's **Text** property to **`Category:`**.

As you look at the `CategorySelect` widget, you'll see some default options already added to it. Follow the steps below to set these options as necessary for our Oakry catalog:

1. Open **`CategorySelect`**'s properties window.
2. Click on the **Options** field. The value in this field is used to specify the options of the Select widget.
3. See that the **Expected Structure** is `Array<{ label: string, value: string }>`
4. Now update the options by copy-pasting the snippet below into the `Options` field.

```javascript
[
  {
    "label": "VEGETABLES",
    "value": "VEGETABLES"
  },
  {
    "label": "BAKERY",
    "value": "BAKERY"
  },
  {
    "label": "FRUITS",
    "value": "FRUITS"
  },
  {
    "label": "BEVERAGES",
    "value": "BEVERAGES"
  },
  {
    "label": "DAIRY",
    "value": "DAIRY"
  }
]
```

1. Finally, set the **Default Option** to `blank` and toggle the **Required** field to `true`.

## Writing your First Transformation

It can get cumbersome to copy/paste and manually edit the settings in the **Options** field! Instead, let's use another technique to make this easier and more maintainable: JavaScript transformations!

Open `CategorySelect` properties and add the following snippet to the `Options` field:

```javascript
{{
    _.map(
      ["vegetables", "bakery", "fruits", "beverages", "dairy"],
      function (category) {
        return { label: category.toUpperCase(), value: category.toUpperCase() };
      }
    );
}}
```

> To see if it's working, you can check the **Evaluated Value** and verify that it matches the **Expected Structure**.

In the above code snippet, a `_.map` method from **lodash**, and a `toUpperCase()` method from JavaScript to transform `Array<Strings>` into `Array<{ label: string, value: string }>`. [Click here](https://lodash.com/) for more information about **lodash**, an external JavaScript library that is usable from within Appsmith.

By extension, you can transform any data into the desired format and type. For example, your input array can be values returned by a query that you can transform to `Array<{ label: string, value: string }>`.

Now our **Options** field is easier to read, and much easier to update in the future if we need to add or remove values!

:::info
**Data Transformation:**

You may wish to define a JavaScript function that modifies/transforms the shape or appearance of your data before it is rendered by a widget. For example, you could include methods to check whether input records match a particular condition, and include or filter out records based on the result.

Since you can Appsmith supports JavaScript just about everywhere, you can use JavaScript, or one of the [supported JS libraries](/core-concepts/writing-code/ext-libraries.md) to transform data in any widget, API, or DB Query.
:::

## Wrapping up the Form

So far, the form can accept a name and a category for the product. Now, we will add a field for the price. Drag a new [input widget](/reference/widgets/input.md) and rename it to `MrpInput`. This will be taking a numerical value, so change the `Data Type` to `Number.` Use the [label property](reference/widgets/input#label-1) of `MrpInput` and set it to **`MRP($)`**.

![](/img/as_storeTutorial_completeForm.png)

## Writing regex validations

Your form now has all the required widgets in place with some basic properties configured. Let's add some regex validations to reject invalid input from users.

Start with **ProductNameInput**:

1. Open its properties modal
2. We want the Product Name to be between 3 and 50 characters that contain only letters of the English alphabet (allowing spaces). To do this, set the **Regex** property to `^\s*[a-zA-Z\s]{3,50}\s*$`.
3. The field should provide feedback to the user if their input is bad. For this, set **Error Message** to **Must be alphabetic having a length between 3 and 50**

Try filling in both valid and invalid values in **ProductNameInput** to see how it behaves!

![](/img/as_storeTutorial_regexFail.png)

Now, let's configure **MrpInput** to accept only decimal values greater than or equal to $1.00

1. Set **Regex** to `^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$`
2. Set **Error Message** to **Value must be greater than 0 and up to 2 decimal places**

Verify that the regex validates the input as expected, and throws the error message in case of a mismatch.

## Submitting the form

Your form is now both more user-friendly, and less error-prone! Let's configure it to use the form data to add a new entry to our catalog. It will involve two steps:

1. **Setting up an insert query** that adds a new product to the table.
2. Wiring up the Submit button of the form to **run the insert query.**

## Accessing widget properties in queries

Your form will have its values filled in by the user. Now let's see how to access our form data and plug it into our INSERT query! Keep in mind that **queries are page-scoped**, meaning that if you create a query on Page1, then you will not be able to access that query from Page2.

1. Navigate to **Pages → NewProductPage → Datasources → +.**
2. Navigate to **Mock Database → New Query.**
3. Rename the query to **AddProductQuery.**
4.  Copy the following into the Query tab:

    ```sql
    INSERT INTO products ("productName", "category", "mrp") VALUES ('{{ProductNameInput.text}}', '{{CategorySelect.selectedOptionValue}}', '{{MrpInput.text}}')
    ```
5. Run the query.
6. You should see a notification for a successful query run!

Let's review briefly: The main query syntax is the same as that of PostgreSQL, following the format:

```sql
INSERT INTO table_name
 (col1, col2, col3, … colN)
VALUES
 (val1, val2, val3, … valN)
```

The only difference here is that you're using the **mustache template** to write JavaScript within the insert query:

* To get the value provided by the user in **ProductNameInput**, you accessed its `text` property.
* To get the value of the selected option of **CategorySelect**, you accessed its property `selectedOptionValue`.

To reiterate: Widgets, APIs, and DB Queries belonging to the same parent page can all access each other's properties and data, by referencing the desired property on that object's name.

:::info
From within our query, we've accessed the properties of our widgets! To see the various exposed properties you can access for any given widget, check the **Internal Properties** section in [widget](/reference/widgets/) documentation.
:::

## Triggering action on UI events

Your query **AddProductQuery** is now set up to insert dynamic user input from the form. Let's bind the Submit button of the form to invoke **AddProductQuery**:

1. Open the properties of **SubmitButton**
2. Go to **Events → onClick**
3. Choose **Execute Query → AddProductQuery**

Try creating a new product using the form. You'll notice that you don't have a way to tell whether or not the product was added after submitting the form -- We'll need to set up a success or an error message:

1. Open the properties of **SubmitButton.**
2. Navigate to **onClick → onSuccess.**
3. Choose **Show Message.**
4. Type **Product creation successful!**
5. Navigate to **onClick → onError.**
6. Choose **Show Message.**
7. Type **Product creation failed!**

![](/img/as_storeTutorial_submitCallbacks.png)

Try submitting the form again. Now you should have some useful feedback to show whether the query worked as expected!

## Configuring actions using JavaScript

In the previous section, you used the properties GUI to define **onSuccess** and **onError** events for the **Submit** button. Let's look at how you can do the same thing using JavaScript.

Click on the **JS** icon next to **onClick**. You'll see that the long hierarchical GUI that represents **onClick → onSuccess** and **onClick → onError,** converts to JavaScript code like below:

```javascript
{{
    AddProductQuery.run(
        () => showAlert('Product creation successful!'), 
        () => showAlert('Product creation failed!')
    )
}}
```

What you see above is the **`run()`** method defined by Appsmith. You can call the method on any DB Query, or an API. This method has the following signature:

```javascript
run(onSuccess: function, onError: function, params: object): void
```

Clicking on **JS** enables two things:

1. If the field is blank, it allows you to write JavaScript. That is, instead of using the GUI, you could have written this JavaScript yourself to configure the **onSuccess** and **onError** events.
2. If the field is already populated using the GUI, it converts the configured behavior to JavaScript code. You can modify this JavaScript to further customize the behavior.

Note that you bound one action each with the success and error events. In [part 3](./creating-interactive-views.md), you'll learn to bind more than one action with each of the events.

:::info
For more information about writing JavaScript in Appsmith, please refer to this guide [Writing JavaScript in Appsmith](/learning-and-resources/how-to-guides/writing-javascript-in-appsmith).
:::

## Connecting multiple pages

You've created a new page **NewProductPage** with a form that allows users to add new products to the Oakry catalog. Now, we'd like to open this page when the user clicks on an **"Add new product"** button from the **ProductListPage**. Let's set this up:

1. Navigate to **Pages** **→ ProductListPage**.
2. Drag-drop a [button widget ](/reference/widgets/button/)to the bottom-right of the table.
3. Rename the new button to **AddProductButton**.
4. Change the button label to **Add New Product**.
5. Go to **Events → onClick → Navigate To**.
6. Set the **Page Name** field to `NewProductPage`.

Your **ProductListPage** now looks like this:

![](/img/as_storeTutorial_navButton.png)

Let's test it out: Click on the "**Add New Product"** button on the **ProductListPage**. You'll see that the **NewProductPage** form opens up, ready for user input.

By selecting the [Navigate To](/reference/appsmith-framework/widget-actions/navigate-to) option, you set up the button to open a new page when it is clicked. You then specified the name of that page in your app, so Appsmith knows where to redirect the user.

## What's next?

When you're comfortable with the basics of building a form, accessing widget's properties in DB queries, and binding events using both GUI & JavaScript, read [part 3](./creating-interactive-views.md) of the tutorial to learn to handle and process user input.
