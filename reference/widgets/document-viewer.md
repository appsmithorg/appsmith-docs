# Document Viewer

Document viewer widget is used to show documents on a page. The widget currently supports the following extensions-

1. .txt
2. .pdf
3. .ppt (not supported by base64)
4. .pptx
5. .docx
6. .xlsx

{% embed url="https://youtu.be/UuecSUqFOpQ" %}

Documents can be populated from a data source like API or Query in which the incoming data points to the URL of the file.

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Document Viewer widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Document Link**   | Source URL of the document, which must be one of the supported file types (see top of page). The file extension must be present as part of the URL.                                                    |
| **Visible**         | Controls widget's visibility on the page. When turned off: The widget will not be visible when the app is published. It appears translucent when in Edit mode.                                         |
| **Animate Loading** | When turned off, the widget will load without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it. |

### Generating PDF Documents

Generating reports or documents from a dataset is vital in many applications. The video below shows how to generate a PDF report on Appsmith.

{% embed url="https://youtu.be/8j6Z9bZvLqA" %}
