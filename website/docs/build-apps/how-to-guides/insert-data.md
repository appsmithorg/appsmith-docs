---
description: This page shows you how to insert data in Appsmith. 

---

# Insert Data

This guide shows you how to insert data into a datasource using the Form widget on a new page and a Modal. It explains the steps to bind data to widgets, validate user input, and configure queries.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/4HdgmwDfdpgGly9XxIsz?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

## Use Modal
To insert data using a Modal, follow these steps:
1. Drop a Modal widget onto the canvas, and then add the relevant widgets and configure their properties.
2. To validate data before inserting, scroll to the **Validation** section in the property pane of each widget within the Modal. Enter the validation criteria, such as **Required**, **Max Characters**, **Regex**, etc. The `Save` button on the Modal remains disabled until all widgets meet the defined validation criteria. For more information, see [Validation](/reference/widgets/input#regex-string).
3. Configure the query to insert data.

   Example:
   ```sql
   INSERT INTO person (first_name, last_name, email, phone)
   VALUES 
   (
      {{inp_addFirstName.text}},
      {{inp_addLastName.text}}, 
      {{inp_addEmail.text}}, 
      {{inp_addPhone.text}}
   );
   ```
4. Create a JS Object to run the insert query, close the Modal, and fetch the updated data from the datasource.   
   Example:
   ```jsx
   insertData: async () => {
		const customer = await addCustomer.run();
		closeModal('mdl_newCustomer');
		showAlert('Customer Created', 'success');
		getCustomers.run();
	}
   ```
5. Set the **onClick** event of the `Save` button on the Modal to execute the JS Object.
6. Drop a Button widget onto the canvas and set its **onClick** event to show the Modal by selecting the **Show modal** action and then selecting the Modal name created in Step 1.

## Use new page
To insert data in a new page, follow these steps:
1. Create a new page and then drop a Form widget on the page. Add the relevant widgets into the Form widget and configure their properties.
2. To validate data before inserting, scroll to the **Validation** section in the property pane of the Form widget. Enter the validation criteria, such as **Required**, **Max Characters**, **Regex**, etc. The Form widget's `Submit` button remains disabled until all widgets meet the defined validation criteria. For more information, see [Validation](/reference/widgets/input#regex-string).
3. Configure the query to insert data using [data](/reference/widgets/form#data-object) reference property of the Form.

   Example:
   ```sql
      INSERT INTO person 
      (first_name, last_name, email, phone)
      VALUES 
      (
         {{frm_new_customer.data.first_name}},
         {{frm_new_customer.data.last_name}},
         {{frm_new_customer.data.email}},
         {{frm_new_customer.data.phone}}
      );
   ```
   :::info
   When prepared statements are enabled and widget bindings are used, quotes are not required.
   :::

4. Set the `Submit` Button's **onClick** event to execute the insert query, and the **onSuccess** callback to navigate back to your home page and fetch the updated data.
5. Add a Button widget to your home page and set its **onClick** event to navigate to the insert data page created in Step 1. 
   For more information, see [navigateTo](/reference/appsmith-framework/widget-actions/navigate-to).

:::info
To insert the ID value, choose a UUID generator or let your data source auto-generate the ID.
:::

## Use Table

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/dEZaROvMJIEhkPBmNe82?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

To dynamically add new rows to the table, follow these steps:

1. Enable the **Editable** property for all the required columns.
2. Enable the **Allow adding a row** property in the table's property pane. This displays a button labeled _Add new row_ at the top of the table widget. When a user adds a new row to the table, they see **Save row** and **Discard** buttons to save or discard the new row and its data.
3. Create a new INSERT query, using the `newRow` reference property to retrieve values from the newly created row:

   Example: If you want users to add data for new users, you can use:

   ```sql
   INSERT INTO users 
   (id, phone, name, gender, latitude, longitude, dob, email, image, country) 
   VALUES 
   (
      {{ Table1.newRow.id }}, 
      {{ Table1.newRow.phone }}, 
      {{ Table1.newRow.name }}, 
      {{ Table1.newRow.gender }}, 
      {{ Table1.newRow.latitude }}, 
      {{ Table1.newRow.longitude }}, 
      {{ Table1.newRow.dob }}, 
      {{ Table1.newRow.email }}, 
      {{ Table1.newRow.image }}, 
      {{ Table1.newRow.country }}
   );
   ```
4. Set the Table widget's **onSave** event to run the query, and the **onSuccess** callback to trigger the fetch query that refreshes the table data with the updated information.