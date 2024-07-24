---
description: >-
  clearInterval() reference
toc_max_heading_level: 2
---

# clearInterval()

This page provides information about the `clearInterval()` function signature and parameters, which allows you to stop a repeating callback that was started with the [setInterval()](/reference/appsmith-framework/widget-actions/intervals-time-events) method.


## Signature

```javascript
clearInterval(id: string)
```

### Parameters

Below are the parameters required by the `clearInterval()` function to execute:


#### id

<dd>

The `id` is a string that represents the unique identifier of the interval timer you want to stop. This identifier must match the id specified when creating the interval with the `setInterval()` function. 

</dd>

## Usage

Here are a few examples of using `clearInterval()` in different situations:


#### Stopping auto-refresh

<dd>

If you have a timer set up to automatically refresh data every few seconds and you want to stop it based on user interaction or a specific condition, you can use clearInterval().

```javascript
clearInterval("autorefresh");
```



</dd>


## See also
* [setInterval()](/reference/appsmith-framework/widget-actions/intervals-time-events)<br/>
* [setTimeout()](/reference/appsmith-framework/widget-actions/set-timeout)