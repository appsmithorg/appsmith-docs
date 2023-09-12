# Create a Multi-step Form or Wizard Using Tabs

This page shows you how to create a multi-step form using the Tabs widget, which allows you to collect user information in a structured step-by-step manner.


<figure>
  <img src="/img/tabs-nav.gif" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Multi-step form using Tabs</i></figcaption>
</figure>

## Prerequisites

* A [Tabs](/reference/widgets/tabs) widget.
* Basic knowledge of how the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function works.


## Configure the Tabs

*Example:* lets set up a multi-step form with two tabs: one where users can input basic information, and the other where they can provide personal information.

1. Configure the Tabs according to your requirements. For this example, rename Tab 1 to `Basic Info` and Tab 2 to `Personal Info`. 

2. On Tab 1 (`Basic Info`), add a Button widget and configure its [**onClick**](/reference/widgets/button#onclick) event; select the **Store value** option from the action selector and specify:
   
<dd>

```js
Key: 'defaulttab'  //string containing the key name that acts as a unique identifier
Value: 'Personal Info' //Name of the tab you want to navigate, in this case the next tab
```

<figure>
  <img src="/img/tabs-next.png" style= {{width:"530px", height:"auto"}} alt="Configure Store value"/>
  <figcaption align = "center"><i>Configure Store value</i></figcaption>
</figure>


</dd>


3. Similarly, on Tab 2 (`Personal Info`) tab, add a new Button widget and configure its **onClick** event to allow users to go back to the previous tab. For this, select **Store value** option from the action selector and specify:
   
<dd>

```js
Key: 'defaulttab'  //unique identifier
Value: 'Basic Info' //Name of the tab you want to navigate, in this case the previous tab
```
</dd>



4. In the [**Default Tab**](/reference/widgets/tabs#default-tab-string) property of the Tabs widget, add the following code:

<dd>

```js
{{appsmith.store.defaulttab}}
```

This allows you to access the Tab name from the store using the `defaulttab` key.

</dd>

