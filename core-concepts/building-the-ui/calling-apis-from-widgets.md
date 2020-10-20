---
description: >-
  APIs / Queries can be triggered when a user interacts with a widget. This can
  be configured in the property pane of the widget
---

# Triggering APIs / Queries from Widgets

## Configuring the action

The property pane has an action section where all the interactions that a user can perform with a widget are listed. We can configure the action to be taken when the interaction takes place in this section.

To configure the API / Query we want to call when a button is clicked, we can select the action in the onClick dropdown.

![](../../.gitbook/assets/button-action.gif)

## Handling Success / Error

The action section also allows us to configure the action to take once an API  / Query returns with a success or an error. Success / Error is determined by the HTTP status code or the query response status returned by the API  / Query. We can decide to display a success or an error message by using the **Show Alert action**.

![](../../.gitbook/assets/success.gif)

## Sending data to APIs / Queries

The data of a widget can be sent to an API / Query by binding the property of the widget inside the query / API. You can use **`{{ widgetName.property }}`** inside the params, post body or the query itself. The **`{{ }}`** acts as a substitution syntax and the value of the widgets property will be substituted accordingly.

```sql
select * from users where id = '{{Table1.selectedRow.id}}'
```

In the above query, the id field is substituted by the value of the table's selected row. Read more about [Taking inputs from widgets in APIs](../apis/taking-inputs-from-widgets.md)

