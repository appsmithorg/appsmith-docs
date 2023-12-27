import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Custom Widgets 

While Appsmith provides an extensive array of built-in widgets for application development, there are instances where your project demands a widget tailored to specific requirements. Appsmith's Custom widgets empower you to integrate unique functionalities with your own code, whether it's a personalized calendar, accordion, or social media widget.


## Prerequisites

* A [Custom widget](/reference/widgets/custom).
* Familiarity with JS, HTML, and CSS for custom code implementation.



## Pass Data to Custom Widget

To pass data from Appsmith to Custom widget, use the **Default model** property. You can bind data from queries or widgets using mustache bindings `{{}}`.

<dd>

*Example:* If you want to create an image slider that displays user documents from a Table widget, add:

```js
{
  "images": [
    "{{Docs_Table.selectedRow.doc_type_passport}}",
    "{{Docs_Table.selectedRow.doc_type_dl}}",
    "{{Docs_Table.selectedRow.doc_type_bank}}"
  ],
  "id": [
    "{{Docs_Table.selectedRow.id}}"
]}
```

The above code captures selected row data (document URL and ID) from the Table.

</dd>


## Configure Custom Widget

1. Click the **Edit Source** button to configure the code for the Custom widget.

2. To access the data passed into the **Default model** property, you can use:

<dd>

```js
// Accessing a specific property 
{{appsmith.model.images}}
```
</dd>

3. Add your CSS, HTML, and JS code according to your requirements.







## Pass Data from Custom Widget
 
You can use the `updateModel` property within JavaScript code to save or update data. Once the model is updated, you can retrieve the value using `{{Custom.model.propertyname}}` within any widget or query.

<dd>

*Example:*

```js
appsmith.updateModel({ "image": imageUrl });
```

To display data in a Text widget, set its **Text** property to:

```js
{{Custom1.model.image}}
```

</dd>


## Trigger events
 
You can create events by clicking on the **Add Event** button, which allows you to trigger actions based on events inside the Custom widget.


<dd>

*Example:* In the context of the same image slider,  if you want to execute an email query, when a button is clicked. 

```js
const handleChangeRequest = () => {
  const imageUrl = appsmith.model.images[currentIndex];
  appsmith.updateModel({ "image": imageUrl });
  appsmith.triggerEvent('onChange');
};
```
 The above function updates the Appsmith model with the current image URL and triggers the **onChange** event.

 Now, create an event called **onChange** and configure it to execute the query. Use `{{Custom1.model.images}}` to inform the user that this image requires an update.


</dd>


## Sample apps

* Custom Calendar App
* Signature Pad App
* Image Slider App

