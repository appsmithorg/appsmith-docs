# Tabs

The tabs widget is a special widget that contains multiple containers. Tabs can be used to contextually show UI to a user based on their choices.

<VideoEmbed host="youtube" videoId="NLe0To_fB7E" title="How to use Tabs Widget" caption="How to use Tabs Widget"/>

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Tabs**            | This property lets you add and remove tabs from the widget. Tabs are uniquely identified by their tab names              |
| **Default Tab**     | This property selects the tab which matches the corresponding name                                                       |
| **Show Tabs**       | This property hides / shows the tabs in the tab widget. It can be used to create the illusion of dynamically changing UI |
| **Scroll Contents** | This property enables scrolling within the contents of each tab                                                          |
| **Visible**         | Controls widget's visibility on the page. When turned off, the widget isn't visible when the app is published      |
| **Animate Loading** | Allows you to control a widget’s animation on the page load.                                                             |
| [**Height**](/reference/widgets/#height)        | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |

### Binding properties

These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions.

| Widget Property | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| **isVisible**   | This property indicates whether the widget is visible or not. |
| **selectedTab** | Contains the id of the tab currently selected                  |

### Events

They're a set of actions that you can perform on the widget. The following table lists the actions:

| Events            | Description                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **onTabSelected** | Sets the action to be run when the user selects a tab. See a list of [supported actions](../appsmith-framework/widget-actions/). |

### Styles

Style properties allow you to change the look and feel of the widget.

| Styles            | Description                                            |
| ----------------- | ------------------------------------------------------ |
| **Border Radius** | Allows you to define curved corners.                   |
| **Box Shadow**    | Allows you to choose from the available shadow styles. |

## Creating dynamic views

You can create separate UIs in each tab container and dynamically switch between the containers by controlling the Default Tab property. The below code snippet demonstrates how you can control the selected tab based on the value the user sets in a dropdown

```
{{ Dropdown1.selectedOption === "1" ? "Tab1" : "Tab2" }}
```

## Tab navigation

By manipulating the properties of a tab widget, it's possible to create a custom navigation scheme for the tab widget. This quick video show's how to set up tab navigation with the [`storeValue` function](../appsmith-framework/widget-actions/store-value.md) and some JavaScript:

<VideoEmbed host="youtube" videoId="dHeS5kPHlHE" title="" caption=""/>

