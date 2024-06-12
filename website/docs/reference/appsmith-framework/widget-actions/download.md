---
description: >-
  download() reference
toc_max_heading_level: 2
---

# download()

The `download()` function allows you to download any data as a file to your local machine. It leverages the capabilities of the  [downloadjs](https://github.com/rndme/download) library.

<ZoomImage src="/img/table-data-csv.png" alt="" caption=""/>

## Signature

```javascript
download(data: any, fileName: string, fileType?: string): Promise
```

### Parameters


Below are the parameters required by the `download()` function to execute:


#### data

<dd>

 This parameter specifies the data you want to download, which can be a `URL`, Query data, `Blob`, or any `String`. You can pass the data using `{{}}` Mustache binding, for example `{{Userquery.data}}`.

</dd>

#### fileName

<dd>

This property allows you to set the name of the file. You can specify a name or dynamically set it based on query or user data. For example, you can use Mustache binding to create a dynamic file name like `{{Table1.selectedRow.id}}`.


</dd>

#### fileType

<dd>

The MIME content-type of the file to download. If you do not specify the file type, make sure to include the appropriate file extension in the **filename** property, for example, `file_name.csv.`

*Supported file types:*

* Plain text
* HTML
* CSV
* JSON
* JPEG
* PNG
* SVG

</dd>

:::info
The Download action doesn't convert the file to a specific type and it's downloaded in the original format. If you need to change the file type, you would need to convert the data to a specific format using JavaScript before downloading.
:::


## Usage

Here are a few examples to navigate in different situations:


#### 


#### Download query data

If you want to download your query or JS data into a file, such as a `.txt` or `.csv` file, you can pass the query data into the function like this:

```js
download(UserData.data, 'UsersData.csv', 'text/csv');
```


#### Download using URL

If you want to download a file that is coming from a URL, you can use the `download()` function. For example, you have a Table widget where there is a column containing documents for each user in URL format. To download the document, you can use:

```js
download(UsersTable.selectedRow.documentUrl, UsersTable.selectedRow.id + '.pdf');
```



If you want to download a plain text document, the data passed to the download action should be a `string` representation of the text content to be downloaded. Additionally, a `fileName` and an optional `fileType` should be provided as parameters to the download function. 

```javascript
download(data: string, fileName: string, fileType?: string): void
```


*Example 2:*

To download an image, the data passed to the download action should be the image's URL or Base64 string representation of the image. A `fileName` and an optional `fileType` should be provided as parameters to the download function. 

#### Format and download data


If you have data in one format and need to convert it to another format before downloading, you can use JSObject to transform the data and then download it. For example, if you want to convert JSON data into a CSV file and download it to your local machine, you can do so as follows:



```js
const jsonData = [
  { issue: "Login Error", count: 12 },
  { issue: "Payment Failure", count: 7 },
  { issue: "Page Not Loading", count: 5 }
];

// Convert JSON to CSV
let csvData = "Issue,Count\n";
jsonData.forEach(row => {
  csvData += `${row.issue},${row.count}\n`;
});

// Download the CSV file
download(csvData, "issues.csv", "text/csv");
```

#### Download using JSObject

Files of various types can be downloaded using the download action by providing the URL of the file to be downloaded. To download a file from a URL using a JSObject, you can use the following approach:


```javascript
downloadPDF: async () => {
	let data = getPdf.data
	const blob = new Blob([data], {type: 'application/pdf'});
	const url = URL.createObjectURL(blob);
	await download(url, "sample.pdf", "application/pdf")
}
```

For files to be successfully downloaded, their contents must be served over HTTPS to prevent requests from being blocked. To prevent Cross-Origin Resource Sharing (CORS) errors, ensure that the server where the file is fetched from is CORS-enabled and returns the required headers in the response.


## See also
- [Download Files](/connect-data/how-to-guides/how-to-download-files-using-api)