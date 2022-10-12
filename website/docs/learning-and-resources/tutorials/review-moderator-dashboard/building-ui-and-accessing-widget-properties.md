---
description: >-
  In this part of the tutorial, you'll learn how to build a UI and customize
  your widgets.
---

# Building UI and Accessing Widget Properties

### Customizing the Table Widget

As you can see, the table widget has a lot of data from the query, but say you might want to show only a few columns and hide the rest of them for better clarity.

:::info
You can open the property pane, find the columns, and toggle the eye icon. It will hide the columns from the table.
:::

Now open the tables property pane, and only display the following columns:

* Name
* Address
* City

Below is the video to build the UI and edit table properties:

{% embed url="https://youtu.be/4ET9wtFFIF0" %}
Building the UI and Editing Table Properties
{% endembed %}

Additionally, let's make the UI more beautiful by using a Container widget. Using this, we can group multiple widgets on a minimal white-spaced background. To do this, follow the below steps:

1. Drag and drop a **Container** widget onto the canvas.
2. Move the Table widget into the Container widget.
3. Additionally, add a **Text widget** on top of the Table widget to add a heading. You can name that text "Review Moderator Dashboard".

Let's add some additional components that display the information whenever a particular business is selected on the table row. Let's first rename the Table widget from **Table1** to **businessTable**. You can edit the widget's name from the property pane.

### Adding a Map Widget

To make the UI more intuitive, let's add the location of the business. To do this, we will add a [Map Widget](../../../reference/widgets/maps.md) and display the location of the business by following the below steps:

{% embed url="https://youtu.be/J_xVn-TKPXY" %}
Adding Map Widget
{% endembed %}

1. Drag and drop a **Map widget** onto the canvas
2. Open the Map widget property pane
3. You'll notice two default configurations: **Initial Location and Default markers.**
4. The initial location is the position of the marker and accepts a single JSON object with lat and long coordinates.
5. The default markers set all the default markets on the map, and it's the usual array of map objects.
6. Next, update the Initial location (toggle JS) and Default markers property to the following:

**`Initial location:`**

```javascript
{
    "lat": {{businessTable.selectedRow.latitude}},
    "long": {{businessTable.selectedRow.longitude}}
}
```

**`Default markers:`**

```javascript
[
  {
    "lat": {{businessTable.selectedRow.latitude}},
    "long": {{businessTable.selectedRow.longitude}},
    "title": {{businessTable.selectedRow.name}}
  }
]
```

Here, you're using the mustache syntax, binding the table values and configuring the map widget.

You can use the **`selectedRow`** property for the Table widget to access the data of a particular row when selected.

Now select any row from the table, and the map automatically updates with the business location mentioned.

:::info
The zoom level can be used to pinpoint the exact location.
:::

### Adding Text Widgets and Binding Data

Next, let's add a few text widgets and bind all the business information under the map. You can drop text widgets onto the canvas and add their associated names and values like:

{% embed url="https://youtu.be/jEhbeoc4sTE" %}
Adding Text Widgets
{% endembed %}

Drag the text widget onto the canvas and paste the query listed below into the text field.

```
Name: {{businessTable.selectedRow.name}}

Address: {{businessTable.selectedRow.address}}

City: {{businessTable.selectedRow.city}}

Business ID: {{businessTable.selectedRow.business_id}}

Business Rating: {{businessTable.selectedRow.stars}}

Categories Rating: {{businessTable.selectedRow.categories}}
```

### What's Next?

In the next section, you'll learn how to write JS functions inside the widget to create interactive views. You'll also use the list and chart widgets to analyze the reviews from the reviews table based on the selected business.
