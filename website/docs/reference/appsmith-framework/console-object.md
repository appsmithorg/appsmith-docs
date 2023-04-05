---
sidebar_position: 2
---

# Console Object

The [console object](https://developer.mozilla.org/en-US/docs/Web/API/Console\_API)provides an easy way to send logging messages from the browser to the development console or to display messages in the browser when an error occurs. By default, console output would appear in the browser's console tab, which you can view by invoking your browser's developer tools.

The console is integral to any developer's toolkit - it allows you to monitor what your program is doing by logging messages, errors, and warnings as they occur. These informative logs make it much easier to debug your code and locate the source of errors and unexpected behavior.

Appsmith provides the global console object for logging information about your [API](../../core-concepts/connecting-to-data-sources/authentication/), [Queries](../../core-concepts/data-access-and-binding/querying-a-database/), and [Widgets properties](../widgets/) in your JavaScript code. Invoke a console object using the mustache sign `{{}}` in widget properties or [directly in your code](../../core-concepts/writing-code/javascript-editor-beta/#use-case).

:::note
The console logs **is not** saved and are **only** available for the **current session.**
:::

## Methods

A console method is a function executed on a console object that logs different types of messages. The following methods are available to you for logging messages:

* log
* error
* warn

:::info
The console object **only** supports **log**, **error**, and **warn** methods. You can also use the **info** and **debug** methods. However, these methods offer the same feature as the **log** method.
:::

For example, you are building an app and integrating external API to get input. Your app code behaves differently depending on the type of response generated from the API.

Here's a code snippet of [JS Object ](../../core-concepts/writing-code/javascript-editor-beta/#code-workflow)where you're calling an external API(`getTaskList`), and depending on the generated response, you return the desired output. You either send an email to notify the user or alert the administrator that no action is needed.


```javascript
export default {
    notifyUserIfTaskIsIncomplete: async () => {
        let isTaskIncomplete = false;
        const taskList = getTaskList.data.record;
        for (const task of taskList) {
            if(task.ownerId == Table1.selectedRow.ownerId && task.endDate < Date() && task.status != "Completed") {
                isTaskIncomplete = true;
                break;
            }
        }
        if (isTaskIncomplete){
            sendEmailToNotifyUser.sendEmail();
            return;
        } 
        showAlert("No action is needed");
}
```


The API generates the correct response when executed standalone, and your app code works as expected. However, the code fails during integration because the API response either is not generated or isn't as expected.

To troubleshoot the error, you would want to log some messages: at the start of the API call, the parameters you are [building and passing to the API](../../core-concepts/connecting-to-data-sources/authentication/connect-to-apis.md#passing-data-parameters-to-api-calls), the response you get from the API, and the result. Here, the console object comes in handy. You can use different methods such as [`log`](console-object.md#log) to log the start of the method, parameters, and result, [`error`](console-object.md#error) to log the error messages returned by the API, and [`warn`](console-object.md#warn) to log the warnings returned by API.

### Log

The `console.log()` method outputs a message to the logs tab. The message could be a single string value, multiple string values, or JavaScript object.

:::note
Console methods **don’t** support **string substitutions**.
:::

For outputting the entry-level messages, parameter values, and end result, you can add the console.log messages as below:


```javascript
export default {
    notifyUserIfTaskIsIncomplete: async () => {
        console.log("Entered method- notifyUserIfTaskIsCompleted");
        let isTaskIncomplete = false;
        console.log("Selected Owner Id: " + Table1.selectedRow.ownerId);
        const taskList = getTaskList.data.record;
        for (const task of taskList) {
            if(task.ownerId == Table1.selectedRow.ownerId && task.endDate < Date() && task.status != "Completed") {
                isTaskIncomplete = true;
                break;
            }
        }
        if (isTaskIncomplete){
            sendEmailToNotifyUser.sendEmail();
            return;
        } 
        showAlert("No action is needed");
        console.log("Exitted method- notifyUserIfTaskIsCompleted");
    }
}
```


The method entry, exit, and parameter supplied to the method can be logged and viewed in the [logs tab](../../core-concepts/writing-code/javascript-editor-beta/#logs-tab).


![](/img/Appsmith_Framework__Console_Object__Console.log_messages.png)

For logging a single string, multiple strings, or JavaScript objects, use the code snippet in the for loop to print the task object as below:

```javascript
console.log("Current from the tasklist response: " , task);
```

You can examine the task object and its attributes that are part of the response to evaluate the conditions and fix the code if necessary.

### Error

The `console.error()` method outputs an error message to the [logs tab](../../core-concepts/writing-code/javascript-editor-beta/#logs-tab). It can log a string, written as-is - with a custom error object, - or with a function that returns either a string or prints a custom object.

:::note
Console methods **don't** support **string substitutions.**
:::

After reviewing the entry, parameters, and exit messages printed in the logs tab, you aren't sure what's breaking the code. To troubleshoot further, you should enclose the API call and the method logic within a `try-catch` block. You could have a custom function that evaluates all the types of errors the API can throw, outputs the appropriate message, and can use the console.error() method to print the returned message.


```javascript
printErrorMessages: (errorCode) => {
    if (errorCode == "403 Forbidden") {
        return "Access Denied!";
    } else if (errorCode == "503 Service Unavailable") {
        return "The server is either not available or shut down.";
    }
}
```


Use the `console.error()` method in the catch block in the `notifyUserIfTaskIsIncomplete` method to print the error messages returned by the `printErrorMessages` method.


```javascript
export default {
    notifyUserIfTaskIsIncomplete: async () => {
        console.log("Entered method- notifyUserIfTaskIsCompleted");
        let isTaskIncomplete = false;
        console.log("Selected Owner Id: " + Table1.selectedRow.ownerId);
        try{
                const taskList = getTaskList.data.record;
                for (const task of taskList) {
                console.log("iterableTask from the tasklist response: " , task);
                if(task.ownerId == Table1.selectedRow.ownerId && task.endDate < Date() && task.status != "Completed") {
                    isTaskIncomplete = true;
                    break;
                }
            }
                if (isTaskIncomplete){
                    sendEmailToNotifyUser.sendEmail();
                    return;
                } 
                showAlert("No action is needed");
                console.log("Exitted method- notifyUserIfTaskIsCompleted");
        }catch (err) {
            console.error(this.printErrorMessages(err.name));
        }
    },
    printErrorMessages: (errorCode) => {
        if (errorCode == "401 Unauthorized") {
            return "Access Denied!";
        }
    }
}
```


The error messages can be logged and viewed in the logs tab.



![](/img/Appsmith_Framework__Console_Object__Console.error_messages.png)

Having reviewed the error messages and correcting the code, you want to be sure that the code shouldn't raise any warnings that could halt the processing. To accomplish this, use the `console.warn()` method.

### Warn

The `console.warn()` method logs a warning message in the [logs tab](../../core-concepts/writing-code/javascript-editor-beta/#logs-tab). Like `console.log()` and `console.error()`, you can log strings and JavaScript objects as warning messages.

:::note
Console methods **don’t** support **string substitutions**.
:::

Warnings indicate cases where something may go wrong at runtime, so they shouldn't be ignored and can be logged using the `console.warn()` method.

```javascript
console.warn(this.printWarningMessages()); 
```

The `printWarningMessages` method is a custom method that returns the warning messages and logs them in the [logs tab](../../core-concepts/writing-code/javascript-editor-beta/#logs-tab).


![](/img/Appsmith_Framework__Console_Object__Console.warn_messages.png)

You can review the warning message, `API.errorCode(Number1) is deprecated.`, and fix the code as necessary.

When using the console methods: `log`, `error`, and `warn`, you can debug the complex execution logic and fix the problem.

## Benefits of using console

The console object facilitates fast debugging and locates the root cause of the issue. It's easy to use and doesn't require developer tools.

* **Ease**: The console object is useful for logging the runtime context of an app. You can log messages in a particular context by using `console.log()`, `console.error()`, or `console.warn()`.
* **Available in the Appsmith Editor**: Messages are logged in the logs tab and can be accessed in the Appsmith editor without invoking the browser's developer tools.

## Viewing the logged messages

The [logs tab](../../core-concepts/writing-code/javascript-editor-beta/#logs-tab) displays the logged messages. It shows system and user-generated messages(the console object's log, error, and warn methods are used for logging user-generated messages). Users can distinguish between them using the icon prefixed to the timestamp. A system-generated message has a desktop icon, whereas the user-generated message has a user icon prefixed.

It also displays the message origin ([JS Object](../../core-concepts/writing-code/javascript-editor-beta/)/[Widget](../widgets/)), so you can navigate to the [widget](../widgets/) or [JS Object](../../core-concepts/writing-code/javascript-editor-beta/).


![](/img/Appsmith_Framework__Console_Object__Viewing_logged_messages.png)

:::info
When you're in the logs tab, you can filter them by console logs which are user-generated messages.
:::


![](/img/Appsmith_Framework__Console_Object__Viewing_logged_messages_Filter.png)

Debugging with the console object is more efficient, faster, and easier than using a debugger directly in the Appsmith Editor. There is no need to worry if you have complex API logic, multiple [JS Objects](../../core-concepts/writing-code/javascript-editor-beta/), or complicated queries to debug.

:::info
If you're experiencing issues, please go through the [JS Errors](../../help-and-support/troubleshooting-guide/js-errors.md)/[Action Errors](../../help-and-support/troubleshooting-guide/action-errors/) [troubleshooting guide ](../../help-and-support/troubleshooting-guide/)or raise your queries via [Discord](https://discord.com/invite/rBTTVJp) or the [Community Forum.](https://community.appsmith.com/)
:::
