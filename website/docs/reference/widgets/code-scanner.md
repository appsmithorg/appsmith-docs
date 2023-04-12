
# Code Scanner

**Barcodes** and **QR** codes are now found on a wide range of goods, including health bands, rental cars, checked baggage, and clothing purchased from supermarkets or retail stores. They each identify a thing or a person and encode significant information.

The Code Scanner widget allows you to scan a variety of barcodes and QR codes. Using this widget, you'll be able to enhance internal business operations and provide excellent customer service.

<VideoEmbed host="youtube" videoId="Suhefwa5pz0" title="How To Build A Self-Checkout Payment System With The CodeScanner Widget" caption=""/>

## Usage

QR/Barcodes have taken off because they offer a clear and fast return on investment. It eliminates manual entry of product information at receiving, meaning there are far fewer opportunities for error. You can use a code scanner in the below scenarios:

* **Warehouse**- Companies need to know not just their current inventory levels, but the location of those products, always. With the help of a code scanner widget, employees can keep track of their warehouse inventories. They can use a code scanner in their app to scan codes rather than manually entering them.
* **Asset Management**- The most widely used system by businesses for tracking equipment, vehicles, and computers to support their everyday operations is the usage of barcodes. With the code scanner widget, you can keep track of equipment and the location of the assets and keep any pertinent maintenance and repair records.
* **Logistics and Transportation industries**- Effective track and trace methods offer logistics teams the ability to locate, track, and identify objects in real-time, providing better business insight and quicker problem-solving. QR-based tracking eliminates paperwork, reduces errors, and increases productivity.

### Supported QR/Barcode formats

The following formats for QR and barcodes are supported:

| 1D product | 1D industrial | 2D          |
| ---------- | ------------- | ----------- |
| UPC-A      | Code 39       | QR Code     |
| UPC-E      | Code 128      | Data Matrix |
| EAN-8      | ITF           | Aztec       |
| EAN-13     | RSS-14        | PDF 417     |

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

| Property                                         | Type                 | Description                                                                                                                                                               | Code Snippet                 |
|--------------------------------------------------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|
| [Scanner Layout](code-scanner.md#scanner-layout) | Formatting           | Sets the appearance and behavior of the widget.                                                                                                                           | NA                           |
| [Text](code-scanner.md#text)                     | Formatting           | Sets the label text of the widget.                                                                                                                                        | NA                           |
| [Visible](./README.md#visible)                   | Binding & Formatting | Controls widget's visibility on the page. When turned off, the widget won't be visible when the app is published. Learn more about [Visible Property](./README.md#visible) | `{{CodeScanner.isVisible}}`  |
| [Disabled](./README.md#disabled)                 | Binding & Formatting | Disables input to the widget. The widget remains visible to the user, but a user input won't be allowed. Learn more about [Disable Property](./README.md#disabled)     | `{{CodeScanner.isDisabled}}` |
| [Animate Loading](./README.md)                   | Formatting           | Controls the loading of the widget.                                                                                                                                       | NA                           |
| [Tooltip](./README.md#tooltip)                   | Formatting           | It sets a tooltip for the widget. You can add hints or extra information about the required input from the user. Learn more about [Tooltip](./README.md#tooltip)          | NA                           |
| [Value](code-scanner.md#value)                   | Binding              | Fetches the value of scanned code                                                                                                                                         | `{{CodeScanner.value}}`      |


#### Scanner layout

The behavior and appearance of the code scanner can be configured through the scanner layout property. If set to ```Always on```, the scanner will be continuously visible and scanning. Alternatively, if ```Click to Scan``` is chosen, the scanner will be shown inside a Modal and will begin scanning when the user presses the button.

<VideoEmbed host="youtube" videoId="hD-akPJDtW8" title="Scanner layout Property" caption="Scanner layout Property"/>

#### Text

Text/Label is a widget property that lets you set the text inside the button, describing the function it performs. It displays static text on the button. For example, you can enter "Scan Menu" as the label for a button that scans the restaurant menu.

<VideoEmbed host="youtube" videoId="o80-IKcXAVQ" title="How to use Text Property" caption="How to use Text Property"/>

#### Value

Value is a binding property that fetches the response from the scanned code. To bind the value of the code scanner widget to another widget, open the property pane, and add the code snippet given below:

```
{{<your_widget>.value}}
```

For example, take a Code Scanner widget (`CodeScanner1`) and bind its value to a text widget. Drag a text widget onto the canvas and add the following code:

```
{{CodeScanner1.value}}
```

<VideoEmbed host="youtube" videoId="zfkpIzaiTX0" title="How to use Value Property" caption="How to use Value Property"/>

## Events

They're' a set of actions that you can perform on the widget. For example, you can navigate to another page, show alert messages, open and close Modals, and store data in local storage.

| Event              | Description                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onCodeDetected** | Triggers an action when a valid code is detected. See a list of [supported actions](./../appsmith-framework/widget-actions/README.md). |

#### onCodeDetected

When a valid barcode or QR code is detected, this event triggers an action. The Appsmith framework allows triggering actions for widget events and inside JS Objects.

In this example, the code response would be displayed using the [Modal widget](/reference/widgets/modal).

* Set the `onCodeDetected` event to open a New Modal, and choose to Create New.
* This would open up a new Modal; drag the [text widget](/reference/widgets/text) into the Modal.
* In the property section, add the following code:

```
{{CodeScanner1.value}}
```

Whenever a valid code is detected, a Modal window displaying the code response shows up. The video below demonstrates how to achieve that.

<VideoEmbed host="youtube" videoId="_2p1bMbdk6U" title="onCodeDetected" caption="onCodeDetected"/>

## Styles

Style properties allow you to change the look and feel of the widget.

| Style             | Description                                            |
| ----------------- | ------------------------------------------------------ |
| **Icon**          | Sets an icon to be included in the input field.        |
| **Position**      | Sets the label position of the widget.                 |
| **Placement**     | Sets the label alignment of the widget.                |
| **Button Color**  | Allows you to set color for the button.                |
| **Border Radius** | Allows you to define curved corners.                   |
| **Box Shadow**    | Allows you to choose from the available shadow styles. |

## What's next

The following resources may come in handy as you need to learn new tricks:

* [Core Concepts](/core-concepts/connecting-to-data-sources/)
* [Appsmith Framework](/reference/appsmith-framework/)
* [JavaScript Editor](/core-concepts/writing-code/javascript-editor-beta/)

## Troubleshooting

If you encounter any errors during this process, check out this guide on [debugging deployment errors](/help-and-support/troubleshooting-guide/deployment-errors). If you are still facing any issues, please connect with support@appsmith.com or raise your query on [Discord Server](https://discord.com/invite/rBTTVJp).
