# Running multiple actions on submit

You have created the fields for the edit form. Now you will configure its Confirm button to trigger the update query. Let’s set up the query first.

1. Navigate to **ProductListPage → DB Queries**
2. Click **+**
3. Navigate to **Mock** **Database**
4. Click on **New** **Query**
5. Rename query to **UpdateProductQuery**
6. Set the query to
7. Run the query

```text
UPDATE "products"
SET "productName" = '{{ProductNameInput.text}}', 
    "category" = '{{CategoryDropdown.selectedOptionValue}}', 
    "mrp" = '{{MrpInput.text}}'
WHERE "productId" = {{Products_Table.selectedRow.productId}};
```

Verify that the query runs successfully. Let’s wire the Confirm button with the **UpdateProductQuery**:

1. Open **EditProductForm**'s properties
2. Rename **label** to **Update**
3. Go to **Actions → Execute DB Query**
4. Choose **UpdateProductQuery**
5. Go to **onSuccess**
6. Choose **Execute DB Query → ProductQuery**
7. Go to **onError**
8. Choose **Show Alert**
9. Set the **Message** to **Product update failed!**
10. Set **Type** to **Error**

Let’s see what you did there:

* You configured the **Confirm** button to run **UpdateProductQuery** on click
* You set the **onSuccess** of the button to execute **ProductQuery**, i.e. if the **UpdateProductQuery** runs successfully, **ProductQuery** will be executed. This ensures that the table shows updated results. 
* You set the **onError** of the button to show an alert message, i.e. if **UpdateProductQuery** returns an error, an alert message will be shown. 

Try to edit a product, and click confirm. You'll see that the form-modal remains open after submitting. Let's fix that:

1. Click on **JS** of **onClick** on **EditConfirmButton**
2. The **onClick** field converts to JS
3. Set it to 

```text
{{
  UpdateProductQuery.run(
  () => { 
          ProductsQuery.run(); closeModal('EditProductModal')
       },
 () => showAlert('Product update failed!'))
}}
```

Similar to how, in JavaScript, you configure a button’s event to run multiple functions, you configured **UpdateProductQuery’s** successful run to do two things - first, execute the **ProductQuery**, and second, close the modal. On error, you show the alert message, but do not trigger the closing of the form-modal.

Try to edit a product again. The form-modal closes on successful submit, and you see the table with the updated product. Check for the error case as well. The modal doesn’t close, and you see an error message.  


