---
description: This page shows you how to upload an array of objects, such as CSV, XLS(X), JSON, or TSV files, into a Table widget using a Filepicker widget.
---

# Upload CSV and Display Data in Table

This page shows you how to upload an array of objects, such as CSV, XLS(X), JSON, or TSV files, into a Table widget using a Filepicker widget.


 <figure>
  <img src="/img/uploadcsv.gif" style= {{width:"810px", height:"auto"}} alt="Upload CSV data in Table using Filepicker"/>
  <figcaption align = "center"><i>Upload CSV data in Table using Filepicker</i></figcaption>
</figure>

## Prerequisites

* A [Table](/reference/widgets/table) widget to display data.
* A [Filepicker](/reference/widgets/filepicker) widget to upload files.


## Display CSV data in Table

Follow these steps to configure the Filepicker widget to upload files:

1. In the Filepicker widget, select **Array of Objects** from the [**Data Format**](/reference/widgets/filepicker#data-format-string) property.

2. Bind the uploaded CSV file to the Table widget using the [**Table data**](/reference/widgets/table#table-data-arrayobject) property, like:

<dd>

```js
{{FilePicker1.files[0].data}}
```


</dd>


This displays data in a tabular format, and similarly, you can use the [Image widget ](/reference/widgets/image) to display images that are base64 encoded, and the [Text widget ](/reference/widgets/text) to display text files with a `.txt` extension.


:::caution
Any file exceeding 5 MB is saved as a blob URL, and the upper limit for file size is 100 MB.
:::
