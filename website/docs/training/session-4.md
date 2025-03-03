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

<dd>

* On the workspace page, Click on **Create New** button and select New Package.
* Once inside the package, name this package as **Utils**.
* Then click on **New Module** and select JS Module and name it as **DateFns**.
* Now you will see a main file created for your DateFns module.
* Inside that introduce a function called **formatDate** that takes an argument dateString, and returns it formatted to **DD/MM/YYYY**
```jsx
formatDate: (dateString) => {
  const date = new Date(dateString);
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  return date.toLocaleString('en-GB', options);
}
```
* Now publish this package by clicking the button on the top right.

</dd>

## Embedding Appsmith Applications and Facilitating Communication

* Now go to the edit mode of your App, and clicking on the JS tab on left sidebar.
* Click on new JS Object, and you will be able to find your module **DateFns** that can be added under the Package **Utils**.
* Click on the **DateFns** and it will connect the newly created module to your App.
* Now head to your Table widget and go to any date column such as the dob.
* In the settings of this column, inside the Computed value, surround it by your module's function.
Example below
```jsx
DateFns1.formateDate(currentRow.dob)
```
* Now you should be seeing the dob column formatted with date type DD/MM/YYYY inside the Table.
* Lets also head to the **List View** Page from the side bar, and do the same changes for the date inside the text widget.
* Go ahead and click on the Deploy button on the top right to deploy your App and view it with the new changes you have made.

## Creating Custom Widgets

* Let us also try changing the date format inside the package and see how the changes are reflected across these pages.
* Head back to the workspace and click on Edit of your **Utils** package.
* Inside the main file of your **DateFns** module, lets update the function to show the format as **Day Month Year** instead of DD/MM/YYYY. You can do this by modifying the month inside options to use **'long'** instead of '2-digit'.
* Now lets publish and head back to the Edit mode of your Application, and you will already see your changes being reflected inside the Editor for both pages **Table View** and **List View**.
* Click on deploy button again to start seeing your changes.
* Great, you have successfully created a package with a module and reused it across multiple pages of your App.

## Deploy the App
Go ahead and click on the Deploy button on the top right and redeploy your App and view it with the new changes you have made