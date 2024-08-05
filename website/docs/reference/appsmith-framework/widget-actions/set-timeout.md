---
description: >-
  setTimeout() reference
toc_max_heading_level: 2
---

# setTimeout()

This page provides information about the `setTimeout()` function signature and parameters, which allows you to execute a code once after a specified amount of time has passed. This function is commonly used to introduce delays, handle timed events, or perform actions after a certain interval.



## Signature

```javascript
setTimeout(callbackFunction: Function, delay: number)
```

### Parameters

#### callbackFunction

<dd>

A function you want to call once a `delay` timer (in milliseconds) has passed.

</dd>

#### delay

<dd>

The time in milliseconds to wait before calling the `callbackFunction`.

</dd>


*Example:* You can use the [showAlert()](/reference/appsmith-framework/widget-actions/show-alert) function to show an alert message when `delay` time has passed as shown below:

```javascript
setTimeout(() => { showAlert("5 seconds have passed") }, 5000);
```

## See also
[setInterval()](/reference/appsmith-framework/widget-actions/intervals-time-events)<br/>
[clearInterval()](/reference/appsmith-framework/widget-actions/clear-interval)<br/>