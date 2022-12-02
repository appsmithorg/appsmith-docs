# Checkbox Group

Checkbox group widget allows users to configure multiple checkboxes together.

<VideoEmbed host="youtube" videoId="-7cvZ2yCgtE" title="How to use Checkbox Group Widget" caption="How to use Checkbox Group Widget"/>

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
