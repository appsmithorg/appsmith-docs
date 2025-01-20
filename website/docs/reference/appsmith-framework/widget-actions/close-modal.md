---
sidebar_position: 4
toc_max_heading_level: 2
description: Close a Modal widget using the closeModal() Appsmith framework function.
---
# closeModal()

This page provides information about the `closeModal()` function signature and parameters, which allows you to close an existing [Modal widget](/reference/widgets/modal) that is currently open on the page.


<ZoomImage src="/img/close-modal.png" alt="closeModal()" caption="closeModal()" />


## Signature

```javascript
closeModal(modalName: string): Promise
```



### Parameters

Below are the parameters required by the `closeModal()` function to execute:


#### modalName

<dd>

The name of the Modal widget you want to close. 



_Example:_

```javascript
{{ closeModal(UserDetailsModal.name) }}
```

</dd>

## Usage

Here are a few examples to close Modals in different situations:



#### Successful query execution

<dd>

If you want to close the modal after a user submits a form, you can do so using the `closeModal()` function, like:

```js
{{updateUsers.run().then(() => {
  closeModal(UserDetailsModal.name);
}).catch(() => {});}}
```


</dd>
