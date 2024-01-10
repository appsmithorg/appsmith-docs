import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Custom Widgets 

While Appsmith provides an extensive array of built-in widgets for application development, there are instances where your project demands a widget tailored to specific requirements. Appsmith's Custom widget allows you to integrate unique functionalities with your HTML, CSS, and JavaScript code, whether it's a personalized calendar, accordion, or social media widget.

## Configure Custom Widget

1. Drop a [Custom widget](/reference/widgets/custom) on the canvas.

2. Click the **Edit Source** button to configure the code for the Custom widget. Within the Custom widget builder, you can add JS, CSS, and HTML code, and the Custom widget is displayed automatically on Appsmith.


3. In the [Custom widget builder](/reference/widgets/custom#custom-widget-builder), select your template (e.g., Vue, React), and then import the required library.


<dd>

To import frameworks like React, add the required import statements at the beginning of your JavaScript file. For example:

```js
import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm'
import reactDom from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm'
```

To import a third-party library, you have two options: UMD and ESM. Use trusted CDN providers like [jsDelivr](https://www.jsdelivr.com/) or [UNPKG](https://unpkg.com/) for library imports.

* For UMD, include the library with a script tag in the HTML file:

<dd>
```html
<script src="link-to-the-UMD-file"></script>
```
</dd>

* For ESM, use an import statement at the top of the JavaScript file:

<dd>

```js
import ThirdPartyComponent from "link-to-the-ESM-file";
```

</dd>

</dd>

4. Add your Custom widget code within the relevant tabs. 

<dd>

Configure the rendering logic in JavaScript by calling the respective function or code inside the [**onReady**](/reference/widgets/custom#onready) method. This ensures that your Custom widget is properly rendered when the app is loaded.


If you want to dynamically update the `model` based on data changes, render the app inside the [**onModelChange**](/reference/widgets/custom#onmodelchange) method to reflect updates dynamically.

*Example*:  To create an image carousel using the [React image gallery](https://www.jsdelivr.com/package/npm/react-image-gallery) library, import the necessary libraries and render the app function accordingly.

<Tabs>
  <TabItem value="html" label="HTML" default>

```html
<!-- no need to write html, head, body tags, it is handled by the widget -->
<div id="root"></div>

<!-- Including the stylesheet for the React Image Gallery from the specified CDN. -->
 
<link href="
https://cdn.jsdelivr.net/npm/react-image-gallery@1.3.0/styles/css/image-gallery.min.css
" rel="stylesheet">
```

  </TabItem>
  <TabItem value="jss" label="JS">



```js
// Importing necessary React libraries
import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm'
import reactDom from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm'

// Importing the ImageGallery component from the specified CDN
import ImageGallery from 'https://cdn.jsdelivr.net/npm/react-image-gallery@1.3.0/+esm';

// Array of image objects for the carousel
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  }
];

// App component using the ImageGallery with the specified images
function App() {
	return <ImageGallery.default items={images} />;
}

// Rendering the App component when widget is ready
appsmith.onReady(() => {
	reactDom.render(<App />, document.getElementById("root"));
});
```
  </TabItem>
</Tabs>



</dd>

5. To pass data from Appsmith to Custom widget, use the **Default model** property. You can bind data from queries or widgets using mustache bindings `{{}}`.

<dd>

*Example:* For the image slider, add code that captures selected row data, including document URL and ID, like:


```js
{
  "data": [
    "{{tbl_docs.selectedRow.doc_type_passport}}",
    "{{tbl_docs.selectedRow.doc_type_dl}}",
    "{{tbl_docs.selectedRow.doc_type_bank}}"
  ],
  "id": [
    "{{tbl_docs.selectedRow.id}}"
]}
```

</dd>

6. To retrieve the data provided to the **Default model** property, use `appsmith.model.propertyName` within the JavaScript section of the Custom widget builder.

 
<dd>

*Example:* For the image slider, create a function that uses the React Carousel component to render images dynamically from Appsmith's data model, with specific styling. 

```js
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

// To access the data in the javascript editor use appsmith.model.property-name..
//To access data in CSS use var(--appsmith-model-{property-name}
```


</dd>


7. To pass data from the Custom widget to Appsmith, use the `updateModel` property within your JS code to save or update data. Once the model is updated, you can retrieve the value using `{{Custom.model.propertyname}}` within any widget or query.

<dd>

*Example:*

```js
//JS
Function App() {
	return (
		<Carousel showThumbs={false} showStatus={false} onChange={(d) => {
    // highlight-next-line
		appsmith.updateModel({selectedIndex: d });
	}}>
		{appsmith.model.data.map((d) => {...
```

To display data in a Text widget, set its **Text** property to:

```js
{{Custom1.model.selectedIndex}}
```

</dd>


8. For widget interaction, you can create events using the **Add Event** button on the Custom widget and use the `triggerEvent` property inside the Custom widget builder.

<dd>

*Example:* To add a button within the Custom widget that, when clicked, executes a query, use the following code:

<Tabs>
  <TabItem value="js" label="JS" default>

```js
// Example: Handle button click event
const buttonElement = document.getElementById("requestChangeButton");
buttonElement.addEventListener("click", () => {
      // highlight-next-line
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


<div style={{ position: "relative", paddingBottom: "45.52%", height: "0", width: "82%" }}>
  <iframe src="https://demo.arcade.software/xiVATpXaTSOokxAncvLS?embed" frameBorder="0" loading="lazy" allowFullScreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data"></iframe>
</div>


</dd>


## Sample apps

* Custom Calendar App
* Signature Pad App
* Image Slider App

