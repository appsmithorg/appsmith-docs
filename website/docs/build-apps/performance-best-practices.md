# Performance Best Practices

This page provides performance best practices to help you optimize your Appsmith applications, covering both client-side and server-side improvements to ensure a smooth and efficient user experience.

## Optimizing the client side of your app

Client-side optimization improves app performance on user devices by enhancing load times and responsiveness. This section covers best practices like reducing API calls and optimizing widget usage to create a smoother user experience.

### Limit the number of widgets on a single page

Appsmith loads all widgets on a page at once, including those that are hidden or conditionally visible, which can impact performance. 

- Organize your application content across multiple pages to enhance performance and improve user experience, rather than placing everything on a single page.

- Navigate between pages using the `navigateTo("PageName")` function, similar to hyperlinks on websites. This helps manage loosely related content without overloading a single page. For more information, see [Share data across pages](/advanced-concepts/sharing-data-across-pages#use-query-parameters).

- Minimize the number of hidden or conditionally visible widgets (like Modals) on a page to reduce performance impact.

- Limit nesting widgets, especially in complex Tabs or Forms. Use the widget pane to track all widgets on a page and manage visibility effectively.


### Optimize JavaScript code

With JavaScript, you can improve performance by writing clean, efficient code. Here are some recommendations to ensure your code runs efficiently:

- Use well-established libraries like lodash for common operations, as they are optimized and tested by the community. See [how to use external JS libraries](/core-concepts/writing-code/ext-libraries).

- Use JavaScript functions like `performance.now()` and `console.time()` in your browser’s developer console to identify latency issues and optimize the slow parts of your code.

- Keep the use of global variables to a minimum to avoid memory leaks and ensure better performance.

- Implement [asynchronous](/core-concepts/writing-code/javascript-promises#asyncawait) functions to improve responsiveness and prevent blocking of the main thread during data processing.


### Make efficient use of Appsmith’s key-value store

Appsmith’s key-value store serves as a wrapper around JavaScript’s local storage functions—`localStorage` and `sessionStorage`—to facilitate data persistence. While it is essential for sharing application data across pages, improper usage can negatively impact performance. Below are some recommendations to optimize the use of the key-value store in your applications:



* **Batch `storeValue()` Calls:** When you have multiple related variables to store, combine them into a single [storeValue()](/reference/appsmith-framework/widget-actions/store-value) call instead of making multiple calls. This reduces overhead and enhances performance.

<dd>

*Example:* Instead of calling `storeValue()` multiple times in a loop:

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

* **Leverage JS Object Mutations**: If you're storing data only on the client side and don't need to send it to the server, consider mutating JSObject variables [mutation](/write-code/best-practices#use-mutable-js-variables). JS Object mutation means directly changing the properties of an object without creating a new one. This can perform better than using `storeValue()`.

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

- Limit `storeValue()` calls, especially in loops or frequent events.

- Regularly clean up unused keys from the key-value store to free up space and improve performance.


For more best practices on JavaScript, see [Best Practices](/write-code/best-practices#use-mutable-js-variables).

</dd>



### Review page load queries

You can configure queries and JavaScript functions to run automatically when a page loads. However, unnecessary page load queries can slow down performance, especially during development.

* Regularly review and disable any queries set to run on page load that are no longer necessary.

<dd>

<ZoomImage
  src="/img/disable-onpageload.webp" 
  alt=""
  caption=""
/>



</dd>

* Implement lazy loading by fetching only essential data initially, and loading additional data as needed, such as triggering queries on button clicks. See [Trigger UI Actions](/core-concepts/writing-code/ui-actions).



### Shift heavy computations to the server


To improve application performance, especially for users with less powerful devices, it’s important to reduce the computational burden on the client side. By offloading complex calculations to the server or datasources, you can enhance performance and provide a better user experience.

*Example:* Instead of calculating a large dataset's statistics (like averages or totals) on the client side, send a request to the server to perform these calculations. The server can handle the heavy lifting and return just the results.




## Optimizing the server side of your app

The server side of your app handles all backend operations, including data processing, database interactions, and API requests. Optimizing the server side is crucial for reducing response times, improving scalability, and ensuring a smooth user experience, especially under high load. The following sections outline best practices you can follow to optimize the server side of your application.

### Profile server calls


Identifying slow server calls is crucial for diagnosing performance issues in your application. Latency from the server side often indicates that queries or API requests are not optimized. By profiling these calls, you can pinpoint bottlenecks and focus on optimizing them for better performance.

<ZoomImage
  src="/img/query-edt.webp" 
  alt=""
  caption=""
/>

- Check the Query editor to view execution times for your server calls. This helps you identify which queries are slow and need optimization.

- If you're using custom JavaScript code to make server calls, use tools like `performance.now()` or `console.time()` to measure the performance of individual code segments.

- Use database-specific profiling tools such as the MongoDB Database Profiler or SQL Server Profiler to analyze and optimize the underlying queries.



### Optimize queries



Optimizing queries is essential for improving your application's performance. Inefficient queries can slow down response times and increase server load. Here are key points to consider:

- Break down large datasets into smaller batches using server-side pagination. Appsmith supports this feature natively if your datasource is configured to handle pagination. See [How to Setup Server-Side Pagination on Table](/build-apps/how-to-guides/Server-side-pagination-in-table).

- Use indexes on frequently queried columns to speed up search operations and reduce query execution time. This is especially useful for SQL databases.

- If performance issues persist despite optimization, consider that the issue might be with the third-party datasource's backend infrastructure. Switching to a different provider may be necessary for better performance.

### Upgrade server specifications



If performance issues continue despite optimizing your front end and back end, your server hardware may need an upgrade. Enhancing your on-premises hardware or scaling up your cloud infrastructure can help you achieve better performance levels.

