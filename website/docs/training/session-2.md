---
title: Session 2
hide_title: false
---

<!-- vale off -->

## Getting Started

1. Sign up on this instance: [Optum Demo Instance](https://optum-demo.app.appsmith.com/) (Ignore if already done)

2. Create a workspace of your own and name it as **\<Name\>-Training-Workspace**

3. Go to this Workspace and fork **Activty 1** App to your Workspace (Ignore if you already having existing App)

##  JSObjects

<dd>

* Create a JSObject function and name it as **Utils**
* Introduce a variable with some initial value inside it
```jsx
currentDate: new Date(),
```
* Introduce a function to get Select Querys data
```jsx
getUserData: () ⇒ {
   return SelectQuery.data
},
```
* Introduce a function to get current age from date of birth
```jsx
getUserAge: (dob) ⇒ {
  return moment(this.currentDate).dif(moment(dob), ‘years’)
}
```
* Add new column in table widget and name it **Age**
* Connect the value of the column to the getUserAge function
`{{Utils.getUserAge(currentRow.dob)}}`

</dd>

## Forms

<dd>

* Introduce a Form onto the canvas and align it on the right side of the Table
* Add input and select widgets for all the relevant Table columns you would want to update for like 
```jsx
Name, Gender, Date of Birth, Phone, Email and Country
```
* Rename the widgets inside the Form for better reference
* Change the existing **Update Users** Query to use the Form data instead
```jsx
UPDATE public.users SET
"gender"= '{{Form1.data.gender}}',
"dob"= '{{Form1.data.dob}}',
"phone"= '{{Form1.data.phone}}',
"email"= '{{Form1.data.email}}',
"country"= '{{Form1.data.country}}',
"name"= '{{Form1.data.name}}',
"updated_at"= '{{new Date()}}'
WHERE "id"= {{Table1.updatedRow.id}};
```
* Rename the button label inside the Form to `Update Details`
* Connect the onClick of the button to the Update Query
* Inside the success of the onClick, connect it to Select Query

</dd>

## Charts

<dd>

* Create a new Page
* Introduce a Chart on the canvas
* Create a Query to show all the males and females distribution
`SELECT gender, COUNT(*) FROM public."users" group by gender;`
* Notice that chart that takes values only in x,y format.
* Create a JSObject and call it **Utils**.  Introduce a function that formats the Query’s data in x & y format
```jsx
getChartDataByGender: () => {
    return Query1.data.map(item => ({ x: item.gender, y: item.count });
}
``` 
* Connect the JS Object function directly to the Chart’s source data `{{Utils.getChartDataByGender()}}`

</dd>

## Deploy the App
Go ahead and click on the Deploy button on the top right and redeploy your App and view it with the new changes you have made

## Share App 
Share the App (If not done already earlier)
<dd>

- Share to [tom@appsmith.com](mailto:tom@appsmith.com) and [sujoy@appsmith.com](mailto:sujoy@appsmith.com) as App Viewer
- Also try making it a public App by enabling **Make application public** and try opening it in incognito mode 

</dd>