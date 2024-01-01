import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Custom Widgets 

While Appsmith provides an extensive array of built-in widgets for application development, there are instances where your project demands a widget tailored to specific requirements. Appsmith's Custom widgets empower you to integrate unique functionalities with your own code, whether it's a personalized calendar, accordion, or social media widget.

## Configure Custom Widget

1. Drag a [Custom widget](/reference/widgets/custom).

2. To pass data from Appsmith to Custom widget, use the **Default model** property. You can bind data from queries or widgets using mustache bindings `{{}}`.

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


3. To access the data passed into the **Default model** property, you can use:

<dd>

```js
// Accessing a specific property 
{{appsmith.model.images}}
```
</dd>

4. Click the **Edit Source** button to configure your CSS, HTML, and JS code according to your requirements.



<dd>

*Example:* If you want to create an image slider that displays user documents from a Table widget, add:

<Tabs>
  <TabItem value="html" label="HTML" default>

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>User Documents</title>
</head>

<body>
  <div id="root"></div>
  <script type="module" src="app.js"></script>
</body>

</html>
```

  </TabItem>
  <TabItem value="css" label="CSS">
    
  </TabItem>
  <TabItem value="jss" label="JS">
    
  </TabItem>
</Tabs>



With this, the Custom widget is displayed on your app.


</dd>

5. To pass data from the Custom widget to Appsmith, use the `updateModel` property within your JS code to save or update data. Once the model is updated, you can retrieve the value using `{{Custom.model.propertyname}}` within any widget or query.

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


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/YJzU2ki4ykUA6hDsGT6c?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. Create a function inside the custom widget widget builder using the `triggerEvent` property, which allows you to

<dd>

*Image slider Example:* 


```js
const handleChangeRequest = () => {
  const imageUrl = appsmith.model.images[currentIndex];
  appsmith.updateModel({ "image": imageUrl });
  appsmith.triggerEvent('onChange');
};
```
 The above function updates the Appsmith model with the current image URL and triggers the **onChange** event.

</dd>

2. In the Custom widget, create a new event with the same name as defined in the function, and configure it to execute an action. 



## Sample apps

* Custom Calendar App
* Signature Pad App
* Image Slider App

