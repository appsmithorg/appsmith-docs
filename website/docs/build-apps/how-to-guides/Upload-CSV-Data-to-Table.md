---
description: This page shows you how to upload an array of objects, such as CSV, XLS(X), JSON, or TSV files, into a Table widget using a Filepicker widget.
---

# Upload CSV and Display Data in Table

This page shows you how to upload CSV, XLS(X), JSON, or TSV files into a Table widget using a Filepicker widget.


 <figure>
  <img src="/img/uploadcsv.gif" style= {{width:"810px", height:"auto"}} alt="Upload CSV data in Table using Filepicker"/>
  <figcaption align = "center"><i>Upload CSV data in Table using Filepicker</i></figcaption>
</figure>

## Prerequisites

* A [Table](/reference/widgets/table) widget to display data.
* A [Filepicker](/reference/widgets/filepicker) widget to upload files.


:::caution
Any file exceeding 5 MB will be stored as a blob URL, with a maximum file size of 100 MB.
:::


## Display CSV data in Table

Follow these steps to configure the Filepicker widget to upload files:

1. In the Filepicker widget, select **Array of Objects** from the [**Data Format**](/reference/widgets/filepicker#data-format-string) property. This step allows you to specify the data format of the uploaded files.

2. Bind the uploaded CSV file to the Table widget using the [**Table data**](/reference/widgets/table#table-data-arrayobject) property, like:

<dd>

```js
{{FilePicker1.files[0].data}}
```


</dd>

After completing the above steps, you can select a file from your local machine to upload and display it in the Table widget.





