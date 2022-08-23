# Widget Errors

This section will help you troubleshoot common widget errors on the Appsmith platform.

## JSON Form Errors

You may see the below errors when working with a [JSON Form ](../../reference/widgets/json-form.md)widget.

### **Source data exceeds 50 fields**

You see an error message **Source data exceeds 50 fields. Please update the source data** when you try to bind the query/API response to the [source data ](../../reference/widgets/json-form.md#source-data)property.

**Error message:**

> <mark style="color:red;">Source data exceeds 50 fields. Please update the source data.</mark>

![When the data had more than 50 fields](<../../.gitbook/assets/Troubleshooting  Widget Errors  JSON Form Errors  Source Exceeds 50 Fields.png>)

### Cause

The problem can be caused when you are trying to bind:&#x20;

* A large array of multiple JSON objects&#x20;
* A huge JSON object which has a lot of fields&#x20;
* The whole query data rather than a selected row or triggered row in a table

### Solution

To determine if the problem is caused due to:

* &#x20;**A large array or a huge JSON object** - You can relook at the data and evaluate the need to display all the data on UI, as it would be painful for your users to navigate more than 50 fields.&#x20;
* **The whole query response that you bound to the source data** - You recheck the source data field you are trying to bind and select either selected row / triggered row to bind.

{% hint style="warning" %}
If you still can't see a JSON form and need help debugging an error, please get in touch with us on our [Discord Server](https://discord.com/invite/rBTTVJp) or email us at support@appsmith.com.&#x20;
{% endhint %}
