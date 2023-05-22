
# Code Scanner
This page provides information on how to use the Code Scanner widget to scan barcodes and QR codes.

<VideoEmbed host="youtube" videoId="Suhefwa5pz0" title="How To Build A Self-Checkout Payment System With The Code Scanner Widget" caption="Building a Self-Checkout Payment System with Code Scanner Widget"/>

## Access detected code value

After scanning a barcode or QR code, you can access the detected code value by using the reference property `value`. This property holds the value of the scanned code, allowing you to retrieve it for further processing or display. For example:

* Drop a Text widget onto the canvas and sets its **Text** property to:
```
{{CodeScanner1.value}}
```
* When you scan a code, the value of the code is displayed in the Text widget.


Additionally, you can use the **onCodeDetected** event to trigger an action when a valid barcode or QR code is detected. 

### Supported QR/Barcode formats

The following formats for QR and barcodes are supported:

| 1D product | 1D industrial | 2D          |
| ---------- | ------------- | ----------- |
| UPC-A      | Code 39       | QR Code     |
| UPC-E      | Code 128      | Data Matrix |
| EAN-8      | ITF           | Aztec       |
| EAN-13     | RSS-14        | PDF 417     |

## Properties

Properties allow you to customize the widget, connect it to other widgets and trigger events on user actions.


### Widget properties

These properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **Scanner Layout** | String           | Determines the visual appearance and behavior of the widget used for scanning. The available options are:<br/>Always On:  The code scanner widget is always active and ready for scanning.<br/>Click to Scan: The code scanner widget is activated only when clicked by the user.   | NA                           |
| **Text**                    | String           | Specifies the label text displayed alongside the scanning widget.    | NA                           |
| **Visible**                   | Boolean | Controls the visibility of the widget on the application page. | `{{CodeScanner.isVisible}}`  |
| **Disabled**               | Boolean | Disables user input for the widget. The widget remains visible, but user interaction is not allowed.      | `{{CodeScanner.isDisabled}}` |
| **Animate Loading**               | Boolean           | Specifies a tooltip message for the widget, providing hints or additional information about the expected input from the user.| NA                           |
| **Tooltip**                | String           | It sets a tooltip for the widget. You can add hints or extra information about the required input from the user.         | NA                           |

### Reference properties

These properties can be referenced in other widgets, queries, or JS functions using the dot operator. For instance, you can use `CodeScanner1.isVisible` to get the visibility status.

| Reference Property | Data type | Description                                                                                                                                                    |
| ----------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **isVisible**  | Boolean| Represents the visibility status of the code scanner widget. |
| **isDisabled**       | Boolean | Indicates whether the code scanner widget is disabled for user input.                                                                                 |
| **Value**           | String              | Retrieves the scanned code value from the widget.                                                                                                                                         | `{{CodeScanner.value}}`      |


### Style properties

Style properties allow you to change the look and feel of the widget. All of these properties are present in the property pane of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Icon**         | Icon  | Sets an icon to be included in the input field.        |
| **Position**     | String  | Sets the label position of the widget.                 |
| **Placement**      | String| Sets the label alignment of the widget.                |
| **Button Color**   | String| Allows you to set color for the button.                |
| **Border Radius**  | String| Allows you to define curved corners.                   |
| **Box Shadow**     | String| Allows you to choose from the available shadow styles. |



## Events

These are functions that are called when event listeners are triggered in the widget. Use [actions](/reference/appsmith-framework/widget-actions) to execute tasks based on user events.


| Event       | Description                                                                                                                                                                                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onCodeDetected** | Triggers an action when a valid code is detected. |

