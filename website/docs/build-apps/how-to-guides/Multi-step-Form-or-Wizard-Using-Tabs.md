# Create a Multi-step Form or Wizard Using Tabs

You can create a multi-step form using Tabs widget and `storeValue` function:

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
