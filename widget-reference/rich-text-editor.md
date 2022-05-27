---
description: >-
  The Rich Text Editor is used to capture Rich Text input from a user. The input
  is captured in HTML format.
---

# Rich Text Editor

{% embed url="https://youtu.be/_KrxFScQJys" %}

## Properties

Properties can be divided into the following groups:

### Internal Property

| Property | Description                                             |
| -------- | ------------------------------------------------------- |
| **text** | This property contains the text of the Rich Text Editor |

### Widget Property

| Widget Property                                         | Description                                                                                                                                                |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Default Text**                                        | This property sets the default text of the Rich Text Editor.                                                                                               |
| **Label**                                               | It is a group of properties that allows you to provide a name to the field and define the placement of the widget. [Learn more](rich-text-editor.md#label) |
| **Visible**                                             | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published                                        |
| **Disabled**                                            | Disables input to the widget. The widget will remain visible to the user but a user input will not be allowed.                                             |
| **Hide toolbar** Controls the visibility of the toolbar |                                                                                                                                                            |

### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

#### **Text**

It allows you to set the display name for the Rich Text Editor. For example, if you want the user to write a cover letter, you can enter the text as "Cover Letter."

{% hint style="info" %}
You can leave the text empty if you don't want any display name for your Rich Text Editor widget.
{% endhint %}

#### **Position**

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the Rich Text Editor.
* Left - It aligns the text to the left of the Rich Text Editor. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Rich Text Editor. You can choose:
    * Left - It aligns the text to the widget's left boundary that is away from the Rich Text Editor.
    * Right - It aligns the text closer to the Rich Text Editor.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the Rich Text Editor.
* Auto - It automatically adjusts the position of the text based on the Rich Text Editor's height.

{% hint style="info" %}
Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.
{% endhint %}

{% embed url="https://youtu.be/WACXsnoBa5Y" %}
How to set the label properties?
{% endembed %}

## Action

There are a set of actions that you can perform on the widget. The following table lists the actions:

| Action            | Description                                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **onTextChanged** | Sets the action to be run when the user inputs text. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md) |
