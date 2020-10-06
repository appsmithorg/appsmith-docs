---
description: APIs can refer to widget data when they are configured.
---

# Taking Inputs from Widgets

## Passing Inputs to Query params

Most APIs require query params to filter data and sometimes these filters need to be input by a user. We can pass query params selected in a widget to an API by referring to the widget property as**`{{ widgetName.property }}`.** So to filter a list of users by status, we can pass a Dropdown selected value to an API by adding a params field with the key as status and the value as**`{{ statusDropdown.selectedOptionvalue }}`**

![Click to expand](../../.gitbook/assets/query2.gif)

{% hint style="info" %}
In the above example, statusDropdown is the name of the widget and can be edited in the property pane by clicking on it
{% endhint %}

## Passing Inputs to the POST body

APIs that create or modify data usually require user inputs from a form. These inputs can be sent in the body of an API as a JSON. We can Input the JSON structure with the static values and replace all the values we need from a widget using **`{{ widgetName.property }}`** 

{% hint style="warning" %}
The binding must be added inside quotes for it to be a valid JSON in the post body. See an example below
{% endhint %}

![Click to expand](../../.gitbook/assets/post-body-mov.gif)

```javascript
{
  "title": "{{offerTitleInput.text}}",
  "offerType": "{{offerTypeDropdown.selectedOptionValue}}",
  "startDate": "{{startDatepicker.selectedDate}}"
}
```

