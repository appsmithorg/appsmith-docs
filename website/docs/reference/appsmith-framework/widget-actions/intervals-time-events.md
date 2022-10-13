---
sidebar_position: 9
---

# Intervals (Time events)

Interval events (Timing functions in JavaScript) allow the user to periodically run APIs and DB queries. You can configure these by using the setInterval and clearInterval functions.


<figure>
<object data="https://www.youtube.com/embed/ByE3aqlQ1pE" width='860px' height='515px'></object>
<figcaption align = "center"><i>How To Use The SetInterval & ClearInterval Functions To Auto-Update Widgets
</i></figcaption>
</figure>



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
