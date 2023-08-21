---
description: >-
  clearInterval() reference
toc_max_heading_level: 2
---

# clearInterval()

`clearInterval()` stops a repeating callback that was started with the [setInterval()](/reference/appsmith-framework/widget-actions/set-interval) method.

## Signature

```javascript
clearInterval(id: string)
```

### Parameters

#### id

<dd>

The string name of the timer that you want to clear. This should match the `id` parameter of the [setInterval()](/reference/appsmith-framework/widget-actions/set-interval) call that you want to stop.

</dd>


*Example:* If you want to clear a timer whose `id` is `myTimer`, refer to the code snippet given below:

```javascript
clearInterval("myTimer");
```

