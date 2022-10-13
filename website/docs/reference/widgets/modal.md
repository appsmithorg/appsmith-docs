# Modal

Modal is a simple UI widget you can use when you want to create Dialogs, Popovers or Alerts.

{% embed url="https://youtu.be/s8cHVkhj3ec" %}
<figure>
  <object data="https://www.youtube.com/embed/s8cHVkhj3ec?autoplay=0" width='860px' height='515px'></object> 
  <figcaption align="center"><i>How to use Modal Widget</i></figcaption>
</figure>

## Properties

Properties allow you to edit the Modal widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Modal widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                 |
| ------------------- | --------------------------------------------------------------------------- |
| **Scroll Contents** | This property enables scrolling within the contents of the modal            |
| **Quick Dismiss**   | Quickly dismisses or closes the Modal when the user taps outside the modal. |
| **Animate Loading** | Allows you to control a widget’s animation on the page load.                |

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
