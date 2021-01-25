# Writing your first API

Your edit form is ready to take user input. Now you will configure its Confirm button to trigger the update of the product via an API. It involves two steps:

1. Setting up the required API
2. Wiring the form-submit to trigger the API

In this section, we'll set up the API.

You'll use the below API to update a product:

`PUT https://mock-api.appsmith.com/products/:id`

It is a mock API exposed by Appsmith to help you learn API basics. It doesn't require any Auth. It accepts JSON input, and gives JSON output. Let's set it up on your app:

1. Navigate to **ProductListPage → APIs**
2. Click **+**
3. Choose **Create New**
4. You'll see a Postman-like interface
5. Rename the API to **UpdateQueryApi**
6. Choose method as **POST**
7. Copy-paste the below in **URL** `https://mock-api.appsmith.com/products/{{Products_Table.selectedRow.id}}`
8. Copy-paste the below in **Body** `{  "productName" : "{{productNameInput.text}}",  "mrp" : "{{mrpInput.text}}",  "category" : "{{categoryDropdown.selectedOptionValue}}"  }` _\*\*_
9. Run the API
10. Verify that the API runs successfully

By using the mustache template in the URL, you're passing the ID of the product to be updated. To build the request body, you're writing JavaScript within mustaches to pass the new values.

{% hint style="info" %}
**A word on sharing widget properties:**

Here, you are accessing widgets' properties in an API. This is in line with what you learned in the previous sections - that you can access a widget's properties from other widgets, APIs, and DB Queries. Irrespective of where you access a widget's properties from, the method of access remains the same, i.e. it follows the syntax_`{{<widgetname>.<property_name>}}`._
{% endhint %}

