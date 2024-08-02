# Download Table data

This page shows how to download the entire Table or Query data in manageable chunks to prevent performance issues on your application. 



## Download data in chunks 

Follow these steps to download data in chunks:

1. Create a new query to fetch paginated data


<dd>

*Example 1:* Using SQL

<dd>

To fetch user data using dynamic `limit` and `offset` values, create a query like this, passing the `limit` and `offset` values through `this.params`. See [Parameterised Queries](/connect-data/concepts/dynamic-queries).


 ```sql
SELECT * FROM public."users" 
LIMIT {{this.params.limit}} 
OFFSET {{this.params.offset}}
```
</dd>

*Example 2:* Using API

<dd>

* Create backend code in your API to handle dynamic `limits` and `offsets`, like:

```js
// Backend code to fetch data with limit and offset
const fetchData = async (limit = 50, offset = 0) => {
  const response = await fetch(`/api/endpoint?limit=${limit}&offset=${offset}`);
  const data = await response.json();
  return data;
};
```

* In Appsmith, configure the API query to fetch data using `limit` and `offset` parameters:

```js
GET https://mock-api.appsmith.com/users?limit={{this.params.limit}}&offset={{this.params.offset}}
```

</dd>

</dd>


2. Create a new JSObject and add a function to fetch the data in chunks to handle large datasets efficiently.

<dd>



*Example:*

- Create a function that retrieves user data in batches of 100 rows from a database, continuously appending each batch to a `usersData` array until the entire dataset is retrieved.
- Use the [download()](/reference/appsmith-framework/widget-actions/download) function to download the data to your local machine.
- Upon successfully fetching and downloading all data, it resets the `usersData` array to clear the data.


```js
export default {
    usersData: [],

    // Method to reset variables
    resetData() {
        this.usersData = [];
    },

    // Method to fetch and download user data in chunks
    async fetchAndDownloadUsers() {
        const chunkSize = 100; // Number of rows per chunk
        let offset = 0; // Offset for pagination

        try {
            while (true) {
                const result = await getUsers.run({ limit: chunkSize, offset });

                // Check if the query returned any data
                if (result && result.length > 0) {
                    // Append the fetched data to usersData
                    this.usersData = [...this.usersData, ...result];
                    offset += chunkSize;
                
                } else {
                    // No more data available, exit the loop
                    break;
                }
            }
            // Download or process the data
             // highlight-next-line
            download(this.usersData, 'userdata', 'text/csv');
            console.log('Data downloaded:', this.usersData);

        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            // Clear the data and reset variables
            this.resetData();
            console.log('Data has been reset:', this.usersData);
    }}}
```

The code may vary based on your datasource, so update the query and parameters accordingly to fit your specific data structure and requirements.


</dd>

3. Execute the defined JS function either directly from the JS editor or by triggering the function through widget events.



## Download file

To directly download a file from the datasource instead of fetching data in chunks, follow these steps:


1. Configure the backend API/Database to convert data into a downloadable file format. Ensure that the API endpoint returns the file content or a URL to access the file.


<dd>


*Example:* 

You can use built-in functions provided by some databases to export data directly to a file. If your database does not support direct file exports, you can create a backend API to generate and serve the file. Here’s an example using `Node.js` with Express to generate and serve a CSV file.


```js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const filesDir = path.join(__dirname, 'files');

// Ensure the files directory exists
if (!fs.existsSync(filesDir)) {
  fs.mkdirSync(filesDir);
}

app.get('/generate-file', (req, res) => {
  const fileContent = 'Column1,Column2\nValue1,Value2\n';
  const fileName = 'data.csv';
  const filePath = path.join(filesDir, fileName);
  
  fs.writeFileSync(filePath, fileContent);
  
  const fileUrl = `${req.protocol}://${req.get('host')}/files/${fileName}`;
  res.json({ fileUrl });
});

app.use('/files', express.static(filesDir));

app.listen(3000, () => console.log('Server running on port 3000'));
```


</dd>


2. In Appsmith, create a new API query to access the file, and configure the headers as needed.

<dd>

*Example:*


```js
http://example.com/generate-file
```

</dd>


3. Create a new JSObject and add a function to fetch and download the file:

<dd>

*Example:* If the API provides a file URL, you can download the data by using the following code:


```js
// Assuming userAPI.data contains the file URL
const fileUrl = userAPI.data.fileUrl; 

// Fetch the file content
const response = await fetch(fileUrl);
const data = await response.blob();
const fileName = 'data.csv';
const fileType = 'text/csv';

// Trigger the download
await download(data, fileName, fileType);
```

The code fetches the file content from this URL, and then triggers `download()` function to download the file.

</dd>

## See also

* [Download PDF File](/reference/appsmith-framework/widget-actions/download)
* [Download file using authenticated URL](/connect-data/how-to-guides/how-to-download-files-using-api#download-file-using-public-url)