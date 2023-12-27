import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Custom Widgets 

While Appsmith provides an extensive array of built-in widgets for application development, there are instances where your project demands a widget tailored to specific requirements. Appsmith's Custom widgets empower you to integrate unique functionalities with your own code, whether it's a personalized calendar, accordion, or social media widget.



## Pass Data to Custom Widget

Follow these steps to pass data to Custom widget:

1. Drop a Custom widget and configure its properties according to your specific needs.

2. To pass data from Appsmith to Custom widget, use the **Default model** property:

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


## Setup Custom Widget

1. Click the **Edit Source** button to configure the code for the Custom widget.

2. Add your CSS, HTML, and JS code according to your requirements.

3. To access the data passed into the **Default model** property, you can use:

<dd>

```js
// Accessing a specific property 
{{Custom1.model.images}}
```

</dd>



## Pass Data from Custom Widget

To pass data from a custom widget and trigger events, follow these steps:
 
1. You can use the `updateModel` property within JavaScript code to save or update data. Once the model is updated, you can retrieve the value using `{{Custom.model.propertyname}}` within any widget or query.

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

2. You can create events by clicking on the **Add Event** button, which allows you to trigger actions based on events inside the Custom widget.


<dd>

*Example:* In the context of the same image slider,  if you want to execute an email query, when a button is clicked. 

```js
const handleChangeRequest = () => {
  const imageUrl = appsmith.model.tips[currentIndex];
  appsmith.updateModel({ "image": imageUrl });
  appsmith.triggerEvent('onChange');
};
```
 The above function updates the Appsmith model with the current image URL and triggers the **onChange** event.

 Now, create an event called **onChange** and configure it to execute the query. Use `{{Custom1.model.images}}` to inform the user that this image requires an update.


</dd>




<dd>

Full Code for Image slider

<Tabs>
  <TabItem value="css" label="CSS" default>

```js
.app {
	height: calc(var(--appsmith-ui-height) * 1px);
	width: calc(var(--appsmith-ui-width) * 1px);
	justify-content: center;
}

.tip-container {
  margin-bottom: 20px;
}

.tip-container h2 {
  margin-bottom: 20px;
	font-size: 16px;
	font-weight: 700;
}

.tip-header {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
}

.tip-header div {
	color: #999;
}

.button-container {
	text-align: right;	
}

.button-container button {
  margin: 0 10px;
}
```
  </TabItem>
  <TabItem value="js" label="JS">

To call the passed data use {{appsmith.model.propertyname}}

  ```js
import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import reactDom from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';
import { Button, Card } from 'https://cdn.jsdelivr.net/npm/antd@5.11.1/+esm';

function App() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % appsmith.model.tips.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? appsmith.model.tips.length - 1 : prevIndex - 1
    );
  };

  const handleChangeRequest = () => {
    // Add logic for handling change request, for example, incrementing a counter
    appsmith.updateModel({ "changeRequestCount": appsmith.model.changeRequestCount + 1 });

    const imageUrl = appsmith.model.tips[currentIndex];
    appsmith.updateModel({ "image": imageUrl });
    appsmith.triggerEvent('onChange');
  };

  return (
    <Card className="app">
      <div className="tip-container">
        <div className="tip-header">
          <h2>User Documents: {appsmith.model.id}</h2>
          <div>
            {currentIndex + 1} / {appsmith.model.tips.length}
          </div>
        </div>
        {/* Resize the images based on parent size */}
        <img
          src={appsmith.model.tips[currentIndex]}
          alt={`Tip ${currentIndex + 1}`}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="button-container">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Button className="primary" onClick={handlePrevious}>
              Previous
            </Button>
            <Button className="primary" onClick={handleNext} type="primary">
              Next
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <div style={{ marginTop: '8px' }}>
              {/* Add padding between Name and Request Change buttons */}
              <Button onClick={handleChangeRequest} style={{ backgroundColor: 'red', borderColor: 'red', color: '#fff' }}>
                Request Change
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

appsmith.onReady(() => {
  reactDom.render(<App />, document.getElementById('root'));
});
```

  </TabItem>
  <TabItem value="html" label="HTML">

```js
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
</Tabs>

</dd>



