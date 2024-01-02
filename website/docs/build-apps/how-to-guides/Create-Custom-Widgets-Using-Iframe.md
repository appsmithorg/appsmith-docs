import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Custom Widgets 

While Appsmith provides an extensive array of built-in widgets for application development, there are instances where your project demands a widget tailored to specific requirements. Appsmith's Custom widgets empower you to integrate unique functionalities with your own code, whether it's a personalized calendar, accordion, or social media widget.

## Configure Custom Widget

1. Drop a [Custom widget](/reference/widgets/custom) and configure its properties according to your specific needs.

2. Click the **Edit Source** button to configure the code for the Custom widget.

<dd>

Within the Custom widget builder, you can add JS, CSS, and HTML code, and the Custom widget is displayed automatically on Appsmith.

*Example*: To create an image carousel(slider) that displays user documents from a Table widget, import the required React libraries and configure the CSS accordingly, like:

<Tabs>
  <TabItem value="html" label="HTML" default>

```html
<!-- no need to write html, head, body tags, it is handled by the widget -->
<link href="
https://cdn.jsdelivr.net/npm/react-responsive-carousel@3.2.23/lib/styles/carousel.min.css
" rel="stylesheet">
<div id="root"></div>
```

  </TabItem>
  <TabItem value="css" label="CSS">



```css
#container {
  display: flex !important;
  justify-content: center;
  align-items: center;
  width: 100vw !important;
  height: 150vh;
}

body {
  width: 100vw;
  height: 100vh;
}
```
  </TabItem>
  <TabItem value="jss" label="JS">



```js
import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import reactDom from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';
import { Carousel } from 'https://cdn.jsdelivr.net/npm/react-responsive-carousel@3.2.23/+esm';

// Styles for the carousel content
const contentStyle = {
  margin: 0,
  maxHeight: 'calc(var(--appsmith-ui-height) * 1px)',
  maxWidth: "calc(var(--appsmith-ui-width) * 1px)",
  display: "block",
  width: "100vw",
  height: "100vh",
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

// Rendering the App component on Appsmith's root element
appsmith.onReady(() => {
  reactDom.render(<App />, document.getElementById("root"));
});
```
  </TabItem>
</Tabs>



</dd>

3. To pass data from Appsmith to Custom widget, use the **Default model** property. You can bind data from queries or widgets using mustache bindings `{{}}`.

<dd>

*Example:* For the image slider, add code that captures selected row data, including document URL and ID, like:


```js
{
  "images": [
    "{{tbl_docs.selectedRow.doc_type_passport}}",
    "{{tbl_docs.selectedRow.doc_type_dl}}",
    "{{tbl_docs.selectedRow.doc_type_bank}}"
  ],
  "id": [
    "{{tbl_docs.selectedRow.id}}"
]}
```

</dd>

4. To retrieve the data provided to the **Default model** property, use `appsmith.model.propertyName` within the JavaScript section of the Custom widget builder.

 
<dd>

*Example:* For the image slider, create function that uses the React Carousel component to render images dynamically from Appsmith's data model, with specific styling. 

```js
...
  background: '#364d79',
};

function App() {
  return (
    <Carousel showThumbs={false} showStatus={false} onChange={(d) => {}}>
        // highlight-next-line
      {appsmith.model.data.map((d, index) => {
        // Rendering each image in the carousel
        return (
          <img key={index} src={d} style={contentStyle} />
        );
      })}
    </Carousel>
  );
}

appsmith.onReady(() => {
...

// To access the data in the javascript editor use appsmith.model.property-name.
//To access data in CSS use var(--appsmith-model-{property-name}
```


</dd>


5. To pass data from the Custom widget to Appsmith, use the `updateModel` property within your JS code to save or update data. Once the model is updated, you can retrieve the value using `{{Custom.model.propertyname}}` within any widget or query.

<dd>

*Example:*

```js
//JS
...
Function App() {
	return (
		<Carousel showThumbs={false} showStatus={false} onChange={(d) => {
    // highlight-next-line
		appsmith.updateModel({selectedIndex: d });
	}}>
		{appsmith.model.data.map((d) => {
...
// Inside the Custom Widget Builder
appsmith.updateModel({ "image": imageUrl });
```

To display data in a Text widget, set its **Text** property to:

```js
{{Custom1.model.selectedIndex}}
```

</dd>


6. For widget interaction, you can create events using the **Add Event** button on the Custom widget and use the `triggerEvent` property inside the Custom widget builder.

<dd>

*Example:* To add a button within the Custom widget that, when clicked, executes a query, use the following code:

<Tabs>
  <TabItem value="js" label="JS" default>

```js
// Example: Handle button click event
const buttonElement = document.getElementById("requestChangeButton");
buttonElement.addEventListener("click", () => {
   appsmith.triggerEvent("onRequestchange");
});
```

  </TabItem>
  <TabItem value="html" label="HTML">

```html
<!-- Button element -->
<button id="requestChangeButton">Request Change</button>
```

  </TabItem>
  <TabItem value="css" label="CSS">

```css
/* Style for the button */
button {
  margin-top: 10px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
``` 

  </TabItem>
</Tabs>

In the Custom widget, create a new event with the same name as defined in the function, and configure it to execute an action. 


<div style={{ position: "relative", paddingBottom: "40.52%", height: "0", width: "82%" }}>
  <iframe src="https://demo.arcade.software/xiVATpXaTSOokxAncvLS?embed" frameBorder="0" loading="lazy" allowFullScreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data"></iframe>
</div>


</dd>


## Sample apps

* Custom Calendar App
* Signature Pad App
* Image Slider App

