---
description: Known bugs and limitations of Appsmith's MCP Server (BETA) as of Appsmith 2.4.3, with their status and workarounds, covering JS objects, MongoDB queries, widget properties, events, and layout diagnostics.
toc_max_heading_level: 2
---

# MCP Server known issues and limitations

This page lists the bugs and limitations of [MCP Server (BETA)](/getting-started/setup/instance-configuration/mcp-server) that Appsmith has confirmed as of **Appsmith 2.4.3**. Most of them were found while building an internal administration app entirely through an AI client, so they describe what an agent runs into when it goes beyond scaffolding a page: writing JavaScript logic, filtering and writing MongoDB data, binding widget properties, and wiring events.

Each entry states the symptom you see in the AI client, the cause, the current status, and what to do in the meantime. For connection and authentication problems, see [Troubleshoot a connection](/getting-started/setup/instance-configuration/mcp-server#troubleshoot-a-connection) instead.

The status labels mean:

| Status | Meaning |
| --- | --- |
| **Bug, fix in progress** | Confirmed defect. A fix is under review in [appsmith#42311](https://github.com/appsmithorg/appsmith/pull/42311) and ships in a later release. It is not available in 2.4.3. |
| **Limitation, extension in progress** | Works as designed in 2.4.3, but the vocabulary is being extended in the same change. |
| **By design** | Intentional behavior of the MCP Server's security model. It is not planned to change. |

:::info How the MCP Server authors code
An AI client never sends JavaScript, SQL, MongoDB commands, or `{{ }}` bindings to Appsmith. Every tool accepts a structured description that the server compiles under the key owner's permissions, and runtime values are bound as parameters; nothing is string-concatenated into a query or binding. The one free-text field, the GraphQL operation string in `create_graphql_query`, carries no runtime data (variables are separate) and is checked for binding syntax. Most limitations on this page are the edges of that vocabulary in 2.4.3, not permission problems.
:::

## JS objects

### Creating a JS object fails with a 400 error

**Symptom:** Every `create_js_object` call, including a minimal definition with one function that runs one query, returns `Appsmith API request failed (400)`, and a following `read_js_object` shows that nothing was created.

**Cause:** The request the tool sends omits the application ID that the Appsmith server requires, so the server rejects it before validating anything else. The tool also sends no per-function action records, so even a JS object that was saved would show no functions in the Appsmith editor.

**Status:** Bug, fix in progress.

**Workaround:** Create the JS object in the Appsmith editor. `read_js_object` lists it, and queries created through MCP can be used from it.

### Updating a JS object does not change its code

**Symptom:** `update_js_object` succeeds, but the JavaScript body of the object is unchanged. Only a rename takes effect.

**Cause:** The tool updates the object's metadata through an endpoint that ignores code changes. The separate endpoint that writes the body is not called and is not on the MCP Server's allowed-route list.

**Status:** Bug, fix in progress.

**Workaround:** Edit the code in the Appsmith editor.

### `read_js_object` does not return the JavaScript source

**Symptom:** The tool returns each object's name, page, function names, and revision, but not its code, so an agent cannot inspect an existing object before changing it.

**Cause:** In 2.4.3 the tool deliberately never returns JavaScript source. The per-object revision also ignores code-only changes, so an object edited in the Appsmith editor keeps the same revision.

**Status:** Limitation, extension in progress; the stale revision is a bug and is fixed in the same change. After the change, the tool returns the source only for objects that MCP Server itself compiled. Code written by a person in the Appsmith editor is never returned to an AI client, because hand-written code is where hard-coded credentials tend to live, and MCP Server never overwrites it either. The response reports which case applies.

### JS object functions cannot contain logic

**Symptom:** A JS object definition accepts constants (literal values), functions that run a fixed list of named queries, and a return value made of literals. Anything else is refused: function parameters, reading a widget value, an `if`, a string or array transformation, `Number()` or `new Date()`, a computed return value, or `throw`.

For example, none of the following can be authored through MCP in 2.4.3:

```javascript
// Split a pasted list, trim, drop blanks, deduplicate
splitLines(value) {
  return [...new Set((value || "").split(/[\r\n,]+/).map((s) => s.trim()).filter(Boolean))];
}

// Refuse a half-filled pair of fields
if (Boolean(linkLabel.trim()) !== Boolean(linkUrl.trim())) {
  throw new Error("Provide both link fields or leave both blank.");
}

// Order two dates
if (startsAt && endsAt && new Date(endsAt) <= new Date(startsAt)) {
  throw new Error("End time must be later than start time.");
}
```

A save flow that validates, chooses between insert and update, passes normalized values to a query, refreshes a table, and shows an alert cannot be expressed as a fixed list of query calls.

**Cause:** By design, the 2.4.3 grammar is constants and query runs only.

**Status:** Limitation, extension in progress. The same change under review adds a closed, bounded expression and statement grammar: function parameters, local variables, `if`/`else`, a bounded `forEach`, `throw` with a literal message, query runs with parameters, `showAlert`, `storeValue`, `resetWidget`, and expression trees of literals, widget and query references, operators, and string, array, number, date, and boolean functions. The agent still supplies a structure, never source text; the compiler owns every emitted character, so it is designed to remain a vocabulary rather than an escape hatch.

**Workaround:** Write the function in the Appsmith editor.

### Free-form JavaScript is never accepted

**Symptom:** Any string that contains `{{ }}`, `${ }`, or a backtick is rejected in every field that Appsmith would evaluate, including query bodies, bindings, paths, and commit messages, and no tool accepts a JavaScript function body.

**Cause and status:** By design. This is the core of MCP Server's security model; requests outside the vocabulary need a vocabulary extension in Appsmith, not an escape hatch.

## MongoDB queries

### Filters are equality-only

**Symptom:** `create_mongo_query` filter clauses can only test a field for equality, combined with AND. A soft-delete predicate such as `{ deleted: { $ne: true } }` cannot be authored. Testing `deleted` equal to `false` is not equivalent, because it excludes documents where the field is absent.

**Cause:** The 2.4.3 filter grammar has no operator field.

**Status:** Limitation, extension in progress. The change under review adds a closed operator set (`eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `in`, `nin`, `exists`) for find, update, and delete; range clauses on one field merge into one operator object, and a repeated operator on the same field, or a plain equality clause mixed with operator clauses on the same field, is refused rather than silently dropped.

**Workaround:** Write the query in the Appsmith editor, or filter the result in the widget binding. Filtering in the binding still sends the excluded documents to the browser; if soft-deleted data must not reach end users, write the filter in the editor.

### Dates are stored as strings, not BSON dates

**Symptom:** A date value written through a MongoDB insert or update, whether a literal or a DatePicker widget reference, is stored as a string. Queries and indexes that expect a BSON date do not match it.

**Cause:** The builders emit every value as JSON; there is no date value type in the 2.4.3 vocabulary.

**Status:** Limitation, extension in progress. The change under review adds `{ date: '<ISO 8601>' }` literals (a calendar date is normalized to midnight UTC) and a DatePicker `selectedDate` reference tagged `as: 'date'` (no other property accepts the tag), both wrapped by the compiler so the MongoDB plugin stores a BSON date. This is verified at compile time; a smoke test against a live MongoDB datasource is still open, so verify the stored type in your own database.

**Workaround:** Write the query in the Appsmith editor using `{{ new Date(...) }}`.

### Query values cannot come from a computed JavaScript result

**Symptom:** A MongoDB document or filter value must be a literal or a widget property reference. It cannot be the result of a JS object function, a `Number(...)` conversion, or a constructed date.

**Cause:** This depends on the JS object grammar above.

**Status:** Limitation, extension in progress. With the new grammar, a query value can be a named parameter that a JS object function supplies when it runs the query.

### Running a MongoDB find through `run_action` requires confirmation

**Symptom:** `run_action` on a MongoDB find query returns `confirmation_required` with `readOnly: false`, even though the stored command is a read.

**Cause and status:** By design. Every database action, regardless of its command or HTTP method, goes through `prepare_run_action` and `confirm_run_action`, because the server does not trust the action's own description of itself as read-only. Only Google Sheets reads that the server verifies against the datasource run without a confirmation. This is not a database permission error.

**Workaround:** Use the prepare and confirm flow. Binding the query to a widget runs it in the end user's browser on page load, which displays data in the app but does not return it to the AI client.

## Widget properties and events

### Some editor properties are rejected by `patch_widgets`

**Symptom:** `patch_widgets` refuses `inputType: MULTI_LINE_TEXT` on an Input widget and refuses `labelText`, `defaultOptionValue`, `defaultCheckedState`, and `defaultSwitchState`, although `read_semantic_page` reports those same properties.

**Cause:** The patch allowlist did not include them.

**Status:** Bug, fix in progress. They are added as literal-only properties with per-widget type checks. Note that Checkbox, Switch, and Radio Group widgets keep their caption in `label`; `labelText` is the caption of Select and MultiSelect widgets only.

**Workaround:** Set the property in the Appsmith editor's property pane.

### Most style and property-pane settings cannot be set through `patch_widgets`

**Symptom:** `patch_widgets` accepts about 35 widget properties in 2.4.3. A Table widget's default selected row (`defaultSelectedRowIndex`, `defaultSelectedRowIndices`, `multiRowSelection`), header and cell colors, compact mode, and column alignment; a Text widget's font family, size, alignment, and overflow; label position, width, and typography on form controls; border radius, box shadow, border color and width, and accent colors; a Date Picker's minimum, maximum, and default date; a File Picker's allowed types and size limits; chart axis names; and image fit are all refused with an "unrecognized key" error.

**Cause:** The patch allowlist is closed by design, so that an AI client can never write an expression into a widget property, and it was only ever extended for the properties that earlier exercises needed.

**Status:** Limitation, extension in progress. The change under review adds every literal property-pane setting of the eighteen supported widget types as closed values copied from each widget's own property pane (enumerations, bounded numbers, colors, ISO dates, or plain text), checks each family-specific property against the widget's real type, and reads the same properties back through `read_semantic_page`. Theme presets for border radius and box shadow are accepted by name. Event handlers, data bindings, column definitions, and custom chart configurations remain outside the patch vocabulary.

**Workaround:** Set the property in the Appsmith editor's property pane.

### A widget's default value cannot be bound to another widget or a query

**Symptom:** There is no way to make a Select, Switch, DatePicker, or Input default to another widget's value or to a field of a query response. The only defaults MCP can set are a literal `defaultText` on an Input widget and, through `defaultValue`, a column of a table's selected row; Select, Checkbox, and Switch defaults cannot be set at all in 2.4.3 (see the previous entry).

**Status:** Limitation, extension in progress. The change under review adds a `defaultFrom` reference (a widget property or a query field) for Input, Select, MultiSelect, Radio Group, Checkbox, Switch, and DatePicker widgets.

**Workaround:** Bind the default in the Appsmith editor.

### An event cannot call a JS object function

**Symptom:** `wire_event` can run a query, navigate, open or close a modal, show an alert, reset widgets, and accumulate rows in the store, but it cannot call `Utils.save()` or any other JS object function.

**Status:** Limitation, extension in progress. The change under review adds a `call` action that names an existing JS object and function, checks that both exist in the application, and compiles to `Object.function()`, with up to five literal or widget-property arguments.

**Workaround:** Set the event in the Appsmith editor's property pane.

## Layout diagnostics

### `inspect_page` reports false container clipping warnings

**Symptom:** For a Container widget whose contents fit, `inspect_page` reports that the container clips its content with values that differ by exactly ten times, such as `45 vs 450`, `64 vs 640`, or `40 vs 400`, and suggests a resize. Applying the suggested size enlarges the container tenfold. The auto-grow behavior on `edit_page` and `patch_widgets` can produce the same oversized result.

**Cause:** The Appsmith editor stores the inner canvas height of a container in pixels, while the lint compares it to the container's height in grid rows.

**Status:** Bug, fix in progress. Content is measured from the child widgets' row positions instead.

**Workaround:** Ignore these warnings when the two numbers differ by a factor of ten, and do not apply the suggested resize. A warning whose numbers are close to each other can still be real.

## Other limitations by design

These are not defects and are unchanged by the fix above.

- **Editor-authored JavaScript is never returned or overwritten.** An AI client can rename such an object and delete it through the confirm flow, but cannot read or change its code. After [appsmith#42311](https://github.com/appsmithorg/appsmith/pull/42311) ships, it can also wire events to call the object's functions.
- **Accumulated store rows are session-only.** Rows collected with `appendToStore` are not persisted to the browser, so they reset on page reload.
- **Modal width cannot be changed through MCP;** only the height. List and card widgets cannot bind to a store key; tables can.
- **A newly built app is deployed as a scaffold.** Queries and event wiring are added after creation, so the deployed version lags until the app is deployed again through `prepare_publish` and `confirm_publish` or from the editor.
- **Git-connected apps follow the branch flow.** Edits require the current branch from `read_git_status`, commits happen only on branches under `mcp/` and always push, and merging, deploying, and pull requests stay in the Appsmith UI.
- **Screenshots are interpreted by the AI client, not by Appsmith.** Widgets with no Appsmith equivalent, such as kanban boards and Gantt timelines, are approximated with tabs and charts.

## Report an issue

MCP Server is in beta. If you find a problem that is not listed here, [open a ticket in the Appsmith Support Portal](https://support.appsmith.com) and identify the feature as **MCP Server (BETA)**. Include your Appsmith version, deployment type, AI client name and version, the tool name, and the exact response text. Redact MCP keys and other secrets.
