
Barcodes and QR codes are now found on a wide range of goods, including health bands, rental cars, checked baggage, and clothing purchased from supermarkets or retail stores. They each identify a thing or a person and encode significant information.

The Code Scanner widget allows you to scan a variety of barcodes and QR codes. Using this widget, you'll be able to enhance internal business operations and provide excellent customer service.


# Usage

QR/Barcodes have taken off because they offer a clear and fast return on investment. It eliminates manual entry of product information at receiving, meaning there are far fewer opportunities for error. Let's look at some scenarios where a code scanner can be helpful:

* **Warehouse**- Companies need to know not just their current inventory levels, but the location of those products, at all times. With the help of a code scanner widget, employees can easily keep track of their warehouse inventories. They can use a code scanner in their app to scan codes rather than manually entering them. 
* **Asset Management**- The most widely used system by businesses for tracking the equipment, vehicles, and computers to support their everyday operations is the usage of barcodes. With the code scanner widget, you can keep track of equipment and the location of the assets and keep any pertinent maintenance and repair records.
* **Logistics and Transportation industries**- Effective track and trace methods offer logistics teams the ability to locate, track, and identify objects in real time, providing better business insight and quicker problem-solving. QR-based tracking eliminates paperwork, reduces errors and increases productivity.

### Supported QR/Barcode Formats

We support the following formats for QR and barcodes:

| 1D product | 1D industrial | 2D          | 
|------------|---------------|-------------|
| UPC-A      | Code 39       | QR Code     |  
| UPC-E      | Code 128      | Data Matrix |  
| EAN-8      | ITF           | Aztec       |   
| EAN-13     | RSS-14        | PDF 417     |   


# Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

| Property        | Type                 | Description                                                                                                         | Code Snippet                |
|-----------------|----------------------|---------------------------------------------------------------------------------------------------------------------|-----------------------------|
| Text            | Formatting           | Sets the label text of the widget.                                                                                  | -                           |
| [Visible](https://docs.appsmith.com/reference/widgets)          | Binding & Formatting | Controls widget's visibility on the page. When turned off, the widget won't be visible when the app is published. Learn more about [Visible Property](https://docs.appsmith.com/reference/widgets)   | {{CodeScanner1.isVisible}}  |
| [Disabled](https://docs.appsmith.com/reference/widgets)         | Binding & Formatting | Disables input to the widget. The widget will remain visible to the user but a user input won't be allowed. Learn more about [Disable Property](https://docs.appsmith.com/reference/widgets)      | {{CodeScanner1.isDisabled}} |
| [Animate Loading](https://docs.appsmith.com/reference/widgets)  | Formatting           | Controls the loading of the widget. Learn more about [Animate Loading](https://docs.appsmith.com/reference/widgets)                                                                                 | -                           |
| [Tooltip](https://docs.appsmith.com/reference/widgets)           | Formatting           | It sets a tooltip for the widget. You can add hints or extra information about the required input from the user. Learn more about [Tooltip](https://docs.appsmith.com/reference/widgets)    | -                           |
| value           | Binding              | Fetches the value of scanned code                                                                                   | {{CodeScanner1.value}}      |
                                                                                                                                                                               



### Text

Text/Label is a widget property that lets you set the text inside the button, describing the function it performs. It displays static text on the button. For example, you can enter "Scan Menu" as the label for a button that scans the restaurant menu.

[Text Video](https://youtu.be/o80-IKcXAVQ)


### Value

Value is a binding property that fetches the response from the scanned code. To bind the value of the code scanner widget to another widget, open the property pane, and add the code snippet given below:
```
{{<your_widget>.value}}
```


For example, let's take a Code Scanner widget (CodeScanner1) and bind its value to a text widget. Drag a text widget onto the canvas and add the following code:

```
{{CodeScanner1.value}}
```

https://youtu.be/zfkpIzaiTX0


# Events

You can define functions that will be called when these events are triggered in the widget. For example, you can navigate to another page, show alert messages, open and close modals, and store data in local storage.

| Event          |  Description                                     |                                            
|----------------|--------------------------------------------------|
| onCodeDetected | Triggers an action when a valid code is detected. See a list of [supported actions](https://docs.appsmith.com/reference/appsmith-framework/widget-actions).|

### onCodeDetected 

When a valid barcode or QR code is detected, this event triggers an action. 
The Appsmith framework allows triggering actions for widget events and inside JS Objects. Let’s take an example to understand how the onCodeDetected event works.

  
In this example, we will use the [Modal widget](https://docs.appsmith.com/reference/widgets/modal) to display the code response.

* Set the onCodeDetected event to open a New Modal, and choose to Create New.
* This will open up a new modal; let's drag the [text widget](https://docs.appsmith.com/reference/widgets/text) into the modal.
* In the property section, add the following code:
  
```
{{CodeScanner1.value}}
```

Whenever a valid code is detected, a modal window displaying the code response will show up. The video below demonstrates how to achieve that.

https://youtu.be/_2p1bMbdk6U


# Styles
  Style properties allow you to change the look and feel of the widget. 
  | Style          | Description                                            |
|----------------|--------------------------------------------------------|
| Icon           | Sets an icon to be included in the input field.        |
| Position       | Sets the label position of the widget.                 |
| Placement      | Sets the label alignment of the widget.                |
| Button Color   | Allows you to set color for the button.                |
|  Border Radius | Allows you to define curved corners.                   |
| Box Shadow     | Allows you to choose from the available shadow styles. |

  
## Cross Reference Section
 The following resources will come in handy as you need to learn new tricks:
* [Appsmith Framework](/reference/appsmith-framework)

 
 ## Troubleshooting
If you encounter any errors during this process, check out our guide on [debugging deployment errors](https://docs.appsmith.com/help-and-support/troubleshooting-guide/deployment-errors). If you are still facing any issues, please reach out to support@appsmith.com or join our [Discord Server](https://discord.com/invite/rBTTVJp) to speak to the Appsmith team directly!


