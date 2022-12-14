---
sidebar_position: 9

toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Intervals (Time Events)

Interval events (timing functions in JavaScript) allow the user to periodically run API and DB queries. You can configure these by using the `setInterval` and `clearInterval` functions.

<VideoEmbed host="youtube" videoId="ByE3aqlQ1pE" title="How To Use The SetInterval & ClearInterval Functions To Auto-Update Widgets" caption="How To Use The SetInterval & ClearInterval Functions To Auto-Update Widgets"/>

## setInterval()

`setInterval()` executes a callback function with a fixed time interval between the calls. This function is analogous to the [Window `setInterval()` method](https://developer.mozilla.org/en-US/docs/Web/API/setInterval).

### Signature

```javascript
setInterval(callbackFunction: Function, interval: number, id?: string, args?: any)
```

### Arguments

| Argument Name | Description |
| ------------- | ----------- |
| **callbackFunction** | A function to be called repeatedly every `interval` number of milliseconds. |
| **interval** | The number of milliseconds to wait between calls of the `callbackFunction`. |
| **id** | A custom _string_ name that can be used to refer to this interval timer. When making a `clearInterval()` call, use this name as the `id` argument to `clearInterval`. |

### Example

```javascript
setInterval(() => { Query1.run() }, 10000, "myTimer");
```

---

## clearInterval()

`clearInterval()` stops a repeating callback that was started with the `setInterval` method. This function is analogous to the [Window `clearInterval()` method](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval).

### Signature

```javascript
clearInterval(id: string)
```

### Arguments

| Argument Name | Description |
| ------------- | ----------- |
| **id** | The `id` _string_ of the timer to be cleared. This should match the `id` argument of the `setInterval()` call that you are trying to stop. |

### Example

```javascript
clearInterval("myTimer");
```

---

## setTimeout()

`setTimeout()` executes a piece of code once after a specified amount of time has passed. This function is analogous to the [Window `setTimeout()` method](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout).

### Signature

```javascript
setTimeout(callbackFunction: Function, delay: number, args?: any)
```

### Arguments

| Argument Name | Description |
| ------------- | ----------- |
| **callbackFunction** | A function to be called once after a `delay` number of milliseconds have passed. |
| **delay** | The number of milliseconds to wait before calling the `callbackFunction`. |
| **...args** | Any number of arguments may be passed, and they're given to the `callbackFunction` as arguments when it's called. |

### Example

```javascript
setTimeout(() => { showAlert }, 5000, "5 seconds have passed.");
```