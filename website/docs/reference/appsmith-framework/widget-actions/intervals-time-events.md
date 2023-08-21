---
sidebar_position: 9

toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Intervals (Time Events)

Interval events (timing functions in JavaScript) allow the user to periodically run API and DB queries. You can configure these by using the `setInterval` and `clearInterval` functions.

<VideoEmbed host="youtube" videoId="ByE3aqlQ1pE" title="How To Use The SetInterval & ClearInterval Functions To Auto-Update Widgets" caption="How To Use The SetInterval & ClearInterval Functions To Auto-Update Widgets"/>


## setTimeout()

`setTimeout()` executes a piece of code once after a specified amount of time has passed.

### Signature

```javascript
setTimeout(callbackFunction: Function, delay: number)
```

### Arguments

| Argument Name | Description |
| ------------- | ----------- |
| **callbackFunction** | A function to be called once after a `delay` number of milliseconds have passed. |
| **delay** | The number of milliseconds to wait before calling the `callbackFunction`. |

### Example

```javascript
setTimeout(() => { showAlert("5 seconds have passed") }, 5000);
```