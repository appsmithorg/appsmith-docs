---
description: >-
  Multiple Queries can be triggered in serial/parallel/conditional when a user
  interacts with a widget
---

# Creating Workflows

This document presumes you are familiar with [triggering actions](../capturing-data-write/#triggering-updates) from widgets and expands on triggering more complex actions to create a workflow.

## Handling Success / Error

The property pane allows us to configure the action to take once a Query returns with a success or an error. Success / Error is determined by the HTTP status code or the query response status returned by the API / Query.

We can decide to display a success or an error message by using the [**showAlert Action**](../../framework-reference/show-alert.md).

![](<../../.gitbook/assets/error handling.gif>)

## Complex Workflows

The GUI is limited to a single onSuccess / onError callback while the underlying framework has no limitation. To write complex workflows that cannot be accommodated in the GUI, click on the **JS** icon next to the event name & enable JavaScript. Now you can write conditional workflows and chain multiple Queries.

![](<../../.gitbook/assets/conditional query.gif>)

{% hint style="success" %}
Once you have configured actions using the GUI, you can click on the JS icon next to the event to show the JavaScript equivalent of your configuration. This can help you learn to use JavaScript to configure workflows!
{% endhint %}

### Executing Queries in Parallel / Serial

Every query object contains a run method that is used to execute it. The run method is asynchronous and multiple queries can be executed in parallel as below

```javascript
{{ API1.run(); Query2.run(); API2.run(); }}
```

or chained to be called onSuccess / onError using the callback arguments in the [Run Signature](../../framework-reference/run.md)

```javascript
{{ 
    updateUsers.run()
	    .then(() => fetchUsers.run()
	                .then(() => { 
	                    showAlert('User Updated'); 
	                    closeModal('Modal1'); 
		                })
				.catch(() => showAlert("Fetch Users Failed"))
	    ).catch(() => showAlert("Update User Failed", "error")) 
}}
```

### Conditional Execution

Queries can also be chained to execute conditionally based on the value of a widget or the response of a Query

```javascript
{{ 
  statusDropdown.selectedOptionValue === "Pending" ?
      fetchPendingUsers.run(() => {
          fetchPendingUsers.data.length === 0 ? showAlert("No Users Pending Approval", "info") : showAlert("Fetched Users", "success");
      }) :
      fetchApprovedUsers.run();
}}
```

{% hint style="success" %}
Make use of the [Appsmith Framework](appsmith-framework.md) and [External Libraries](ext-libraries.md) to quickly build logic into your applications
{% endhint %}
