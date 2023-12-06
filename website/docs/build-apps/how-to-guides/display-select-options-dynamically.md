---
description: This page shows you how to display select options dynamically.
---

# Display Select Options Dynamically
Using dynamic select options, you can change the options in the widgets based on a user selection. This page shows you how to build an app that displays options dynamically and allows for real-time updates to the data as it changes using Select and MultiSelect widgets.

## Prerequisites
- A connected datasource with a query to fetch data.
- Ensure all the relevant tables from which data is to be fetched are properly related or joined to support data consistency and integrity.


## Set up widgets for dynamic data binding
To configure the parent widget and dependent widgets, follow these steps:
1. Drop a Select widget and bind data in the property pane.
   Here is an example, where `fetch_permission_details` is the query and `role` is the data to be bound:

   ```jsx
   {{fetch_permission_details.data.map((row) => ({label: row.role, value: row.role}))}}
   ```
2. Create a separate query corresponding to the configured datasource. This query uses the selected value of the widget in Step 1 to fetch a different set of records.

   Example:
   ```sql
   SELECT permissions FROM access_details WHERE role = {{ Select1.selectedOptionValue }};
   ```
3. Drop a MultiSelect widget and bind data to it using the query in Step 2. To dynamically populate the MultiSelect widget, set the **onOptionChange** property of the Select widget to run the query every time the selection changes.
To create cascading dropdowns, repeat these steps for each level of dependent Select widgets.
4. To create more complex data manipulations or filtering, use JavaScript objects. Here is an example that filters roles based on department and then dynamically sets second Select widget options for employee names:

    ```jsx
    export default { 
        filterRolesByDepartment: (department) => { 
            const roles = fetchpermissiondetails.data.filter(row => row.department === department); 
            return roles.map(role => ({ label: role.name, value: role.name })); },

        getEmployeesForRole: (role) => { 
            const employees = fetchemployeedetails.data.filter(emp => emp.role === role); 
            return employees.map(emp => ({ label: emp.name, value: emp.id })); 
            }, 
        };
    ```
    You can also use API responses as the source data for dynamic options, allowing for live updates from external systems. To do this, configure the **onOptionChange** or **onOptionSelected** action for the Select widget to trigger other widgets' updates or make a second API call to fetch related data. 
