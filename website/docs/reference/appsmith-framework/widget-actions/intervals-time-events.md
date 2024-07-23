---
description: >-
  setInterval() reference
toc_max_heading_level: 2
---

# setInterval()

This page provides information about the `setInterval()` function signature and parameters, which allows you to execute a callback function with a fixed time interval between the calls.



<ZoomImage src="/img/settimeout-function.png" alt="setTimeout()" caption="setTimeout()" />



## Signature

```javascript
setInterval(callbackFunction: Function, interval: number, id?: string, args?: any)
```

### Parameters

#### callbackFunction

<dd>

The function or code snippet that you want to execute at regular intervals.

</dd>

#### interval

<dd>

The time interval (in milliseconds) between each execution of the `callbackFunction`.

</dd>

#### id

<dd>

`id` accepts a string name that you can use to refer to an interval timer. When calling `clearInterval()`, pass this string name as the `id` parameter to stop the interval timer.

</dd>


*Example:* If you want to execute `Query1` every 1000 milliseconds and refer to this timer as `myTimer`, you can achieve this using the code snippet given below:

```javascript
setInterval(() => { Query1.run() }, 10000, "myTimer");
```

## See also
- [clearInterval()](/reference/appsmith-framework/widget-actions/clear-interval)
- [setTimeout()](/reference/appsmith-framework/widget-actions/set-timeout)
- [Polling for data updates](/build-apps/how-to-guides/setup-polling)
