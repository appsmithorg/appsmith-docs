---
description: >-
  Multiple APIs / Queries can be triggered in serial/parallel/conditional when a
  user interacts with a widget
---

# Triggering actions & workflows

## Configuring the trigger

The property pane has an action section where all the interactions that a user can perform with a widget are listed. We can configure the action to be taken when the interaction takes place in this section.

To configure the API / Query we want to call when a button is clicked, we can select the action in the onClick dropdown.

![](../../.gitbook/assets/button-action.gif)

## Handling Success / Error

The action section also allows us to configure the action to take once an API  / Query returns with a success or an error. Success / Error is determined by the HTTP status code or the query response status returned by the API  / Query. We can decide to display a success or an error message by using the **Show Alert action**.

![](../../.gitbook/assets/success.gif)

## Creating Workflows

To write complex workflows that cannot be accommodated in the GUI, click on the **JS** icon next to the event name & enable JavaScript. Now you can write conditional workflows and chain multiple API/Queries.

![](../../.gitbook/assets/workflow.gif)

```sql
{{ API1.run(() => { Query2.run(); }, () => showAlert("API1 failed", "error")) }}
```

{% hint style="success" %}
Once you have configured actions using the GUI, you can click on the JS icon next to the event to show the JavaScript equivalent of your configuration. This can help you learn to use JavaScript to configure workflows!
{% endhint %}

## Sending widget data to APIs / Queries

You can use javascript inside APIs/Queries to read data from a widget or any other entity inside the application.

```sql
select * from users where id = '{{Table1.selectedRow.id}}'
```

In the above query, the id field is substituted by the value of the table's selected row. Read more about [Taking inputs from widgets in APIs](../apis/taking-inputs-from-widgets.md)

