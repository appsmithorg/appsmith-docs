# Run Code On Page Load

In Appsmith, the execution of queries and JavaScript functions can be automated at the time a page loads. This feature is essential for initializing the page state, fetching data, and preparing the UI for interaction with the user. Automatically running queries and functions provides a smooth user experience by ensuring necessary data is available right from the start.

## Automatic execution on page load

Appsmith intelligently determines which queries and JavaScript functions should be run on page load based on their bindings. If a query or function's response is bound to a widget's property, it will automatically be scheduled to run when the page loads.

### Rules of automatic scheduling:

1. **Bound to a Widget**: When a query or function is used within a widget's properties, it's inferred that the widget's display depends on the data from that query or function. Hence, it is marked to run on page load automatically.

2. **Unbound from Widget**: If a query or a function is no longer used within any widget properties, it indicates the data may not be immediately required. In such cases, Appsmith removes the query or function from the page load execution list.

3. **User Settings**: Users have the flexibility to override default behavior. They can mark queries and functions to always run on page load by altering their settings.
