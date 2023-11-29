---
description: This page shows you how to insert data in Appsmith. 

---
# Insert Data Using Form

This page shows you how to insert data using a Form widget.

## Insert data using a new page

To insert data in a new page, follow these steps:
1. Add a Button widget. Set the widget's **onClick** event to open a new page by selecting the **Navigate to** action and selecting the appropriate page.
   You can also pass parameters to the new page in the action selection pane.
   For more information, see [navigateTo](/reference/appsmith-framework/widget-actions/navigate-to).
2. Add a Form Widget to the `insertDetails` page. 
3. Add Input widgets for each data field you want to capture. Set the **Data type** of each widget.
4. Drag and drop a Button Widget inside the form and set its `onClick` property to insert data using the following code:
   ```jsx
   {{insertDataQuery.run()}}
   ```
   Here is an example to create a new offer using the `insertDataQuery` where `offers` is the datasource, and `offer_details` is the form name:
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
   To format dates, use [Moment](https://momentjs.com/docs/).
5. Click the **Reset** button on the form to clear values.

## Insert data using a Modal
To insert data using a Modal, follow these steps:
1. Add a Button widget. Set the widget's **onClick** event to show a Modal by selecting the **Show modal** action and then selecting the Modal name.
2. Add a Form Widget to the Modal and design the Modal to add Input widgets for each data field you want to capture.
3. Drag and drop a Button widget into the Modal and set its `onClick` property to insert data using the following code:
   ```jsx
   {{insertDataQuery.run(() => closeModal('insertDetails'))}}
   ```
   To reset the Modal, select the **Reset widget** action and then select the Modal name.
   For more information, see [resetWidget](/reference/appsmith-framework/widget-actions/reset-widget).
   Alternatively, you can enable the **Reset on submit** property of the Form widget and use the **Reset** button on the form to reset the value.
4. To validate data before inserting, Scroll to the **Validation** section in the property pane of the Form widget. Enter the validation criteria, such as **Required**, **Max Characters**, **Regex**, etc. The submit button remains disabled until all widgets meet the defined validation criteria. For more information, see [Validation](/reference/widgets/input#regex-string).
5. Add a Button widget to the page. Set its **onClick** event to open the Modal by selecting the **Show modal** action and then selecting the Modal name.

## Update form fields dynamically

To update fields dynamically, follow these steps:
Set the `onTextChange`, `onSelect`, or other event properties of your widgets to set up the properties of other form fields as needed.
For example, to set the `offerCode` based on the selection of `location` for a new offer use the following code:

```jsx
{{ offerCode.setText(location.selectedOptionValue + code) }}
```

For more information, see [Dynamic data mapping](/reference/widgets/list#dynamic-data-mapping).
