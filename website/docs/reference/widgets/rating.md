# Rating

The Rating widget is used to perform a quick rating operation on something. Use the Rate component to rate any sort of information from the connected data source. It's customizable and features rich.

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the Rating widget. All these properties are present in the property pane of the widget. The rating widget comes with the following settings:

| Property             | Description                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Max Rating**       | The total number of stars you would like to rate the information with                                               |
| **Default Rating**   | Sets the default option of the rating widget                                                                                     |
| **Tooltips**         | Sets the tooltip content of starts. This expects an array of strings that can describe the values of each star   |
| **Size**             | The star's sizes can be varied, default is set to `Medium`                                                                       |
| **Allow half stars** | When toggled, half star ratings are accepted                                                                                     |
| **Visible**          | Control widget's visibility on the page. When turned off, the widget isn't visible when the app is published |
| **Disabled**         | Disables input/selection to the widget. The widget remains visible to the user but user input/selection isn't allowed. |
| **Read Only**        | Disallows user input, but the stars retain their normal styling and the star's **Tooltips** remain visible when the user hovers with the mouse cursor. When the **Disabled** setting is on, the **Read Only** mode is ignored. |
| **Animate Loading**  | Allows you to control a widget’s animation on the page load.                                                                     |
| [**Height**](/reference/widgets/#height)        | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/> **Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |

### Binding properties

These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions.

| Property      | Description                                                                                    | Code Snippet                |
| ------------- | ---------------------------------------------------------------------------------------------- | --------------------------- |
| **isVisible** | This property indicates whether the widget is visible or not.                                  | `{{widget_name.isVisible}}` |
| **maxCount**  | This property indicates the total number of stars you would like to rate the information with. | `{{widget_name.maxCount}}`  |
| **value**     | This property indicates the value selected by user.                                            | `{{widget_name.value}}`     |

### Events

They are a set of actions that you can perform on the widget.

| Events       | Description                                                                                                            |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| **onChange** | Triggers an action when the rate is changed. See a list of [supported actions](../appsmith-framework/widget-actions/). |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style              | Description                                                                     |
| ------------------ | ------------------------------------------------------------------------------- |
| **Active color**   | Sets the color of stars for that are provided in the default rate. |
| **Inactive color** | Sets the color of inactive stars                                                |

## Methods

The methods provided by the widget allow users to dynamically update and manipulate its properties, facilitating the creation of dynamic and interactive applications without the need for manual property modifications. 

These setter methods are asynchronous, and users have the option to either await them or use the `.then()` block to ensure appsmith reactivity is maintained for subsequent lines of code.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
Rating1.setVisibility(true)
```
To perform additional actions based on the completed state setting, use the `.then()` block.

```js
Rating1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})

```

</dd>


#### setDisabled `boolean`

<dd>

Sets the disabled state of the widget.

*Example*:

```js
Rating1.setDisabled(false)
```
To perform additional actions based on the completed state setting, use the `.then()` block.

```js
Rating1.setDisabled(false).then(() => {
  // code to be executed after disabled state is set
})
```

</dd>

#### setValue `number`

<dd>

Allows you to dynamically set the value of the widget.

*Example*:

```js
Rating1.setValue(3)
```
To perform additional actions based on the completed state setting, use the `.then()` block.

```js
Rating1.setValue(3).then(() => {
  // code to be executed after value is set
})
```

</dd>
