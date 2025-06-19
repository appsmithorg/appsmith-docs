# JavaScript Settings
This page provides information on the settings available for JS Objects and their functions in Appsmith. You can access these settings by clicking the **⚙️ gear icon** in the top-right corner of the JS Object editor and selecting a function from the dropdown list.

### Choose function run behavior

Each JavaScript function supports one of the following Run behavior modes:

<img
  src="/img/js-settings-mode.png"
  alt="JavaScript Settings Mode"
  style={{
    maxHeight: "600px",
    width: "auto",
    display: "block",
    margin: "0 auto"
  }}
/>
<p style={{ textAlign: "center", fontSize: "0.9rem", color: "#666" }}>
  JavaScript Settings
</p>

#### Manual

<dd>


The function executes only when explicitly invoked. It will not run on page load or when any variables it references change.

You can trigger the function using:

- Widget events (e.g., **onClick**).
- JavaScript calls using `.run()`.
- The **Run** button in the editor.

This mode provides full control over execution timing and is best suited for user-driven actions.

*Example:* If you want to execute a function only when a user clicks a button, you can set the button's **onClick** event to:

```javascript
{{CustomerActions.createCustomer()}}
```

</dd>



#### On page load

<dd>

Functions configured with On page load run behavior execute automatically once when the page is loaded. This is useful for initializing state, setting default values, or triggering background logic without requiring user interaction.

The function runs each time:

- The page is loaded or reloaded
- The app is opened or refreshed

This mode is ideal for setup tasks that should occur during the initial load of the application.

*Example:* If you want to initialize session data when the app loads, you can define a function like `initializeSession` and set its run behavior to On page load:

```js
initializeSession: () => {
  storeValue("sessionStartedAt", moment().format());
}
```

</dd>


#### Automatic

<dd>

Functions configured with Automatic run behavior execute whenever a variable or input they depend on changes. Appsmith automatically tracks all references used inside the function and re-runs the function when any of those values are updated.

This eliminates the need to manually bind the function to widget events such as **onTextChanged** or **onOptionChanged**.

The function runs each time:

- A referenced widget value changes (e.g., `{{Input1.text}}`, `{{Select1.selectedOptionValue}}`).
- A dependent JavaScript object or function result is updated.
- An Appsmith store variable used inside the function changes.
- A default parameter bound to a variable is updated.

This mode is ideal for reactive logic where the output should always reflect the latest application state or user input. 

*Example:* If you want to filter a product list based on a search input and selected category, you can define a function like `filterProducts`:

```javascript
filterProducts: () => {
  return ProductQuery.run({
    search: SearchInput.text,
    category: CategoryDropdown.selectedOptionValue
  });
}
```

When `SearchInput.text` or `CategoryDropdown.selectedOptionValue` changes, the `filterProducts` function will run automatically.

:::note
- If a function is set to run automatically and is also invoked manually (for example, through a widget’s event handler), it can execute twice, once due to the dependency change and once from the manual trigger. To prevent this, use either automatic behavior or manual invocation, not both.

- If a JavaScript object function triggers a query, and the query’s result is bound to a widget (such as a Table), both the function and the query become reactive. Any change in their shared dependencies, such as `Input1`.text—can cause both the function and the query to execute automatically.
:::


:::info
Changes to values in the Appsmith global object do not trigger automatic re-execution of queries or JavaScript actions. For example, updates to appsmith.store will not cause a function or query to re-run unless combined with a reactive property or triggered explicitly.
:::

</dd>