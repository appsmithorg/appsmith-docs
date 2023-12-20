---
description: This page shows you how to insert data in Appsmith. 

---

# Insert Data

This guide shows you how to insert data into a datasource using the Form widget on a new page and a Modal. It explains steps to bind data to widgets, validate user input, and configure queries.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/4HdgmwDfdpgGly9XxIsz?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

## Use Modal
To insert data using a Modal, follow these steps:
1. Drop a Modal widget on to the canvas, and then add the relevant widgets and configure their properties.
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
6. Drop a Button widget on to the canvas and set it's **onClick** event to show the Modal by selecting the **Show modal** action and then selecting the Modal name created in Step 1.

## Use new page
To insert data in a new page, follow these steps:
1. Create a new page and then drop a Form widget in the page. Add the relevant widgets into the Form widget and configure their properties.
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
5. Add a Button widget to your home page and set it's **onClick** event to navigate to the insert data page created in Step 1. 
   For more information, see [navigateTo](/reference/appsmith-framework/widget-actions/navigate-to).

:::info
To insert the ID value, choose a UUID generator or let your data source auto-generate the ID.
:::