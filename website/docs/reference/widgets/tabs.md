# Tabs

This page explains how to use the Tabs widget to organize related content and allow users to navigate between groups of information that appear within the same container.


<VideoEmbed host="youtube" videoId="NLe0To_fB7E" title="Using the Tabs Widget" caption="Using the Tabs Widget"/>


## Set default tabs

To set a default tab in the Tabs widget, you can manually set the tab's value, or you can use the [storeValue](/reference/appsmith-framework/widget-actions/store-value) action to save the selected tab and retrieve it when the user interacts with the widget. 

In addition to setting a default tab, you can also use the `selectedTab` reference property to get the currently selected tab. This allows you to programmatically switch between tabs and control the widget's behavior based on user input or other events.

---
**Example**: suppose you want to create a multi-step form using Tabs Widget.

1. Rename and create additional tabs based on your requirements. For instance, `Basic Information`, `Personal Information`, and `Confirmation`.

2. Populate the tabs with relevant information, such as input widgets.

3. Add a Button widget and sets its **onClick** event to:

```js
{{storeValue('defaulttab', 'Personal Info');}}
```

You can use the `storeValue` action for both previous and next buttons, and set the key for the stored value to be the same as the name of the Tabs. 

4. In the **Default Tab** property of the Tabs widget, add the following code:

```
{{appsmith.store.defaulttab}}
```

<figure>
  <img src="/img/tabs.gif" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Multi-step form using Tabs</i></figcaption>
</figure>

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the widget. All of these properties are present in the property pane of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tabs**          | String  | This property lets you add and remove tabs from the widget. Tabs are uniquely identified by their tab names.              |
| **Default Tab**     | String  | This property selects the tab which matches the corresponding name, making it the default tab that is displayed when the widget is loaded.                                                       |
| **Show Tabs**        | Boolean | This property allows you to hide or show the tabs in the tab widget. It can be used to create the illusion of dynamically changing UI. |
| **Scroll Contents**  | Boolean | This property enables scrolling within the contents of each tab. If the content of a tab is larger than the available space, users can scroll to view it.                                                          |
| **Visible**          | Boolean | This property controls the widget's visibility on the page. When turned off, the widget isn't visible when the app is published.     |
| **Animate Loading**  | Boolean | This property allows you to control a widget’s animation on the page load.                                                             |
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
| **Border Radius**    | String| Allows you to define curved corners.                     |
| **Box Shadow**       | String | Allows you to choose from the available shadow styles.   |


### Events

When the event is triggered, these event handlers can run queries, JS code, or other supported [actions](/reference/appsmith-framework/widget-actions)

| Events             | Description                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **onTabSelected** | Sets the action to be run when the user selects a tab.  |

