# Intervals (Time events)

Interval events (Timing functions in JavaScript) allow the user to periodically run APIs and DB queries. You can configure these by using the setInterval and clearInterval functions.

{% embed url="https://youtu.be/ByE3aqlQ1pE" caption="How To Use The SetInterval & ClearInterval Functions To Auto-Update Widgets" %}

## setInterval()

The <mark style="color:orange;">`setInterval()`</mark> method executes a code snippet with a fixed time interval between the calls, i.e, it executes a trigger callback at a given interval. Here’s how you can use it while dynamically binding queries onto widgets:

```
//Syntax 
setInterval(callbackFunction: Function, interval: number, id?: string)

// Example 
setInterval(() => { Query1.run() }, 10000, "myTimer");
```

## clearInterval()

The <mark style="color:orange;">`clearInterval()`</mark> function stops executing the trigger callback started with the setInterval method.

```
//Syntax
clearInterval(id: string)

// Example 
clearInterval("myTimer");
```
