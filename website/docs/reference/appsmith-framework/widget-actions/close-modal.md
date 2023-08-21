---
sidebar_position: 4
description: Close a Modal widget using the closeModal() Appsmith framework function.
---
# closeModal()

The `closeModal()` framework function is used to close an existing [Modal widget](/reference/widgets/modal) that is currently open on the page.

## Signature

```javascript
closeModal(modalName: string): Promise
```
This function accepts the following parameters:
* A parameter of type _string_ which is the name of the modal widget to close.

_Example:_

```javascript
{{ closeModal("Modal1") }}
```