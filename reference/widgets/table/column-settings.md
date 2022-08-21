# Column Settings

You can customize each table column through a set of properties by clicking on the gear icon.

![Column Settings](../../../.gitbook/assets/Column\_control.gif)

\
Clicking on the gear icon opens the column settings that give you major customization options.

### **Column Control**

Column Control has the following properties:

|                |                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Column type    | It gives you an option to select the data type for the column                                                                                                                         |
| Computed Value |  It allows you to manipulate the value using JS expressions                                                                                                                           |
| Visible        | Controls the column's visibility on the page. When turned off, the column will not be visible.                                                                                        |
| Cell Wrapping  | <p>Controls how overflowing contents of the column are handled. </p><p><strong>on</strong> - Contents get wrapped to the next line. <strong>off</strong> - Contents get ellipsis.</p> |
| Editable       | Controls whether cells of the column are editable                                                                                                                                     |

#### **Column type**

This property allows you to select the type of data in the column.

![
](../../../.gitbook/assets/column\_type.gif)

#### Computed Value

The computed value field is helpful for creating custom table columns. For example, you can show a value calculated from the response of two different queries. This field also allows you to manipulate the value using JS expressions; For example, if you want to show the date time stamp in the human-readable format, you can use a `Moment.JS` function.

![](../../../.gitbook/assets/computed\_value.jpg)

\
You can also access each row's column values with `currentRow` property. `currentRow` property can only be accessed inside column properties. It can be helpful if you wish to merge multiple values/properties under a single column.

For example, in the video below, we renamed the 'email' column to 'Contact' and then used the computed value property inside the column settings to merge email and phone in one column. We later hide the phone column.

{% embed url="https://youtu.be/tjc8HlzQ4xU" %}

#### Visible

`Visible` in the column settings control the column's visibility on the app's page. The column will not be visible on the published app if you turn off this property. You can also write a JS code to link Visible's functionality to a user action. Click on `JS` next to the `Visible` to write JavaScript code.

For example, let's drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Visible` property of a column. To enable the `Visible` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Visible property, and the column will be visible in the app.

{% embed url="https://youtu.be/8mFTnQpI8bA" %}

#### Cell Wrapping

Cell wrapping allows the contents of a cell to be wrapped to the next line instead of getting truncated. Cell wrapping can be enabled for a column or subset of cells in a column using `cell wrapping` property in column settings.

{% embed url="https://youtu.be/RTP1SX6OLL8" %}



#### Editable

Editable controls the cell's editability in the column. You can edit data in a cell of the column when it is turned on. Once a column has been made editable, an edit icon appears on the column header as an indicator.

If you hover over any cell in the column, an edit icon will appear. Click on the icon to edit the respective cell.&#x20;

Based on the Column type, cell content can be edited. Once done user can move away from the edit mode in two ways:

1. Edited contents can be persisted on the Table cell by either pressing enter key or clicking anywhere outside the cell.
2. Edited contents can be discarded by pressing the escape key.

{% embed url="https://youtu.be/Wmitzz4UAGo" %}

### Styles

Depending upon the column type, there are various style properties available to change the look and feel of each column. For example, for a text column, you can have the following style properties-

|                    |                                                               |
| ------------------ | ------------------------------------------------------------- |
| Text Align         | Sets the horizontal alignment of the text.                    |
| Text Size          | Allows you to set the size of the text in the column          |
| Font Style         | Allows you to choose a font style, i.e., bold or italic.      |
| Vertical Alignment | Sets the vertical alignment of the contents in a column cell. |
| Text Color         | Allows you to set text color for the column.                  |
| Cell Background    | Allows you to set background color for the cells.             |
