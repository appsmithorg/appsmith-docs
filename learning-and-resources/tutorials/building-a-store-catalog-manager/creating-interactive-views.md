# Creating Interactive Views

By now, you've built a multi-page tool that allows you to view all products and add new products to the catalog. The following tutorial walks you through building the functionality to edit a product. During this, you'll learn to:

1. Access one widget's state from another
2. Set up an API to update a product
3. Execute multiple actions on a single event

## Accessing properties between widgets

To begin implementing the "Edit Product" functionality, let's configure the table properties to add an **Edit** button to each row. Upon clicking the **Edit** button, a form modal will open to allow editing the product's details in the corresponding table row.

1. Open **ProductsTable**'s properties.
2. Click on **ADD A NEW COLUMN** under **Columns**.
3. Click the ( ⚙️ ) icon to access column settings.
4. Change the column type to **Button**. You may want to rename this column within the table's properties window.
5. Label the button as **Edit** under button properties in the column's settings.

Now, the **ProductsTable** should look something like this:

![](../../../.gitbook/assets/as\_storeTutorial\_openModal.png)

There are now buttons in each row of the table, each corresponding to that row's product. Let's configure these buttons to open a modal for editing the items:

1. Open **ProductsTable**'s properties.
2. Go to the button column's settings by clicking the gear ( ⚙️ ) icon beside it.
3. Choose the action **Open Modal** from the **onClick** dropdown.
4. Choose **New Modal**.
5. Rename the new modal to **EditProductModal** using its properties.
6. Rename the modal's title to **Edit Product**.
7. Delete the two default buttons at the bottom of the modal, called "Reset" and "Submit". You can do this with the trash can icon at the top of each widget's properties, or by selecting the widgets and hitting the "Delete" keyboard key.
8. Drag and drop a new Form Widget into the modal window, and delete the form's default text widget (since the modal already has our title).
9. Rename the form's "Submit" button to **EditConfirmButton**.

After those steps, your new modal should look like this:

![](../../../.gitbook/assets/as\_storeTutorial\_formModal.png)

{% hint style="info" %}
If the modal window gets closed at any point, you can access it again in the editor by looking in the Explorer pane to the left of the screen, finding it in the Widgets tree, and clicking its name to open it back up.
{% endhint %}

Click on the **Edit** button of any row to ensure that the **EditProductModal** opens as intended. After that is working, let's populate the form with widgets! It should be built such that:

* It looks exactly like the **AddProductForm**
* Its properties are configured in the same way as that of **AddProductForm**

Click [here](using-forms.md) if you'd like to refer back to the previous instructions for creating the **AddProductForm**.

{% hint style="info" %}
**Naming:**

The names of widgets inside your **EditProductModal** are the same as that of the names of widgets inside **AddProductForm**. This is valid because they both belong to different parent pages. Names only need to be unique within the page scope; a widget and an API within the same parent page can't share the same name.
{% endhint %}

Like **AddProductForm**, all the form-fields in **EditProductModal** are empty. However, to edit a product, you'll want them to be pre-filled with the values of the product that you want to update. This means that:

* **ProductNameInput** should show the **productName** value of the selected row.
* **MrpInput** should show **mrp** value of the selected row.
* **CategorySelect** should show the **category** value of the selected row.

Let's configure those widgets!

To set a default value of **ProductNameInput**:

1. Open properties of **ProductNameInput**.
2. Set **Default Text** to `{{ProductsTable.selectedRow.productName}}`.
3. Verify that the **Evaluated Value** of the property matches the corresponding value from the selected row.

Above, you just wrote JavaScript to set the value of **Default Text** using data from `ProductsTable.selectedRow`, which has all the column values of the selected row. By referencing **`productName`** on it, you're accessing the value of **productName** column. By setting **Default Text** to this, you're pre-filling the form with this value.

From within our form, we've accessed data from the selected row of our table via its `selectedRow` property. To see the exposed properties you can access for any given widget, check the **Properties** section of its entry in the [**Widget** ](../../../reference/widgets/)documentation.

Finally, note that since the scope of a widget is limited to its parent page, a widget shares its properties only with other widgets, queries, and APIs defined within the same page. For example, in this case, `ProductsTable.selectedRow` can be accessed only in other widgets, queries, and APIs of **ProductListPage**. `ProductsTable.selectedRow` can't be accessed from any widget, query, or API of **AddProductPage**.

{% hint style="info" %}
**Accessing data across pages:**

There are two ways to access a widget's properties or an APIs/DB Query's results _from another page_:

1. Store the data in your browser cache using the [storeValue](broken-reference/) function so that it's available for accessing even when the user moves to another page in your app.
2. Pass the data as a query param in the URL of the page you redirect the user to. This can be done using the [navigateTo](broken-reference/) function.
{% endhint %}

Let's now set a default value for **MrpInput**:

1. Open properties of **MrpInput**.
2. Set **Default Text** to `{{ProductsTable.selectedRow.mrp}}`.
3. Verify that the **Evaluated Value** of the property matches the value in the currently selected row.

And for CategorySelect:

1. Open **CategorySelect**'s properties.
2. Set **Default Option** to `{{ProductsTable.selectedRow.category}}`.
3. Verify that the **Evaluated Value** of the property matches the value in the selected row.

Great, our form should now pre-fill with the selected product's details! Try it out to make sure that everything gets filled correctly from the selected table row.

## Writing your first API

Your edit form is ready to take user input. Next, you will configure its Confirm button to trigger the update of the product via an API. It involves two steps:

1. Setting up the required API.
2. Wiring the form-submit button to initiate the API query.

In this section, we'll set up the API.

You'll use the endpoint below to update a product:

```
PUT https://mock-api.appsmith.com/products/:id
```

This is a mock API exposed by Appsmith to help you learn API basics. It doesn't require any authentication. It accepts JSON input and responds with JSON output. Let's set it up on your app:

1. Navigate to **ProductListPage → Datasources**.
2. Click **+ Create New**.
3. Choose **Create new API**.
4. You'll see a Postman-like interface.
5. Rename the API to **UpdateProductApi**.
6. Set the request method to **PUT**.
7. Copy-paste the below in **URL** `https://mock-api.appsmith.com/products/{{ProductsTable.selectedRow.id}}`.
8. Copy-paste the query below into the **Body** section.
9. Run the API.

```
{
	"productName" : "{{ProductNameInput.text}}",
	"mrp" : "{{MrpInput.text}}",
	"category" : "{{CategorySelect.selectedOptionValue}}"
}
```

![Click to enlarge!](../../../.gitbook/assets/as\_storeTutorial\_updateProductApi.png)

By using the mustache template in the URL (step 7), you're providing the ID of the product to be updated. To build the request body, you're writing JavaScript within mustaches to provide the new values for the product details.

{% hint style="info" %}
**A word on sharing widget properties:**

Here, you are accessing widgets' properties from within an API query. This is in line with what you learned in the previous sections - that you can access a widget's properties from other widgets, APIs, and DB Queries. Regardless of where you access a widget's properties from, you use the same naming syntax to refer to the objects. That is, you will access a value by its`{{<widgetname>.<property_name>}}` no matter where you are in the editor.
{% endhint %}

## Configuring multiple actions on UI events

The API to update a product is ready! In this section, you'll bind the **Confirm** button of **EditProductModal** to run **UpdateProductApi**.

1. Open **EditProductForm**'s properties.
2. Rename **label** to **Update**.
3. Go to **Events → onClick → Execute Query**.
4. Choose **UpdateProductApi**.
5. Go to **onSuccess**.
6. Choose **Execute Query → ProductsQuery**.
7. Go to **onError**.
8. Choose **Show Message**.
9. Set the **Message** to **Product update failed!**.
10. Set **Type** to **Error**.

Let's see what you did there:

* You configured the **Confirm** button to run **UpdateProductApi**.
* Now, you want the **ProductsTable** to show the updated list of products after the new product gets added successfully. For that, you set the **onSuccess** event of the button to execute **ProductQuery**; if the **UpdateProductApi** runs successfully, **ProductQuery** will be executed. Here you're following the reactive programming paradigm of Appsmith: You are triggering an auto-update of the data displayed by the **ProductsTable** by calling `ProductsQuery.run()`.
* You set the **onError** event of the button to show an alert message so that if **UpdateProductApi** returns an error, an alert message will be displayed.

Try to edit a product, and click **Confirm** to verify that it works - You should now see success/error notifications in the top right of the screen.

{% hint style="info" %}
Due to the internal configuration of the mock database and API, you might not see the changes from your PUT request reflected in the table. However, if your app returns a success message, then don't worry - you did it correctly!
{% endhint %}

Currently, the form modal always stays open after submission; let's configure it to close the form if the update is successful. On error, we'll keep the form open for making further edits.

## Triggering multiple actions on a UI event

To bind multiple actions to a button event, let's write some JavaScript:

1. Click on the **JS** button of the **onClick** field in **EditConfirmButton**'s properties.
2. The **onClick** field then converts to JavaScript. Paste in the following:

```javascript
{{
  UpdateProductApi.run(
  () => { 
          ProductsQuery.run(); 
          closeModal('EditProductModal')
        },
  () => showAlert('Product update failed!'))
}}
```

This is similar to what you learned in [part 2](https://docs.appsmith.com/tutorials/building-a-store-catalog-manager/part-2-using-forms) about using JavaScript to define widget behavior. In Part 2, you wrote JavaScript to trigger one action **onSuccess** of **onClick** - but here, you're configuring _two_ actions! The first argument to the `run()` method above is an anonymous JavaScript function that triggers two actions in the **onSuccess** case of **onClick**:

1. Execute the **ProductQuery.**
2. Close the modal.

Note that since these actions happen asynchronously, they will all run in parallel. You can trigger as many actions as you want within **onSuccess** and **onError** by wrapping them within an anonymous function.

Try to edit a product again and verify that the form-submit works as expected.

{% hint style="info" %}
**GUI vs JavaScript: What to use when?**

You'll often be able to customize app behavior more finely by writing JavaScript, as compared to only using the GUI.

For example, configuring multiple actions to be run in **onSuccess** is supported only via JavaScript, because it's easier to write code for it than it is to configure by using the GUI.

Similarly, to configure conditional behavior, writing ternary conditions in JavaScript is easier and more extensible; hence the GUI doesn't provide for it.

We recommend that you spend some time fiddling with JavaScript on Appsmith!
{% endhint %}

## Sharing your app

Now deploy your app for the final time!

Once deployed, you can share your deployed application with both internal and external users:

1. Click on the **"Share"** button on the top right.
2. Share the application's URL with the user, OR
3. Invite a user by adding their email, selecting an appropriate role for them, and clicking **INVITE**.

You can also make the application public, in which case, anyone with the URL to the application can view it without needing to sign in. (Read more about [access control](../../../advanced-concepts/access-control.md).)

**What's next?**

The basic Catalog Dashboard is now up and running. This also marks the end of the beginner tutorial. At this point, you should know enough to start a project of your own and start playing around. The following resources will come in handy as you need to learn new tricks:

* [Core Concepts](broken-reference/)
* [Widgets](../../../reference/widgets/)
* [Appsmith Framework](<../../../reference/appsmith-framework/README (1).md>)
