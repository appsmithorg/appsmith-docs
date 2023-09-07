# Create a Multi-step Form or Wizard Using Tabs

This page shows you how to create a multi-step form using the Tabs widget, which allows you to collect user information in a structured step-by-step manner.

<figure>
  <img src="/img/tabs-nav.gif" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Multi-step form using Tabs</i></figcaption>
</figure>

## Prerequisites

* A [Tab](/reference/widgets/table) widget.
* Basic knowledge of how the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function works in Appsmith.


## Configure the Tabs

*Example:* Suppose you want to create tabs for a multi-step form. In the first tab, users can provide their basic information, while in the second tab, they can input their personal details.

1. Make changes to the Tab widget according to your requirements, like renaming the tabs to `Basic Info`, and `Personal Info`.

2. On the `Basic Info` tab add a Button widget to allow users to move to the next tab, enable *JS* for the **onClick** event of the Button widget, and add:

```js
{{storeValue('defaulttab', 'Personal Info');}}
```

3. Similarly, on the `Personal Info` tab, add a new Button widget that allows users to go back to the previous tab, enable *JS* for the **onClick** event of the Button widget, and add:

```js
{{storeValue('defaulttab', 'Basic Info');}}
```

You can use the [storeValue](/reference/appsmith-framework/widget-actions/store-value) action for both the previous and next buttons, and set the key for the stored value to be the same as the name of the Tabs. 

4. In the **Default Tab** property of the Tabs widget, add the following code:

```js
{{appsmith.store.defaulttab}}
```

