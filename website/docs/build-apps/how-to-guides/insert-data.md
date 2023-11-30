---
description: This page shows you how to insert data in Appsmith. 

---
# Insert Data

This guide shows you how to insert data into a datasource using the Form widget in a new page and a Modal. It explains steps to bind data to widgets, validate user input, and configure query.

## Using new page
To insert data in a new page, follow these steps:
1. Add a Button widget. Set the widget's **onClick** event to open a new page by selecting the **Navigate to** action and selecting the appropriate page.
   For more information, see [navigateTo](/reference/appsmith-framework/widget-actions/navigate-to).
2. In the new page, create a Form widget to capture the details you want to insert.
3. You can update fields dynamically by setting the events of the widgets to bind data to other fields in the Form.
   For example, to set the `offerCode` based on the selection of `location` for a new offer use the following code:

   ```jsx
   {{ offerCode.setText(location.selectedOptionValue + code) }}
   ```
   For more information, see [Dynamic data mapping](/reference/widgets/list#dynamic-data-mapping).

4. To validate data before inserting, scroll to the **Validation** section in the property pane of the Form widget. Enter the validation criteria, such as **Required**, **Max Characters**, **Regex**, etc. The submit button remains disabled until all widgets meet the defined validation criteria. For more information, see [Validation](/reference/widgets/input#regex-string).
5. Select the **Submit** button on the Form, and add an **Action** to the **onClick** property. Select **Execute a query**, and then select your insert query.

   Here is an example where `offers` is the datasource, and `offer_details` is the form name:
   ```sql
      INSERT INTO offers 
      (id, title, description, valid_from, valid_till, offer_type, product_type, discount_type, discount_value) 
      VALUES 
      (
      {{ offer_details.data.id }},
      {{ offer_details.data.title }},
      {{ offer_details.data.description }},
      {{ offer_details.data.valid_from }},
      {{ offer_details.data.valid_till }},
      {{ offer_details.data.offer_type }},
      {{ offer_details.data.product_type }},
      {{ offer_details.data.discount_type }},
      {{ offer_details.data.discount_value }}
     );
   ```
6. In **Callbacks** for the Form's **Submit** button, add an action in **On success**, select **Reset widget** in **Action**, and then select your Form in **Widget**.

## Using Modal
To insert data using a Modal, follow these steps:
1. Add a Button widget. Set the widget's **onClick** event to show a Modal by selecting the **Show modal** action and then selecting the Modal name.
2. In the Modal, create a Form widget to capture the details you want to insert.
3. You can update fields dynamically by setting the events of the widgets to bind data to other fields in the Form.
   For an example, refer to step 5 of [Using new page](#using-new-page).
   For more information, see [Dynamic data mapping](/reference/widgets/list#dynamic-data-mapping).
4. To validate data before inserting, Scroll to the **Validation** section in the property pane of the Form widget. Enter the validation criteria, such as **Required**, **Max Characters**, **Regex**, etc. The submit button remains disabled until all widgets meet the defined validation criteria. For more information, see [Validation](/reference/widgets/input#regex-string).
5. Select the **Submit** button on the Form, and add an **Action** to the **onClick** property. Select **Execute a query**, and then select your insert query. For an example, refer to step 5 of [Using new page](#using-new-page).
6. Add a Button widget to the page. Set its **onClick** event to open the Modal by selecting the **Show modal** action and then selecting the Modal name.
7. In **Callbacks** for the Form's **Submit** button, add an action in **On success**, select **Reset widget** in **Action**, and then select your Modal in **Widget**.

