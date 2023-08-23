# Upload CSV data in Table using Filepicker

To display CSV data in a [Table widget](/reference/widgets/text), use the Array data format. This format allows CSV data to be directly parsed into an array or array of objects that can be referenced throughout the platform. To achieve this, follow these steps:

* Select the **Array(Only CSV)** option.
* Upload your **CSV** file using the Filepicker widget
* In the Table widget property, add the following code:
```js
{{FilePicker1.files[0].data}}
```


This displays your CSV data in a tabular format.

Similarly, you can use the [Image widget ](/reference/widgets/image) to display images that are base64 encoded, and the [Text widget ](/reference/widgets/text) to display text files with a `.txt` extension.


:::caution
Currently, only CSV data is supported; XLS or other formats aren't supported.
:::


