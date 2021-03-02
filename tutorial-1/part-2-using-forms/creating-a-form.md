# Creating your First Form

Now to add new products to the catalogue, you'll have a create a new form widget. To keep things more organised, do this on a new page to not affect the catalogue page. Follow the below step:

1. Create a new _Page_ by clicking on the "+" icon next to the **Pages** directory.
2. Rename the page to `NewProductPage`
3. Find and add a new **Form** widget by clicking on the "+" icon under the Widget directory to the page.
4. Rename the form to `AddProductForm`

{% hint style="info" %}
**App Structure:**

When you create a new page, the base directory structure having Widgets, APIs, and DB Queries automatically gets created.
{% endhint %}

## Adding Input Widgets to Form

The created form does not have any input fields. Now, add a new input widget onto the empty form (AddProductForm) by simply selecting it and dropping it on to canvas. Next, the input widget it to `ProductNameInput`.

Below is a screenshot of how your form should look like:
![](https://lh3.googleusercontent.com/Tk7BK67XSWBJrxRbDT96FOdenI_3cIYAh-tqxDDURALgEwXM8xWCE2FbGK0nFXTA8rO67RW-SeZQx5Fl5pXjO-gGQbnlRS3xhXIfxgQnZQDer3P24M5GkuKL2I2BaeqhOfzidQ3_)

This looks incomplete without a text label. Let’s fix that by adding a [text widget](https://docs.appsmith.com/widget-reference/text) next to the left of **ProductNameInput**. Also, update the **Text** property from its properties modal to **Product Name:** to change the display text.

![](https://lh4.googleusercontent.com/juoeTjj_IRV360wboG0iCuTIME0WgGhwhDHQ3RC6GwfKValSwb8oeYymHabyfO67wQKgyQ3o4gj-XOW3XVxN8P-N1_s5659GvUwVm60v66odwusqC9wBnuU3YANT9ZH4bdwY8JW-)

**Configuring Input Widgets**

You can also configure input fields on Appsmith. For example, you can set data-types, placeholders, custom error messages and many more. Now, open the `ProductNameInput` properties and set the following:

1. Modify **Data Type** to `Text`
2. Enable **Required** field by clicking on the toggle button

The Data Type property sets the allowed data-type of input, in this case, you can only enter text inputs. However, based on your use-cases you can change it to number, password or an email. The **Required** field makes the input to the field mandatory.

> It also disables the form-submit button if no input is provided in a mandatory field. To check out more properties and configuration do check out the docs [here](https://docs.appsmith.com/widget-reference/input#properties).

## Adding Dropdown Widget to Form

Now, let's add one more field to the `AddProductForm` that enables users to choose the category of the product. For this, you'll have to drag and drop a [dropdown widget](https://docs.appsmith.com/widget-reference/dropdown) and rename it to `CategoryDropdown`. Also, to keep the form clean, add a text widget next to `CategoryDropdown`. Lastly, set it's **Text** property to **Category**.

<!-- TODO: Add an image here -->

<!-- Below is a screenshot of how your form should look like: -->

Now, open the dropdown settings and set the **Selection Type** property to `Single Select`, this will allow the user to select only one value from the dropdown.

> You can alternatively configure a multi-select dropdown by choosing Multi Select from Selection Type. However, in this tutorial, choose **Single Select** only.

Now, if you look at the `CategoryDropdown` widget, you'll see some default options already added to it. Below are the steps for updating these according to the items relevant to Oakry: Vegetables, Bakery, Fruits, Beverages, and Dairy.

1. Open **CategoryDropdown**’s properties settings.
2. Click on the **Options** field. The value in this field is used to specify the options of the dropdown.
3. See that the **Expected Data Type** is `Array<{ label: string, value: string }>`
4. Now update the options, by coping the below snippet to the `Options` field.

```json
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

5. Additionally, set the **Default Option** to `blank` and toggle the **Required** field to `true`.

## Writing your First Transformation

Notice that to set **CategoryDropdown**'s options, you had to copy-paste the values in a text editor. It was cumbersome. You can use JavaScript transformation to simplify that:

Open `CategoryDropdown` properties and add the following snippet to the `Options` field:

```
{{
    _.map(
      ["vegetables", "bakery", "fruits", "beverages", "dairy"],
      function (category) {
        return { label: category.toUpperCase(), value: category.toUpperCase() };
      }
    );
}}
```

> To see it it's working, you can check the **Evaluated Value** and verify that it matches the **Expected Data Type**.

In the above code snippet, a simple `_.map` method from **lodash**, and a `toUpperCase()` method from JavaScript to transform `Array<Strings>` into `Array<{ label: string, value: string }>`.

By extension, you can transform any data into the desired format and type. For example, your input array can be values returned by a query that you can transform to `Array<{ label: string, value: string }>`.

{% hint style="info" %}
**Data Transformation:**

Using JavaScript transformation, you specify a JavaScript function that applies the transformations that you want. You can include methods to check whether input records match a particular condition, and you can either drop or forward records on the basis of the results.

Since you can Appsmith supports JavaScript just about everywhere, you can use JavaScript, or one of the [supported JS libraries](https://docs.appsmith.com/core-concepts/connecting-ui-and-logic/working-with-js-libraries#included-js-libraries) to transform data in any widget, API, or a DB Query.
{% endhint %}

## Wrapping up the Form

So far, the form has can accept a name and the catogery of the product. Now, add a new [input widget](https://docs.appsmith.com/widget-reference/input) and rename it to `MrpInput`. This will be taking number as an input, hence change the `Data Type` to `Number.` Lastly, add an [text widget](https://docs.appsmith.com/widget-reference/text) next to `MrpInput` and set it's `Text` property to MRP\($\).

The current title of the form is also text widget with default title mentioned as **Form**. Let's rename the title to **Add a Product (Oakry)**. Below is a screenshot of how the Page looks like:

![AddProductForm: Form to add a new product](../../.gitbook/assets/image%20%281%29%20%281%29%20%281%29%20%282%29%20%282%29%20%282%29%20%283%29%20%283%29%20%283%29%20%284%29%20%281%29.png)

## Writing Regex Validations

The `AddProductForm` has all the required input widgets in place with some basic properties configured. Now, let’s add some validations to reject bad inputs from users using regular expressions.

First, let's start adding a text-validation to `ProductNameInput` widget. To do this, open the settings modal and set the _Regex_, _Error Message_ properties to following:

- Regex : `^\s*[a-zA-Z]{3,50}\s*$`

- Error Message: `Must be alphanumeric having length between 3 and 50`

In the **Regex** property, you are restricting the text to the English alphabet characters only and ensuring that the length of the product name will at least be 3 and at most be 50.

By setting the **Error Message**, you specified the error users will see when regex validation on their input fails.

Try filling in both valid and invalid values in **ProductNameInput** to verify the validation.

Now, let’s configure `MrpInput` widget to accept only decimal values greater than or equal to `$1.00`. Open the settings modal and set the _Regex_, _Error Message_ properties to following:

- Regex : `^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$`

- Error Message: `Value must be greater than 0 and up to 2 decimal places`

{% hint style="info" %}
**Real-time app changes:**

Since Appsmith editor reflects changes in the app in real-time. So you will be able to test the changes while building, and without having to deploy every time.
{% endhint %}
