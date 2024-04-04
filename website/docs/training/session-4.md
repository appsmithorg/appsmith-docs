---
title: Session 4
hide_title: false
---

<!-- vale off -->

## Getting Started 

**Ignore this if you were able to attend the previous Session, create a Workspace with your name and already have an App called Activity 1.**

1. Sign up on this instance: [Optum Training Instance](https://optum-training.app.appsmith.com/user/signup)

2. Create a workspace of your own and name it as **\<Name\>-Training-Workspace**

3. Go to this [Training Workspace](https://optum-training.app.appsmith.com/applications?workspaceId=66053dafa476fb4189c2713d) and fork **Activity 1** App to your newly created Workspace.

##  Creating a Package

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

## Connecting a package to your App

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

## Republishing a package

* Let us also try changing the date format inside the package and see how the changes are reflected across these pages.
* Head back to the workspace and click on Edit of your **Utils** package.
* Inside the main file of your **DateFns** module, lets update the function to show the format as **Day Month Year** instead of DD/MM/YYYY. You can do this by modifying the month inside options to use **'long'** instead of '2-digit'.
* Now lets publish and head back to the Edit mode of your Application, and you will already see your changes being reflected inside the Editor for both pages **Table View** and **List View**.
* Click on deploy button again to start seeing your changes.
* Great, you have successfully created a package with a module and reused it across multiple pages of your App.

## Adding a Query to a Package

* We showed how to create a module inside a package, now lets exploring how to add a query to a package.
* Now lets go to the editor page of the App, and head to the **Table View** page.
* Here click on the Queries Tab on the left side bar, and you will see the Query **Select_public_users1**. Hover over it and click on the 3 dots next to it.
* Now click on the **Create a Module** and select **Add to Utils package**.
* You will see that your query has been automatically added to your existing Package and its reference is being used in the Page. You will also notice that it is auto filled with the arguments needed.
* Now you can go to the **List View** page, and go to the Queries tab on the side and click **New query/API**.
* Click on the **Select_public_users1** from **Utils** package and have it added to your Page.
* Now go to the List widget, and in its settings, connect the Items field to use the Query module you had recently added from the package.
* And thats it, you have successfully converted your Query in Table View page as a module, and reused it inside your List View page as well.

## Deploy the App
Go ahead and click on the Deploy button on the top right and redeploy your App and view it with the new changes you have made

## Share App 
Share the App (If not done already earlier)
<dd>

- Share to [tom@appsmith.com](mailto:tom@appsmith.com) and [sujoy@appsmith.com](mailto:sujoy@appsmith.com) as App Viewer
- Also try making it a public App by enabling **Make application public** and try opening it in incognito mode 

</dd>