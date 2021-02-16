# Displaying Data \(Read\)

This document presumes you have successfully [connected to a data source](../connecting-to-data-sources/) and have an API / DB Query that fetches data. 

## Widgets

Appsmith has a collection of widgets that can be used to build the UI.

* [Button](../../widget-reference/button/)
* [Chart](../../widget-reference/chart.md)
* [Checkbox](../../widget-reference/checkbox.md)
* [Container](../../widget-reference/container.md)
* [Datepicker](../../widget-reference/datepicker.md)
* [Dropdown](../../widget-reference/dropdown.md)
* [Filepicker](../../widget-reference/filepicker.md)
* [Form](../../widget-reference/form.md)
* [Image](../../widget-reference/image.md)
* [Input](../../widget-reference/input.md)
* [Maps](../../widget-reference/maps.md)
* [Radio](../../widget-reference/radio.md)
* [Rich Text Editor](../../widget-reference/rich-text-editor.md)
* [Switch](../../widget-reference/switch.md)
* [Tabs](../../widget-reference/tabs.md)
* [Table](../../widget-reference/table.md)
* [Text](../../widget-reference/text.md)
* [Video](../../widget-reference/video.md)

Widgets can be dragged from the widget pane, positioned on the canvas, and resized to fit the data they need to display. They also come with properties that can be visually edited to set their data, change their styles, and trigger actions from them.

![](../../.gitbook/assets/adding-ui.gif)

### Naming a Widget

A widget must have a unique name that acts as an identifier on the page. It is used to access the properties of the widget everywhere in the application. In that sense, a name is like a variable in a programming language. You can access the various properties of the widget using the widget's name.

```text
{{ Table1.selectedRow.id }}
```

## Displaying Data in a widget

Widget properties can be edited via the property pane which is opened using the top-right icon \(Edit Widget Properties\). Data from an API/Query can be set in a widget property by referencing the name \(unique identifier\) of the API/Query. 

{% hint style="success" %}
Appsmith is **Reactive** so the widgets are automatically updated whenever the data in the API / Query changes 
{% endhint %}

```
{{ fetch_users.data.users }} // results of the API
```

![](../../.gitbook/assets/bind-table.gif)

{% hint style="warning" %}
Each widget property has a specific data type that it validates its value against. If the data type mismatches, it will throw an error. This can be fixed using javascript to transform the value of the property
{% endhint %}

## Transforming Data

You can use Javascript inside to transform API / Query data when binding it to a property. Let us take an example of a Query that returns an array of objects that need to be populated in a dropdown. Directly binding the data will lead to an error as shown below

A dropdown needs an Array&lt;label, value&gt; in its option field, so to connect this data to a dropdown, we need to transform the data in the dropdown options property.

**Example API / Query Data**

```javascript
[
  {
    "id": 1,
    "name": "test",
    "status": "APPROVED",
    "gender": "",
    "avatar": "https://robohash.org/sednecessitatibuset.png?size=100x100&set=set1",
    "email": "barty.crouch@gmail.com",
    "address": "St Petersberg #911 4th main",
    "createdAt": "2020-03-16T18:00:05.000Z",
    "updatedAt": "2020-08-12T17:29:31.980Z"
  },
  {
    "id": 2,
    "name": "Jenelle Kibbys",
    "status": "APPROVED",
    "gender": "Female",
    "avatar": "https://robohash.org/quiaasperiorespariatur.bmp?size=100x100&set=set1",
    "email": "jkibby1@hp.com",
    "address": "85 Tennessee Plaza",
    "createdAt": "2019-10-04T03:22:23.000Z",
    "updatedAt": "2019-09-11T20:18:38.000Z"
  },
  {
    "id": 3,
    "name": "Demetre",
    "status": "APPROVED",
    "gender": "Male",
    "avatar": "https://robohash.org/iustooptiocum.jpg?size=100x100&set=set1",
    "email": "aaaa@bbb.com",
    "address": "262 Saint Paul Park",
    "createdAt": "2020-05-01T17:30:50.000Z",
    "updatedAt": "2019-10-08T14:55:53.000Z"
  }
]
```

**Transformation Code**

```javascript
{{
  QueryName.data.map((row) => { 
    return { label: row.name, value: row.id } 
    })
}}

// The above example iterates over a data set and returns data
// in an Array<label, value> format 
```

