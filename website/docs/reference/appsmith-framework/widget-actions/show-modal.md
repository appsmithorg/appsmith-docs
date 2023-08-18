---
sidebar_position: 3
description: Open a Modal widget using the showModal() Appsmith framework function.
---

# showModal()

The `showModal()` framework function is used to open an existing [Modal widget](/reference/widgets/modal) and bring it into focus on the page.

## Signature

```javascript
showModal(modalName: string): Promise
```

This function accepts the following parameters:
* A parameter of type _string_ which is the name of the modal widget to open.

_Example:_

```javascript
{{ showModal("Modal1") }}
```