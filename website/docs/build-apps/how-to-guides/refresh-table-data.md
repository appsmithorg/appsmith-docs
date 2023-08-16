# Refresh table data

When changes are made to the datasource that supplies your table with data, the table won't automatically reflect these changes. Therefore, it is necessary to use events and/or write code that re-executes the query responsible for populating data into the table whenever new data is submitted to the datasource.

**Example:**
For instance, suppose you have a table that receives its data from a query called `getData`, and you have a button that submits a form with new user input through a query called `sendNewData`.

1. When the form is submitted via the button's `onClick`, it executes
    ```javascript
    {{ sendNewData.run() }}
    ```
2. On success, it executes `getData.run()` as a callback to get the latest version of the dataset that includes the new changes:
    ```javascript
    {{ sendNewData.run(() => getData.run(), () => {}) }}
    ```

Now when `sendNewData` succeeds, your table automatically refreshes itself.

