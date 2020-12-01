# Binding events

You’ll see that you don't have a way to tell whether the product got added after submitting. Let’s fix it by adding success and error messages:

1. Open the properties of SubmitButton
2. Navigate to onClick → onSuccess 
3. Choose Show Message
4. Type Yay, product creation successful!
5. Navigate to onClick → onError
6. Choose Show Message
7. Type Nay, product creation failed!
8. Deploy the app

Try filling the form again with some valid and invalid values to verify that it works as expected.  


Click on the JS icon next to onClick. You’ll see that the long hierarchical GUI to represent onClick → onSuccess and onClick → onError converts to JS like below:  


```text
{{AddProductQuery.run(() => showAlert('yay'), () => showAlert('nay'))}}
```

As you saw, clicking on JS enables the JS editor in a property's field. You can modify this JavaScript code to further customize the onClick event. In Appsmith, you can configure a widget’s properties by either using the GUI, or by writing JavaScript code.

{% hint style="info" %}
Most widget-properties allow you to write JS. You can check this by:  TODO
{% endhint %}

