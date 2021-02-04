# JS Errors

## Data Type Mismatch

This error occurs when the value in the property of the widget does not match the data type required by the property.

![](../.gitbook/assets/chart-error.png)

The image shows that there is an error in the Chart Data field of the Chart. To the left of the field, we can see a message which indicates that the value does not evaluate to type `Array<x: string, y: number>`

The Evaluated Value below indicates the current value of the field and in the image, we can see that the current value is an array while the error indicates that it must be an array&lt;x, y&gt;.

In cases like these, you can use javascript to transform the data to the correct data type or access the correct data inside the object. The below code reduces the fetch\_orders.data array to aggregate orders based on the date into an array &lt;x, y&gt; where x is the date of the order and y is the order amount

```javascript
{{_.values(fetch_orders.data.reduce((accumulator, order) => { 
    accumulator[order.date] ? accumulator[order.date].y += order.orderAmount : 
        accumulator[order.date] = { x:order.date, y: order.orderAmount  }; 
      return acc 
    }, {}))
}}
```

## Syntax Error

This error occurs when there is invalid javascript inside the handlebars `{{ }}`. The evaluated value of the field is displayed as undefined in this case. Double-check the number of braces in your code and consider re-writing your JS as [multi-line code](../core-concepts/writing-code/#multi-line-js). 

In the example below, fetch is not defined anywhere in the application

![](../.gitbook/assets/syntax-error.png)

