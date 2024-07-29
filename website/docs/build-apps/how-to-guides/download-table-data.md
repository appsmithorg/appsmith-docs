# Download Table data

This page shows how to download the entire Table or Query data in manageable chunks to prevent performance issues on your application. 

You can use the built-in [download property](/reference/widgets/table#allow-download-boolean) of the Table widget to download data directly. However, **if the data is paginated, only the rows on the current page are downloaded.** To download the entire dataset, follow these steps:


## Download Data in chunks via SQL

1. Create a new query to fetch the data:

<dd>


*Example:* This query retrieves data from the `users` table, dynamically using the provided `limit` and `offset` parameters. If no `limit` is specified, it defaults to 50 rows; if no `offset` is specified, it defaults to 0.

 ```sql
SELECT * FROM public."users" 
LIMIT {{this.params.limit}} 
OFFSET {{this.params.offset}}
```

Update the query to dynamically pass the `limit` and `offset` parameters using the `this.params` object, which provides access to the data passed within the JSObject. See [Parameterised Queries](/connect-data/concepts/dynamic-queries).

</dd>


2. Create a new JSObject and add a function to fetch the data in chunks to handle large datasets efficiently and avoid performance issues.

<dd>



*Example:*

- Create a function that retrieves user data in batches of 100 rows from a database, continuously appending each batch to a `usersData` array until the entire dataset is retrieved.
- To download the data to your local machine, use the [download()](/reference/appsmith-framework/widget-actions/download) function.
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
                    console.log('Fetched chunk at offset:', offset);

                    // Increment the offset for the next chunk
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

3. Execute the defined JS function either directly from the JS editor or by triggering the function through widget events:

<dd>

*Example*:

```js
{{UserDataDownloader.fetchAndDownloadUsers();}}
```

If the fetched data is no longer needed, it is recommended to clear or delete the query to mitigate potential performance impacts.

</dd>


## Download Data in chunks via API

To handle large datasets efficiently and download them in chunks using API, follow these steps:

1. Configure Your **Backend** API to support pagination.


<dd>

*Example:* You can set up your backend API to handle pagination by accepting `limit` and `offset` parameters. This approach enables you to fetch data in chunks rather than retrieving the entire dataset at once.


```js
// Backend API endpoint example
app.get('/api/users', async (req, res) => {
    // Parse limit and offset from query parameters; default to 50 and 0 if not provided
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;

    try {
        // Fetch users from the database with the specified limit and offset
        const users = await UserModel.findAll({
            limit: limit,
            offset: offset
        });
        // Send the fetched users as a JSON response
        res.json(users);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});
```

Adjust the `limit` and `offset` parameters as needed for your specific API and data structure.


</dd>

2. In Appsmith, create a new API query to fetch data from the API using `limit` and `offset` parameters:

<dd>

*Example:*

```js
GET https://mock-api.appsmith.com/users?limit={{this.params.limit}}&offset={{this.params.offset}}
```

For information on parameters, see [Parameterised Queries](/connect-data/concepts/dynamic-queries). 


</dd>


2. Create a new JS function to interact with the API and fetch data in manageable chunks. 

<dd>


```js
export default {
    usersData: [],

    // Method to reset variables
    resetData() {
        this.usersData = [];
    },

    // Method to fetch and download user data in chunks
    async fetchAndDownloadUsers() {
        let offset = 0; // Initial offset
        const limit = 100; // Number of rows per chunk
        let moreDataAvailable = true; // Control variable for the loop

        try {
            while (moreDataAvailable) {
                // Run the query with the current limit and offset
                await userAPI.run({ limit: limit, offset: offset });
                const result = userAPI.data; // Get the query data

                // Log the result to check if data is being fetched
                console.log('API result:', result);

                // Check if the response contains data
                if (result && result.users) {
                    if (result.users.length > 0) {
                        // Append the fetched data to usersData
                        this.usersData = [...this.usersData, ...result.users];
                        console.log('Fetched data from offset:', offset);

                        // Check if there are users on the next page
                        // If result.users length is less than limit, assume no more data
                        if (result.users.length < limit) {
                            moreDataAvailable = false;
                            console.log('No more data available.');
                        } else {
                            // Increment the offset for the next request
                            offset += limit;
                        }
                    } else {
                        // No users found, stop fetching
                        moreDataAvailable = false;
                        console.log('No users found with current offset.');
                    }
                } else {
                    // Unexpected API response structure
                    moreDataAvailable = false;
                    console.error('Unexpected API response structure.');
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

</dd>

3. Execute the defined JS function either directly from the JS editor or by triggering the function through widget events:

<dd>

*Example*:

```js
{{UserDataDownloader.fetchAndDownloadUsers();}}
```

Once the function is executed, the data is downloaded to your local machine automatically. If the fetched data is no longer needed, it is recommended to clear or delete the query to mitigate potential performance impacts.

</dd>


## See also

- [Download PDF File](/reference/appsmith-framework/widget-actions/download)
- [Download file using URL](/connect-data/how-to-guides/how-to-download-files-using-api#download-file-using-public-url)
