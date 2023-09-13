---
sidebar_position: 3
toc_max_heading_level: 2
description: Open a Modal widget using the showModal() Appsmith framework function.
---

# showModal()

The `showModal()` framework function is used to open an existing [Modal widget](/reference/widgets/modal) and bring it into focus on the page.

## Signature

```javascript
showModal(modalName: string): Promise
```

### Parameters

#### modalName

<dd>

A string which is the name of the modal widget to open.

</dd>

_Example:_

```javascript
{{ showModal("Modal1") }}
```