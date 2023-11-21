# Run Code On Page Load

In Appsmith, the execution of queries and JavaScript functions can be automated at the time a page loads. This feature is essential for initializing the page state, fetching data, and preparing the UI for interaction with the user. Automatically running queries and functions provides a smooth user experience by ensuring necessary data is available right from the start.

## Automatic execution on page load

Appsmith intelligently determines which queries and JavaScript functions should be run on page load based on their bindings. If a query or function's response is bound to a widget's property, it will automatically be scheduled to run when the page loads.

### Rules of automatic scheduling:

1. **Bound to a Widget**: When a query or function is used within a widget's properties, it's inferred that the widget's display depends on the data from that query or function. Hence, it is marked to run on page load automatically.

2. **Unbound from Widget**: If a query or a function is no longer used within any widget properties, it indicates the data may not be immediately required. In such cases, Appsmith removes the query or function from the page load execution list.

3. **User Settings**: Users have the flexibility to override default behavior. They can mark queries and functions to always run on page load by altering their settings.

## User configuration

Appsmith allows users to manually configure the execution behavior of queries and functions.

### Steps to configure:

1. Navigate to the query or function you wish to configure.
2. Click on the **Settings** tab within the query/function editor.
3. Locate the **On Page Load** option and select it to mark the query/function to always run during page load.

Once you explicitly set a query or function to run on page load, Appsmith will respect this setting, and the system will not alter it based on bindings.

## Example: show a login modal on page load

Let's demonstrate how to display a login modal using a JavaScript function when the page loads.

First, create a widget, such as a modal named `LoginModal`, that will serve as the container for your login form.

Next, create a JSObject named `Utils` to manage the display logic of the modal.

```javascript
// Create a JS Object named LoadModal in Appsmith
export default {
  // Function to show the LoginModal widget
  showLogin: () => {
    // Use Appsmith's widget property setters to open the modal
    return showModal("LoginModal");
  },
};
```

Finally, ensure the `showLogin` function is set to run on page load:

1. Navigate to the `Utils` JSObject in Appsmith.
2. Click on the settings tab in the JSObject.
3. Switch the **On Page Load** toggle to **ON**.

With this setting, the `showLogin` function will always execute when the page loads, opening the `LoginModal` for the user to log in.

Remember, once you've explicitly marked the `showLogin` function to run on page load, this setting will be preserved. This ensures that significant components like user authentication are available immediately, contributing to a better user experience.

## Conclusion

Automating the execution of queries and JavaScript functions on page load is a powerful feature in Appsmith. By understanding and utilizing this behavior effectively, developers can design responsive and data-ready applications without manually triggering essential data flows and UI states.
