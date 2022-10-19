# Column Settings

You can customize each table column through a set of properties by clicking on the gear icon.

![Column Settings](/img/Column\_control.gif)

Clicking on the gear icon opens the column settings that give you major customization options.

## **Column Control**

Column Control has the following properties:

| Property       | Description  |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Column type    | It gives you an option to select the data type for the column  |
| Computed Value |  It allows you to manipulate the value using JS expressions    |
| Visible        | Controls the column's visibility on the page. When turned off, the column will not be visible.  |
| Cell Wrapping  |Controls how overflowing contents of the column are handled.<br/> **on** - Contents get wrapped to the next line.<br/> **off** - Contents get ellipsis. |
| Editable       | Controls whether cells of the column are editable        |

### Column type

This property allows you to select the type of data in the column. Currently, the following column types are available:

![Column types available for table](/img/column\_type.gif)

#### Button

The button type is a clickable entity that triggers any event attached to it. It captures user intent and triggers an action accordingly. For the button column type, you can use [button properties](../button/).

#### Checkbox

<figure>
  <object data="https://www.youtube.com/embed/EJn6XiZBI0k?autoplay=0" width='860px' height='515px'></object> 
  <figcaption align="center"><i>Checkbox column</i></figcaption>
</figure>


A [checkbox ](../checkbox.md)is a component that enables the user to make a binary choice, i.e. a choice between one of two possible mutually exclusive options. Checkboxes typically use the boolean values **True** and **False** for checked and unchecked, respectively.

The checkbox column type is not [editable](column-settings.md#editable) by default; however, you can change it in the property pane section. You can update or fetch the checkbox value using [**onCheckChange**](./../checkbox.md#events) after setting it to be editable.

#### Date

The [Date column type](../datepicker.md) captures the date and time input by a user. It can be used to filter data based on the input date range as well as to capture personal information such as date of birth.

#### **Icon Button**

An icon button is an icon that triggers an action. More accurately, an icon button is a button that contains an icon and no (visible) accompanying text.

You can use any of the available icons; read this guide to understand more about [icon buttons](../icon-button.md).

#### **Image**

The[ Image](../image.md) type displays the images in the table. Images must be either a URL or a valid base64. Once you've provided the image URL, the image will show up in the table.

#### Menu Button

[Menu buttons](../menu-button.md) represents a set of actions in a group. Menus are sometimes hierarchically organized, allowing navigation through different levels of the menu structure.

#### Number

Numbers are stored in database columns as numeric data types. Typically, these data kinds are categorized by:

* Precise Numeric Types - values that must maintain precision and scale. INTEGER, BIGINT, DECIMAL, NUMERIC, NUMBER, and MONEY.
* Forms of Approximate Numbers - where the precision must be maintained and the scale may be floating. DOUBLE PRECISION, FLOAT, and REAL.

#### Plain Text

The Plain text refers to data (such as file contents) that contain readable characters without their graphical representation or other elements (floating-point numbers, images, etc.).

#### URL

Data that complies with the universal patterns of URLs are of the URL data type. The only pieces of the URL that must be included are the domain and suffix (e.g., example.com ). By clicking on the URL in the table, you can quickly access the URL.

#### Video

A [video ](../video.md)format is a format for storing digital video data on a table. It supports a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, and DailyMotion. You only need to insert the URL of your video and click the play button to play the video.[ ](https://docs.appsmith.com/reference/widgets/video)

#### Switch

The Switch is a UI component that allows users to make a binary decision. Switches toggle the state of a single item **on** or **off**. It employs the boolean values **True** and **False** for the **on** and **off** states, respectively, just like the [checkbox](column-settings.md#checkbox).

The Switch is one of the few column types that supports inline editing; you can update or fetch the switch value using the **onChange event** after setting it to be editable. Read more about [Switch ](./../switch.md)in this guide.

#### Select

A [Select/Dropdown](../select) component is a menu list that offers options from a specified list of permitted inputs. For instance, you can use select type to capture values such as gender, role, and status. Here is a code snippet for the **options** property:

```
[
  {
    "label": "abc",
    "value": "abc"
  }
]
```

![Switch Column type available for table](/img/Switch_column_type.gif)


### Computed Value

The computed value field helps in creating custom table columns. For example, you can show a value calculated from the response of two different queries. This field also allows you to manipulate the value using JS expressions; For example, if you want to show the date time stamp in the human-readable format, you can use a `Moment.JS` function.

![](/img/computed\_value.jpg)


You can also access each row's column values with `currentRow` property. `currentRow` property is only accessible inside column properties. It can be helpful if you wish to merge multiple values/properties under a single column.

For example, in the video below, we renamed the 'email' column to 'Contact' and then used the computed value property inside the column settings to merge email and phone in one column. We later hide the phone column.

<figure>
  <object data="https://www.youtube.com/embed/tjc8HlzQ4xU?autoplay=0" width='860px' height='515px'></object> 
  <figcaption align="center"><i>Merging Columns</i></figcaption>
</figure>

### Visible

`Visible` in the column settings control the column's visibility on the app's page. The column will not be visible on the published app if you turn off this property. You can also write a JS code to link Visible's functionality to a user action. Click on `JS` next to the `Visible` to write JavaScript code.

For example, let's drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Visible` property of a column. To enable the `Visible` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Visible property, and the column will be visible in the app.

<figure>
  <object data="https://www.youtube.com/embed/8mFTnQpI8bA?autoplay=0" width='860px' height='515px'></object> 
  <figcaption align="center"><i>Visible</i></figcaption>
</figure>

### Cell Wrapping

Cell wrapping allows the contents of a cell to be wrapped to the following line instead of getting truncated. Cell wrapping can be enabled for a column or subset of cells in a column using `cell wrapping` property in column settings.

<figure>
  <object data="https://www.youtube.com/embed/RTP1SX6OLL8?autoplay=0" width='860px' height='515px'></object> 
  <figcaption align="center"><i>Cell Wrapping</i></figcaption>
</figure>



### Editable

Editable controls the cell's editability in the column. You can edit data in a cell of the column when it is turned on. Once a column has been made editable, an edit icon appears on the column header as an indicator.

If you hover over any cell in the column, an edit icon will appear. Click on the icon to edit the individual cell.&#x20;

Based on the Column type, you can edit the cell content. Once done, you can move away from the edit mode in two ways:

1. Edited contents can be persisted on the Table cell by either pressing enter key or clicking anywhere outside the cell.
2. Edited contents can be discarded by pressing the escape key.

<figure>
  <object data="https://www.youtube.com/embed/Wmitzz4UAGo?autoplay=0" width='860px' height='515px'></object> 
  <figcaption align="center"><i>Editable</i></figcaption>
</figure>

## Styles

Depending upon the column type, various style properties are available to change the look and feel of each column. For example, for a text column, you can have the following style properties-

|     Property                    |         Description                                           |
| ------------------------------- | ------------------------------------------------------------- |
| Text Align                      | Sets the horizontal alignment of the text.                    |
| Text Size                       | Allows you to set the size of the text in the column          |
| Font Style                      | Allows you to choose a font style, i.e., bold or italic.      |
| Vertical Alignment              | Sets the vertical alignment of the contents in a column cell. |
| Text Color                      | Allows you to set text color for the column.                  |
| Cell Background                 | Allows you to set background color for the cells.             |
