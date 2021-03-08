# Creating your First Form

Now to add new products to the catalogue, you'll have a create a new form widget. To keep things more organised, do this on a new page to not affect the catalogue page. Follow the below steps:

1. Create a new _**Page**_ by clicking on the "+" icon next to the **Pages** directory.
2. Rename the page to **`NewProductPage`**
3. Find and add a new **Form** widget by clicking on the "+" icon under the Widget directory to the page.
4. Rename the form to **`AddProductForm`**

{% hint style="info" %}
When you create a new page, the base directory structure having Widgets, APIs, and DB Queries automatically gets created.
{% endhint %}

## Adding Input Widgets to Form

The created form does not have any input fields. Now, add a new [input widget](https://docs.appsmith.com/widget-reference/input) onto the empty form \(_AddProductForm_\) by simply selecting it and dropping it on to canvas. Rename, the input widget to `ProductNameInput`.

Below is a screenshot of how your form should look like: 

![Input Widget on Form Widget](https://lh3.googleusercontent.com/Tk7BK67XSWBJrxRbDT96FOdenI_3cIYAh-tqxDDURALgEwXM8xWCE2FbGK0nFXTA8rO67RW-SeZQx5Fl5pXjO-gGQbnlRS3xhXIfxgQnZQDer3P24M5GkuKL2I2BaeqhOfzidQ3_)

This looks incomplete without a text label. Let’s fix that by adding a [text widget](https://docs.appsmith.com/widget-reference/text) next to the left of **ProductNameInput**. Also, update the **Text** property from its properties modal to **`Product Name`:** to change the display text.

## **Configuring Input Widgets**

You can also configure input fields on Appsmith. For example, you can set data-types, placeholders, custom error messages and many more. Now, open the `ProductNameInput` properties and set the following:

1. Modify **Data Type** to `Text`
2. Enable **Required** field by clicking on the toggle button

The Data Type property sets the allowed data-type of input, in this case, you can only enter text inputs. However, based on your use-cases you can change it to number, password or an email. The **Required** field makes the input to the field mandatory.

> It also disables the form-submit button if no input is provided in a mandatory field. To check out more properties and configuration do check out the docs [here](https://docs.appsmith.com/widget-reference/input#properties).

## Adding Dropdown Widget to Form

Now, let's add one more field to the **`AddProductForm`** that enables users to choose the product category. For this, you'll have to drag and drop a [dropdown widget](https://docs.appsmith.com/widget-reference/dropdown) and rename it to **`CategoryDropdown`**. Also, to keep the form clean, add a text widget next to **`CategoryDropdown`**. Lastly, set its **Text** property to **Category**.

Below is a screenshot of how your form should look like:

![](../../.gitbook/assets/image%20%287%29.png)

Now, open the dropdown settings and set the **Selection Type** property to **`Single Select`**, this will allow the user to select only one value from the dropdown.

{% hint style="info" %}

Now, if you look at the `CategoryDropdown` widget, you'll see some default options already added to it. Below are the steps for updating these according to the items relevant to Oakry: _Vegetables_, _Bakery_, _Fruits_, _Beverages_, and _Dairy_.

1. Open **CategoryDropdown** properties settings.
2. Click on the **Options** field. The value in this field is used to specify the options of the dropdown.
3. See that the **Expected Data Type** is `Array<{ label: string, value: string }>`
4. Now update the options, by coping the below snippet to the `Options` field.

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

Also, set the **Default Option** to `blank` and toggle the **Required** field to `true`.

## Writing your First Transformation

Notice that to set **CategoryDropdown**'s options, you had to copy-paste the values in a text editor. It was cumbersome. You can use JavaScript transformation to simplify that:

Open `CategoryDropdown` properties and add the following snippet to the `Options` field:

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

> To see it it's working, you can check the **Evaluated Value** and verify that it matches the **Expected Data Type**.

In the above code snippet, a simple `_.map` method from **lodash**, and a `toUpperCase()` method from JavaScript to transform `Array<Strings>` into `Array<{ label: string, value: string }>`.

By extension, you can transform any data into the desired format and type. For example, your input array can be values returned by a query that you can transform to `Array<{ label: string, value: string }>`.

{% hint style="info" %}
**Data Transformation:**

Using JavaScript transformation, you specify a JavaScript function that applies the transformations that you want. You can include methods to check whether input records match a particular condition, and you can either drop or forward records on the basis of the results.

Since you can Appsmith supports JavaScript just about everywhere, you can use JavaScript, or one of the [supported JS libraries](https://docs.appsmith.com/core-concepts/connecting-ui-and-logic/working-with-js-libraries#included-js-libraries) to transform data in any widget, API, or DB Query.
{% endhint %}

## Wrapping up the Form

So far, the form has can accept a name and the category of the product. Now, add a new [input widget](https://docs.appsmith.com/widget-reference/input) and rename it to `MrpInput`. This will be taking the number as an input, hence change the `Data Type` to `Number.` Lastly, add a [text widget](https://docs.appsmith.com/widget-reference/text) next to `MrpInput` and set it's `Text` property to MRP\($\).

The current title of the form is also a text widget with default title mentioned as **Form**. Let's rename the title to **Add a Product \(Oakry\)**. Below is a screenshot of how the Page looks like:

![AddProductForm with all input fields](../../.gitbook/assets/image%20%286%29.png)

## Writing regex validations

Your form now has all the required widgets in place with some basic properties configured. Let’s add some regex validations to reject bad input from users.

Start with **ProductNameInput**:

1. Open its properties modal 
2. Set **Regex** to `^\s*[a-zA-Z]{3,50}\s*$`
3. Set **Error Message** to **Must be alphanumeric having length between 3 and 50**

Let’s see what you did there:

* By setting the **Regex**: 
  * You restricted the text to the characters of the English alphabet
  * You ensured that the length of the product name will at least be 3 and at most be 50
* By setting the **Error Message**, you specified the error users will see when regex validation on their input fails

Try filling in both valid and invalid values in **ProductNameInput** to verify that it works.

Now, let’s configure MrpInput to accept only decimal values greater than or equal to $1.00

1. Set **Regex** to `^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$`
2. Set **Error Message** to **Value must be greater than 0 and up to 2 decimal places**

Verify that the regex validates the input as expected, and throws the error message in case of a mismatch.

{% hint style="info" %}
**Real-time app changes:**

Since Appsmith editor reflects changes in the app in real-time. So you will be able to test the changes while building, and without having to deploy every time.
{% endhint %}

