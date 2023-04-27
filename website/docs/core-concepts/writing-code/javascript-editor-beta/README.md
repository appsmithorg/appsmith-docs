# JS Objects

The JavaScript Editor in Appsmith enables you to create *JS Objects*, which is a set of variables and functions that have a page-level scope.

:::info
JS Objects are accessible only within the page where they're defined and aren't accessible across pages.
:::

<VideoEmbed host="youtube" videoId="tpbY5Jti9d4" title="How to use the JS Editor" caption="How to use the JS Editor" />

## Create JS Object

You can create JS Objects from the Entity Explorer on the left sidebar.

Click the **Explorer** tab. Click **+** next to **Queries/JS**. Select **New JS Object** from the list of options.

![Create JS Object](</img/create-js-object.png>)<figure><figcaption align="center"><i>Create JS Object</i></figcaption></figure>

:::info
The [export default](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) declaration is used to expose functions that are part of the JS Object and can't be used to export functions.
:::

## Run JS functions

You can click **Run** available on the top right corner to execute the JS function. If your JS object has only one function defined, the editor defaults the function name. But if your JS Object has more than one function defined, you can select the function you want to execute and then click **Run**. If your code has errors, the **Run** button is greyed out and blocks the execution until the errors are resolved.

:::info
You can also execute the function using a shortcut key (**CMD+ENTER** or **CTRL + ENTER**)
:::

## Widgets and JS functions

Widgets have fields/properties where you can bind data or trigger actions.

**Sync fields** are properties that expect input or data. For example, for an Input widget, properties such as `Default Value`, `Max Characters`, `Regex`, and `Error Message` expect input and are sync fields.

**Async fields** are properties that can trigger an action or perform an operation. For example, the properties like `OnTextChanged` and `OnSubmit` of an input widget are async fields. You can use these properties to execute an [action](/reference/appsmith-framework/widget-actions), [Query](/core-concepts/data-access-and-binding/querying-a-database#running-a-query) or a function within a [JS object](/core-concepts/writing-code/javascript-editor-beta).

You can display the responses from JS functions in sync fields and call or execute the JS functions using async fields(event listeners). 

## Display data from JS functions

Functions in a JS Object can be *Synchronous* or *Asynchronous*.

### Synchronous functions

As the name suggests, synchronous means to run in a particular sequence, it means that every statement of the code gets executed one by one. So, a statement must wait for the earlier statement to complete its execution. 
To display the response from a synchronous JS function in a sync widget field, call the function inside the JS Object as shown below:

``` javascript
{{JS_OBJECT_NAME.FUNCTION_NAME()}}
```

### Asynchronous functions

The word asynchronous means not occurring at the same time. You may sometimes need to fetch data from the server or execute a function with a delay, something you don't want occurring at the current time. Asynchronous function can be specified using the keyword `async`. See [Asynchronous JavaScript Function Settings ](asynchronous-javascript-function-settings.md) for more information.

To display the response from an asynchronous JS function in a sync widget field, you need to retrieve it using the `.data` property as shown below

```javascript
{{JS_OBJECT_NAME.FUNCTION_NAME.data}}
```

<VideoEmbed host="youtube" videoId="yn_8gs5w04g" title="Display response from async function in widget field" caption="Display response from async function in widget field"/> 


## Variables for state management

JS Object variables are mutable and can be used to contain the reference to a value. You can use it to store your data in a non-peristent state. As the storage state is non-persistent, the data is saved until the page reloads or until the user closes the window. JSObject variables can be of any data type such as Number, String, Object, Array, Date object, etc. 

**Example 1:** a counter that increments or decrements the value in a JS Object variable. 

1. Create a JS Object `JSObject1` and add the following code:

    ```javascript
    export default {
            counter: 1,
            increment: () ⇒ {
                this.counter = this.counter + 1
            },
            decrement: () ⇒ {
                this.counter = this.counter - 1
            }
    }
    ```
2. Drop a Text widget on the canvas and display the value of the counter variable in the **Text** property as shown below:

    ```javascript
    {{JSObject1.counter}}
    ```
3. Drop two Button widgets labelled *Increment* and *Decrement* and add the following code in **onClick** event to trigger these functions:

    ```javascript
    //for increment
    {{JSObject1.increment()}}

    //for decrement
    {{JSObject1.decrement()}}

    ```
4. Test the buttons and notice the value change in the Text widget.

---

**Example 2:** mutating values in an array object

```javascript
export default {
	users: [{name: "a"}, {name: "b"}, {name: "c"}, {name: "d"}],
	modifyFirstUserName: () ⇒ {
		this.users[0].name = "Hello"	
	}
}
```



:::info
Variable mutations can be triggered only using event listeners(async fields). For example, you can't update the variable value using the **Text** property on the Text widget, but you can using the **onClick** event on the Button widget.
:::

## JavaScript editor


| **Features**    | **Description**                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------- |
| **Response** tab        | Displays the **output** generated by the functions defined in a JS Object. |
| **Errors** tab          | Displays errors during or after code execution. They can be syntax errors, parsing errors, etc.                                            |
| **Logs** tab            | Shows the execution of functions with a timestamp. You can also open the Logs Tab by clicking a debug icon at the bottom right of the console. The Logs tab gives enables you to search for logs  by writing keywords in the **Filter** input box or by selecting the type of log in the **Show All Logs** list                            |
| **</\> Snippets**            | Insert ready-to-use code from the Snippets Library.   |
| Linter      | The JS editor automatically checks your source code for programmatic errors. If the code isn't syntactically correct, it highlights the error using a red wavy lines. You can inspect the error in detail on the **Errors** tab.                     |
| Debugger | Use debugger statements to pause the execution  or `console.log()` to print debug messages.                                          |


## Debug JS errors

You can use the `debugger` statement or `console.log()` to debug your code and inspect it in the browser console or the **Console** tab. This allows you to inspect the state of your code at that point and step through it line by line to help identify and fix any errors. 


### With debugger statement

To invoke the debugger,  insert a `debugger` keyword in your code where you want it to pause, and then run your app. The code execution pauses on the debugger statement. It works like a `breakpoint`. You can then use the debugger tools to step through your code, inspect variables, and see how your code is executing.

**Syntax**
```
debugger;
```

**Example**:

```
export default {
    getUserDetails: async () => {
        const userInfo = await userDetailsAPI.run();
        debugger; // the execution is paused at this point
        console.log(“user information: “+userInfo); // The value of the userInfo 
        variable is printed in the Logs tab .
        return userInfo;
    }
}
```

### With console.log()

In addition to using the debugger statement, you can also use `console.log()` to print information about your code to the browser's console. This can be helpful for inspecting the values of variables or the state of your app at different points during the execution of your code. 

**Syntax**
```
console.log(<VARIABLE_NAME>);
```

<VideoEmbed host="youtube" videoId="EYNPm9cJWGw" title="How To Debug JavaScript With Console.log" caption="How To Debug JavaScript With Console.log"/>

## Write complex code

When you build applications, it’s often more than just a CRUD operation from a single datasource. You might integrate with multiple APIs or want to have the dataset created by querying multiple tables, to traversing data, filtering, or manipulating the response by calling different API. You can write complex logic with ease using JavaScript Editor.

To understand it further, let’s look at a use case and build different workflows.

### Use case

You want to create a developer task tracker dashboard, update developer information, and add some permissions like making sure only admins can access the dashboard.

#### Code workflow

Let’s create a task tracker dashboard that gives you an overview of progress on tasks. You have a query called “_developers_,” which fetches the developers’ information like name, email, etc. You have an API `getAllDeveloperTaskStatus` that gives you a task list with the status for each developer.

**Task Tracker**

You want to display the developer details in a tabular format so that you can choose a table widget. You would want to show a total number of tasks like total tasks, no of completed tasks, no of to-do tasks, and no of in-progress tasks. You can achieve this by adding a JS Object and creating one function in it, “_getTaskList_.” Let’s write the code for this function using the JavaScript Editor.

* In the **Explorer** tab, >> click **(+)** next to `JS Objects` >> Select `New JS Object`.
* It’ll open a JS Editor. Rename the JS Object to `Utils`
* Add the below code snippet in the **Code** tab.

```
export default {
    getAllDeveloperTaskStatus: () => {
    return developers.data.map((developer) => {
     const developerId = developer.id;
     const taskList = developerTaskStatus.data.filter((alltask) => alltask.userId === String(developerId)); // fetch all the tasks for the given developer
     const completedTaskList = taskList.filter((task) => task.status === "Completed"); // fetch tasks that are completed by the developer
     const todoTaskList = taskList.filter((task) => task.status === "To-Do"); // fetch tasks that aren't yet started by the developer
     const inProgressTaskList = taskList.filter((task) => task.completed === "In-Progress"); // fetch tasks that are in progress by the developer
     return {
       "Id": developer.id,
       "Name": developer.name,
       "Email": developer.email,
       "Total Tasks": taskList.length,
       "To-Do Tasks": todoTaskList.length,
       "In Progress Tasks": inProgressTaskList.length,
       "Completed Tasks": completedTaskList.length
     };
    })
 }
}
```

The `getAllDeveloperTaskStatus` function does the following:

* Reads all the developers’ data
* Iterates for each developer record
  * Scans the `tasklist` to fetch the developer-related tasks
    * Based on task status (TO-DO, In-Progress, and Completed)
  * Generate a response that gives a cumulative task breakup for each task status for each developer

To display the response generated by`getAllDeveloperTaskStatus` we'll bind it to a widget.

* Navigate to `Page` >> Select [`Table`](../../../reference/widgets/table/) widget in Widgets Tab >> Drag it onto the canvas.
* Select the `Table` Widget on the canvas
* In the `Property Pane` on right side add the code `{{Utils.getAllDeveloperTaskStatus()}}` in `Table Data` property.

 <VideoEmbed host="youtube" videoId="HJGOf5ez4eY" /> 


The [table widget](../../../reference/widgets/table/) shows the data as shown in the below screenshot.

![Display data in a table widget](</img/JavaScript_Editor__Write_Complex_Code__Bind_JS_Function_Response_to_Table_Widget.png>)

**Update Developer Information**

Let’s add another function where you’ll be able to select a developer record and update the information.

To achieve this, add a new column to the [table widget](../../../reference/widgets/table/) and select the `Column Type` as an `icon button` type that opens a modal window.

 <VideoEmbed host="youtube" videoId="H85pm7Ae_U8" /> 

Now that the `Edit` column is added to the table let’s add a modal to fetch the `developer` information like `Name` and `Email`.

 <VideoEmbed host="youtube" videoId="lqC0MzK4s5g" /> 


Navigate to Explorer >> Select `Utils` >> Add the code snippet for `updateUserData()` after `getAllDeveloperTaskStatus()`.

```
export default {
    getAllDeveloperTaskStatus: () => {
        ...// code block for getAllDeveloperTaskStatus
    }, 
    updateUserData: () => {
        // Construct new user's data
        const newUserData = {
            ...Table1.selectedRow,
            name: devName.text,
            email: devEmail.text,
        }
        // Run updateDeveloperDetails query		
        updateDeveloperDetails.run(
            // on successful execution of updateDeveloperDetails run developers to fetch updated data 
            async () => {
                    await developers.run();
                    closeModal("editModal");
                    showAlert("Developer Details are updated successfully!");
                },
                // On Error, close the modal and show an error toast			
                (e) => {
                    closeModal("editModal")
                    showAlert("An error occurred while updating the developer details!");
                    if (e.statusCode === 401) {
                        navigateTo("Page1");
                    }
                },
                // Params Object	
                newUserData)
    }
}
```

The `updateUserData` function does the following:

* Create the dynamic data that's updated by the user in `editModal` in `newUserData` JSON
* Executes query `updateDeveloperDetails`
  * On successful execution of the query:
    * Calls `developers` query to fetch the updated developer details
    * Shows a success toast to the user
    * Closes the `editModal`
  * On error or failed execution of the query
    * Shows an error toast to the user
    * Closes the `editModal`

Rename the `Confirm` button to `Update` and bind the function `updateUserData` to its `onClick()` event. You can bind the function call by using `{{Utils.updateUserData()}}`.

![How to bind function call to an `onClick` event?](</img/JavaScript_Editor__Edit_Modal__Bind_UpdateUser_Function_Call_on_Update_Button.png>)

When you'll hit the `Update` button, the `updateUserData` function gets executed that updates the developer information and refreshes the developer table to fetch the updated information.

**Add Permissions**

As you want only the admins to access the Dashboard, let’s create another function for access control. The function contains a list of users’ emails who have access to update data in the table. Let’s call this function `isAdmin`.

Add the code snippet for `isAdmin()` and `adminsList` to the `Utils` JS Object.

```
export default {
    adminsList: ["admin1@yourdomain.com", "admin2@yourdomain.com", "admin3@yourdomain.com"],
    getAllDeveloperTaskStatus() => {
        ... // code block for getAllDeveloperTaskStatus
    },
    updateUsersData() => {
        ... // code block for updateUserData
    },
    isAdmin: (email) => {
        if (this.adminList.indexOf(appsmith.user.email) > -1) { // check if the logged in user is an admin
            return true;
        }
        return false;
    }
}
```

The final function looks like below:

```
export default {
    //the allowed list of admin's email
    adminsList: ["admin1@yourdomain.com", "admin2@yourdomain.com", "admin3@yourdomain.com"],
    getAllDeveloperTaskStatus: () => {
        return developers.data.map((developer) => {
            const developerId = developer.id;
            const taskList = developerTaskStatus.data.filter((alltask) => alltask.userId === String(developerId)); // fetch all the tasks for the given developer
            const completedTaskList = taskList.filter((task) => task.status === "Completed"); // fetch tasks that are completed by the developer
            const todoTaskList = taskList.filter((task) => task.status === "To-Do"); // fetch tasks that aren't yet started by the developer
            const inProgressTaskList = taskList.filter((task) => task.completed === "In-Progress"); // fetch tasks that are in progress by the developer
            return {
                "Id": developer.id,
                "Name": developer.name,
                "Email": developer.email,
                "Total Tasks": taskList.length,
                "To-Do Tasks": todoTaskList.length,
                "In Progress Tasks": inProgressTaskList.length,
                "Completed Tasks": completedTaskList.length
            };
        })
    },
    updateUserData: () => {
        // Construct new user's data
        const newUserData = {
            ...Table1.selectedRow,
            name: devName.text,
            email: devEmail.text,
        }
        // Run updateDeveloperDetails query		
        updateDeveloperDetails.run(
            // on successful execution of updateDeveloperDetails run developers to fetch updated data  
            async () => {
                    await developers.run();
                    closeModal("editModal");
                    showAlert("Developer Details are updated successfully!");
                },
                // On Error, close the modal and show an error toast		
                (e) => {
                    closeModal("editModal")
                    showAlert("An error occurred while updating the developer details!");
                    if (e.statusCode === 401) {
                        navigateTo("Page1");
                    }
                },
                // Params Object	
                newUserData)

    },
    isAdmin: async () => {
        if (this.adminsList.indexOf(appsmith.user.email) > -1) {
            return true;
        }
        navigateTo("Page2");
        return false;
    }
}
```

 <VideoEmbed host="youtube" videoId="cuoUVqzhCMo" /> 


Only the users with email added to the `adminList` will be able to access the dashboard and do the updates.

With the [Async function settings](asynchronous-javascript-function-settings.md), you can bind the `isAdmin` function to `RUN ON PAGE LOAD`. The execution of `IsAdmin` on Page load ensures the validation of the user’s email against the `adminList` for the logged-in user should happen on the page load. If the logged-in user's email is present in the `adminsList`, the user can access the Dashboard. If not, the user navigates to the access denied page that shows a message 'You don't have permission to access the Dashboard'.


## Current limitations

* You can't use `JS Objects` defined within a page across other pages.
* You can't define variables and functions outside of `export default { }` declaration. 
* If a function is async, it means that it returns a promise, so it can't be called on the fields incompatible with the return type, such as the **Text** property of the Text widget. 