# Modal


This page explains how to use the Modal widget to create a dialog in your app for displaying various types of content, such as alerts, confirmation pop-ups, forms, and more. It acts as a container used to group and handle related user inputs , and can be opened using actions such as setting a Button widget's onClick event. 



## Update data with Modal

The Modal widget can be used to view and edit data in a table. By displaying the details of a selected row in the Modal, users can easily make changes to the data. To open or close the Modal widget, you can make use of event listeners. 


---
**Example**: to use the Modal widget to view and update details for each row in the table, you can follow the steps below:

1.  Fetch data from the [sample database](https://docs.appsmith.com/core-concepts/connecting-to-data-sources/connecting-to-databases#sample-databases) `users` using a SELECT query `fetchUserData`. 

2. Display the data by binding the query response to the **Table Data** property of the Table widget `tblUserData`, as shown below:

```js
{{fetchUserData.data}}
```

3.  Set Table's `onRowSelected` event to open a Modal widget, you can create a new Modal widget or select an existing one

:::note
Modal widget remains hidden on the canvas and becomes visible only when an event is triggered. You can access and edit the Modal widget from the entity explorer. 
:::

5. Next,  add [JSON form](/reference/widgets/json-form) inside the Modal widget, and edit the fields. For instance, if you plan to modify a user's `Date of Birth` and `Email`, you can edit the JSON Form widget accordingly.

6. Create a new `updateuserdata` query, to update the database:

```sql
UPDATE users
SET email = {{JSONForm.formData.email}}, dob = {{JSONForm.formData.dob}}
WHERE id = {{tblUserData.selectedRow.id}};
```

6. Set the JSON form's `onSubmit` event to run the `updateuserdata` query, which updates the `dob` and `email` fields of a specific user in the users' table based on the provided user ID.

7. To close the Modal, configure the onSuccess event to include a **Close Modal** action. This would close the Modal once the `updateuserdata` query has been successfully executed.

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.


### Widget properties

These properties allow you to edit the Modal widget. All of these properties are present in the property pane of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Scroll Contents**  | Boolean    | This property enables scrolling within the contents of the Modal |
| **Quick Dismiss**  | Boolean    | Quickly dismisses or closes the Modal when the user taps outside the Modal. |
| **Animate Loading** | Boolean     | Allows you to control a widget’s animation on the page load.                |
| **Height**   | String       | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |


### Reference properties

These properties allow you to bind your select widget with any other widget in queries or JS objects. For instance, you can use `Modal1.isVisible` to get the visibility status.

| Reference Property | Data type | Description                                                                                                                                                    |
| ----------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **isVisible**  | Boolean | This property indicates whether the widget is visible or not. |

### Style properties

Style properties allow you to change the look and feel of the widget. All of these properties are present in the property pane of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Background color** | String | Sets the background color of the widget. |
| **Border Radius**    | String | Allows you to define curved corners.     |


## Events

When the event is triggered, these event handlers can run queries, JS code, or other supported [actions](/reference/appsmith-framework/widget-actions)


| Events      | Description                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **onClose** | This event triggers an action when the modal is closed.  |

