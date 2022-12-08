# Modal

Modal is a simple UI widget you can use when you want to create Dialogs, Popovers or Alerts.

<VideoEmbed host="youtube" videoId="s8cHVkhj3ec" title="How to use Modal Widget" caption="How to use Modal Widget"/>

## Properties

Properties allow you to edit the Modal widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Modal widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                 |
| ------------------- | --------------------------------------------------------------------------- |
| **Scroll Contents** | This property enables scrolling within the contents of the modal            |
| **Quick Dismiss**   | Quickly dismisses or closes the Modal when the user taps outside the modal. |
| **Animate Loading** | Allows you to control a widget’s animation on the page load.                |
| [**Height**](/reference/widgets/#height)        | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |
### Binding Properties

These properties allow you to bind your Modal widget with any other widget in queries or JS objects.

| Property      | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| **isOpen**    | This property indicates whether the modal is open or not.     |
| **isVisible** | This property indicates whether the widget is visible or not. |

### Events

They are a set of actions that you can perform on the widget. The following table lists the actions:

| Events      | Description                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **onClose** | This event triggers an action when the modal is closed. See a list of [supported actions](../appsmith-framework/widget-actions/). |

### Styles

Style properties allow you to change the look and feel of the widget.

| Styles               | Description                              |
| -------------------- | ---------------------------------------- |
| **Background color** | Sets the background color of the widget. |
| **Border Radius**    | Allows you to define curved corners.     |

## Reopening Created Modals

Selecting the created modal listed in the Entity Explorer will open it in Edit mode.

![Click to expand](/img/open-created-modal.gif)

## Opening Modals via Widgets

To open the Modals via other widgets please refer to [Show Modal](../appsmith-framework/widget-actions/show-modal.md) function.
