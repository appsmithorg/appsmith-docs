# JavaScript Promises
A JavaScript Promise helps to handle asynchronous operations. It registers callback execution when the async operation completes or fails. It simplifies the structure of the async code. Appsmith provides native support for JavaScript promises which makes asynchronous operation handling easy. For more information, see [JavaScript Promise basics](https://javascript.info/promise-basics) available on the official documentation.

 <VideoEmbed host="youtube" videoId="VuBycqPJVug" title="How to use JS Promises and Async/Await" caption="How to use JS Promises and Async/Await"/>

Appsmith framework functions like [showAlert()](/reference/appsmith-framework/widget-actions/show-alert.md), [showModal()](/reference/appsmith-framework/widget-actions/show-modal.md), [storeValue()](/reference/appsmith-framework/widget-actions/store-value.md), [navigateTo()](/reference/appsmith-framework/widget-actions/navigate-to.md), and more returns a promise, making asynchronous workflow's implementation easier and readable.

To understand the difference between callbacks and Promise implementation, consider an example. You execute three APIs in sequence and show a message "done" when all the APIs have finished running successfully.

You can use the `MockApi`, a query created inside Appsmith and takes `name` as a parameter.

```javascript

//Old Callback implementation looks like this:
{{
	MockApi.run(() => {
		MockApi1.run(() => {
			MockApi2.run(() => {
				showAlert('done') 
				})
		}) 	 
	}) 
}}

```

However, using Promise for the same problem makes the implementation easier and readable.

```javascript
{{
 	MockApi.run()
 		.then(() => MockApi1.run())
 		.then(() => MockApi2.run())
 		.then(() => showAlert('done'))
 }}
```

## Async/Await
The `async` and `await` keywords enable the [asynchronous](/core-concepts/writing-code/javascript-editor-beta#asynchronous) workflow to be written in a cleaner style, avoiding the need to configure promise chains explicitly.

### Async
Adding the `async` keyword before a function always returns a promise. Other values are wrapped in a resolved promise automatically.

### Await
The keyword `await` makes JavaScript wait until that Promise settles and returns its result. The below example code shows the use of `async` and `await` keywords:

```javascript
{{
	(async function(){ 
		const response = await MockApi.run({ name: 'Appsmith' }); 
		await storeValue( "name", response.args.name ); 
		await showAlert(appsmith.store.name); 
	})() 
}}
```
The code flow shows that:
1. You run `MockApi` with the parameter name as "Appsmith" and wait for the response.
2. You store the response in the Appsmith store using `storeValue` when you get the response.
3. On completion of `storeValue`, you show an alert with a message.


## Methods
JavaScript promises have several built-in methods. You can use these methods to handle the promise's eventual value or the error that may have occurred. Below are the most used methods:

:::tip
Remember to always return the promise for `.then` or `.catch` blocks to work as expected.
:::

```javascript title='Return Promise for .then'
{{
  (function() {
	 
    ❌ MockApi.run().then(() => showAlert(`Success`))	
	//highlight-next-line
    ✅ return MockApi.run().then(() => showAlert(`Success`)) // correct
   })()
}}
```

### Promise.any()
It takes a collection of promises. Once one of the promises is fulfilled it returns a single promise that resolves with that Promise's value. For more information, see [Promise.any()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any) available on official MDN web docs. You can use `Promise.any()` when you want only one action/promise to finish the execution.

The below example code shows the use of `Promise.any()`:
 
```javascript
{{
(function(){
    
  return Promise.any([
		MockApi.run({ name: 1 }), // if name:1 finished early
		MockApi.run({ name: 2 })
  ]).then((res) => {
    showAlert(`Winner: ${res.args.name}`) // Alert Message showns as "Winner: 1" 
  });
})()
}}
```

In this example, multiple `MockApi` calls were made with a unique number as a parameter (like 1, 2). The returned Promise from each call was passed to `Promise.any()`. An alert message is displayed when any of the `MockApi` calls completes and returns a fulfilled promise. The message contains the argument (unique number) sent to the API, which completes and returns the promise first among all the API calls.

### Promise.race()
It simply waits for the first settled Promise, fulfilled, or rejected, to get its result. You can use `Promise.race()` when you want only one action/promise to finish the execution. 

The below example code shows the use of `Promise.race()`:

```javascript
{{
(function(){
	return	Promise.race([
			MockApi.run({ name: 1 }),
			MockApi.run({ name: 2 })
	]).then((res) => {
		showAlert(`Winner: ${res.args.name}`)
	});
})()
}}
```

In the example:

1. You ran multiple `MockApi` with a parameter name as a unique number (like 1, 2);
2. You passed the returned Promise to `Promise.race()`;
3. You showed an alert message containing the argument sent to API, which finishes faster.

### Promise.all()
It takes an array of promises (technically any iterable but is usually an array) and returns a new Promise. The array of results of the Promises becomes the result of the new Promise. If any of the promises fails (reject state), the new Promise immediately rejects and returns the same error. You can use `Promise.all()` when you want all the actions to finish first.

The below example code shows the use of `Promise.all()`:

```javascript
{{
(function(){
	let employeeNames = ["Employee 1","Employee 2"];
	// Start a bunch of calls running in parallel and store returned promise
	const calls = employeeNames.map(employeeName => MockApi.run({ name: employeeName }));
	
	// Wait for all to finish (or any to reject).
	return Promise.all(calls)
			.then(() => showAlert('Promise.all - All successful'))
			.catch(() => showAlert('Promise.all - Something went wrong'))
			.finally(() => showAlert('Promise.all - finished'))
})()
}}
```

In the example:

1. You have a list of employee names, and you ran the `MockApi` with parameter names as each employee name.
2. You store the returned Promise for each `MockApi.run()` in the calls array.
3. Then, you showed an alert message according to the success or failure case in `Promise.all()`.

### Promise.allSettled()
It just waits for all the promises to settle, regardless of the result (resolved or rejected). You can use `Promise.allSettled()` when you want all the actions to finish first.

The below example code shows the use of `Promise.allSettled()`:

```javascript
{{
(function(){
  let employeeNames = ["Employee 1","Employee 2"];
  // Start a bunch of calls running in parallel and store returned promise
  const calls = employeeNames.map(employeeName => MockApi.run({ name: employeeName }));
  
  // Wait for all to resolve / reject.
  return Promise.allSettled(calls)
		.then(() => showAlert('Promise.allSettled - All successful'))
		.catch(() => showAlert('Promise.allSettled - Something went wrong'))
		.finally(() => showAlert('Promise.allSettled - finished'))
})()
}}
```

In the example:

1. You have a list of employee names, and you ran the `MockApi` with parameter names as each employee name.
2. You store the returned Promise for each `MockApi.run()` in the calls array.
3. Then, you showed an alert message according to the success or failure case in `Promise.allSettled()`.

## Using Promises in Appsmith
Here are some general guidelines for using Promises in Appsmith:

* Most action triggers in Appsmith now return promises, so you can attach a `.then / await` to wait for the action before proceeding.
* All triggers are wrapped in a promise, so any missed error results in an uncaught promise error.
* Return promise with `.then` attached to it, as shown below:

```javascript
{{
  (function() {
		// the .then only runs if a promise is returned
		return MockApi.run()
			.then(() => showAlert('success'))
	})()
}}
```
* Parameters are no longer passed in the `.then()` argument of the `action.run`. Only the response is passed, as shown below:

```javascript
{{
  (function() {
		// define params on top so that you can use them in the later calls
		const params = { name: "Appsmith" }
		return MockApi.run(params)
			.then((response) => {
				showAlert(`${response.length} users found in `${params.name}`)
			})
	})()
}}
```
* When passing a function to `.then()` or `.catch()` always remember to pass it as a [callback](https://developer.mozilla.org/en-US/docs/Glossary/Callback\_function) function, as shown below:
```javascript
{{
  (function() {
	❌ MockApi.run().then(showAlert(`Success`))
	//highlight-next-line
	✅ return MockApi.run().then(() => showAlert(`Success`))
      
   })()
}}
```
JavaScript promises offer a more organized and maintainable way to handle async operations in Appsmith.