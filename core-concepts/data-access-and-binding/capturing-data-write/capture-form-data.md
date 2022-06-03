# Capture Form Data

The [Form widget](../../../reference/widgets/form.md) is a special type of container used to build validated forms. Multiple widgets can be dragged inside the form widget to capture data. The form widget comes with a form button pre-configured.

The form button is disabled if

* Any of the **required fields** inside the form are not filled
* The form contains an input whose value does not match the regex configured

![](<../../../.gitbook/assets/form (1).gif>)

## Submitting Form Data

Form data can be submitted using a PUT / POST API or an Insert / Update Query. To submit form data,

1. Bind the onClick of the form button to call the API / Query
2. Configure onSuccess to Display a success message
3. Configure the API / Query to read the inputs from the form widgets using Javascript.

![](<../../../.gitbook/assets/form query (1).gif>)

{% hint style="warning" %}
Widgets inside a form are automatically reset to their default values when the Form Button onClick succeeds. This can be disabled in the button properties
{% endhint %}

## Displaying Submitted Data

Once the API / Query updates the data, the widgets on the screen need to be updated with new data as well. The best way to achieve this is to simply re-fetch the data from the API / Query rather than trying to append the data to the existing data set. This can be done in the onSuccess of the API / Query.

![](<../../../.gitbook/assets/refetch data.gif>)

{% hint style="warning" %}
The Property Pane UI supports a single onSuccess Callback but multiple callbacks and conditions can be configured by clicking the JS button next to the property. Learn more about [Creating Workflows](../../writing-code/workflows.md)
{% endhint %}

## Posting URL Encoded Form Data

The encoding type can be selected via the **Body** dropdown on the API editor. Selecting the value `application/x-www-form-urlencoded` will auto encoded the value sent in the body field.
