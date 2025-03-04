---
title: Session 4
hide_title: false
---

<!-- vale off -->

## Getting Started 

**Ignore this if you were able to attend the previous Session.**

1. Sign up on this instance: [Training Instance](https://training.app.appsmith.com/user/signup)

2. Create a workspace of your own and name it as **\<Name\>-Training-Workspace**

3. Share access to this workspace to **Training Admin** as an Administrator

4. From the workspace, click on the top-right **info icon**, then select **Chat with us**. This is Appsmith’s support assistant that can help you with any issues. Send a test message to familiarize yourself with the support feature.

##  Advanced JavaScript and API Integrations

1. **Custom JS Libraries**

<dd>

* Click on the Libraries icon, second last from the bottom on the left pane
* Here, you will find pre-installed libraries like **lodash** and **moment.js**, along with an option to **Add new libraries**.
* Browse through the **Recommended Libraries** or search for other libraries via [jsDelivr](https://www.jsdelivr.com).
* You will also see an option to add other libraries from the site [jsDelivr](https://www.jsdelivr.com)
* Search for **currency.js** and select it.
* Copy the URL from the **src** tag or use the direct link below:

<details>
  <summary>Show library url</summary>
  <div>
    ```https://cdn.jsdelivr.net/npm/currency.js@2.0.4/dist/currency.min.js```
  </div>
</details>

* Paste the copied link into the Add JS Library input field and click Install.
* Once installed, you can now use the currency.js functions anywhere in your Appsmith app.
* Example:
  - Drag and drop a Text widget.
  - Enter a large numeric value with moustache brackets `{{}}`
  - Surround the value with the currency function to display the amount in a properly formatted currency.
  ```jsx currency(value).format()``` 

</dd>

2. **API Chaining and Error handling with Javascript**

<dd>

* Use async/await to chain multiple API calls and queries in a controlled sequence.
* Implement try/catch or .then/.catch for error handling to manage failures gracefully.
* Utilize Promises to run multiple actions in parallel while maintaining control over their execution flow.

</dd>

3. **Debugger**

<dd>

* Click the Debug button at the bottom-right corner of the Editor to open the Debugger Console
* The Logs section displays:
  - Actions triggered by widgets (e.g., button clicks).
  - API requests and responses, including success/failure status.
* The Linter tab highlights widgets with issues and clicking on an error will navigate directly to the affected widget for quick fixes
* Open the Network Tab in the Developer tool of the Browser. Whenever an API/Query is triggered, the tab shows the follow details
  - API requests wrapped in executeAction (in Edit mode).
  - Sent parameters and the endpoint being called in the requests
  - In View mode, the API request is seen but additional details like endpoint and parameters are hidden for security reasons.

</dd>

## Embedding Appsmith Applications and Facilitating Communication

1. **Embedding applications**

<dd>

* Click on the **Share** button in the top-right corner to open the **Share Modal**.
* Navigate to the **Embed** tab to view the **Embed URL** and a **Preview embedded app** option.
* Configure embed settings based on access requirements:
  - **Public Embed:** Making the App public allows anyone to access the embedded app.
  - **Private Embed:** Requires authentication to access the embedded content.
* For **private embeds**, you can also pass an **SSO method** in the embed URL to authenticate users seamlessly.

</dd>

2. **Communicating between Appsmith Embeds and Parent page**

<dd>

* Appsmith provides methods to enable two-way communication between the **embedded app** and the **parent page**
* Use `postWindowMessage()` to send data or events from Appsmith to the parent page.
  ```postWindowMessage("Appsmith Ready", { status: "initialized" });```
* Use `windowMessageListener()` in Appsmith to listen for messages from the parent page and trigger actions accordingly.
  ```jsx
  windowMessageListener((message) => {
    if (message.data === "refresh") {
      getData.run(); // Trigger an action inside Appsmith
    }
  });
  ```
</dd>

## Creating Custom Widgets

1. **Configuring Custom Widget**

<dd>

* Drag and drop a **Custom Widget** from the **Widgets pane** onto the canvas.
* In the widget settings, click **Go to Source Editor** to open the **Custom Widget Editor**.
* The editor provides three coding tabs: **HTML, CSS, and JS**, along with an **AI tab** where our AI Copilot helps you generate code.
* Click on **Editable Data Grid Widget** in the **AI Copilot**, and it will auto-generate code across the tabs for the custom widget.
* Review the generated code to understand how it works.

</dd>

2. **Connecting data model**

<dd>

* Return to the **Main Editor** and select the **Custom Widget** to open its settings.
* Locate the **Default Model** section, which contains dummy data.
* Modify the **Default Model** to fetch data from one of your existing queries. Below is an example for a query named as getUsers.data
  ```jsx
  {{
    {
      data: getUsers.data
    }
  }}
  ```
* The widget will automatically re-render when the data updates, thanks to the onModelChange event in the Custom widget.
* The onModelChange event ensures that the component updates whenever the Data Model changes
  ```jsx
  appsmith.onModelChange((model, prevModel) => {
    if (JSON.stringify(model.data) !== JSON.stringify(prevModel?.data)) {
        setData(model.data && Array.isArray(model.data) ? model.data : fallbackData);
    }
  });
  ```

</dd>

3. **Configuring Custom Events**

<dd>

* Inside the Settings panel, navigate to Events and add a new event named onCellEdit.
* Configure the action to Show Alert, and set the message as ```{{`Cell to Update: Column ${column}, Row: ${rowIndex}, Value: ${value}`}}```
* Now, go back to the Custom Widget Editor and locate the following line of code like ```appsmith.triggerEvent```. This will trigger any event that you have configured if you pass the event name, and the data as an object. Below it calls the onCellEdit and passes the column, rowIndex and value
```appsmith.triggerEvent("onCellEdit", { column: columList[col], rowIndex: row, value: newValue.data });```
* Ensure that the event name matches the one you created in the settings. If different, update either the event name or the custom widget code accordingly.
* You have successfully configured a Custom Widget and linked it with your app's data.
  - Experiment with additional functionalities and customization options.
  - For more details, refer to the [documentation](https://docs.appsmith.com/reference/widgets/custom)

</dd>

## Deploy the App
Go ahead and click on the Deploy button on the top right. This time you will have to commit your changes. Post that you can view the App with the latest changes you have made.