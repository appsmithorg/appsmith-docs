
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Column

You can customize each Table column separately by accessing properties through the gear icon ⚙️ in the Table's properties pane. This includes editing existing column properties, adding new custom columns, rearranging columns, and hiding columns.

<ZoomImage src="/img/col-settings.gif" alt="Display images on Table row selection" caption="" />


## Content properties

These properties are customizable options available in the property pane of the Column settings.

### Column Types

<dd>

This property allows users to select the appropriate column type for their Table. Each column type serves a specific function and enhances the Table's interactivity. The available column types are as follows:

- **Button:** A clickable cell that triggers an onClick event, allowing users to perform actions directly from the Table. The triggeredRow reference property retrieves data from the corresponding row, making it easy to reference that specific entry.

- **Checkbox:** Represents a binary value (True/False) and displays checked and unchecked states. Users can interact with this column to toggle values. This column type can be made editable by enabling the Editable property in the column settings, allowing users to modify the state directly.

- **Icon Button:** A button that displays an icon instead of text. When clicked, it triggers an onClick event, providing a streamlined interaction option. The triggeredRow reference property retrieves data from the corresponding row, similar to the Button type.

- **Image:** Displays images by interpreting the cell value as an image source URL or base64 data. If the provided data is invalid, the cell displays "Invalid Image," ensuring clarity for users when images fail to load.

- **Menu Button:** A collection of buttons that expands into a menu upon interaction. Users can dynamically add menu items by setting the Menu Items Source to Dynamic, referencing `{{currentRow}}` in the Source Data property for seamless integration with the Table's data.

- **Number:** Specifically designed for numeric data entry, this column type supports inline editing, allowing users to modify values directly within the Table. The Editable property can be enabled to facilitate user interaction.

- **Plain Text:** Represents data using readable characters, allowing for easy comprehension. This column type supports inline editing, enabling users to update text directly within the Table when the Editable property is enabled.

- **Switch:** A toggle feature that allows users to turn an item on or off, representing binary values. This column type supports inline editing, and enabling the Editable property provides users the flexibility to change the state as needed.

- **URL:** Interprets the cell value as a hyperlink, allowing users to click on the cell to open the corresponding URL in a new browser tab. It is essential to include both the domain and suffix of the URL for proper functionality.

- **Video:** Displays videos directly within a Table. Users can add videos by providing a source file path or URL from supported platforms such as YouTube, Facebook, Twitch, and others, enhancing multimedia engagement.

- **Date:** Facilitates custom formatting options for date and time information. Users can format and display the date using the Date Format and Display Format properties. This column type also supports inline editing, allowing users to modify date entries directly.

- **Select:** Enables users to choose from a predefined list of options. The Options property should be an array of objects, each containing label and value properties. This column type is editable only when the Editable property is enabled, allowing for direct selection within the Table.

</dd>

### Computed value

<dd>

This property allows you to display and manipulate Table data using JavaScript expressions. The currentRow property is automatically generated when data is added to the Table, representing the current row's data. For example, to display the date of birth in a column named dob, the computed value would be `{{currentRow['dob']}}`. You can also use custom expressions to calculate new values based on the data in each row.



*Example*: If you want to add a prefix like `Mr`. or `Mrs.` to names in the name column based on the `gender` column, you can use a computed value:

1. In the Table's **Table Data** property, display the data using:

```
{{fetchData.data}}
```

2. Select the `name` column from the list of columns, and add following code in the **Computed Value** property:

```js
{{currentRow.gender === "male" ? "Mr " + currentRow.name : "Mrs " + currentRow.name}}
```

The code uses a ternary operator to add a prefix of `Mr.` or `Mrs.` to the name column based on the value of the gender column in the current row.

<ZoomImage src="/img/col-example.png" alt="Display images on Table row selection" caption="Formatting Column" />

</dd>

#### Currency `string`

<dd>

This property allows you to specify the currency type for the column. You can select from a list of countries and their corresponding currencies. Additionally, by enabling the JS option, you can use `ISO 4217` currency codes, which are three-letter codes assigned to each currency for international identification.

</dd>

#### Decimals Allowed `number`

<dd>

This property defines the maximum number of decimal places permitted. You can set it to 0, 1, or 2, depending on the level of precision required for the numeric value. 

</dd>

#### Notation `string`


<dd>

This property determines how the currency is displayed. It offers two options:

- **Standard**: Displays the full currency value (e.g., $1,000.00).

- **Compact**: Displays the currency in a shorter format (e.g., $1K for 1,000).

</dd>


#### Date Format `string`
<dd> 

This property defines the format of incoming date data used in the Computed Value property. For example, if the incoming date is in `YYYY-MM-DD HH:mm` format and the Date Format property matches, the date is parsed and displayed correctly. If the formats don’t match, 'Invalid date' is shown in the column. 

</dd>

#### Display Format `string`

<dd> 

This property controls how the date is presented to the user. For example, if the incoming date format is `YYYY-MM-DD` and you want to display it in `DD/MM/YYYY` format, the date is shown to the user in the selected format.


</dd>


### Basic

#### Text

<dd>

This property sets the label for the column type. For example, if you set the column type as a button, you can specify the button's label using this property.

</dd>

#### Menu items source `string`

<dd>

This property allows you to specify the source of the menu items.

Options:

- **Static:** When the Static option is selected, the Menu Items property becomes visible, enabling you to add and manage the menu items directly from the UI. Click the ⚙️ gear icon to access the configuration options. For more information, see [Menu Items](/reference/widgets/menu/menu-items).

- **Dynamic:** With the Dynamic source, menu items are populated by binding a query to the source data. To configure the properties of the menu items, click the Configure Menu Item button. The menu items do not display until configured using the currentItem or currentIndex property.

</dd>

#### Source data `array`

<dd>

This property is used to provide the data for dynamic menus. It accepts an array of values that can be defined statically or derived from any query.

*Example*:

```js
{{[
  { "label": "Admin", "value": "admin" },
  { "label": "Editor", "value": "editor" },
  { "label": "Viewer", "value": "viewer" }
]}}
```

Once you have configured the **Source Data**, you need to configure the **Menu items** to display the data. You can reference the menu item using `{{currentItem.label}}` to dynamically populate the menu based on the specified values.



</dd>



#### Configure menu items `string`

<dd>

This property allows you to configure the menu items defined in the **Source Data** property. When you click on the **Configure** button, you can update the styles and label properties.

To display the menu items, you need to set the label property using either `{{currentItem}}` or `{{currentIndex}}` to reference the corresponding values.

*Example:*

```js
{{currentItem.label}}
```

</dd>

#### Icon

<dd>

This property specifies the icon displayed on the button. You can also use JavaScript to dynamically set the icon. Appsmith utilizes icons from the [Blueprintjs](https://blueprintjs.com/docs/#icons) library.


</dd>

### General

#### Visible `boolean`

<dd>

This property controls the visibility of the column. If set to false, the entire column is hidden from view in the Table.

</dd>

#### Cell Wrapping `boolean`

<dd>

This property allows the content of the cell to be wrapped, enabling the display of longer text within the cell without overflowing.

</dd>

#### Editable `boolean`

<dd>

This property determines whether users can modify a field or cell. When enabled, you can configure additional editable properties related to the column. For more information, see [Inline Editing](/reference/widgets/Table/editable).


</dd>


####  Column Freeze `boolean`

<dd>

This property allows you to freeze or unfreeze a column, keeping it fixed to the left or right of the Table as users scroll horizontally.

</dd>

#### Disabled `boolean`

<dd>

This property disables user input for the column. While the column remains visible, users will not be able to interact or make changes to it.

</dd>


### Select properties

These properties become available only when the column type is set to Select. They enable you to customize the behavior and appearance of the select column


#### Options `array`

<dd>

This property defines the options to be displayed in the select dropdown. It should be provided as an array of objects, where each object contains a `label` and a `value`. 

Example: If you want to create a gender selection dropdown, you could define the options as follows:



```js
[
  {"label": "Male", "value": "male"},
  {"label": "Female", "value": "female"}
]
```

</dd>

#### Placeholder `string`

<dd>

The placeholder provides a hint to users about what type of information is expected in the field.

</dd>

#### Filterable `boolean`

<dd>

This property allows you to make the dropdown list filterable. When enabled, it adds a search bar inside the select component, letting users quickly find options by typing in the input field

</dd>

#### Reset filter text on close `boolean`

<dd>

This property determines whether the filter text in the dropdown is reset when the dropdown is closed. When set to `true`, any text entered in the search bar will be cleared upon closing the dropdown.

</dd>

#### Server Side Filtering `boolean`

<dd> 
This property enables server-side filtering of the dropdown data. When set to `true`, the application sends filter queries to the server based on user input, retrieving only the relevant options. This is beneficial for large datasets, improving performance and reducing loading times by fetching only necessary items as users type. 
</dd>

## Style

Style properties let you customize the appearance of each column, including text alignment, colors, and fonts.

### Text formatting

#### Text size `string`

<dd>

Specifies the size of the text in the column. Options include Small (S), Medium (M), Large (L), and Extra Large (XL).

</dd>

#### Emphasis `string`

<dd>

Specifies the text styling options for the column. You can choose from **Bold**, **Italic**, and **Underline**, and select multiple options if needed to apply different styles.

</dd>

#### Text/Horizontal alignment `string`

<dd>

Controls the horizontal alignment of text/button within the column. Options include **Left**, **Center**, and **Right** alignment. 

</dd>

#### Vertical alignment `string`

<dd>

Sets the vertical alignment of the text/button within the column. Options include **Top**, **Middle**, and **Bottom** alignment. 

</dd>

#### Border Radius
  <dd>
    Allows you to apply rounded corners to cells within the column.
  </dd>
  
  #### Box Shadow
  <dd>
    Adds a shadow effect to the cells in the column, giving them a raised appearance.
  </dd>
  
  #### Button Variant
  <dd>
    Specifies the visual style for buttons in the column, such as primary, secondary, or custom styles.
  </dd>
  
  #### Button Color
  <dd>
    Sets the background color of buttons within the column.
  </dd>
  
  #### Cell Background (Column Color)
  <dd>

You can style each column type from the style property pane, including options to change column color. However, if you need more advanced customization, such as changing Table color/column color, you can use the `currentRow` and `currentIndex` references to create custom color expressions. These expressions enable you to conditionally change color and style of individual cells based on their content, offering more flexibility than simply applying a static style to an entire column.

*Example:* You have a column named `status` that reflects `approved` and `pending` values. You can set the color for these values using the following expression in the **Cell Background** property:

```js
{{currentRow.status === "approved" ? "#22c55e" : "#facc15"}}
```
If you want to keep the same background color for an entire row, you can use the same custom style expression in each column **Cell Background** property.

<ZoomImage src="/img/cell-color.png" alt="Display images on Table row selection" caption="Color Formatting" />



  </dd>

  #### Text Color

  <dd>

    Defines the color of the text displayed in the column.

  </dd>
  
  #### **Image Size**

  <dd>

    Adjusts the size of images when using an Image column type. Options include predefined sizes.

  </dd>
  
  #### **Position**
  <dd>
    Defines the positioning of content within the cell, such as relative or absolute positioning.
  </dd>
  
  #### **Icon**
  <dd>
    Displays an icon within the cell, which can be chosen from available icon sets or set dynamically using JS.
  </dd>





