# Debug JS Errors

You can use the `debugger` statement or `console.log()` to debug and inspect your code in the browser console or the **Console** tab. This allows you to check the state of your code and step through it line by line to help identify and fix any errors.

### With debugger statement

To invoke the debugger, insert a `debugger` keyword in your code where you want it to pause, and then run your app. The code execution pauses on the debugger statement. It works like a `breakpoint`. You can then use the debugger tools to step through your code, inspect variables, and see how your code is executing.

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
        variable is printed in the Logs tab.
        return userInfo;
    }
}
```

### With console.log()

In addition to using the debugger statement, you can use `console.log()` to print information about your code to the browser's console. This can help inspect the values of variables or the state of your app at different points during the execution of your code.

**Syntax**

```
console.log(<VARIABLE_NAME>);
```

<VideoEmbed host="youtube" videoId="EYNPm9cJWGw" title="How To Debug JavaScript With Console.log" caption="How To Debug JavaScript With Console.log"/>

