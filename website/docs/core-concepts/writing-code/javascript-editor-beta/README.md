# Create JS Objects 

The JavaScript Editor in Appsmith enables you to create _JS Objects_ with a page-level scope. A JS Object is an encapsulation of variables and functions associated with it. It is a template similar to a Java class that contains the variables and the methods used to perform actions.

:::info
JS Objects are accessible only within the page where they're defined and aren't accessible across pages.
:::

<VideoEmbed host="youtube" videoId="_reF92On2tw" title="How To Use The JS Editor In Appsmith" caption="How To Use The JS Editor In Appsmith" />

## Create JS Objects

You can create JS Objects from the entity explorer on the left sidebar.

Click the **Explorer** tab. Click **+** next to **Queries/JS**. Select **New JS Object** from the list of options.

![Create JS Object](/img/create-js-object.png)<figure><figcaption align="center"><i>Create JS Object</i></figcaption></figure>

A JS Object has the following structure:

```
export default {

    myVar1: [], //  define array
    myVar2: {}, // define object

    // define functions
    myFun1: () => {
        //write code to manipulate the data or perform actions like executing a query
    },

    myFun2: async () => {
        //use async-await or promises
        // this helps when you want to trigger queries at run time.
        // For example, API_NAME.run() - run method executes the call and returns the response.
    }

}
```

:::caution
The JS Object notation should start with `export default`. The [**export default**](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) declaration exposes functions that are part of the JS Object to the page where it is defined.
:::

You can access the properties of the JS Objects defined using the dot or bracket notation.

**Example**:

```
 export default {

    useJSObjectProps: () => {
        const userObject = new Object(); //object with method scope and is local to this method.
        userObject.id = 1; // setting property using dot notation
        userObject[“name”] = “John”; //setting property using bracket notation
        showAlert(userObject.id);
        showAlert(userObject[“name”]);
    }

}
```

## Execute functions

Click the **Run** button on the top right corner to execute the JS function. If your JS object has only one function defined, the editor defaults the function name. But if your JS Object has more than one function defined, you can select the function you want to execute and then click **Run**. If your code has errors, the **Run** button is greyed out and blocks the execution until the errors are resolved. You can also execute the function using a shortcut key **CMD+ENTER** or **CTRL + ENTER**


## Use variables for state management

JS Object variables are mutable and can be used to contain the reference to a value. You can use it to store your data in a non-persistent state. As the storage state is non-persistent, the data is saved until the page reloads or until the user closes the window. JSObject variables can be of any data type, such as Number, String, Object, Array, Date object, etc.

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
   {
     {
       JSObject1.counter;
     }
   }
   ```

3. Drop two Button widgets labelled _Increment_ and _Decrement_ and add the following code in **onClick** event to trigger these functions:

   ```javascript
   //for increment
   {
     {
       JSObject1.increment();
     }
   }

   //for decrement
   {
     {
       JSObject1.decrement();
     }
   }
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
Variable mutations can be triggered only using event listeners(async fields). For example, you can't update the variable value using the **Text** property on the Text widget, but you can use the **onClick** event on the Button widget.
:::


## Write complex code

When you build applications, it’s often more than just a CRUD operation from a single datasource. You might integrate with multiple APIs or want the dataset created by querying multiple tables to traverse data, filter, or manipulate the response by calling different APIs. You can write complex logic with ease using JavaScript Editor.

### Use case

You want to create a developer task tracker dashboard, update developer information, and add some permissions, like ensuring only admins can access the dashboard.

#### Code workflow

Let’s create a task tracker dashboard that gives you an overview of task progress. You have a query called “_developers_,” which fetches the developers’ information like name, email, etc. You have an API, `getAllDeveloperTaskStatus`, that gives you a task list with the status for each developer.

**Task Tracker**

You want to display the developer details in a tabular format so that you can choose a table widget. You would want to show a total number of tasks like total tasks, no of completed tasks, no of to-do tasks, and no of in-progress tasks. You can achieve this by adding a JS Object and creating one function in it, “_getTaskList_.” Let’s write the code for this function using the JavaScript Editor.

- In the **Explorer** tab, >> click **(+)** next to `JS Objects` >> Select `New JS Object`.
- It’ll open a JS Editor. Rename the JS Object to `Utils`
- Add the below code snippet in the **Code** tab.

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

- Reads all the developers’ data
- Iterates for each developer record
  - Scans the `tasklist` to fetch the developer-related tasks
    - Based on task status (TO-DO, In-Progress, and Completed)
  - Generate a response that gives a cumulative task breakup for each task status for each developer

To display the response generated by`getAllDeveloperTaskStatus` bind it to a widget.

- Navigate to `Page` >> Select [`Table`](../../../reference/widgets/table/) widget in Widgets Tab >> Drag it onto the canvas.
- Select the `Table` Widget on the canvas
- In the `Property Pane` on the right side add the code `{{Utils.getAllDeveloperTaskStatus()}}` in the `Table Data` property.

 <VideoEmbed host="youtube" videoId="HJGOf5ez4eY" />

The [table widget](../../../reference/widgets/table/) shows the data in the screenshot below.

![Display data in a table widget](/img/JavaScript_Editor__Write_Complex_Code__Bind_JS_Function_Response_to_Table_Widget.png)

**Update Developer Information**

Let’s add another function where you can select a developer record and update the information.

To achieve this, add a new column to the [table widget](../../../reference/widgets/table/) and select the `Column Type` as an `icon button` type that opens a modal window.

 <VideoEmbed host="youtube" videoId="H85pm7Ae_U8" />

Now that the `Edit` column appears on the table, let’s add a modal to fetch the `developer` information like `Name` and `Email`.

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

- Create the dynamic data that are updated by the user in `editModal` in `newUserData` JSON
- Executes query `updateDeveloperDetails`
  - On successful execution of the query:
    - Calls `developers` query to fetch the updated developer details
    - Shows a success toast to the user
    - Closes the `editModal`
  - On error or failed execution of the query
    - Shows an error toast to the user
    - Closes the `editModal`

Rename the `Confirm` button to `Update` and bind the function `updateUserData` to its `onClick()` event. You can bind the function call by using `{{Utils.updateUserData()}}`.

![How to bind function call to an `onClick` event?](/img/JavaScript_Editor__Edit_Modal__Bind_UpdateUser_Function_Call_on_Update_Button.png)

When you hit the `Update` button, the `updateUserData` function gets executed which updates the developer information and refreshes the developer table to fetch the updated information.

**Add Permissions**

As you want only the admins to access the dashboard, let’s create another function for access control. The function contains a list of users’ emails who can update data in the table. Let’s call this function `isAdmin`.

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

The final function looks like the below:

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

Only the users with email added to the `adminList` can access the dashboard and do the updates.

With the Async function settings, you can bind the `isAdmin` function to `RUN ON PAGE LOAD`. The execution of `IsAdmin` on page load ensures the validation of the user’s email against the `adminList` for the logged-in user should happen on the page load. If the logged-in user's email is in the `adminsList`, the user can access the dashboard. If not, the user navigates to the denied access page with the message 'You don't have permission to access the Dashboard'.

## Current limitations

- You can't use `JS Objects` defined within a page across other pages.
- You can't define variables and functions outside of the `export default { }` declaration.
- If a function is async, it means that it returns a promise, so it can't be called on the fields incompatible with the return type, such as the **Text** property of the Text widget.
