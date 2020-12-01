# Adding form widgets

You have an empty form with a  Submit and a Reset button. Let’s add some fields to it to take user input:

1. Drag and drop the [input widget](https://docs.appsmith.com/widget-reference/input) into the form
2. Rename the input widget to ProductNameInput

Your form will look like below:

![](https://lh3.googleusercontent.com/Tk7BK67XSWBJrxRbDT96FOdenI_3cIYAh-tqxDDURALgEwXM8xWCE2FbGK0nFXTA8rO67RW-SeZQx5Fl5pXjO-gGQbnlRS3xhXIfxgQnZQDer3P24M5GkuKL2I2BaeqhOfzidQ3_)

This looks incomplete without a text label on its left. Let’s fix that:

1. Drag and drop the [text widget](https://docs.appsmith.com/widget-reference/text) next to the left of ProductNameInput
2. Rename it to ProductNameText
3. You’ll see the text displayed as Label on ProductNameInput’s
4. Update the Text property from the properties modal to Product Name: to change the display text

![](https://lh4.googleusercontent.com/juoeTjj_IRV360wboG0iCuTIME0WgGhwhDHQ3RC6GwfKValSwb8oeYymHabyfO67wQKgyQ3o4gj-XOW3XVxN8P-N1_s5659GvUwVm60v66odwusqC9wBnuU3YANT9ZH4bdwY8JW-)

Let’s go back to ProductNameInput. 

1. Open its properties
2. Set Data Type to Text 
3. Toggle Required field to Green

The Data Type property sets the allowed data-type of input. When set to Text, it allows only Text input \(Todo: what all does text include?\). Read [this](https://docs.appsmith.com/widget-reference/input#properties) to find out all supported values.

The Required field makes the input to the field mandatory. You can toggle between true and false.  


Let’s add other fields in the form.

To enable users to choose a Category in the form:

1. Drag-drop a dropdown widget
2. Rename it to CategoryDropdown
3. Set its Select Type to Single Select
4. Add a text widget next to CategoryDropdown 
5. Set its Text property to Category:

By setting the Selection Type to Single Select, you allow the user to select only one value from the dropdown. You can alternatively configure a multi-select dropdown by choosing Multi Select from Selection Type. However, for the purpose of the tutorial, choose Single Select only.  


Note the Category dropdown. It’s showing the options - Vegetarian, Non-Vegetarian, and Vegan. These are its default options. Let’s change them to - Vegetables, Bakery, Fruits, Beverages, and Dairy.

1. Open CategoryDropdown’s properties modal
2. Set the Options field to that shown below
3.  Set the Default Option to blank
4. Toggle the Required field to true

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

The CategoryDropdown is now a required field. Click on the Options field again. Note that when you put the cursor in the input field, another modal opens up. It has two sections:

* Expected Data Type tells you the acceptable input data format / type for this field.
* Evaluated Value shows the evaluated value of the field's input in real time. This specifically comes handy in verifying when you write JavaScript code in it.

To set CategoryDropdown's options, you had to carefully copy-paste the values in a text-editor. You can use JavaScript to simplify that. Try this:

1. Open CategoryDropdown’s properties
2. Click on Options
3. Paste the following  {{ \_.map\(\['vegetables', 'bakery', 'fruits', 'beverates', 'dairy'\], function\(category\) { return { label: category.toUpperCase\(\), value: category.toUpperCase\(\) } }\) }}
4. Check the Evaluated Value. Looks correct. 
5. Click outside the modal

It worked! You used Lodash’s \_.map method to transform an array of options to the format understandable by the dropdown widget, instead of manually formatting and typing it down.  


Let's add a new field to mark whether the new product will be listed:

1. Add a checkbox widget
2. Rename it to IsListedCheckbox
3. Change its Label value from Label to Yes
4. Set the Default Selected toggle to False

Let's add a field to accept input for Mrp:

1. Add an input widget
2. Rename it to MrpInput
3. Change its Data Type to Number
4. Add a text widget next to MrpInput 
5. Set its Text property to MRP\($\):

The heading of the form is Form. Let's change it:

1. Note that the heading is a text widget
2. Change its text property to Add a Product:

The AddProductForm page now looks like: TODO: Put correct image

![](https://lh6.googleusercontent.com/uxUuQhYPkdQQSl0XQRDBR55bmbeJk5cQCVrbD0tuMYwYjQQkY3ARN1OLb5YIUMDIn7NYWYNyGhc8Axqb4OINo2Rrnri0j1VoXMjYozyAN_MX7k2qA-BoktjGbkC4sjSSNigAL8ob)

