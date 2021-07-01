# Configuring multiple actions on UI events

The API to update a product is ready. In this section, you'll bind the **Confirm** button of **EditProductModal** to run **UpdateProductApi**.

1. Open **EditProductForm**'s properties
2. Rename **label** to **Update**
3. Go to **Actions → Call an API**
4. Choose **UpdateProductApi**
5. Go to **onSuccess**
6. Choose **Execute DB Query → ProductQuery**
7. Go to **onError**
8. Choose **Show Alert**
9. Set the **Message** to **Product update failed!**
10. Set **Type** to **Error**

Let’s see what you did there:

* You configured the **Confirm** button to run **UpdateProductApi**.
* Now, you want the **Products\_Table** to show the updated list of products after the new product gets added successfully. For that, you set the **onSuccess** event of the button to execute **ProductQuery**, i.e. if the **UpdateProductApi** runs successfully, **ProductQuery** will be executed. Here you're following the [reactive programming paradigm](../part-1-creating-a-simple-view/creating-your-first-table.md#reactive-programming) of Appsmith, that is, you are triggering an auto-update of the data displayed by the **Products\_Table**  by calling `ProductsQuery.run()` .
* You set the **onError** event of the button to show an alert message, i.e. if **UpdateProductApi** returns an error, an alert message will be shown.

Try to edit a product, and click **Confirm** to verify that it works. You'll see that you see success/error notifications on the top left, but the form-modal remains open after submitting. Let's configure it to close the form if the update is successful. On error, you'll keep the form open for making further edits.

## Triggering multiple actions on a UI event

To bind multiple actions to a button event, let's write some JavaScript:

1. Click on **JS** of **onClick** on **EditConfirmButton**
2. The **onClick** field converts to JS
3. Set it to 

```javascript
{{
  UpdateProductQuery.run(
  () => { 
          ProductsQuery.run(); 
          closeModal('EditProductModal')
        },
  () => showAlert('Product update failed!'))
}}
```

This is in line with what you learned in [part 2](https://docs.appsmith.com/tutorial-1/part-2-using-forms) about using JavaScript to define widget behavior. Whereas there you wrote JavaScript to trigger one action **onSuccess** of **onClick**, here you're configuring two actions. The first argument to the `run()` method is a JavaScript anonymous function that triggers two actions **onSuccess** of **onClick** -

* Execute the **ProductQuery** 
* Close the modal

Note that since these actions run asynchronously, they all run in parallel. You can trigger as many actions **onSuccess** and **onError** as required by wrapping them within an anonymous JavaScript function.

Try to edit a product again, and verify that the form-submit works as expected.

{% hint style="info" %}
**GUI vs JavaScript: What to use when?**

By extension, understand that you can write any JavaScript to customize widget behavior. Often, in Appsmith, you'll be able to customize more by writing JavaScript, than by using the GUI.

For example, configuring multiple actions to be run **onSuccess** is supported only via JavaScript because it's easier to write code for it than to configure it using the GUI.

Similarly, to configure conditional behavior, writing ternary conditions in JavaScript is easier, and more extendible; and hence GUI doesn't provide for it.

We recommend that you spend some time fiddling with JavaScript on Appsmith.
{% endhint %}

## Sharing your app

Let's deploy your app for the final time. Once deployed, you can share your deployed application with both internal and external users:

1. Click on the **"Share"** button on the top right
2. Invite a user using their email ID
3. Select an appropriate role for the user 
4. Share the application’s URL with the user

You can also make the application public, in which case, anyone with the URL to the application can view the application without having to sign in. You can read more about [access control here](https://docs.appsmith.com/core-concepts/access-control).

**What's next?**

The basic Catalog Dashboard is now up and running. This also marks the end of the beginner tutorial. At this point, you should know enough to start a project of your own and start fooling around. The following resources will come in handy as you need to learn new tricks:

* [Core Concepts](https://docs.appsmith.com/core-concepts/)
* [Widget Reference](https://docs.appsmith.com/widget-reference)
* [Function Reference](https://docs.appsmith.com/function-reference/)

