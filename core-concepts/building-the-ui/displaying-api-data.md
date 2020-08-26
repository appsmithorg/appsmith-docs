---
description: >-
  API / Query data can be visualised in nearly any way conceivable. Whether it's
  a list (Table Widget), a trend (Chart Widget) or even simple text (Text
  Widget), it can be easily visualised in Appsmith
---

# Displaying API / Query Data

## Selecting The Right Widget

Appsmith provides the following widgets to visualise data from an API / Query.

| **Widget** | **Property** | **Data Type** |
| :--- | :--- | :--- |
| **Table** | Table Data | Array of objects |
| **Chart** | Chart Data | Array of \(x,y\) |
| **Text** | Text | String |
| **Image** | Image | URL / Base64  |

## Connecting the API / Database

If you haven't already created an API, you can follow this guide

{% page-ref page="../apis/" %}

If you would like to query your database, you can follow this guide

{% page-ref page="../connecting-to-databases/" %}

Once your API / Query has been created, you can display its data inside your widget property using **`{{ queryName.data }}` .**  Here **queryName** represents the name of the API / Query you entered in the API / Query pane and the data attribute represents the response of the API / Query.

![Click to expand](../../.gitbook/assets/connect-data2.gif)

{% hint style="warning" %}
Sometimes your API / Query response format might not match the format that your widget requires. How you can transform your data is described below
{% endhint %}

## Transforming API / Query Data

You can use Javascript inside the `{{ }}` to transform API / Query data when binding it to a property. ****An example of this would be an API / Query which returns an array of values that are needed to populate a dropdown.

A dropdown needs an Array&lt;label, value&gt; in it's option field, so in order to connect this data to a dropdown, we need to transform the data in the dropdown options property

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
  fetchFruits.data.map((fruit) => { 
    return { label: fruit.name, value: fruit.id } 
    })
}}

// fetchFruits is the name of the API / Query
```

