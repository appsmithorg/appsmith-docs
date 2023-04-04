# Modal


This page explains how to use the Modal widget to create pop-up windows on your app. It can display alerts, confirmations, forms, and media, providing an engaging user experience.

<VideoEmbed host="youtube" videoId="s8cHVkhj3ec" title="Using the Modal widget" caption="Using the Modal widget"/>


## Modal components

Modal widgets are used as containers to group and handle related user inputs. You can access/edit Modal widget from the left sidebar.

When you add a Modal widget, it automatically includes a [Text](reference/widgets/text) widget as a title and two [Button](reference/widgets/button) widgets that Confirm and Close the Modal. Additionally, the Modal widget includes a single icon button that functions as a dismiss button.

## Submit data

To submit data from a modal widget, you first need to define the input fields within the modal. Once the user has entered data into these fields, you can access the values using widget's reference properties. For instance, if you have an Input widget with a property called `updateemail`, you can access its value using the syntax `{{updateemail.inputText}}`.


---
**Example**: consider a scenario where you have a Modal widget that displays a form with the details of a selected user when you click on a row in a table.

1.  Fetch data from the [sample database ](https://docs.appsmith.com/core-concepts/connecting-to-data-sources/connecting-to-databases#sample-databases) `users` using a SELECT query `fetchUserData`. 

2. Display the data by binding the query response to the **Table Data** property of the Table widget `tblUserData`, as shown below:

```js
{{fetchUserData.data}}
```

3.  Now, set Table's `onRowSelected` event to open a Modal widget.

4. Next, add the necessary widgets to the Modal widget based on the number of data fields you wish to update. For instance, if you plan to modify a user's `Date of Birth` and `Email`, you can drag and drop a Date picker widget and an Input widget accordingly.

5. Create a new `updateuserdata` query, to update the database

```sql
UPDATE users
SET dob = '{{DatePicker.selectedDate}}', email = '{{Input.inputText}}'
WHERE id = '{{tblUserData.selectedRow.id}}';
```
Set the Modal's Confirm button onClick event to run the `updateuserdata` query, which updates the `dob` and `email` fields of a specific user in the users table based on the provided user ID.


<figure>
  <img src="/img/example-modal.png" alt="Display date"/>
  <figcaption align = "center"><i>Update data using Modal</i></figcaption>
</figure>


## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.


### Widget properties

These properties are present in the property pane of the widget. The following table lists all the widget properties.


|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Quick Dismiss**  | Boolean    | Quickly dismisses or closes the Modal when the user taps outside the modal. |
| **Animate Loading** | Boolean     | Allows you to control a widget’s animation on the page load.                |
| **Height**   | String       | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |


### Reference properties

These properties allow you to bind your select widget with any other widget in queries or JS objects. For instance, you can use `Modal1.isVisible` to get the visibility status.

| Reference Property | Data type | Description                                                                                                                                                    |
| ----------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **isVisible**  | Boolean | This property indicates whether the widget is visible or not. |

### Style properties

Style properties allow you to change the look and feel of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Background color** | String | Sets the background color of the widget. |
| **Border Radius**    | String | Allows you to define curved corners.     |


## Events

When the event is triggered, these event handlers can run queries, JS code, or other supported [actions](/reference/appsmith-framework/widget-actions)


| Events      | Description                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **onClose** | This event triggers an action when the modal is closed.  |

