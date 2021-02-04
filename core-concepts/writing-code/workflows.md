---
description: >-
  Multiple APIs / Queries can be triggered in serial/parallel/conditional when a
  user interacts with a widget
---

# Creating Workflows

This document presumes you are familiar with [triggering actions](../capturing-data-write/#triggering-updates) from widgets and expands on triggering more complex actions to create a workflow.

## Handling Success / Error

The property pane allows us to configure the action to take once an API  / Query returns with a success or an error. Success / Error is determined by the HTTP status code or the query response status returned by the API  / Query. 

We can decide to display a success or an error message by using the **Show Alert action**.

![](../../.gitbook/assets/success.gif)

## Complex Workflows

The GUI is limited to a single onSuccess / onError callback while the underlying framework has no limitation. To write complex workflows that cannot be accommodated in the GUI, click on the **JS** icon next to the event name & enable JavaScript. Now you can write conditional workflows and chain multiple API/Queries.

![](../../.gitbook/assets/workflow.gif)

{% hint style="success" %}
Once you have configured actions using the GUI, you can click on the JS icon next to the event to show the JavaScript equivalent of your configuration. This can help you learn to use JavaScript to configure workflows!
{% endhint %}

### Executing Actions in Parallel / Serial

Every API / Query object contains a run method that is used to execute it. The run method is asynchronous and multiple actions can be executed in parallel as below

```sql
{{ API1.run(); Query2.run(); API2.run(); }}
```

or chained to be called onSuccess / onError using the callback arguments in the [Run Signature](../../framework-reference/run.md)

```sql
{{ 
    updateUsers.run(() => { 
        fetchUsers.run(() => { 
            showAlert('User Updated'); 
            closeModal('Modal1'); 
        }, () => showAlert("Fetch Users Failed"));
    }, () => showAlert("Update User Failed", "error")) 
}}
```

### Conditional Execution

Actions can also be chained to execute conditionally based on the value of a widget or the response of an API

```sql
{{ 
    statusDropdown.selectedOptionValue === "Pending" ?  
      fetchPendingUsers.run(() => {
        fetchPendingUsers.data.length === 0 ? 
          showAlert("No Users Pending Approval", "info") : 
          showAlert("Fetched Users", "success")
      }) : fetchApprovedUsers.run() 
}}
```

{% hint style="success" %}
Make use of the [Appsmith Framework](appsmith-framework.md) and [External Libraries](ext-libraries.md) to quickly build logic into your applications
{% endhint %}

