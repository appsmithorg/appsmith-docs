# Checkbox Group

Checkbox group widget allows users to configure multiple checkboxes together.

<VideoEmbed host="youtube" videoId="-7cvZ2yCgtE" title="How to use Checkbox Group Widget" caption="How to use Checkbox Group Widget"/>


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences. 

### Data

#### Options `String`

 <dd>

 This property allows you to set the labels and values for the items in a Checkbox Group widget. You can add these labels and values directly from the user interface or use JavaScript by providing options in JSON format, like:

 ```js
[
  {
    "label": "Option1",
    "value": "OPTION1"
  },
  {
    "label": "Option2",
    "value": "OPTION2"
  }..
]
 ```
It's important to ensure that the values assigned to each option are unique. Additionally, you can dynamically display data by using JavaScript. For instance, you can use the `.map()` function to transform the data to the desired format, like:

```js
{{getdata.data.map( p => ({label: p.country, value: p.country}))}}
```

 </dd>

#### Default Selected Values `String`
<dd>
Allows you to set default options in a widget. These options are initially selected when the widget is loaded, representing the user's default input unless modified. Multiple default items can be added by providing them as an array of values. For example:

```js
[
  "OPTION1", "OPTION2"
]
```

</dd>

### Label

#### Text `String`

<dd>
Sets the label of the Checkbox.
</dd>


#### Position `String`

<dd>

This property allows you to configure the label's placement in three ways: 

* **Auto**: Automatically positions the label based on the widget type and layout.
* **Left**: Aligns the label to the left side of the widget. 
   * *Alignment*: You can also control the text's placement relative to the Checkbox Group. You have the choice to align it either to the **Left** boundary or closer to the Checkbox Group using the **Right** alignment option.
   * *Width*: This allows you to control the proximity of the text to the Checkbox Group, determining how close or far it can be positioned.
* **Top**: Positions the label above the widget.

</dd>

### Validations

#### Required `Boolean`

<dd>
This validation feature allows you to designate the Checkbox Group as a mandatory field. For instance, when the Checkbox is placed within a Form widget, enabling the Required property ensures that the Form's submit button remains disabled until the Checkbox Group is checked.


</dd>

### General

#### Tooltip `String`
<dd>

This feature enables you to add hints or provide additional information to guide the user regarding the required input. 
</dd>


#### Visible `Boolean`

<dd>

This property prevents users from selecting the Checkbox widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on `JS` next to the **Disabled** property to control the widget's disable state conditionally. 
</dd>

#### Animate Loading `Boolean`

<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property.

</dd>

#### Height `String`

<dd>

This property determines how the widget's height adjusts to changes in its content. There are three available options:

* **Fixed**: The height of the widget remains as set using drag and resize.
* **Auto Height**: The widget's height adjusts dynamically in response to changes in its content.
* **Auto Height with limits**: Same as **Auto height**, with a configurable option to set the minimum and maximum number of rows the widget can occupy.

</dd>

### Events

#### onCheckChange

This event defines the action that would be executed when the user checks or unchecks a checkbox. It allows you to specify a list of [supported actions](/reference/appsmith-framework/widget-actions) that can be triggered in response to the checkbox state change.


### Properties

| Property                    | Description                                                                                                                                               |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **options**                 | Sets a list of options for a user to select. Values must be unique.                                                                                       |
| **Default Selected Values** | Sets values of the options checked by default.                                                                                                            |
| **Label**                   | It is a group of properties that allows you to provide a name to the field and define the placement of the widget. [Learn more](checkbox-group.md#label). |
| **Inline**                  | Whether the checkbox buttons are to be displayed inline horizontally.                                                                                     |
| **Required**                | Makes input to the widget mandatory.                                                                                                                      |
| **Visible**                 | Controls the visibility of the widget.                                                                                                                    |
| **Select All Options**      | Controls whether select all control is shown.                                                                                                             |
| **Disabled**                | Disables input to this widget.                                                                                                                            |
| [**Height**](/reference/widgets/#height)        | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |


### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

#### **Text**

It allows you to set the display name for the Checkbox Group. For example, if you want the user to give their consent to the terms & conditions, you can enter the text as "Terms & Conditions."

:::tip
You can leave the text empty if you don't want any display name for your Checkbox Group widget.
:::

#### Position

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the Checkbox Group.
* Left - It aligns the text to the left of the Checkbox Group. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Checkbox Group. You can choose:
    * Left - It aligns the text to the widget's left boundary that is away from the Checkbox Group.
    * Right - It aligns the text closer to the Checkbox Group.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the Checkbox Group.
* Auto - It automatically adjusts the position of the text based on the Checkbox Group's height.

:::info
Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.
:::

<VideoEmbed host="youtube" videoId="KVCjIWWzO5o" title="How to set the label properties?" caption="How to set the label properties?"/>


## Actions

| Action                | Description                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **onSelectionChange** | Sets the action to be run when the check state is changed. See a list of [supported actions](../appsmith-framework/widget-actions/). |
