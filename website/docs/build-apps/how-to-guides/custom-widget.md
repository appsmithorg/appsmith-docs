import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Custom Widget using Vanilla JS

This guide shows how to create a simple Custom widget using vanilla JavaScript.

While Appsmith provides an extensive array of built-in widgets for application development, there are instances where your project demands a widget tailored to specific requirements. Appsmith's Custom widget allows you to integrate unique functionalities with your HTML, CSS, and JavaScript code, whether it's a personalized calendar, accordion, or social media widget.

## Configure Custom Widget

1. Drop a [Custom widget](/reference/widgets/custom) on the canvas.

2. Click the **Edit Source** button to configure the code for the Custom widget. Within the Custom widget builder, you can add JS, CSS, and HTML code, and the Custom widget is displayed automatically on Appsmith.

3. In the [Custom widget builder](/reference/widgets/custom#custom-widget-builder) import the required libraries.


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

:::info
* To render the custom widget in the expected format, call the relevant function within the [**onReady**](/reference/widgets/custom#onready) method in your JavaScript configuration. This ensures that your Custom widget is properly rendered when the app is loaded.

* If you want to dynamically update the widget based on data changes(e.g., change in query data), render it inside the [**onModelChange**](/reference/widgets/custom#onmodelchange) method to reflect updates dynamically.
:::

In Vanilla JavaScript, you directly manipulate the DOM using methods like `document.getElementById`,` document.createElement`, etc.

*Example*: To build a simple calendar widget using the [FullCalendar library](https://www.jsdelivr.com/package/npm/fullcalendar), import the library and add the necessary code inside the `onReady` method.


<Tabs>
  <TabItem value="html" label="HTML" default>


```html
<div id="calendar"></div>
<!-- This serves as a container for the FullCalendar. -->

<!-- FullCalendar Library Script: -->
<script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.10/index.global.min.js"></script>
<!-- Include the FullCalendar library from the specified CDN. -->
```

  </TabItem>
  <TabItem value="jss" label="JS">



```js
// Wait for the Appsmith platform to be ready before initiating the component
appsmith.onReady(() => {
  // Get the HTML element with the id 'calendar'
  const calendarEl = document.getElementById('calendar');

  // Create a new instance of FullCalendar and configure it
  const calendar = new FullCalendar.Calendar(calendarEl, {
    // Customize the header toolbar with navigation buttons and title
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    }
  });

  // Render the calendar on the specified HTML element
  calendar.render();
});
```

  </TabItem>
</Tabs>


</dd>

5. To pass data from Appsmith to the Custom widget, use the **Default model** property of Custom widget. You can bind data from queries or widgets using mustache bindings `{{}}`.

<dd>

*Example:* For the calendar widget, you can pass relevant event data, like:


```js
{
  "events": [
    {
      "title": "Custom widget review",
      "start": "2024-01-12",
      "id": "1"
    },
    {
      "title": "Weekly meeting",
      "start": "2024-01-13",
      "id": "2"
    }
]}
```

To bind data from a query or Table widget, you can add the following syntax:

```js
events: [
  { title: tbl_user.event, start: tbl_user.date },
  // Add more entries as needed
]
```



</dd>

6. To retrieve the data provided to the **Default model** property, use `appsmith.model.propertyName` within the JavaScript section of the Custom widget builder.

 
<dd>

*Example:* For the calendar widget, you can access the **Default model** data as follows:

```js
appsmith.onReady(() => {
	const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    },
      // highlight-next-line
	events: appsmith.model.events   
  });

  calendar.render();
});
```

</dd>

7. To pass data from the Custom widget to Appsmith, use the `updateModel` property within your JS code to save or update data. Once the model is updated, you can retrieve the value using `{{Custom.model.propertyname}}` within any widget or query.

<dd>

*Example*: To update the model with selected date once a date has been clicked, add:

```js
// JS
appsmith.onReady(() => {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    },
    events: appsmith.model.events,
       // highlight-next-line
    eventClick: (e) => {
           // highlight-next-line
      appsmith.updateModel({
           // highlight-next-line
        selectedEvent: appsmith.model.events.find(d => d.id === e.event.id)
      });
    },
  });

  calendar.render();
});

```

To display data in a Text widget, set its **Text** property to:

```js
{{Custom_cal.model.events}}

//Custom_cal, name of the custom widget 
```

</dd>

8. For widget interaction, you can create events using the **Add Event** button on the Custom widget and use the `triggerEvent` property inside the Custom widget builder.

<dd>

*Example:* To add a button within the Custom widget that, when clicked, executes a query, use the following code:

</dd>