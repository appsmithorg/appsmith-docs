# Creating your first form

Let's create a new page that will have a form to accept product-details from users:

1. Click on **+** next to **Pages** to add a new page
2. Rename the page from **Page1** to **NewProductPage**
3. Click on **+** next to **Widgets**
4. Drag and drop the **Form** **Widget** from the left pane to **NewProductPage**
5. Rename the form to **AddProductForm**

{% hint style="info" %}
Note that when you create a new page, the base directory structure of Widgets, APIs, and DB Queries automatically gets created.


## Adding an input widget

The [form widget](https://docs.appsmith.com/widget-reference/form) ****creates an empty form with a **Submit** and a **Reset** button. Let’s add some fields to it to take user input:

1. Drag and drop the [input widget](https://docs.appsmith.com/widget-reference/input) into the form
2. Rename the input widget to ProductNameInput

Your form will look like below:

![](https://lh3.googleusercontent.com/Tk7BK67XSWBJrxRbDT96FOdenI_3cIYAh-tqxDDURALgEwXM8xWCE2FbGK0nFXTA8rO67RW-SeZQx5Fl5pXjO-gGQbnlRS3xhXIfxgQnZQDer3P24M5GkuKL2I2BaeqhOfzidQ3_)

This looks incomplete without a text label on its left. Let’s fix that:

1. Drag and drop the [text widget](https://docs.appsmith.com/widget-reference/text) next to the left of **ProductNameInput**
2. Update the **Text** property from its properties modal to **Product Name:** to change the display text

![](https://lh4.googleusercontent.com/juoeTjj_IRV360wboG0iCuTIME0WgGhwhDHQ3RC6GwfKValSwb8oeYymHabyfO67wQKgyQ3o4gj-XOW3XVxN8P-N1_s5659GvUwVm60v66odwusqC9wBnuU3YANT9ZH4bdwY8JW-)

Let’s tinker with **ProductNameInput**:

1. Open its properties
2. Set **Data Type** to **Text** 
3. Toggle **Required** field to Green

The **Data Type** property sets the allowed data-type of input. When set to **Text**, it allows only **Text** input. The **Required** field makes the input to the field mandatory. You can toggle between true and false.

## Adding a dropdown widget

Let’s add other fields to the form. To enable users to choose a Category:

1. Drag-drop a [dropdown widget](https://docs.appsmith.com/widget-reference/dropdown)
2. Rename it to **CategoryDropdown**
3. Set its **Select** **Type** to **Single Select**
4. Add a [text widget](https://docs.appsmith.com/widget-reference/text) next to **CategoryDropdown** 
5. Set its **Text** property to **Category:**

By setting the **Selection Type** to **Single Select**, you allow the user to select only one value from the dropdown. You can alternatively configure a multi-select dropdown by choosing Multi Select from Selection Type. However, to do this tutorial, choose **Single Select** only.

Note the **Categorydropdown**. It’s showing the options as - Vegetarian, Non-Vegetarian, and Vegan. These are its default options. Let’s change them to what's relevant to Oakry, that is - Vegetables, Bakery, Fruits, Beverages, and Dairy.

1. Open **CategoryDropdown**’s properties modal
2. Set the **Options** field to that shown below
3. Set the **Default Option** to blank
4. Toggle the **Required** field to true

```text
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

The **CategoryDropdown** is now a required field. Click on the **Options** field again. Note that when you put the cursor in the **Options** field, another modal opens up. It has two sections:

* **Expected Data Type** tells you the acceptable input data format/type for this field.
* **Evaluated Value** shows the evaluated value of the field's input in real-time. You can use it to verify against your expected value. This specifically comes in handy when you write JavaScript code in it.

Notice that to set CategoryDropdown's options, you had to carefully copy-paste the values in a text editor. It was cumbersome. You can use JavaScript to simplify that:

1. Open **CategoryDropdown**’s properties
2. Copy-paste the following in its **Options** field: `{ { _.map(['vegetables', 'bakery', 'fruits', 'beverates', 'dairy'], function (category) { return { label: category.toUpperCase(), value: category.toUpperCase() } }) } }`
3. Check the **Evaluated Value**

It worked!  But, what happened here? You used Lodash’s \_.map method to transform an array of strings to the format understandable by the dropdown widget, instead of manually formatting and typing it down.

## Adding other form fields

Let's add a field to accept input for Mrp:

1. Add an [input widget](https://docs.appsmith.com/widget-reference/input)
2. Rename it **MrpInput**
3. Change its **Data Type** to **Number**
4. Add a [text widget](https://docs.appsmith.com/widget-reference/text) next to **MrpInput** 
5. Set its **Text** property to MRP\($\):

The title of the form is a text widget. Let's rename the title from **Form**. to **Add a Product**:

The **AddProductForm** now looks like: \(TODO: Put correct image\)

![](https://lh6.googleusercontent.com/uxUuQhYPkdQQSl0XQRDBR55bmbeJk5cQCVrbD0tuMYwYjQQkY3ARN1OLb5YIUMDIn7NYWYNyGhc8Axqb4OINo2Rrnri0j1VoXMjYozyAN_MX7k2qA-BoktjGbkC4sjSSNigAL8ob)

## Adding regex validations

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
Note that since Appsmith editor reflects change in the app in real-time, you are able to test the changes while building without having to deploy every time.


