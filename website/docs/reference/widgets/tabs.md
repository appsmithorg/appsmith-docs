# Tabs

This page explains how the Tabs widget can be used to group related content and enable users to switch between different sets of information within a single container.



## Create multi-step form

Custom navigation schemes can be created by modifying the properties of a Tab widget. For instance, you can use the **Default tabs** and **storeValue** to create a multi-step form.

---
**Example**: suppose you want to create a multi-step form using Tabs Widget.

1. Drop a Tab Widget and rename the tabs to `Basic Info`, and `Personal Info`.

2. On the `Basic Info` tab add a Button widget to allow users to move to the next tab, and set its **onClick** event to:

```js
{{storeValue('defaulttab', 'Personal Info');}}
```

3. Similarly, on the `Personal Info` tab, add a new button widget that allows users to go back to the previous tab, and set its **onClick** event to:

```js
{{storeValue('defaulttab', 'Basic Info');}}
```

You can use the [storeValue](/reference/appsmith-framework/widget-actions/store-value) action for both previous and next buttons, and set the key for the stored value to be the same as the name of the Tabs. 

4. In the **Default Tab** property of the Tabs widget, add the following code:

```js
{{appsmith.store.defaulttab}}
```

<figure>
  <img src="/img/tabs-nav.gif" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Multi-step form using Tabs</i></figcaption>
</figure>

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the widget. All of these properties are present in the property pane of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tabs**          | String  | This property lets you add and remove tabs from the widget. Tabs are uniquely identified by their tab names. You can also change the visibility settings for each tab from here              |
| **Default Tab**     | String  | This property selects the tab which matches the corresponding name, making it the default tab that is displayed when the widget is loaded.                                                       |
| **Show Tabs**        | Boolean | This property allows you to hide or show the tabs in the tab widget. It can be used to create the illusion of dynamically changing UI. |
| **Visible**          | Boolean | This property controls the widget's visibility on the page. When turned off, the widget isn't visible when the app is published.     |
| **Animate Loading**  | Boolean | This property allows you to control a widget’s animation on the page load.                                                             |
| **Scroll Contents**  | Boolean | This property enables scrolling within the contents of each tab. If the content of a tab is larger than the available space, users can scroll to view it.                                                          |
| **Height**   | String     | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |

### Reference properties

These properties can be referenced in other widgets, queries, or JS functions using the dot operator. For instance, you can use `Tabs1.isVisible` to get the visibility status.

| Reference Property | Data type | Description                                                                                                                                                    |
| ----------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **isVisible**   | Boolean | This property indicates whether the widget is visible or not. |
| **selectedTab** | String | Contains the name of the tab currently selected                  |

### Style properties

Style properties allow you to change the look and feel of the widget. All of these properties are present in the property pane of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Accent Color**       | String| Sets the widget's accent color, which appears as the fill color for the checkbox when checked. Accepts CSS color values.             |
| **Background Color** | String| Controls background color of container.                 |
| **Border Color** | String| Allows you to change the border color of the text widget.                    |
| **Border Width** | Number| Defines the thickness of the border.                    |
| **Border Radius**    | String| Allows you to define curved corners.                     |
| **Box Shadow**       | String | Allows you to choose from the available shadow styles.   |

### Events

When the event is triggered, these event handlers can run queries, JS code, or other supported [actions](/reference/appsmith-framework/widget-actions)

| Events             | Description                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **onTabSelected** | Sets the action to be run when the user selects a tab.  |

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and users have the option to either await them or use the `.then()` block to ensure appsmith reactivity is maintained for subsequent lines of code.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
Tabs1.setVisibility(true)
```

To perform additional actions based on the completed state setting, use the `.then()` block.

```js
Tabs1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})
```

</dd>