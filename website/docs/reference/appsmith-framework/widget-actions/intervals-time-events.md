---
description: >-
  setInterval() reference
toc_max_heading_level: 2
---

# setInterval()

This page provides information about the `setInterval()` function signature and parameters, which allows you to execute a callback function with a fixed time interval between the calls.


<ZoomImage src="/img/settimeout-function.png" alt="setInterval()" caption="setInterval()" />



## Signature

```javascript
setInterval(callbackFunction: Function, interval: number, id?: string, args?: any)
```


### Parameters

Below are the parameters required by the `setInterval()` function to execute:


#### callbackFunction

<dd>

The function or code snippet that you want to execute at regular intervals. Ensure that the function can handle being called multiple times and does not produce side effects that could lead to performance issues or memory leaks.

*Example:*

```js
setInterval(() => { userData.run() }, 10000, "myTimer");
```

</dd>

#### interval

<dd>

The time interval (in milliseconds) between each execution of the `callbackFunction`. This parameter defines how frequently the `callbackFunction` should be invoked. 

</dd>

#### id

<dd>

`id` is a string that can serve as a unique identifier for your `setInterval()` function. This id can be used to clear the interval using the `clearInterval()` function. By assigning a unique `id` to each interval timer, you can easily manage multiple timers and stop them as needed.

See [clearInterval()](/reference/appsmith-framework/widget-actions/clear-interval).

</dd>

## Usage

Here are a few examples of using `setInterval()` in different situations:





#### Data Polling

<dd>

Data polling involves repeatedly requesting data from a server at regular intervals. This ensures that your application always displays the most up-to-date information without requiring manual refreshes from the user.


```js
startAutoRefresh() {
  setInterval(() => delivery_data.run(), 5000, "autorefresh");
}
```

For more information, see [Polling for data updates](/build-apps/how-to-guides/setup-polling).

</dd>


## See also
- [clearInterval()](/reference/appsmith-framework/widget-actions/clear-interval)
- [setTimeout()](/reference/appsmith-framework/widget-actions/set-timeout)
