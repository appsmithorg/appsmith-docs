
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Column

This page explains how to customize each table column separately by accessing a range of properties available through the gear icon located in the table's properties pane. You can edit the properties of existing columns, including their name, data type, and computed value. Additionally, you can add new custom columns, rearrange columns, and hide columns as needed.

<figure>
  <img src="/img/col-settings.gif" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>



### Computed value

In the Table widget, computed values refer to a column property that allows you to access and manipulate the displayed value using JavaScript expressions. This property can only be accessed within the column settings. You can use the `currentRow` property to access each row's column values

For instance, suppose you have a table with a column named `dob` that displays the date of birth for each row. By using the `{{currentRow['dob']}}` reference, you can access and display the data for the `dob` column in each row. With this reference, you can also create custom expressions that compute new values based on the data in the current row.

----
**Example**: suppose you have a table with a `name` column and a `gender` column. If you want to add a prefix of `Mr.` or `Mrs.` to the names in the `name` column based on the data in the `gender` column, you can use a computed value.

1.  Fetch data from the [sample database](https://docs.appsmith.com/core-concepts/connecting-to-data-sources/connecting-to-databases#sample-databases) `users` using a SELECT query `fetchData` to retrieve the data:

```sql
SELECT * FROM users ORDER BY id LIMIT 10;
```
2. In the Table's **Table Data** property, display the data using:

```
{{fetchData.data}}
```

3. Select the `name` column from the list of columns, and add following code in the **Computed Value** property:

```js
{{currentRow.gender === "male" ? "Mr " + currentRow.name : "Mrs " + currentRow.name}}
```

The code uses a ternary operator to add a prefix of `Mr.` or `Mrs.` to the name column based on the value of the gender column in the current row.

<figure>
  <img src="/img/col-example.png" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Formatting Column</i></figcaption>
</figure>


## Edit table


To edit and update table data directly from the UI, you can use Inline editing. To enable inline editing for a table, you can make individual columns editable by checking the **Editable** checkbox in the Columns section of the Table widget properties panel. Once inline editing is enabled, you can double-click on a cell to edit its contents. 

To update the data in a table, you can set the **onSubmit** event for each individual column. This event can be used to perform an action, such as updating a database, when the edited data cell is saved.

If you select Multi-Row from the **Update mode** property, you can edit multiple rows at the same time. The data would be automatically updated as you make changes.

Learn more about [Inline editing](/reference/widgets/table/inline-editing).

## Freeze column

The Freeze Columns feature allows you to freeze the columns of the table while keeping the rest of the table scrollable. This can be useful when you have a large table with many columns and want to keep some of the important columns always visible.

You can freeze columns by turning on the **Allow Column Freeze** property and selecting to freeze a column on either the left or right side of the table. You can also freeze or unfreeze columns via individual column properties.


<figure>
  <img src="/img/as-freeze-column.png" style= {{width:"750px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Freeze column</i></figcaption>
</figure>


## Style

### Column type

This property allows you to select the type of cell to use in the column. Currently, the following column types are available:


* Button
* Checkbox
* Date
* Icon Button
* Image
* Menu Button
* Number
* Plain Text
* Select
* Switch
* URL
* Video

<Tabs>
  <TabItem value="Button" label="Button" default>
   

The button column type is a cell that can be clicked by the user, which triggers an `onClick` event and the `triggeredRow` reference property retrieves the data of the corresponding column.

#### Properties

These properties allow you to edit the column type. All of these properties are present in the property pane of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   **Text**         |  String         | Sets the label of the button.
|     **Disabled**    |  Boolean    |It disables input to the button. The button remains visible to the user, but user input is not allowed.
| **Visible**        |  Boolean | Controls the column's visibility on the page. When turned off, the column won't be visible.  |
| **Column Freeze**  |  Boolean | Controls whether to unfreeze or freeze the column to the left or right. |

#### Events

When the event is triggered, these event handlers can run queries, JS code, or other supported [actions](/reference/appsmith-framework/widget-actions)

| Action                 | Description               |
| ---------------------- | ------------------------- |
| **onClick**             | Sets an action when the user clicks the button column type.     |


  </TabItem>
  <TabItem value="Checkbox" label="Checkbox">
#### Checkbox

<VideoEmbed host="youtube" videoId="EJn6XiZBI0k" title="Checkbox column" caption="Checkbox column"/>

The [checkbox](/reference/widgets/checkbox) column type represents something with two possible values - usually booleans **True** and **False** for checked and unchecked, respectively.

The checkbox column type supports [inline editing](/reference/widgets/table/inline-editing) and can be made [**Editable**](#editable) by turning on the **Editable** property in the column settings.

  </TabItem>
  <TabItem value="Date" label="Date">

The Date column type allows you to set up custom formatting options for date and time information. You can format and display the date using the Date Format and Display Format properties.

* The **Date Format** property specifies the date format of the incoming data specified in the **Computed Value** property. The date should be specified in a format that can be parsed correctly. For example, if the incoming date is in the format `YYYY-MM-DD HH:mm` and the option selected in the **Date Format** property is **DD/MM/YYYY**, then it is not able to parse the date and displays 'Invalid date' in the column. In this case, you can fix it in two ways. 

  * Update the option in the **Date Format** property to match the format in the **Computed Value** property. In this case, select formats like **YYYY-MM-DD**, **YYYY-MM-DD HH:mm**, **YYYY-MM-DD hh:mm:ss**, etc.
  * Transform the date in the **Computed Value** property using `moment().format()` to match the one in the **Date Format** property. 

* The **Display Format** property specifies how the date information should be displayed to the user. For example, if the incoming date is in the format `YYYY-MM-DD` but the **Display Format** property is set to `DD/MM/YYYY`, the date information would be displayed to the user in the desired format of `DD/MM/YYYY`.

It's important to ensure that both properties are set correctly to handle and display date and time information in your app. 

  </TabItem>
 <TabItem value="Icon Button" label="Icon Button" default>
    #### Icon button

The icon button column type contains a button that uses an icon as a label rather than text. It's a clickable cell that triggers an **onClick** event attached to it.

For extra information about icon buttons, read about the [Icon Button widget](/reference/widgets/icon-button).

  </TabItem>
  <TabItem value="Menu Button" label="Menu Button">
    
#### Menu Button

The menu button column type is a set of buttons in a group. Menus are sometimes hierarchically organized, allowing navigation through different levels of the menu structure.

For more information, read about the [Menu Button widget](/reference/widgets/menu-button).

You can also add menu items dynamically using the [Menu Items Source as Dynamic](../menu-button.md#dynamic).

:::note
 You can use the `{{currentRow}}` binding inside the Source Data property for Menu Items. However, for configuring the menu items, you can only use [`{{currentItem}}` and `{{currentIndex}}`](../menu-button.md#how-to-use-currentitem-and-currentindex) bindings that reference the selected item, and it's index respectively on the menu button.
:::
  </TabItem>

 <TabItem value="Number" label="Number" default>
 #### Number

Numbers are stored in database columns as numeric data types. Typically, these data kinds are categorized by:

* Precise Numeric Types - values that must maintain precision and scale. INTEGER, BIGINT, DECIMAL, NUMERIC, NUMBER, and MONEY.
* Forms of Approximate Numbers - where the precision must be maintained and the scale may be floating. DOUBLE PRECISION, FLOAT, and REAL.

The number column type supports [inline editing](/reference/widgets/table/inline-editing) and can be made [**Editable**](#editable) by turning on the **Editable** property in the column settings.

  </TabItem>
  <TabItem value="Plain Text" label="Plain Text">


The Plain text refers to data (such as file contents) that contain readable characters without graphical representation or other elements (floating-point numbers, images, etc.).

The plain text column type supports [inline editing](/reference/widgets/table/inline-editing) and can be made [**Editable**](#editable) by turning on the **Editable** property in the column settings.


  </TabItem>
  <TabItem value="Select" label="Select">

The Select column type allows users to select an option from a predefined list of choices. It is useful for capturing data such as T-shirt size, gender, or favorite color. To set up a Select column, you need to specify the list of options in the Options property. The Options property should be an array of objects, with each object containing a label and a value property.

```javascript
[
  {
    "label": "abc",
    "value": "abc"
  }
]
```
The `label` property specifies the text that would be displayed to the user, and the value property specifies the value that would be stored in the cell.

The select column type supports [inline editing](/reference/widgets/table/inline-editing) and can be made [**Editable**](#editable) by turning on the **Editable** property in the column settings.

If you want to specify the options available for new rows in a Select column, you can use the following properties:

:::note
Please note that the Table's **Allow adding a row** property must be turned on to add a new row.
:::

* **Same options in new row:** When this property is turned on, it ensures that the same options are available for new rows as well. For instance, if your Select column has options like `Small`, `Medium`, and `Large`, then these options would also be available when you add new rows.

* **New row options:** If you want to provide different options for new rows, you can turn off the `Same options in new row` property. This would make the `New row options` property visible, where you can add options specifically for the new row. Please note that the New row options property does not have access to the current row object.
  
</TabItem>
 <TabItem value="Switch" label="Switch" default>
    
The Switch column type allows users to make a binary decision. Switches toggle the state of a single item on or off. It uses the boolean values **True** and **False** for the on and off states respectively, just like the [checkbox](#checkbox).

The switch column type supports [inline editing](/reference/widgets/table/inline-editing) and can be made [**Editable**](#editable) by turning on the **Editable** property in the column settings.

  </TabItem>
 
</Tabs>

