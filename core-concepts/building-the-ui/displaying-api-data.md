---
description: >-
  API / Query data can be visualised in nearly any way conceivable. Whether it's
  a list (Table Widget), a trend (Chart Widget) or even simple text (Text
  Widget), it can be easily visualised in Appsmith
---

# Displaying API / Query Data

## Selecting The Right Widget

Appsmith provides the following widgets to visualize data from an API / Query.

| **Widget** | **Property** | **Data Type** |
| :--- | :--- | :--- |
| **Table** | Table Data | Array of objects |
| **Chart** | Chart Data | Array of \(x,y\) |
| **Text** | Text | String |
| **Image** | Image | URL / Base64 |
| **Dropdown** | Options | Array of \(label, value\) |

## Displaying the data

You can follow these guides to connect to your datasource

* [Connect to a database](../connecting-to-databases/)
* [Connect to an API](../apis/)

Once your API / Query has been created, you can display its data inside your widget property using **`{{ queryName.data }}` .** Here **queryName** represents the name of the API / Query you entered in the API / Query pane and the data attribute represents the response of the API / Query.

![Click to expand](../../.gitbook/assets/connect-data2.gif)

{% hint style="warning" %}
Sometimes your API / Query response format might not match the format that your widget requires. How you can transform your data is described below
{% endhint %}

## Transforming API / Query Data

You can use Javascript inside the `{{ }}` to transform API / Query data when binding it to a property. An example of this would be an API / Query which returns an array of values that are needed to populate a dropdown.

A dropdown needs an Array&lt;label, value&gt; in its option field, so to connect this data to a dropdown, we need to transform the data in the dropdown options property.

**API / Query Data**

```javascript
// API / Query Response
[
    {
        "id": "1",
        "name": "Watermelon"
    },
    {
        "id": "2",
        "name": "Apple"
    },
    {
        "id": "3",
        "name": "Grape"
    },
    {
        "id": "4",
        "name": "Bananna"
    },
    {
        "id": "5",
        "name": "Orange"
    },
    {
        "id": "6",
        "name": "Mango"
    }
]
```

**Transformation Code**

```javascript
{{
  API.data.map((row) => { 
    return { label: row.name, value: row.id } 
    })
}}

// The above example iterates over a data set and returns data
// in an Array<label, value> format 
```

{% hint style="info" %}
Widgets are automatically refreshed when the API / Query response is updated
{% endhint %}

