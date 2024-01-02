import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Custom Widgets 

While Appsmith provides an extensive array of built-in widgets for application development, there are instances where your project demands a widget tailored to specific requirements. Appsmith's Custom widgets empower you to integrate unique functionalities with your own code, whether it's a personalized calendar, accordion, or social media widget.

## Configure Custom Widget

1. Drop a [Custom widget](/reference/widgets/custom).

2. Click the **Edit Source** button to configure the code according to your requirements.

<dd>

Within the Custom widget builder, you can add JS, CSS, and HTML code, and the Custom widget is displayed automatically on Appsmith.

</dd>

3. To pass data from Appsmith to Custom widget, use the **Default model** property. You can bind data from queries or widgets using mustache bindings `{{}}`.

<dd>

*Example:* To create an image slider that displays user documents from a Table widget, add code that captures selected row data, including document URL and ID, like:


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

```js
// Accessing a specific property 
{{appsmith.model.data}}

//To access data in CSS use var(--appsmith-model-{property-name}
```
</dd>

4. Click the **Edit Source** button to configure your CSS, HTML, and JS code according to your requirements.



<dd>

*Example:* If you want to create an image slider that displays user documents from a Table widget, add:

<Tabs>
  <TabItem value="html" label="HTML" default>

```html
<!-- no need to write html, head, body tags, it is handled by the widget -->
<link href="
https://cdn.jsdelivr.net/npm/react-responsive-carousel@3.2.23/lib/styles/carousel.min.css
" rel="stylesheet">
<div id="root"></div>

<!-- Button element -->
<button id="requestChangeButton">Request Change</button>
```

  </TabItem>
  <TabItem value="css" label="CSS">

    hft

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
  <TabItem value="jss" label="JS">

thht

```js
import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import reactDom from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';
import { Carousel } from 'https://cdn.jsdelivr.net/npm/react-responsive-carousel@3.2.23/+esm'


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

function App() {
	const onChange = (currentSlide) => {
		appsmith.triggerEvent("onSliderChange");
		appsmith.updateModel({
			"updated from widget builder": Math.random()
		})
	};
	
	return (
		<Carousel showThumbs={false} showStatus={false} onChange={(d) => {
		appsmith.updateModel({selectedIndex:d });
		appsmith.triggerEvent("onItemChange");
	}}>
		{appsmith.model.data.map((d) => {
					return (
<img src={d} style={contentStyle} />
						)
		})}
    </Carousel>
	);
}

appsmith.onReady(() => {
  reactDom.render(<App />, document.getElementById("root"));
  
  // Example: Handle button click event
  const buttonElement = document.getElementById("requestChangeButton");
  buttonElement.addEventListener("click", () => {
    appsmith.triggerEvent("onRequestChange");
  });
});
```
  </TabItem>
</Tabs>



With this, the Custom widget is displayed on your app.


</dd>

5. To pass data from the Custom widget to Appsmith, use the `updateModel` property within your JS code to save or update data. Once the model is updated, you can retrieve the value using `{{Custom.model.propertyname}}` within any widget or query.

<dd>

*Example:*

```js
// Inside the Custom Widget Builder
appsmith.updateModel({ "image": imageUrl });
```

To display data in a Text widget, set its **Text** property to:

```js
{{Custom1.model.image}}
```

</dd>


6. To Trigger events ou can create events by clicking on the **Add Event** button, which allows you to trigger actions based on events inside the Custom widget.


<dd>

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/YJzU2ki4ykUA6hDsGT6c?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. Create a function inside the custom widget widget builder using the `triggerEvent` property, which allows you to


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

