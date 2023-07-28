---
description: >-
  List widget reference
---

# List

The List widget provides a way to iterate over a structured dataset, such as an array of objects, and display the data in vertical sections without the need for writing the code. Each list item can contain other widgets to display data or capture user input. Once you bind the data to the first item in the List widget, the subsequent items automatically update with the corresponding values from the dataset.

<VideoEmbed host="youtube" videoId="kSDSGaXhfv0" title="What’s New With the List Widget?" caption="What’s New with the List Widget?"/>

## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### Data

#### Items `string`

<dd>

Enables you to bind static or dynamic data as an array of objects to the widget. You can bind the object property to the widgets in the list item using `currentItem` property.

*Expected Data Structure*:

```js
[
  {
    "id": "001",
    "name": "Blue"  
  },
  {
    "id": "002",
    "name": "Green"  
  },
  {
    "id": "003",
    "name": "Red"   
  }
]
```

You can add dynamic data to your list by fetching data from queries or JS functions and binding the response to the **Items** property. For example, if you have a query named `fetchData`, you can bind its response to the list by adding the following snippet in the Items property:

```js
{{fetchData.data}}
```
If the retrieved data is not in the desired format, you can use JavaScript to **transform** it before passing it to the List widget.

*Example:*
```js
{{fetchData.data.users.map((user) => {
  return {
    name: user.name,
    email: user.email
    };
  });
}}
```

</dd>

#### Data identifier

<dd>

Like `keys` in React, you need to select a data identifier from your dataset, which helps uniquely identify each item. This helps the List widget identify which items are added, have changed, or are removed. You can also combine two columns or data identifiers by enabling the `JS` mode.

</dd>

### Pagination

#### Server side pagination

<dd>

Enables you to implement [server side pagination](#server-side-pagination) on the List widget.

</dd>

#### Total records `number`

<dd>

This field displays the number of records in the source data for a list. This value is used to calculate the number of pages to be displayed when using server-side pagination. Note that this field is only visible when **Server Side Pagination** is enabled.

</dd>

#### onPageChange

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when the List's page changes. You can chain multiple actions together, and all the nested actions would run simultaneously.


</dd>

### Item selection

#### Default selected item

<dd>

Allows you to specify which item should be selected by default when a user first opens the List widget. To set the **Default Selected Item**, enter a valid data identifier for the item you want to select.

</dd>

#### onitemClick 

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when a list item is clicked. You can chain multiple actions together, and all the nested actions would run simultaneously.

</dd>

### General

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget is not visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to control the widget's visibility conditionally.

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```

</dd>

#### Animate Loading `boolean`

<dd>

Controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>


## Style properties

Style properties allow you to change the look and feel of the widget.

### General

#### Item spacing `number`

<dd>

Adds padding to the list cells. It accepts Pixels(px) as a unit for the gap width between list item cards.

</dd>

### Color

#### Background Color `string`

<dd>

Sets the background color of the widget, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color). Additionally, it can be programmatically modified using JavaScript functions.

</dd>

### Border and shadow

#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify a valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`
 
<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.


</dd>


## Reference properties

Reference properties enable you to access the widget's data and state using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically.

#### backgroundColor `string`

<dd>

Represents the widget's Background Color setting as a CSS color value.

*Example*:

```js

{{List1.backgroundColor}}
```

</dd>

#### currentItemsView `array`

<dd>

Contains an array of objects where each object represents a widget within the list items and holds information about the widgets' state.

*Example*:

```js
{{List1.currentItemsView}}
```

</dd>

#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{List1.isVisible}}
```

</dd>

#### itemSpacing `number`

<dd>

Reflects the vertical spacing between each item. The value can range between 0 and 16.

*Example*:

```js
{{List1.itemSpacing}}
```

</dd>

#### listData `array`

<dd>

Contains an array of objects that each represents a list item and its data.

*Example*:

```js
{{List1.listData}}
```

</dd>

#### pageNo `number`

<dd>

Contains a number representing which page of the List is currently displayed.

*Example:*

```js
{{List1.pageNo}}
```

</dd>

#### pageSize `number`

<dd>

Contains a number representing the number of list items that can fit on one page of the List.

*For example:*

```js
{{List1.pageSize}}
```

</dd>

#### selectedItem `object`

<dd>

Returns an object that contains the data of the selected list item.

*Example:*

```js
{{List1.selectedItem}}
```

</dd>

#### selectedItemView `object`

<dd>

Contains an object representing the state of the widgets inside a list item when it's selected.

*Example:*

```js
{{List1.selectedItemView}}
```

</dd>

#### triggeredItem `object`

<dd>

Contains an object representing the data of the list item that's selected when you click the list item card or when you interact with an widget (such as a button) inside the list item.

*Example:*

```js
{{List1.triggeredItem}}
```

</dd>

#### triggeredItemView `object`

<dd>

Contains an object representing the state of the widgets inside a list item that's selected when you click the list item card or when you interact with a widget (such as a button) inside the list item.

*Example:*

```js
{{List1.triggeredItemView}}
```

</dd>

## Internal reference properties

These properties are available only to the widgets placed inside the List widget and enable you to configure the widget's properties based on the position/order of the item.

#### currentItem `object`

<dd>

Represents the data for a particular item.


</dd>

#### currentIndex `number`

<dd>

Returns the index of the current item.

</dd>

#### currentView `object`

<dd>

Returns the data and state of the widgets present in the current list item. This property can be used to access all sibling widgets present inside a List item card.

</dd>

#### level_* `object`

<dd>

This property is only available for nested lists where \* represents the level number (from 1 through 3, where 1 refers to the outermost list). It can be used to access the **currentItem**, **currentView** and **currentIndex** properties of the parent lists.

*Example:*

```js
{{level_1.currentItem.name}}
```

</dd>

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and you can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility (param: boolean): Promise

<dd>

Sets the visibility of the widget.

*Example*:

```js
List1.setVisibility(true)
```

</dd>


##  Display data in list items

The **Items** property accepts data as an array of objects and can bind your dataset to the List widget. You can bind static or dynamic data generated by executing a query or a JS function.

### Static data mapping

You can display static JSON data in the **Items** property for generating the list items.

**Example:** see the JSON snippet below; a collection of books has details like `bookId`, `bookName`, and `price`.

```json
[
  {
    "bookId": "001",
    "bookName": "Artificial Intelligence for Business Leaders",
    "bookImage": "https://m.media-amazon.com/images/I/511Y1LSr0JL.jpg",
    "price": "INR 599"
  },
  {
    "bookId": "002",
    "bookName": "Bootstrap 4 Quick Start",
    "bookImage": "https://images-na.ssl-images-amazon.com/images/I/41GTBaVKAyL._SX404_BO1,204,203,200_.jpg",
    "price": "INR 439.90”
 }
]
```

Add three Text widgets and one Image widget in the first list item to display the data in the List widget.

Follow the steps below to bind each JSON field to the widgets embedded in the List:

* Select the Image widget and add  `{{currentItem.bookImage}}` under **Image** property. **currentItem** refers to the data for a particular item. All the list items get populated based on the corresponding data in the JSON object.
* You can now see the image in the list item, as the image widget renders the image available on the URL supplied in JSON.

Similarly, you can bind `bookName`, `bookId`, and `price` to the Text widgets in the first list item.

### Dynamic data mapping

If you want to bind the response from a query or a JS function, then you can use mustache syntax `{{ }}`. Use the format of `{{QUERY_NAME.data}}` to bind the data returned by the query. For example, You a query `GetAllEmployees`, bind the response in the **Items** property as shown below:

```javascript
{{GetAllEmployees.data}}
```

To learn how to bind data from JS functions, see [Display Data from JS function](/core-concepts/writing-code/workflows#display-data-from-async-js-function)

To display the data in individual widgets in the list item cards, use the **currentItem** property to bind the corresponding value from the object's fields in the widget as shown below. 
 
```javascript
{{currentItem.<attribute_or_column_name>}}
```

where `currentItem` for the first list item reflects the 0th object in the dataset. This can be used anywhere within a widget that's placed inside the List widget.


### Unique list item identifier

The List widget needs to identify each item uniquely to update, reorder, add or remove them. Similar to the `Primary Key` concept in the database or `key` in React, an identifier should be selected from the **Data identifier** property dropdown whose values are unique in the dataset provided to the List widget. 

In the preceding example, the identifier `bookId` has a unique value in the dataset.

If no such unique identifier is present in the data, you can join multiple identifiers  to form a unique pattern by enabling the `JS` mode in the property.

**Example:**
```
{{currentItem.bookName + "_" + currentItem.author}}
```

:::tip
Always set the **Data Identifier** property with a valid unique identifier to boost performance.
:::

## Server-side pagination

Lists are often required to display large data sets from queries, but browsers can only sometimes load all the data in the database or might do so slowly. You can use server-side pagination when a client receives only a subset of data from large datasets. It allows you to define the data limit that a query call can render, thus enabling you to paginate the data and determine the pagination boundaries.

Follow the steps below to paginate the responses and request smaller chunks of data at a time:

1. Enable the **Server Side Pagination** property for the List.
2. Call the query on the **onPageChange** event listener.
3. Set the `LIMIT` and `OFFSET` clauses in the query using the **pageSize** and **pageNo** properties of the List as shown below:

```javascript
SELECT * FROM users LIMIT {{ <listName>.pageSize }} OFFSET {{ (<listName>.pageNo - 1) * <listName>.pageSize }}
```

## Access list items

* You can reference the values of each field inside the array dataset bound to the List for the selected list item using the **selectedItem** as shown below:

  ```javascript

  {{<listName>.selectedItem.<fieldName>}}
  ```

  **Example** - In the preceding example, if you want to display the book name of the selected item in a Text widget, bind it in the **Text** property of the Text widget as shown below 

  ```javascript

  {{<listName>.selectedItem.bookName}}
  ```

* You can access the sibling widgets inside a list item card using the **currentView** property. 

  **Example** - If you have an Input widget and a Button widget inside the List and want to use the Input's **Text** property to show an alert message on button click. In the button widget's *onClick* event, you can access the input widget's value as shown below

  ```javascript
  {{showAlert(currentView.<inputName>.text)}}
  ```
  The **currentView** property should always be used to access sibling data instead of referencing it directly Eg: `{{Input1.text}` may seem to work in the app's Edit mode but won't work when deployed.   

* The **currentItemsView** helps you to view the data and the state of the widgets present in all the items of the List widget and is an *array* of *objects* with each widget's state represented as an object. The *array* of *objects* is limited to the number of items visible on the page rather than the number list items present. If there are 300 objects in the list data, but the List widget is showing 5 items per page, then the **currentItemsView** property shows an *array* of only 5 *objects*.

  **Example** - Below is an example of the evaluated value for all the items of the List.

  ```js
  [
    {
      "Image1": {
        "image": "https://assets.appsmith.com/widgets/default.png",
        "isVisible": true
      },
      "Text2": {
        "isVisible": true,
        "text": "Blue"
      },
      "Text3": {
        "isVisible": true,
        "text": "001"
      }
    },
    {
      "Image1": {
        "image": "https://assets.appsmith.com/widgets/default.png",
        "isVisible": true
      },
      "Text2": {
        "isVisible": true,
        "text": "Green"
      },
      "Text3": {
        "isVisible": true,
        "text": "002"
      }
    },
    {
      "Image1": {
        "image": "https://assets.appsmith.com/widgets/default.png",
        "isVisible": true
      },
      "Text2": {
        "isVisible": true,
        "text": "Red"
      },
      "Text3": {
        "isVisible": true,
        "text": "003"
      }
    }
  ]
  ```

## Nested lists

You can nest lists within a List widget up to three levels. The **level_*** property can be used to access the parent List item's data and widget properties where * represents the level number (from 1 through 3).

Suppose there is a parent list - `parentList`, and a child list - `childList1`. The widgets present in the inner list `childList1` can access the values of an attribute/field in the dataset using the **currentItem** property of the outer list `parentList` as shown below:

```javascript
{{level_1.currentItem.fieldName}}
```

You can use the **currentView** and **currentIndex** properties similarly.

Suppose there is another List widget `childList2` inside `childList1`. The innermost list, `childList2` can access two levels - **level_1** and **level_2**. Here, **level_1** represents the data and state of the topmost list widget, `parentList` and **level_2** represents `childList1`.

The parent list widgets don't have access to it's child list widgets. In the preceding example, the widgets in `childList1` can't use `level_2` or `level_3` to access the data in it child lists. Similarly, `childList1` can only access `level_1` and not `level_2`, but `childList2` can access both `level_1` and `level_2`.
