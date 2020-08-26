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

