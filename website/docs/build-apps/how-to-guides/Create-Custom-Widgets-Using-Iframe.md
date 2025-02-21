import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Image Gallery using Custom Widget

Appsmith provides different built-in widgets, but sometimes your application requires to add more capabilities. The Custom widget provided by Appsmith allows you to add unique features using your own HTML, CSS, and JavaScript, such as a custom calendar, accordion, or social media widget. 

This page provides step-by-step instructions on creating an image gallery or slider using the [Custom widget](/reference/widgets/custom).



## Prerequisites

- Basic knowledge of [React](https://react.dev/), including JSX and component creation.
- Basic knowledge of UMD and [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) module formats for importing third-party libraries.


<VideoEmbed host="youtube" videoId="KUTBWhu_E5Y" title="How To Building an Image Gallery with React.js" caption="Building an Image Gallery with React.js"/>

## Configure Custom Widget

<dd>



<div style={{ position: "relative", paddingBottom: "calc(50.52% + 41px)", height: 0, width: "100%" }}>
  <iframe
    src="https://demo.arcade.software/gWn3T07t0tVz1cZU5kXb?embed"
    frameBorder="0"
    loading="lazy"
    webkitAllowFullScreen
    mozAllowFullScreen
    allowFullScreen
    allow="fullscreen"
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    title="Appsmith | Connect Data"
  />
</div>



</dd>

1. Drop a [Custom widget](/reference/widgets/custom) on the canvas.

2. Click the **Edit Source** button in the property pane to open the Custom Widget Builder.

3. In the [Custom widget builder](/reference/widgets/custom#custom-widget-builder), remove the default component code in HTML, CSS, and JS editors.

4. For the image gallery, import the required libraries using the ESM format. Use trusted CDN providers like [jsDelivr](https://www.jsdelivr.com/) or [UNPKG](https://unpkg.com/) for library imports.

<dd>

To create and render Custom Widget components, import React and ReactDOM, which are essential for building interactive UIs (see [React Documentation](https://react.dev/)), and use the [React Image Gallery library](https://www.npmjs.com/package/react-image-gallery) for an intuitive, customizable gallery interface with features like autoplay and thumbnails.

<Tabs>
  <TabItem value="js" label="JS" default>

```js
import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import reactDom from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';
import ImageGallery from 'https://cdn.jsdelivr.net/npm/react-image-gallery@1.3.0/+esm';
```
  </TabItem>
</Tabs>

</dd>

5. Click on the **HTML** tab in the code editor to add styles for the image gallery.

<dd>

For styling the image gallery, you need to include the CSS file provided by the `react-image-gallery` library. This ensures the gallery's default appearance is correctly rendered.

Add the following `<link>` tag to include the library’s CSS file directly from a CDN:

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
</Tabs>



</dd>


6. Create an array of image objects to display in the gallery. You can use static image URLs or display images dynamically using a query. This array will be passed to the App component, which renders the image gallery.


<dd>

<Tabs>
  <TabItem value="js" label="JS" default>
   

```js
// Import the required library

// Define the App component with the image gallery
function App() {
  // Array of image objects for the carousel (Static Images Example)
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
    },
  ];

  // Render the ImageGallery component with the images
  return <ImageGallery.default items={images} />;
}
```
  </TabItem>
</Tabs>

</dd>

7. To ensure the App component is rendered only after the application is fully loaded, use the [appsmith.onReady()](/reference/widgets/custom#onready) method. This method acts as a listener that waits for the parent application to be fully initialized before triggering actions, such as rendering the Image gallery.

<dd>

:::warning
* Wait for the parent application to be ready before accessing the model or triggering events in the custom widget. Use [appsmith.onReady](/reference/widgets/custom#onready) and pass a handler function, which is triggered when the parent application is ready, initiating the rendering of your component from this function.

* For dynamic updates in response to model changes, such as new data from a query, use [appsmith.onModelChange](/reference/widgets/custom#onmodelchange). Pass a handler to this function, and it gets invoked each time the model undergoes a modification.
:::

<Tabs>
  <TabItem value="js" label="JS" default>

```js
function App() {
  // Image gallery code
}

//Render the App component into the container after the parent app is ready
appsmith.onReady(() => {
  ReactDOM.render(<App />, document.getElementById("widget-container"));
});
```



  </TabItem>
</Tabs>

</dd>



## Pass data from Appsmith to Custom widget

Follow these steps to pass parameters from Appsmith to the Custom widget:


<div style={{ position: "relative", paddingBottom: "calc(50.52% + 41px)", height: 0, width: "100%" }}>
  <iframe
    src="https://demo.arcade.software/RuWBzSnHKfN9KcdqXj2b?embed"
    frameBorder="0"
    loading="lazy"
    webkitAllowFullScreen
    mozAllowFullScreen
    allowFullScreen
    allow="fullscreen"
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    title="Appsmith | Connect Data"
  />
</div>



1. To pass data from Appsmith to the Custom widget, use the **Default model** property of Custom widget. You can bind data from queries or widgets using mustache bindings `{{}}`.

<dd>

For the image gallery, add code that captures image or document URL, like:


```js
{
  "data": [
    "https://img.freepik.com/premium-vector/vector-illustration-open-passport-template-document-travel-concept-passport-sample_212168-95.jpg?w=996",
    "https://img.freepik.com/free-vector/flat-design-driving-license-template_23-2149944210.jpg?w=1060&t=st=1680096311~exp=1680096911~hmac=2ad65c94c28bc6db27104d8e791069f04af44763e5c07bafeddea1a89ec6dc5b",
    "https://as1.ftcdn.net/v2/jpg/03/45/67/40/1000_F_345674072_QwzzCNH6PElHQxsow7DtAr50TyGmcYGs.jpg"
  ]
}


//To dynamically add data, you can use something like:
/*
{"data": [
   {{tbl_users.selectedRow.passport}},
  // Add more entries as needed
]}
*/
```


</dd>

2. To retrieve the data provided to the **[Default model](/reference/widgets/custom#default-model)** property, use `appsmith.model` inside Custom widget builder.

<dd>

For the image gallery, use a `map` function to dynamically render images sourced from the **Default model** property.

<Tabs>
  <TabItem value="js" label="JS" default>

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

  </TabItem>
</Tabs>


</dd>

## Pass data from Custom widget to Appsmith


Follow these steps to pass parameters from the Custom widget to Appsmith:


1. To pass data from the Custom widget to Appsmith, use the [updateModel](/reference/widgets/custom#updatemodel) property within your JS code to save or update data. Once the model is updated, you can retrieve the value using `{{Custom.model.propertyname}}` within any widget or query.

<dd>

To retrieve the index of the current slide, add an `onSlide` event handler(provided by the library), and use `updateModel` to store the selected index, like: 

<Tabs>
  <TabItem value="js" label="JS" default>

 ```js
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
  </TabItem>
</Tabs>


To display data in a Text widget, set its **Text** property to:

```js
{{ImageCarousel.model.selectedIndex}}

//ImageCarousel, name of the custom widget 
```

</dd>


2. For widget interaction, you can create events using the **Add Event** button on the Custom widget and use the `triggerEvent` property inside the Custom widget builder.

<dd>

To trigger an action on Appsmith when the image is slid, use the following code:

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

3. In the Custom widget, create a new event with the same name `(i.e onSlide)` as defined in the function, and configure it to execute an action. 


<div style={{ position: "relative", paddingBottom: "45.52%", height: "0", width: "82%" }}>
  <iframe src="https://demo.arcade.software/4gK4YuptByPSJPeB0cda?embed" frameBorder="0" loading="lazy" allowFullScreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data"></iframe>
</div>

</dd>


## Customize appearance

To customize your widget's appearance, configure the CSS code, and use Appsmith's [CSS API](/reference/widgets/custom#css-api) to dynamically adjust styles based on the app's theme.

You can apply the app's primary color and other theme-specific styles to your Custom widget:

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

In this code, `var(--appsmith-theme-primaryColor)` uses the primary color defined in the app’s theme, and `var(--appsmith-theme-borderRadius)` adjusts the border radius according to the theme settings.

See the sample app for the [Image gallery](https://app.appsmith.com/app/untitled-application-1/page1-65a77eecc7165278ae63151b).




</dd>

## Sample apps

* [Image Annotator](https://app.appsmith.com/app/image-annotator/image-labeler-react-659fb55bf645785f6fc6f9c9)
* [Data grid widget](https://app.appsmith.com/app/data-grid/page1-6597ff5559aa5450e0eb4eb9)
* [Signature Pad widget](https://app.appsmith.com/app/signature-pad/page1-6597af1e21e083222a47e366)


