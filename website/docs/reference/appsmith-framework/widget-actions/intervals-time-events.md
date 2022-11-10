---
sidebar_position: 9
---

# Intervals (Time events)

Interval events (Timing functions in JavaScript) allow the user to periodically run APIs and DB queries. You can configure these by using the setInterval and clearInterval functions.


<VideoEmbed host="youtube" videoId="ByE3aqlQ1pE" title="How To Use The SetInterval & ClearInterval Functions To Auto-Update Widgets" caption="How To Use The SetInterval & ClearInterval Functions To Auto-Update Widgets"/>



## setInterval()

The setInterval() method executes a code snippet with a fixed time interval between the calls, i.e, it executes a trigger callback at a given interval. Here’s how you can use it while dynamically binding queries onto widgets:

```
//Syntax 
setInterval(callbackFunction: Function, interval: number, id?: string)

// Example 
setInterval(() => { Query1.run() }, 10000, "myTimer");
```

## clearInterval()

The clearInterval() function stops executing the trigger callback started with the setInterval method.

```
//Syntax
clearInterval(id: string)

// Example 
clearInterval("myTimer");
```
