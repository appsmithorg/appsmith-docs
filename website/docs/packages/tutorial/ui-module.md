# UI Modules

A UI Module is a reusable, self-contained component built using widgets, queries, and JS Objects. It allows you to group UI elements, logic, and data interactions into a single unit that can be reused across multiple applications.

In this tutorial, you will learn how to create a reusable UI Module that accepts dynamic inputs from an application.


:::tip What will I build? 🧩
You’ll build a **User Profile Card** UI Module that displays user details like name, email, and profile photo based on values passed from the app.

- **Basics**: Learn how to create and configure a UI Module.
- **Dynamic Data**: Learn how to pass data from an application into the UI Module.
- **Reusability**: Learn how to reuse the UI Module across multiple applications.

⏱️ **Estimated time:** 15 minutes
:::



## Prerequisites

Before you start, make sure you have the following:

* A self-hosted instance of Appsmith with a [paid subscription](https://www.appsmith.com/pricing). Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* If you are new to Appsmith, see [Tutorial - Basics](/getting-started/tutorials/start-building).




:::info
The ability to use query modules or JS modules directly inside UI Modules is not currently supported. This functionality will be available in a future release.
:::

<div style={{ position: "relative", paddingBottom: "calc(50.52% + 41px)", height: 0, width: "100%" }}>
  <iframe
    src="https://demo.arcade.software/KHcwNrupekXborH0Hw4Z?embed"
    frameBorder="0"
    loading="lazy"
    webkitAllowFullScreen
    mozAllowFullScreen
    allowFullScreen
    allow="fullscreen"
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    title="Appsmith | Connect Data"
  />
</div>


1. Open your workspace and click **Create New** in the top-right corner. Select **Package** and choose **UI Package** as the package type.

<dd>

A UI Package is a collection of UI Modules that contain reusable widgets, queries, and JS Objects. These modules can be dynamically configured and reused across multiple applications within the same workspace.

</dd>

2. Click on the **Module Container**. The module container represents the overall layout for the UI Module, where you define inputs and configure widgets.


3. From the right-side property pane of the Module Container, you can configure **Inputs**. 


<dd>

Inputs allow you to dynamically set widget values inside the module.
These values are passed from the application into the UI Module at runtime.

Create the following inputs for the module:

| Input Name  | Purpose                         |
| ----------- | ------------------------------- |
| `userName`  | Full name of the user           |
| `userEmail` | Email address of the user       |
| `userID`    | Unique ID of the user           |
| `userImg`   | URL of the user's profile photo |


</dd>

4. Drag three **Text** widgets and one **Image** widget onto the canvas to create a simple user profile UI.
These widgets will display user details such as the user's name, email, ID, and profile photo, using the input values passed from the application.

5. Once the widgets are added to the canvas, configure each widget to display values passed through the module’s inputs.

<dd>

To bind an input value to a widget, use the following syntax:

```js
{{inputs.<inputName>}}
```

Set the widget properties as follows:

| Widget               | Property           | Value                  |
| -------------------- | ------------------ | ---------------------- |
| Name Text Widget     | Text               | `{{inputs.userName}}`  |
| Email Text Widget    | Text               | `{{inputs.userEmail}}` |
| ID Text Widget       | Text               | `{{inputs.userID}}`    |
| Profile Image Widget | Image Source / URL | `{{inputs.userImg}}`   |

</dd>


6. Publish the UI Module from the top-right corner.
This allows the module and its changes to reflect on the application side for reuse.



7. Navigate back to the workspace and create a new application.

8. Inside the application, click on the **UI** tab and select Add **New UI Element**. Click on **Module** to view all the UI Modules that are published within the same workspace.


9. Drag the `UserProfileCard` module onto the canvas. This creates an instance of the UI Module that you can configure inside the application.

10. To pass dynamic user data into the module, drag a Table widget onto the canvas. Click **Connect Data** and select the **Sample Users** datasource.
Then, select the **public.users** table to connect the Table widget to sample user data.

11. Click on the `UserProfileCard` module instance added to the canvas.
In the property pane, set each input by referencing the selected row from the Table widget.

<dd>

Use the following bindings:


| Input Name  | Value                           |
| ----------- | ------------------------------- |
| `userName`  | `{{Table1.selectedRow.name}}`   |
| `userEmail` | `{{Table1.selectedRow.email}}`  |
| `userID`    | `{{Table1.selectedRow.id}}`     |
| `userImg`   | `{{Table1.selectedRow.image}}` |

Now, when you select any row in the Table widget, the corresponding user details will automatically be displayed in the UI Module.

</dd>

:::tip 🎉 Great Job!
You have successfully created a reusable UI Module that dynamically displays user details based on application data.

By using inputs, you can easily reuse this User Profile Card across different applications and pass parameters at runtime, without rebuilding the UI each time.
:::