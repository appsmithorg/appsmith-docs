# JavaScript Promises

Previously, the only way to achieve asynchronous workflows in Appsmith was through callbacks, and dealing with callbacks was not easy. Appsmith now supports native [JavaScript promises](https://javascript.info/promise-basics) to make working with asynchronous workflows easier.

 <YoutubeEmbed videoId="VuBycqPJVug" title="How to use JS Promises and Async/Await" caption="How to use JS Promises and Async/Await"/>


All Appsmith APIs like [`showAlert()`](/reference/appsmith-framework/widget-actions/show-alert.md), [`showModal()`](/reference/appsmith-framework/widget-actions/show-modal.md), [`storeValue()`](/reference/appsmith-framework/widget-actions/store-value.md), [`navigateTo()`](/reference/appsmith-framework/widget-actions/navigate-to.md) etc., will return a promise, making asynchronous workflow's implementation easier and readable.

To understand the difference between callbacks and Promise implementation, let's try to implement the logic where we run three APIs each after the success of the previous one and finally show an alert with a message as "done."

:::info
MockApi is a query created inside Appsmith, which takes a name as a parameter.
:::

Old Callback implementation looks like this:

```
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

```
{{
 	MockApi.run()
 		.then(() => MockApi1.run())
 		.then(() => MockApi2.run())
 		.then(() => showAlert('done'))
 }}
```

### Async/Await

The `async` and `await` keywords enable the [asynchronous](javascript-editor-beta/#asynchronous) workflow to be written in a cleaner style, avoiding the need to configure promise chains explicitly.

#### Async

Adding the `async` keyword before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

#### Await

The keyword `await` makes JavaScript wait until that Promise settles and returns its result.

Let's take an example to understand these keywords. Refer to the code below:

```
{{ 
(async function(){ 
    const response = await MockApi.run({ name: 'Appsmith' }); 
    await storeValue( "name", response.args.name ); 
    await showAlert(appsmith.store.name); 
    })() 
}}
```

In the example above:

1. We run `MockApi` with the parameter name as "Appsmith" and wait for the response.
2. We store the response in the Appsmith store using `storeValue` when we get the response.
3. On completion of `storeValue`, we show an alert with a message.

### Promise methods

If you want only one action/promise to finish for further execution, you can use `Promise.any()` or `Promise.race()` methods.

:::tip
Please remember to always return the promise for `.then`or `.catch` blocks to work as expected.
:::

```
{{
  (function() {
      ❌   MockApi.run().then(() => showAlert(`Success`))	
      ✅   return MockApi.run().then(() => showAlert(`Success`)) 
   })()
}}
```
{% endhint %}

#### Promise.any()

It takes an iterable of Promise objects. Once one of the promises is fulfilled it returns a single promise that resolves with that Promise's value.

For example, refer to the code below:

```
{{
(function(){
    
  return Promise.any([
		MockApi.run({ name: 1 }), // if name:1 finished early
		MockApi.run({ name: 2 })
  ]).then((res) => {
    showAlert(`Winner: ${res.args.name}`) // Alert Message will be "Winner: 1" 
  });
})()
}}
```

Here, We ran multiple `MockApi` with a parameter name as a unique number (e.g., 1, 2) and passed the returned Promise to `Promise.any()`. When any actions are fulfilled, we show an alert message containing the argument sent to API, which finished faster.

#### Promise.race()

It simply waits for the first settled Promise, fulfilled or rejected, to get its result.

Let's take an example to understand `Promise.race()`. Refer to the code below:

```
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

In the example above:

1. We run multiple `MockApi` with a parameter name as a unique number (e.g., 1, 2);
2. We pass the returned Promise to `Promise.race()`;
3. We show an alert message containing the argument sent to API, which finishes faster.

If you want all the actions to finish first, you can use `Promise.all()` or `Promise.allSettled()` for such cases.

#### Promise.all()

It takes an array of promises (technically any iterable but is usually an array) and returns a new Promise. The array of results of the Promises becomes the result of the new Promise. If any promises fail (reject state), the new Promise immediately rejects and returns the same error.

For example, Refer to the code below:

```
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

In the example above:

1. We have a list of employee names, and we run `MockApi` with parameter names as each employee name;
2. We store the returned Promise for each `MockApi.run()` in the calls array;
3. Then, we show an alert message according to the success or failure case in `Promise.all()`.

#### Promise.allSettled()

It just waits for all the promises to settle, regardless of the result (resolved or rejected).

For example, Refer to the code below:

```
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

In the example above:

1. We have a list of employee names, and we run `MockApi` with parameter names as each employee name;
2. We store the returned Promise for each `MockApi.run()` in the calls array;
3. Then, we show an alert message according to the success or failure case in `Promise.allSettled()`.

### **Using Promises in Appsmith**

Here are some general guidelines for using Promises in Appsmith:

* Most action triggers in Appsmith now return promises so you can attach a `.then / await` to wait for the action before proceeding.
* All triggers are wrapped in a promise, so any missed error will result in an uncaught promise error.
* Return promise with `.then` attached to it.

```
{{
  (function() {
		// the .then will not run if the promise is not returned
		return MockApi.run()
			.then(() => showAlert('success'))
	})()
}}
```

* Params are no longer passed in the `.then()` argument of the `action.run`. Only the response is passed.

```
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

* When passing a function to `.then()` or `.catch()` always remember to pass it as a [callback](https://developer.mozilla.org/en-US/docs/Glossary/Callback\_function) function.

```
{{
  (function() {
	MockApi.run().then(showAlert(`Success`))❌	
	return MockApi.run().then(() => showAlert(`Success`)) ✅
      
   })()
}}
```
