# Performance Best Practices

This page provides essential performance best practices to help you optimize your Appsmith applications, covering both client-side and server-side improvements to ensure a smooth and efficient user experience.

## Optimizing the Client Side of Your App

Client-side optimization improves app performance on user devices by enhancing load times and responsiveness. This section covers best practices like reducing API calls and optimizing widget usage to create a smoother user experience.

### 1. Limit the number of widgets on a single page

Appsmith loads all widgets on a page at once, including those that are hidden or conditionally visible, which can impact performance. Organizing your app content across multiple pages, rather than cramming everything into a single page, enhances both performance and user experience.

- Organize your application content across multiple pages to enhance performance and improve user experience, rather than placing everything on a single page.

- Navigate between pages using the `navigateTo("PageName")` function, similar to hyperlinks on websites. This helps manage loosely related content without overloading a single page. For more information, see [Share Data Across Pages](/advanced-concepts/sharing-data-across-pages#use-query-parameters).

- Minimize the number of hidden or conditionally visible widgets (like Modals) on a page to reduce performance impact.

- Limit nesting widgets, especially in complex Tabs or Forms. Use the widget pane to track all widgets on a page and manage visibility effectively.

- Use Pages Over Tabs:

<dd>
- For distinct workflows or processes that are independent (different datasources).
- For related content from the same datasource but needing different filters or views.
</dd>


### 2. Optimize JavaScript Code

Optimizing your JavaScript code is crucial for enhancing application performance in Appsmith. With the flexibility to use various data structures and algorithms, it’s essential to choose efficient methods to minimize time and space complexities. Below are recommendations to ensure your JavaScript code runs efficiently:

- Use well-established libraries like lodash for common operations, as they are optimized and tested by the community. See [Use External JS Libraries](/core-concepts/writing-code/ext-libraries).

- Use JavaScript functions like `performance.now()` and `console.time()` in your browser’s developer console to identify latency issues and optimize the slow parts of your code.

- Keep the use of global variables to a minimum to avoid memory leaks and ensure better performance.

- Implement asynchronous functions to improve responsiveness and prevent blocking of the main thread during data processing.

- Cache results of expensive calculations or data-fetching operations to prevent redundant processing.

### 3. Make efficient use of Appsmith’s key-value store

Appsmith’s key-value store serves as a wrapper around JavaScript’s local storage functions—`localStorage` and `sessionStorage`—to facilitate data persistence. While it is essential for sharing application data across pages, improper usage can negatively impact performance. Below are some recommendations to optimize the use of the key-value store in your applications:

<dd>

* **Batch `storeValue()` Calls:** When you have multiple related variables to store, combine them into a single [`storeValue()`](/reference/appsmith-framework/widget-actions/store-value) call instead of making multiple calls. This reduces overhead and enhances performance.

<dd>

Example: Instead of calling `storeValue()` multiple times in a loop:

```js
for (let i = 0; i < 100; i++) {
    storeValue("key" + i, valueArray[i]);
}
```

Use:


```js
const valuesToStore = {};
for (let i = 0; i < 100; i++) {
    valuesToStore["key" + i] = valueArray[i];
}
storeValue("batchData", valuesToStore); // Store all values at once
```
</dd>

* **Leverage JS Object Mutations**: If you’re keeping data purely on the client side and do not need to pass it to the server, consider using JS Object variable mutation. This approach can offer better performance than using `storeValue()`.

<dd>

```js
export default {
    // Create a global variable
	name: 'sam',

    // Return the value of the global variable
	fetch_name () {
		return this.name;
	},

    //Update the value of the global variable
	update_name () {
		this.name = 'ben';
		return this.name;
	},
}
```

- Minimize the frequency of `storeValue()` calls, especially in loops or frequent events, to avoid performance hits.

- Regularly check and remove keys from the key-value store that are no longer needed to free up storage space and improve performance.

For more best practices on JavaScript, see [Best Practices](/write-code/best-practices#use-mutable-js-variables).

</dd>

</dd>

### 4. Review Page Load Queries

<dd>

When developing applications in Appsmith, you can set certain queries and JavaScript Object functions to trigger automatically on page load. However, during the development process, these queries may become unnecessary, leading to unwanted operations that can negatively affect page performance.

* To optimize page load times, it is essential to review the queries set to run on page load and disable any that are not required. 

* Regularly check the queries that are triggered on page load and disable those that are not needed to enhance performance.
Implement Lazy Loading: Fetch only the data necessary for the initial view, and defer other data retrieval until it is required by the user. This approach minimizes initial loading time and improves user experience.

</dd>



### 5. Offload Heavy Client-Side Computation to the Server

<dd>

The performance of client-side code is significantly influenced by the specifications of the client device. While more powerful systems can execute applications more efficiently, devices with lower processing capabilities may struggle, resulting in suboptimal performance.

To enhance the performance of applications, especially those targeting low-performance devices such as mobile phones, it is crucial to minimize the computational load on the client side. Offloading complex calculations to the server or data sources can help maintain optimal performance and improve user experience.

* Reduce the amount of heavy computation performed on the client to ensure smooth performance on all devices.
* Utilize the capabilities of your datasources to perform complex calculations, returning only the results to the client for display.

</dd>

### 6. Disable Unnecessary Browser Extensions

<dd>

Browser extensions, especially development tools like React and Redux plugins, can significantly impact your development environment's performance. While you can't control the browser environment for end users, you can optimize your own development experience by managing these extensions.

Disabling unnecessary extensions helps reduce browser overhead, leading to a more responsive and efficient development process, free from interference caused by redundant tools.

* Disable unnecessary extensions from your browser's extensions or add-ons menu.
* Temporarily deactivate React and Redux DevTools when they are not required for debugging.

</dd>


## Optimizing the Server Side of Your App

The server side of your app handles all backend operations, including data processing, database interactions, and API requests. Optimizing the server side is crucial for reducing response times, improving scalability, and ensuring a smooth user experience, especially under high load.

To enhance server performance, it’s important to focus on efficient resource management, robust error handling, and minimizing unnecessary operations. The following sections outline best practices you can follow to optimize the server side of your application.

### 1. Profile Server Calls

<dd>

Identifying slow server calls is crucial for diagnosing performance issues in your application. Latency from the server side often indicates that queries or API requests are not optimized. By profiling these calls, you can pinpoint bottlenecks and focus on optimizing them for better performance.

- Check the Query editor to view execution times for your server calls. This helps you identify which queries are slow and need optimization.

- If you're using custom JavaScript code to make server calls, use tools like `performance.now()` or `console.time()` to measure the performance of individual code segments.

- Use database-specific profiling tools such as the MongoDB Database Profiler or SQL Server Profiler to analyze and optimize the underlying queries.

</dd>

### 2. Optimize Queries

<dd>

Optimizing queries is crucial for enhancing the performance of your application, as inefficient queries can lead to slow response times and increased server load. While best practices like using indexes are commonly applicable for SQL databases, the optimization techniques can vary significantly depending on the datasource. Additionally, the size of query responses can impact performance, so it’s important to manage data effectively.

- Break down large datasets into smaller batches using server-side pagination. This helps avoid overwhelming the client with large amounts of data and improves load times. Appsmith supports this feature natively if your datasource is configured to handle pagination. See [Setup Server-Side Pagination on Table](/build-apps/how-to-guides/Server-side-pagination-in-table).

- Use indexes on frequently queried columns to speed up search operations and reduce query execution time. This is especially useful for SQL databases.

- If performance issues persist despite optimization, consider that the issue might be with the third-party datasource's backend infrastructure. Switching to a different provider may be necessary for better performance.

</dd>

### 3. Upgrade Server Specifications

<dd>
Even after optimizing both the front end and back end, performance issues may persist if your server hardware is not powerful enough to handle the load. In such cases, upgrading your server specifications can be the final step to achieve the desired performance levels. This could involve enhancing your on-premises hardware or scaling up your cloud infrastructure.

</dd>