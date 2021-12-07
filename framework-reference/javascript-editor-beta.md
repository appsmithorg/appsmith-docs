# JavaScript Editor (Beta)

{% embed url="https://youtu.be/tpbY5Jti9d4" caption="JavaScript Editor YouTube Video" %}

JavaScript Editor is new functionality introduced in Appsmith which allows you to create a reusable set of JavaScript functions that you can call within JavaScript bindings across the Appsmith platform.

![](../.gitbook/assets/JS\_editor\_sample.png)

Previously, you had to write JavaScript in a smaller text box in the property pane. Although writing smaller snippets was convenient there, working on multi-line code became painful. To solve this problem, we have introduced a full-fledged code editor to write JavaScript code.

JavaScript Editor is a dedicated space where you can write functions and store variables, and call them in other places in Appsmith. To do this, we are introducing a concept called “JS Object.”

### JS Object

A JS Object is a collection of multiple functions and variables. You can create multiple JS Objects, and you can refer to functions defined in other JS Objects, allowing you to create a neatly organized set of reusable functions.

You can create new JS Objects from the Entity Explorer panel, as shown below, and write a JS Object using the following template.

![](../.gitbook/assets/JS\_object.png)

Here, “myVar1”, “myVar2” are two variables, and “myFun1”, “myFun2” are two functions defined in the JS Object which are exposed in default export. Currently, we don’t support exposing functions using named exports.

Once you have created functions and variables in a JS Object, you can call/refer to them at any place where you can write JavaScript across the Appsmith platform, as shown below.

![Calling a JS Object](../.gitbook/assets/call\_JS\_object.png)

### Working with JavaScript Editor

JavaScript Editor provides additional functionalities other than the ability to write code using an extensive editor.

JavaScript Editor has the following features:&#x20;

* Running each function manually during development and seeing the output in the Response tab;
* Seeing the linting errors right in the editor;&#x20;
* Seeing the syntax errors in the Errors tab;&#x20;
* Seeing the function execution log in the Log tab;&#x20;
* Inserting ready-to-use snippets.

Let us consider the following simple example: Writing a Hello World example using a JS Object.

![Adding hello function](../.gitbook/assets/JS\_object\_hello\_world.png)

You can execute this “hello” function by clicking on the Execute icon next to its name in the Response tab and seeing the output in the window right to it.

![Response tab](../.gitbook/assets/JS\_editor\_response\_tab.png)

If you make a mistake in JavaScript syntax while writing your code, JavaScript Editor will highlight the error using a red-colored lint below the possible position of the error.

![Linting errors](../.gitbook/assets/JS\_editor\_error\_tab.png)

You can inspect the error in detail from the Errors tab, as shown below.

![Errors Tab](../.gitbook/assets/JS\_editor\_error\_detail.png)



You can also see the history of each update and execution of your function in the Logs tab.

![Logs tab](../.gitbook/assets/JS\_editor\_logs\_tab.png)

Finally, you can also insert reusable snippets from the Appsmith Snippet Library.

![Open Snippets from the "\</>Snippets" button](../.gitbook/assets/JS\_Editor\_Snippets.png)

Search and copy the required Snippet from the Appsmith Snippet Library, as shown below.

![Appsmith Snippet Library](../.gitbook/assets/JS\_editor\_Snippets\_library.png)

We are actively working on expanding our Snippets Library. Please reach out to us on [Discord](https://discord.com/invite/rBTTVJp) or [Community Forms](https://community.appsmith.com) to help contribute to this library.

### **Creating Advance Workflows**

JavaScript Editor allows you to create advanced workflows. Let us now work on creating a slightly complex example using JS Objects.

Suppose you want to create a dashboard that tracks the weekly tasks progress of your developers. You have a query called “_developers_,” which fetches the developers’ information like name, email, etc. Another query, called “_todos_,” gives you the task list with the status of each developer.

As the outcome, you want to create a table that shows the valuable data from both the queries for each developer like name, email, total tasks, completed tasks, and the ones in progress, etc. You can achieve this by calling one function from the JS Editor, called “_getWeeklyTaskList_.” Let’s write this function in the JavaScript Editor.

From the Entity Explorer tab, click on the plus icon next to the JS Objects section to create a new JS Object and open it in the JS Editor. Rename this JS Object to “_Utils_.”

Let's write the “_getWeeklyTaskList_” function **** in _Utils_-

```
export default {
	getWeeklyTaskList : () => {
		return developers.data.map((developer) => {
			const developerId = developer.id;
			const taskList = todos.data.filter((todo) => todo.userId === developerId)
			const completedTaskList = taskList.filter((task) => task.completed === true)
			const inProgressTaskList = taskList.filter((task) => task.completed === false);
			return {
				"Name": developer.name,
				"Email": developer.email,
				"Completed Taks":  completedTaskList && completedTaskList.length,
				"In Progress Tasks" : inProgressTaskList && inProgressTaskList.length,
				"Total Tasks" : taskList && taskList.length,
			};
		})
	}
}
```

On any application page, drag the table widget on the canvas and open its property pane. Call this function in your Table’s table data with just one line - <mark style="color:orange;">`{{Utils.getWeeklyTaskList()}}`</mark>.

![Resultant table on calling "getWeeklyTaskList” function](../.gitbook/assets/JS\_Editor\_transforming\_data.png)

Let’s add another function in JS Object “_Utils_” to demonstrate more complex workflows.

Although you have achieved the desired result, let’s add more customization to this Dashboard to make it more functional. The table has the developer’s details, but it would be better to have an option to update the information if it is incorrect or outdated. Thus, we add a column with an edit button for each row that opens an “_editModal_,” taking new names and email inputs.

When you fill the fields of Name and Email in the “editModal” and click on confirm, you want the API to update the developer details. If it is successful, the app should show an alert “User updates successful” the developer query should fetch the updated data into the table again.

For additional security, only admins should have permission to edit or update data. Any unauthorized personnel trying to edit the table should be taken back to the login page, closing the “_editModal_.” Add another function called “_updateUserData_” as shown below.

```
export default {
	getWeeklyTaskList : () => {...},
	updateUserData: () => {
		const newUserData = {
			...Table1.selectedRow,
			"name"  : editName.text,
			"email" : editEmail.text,
		}
		updateUser.run(undefined, undefined, newUserData)
		.then(() => {
			users.run();
		 })
		.then(() => {
			closeModal("editModal");
			showAlert("User updates successfully!");
		})
		.catch((e) => {
			closeModal("editModal")
			if (e.statusCode === 401) {
				navigateTo("LoginPage");			
			}
		})
	}
}
```

We can call this function on the "_Confirm_" button with just one line - <mark style="color:orange;">`{{Utils.updateUserData()}}`</mark>

![](../.gitbook/assets/JS\_editor\_confirm\_button.png)

As you want only a select group of people to have admin access to this Dashboard, let’s create another function for access control of the app.&#x20;

As the dashboard contains confidential data, you might want to limit its accessibility, allowing only the selective members of your team to update this dashboard. Let’s create an access control function that contains a list of emails of the people who will have access to update data in the table.&#x20;

Add another function to “_Utils_” JS Object called “_isAdmin_” as shown below.

```
export default {
	getWeeklyTaskList () => {...}
	updateUsersData () => {...}
	adminsList: ["admin1@yourdomain.com", "admin2@yourdomain.com", "admin3@yourdomain.com"],
	isAdmin: (email) => {
		if (adminList.indexOf(email) > -1) {
			return true;
		}
		return false;
	}
}
```

### Current Limitations

As we’ve currently released the beta version, the following are the current limitations of JavaScript Editor functionality:

* You cannot use the JS Objects defined on a page across other pages. But we are working on enabling this functionality in the future. You can subscribe to this [issue](https://github.com/appsmithorg/appsmith/issues/1751) to follow the progress.
* You cannot define variables and functions outside of export default { }. We will allow you to write and export only selected variables/functions from a JS Object in future iterations.
* If a function is async, i.e., if it returns a promise, it cannot be called on the fields that are incompatible with the return type, such as the default text property of the label widget. For example, executeQuery returns Api1.run() promise and hence an async function. You can call such functions from only trigger or event properties such as “OnClick.”

![](../.gitbook/assets/JS\_editor\_async\_function.png)
