
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Column

This page explains how to customize each table column separately by accessing a range of properties available through the gear icon located in the table's properties pane. You can edit the properties of existing columns, including their name, data type, and computed value. Additionally, you can add new custom columns, rearrange columns, and hide columns as needed.

<figure>
  <img src="/img/col-settings.gif" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>



### Computed value

In the Table widget, computed values refer to a column property that allows you to access and manipulate the displayed value using JavaScript expressions. This property can only be accessed within the column settings. You can use the `currentRow` property to access each row's column values.

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


* **Date**: 
The Date column type allows you to set up custom formatting options for date and time information. You can format and display the date using the Date Format and Display Format properties.

   * The **Date Format** property specifies the date format of the incoming data specified in the **Computed Value** property. The date should be specified in a format that can be parsed correctly. For example, if the incoming date is in the format `YYYY-MM-DD HH:mm` and the option selected in the **Date Format** property is **DD/MM/YYYY**, then it is not able to parse the date and displays 'Invalid date' in the column. In this case, you can fix it in two ways. 

     * Update the option in the **Date Format** property to match the format in the **Computed Value** property. In this case, select formats like **YYYY-MM-DD**, **YYYY-MM-DD HH:mm**, **YYYY-MM-DD hh:mm:ss**, etc.
     * Transform the date in the **Computed Value** property using `moment().format()` to match the one in the **Date Format** property. 

    * The **Display Format** property specifies how the date information should be displayed to the user. For example, if the incoming date is in the format `YYYY-MM-DD` but the **Display Format** property is set to `DD/MM/YYYY`, the date information would be displayed to the user in the desired format of `DD/MM/YYYY`.

It's important to ensure that both properties are set correctly to handle and display date and time information in your app. 


* **Select**:
The Select column type allows users to select an option from a predefined list of choices. To set up a Select column, you need to specify the list of options in the Options property. The Options property should be an array of objects, with each object containing a `label` and a `value` property, `[{ "label": "ABC", "value": "abc"}]`. 

  If you want to specify the options available for new rows in a Select column, you can use the following properties:

   * **Same options in new row:** When this property is turned on, it ensures that the same options are available for new rows as well. For instance, if your Select column has options like `Small`, `Medium`, and `Large`, then these options would also be available when you add new rows.

   * **New row options:** If you want to provide different options for new rows, you can turn off the `Same options in new row` property. This would make the `New row options` property visible, where you can add options specifically for the new row. Please note that the New row options property does not have access to the current row object.

  :::note
  Please note that the Table's **Allow adding a row** property must be turned on to add a new row.
  :::


## Properties

These common properties allow you to set the behavior of specific columns within the table widget.

|            Property            	| Data type 	|                                                                       Description                                                                       	|
|:------------------------------:	|-----------	|:-------------------------------------------------------------------------------------------------------------------------------------------------------:	|
| **Column type**                	|     String      	| Sets the type of cell to use in this column. There are a variety of different types that have different behaviors, such as buttons, switches, and more. 	|
| **Computed Value**             	| String    	| It allows you to manipulate the value using JS expressions.                                                                                             	|
| **Visible**                    	| Boolean    	| Controls the column's visibility on the page. When turned off, the column won't be visible.                                                             	|
| **Disabled**                   	| Boolean     	|                                                                                                                                                         	|
| **Column Freeze**              	| String    	|                                                                                                                                                         	|
| **Editable**                   	| Boolean    	|                                                                                                                                                         	|
| **Required**                   	|          Boolean 	|                                                                                                                                                         	|
| **Cell Wrapping**              	|   Boolean        	|                                                                                                                                                         	|
| **Text**                       	|           	| Sets the text of the column type.                                                                                                                       	|
| **Date Format**                	|           	|                                                                                                                                                         	|
| **Display Format**             	|           	|                                                                                                                                                         	|
| **Min Date**                   	|           	|                                                                                                                                                         	|
| **Max Date**                   	|           	|                                                                                                                                                         	|
| **First Day Of Week**          	|           	|                                                                                                                                                         	|
| **Show Shortcuts**             	|           	|                                                                                                                                                         	|
| **Icon**                       	|           	|                                                                                                                                                         	|
| **Menu Items Source**          	|           	|                                                                                                                                                         	|
| **Menu Items**                 	|           	|                                                                                                                                                         	|
| **Add a New Menu Item**        	|           	|                                                                                                                                                         	|
| **Compact**                    	|           	|                                                                                                                                                         	|
| **Min**                        	|           	|                                                                                                                                                         	|
| **Max**                        	|           	|                                                                                                                                                         	|
| **Regex**                      	|           	|                                                                                                                                                         	|
| **Valid**                      	|           	|                                                                                                                                                         	|
| **Error Message**              	|           	|                                                                                                                                                         	|
| **Options**                    	|           	|                                                                                                                                                         	|
| **Same options in new row**    	|           	|                                                                                                                                                         	|
| **Placeholder**                	|           	|                                                                                                                                                         	|
| **Filterable**                 	|           	|                                                                                                                                                         	|
| **Reset filter text on close** 	|           	|                                                                                                                                                         	|
| **Server Side Filtering**      	|           	|                                                                                                                                                         	|
| **Source Data**                	|           	|                                                                                                                                                         	|
| **Configure Menu Items**       	|           	|                                                                                                                                                         	|
| **Item Configuration**         	|           	|                                                                                                                                                         	


## Column type

This property allows you to select the type of cell to use in the column. Currently, the following column types are available:


| Column type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Button**      | The button column type is a cell that can be clicked by the user, which triggers an  `onClick`  event and the  `triggeredRow`  reference property retrieves the data of the corresponding column.                                                                                                                                                                                                                                                                                |
| **Checkbox**    | The checkbox column type denotes a binary value, with the checked and unchecked states represented by True and False, respectively. This column type also supports inline editing and can be made editable by enabling the Editable property in the column settings.                                                                                                                                                                                                             |
| **Icon Button** | An Icon button column type comprises a button that employs an icon instead of text. This type of column contains a clickable cell that triggers an  `onClick`  event and the  `triggeredRow`  reference property retrieves the data of the corresponding column.                                                                                                                                                                                                                 |
| **Image**       | The image column type interprets the cell value as an image source URL or base64 data and showcases the corresponding image within the table. In case of invalid data, the column displays an  `Invalid Image` . The image size can be modified through the Image Size setting in the column's Style settings tab.                                                                                                                                                               |
| **Menu Button** | The menu button column type consists of a collection of buttons arranged in a group. Moreover, menu items can also be added dynamically by using the Menu Items Source as Dynamic.   You can use the  `{{currentRow}}`  binding inside the Source Data property for Menu Items. However, for configuring the menu items, you can only use  `{{currentItem}}`  and  `{{currentIndex}}`  bindings that reference the selected item, and its index respectively on the menu button. |
| **Number**      | The number column type consists of numeric data that is often stored in database columns using number data types. The number column type supports [ inline editing ]( /reference/widgets/table/inline-editing ) and can be made [ **Editable** ]( #editable ) by turning on the Editable property in the column settings.                                                                                                                                                        |
| **Plain Text**  | Plain text refers to data that contains readable characters without any graphical representation or other non-textual elements like images or floating-point numbers. The plain text column type enables inline editing and can be made editable by enabling the Editable property in the column settings.                                                                                                                                                                       |
| **Switch**      | The Switch column type enables users to make binary decisions by toggling the state of a single item on or off. Similar to checkboxes, it uses the boolean values True and False to represent the on and off states respectively. This column type supports inline editing and can be made editable by enabling the Editable property in the column settings.                                                                                                                    |
| **URL**         | In the URL column type, the table interprets the cell contents as a hyperlink, allowing users to click on the cell and be directed to the corresponding URL in a new browser tab. The only pieces of the URL that must be included are the domain and suffix, such as:  `example.com` .                                                                                                                                                                                          |
| **Video**       | The video column type allows for the display of videos within a table. To include a video in a cell, the cell value should be a source file path or URL from platforms like YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, or DailyMotion.                                                                                                                                                                                                          |
| **Date**        | The Date column type allows you to set up custom formatting options for date and time information. You can format and display the date using the Date Format and Display Format properties.                                                                                                                                                                                                                                                                                      |
| **Select**      | The Select column type allows users to select an option from a predefined list of choices. To set up a Select column, you need to specify the list of options in the Options property. The Options property should be an array of objects, with each object containing a  `label`  and a  `value`  property,  `[{ "label": "ABC", "value": "abc"}]` .                                                                                                                            |


## Styles

Depending upon the column type, various style properties are available to change the look and feel of each column. For example, for a text column, you can have the following style properties-

|     Property                    |         Description                                           |
| ------------------------------- | ------------------------------------------------------------- |
| **Text Align**                  | Sets the horizontal alignment of the text.                    |
| **Text Size**                   | Sets the size of the text in the column.                      |
| **Font Style**                  | Sets a font style for text, such as **bold** or _italic_.     |
| **Vertical Alignment**          | Sets how the cell contents are vertically positioned.         |
| **Text Color**                  | Sets the color of the text in the column.                     |
| **Cell Background**             | Sets the background color for the cells in the column.        |
| **Image Size**                  | Allows you to resize an image for Image column type.          |
