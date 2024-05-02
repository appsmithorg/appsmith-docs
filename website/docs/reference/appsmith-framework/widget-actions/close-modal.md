---
sidebar_position: 4
toc_max_heading_level: 2
description: Close a Modal widget using the closeModal() Appsmith framework function.
---
# closeModal()

The `closeModal()` framework function is used to close an existing [Modal widget](/reference/widgets/modal) that is currently open on the page.

## Signature

```javascript
closeModal(modalName: string): Promise
```

### Parameters

#### modalName

<dd>

A string which is the name of the modal widget to close.

</dd>

_Example:_

```javascript
{{ closeModal(Modal1.name) }}