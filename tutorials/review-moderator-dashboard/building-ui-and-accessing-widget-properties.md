---
description: Part Two of Review Moderator Tutorial
---

# Building UI and Accessing Widget Properties

### Customising the Table Widget

The table widget now has a lot of data from the query, but say you might want to show only a few columns and hide the rest of them for better clarity, and you can simply open the property pane, find the columns and toggle the `eye` icon. This will hide the columns from the table. Now open the tables property pane, and only display the following columns:

1. Name
2. Address
3. City

Additionally, let’s make the UI much beautiful by using a Container widget. Using this, we can group multiple widgets on a minimal white spaced background. To do this, follow the below steps:

1. Drag and drop a Container widget onto the canvas
2. Move the Table widget into the Container widget
3. Additionally, add a Text widget on top of the Table widget to add a heading.

Below is the GIF to build the UI:

![](https://lh5.googleusercontent.com/uavbi64o75sNEAHxGBC7LhBT50q2OXPz6H0z47-Ul9JgHFMy4f07l3EhctQ3F-0-9hyIfbqPXsp0X-fuiot-DwCeewalDbMLr_WqL6Gx7i9p6VYWo78kqHCLCbqbYPew2repqAE4)

Well, that’s impressive, just like that you’re able to update the UI. So next, let’s add some additional components that will display the information whenever a particular business is selected on the table row. For this, let’s first rename the Table widget from `Table1` to `businessTable.`

### Adding a Map Widget

Now, let’s add a Map Widget and display the location of the business on the left-hand side of the container by following the below steps:

1. Drag and drop a **Map** widget onto the canvas
2. Open the **Map** widget property pane
3. You’ll notice two default configurations `Initial Location` and `Default markers`.
4. The initial location is the position of the marker and accepts a single JSON object with lat and long coordinates.
5. The default markers set all the default markets on the map, and it’s the usual array of map objects.
6. Next, update the Initial location \(toggle JS\) and Default markers property to the following:

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

Here, you’re using the moustache syntax and binding the values from the table and configuring the map widget.

{% hint style="success" %}
You can use the `selectedRow` property for the Table widget to access the data of a particular row when selected.
{% endhint %}

Now select any row from the table, the map automatically updates with the business location mentioned. Below is the GIF showing the same:

![](https://lh4.googleusercontent.com/I5woXYW_T37FpytigD2VnlsoWfAWqzWThiqV8LW5ed5rRDxelKlcpIXjoBZQpvOc5QVd4nsDL65uOwuArgVlpW21VnQvv9xwljZ5GgCKT6xwX4cyL2k5NrYyc-NbIe7XA6Ug76vp)

### Adding Text Widgets and Binding Data

Alright, next let’s add a few text widgets and bind all the business information under the map. To do this, you can drop and drop text widgets onto the canvas and add their associated names and values like:

Name: `{{businessTable.selectedRow.name}}`

Address: `{{businessTable.selectedRow.address}}`

City: `{{businessTable.selectedRow.city}}`

Business ID: `{{businessTable.selectedRow.business_id}}`

Business Rating: `{{businessTable.selectedRow.stars}}`

Categories Rating: `{{businessTable.selectedRow.categories}}`

![](https://lh6.googleusercontent.com/djLe2OB_2ReB6rgUXqd9uc8riGkR848FHB98zn7gzrP5eH2fluy3SBrsuisxU2QJ5Iq_ihhIuwi_rL01xMmTZwUt8Zxo-NyjQpez1WiJW1lp-IoYgCFyFcuoGqJfV1bfQKYuiGsa)

In the next part, you'll learn how to write JS function inside the widget to create interactive views. You'll also be using the list and chart widgets to analyse the reviews from the reviews table based on the selected business.

