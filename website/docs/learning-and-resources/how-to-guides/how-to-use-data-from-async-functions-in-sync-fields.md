---
description:
  Learn how to use data from asynchronous functions in synchronous fields in Appsmith to build efficient apps.
---

# How to Use Data from Async Functions in Sync Fields
In Appsmith, it's common to use [async/await](/core-concepts/writing-code/javascript-promises#asyncawait) functions to handle the asynchronous nature of certain operations, such as fetching data from an API or a database. However, it's not always straightforward to use async functions in synchronous fields, such as when binding data to a widget. 

 <VideoEmbed host="youtube" videoId="yn_8gs5w04g" title="Using data from Async function in Synchronous Field" caption="Using data from Async function in Synchronous Field"/> 

This guide helps you understand how to use async functions in sync fields in Appsmith, by going through a practical use case and code snippets. It further elaborates on how to trigger an API execution, use a JS Object function to filter data, and use a query to fetch data, and binding the results to a table widget.

## Display user information on a page

Consider the scenario where you need to fetch all the users and display their information such as first name, last name, email, and more on a page using a table widget.

### Fetch user data using an API

 When using an API to fetch users, the process involves triggering the API execution and binding the response to the table widget to display the data like first name, last name, email and more. Here's how it can be done:

<VideoEmbed host="youtube" videoId="iYZV9DPnugY" title="Fetch user data using an API" caption="Fetch user data using an API"/>  

1. Navigate to the Widgets tab and search for the table widget.
2. Drag the table widget onto the canvas.
3. Create an API named `getAllUsers` by adding a new API from the Explorer tab. Alternatively, you can use an existing API. For more information, see [Configuring APIs](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis).
4. Bind the API call to the [table data](/reference/widgets/table#table-data) property of the table widget as shown in the code snippet below: 
```javascript
{{getAllUsers.data}}
```
In Appsmith, when you bind an API to the table data property using the `data` attribute, the API is executed, and generates the resulting data, which can be displayed in the table widget.

### Fetch user data using a JS Object

When using a JS Object function to fetch and filter users' data, the process involves calling the API or Query, filtering the data, generating the response which can be bind and displayed in the table widget. Here's how it can be done:

 <VideoEmbed host="youtube" videoId="8mVQS6uaR6M" title="Fetch user data using a JS Object" caption="Fetch user data using a JS Object"/>  


1. Navigate to the Explorer tab and click Queries/JS and select New JS Object.
2. Create a JS Object named `getFilteredUsersList`. Alternatively, you can use an existing JSObject.
3. In the JS Object function, add your API or Query call to fetch the users' data and filter it for the required details. For example:

```
export default {
	userFilteredList: async () => {
	const listUser = await getAllUsers.run();
		return listUser.map((user) => {
			return {
				"firstname" : user.name,
				"email" : user.email
			}
		})		
	}
}
```
4. Bind the response of the JS Object function to the table data property of the table widget as shown in the code snippet below:
```javascript
{{getFilteredUsersList.userFilteredList.data}}
```
When you bind a function using `data` attribute, Appsmith handles the function execution and generates data that you can bind to the table data property and display it in a table widget.

### Fetch user data using a query

When using a query to fetch users, the process involves executing the query, binding the response to the table widget to display the data. Here's how it can be done:

 <VideoEmbed host="youtube" videoId="hqkI0h7DQ-s" title="Using a Query" caption="Using a Query"/>  


1. Navigate to the Explorer tab and click Queries/JS and select `<DATASOURCE_NAME> Query`. For example, users query where users is datasource name.
2. Rename the query to `getAllUsers`. Alternatively, you can use an existing Query.
3. In the query, you can write your SQL statement to fetch the data from the database as shown below:
```sql
SELECT * FROM users ORDER BY id LIMIT 10;
```
4. Bind the query to the table data property of the table widget as shown in the code snippet below:
```javascript
{{getAllUsers.data}}
```
Appsmith handles the query execution and generates the data when you bind a query using `data` attribute and displays generated data in a table widget.

## Pro tips
It's important to note that the table data property is a synchronous field and expects data to be passed to it. If you bind a run method, it results in an error. For more information on troubleshooting this issue, see the [Sync field errors](/help-and-support/troubleshooting-guide/widget-errors#sync-field-error.) section.

You can choose to execute the API or query when the page is loaded by enabling the "Run on page load" option in the Query or API settings. For more information, see the [Run on page load](/core-concepts/data-access-and-binding/querying-a-database/query-settings#run-query-on-page-load) section. Additionally, you can configure similar settings for asynchronous functions. For more information, see the [Asynchoronous JavaScript Function Settings](/core-concepts/writing-code/javascript-editor-beta/asynchronous-javascript-function-settings) section.

At this point, you have gained a deeper understanding of how to use data from async functions in sync fields within Appsmith. By applying this knowledge, you can now create more powerful and dynamic apps with Appsmith.