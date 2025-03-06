---
title: Session 4
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

## Utilizing Audit Logs for Monitoring and Compliance

1. **Viewing Audit Logs**

<dd>

* Navigate to **Admin Settings → Audit Logs**.  
  *(Ensure you have the necessary permissions granted by your instance administrator.)*
* Here you can view:
  - **User Activity:** Logins, sign-ups, and invitations.
  - **Application Modifications:** Changes in queries, deployments, and settings.
  - **Access Logs:** Identify who viewed, edited, or modified the application.

</dd>

2. **Filtering and Analyzing Logs**
<dd>

* Use filters such as **Events**, **Users**, or **Date Range** to refine log records.
* Example:
  - Find instances where a specific query was executed by multiple users within a selected time period.
* Click the **three-dot menu** (top-right) to **⬇ Download** the audit logs for further analysis or compliance review.

</dd>