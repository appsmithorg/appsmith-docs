# Widget Errors

This section will help you troubleshoot common widget errors on the Appsmith platform.

## JSON Form Errors

You may see the below errors when working with a [JSON Form ](../../reference/widgets/json-form)widget.

### **Source data exceeds 50 fields**

You see an error message **Source data exceeds 50 fields. Please update the source data** when you try to bind the query/API response to the [source data ](../../reference/widgets/json-form#source-data)property.

**Error message:**

Source data exceeds 50 fields. Please update the source data.

![When the data had more than 50 fields](</img/Troubleshooting__Widget_Errors__JSON_Form_Errors__Source_Exceeds_50_Fields.png>)

### Cause

The problem can be caused when you are trying to bind:

* A large array of multiple JSON objects
* A huge JSON object which has a lot of fields
* The whole query data rather than a selected row or triggered row in a table

### Solution

To determine if the problem is caused due to:

* **A large array or a huge JSON object** - You can relook at the data and evaluate the need to display all the data on UI, as it would be painful for your users to navigate more than 50 fields.
* **The whole query response that you bound to the source data** - You recheck the source data field you are trying to bind and select either selected row / triggered row to bind.

Once you have figured out the new structure for the data, head to the [source data](../../reference/widgets/json-form#source-data) field to make changes.

:::caution
If you still can't see a JSON form and need help debugging an error, please get in touch with us on our [Discord Server](https://discord.com/invite/rBTTVJp) or email us at support@appsmith.com.
:::