# Running multiple actions on submit

Your edit form is ready to take user-input. Now you will configure its Confirm button to trigger the update of the product. It involves two steps:

1. Setting up the required update query
2. Wiring the form-submit to trigger the update query

Let's write the query. 

1. Navigate to **ProductListPage → DB Queries**
2. Click **+**
3. Navigate to **Mock** **Database**
4. Click on **New** **Query**
5. Rename query to **UpdateProductQuery**
6. Set the query to `UPDATE "products" SET "productName" = '{{ProductNameInput.text}}', "category" = '{{CategoryDropdown.selectedOptionValue}}', "mrp" = '{{MrpInput.text}}' WHERE "productId" = {{Products_Table.selectedRow.productId}};` ****
7. Run the query
8. Verify that the query runs successfully

. Let’s wire the **Confirm** button with the **UpdateProductQuery**:

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
* You set the **onSuccess** of the button to execute **ProductQuery**, i.e. if the **UpdateProductQuery** runs successfully, **ProductQuery** will be executed. This ensures that  **Products\_Table**, whose **Table Data** property is set to `ProductQuery.data`, shows updated results. 
* You set the **onError** of the button to show an alert message, i.e. if **UpdateProductQuery** returns an error, an alert message will be shown. 

## Binding multiple actions to an event

Try to edit a product, and click confirm. You'll see that the form-modal remains open after submitting. However, if the product update is successful, we'd like to close the form-modal, in addition to running the ProductQuery.

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

This is in line with what you learned in part 2 about using JavaScript to define widget behavior. Wherease there you wrote JavaScript to trigger one action onClick, here your JavaScript configures the onClick event to trigger two actions - execute the **ProductQuery**, and close the modal. 

{% hint style="info" %}
GUI vs JavaScript:

By extension, understand that you can write any JavaScript to customize widget behavior. Often, in Appsmith, you'll be able to do customize more by writing JavaScript, than by using the GUI. We recommend that you spend some time fiddling with JavaScript on Appsmith.
{% endhint %}

Try to edit a product again, and verify that the form-submit works as expected.

**What's next?**

The beginner tutorial ends here. At this point, you should know enough to start a project of your own and start fooling around. As you need to learn new tricks, come back to the documentation.  


