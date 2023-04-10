# Column Settings

You can customize each table column individually through a set of properties by clicking on its gear icon in the table's properties pane.

![Column Settings](/img/Column\_control.gif)

## Properties

These common properties allow you to set the behavior of specific columns within the table widget.

| Property       | Description  |
| -------------- | -------------|
| **Column type**    | Sets the type of cell to use in this column. There are a variety of different types that have different behaviors, such as buttons, switches, and more.  |
| **Computed Value** |  It allows you to manipulate the value using JS expressions    |
| **Visible**        | Controls the column's visibility on the page. When turned off, the column won't be visible.  |
| **Cell Wrapping**  |Controls how overflowing contents of the column are handled.<br/> **on** - Contents get wrapped to the next line.<br/> **off** - Contents get ellipsis. |
| **Editable**       | Controls whether cells of the column are editable.        |
| **Column Freeze** | Controls whether to unfreeze or freeze the column to the left or right. For more information about column freezing, see [Freeze Columns](/reference/widgets/table#freeze-columns). |

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

![Column types available for table](/img/column\_type.gif)

#### Button

The button column type is a clickable cell that triggers an **onClick** event attached to it. For extra information about buttons, read about the [Button widget](/reference/widgets/button).

#### Checkbox

<VideoEmbed host="youtube" videoId="EJn6XiZBI0k" title="Checkbox column" caption="Checkbox column"/>

The [checkbox](/reference/widgets/checkbox) column type represents something with two possible values - usually booleans **True** and **False** for checked and unchecked, respectively.

The checkbox column type supports [inline editing](/reference/widgets/table/inline-editing) and can be made [**Editable**](#editable) by turning on the **Editable** property in the column settings.

#### Date

The Date column type allows you to set up custom formatting options for date and time information. You can format and display the date using the Date Format and Display Format properties.

* The **Date Format** property specifies the date format of the incoming data specified in the **Computed Value** property. The date should be specified in a format that can be parsed correctly. 

For example, if the incoming date is in the format `YYYY-MM-DD HH:mm` and the option selected in the **Date Format** property is **DD/MM/YYYY**, then it is not able to parse the date and displays 'Invalid date' in the column. In this case, you can fix it in two ways. 
* Update the option in the **Date Format** property to match the format in the **Computed Value** property. In this case, select formats like **YYYY-MM-DD**, **YYYY-MM-DD HH:mm**, **YYYY-MM-DD hh:mm:ss**, etc.
* Transform the date in the **Computed Value** property using `moment().format()` to match the one in the **Date Format** property. 

* The **Display Format** property specifies how the date information should be displayed to the user. For example, if the incoming date is in the format `YYYY-MM-DD` but the **Display Format** property is set to `DD/MM/YYYY`, the date information would be displayed to the user in the desired format of `DD/MM/YYYY`.

It's important to ensure that both properties are set correctly to handle and display date and time information in your app. 

#### Icon button

The icon button column type contains a button that uses an icon as a label rather than text. It's a clickable cell that triggers an **onClick** event attached to it.

For extra information about icon buttons, read about the [Icon Button widget](/reference/widgets/icon-button).

#### Image

The image column type parses the cell value as an image source URL or base64 data, and displays the resulting image within the table (or "Invalid Image" if the data isn't valid). The size of the image can be adjusted in the column's Style settings tab with the **Image Size** setting.

For more information about images in Appsmith, read about the [Image widget](/reference/widgets/icon-button).

#### Menu Button

The menu button column type is a set of buttons in a group. Menus are sometimes hierarchically organized, allowing navigation through different levels of the menu structure.

For more information, read about the [Menu Button widget](/reference/widgets/menu-button).

You can also add menu items dynamically using the [Menu Items Source as Dynamic](../menu-button.md#dynamic).

:::note
 You can use the `{{currentRow}}` binding inside the Source Data property for Menu Items. However, for configuring the menu items, you can only use [`{{currentItem}}` and `{{currentIndex}}`](../menu-button.md#how-to-use-currentitem-and-currentindex) bindings that reference the selected item, and it's index respectively on the menu button.
:::

#### Number

Numbers are stored in database columns as numeric data types. Typically, these data kinds are categorized by:

* Precise Numeric Types - values that must maintain precision and scale. INTEGER, BIGINT, DECIMAL, NUMERIC, NUMBER, and MONEY.
* Forms of Approximate Numbers - where the precision must be maintained and the scale may be floating. DOUBLE PRECISION, FLOAT, and REAL.

The number column type supports [inline editing](/reference/widgets/table/inline-editing) and can be made [**Editable**](#editable) by turning on the **Editable** property in the column settings.

#### Plain text

The Plain text refers to data (such as file contents) that contain readable characters without graphical representation or other elements (floating-point numbers, images, etc.).

The plain text column type supports [inline editing](/reference/widgets/table/inline-editing) and can be made [**Editable**](#editable) by turning on the **Editable** property in the column settings.

#### URL

When the column type is URL, the table parses the cell contents as a hyperlink and the user may click the cell to be taken to the URL in a new browser tab. The only pieces of the URL that must be included are the domain and suffix (such as: example.com).

#### Video

The video column type displays videos within the table. The cell value should be a source file path or URL, such as YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, or DailyMotion. To read more about videos in Appsmith, take a look at the [Video widget](/reference/widgets/video).

#### Switch

The Switch column type allows users to make a binary decision. Switches toggle the state of a single item on or off. It uses the boolean values **True** and **False** for the on and off states respectively, just like the [checkbox](#checkbox).

The switch column type supports [inline editing](/reference/widgets/table/inline-editing) and can be made [**Editable**](#editable) by turning on the **Editable** property in the column settings.

#### Select

The select column type contains a drop-down list that offers options from a specified list of permitted inputs. For instance, you can use select type to capture values such as T-shirt size, gender, or favorite color. The list of choices for the select column should be placed in the **Options** property, as an array of objects with keys `label` and `value`:

```javascript
[
  {
    "label": "abc",
    "value": "abc"
  }
]
```

For more information about properties specific to this column type, read about the [Select widget](/reference/widgets/select).

![Switch Column type available for table](/img/Switch_column_type.gif)

The select column type supports [inline editing](/reference/widgets/table/inline-editing) and can be made [**Editable**](#editable) by turning on the **Editable** property in the column settings.

The select column type also supports setting the select options while adding a new row. The below mentioned properties help to set the select options for new row:
* Same options in new row:
    When this property is turned ON the options in the first row are used in the new row.
    By default, this property is turned on.
* New row options: When the above property is turned off, this property becomes visible. This will allow to add options specifically for the new row. Supports static and dynamic data, but doesn't have access `currentRow `object.

It is to be noted that `Same options in new row` and `New row options` are only visible when add new row property is turned on in table widget




### Computed value

The computed value field helps in creating custom table columns. For example, you can show a value calculated from the response of two different queries. This field also allows you to manipulate the value using JS expressions; For example, if you want to show the date time stamp in the human-readable format, you can use a `Moment.JS` function.

![](/img/computed\_value.jpg)

You can also access each row's column values with the `currentRow` property. `currentRow` is only accessible from inside the column properties pane. It can be helpful if you wish to merge multiple values/properties under a single column.

In the video below, the "Email" column is renamed to "Contact" and then the **Computed Value** property is used to merge the email and phone number into a single column.

<VideoEmbed host="youtube" videoId="tjc8HlzQ4xU" title="Merging Columns" caption="Merging Columns"/>

### Visible

This controls the widget's visibility on the app's page. When turned off, the widget isn't visible in the published app. You can also use JS code to determine the widget's visibility programmatically. Click on `JS` next to the `Visible` field in the properties pane to write JavaScript code.

For example, drag a checkbox widget `Checkbox1` onto the canvas and bind it to the table's `Visible` property. To enable the `Visible` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, `Visible` is set to `true`, and the table becomes visible in the app.

<VideoEmbed host="youtube" videoId="Jb5bNVhFoRE" title="Visible" caption="Visible"/>

### Cell wrapping

Cell wrapping allows the contents of a cell to be wrapped to the following line instead of getting truncated. Cell wrapping can be enabled for a column or subset of cells in a column using `cell wrapping` property in column settings.

<VideoEmbed host="youtube" videoId="RTP1SX6OLL8" title="Cell Wrapping" caption="Cell Wrapping"/>

### Editable

Editable controls the cell's edit-ability in the column. You can edit data in a cell of the column when it's turned on. Once a column has been made editable, an edit icon appears on the column header as an indicator. Currently, there are several column types support inline editing - **Text**, **Number**, **Switch**, **Select**, and **Checkbox**.

If you hover over any cell in the column, an edit icon appears. Click the icon to edit the individual cell.

Based on the Column type, you can edit the cell content. Once done, you can move away from the edit mode in two ways:

1. Edited contents can be persisted on the Table cell by either pressing enter key or clicking anywhere outside the cell.
2. Edited contents can be discarded by pressing the escape key.

<VideoEmbed host="youtube" videoId="Wmitzz4UAGo" title="Editable" caption="Editable"/>

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
