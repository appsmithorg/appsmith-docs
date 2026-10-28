---
title: Tree (ALPHA)
sidebar_label: Tree
hide_title: true
description: The Tree widget shows nested data as a tree of nodes that users can expand, collapse, and select.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Tree (ALPHA)</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" },
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>
</div>

<!-- vale on -->

:::caution Alpha feature: invite only
Responsive Widgets are in alpha and available by invitation only on Business and Enterprise plans. Behavior and properties may change. To request access, [open a support ticket](https://support.appsmith.com) and name the feature **Responsive Widgets (ALPHA)**.
:::

The Tree widget shows nested data, such as folders or an org chart, as nodes that users can expand and collapse. Users can select one node at a time. It is a display widget, not a form field. To capture a value in a form, use the Tree Select widget.

Widget type: `WDS_TREE_WIDGET`

<ZoomImage src="/img/responsive-widgets/tree.png" alt="Tree widget in a Responsive app" caption="Tree widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Options `array`

<dd>

Sets the nodes to show. Each node is an object with these keys:

- `label`: the text of the node.
- `value`: the value of the node.
- `children` (optional): an array of child nodes.
- `isDisabled` (optional): set to `true` to stop users from selecting the node.

New widgets start with a sample file tree.

*Example:*

```js
{{[
  { label: "Documents", value: "DOCUMENTS", children: [
    { label: "Resume", value: "RESUME" }
  ] },
  { label: "Archive", value: "ARCHIVE" }
]}}
```

</dd>

### General

#### Expanded values `array`

<dd>

Sets the values of the nodes that are expanded when the widget loads. If this list is not empty, it overrides **Expand all nodes**. Default: `[]`.

*Example:*

```js
["PARENT_1", "PARENT_2"]
```

</dd>

#### Expand all nodes `boolean`

<dd>

Expands every parent node when the widget loads. **Expanded values** overrides it. Default: off.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Disables every node in the tree. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

### Events

#### onNodeSelect

<dd>

Sets the action that runs when a user selects a node. See [Events](#events).

</dd>

#### onNodeExpand

<dd>

Sets the action that runs when a user expands or collapses a node. See [Events](#events).

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Tree1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Tree1.isVisible}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the widget is disabled.

*Example:*

```js
{{Tree1.isDisabled}}
```

</dd>

#### options `array`

<dd>

Holds the nodes of the tree.

*Example:*

```js
{{Tree1.options}}
```

</dd>

#### selectedValue `string`

<dd>

Holds the value of the selected node. It is an empty string when no node is selected.

*Example:*

```js
{{Tree1.selectedValue}}
```

</dd>

#### selectedNode `object`

<dd>

Holds the full object of the selected node (`{ label, value, children?, isDisabled? }`). It is `undefined` when no node is selected.

*Example:*

```js
{{Tree1.selectedNode.label}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Tree1.setVisibility(false)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the widget on or off.

*Example:*

```js
Tree1.setDisabled(true)
```

</dd>

## Events

#### onNodeSelect

<dd>

Runs when a user selects a node. Read the new value in `{{Tree1.selectedValue}}`.

</dd>

#### onNodeExpand

<dd>

Runs when a user expands or collapses a node. In the action, `{{expandedValues}}` holds the values of all expanded nodes.

</dd>
