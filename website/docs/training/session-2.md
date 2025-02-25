---
title: Session 2
hide_title: false
---

<!-- vale off -->

## Getting Started 

**Ignore this if you were able to attend the previous Session.**

1. Sign up on this instance: [Training Instance](https://training.app.appsmith.com/user/signup)

2. Create a workspace of your own and name it as **\<Name\>-Training-Workspace**

3. Share access to this workspace to **Training Admin** as Administrator

4. Fromt the workspace, click on the top right info icon that click on **Chat with us**. This is our support assistant that can help you on any issues. Go ahead and send a test message

## Customizing and Enhancing Functionality with Code

1. **Inline JS**

<dd>

* You can write javascript code inside any widget's fields that has **JS** symbol next to it, by using the `Moustache {{}}` operator
* This allows you to logically customise a widget's functionality and styling based on some conditions
* Introduce a checkbox and rename the Label as **Allow Filters**
* Now go to the settings of the Select widget, and click on **JS** next to the Visible field
* Bind the status of the Checkbox to that field like this `{{Checkbox1.isChecked}}`
* Click on the Preview symbol next to the Share button on the top
* Now toggle the checkbox to see the Select widget's visibility changing based on your selection

</dd>

2. **JSObjects**

<dd>

* You can also write functions and create variables to bind it to a widget's Data or an Event
* From the left sidebar, click on **JS** and create a **New JS object** and name it as **Utils**
* Introduce a variable with some initial value inside it
```jsx
currentDate: new Date(),
```
* Introduce a function to get **Select_public_users1** data
```jsx
getUserData() {
   return Select_public_users1.data
},
```
* Introduce a function to get current age from date of birth
<details>
  <summary>Show Hint</summary>
  <div>
    ```jsx
    getUserAge(dob) {
        return moment(this.currentDate).diff(moment(dob), ‘years’)
    }
    ```
  </div>
</details>

* Add new column in table widget and name it **Age**
* Connect the value of the column to the getUserAge function
`{{Utils.getUserAge(currentRow.dob)}}`

</dd>

## Building CRUD Interfaces and Interactive Dashboards

1. **Forms**

<dd>

* Introduce a Form onto the canvas and align it on the right side of the Table
* Add input and select widgets for all the relevant Table columns you would want to update for like 
```jsx
Name, Gender, Date of Birth, Phone, Email and Country
```
* Rename the widgets inside the Form for better reference
* You can set which all fields that are required for Form submittion, and even add validations to it.
* Change the existing **Update_public_users1** Query to use the Form data instead
<details>
  <summary>Show Hint</summary>
  <div>
    ```jsx
    UPDATE public.users SET
    "gender"= '{{Form1.data.gender}}',
    "dob"= '{{Form1.data.dob}}',
    "phone"= '{{Form1.data.phone}}',
    "email"= '{{Form1.data.email}}',
    "country"= '{{Form1.data.country}}',
    "name"= '{{Form1.data.name}}',
    "updated_at"= '{{new Date()}}'
    WHERE "id"= {{Table1.selectedRow.id}};
    ```
    The above is just a sample solution. Ensure you correctly refer to the widgets' names you had renamed in the Form, within this **Query** when you copy pasting it.
  </div>
</details>

* Rename the button label inside the Form to `Update Details`
* Connect the onClick of the button to the **Update_public_users1** Query
* Inside the success of the onClick, connect it to the **Select_public_users1** Query

</dd>

2. **Charts**

<dd>

* Create a new Page
* Introduce a Chart on the canvas
* Write an SQL query **getGenderRatioQuery** to show all the males and females distribution of users in the database
<details>
  <summary>Show Hint</summary>
  <div>
    ```jsx
    SELECT gender, COUNT(*) FROM public."users" group by gender;
    ```
  </div>
</details>

* Notice that chart that takes values only in x,y format.
* Create a JSObject and call it **Utils**.  Introduce a function called **getChartDataByGender** that formats the Query’s data in x & y format
<details>
  <summary>Show Hint</summary>
  <div>
   ```jsx
    getChartDataByGender: () => {
      return getGenderRatioQuery.data.map(item => {
        return {
          x: item.gender,
          y: item.count
        };
      )
    }
    ```
  </div>
</details>

* Connect the JS Object function directly to the Chart’s source data `{{Utils.getChartDataByGender()}}`

</dd>

## Deploy the App
Go ahead and click on the Deploy button on the top right and redeploy your App and view it with the new changes you have made