---
title: Session 5
hide_title: false
---

<!-- vale off -->

## Getting Started 

**Ignore this if you were able to attend the previous Session.**

1. Sign up on this instance: [Training Instance](https://training.app.appsmith.com/user/signup)

2. Create a workspace of your own and name it as **\<Name\>-Training-Workspace**

3. Share access to your workspace to **Training Admin** as Administrator

4. From the workspace, click on the top-right **info icon**, then select **Chat with us**. This is Appsmith’s support assistant that can help you with any issues. Send a test message to familiarize yourself with the support feature.

##  Reusability with Appsmith Packages

1. **Creating a Package**

<dd>

* On the workspace page, Click on **Create New** button and select New Package.
* Once inside the package, name this package from the top as **My Package**.
* Then click on **New Module** and select JS Module.
* Now you will see a JSObject created. Name this as **DateFns**.
* Inside that introduce a function called **getUserAge** that takes an argument **dateString**, and returns the age
```jsx
getUserAge: (dateString) => {
  return moment().diff(moment(dateString, 'years'));
}
```
* Now publish this package by clicking the button on the top right.

</dd>

2. **Connecting a package to your App**

<dd>

* Now go to the edit mode of your App, and clicking on the JS tab on left sidebar.
* Click on new JS Object, and you will be able to add your module **DateFns** to your App.
* Now head to your Table widget which is connected to user data. Go to the age column you had created before, else create a custom column
* In the settings of this column, inside the Computed value field, surround it with your module's function.
Example below
```jsx
DateFns1.getUserAge(currentRow.dob)
```
* Now you should be seeing the column on Table having ages for all users.
* Go ahead and click on the Deploy button on the top right to deploy your App and view it with the new changes you have made.

</dd>

3. **Republishing a package**

<dd>

* Let us also try making some changes inside the package and see how the changes are reflected across in your Apps.
* Head back to the workspace and click on edit on package named **My Package**.
* Inside the main file of your **DateFns** module, lets update the function to show the text **years** along with the age.
```return moment().diff(moment(dateString, 'years')) + " years";```
* Now lets publish and head back to the Edit mode of your Application, and you will already see your changes being reflected inside the Editor in your Table widget.
* Click on deploy button again to start seeing your changes.
* Great, you have successfully created a package with a module and reused it across multiple pages of your App.

</dd>

4. **Converting a Query/JSObject into a Package**

<dd>

* We showed how to create a module inside a package, now lets explore how to add a query to a package.
* Now lets go to the editor page of the App, and head to the queries in the page.
* You will see the Query **Select_public_users1** or the equivalent of it in your App. Hover over it and click on the 3 dots next to it.
* Now click on the **Create a Module** and select **Add to My Package**.
* You will see that your query has been automatically added to your existing Package and its reference is being used in the Page. You will also notice that it is auto filled with the arguments needed.
* And thats it, you have successfully converted your Query as a module

</dd>

## Designing and Managing Complex Workflows

1. Creating a Basic Workflow

<dd>

* On the **Workspace** page, click **Create new** and select **Workflow**.  
* You will be directed to the **Workflow Editor**. Name the workflow **My Workflow**.  
* The editor contains a main file with a predefined function `executeWorkflow(data)`, where `data` is the input argument.  
* Create a query named **getUsers** to fetch users from the database, filtering by name:
```Select * from public.users Where name ilike '{{this.params.name}}'```
* Call the query inside executeWorkflow, passing an object with the name parameter:
```await getUsers.run({ name: data.name });```
* Add a console statement like ```console.log('getUsers response', getUsers.data)``` and also ensure that the last line of the function is ```return true```
* Run the function directly from the Workflow Editor:
  - In the input field, enter the test object:
```{ "name": "Rose" }```
  - Observe the execution steps and responses on the right panel. Expand each step for details.
* Click Deploy (top-right), then navigate to a new application within the same workspace.
* Add a Query from the sidebar and select Workflows Query.
* Choose the workflow name from the list and set the Request Type to Trigger Workflow.
* Pass the same input object as before and click Run. You can also bind this query to a Button Widget to trigger it.
* Return to the Workflow Editor, go to Run History, and verify if the workflow execution was triggered successfully.

</dd>

2. Creating an Approval Workflow

<dd>

* Create a new workflow and name it **My Approval Workflow**
* In the workflow editor, assign an approval request inside the function using the below snippet of code:
  ```jsx
  let response = await appsmith.workflows.assignRequest({
    requestName: "Approval Process",
    message: "Testing Approval Process",
    requestToUsers: "<YOUR_LOGGEDIN_EMAIL_ID>",
    requestToGroups: "<YOUR_COMPANY_NAME>",
    metadata: data,
    resolutions: ["Approve", "Reject"]
  })
  ```
* This creates an approval request with the specified resolutions and assigns it to the respective users or groups.
* The data argument is passed as metadata to the approval request.
* Next, handle the resolution when a user approves or rejects the request:
  ```jsx
  if ( response.resolution === "Approve" ) {
    console.log("The request was approved");
  } else if ( response.resolution === "Reject" ) {
    console.log("The request was rejected");
  }
  ```
* Click Deploy, and proceed to set up the application for this workflow.

</dd>

3. Creating an Approval Request from the App

<dd>

* Create a new Application and add a JSONForm Widget.
* Click on JS next to the Source Data and insert a JSON object with attributes:
  ```firstName, lastName, address, email and department```
* Navigate to the Query Tab, add a **Workflow Query** named ```submitRequest```, and select the workflow created earlier.
* Set the Request Type to **Trigger Request**
* Inside the Metadata field, pass the entire form data:
  ```{{JSONForm1.formData}}```
* In the JSONForm settings, set the **onSubmit** event to run this query.
* Fill out the form and click Submit to initiate a workflow request.
* To verify, go back to the **Workflow Editor -> Run History** to see the latest request in a pending state.

</dd>

4. Resolving the Request from the App

<dd>

* Go back to the Application and create a new Page.
* Add a new Workflow Query named ```getPendingRequests```, select the Workflow, and use Request Type: **Get Requests**
* Run the query to retrieve the pending approval requests
* Click **Display on UI** and bind the data to a Table Widget.
* The table will display request details like name, message, created time, and metadata containing the form details.
* Add a Custom Column, name it Action, and set the Column Type to Button.
* Configure the **onClick** event of this column to **Show Modal**, then click **+ New Modal**.
* Inside the modal:
  - Add an Input Field with the label and name Comment.
  - Add two buttons named Approve and Reject.
* Next, create a Workflow Query named ```resolveRequest``` and set the following fields as below:
  - Request Type: Resolve Request
  - Request Id: ```{{Table1.triggeredRow.id}}```
  - Resolution: ```{{this.params.resolution}}```
  - Metadata (for comments): ```{{Comment.text}}```
* Bind this query to both Approve and Reject buttons, ensuring the Params field sends:
  - For Approve button: ```{ resolution: "Approve" }```
  - For Reject button: ```{ resolution: "Reject" }```
* Set onSuccess of this query to run **getPendingRequests** and onFailure to show an alert message.
* Now, go to the UI, click the **Action** button to open the **Modal**, enter a comment, and click Approve or Reject.
* Return to the **Workflow Editor -> Run History**, and verify that the workflow is completed with the selected resolution and console message.

</dd>