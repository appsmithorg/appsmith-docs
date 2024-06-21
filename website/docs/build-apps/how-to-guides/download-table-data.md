# Download Table data

This page shows how to download the entire Table or Query data in manageable chunks to prevent performance issues on your application. 

You can use the built-in [download property](/reference/widgets/table#allow-download-boolean) of the Table widget to download data directly. However, **if the data is paginated, only the rows on the current page are downloaded.** To download the entire dataset, follow these steps:

1. Create a new query to fetch the data:

<dd>

*Example:*

```sql
SELECT * FROM public."users" LIMIT 50 OFFSET 0
```

</dd>


2. Create a new JSObject and add a function to fetch the data in chunks to handle large datasets efficiently and avoid performance issues.

<dd>



*Example:*

- This function retrieves user data in 100-row chunks from a database, continuously adding each chunk to a `usersData` array until the entire dataset is obtained.
- It uses the [download()](/reference/appsmith-framework/widget-actions/download) function to download the data to your local machine.
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
        let moreDataAvailable = true;

        try {
            while (moreDataAvailable) {
                // Run the query with the current offset and limit
                 // highlight-next-line
                await getUsers.run({ limit: chunkSize, offset: offset });

                // Check if the query returned any data
                if (getUsers.data && getUsers.data.length > 0) {
                    // Store the fetched data in a variable
                    const chunkData = getUsers.data;

                    // Append the fetched data to usersData
                    this.usersData = this.usersData.concat(chunkData);
                    console.log('Fetched chunk at offset:', offset);

                    // Increment the offset for the next chunk
                    offset += chunkSize;
                } else {
                    // No more data available, exit the loop
                    moreDataAvailable = false;
                }
            }

            // Download or process the data
             // highlight-next-line
            download(this.usersData, 'userdata', 'text/csv');
            console.log(this.usersData);

        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            // Clear the data and reset variables
            this.resetData();
            console.log('Data has been reset:', this.usersData);
        }
    }
}
```

The code may vary based on your datasource, so update the query and parameters accordingly to fit your specific data structure and requirements.


</dd>

 3. Update the query to dynamically pass the `limit` and `offset` parameters using the `this.params` object, which provides access to the data passed within the JSObject. See [Parameterised Queries](/connect-data/concepts/dynamic-queries).


<dd>

*Example:* This query retrieves data from the `users` table, dynamically using the provided `limit` and `offset` parameters. If no `limit` is specified, it defaults to 50 rows; if no `offset` is specified, it defaults to 0.

 ```sql
 SELECT * FROM public."users" 
LIMIT COALESCE({{this.params.limit}}, 50) 
OFFSET COALESCE({{this.params.offset}}, 0)
```

*Example 2:* This query retrieves all user data from the `users` table where the country is set to `Canada`, with the ability to dynamically adjust the `limit` and `offset` parameters.


```sql
SELECT * FROM public."users"
WHERE country = 'Canada'
LIMIT COALESCE({{this.params.limit}}, 50)
OFFSET COALESCE({{this.params.offset}}, 0)
```

</dd>

4. Execute the defined JS function either directly from the JS editor or by triggering the function through widget events:

<dd>

*Example*:

```js
{{UserDataDownloader.fetchAndDownloadUsers();}}
```

If the fetched data is no longer needed, it is recommended to clear or delete the query to mitigate potential performance impacts.

</dd>

## See also

- [Download PDF File](/reference/appsmith-framework/widget-actions/download)
- [Download file using URL](/connect-data/how-to-guides/how-to-download-files-using-api#download-file-using-public-url)
