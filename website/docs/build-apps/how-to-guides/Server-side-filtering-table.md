

# Setup Server-side Filtering on Table

Server-side filtering involves using a value to narrow down the results of a query in a similar way to server-side searching. However, instead of searching for a specific term, the selected value is used to filter out unwanted data from the requested dataset. 

To enable server-side filtering, you can use widgets such as the [Select widget](/reference/widgets/select/) to provide users with a list of supported filters to choose from.

1. Drag a Select widget to the canvas and add options that you might use to filter your data.

2. Create a query, and add the Select widget's `selectedOptionValue`:

    As a SQL query:
    ```sql
    SELECT * FROM users WHERE gender = {{genderDropdown.selectedOptionValue}};
    ```

    As an API request with URL parameters:
    ```
    https://mock-api.appsmith.com/users?gender={{genderDropdown.selectedOptionValue}}
    ```

3. Set the Select widget's **onOptionChange** event to run the query. 
