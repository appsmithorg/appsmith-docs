import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Custom Widgets 

This guide shows how to create a Custom widget using React.


While Appsmith provides an extensive array of built-in widgets for application development, there are instances where your project demands a widget tailored to specific requirements. Appsmith's Custom widget allows you to integrate unique functionalities with your HTML, CSS, and JavaScript code, whether it's a personalized calendar, accordion, or social media widget.

<VideoEmbed host="youtube" videoId="KUTBWhu_E5Y" title="How To Building an Image Gallery with React.js" caption="Building an Image Gallery with React.js"/>

## Configure Custom Widget

1. Drop a [Custom widget](/reference/widgets/custom) on the canvas.

2. Click the **Edit Source** button on the property pane to configure the code for the Custom widget. Within the Custom widget builder, you can add JS, CSS, and HTML code, and the Custom widget is reloded automatically on the preview section on the left of the Custom widget Builder.


3. In the [Custom widget builder](/reference/widgets/custom#custom-widget-builder), remove the default component code in HTML, CSS, and JS editors, and import the required libraries.

<dd>

To import a third-party library, you have two options: UMD and ESM. Use trusted CDN providers like [jsDelivr](https://www.jsdelivr.com/) or [UNPKG](https://unpkg.com/) for library imports.

    * For UMD, include the library with a script tag in the HTML file:

      ```html
      <script src="link-to-the-UMD-file"></script>
      ```

    * For ESM, use an import statement at the top of the JavaScript file:

      ```js
      import ThirdPartyComponent from "link-to-the-ESM-file";
      ```
</dd>

4. Add the code for the Custom widget within the relevant tabs based on your library requirements.

<dd>


:::warning
* Wait for the parent application to be ready before accessing the model or triggering events in the custom widget. Use [appsmith.onReady](/reference/widgets/custom#onready) and pass a handler function, which is triggered when the parent application is ready, initiating the rendering of your component from this function.

* For dynamic updates in response to model changes, such as new data from a query, use [appsmith.onModelChange](/reference/widgets/custom#onmodelchange). Pass a handler to this function, and it gets invoked each time the model undergoes a modification.
:::

*Example*:  Image carousel using the [React image gallery](https://www.jsdelivr.com/package/npm/react-image-gallery) library, import the necessary libraries and render the app function accordingly.

<Tabs>
  <TabItem value="html" label="HTML">

```html
<!-- no need to write html, head, body tags, it is handled by the widget -->
<div id="root"></div>

<!-- Including the stylesheet for the React Image Gallery from the specified CDN. -->
 
<link href="
https://cdn.jsdelivr.net/npm/react-image-gallery@1.3.0/styles/css/image-gallery.min.css
" rel="stylesheet">
```

  </TabItem>
  <TabItem value="jss" label="JS" default>



```js
// Importing necessary React libraries
import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm'
import reactDom from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm'

// Importing the ImageGallery component from the specified CDN
import ImageGallery from 'https://cdn.jsdelivr.net/npm/react-image-gallery@1.3.0/+esm';

// App component using the ImageGallery with the specified images
function App() {
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

## Pass data from Appsmith to Custom widget

Follow these steps to pass parameters from Appsmith to the Custom widget:

1. To pass data from Appsmith to the Custom widget, use the **Default model** property of Custom widget. You can bind data from queries or widgets using mustache bindings `{{}}`.

<dd>

*Example:* For the image slider, add code that captures image or document URL, like:


```js
{
  "data": [
    "https://img.freepik.com/premium-vector/vector-illustration-open-passport-template-document-travel-concept-passport-sample_212168-95.jpg?w=996",
    "https://img.freepik.com/free-vector/flat-design-driving-license-template_23-2149944210.jpg?w=1060&t=st=1680096311~exp=1680096911~hmac=2ad65c94c28bc6db27104d8e791069f04af44763e5c07bafeddea1a89ec6dc5b",
    "https://as1.ftcdn.net/v2/jpg/03/45/67/40/1000_F_345674072_QwzzCNH6PElHQxsow7DtAr50TyGmcYGs.jpg"
  ]
}

```

To dynamically add data, whether from a query or a widget, you can use something like:


```js
{"data": [
   {{tbl_users.selectedRow.passport}},
  // Add more entries as needed
]}
```


</dd>

2. To retrieve the data provided to the **Default model** property, use `appsmith.model.propertyName` within the JavaScript section of the Custom widget builder.

 
<dd>

*Example:* For the image carousel, use a map function to dynamically render images sourced from the **Default model** property.

```js

function App() {
  // Fetching image URLs 
  // highlight-next-line
  const imageUrls = appsmith.model.data;

  // Generating dynamic images using the map function
  // highlight-next-line
  const images = imageUrls.map((url, index) => ({
    // highlight-next-line
    original: url,
    // highlight-next-line
    thumbnail: url
    // highlight-next-line
  }));

  // Returning the ImageGallery component with the generated images
  return <ImageGallery.default items={images} />;
}

//To access data in CSS use var(--appsmith-model-{property-name}
```

</dd>

## Pass data from Custom widget to Appsmith


Follow these steps to pass parameters from the Custom widget to Appsmith:


1. To pass data from the Custom widget to Appsmith, use the `updateModel` property within your JS code to save or update data. Once the model is updated, you can retrieve the value using `{{Custom.model.propertyname}}` within any widget or query.

<dd>

*Example*: To retrieve the index of the current slide, add an `onSlide` event handler(provided by the library), and use `updateModel` to store the selected index, like: 

```js
//JS
function App() {
  const imageUrls = appsmith.model.data;

  // Generating dynamic images using the map function
  const images = imageUrls.map((url, index) => ({
    original: url,
    thumbnail: url,
  }));

// highlight-next-line
  const _onSlide = (index) => {
    // You can perform any actions related to sliding here
    // highlight-next-line
    console.log("Slid to index", index);
    // highlight-next-line
    appsmith.updateModel({ selectedIndex: index });
    // highlight-next-line
  };

  return (
    // highlight-next-line
    <ImageGallery.default items={images} showIndex={true} onSlide={_onSlide} />
  );
}

```

To display data in a Text widget, set its **Text** property to:

```js
{{ImageCarousel.model.selectedIndex}}

//ImageCarousel, name of the custom widget 
```

</dd>


2. For widget interaction, you can create events using the **Add Event** button on the Custom widget and use the `triggerEvent` property inside the Custom widget builder.

<dd>

*Example:* To trigger an action on Appsmith when the image is slid, use the following code:

<Tabs>
  <TabItem value="js" label="JS" default>

```js
const _onSlide = (index) => {
    // You can perform any actions related to sliding here
    console.log("Slid to index", index);
      // highlight-next-line
    appsmith.triggerEvent("onSlide");
    appsmith.updateModel({ selectedIndex: index });
  };
```

  </TabItem>
</Tabs>

In the Custom widget, create a new event with the same name `(i.e onSlide)` as defined in the function, and configure it to execute an action. 


<div style={{ position: "relative", paddingBottom: "45.52%", height: "0", width: "82%" }}>
  <iframe src="https://demo.arcade.software/4gK4YuptByPSJPeB0cda?embed" frameBorder="0" loading="lazy" allowFullScreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data"></iframe>
</div>

</dd>

3. To customize your widget's appearance, configure the CSS code, and use Appsmith's [CSS API](/reference/widgets/custom#css-api) to dynamically adjust styles based on the app's theme.


<dd>


<Tabs>

  <TabItem value="css" label="CSS">

```css
#root {
        // highlight-next-line
  background-color: var(--appsmith-theme-primaryColor);
  padding: 20px; 
        // highlight-next-line
  border-radius: var(--appsmith-theme-borderRadius);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
}
``` 

  </TabItem>
</Tabs>

See the sample app for the [Image carousel](https://app.appsmith.com/app/untitled-application-1/page1-65a77eecc7165278ae63151b).




</dd>


## Sample apps

* [Image Annotator](https://app.appsmith.com/app/image-annotator/image-labeler-react-659fb55bf645785f6fc6f9c9)
* [Data grid widget](https://app.appsmith.com/app/data-grid/page1-6597ff5559aa5450e0eb4eb9)
* [Signature Pad widget](https://app.appsmith.com/app/signature-pad/page1-6597af1e21e083222a47e366)


