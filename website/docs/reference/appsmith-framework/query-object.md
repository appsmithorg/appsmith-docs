---
sidebar_position: 3
---
# Query Object

This page describes how to use the Query object to run queries and access the data from the response.

## Properties and methods

These properties are used to reference and control data related to your query.

| Property         | Description                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------- |
| **data**         | Contains the response body from the last successful execution of this query. If this property is referenced in a widget's property field, the query is automatically run on page load. |
| **responseMeta** | Contains metadata from the last response to this query's execution.                          |

| Method           | Description                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------- |
| **clear()**      | Empties all data from the query's **`data`** property.                                       |
| [**run()**](#signature) | Executes the query when called. Can't be called in sync fields; see [sync vs. async fields](/core-concepts/writing-code/workflows#display-data-from-async-js-function). |

## run()

Calling a query's `run()` function executes that query. `run()` is asynchronous and returns a promise, so you can use it with async syntax like `.then()` chains and `async/await`. It can't be used in [synchronous fields](/core-concepts/writing-code/workflows#display-data-from-async-js-function).

### Signature

```
run(params: Object): Promise
```

| Argument      | Description                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------- |
| **params**    | An object containing key-value pairs to pass into the query. Accessed with `{{ this.params.key }}`. |


This function returns a JavaScript **promise**, which can be used to handle async actions in sequence. Use `.then()` and `.catch()` to write code to be executed when the query returns successfully or in error, respectively. Or, use `async/await` syntax.

```javascript
// Using promise syntax to chain actions in sequence
{{
    Query1.run(params)
        .then(() => {...}) // run after the query is successful
        .catch(() => {...}) // run if the query encounters any errors
}}
```

To learn more about chaining actions to create complex workflows, see [complex workflows](/core-concepts/writing-code/workflows#complex-workflows).

### Pass parameters to run()

Most queries read values directly from entities as global variables. In some cases, like running a query inside a loop, parameters may need to be passed to the query with values contextual to the execution.

For this, use the `params` argument to pass an object of key-value pairs into your query. You can access these values within the query using `{{ this.params.key }}`.

#### Example

Imagine that you have an API endpoint that returns data about teams of employees. `api.domain/teams/1` returns Team 1, `api.domain/teams/2` returns Team 2, etc. It would be useful to write a function that uses a single button click to return aggregated data from a number of selected teams.

First, create a query `GetTeamsData` to query the `api.domain/teams/` endpoint.

```javascript
// URL to query
https://api.domain/teams/{{ this.params.team }}
```

On the canvas, use a [Checkbox-group widget](/reference/widgets/checkbox-group/) and populate the checkbox options and values with the teams that can be selected. This may be done manually, or with a query that returns a list of all existing team numbers.

On the Checkbox-group's `selectedValues` property, there's an array of the selected values.

```javascript
// CheckboxGroup1.selectedValues
[ "1", "3", "4", "6", "10" ]
```

Next, set up a helper function `queryTeams` in a [JS Object](/core-concepts/writing-code/javascript-editor-beta) called `utils`:

```javascript
// function in a JS Object
  queryTeams: async (teamsArray) => {
    const teamsPromises = await teamsArray.map(team => {
      GetTeamsData.run({ "team": team })
    })
    const responseArray = await Promise.allSettled(teamsPromises);
    const result = responseArray.map( result => result.value? )
    await storeValue("teamsData", result)
  }
```

The `queryTeams` function takes the user's selection from the CheckboxGroup, and runs the query once for each selected team, substituting the team number into the query. Once all the queries have completed, the function creates an array of their aggregated data from the responses and stores them in the [Appsmith Store](/reference/appsmith-framework/widget-actions/store-value).

Back on the canvas, call your function to run the queries in a [Button widget's](/reference/widgets/button) **onClick** field:

```javascript
// Button widget's onClick
{{ utils.queryTeams(CheckboxGroup1.selectedValues) }}
```

Create a [Table widget](/reference/widgets/table) and bind your stored data into the **Table Data** field:

```javascript
{{ appsmith.store.teamsData }}
```

Now you can select your teams with the checkboxes, click the button, and see your table populate with data.

### Ways to use run()

TODO

#### Promise chains

TODO

#### async/await

TODO

#### Callbacks (deprecated)

:::caution info
This style is deprecated in Appsmith. Reference this function signature only if you have existing callback-style syntax in your app.
:::

```javascript
run(onSuccess: Function, onError: Function, params: Object): void
```

**onSuccess** and **onError** are callback functions that are executed in the case of query success or error, respectively.

The **params** argument ([see above](#pass-parameters-to-run)) is an object of key-value pairs that can be referenced from within the query body using `{{ this.params.key }}`.

## data

A query's `data` property contains the response data from its most recent execution. To pipe data from your query into your app, access `<query_name>.data` in a widget property or JS Object; For example, you might commonly reference it in a [Table widget's](/reference/widgets/table) **Table Data** property to populate the table with data.

When you bind `<query_name>.data` to one of a widget's properties, it sets your query to run automatically when the app page loads. This way, your widgets are filled with data without user interaction. To turn off this behavior, toggle the **Run on page load** setting in your [query's settings page](/core-concepts/data-access-and-binding/querying-a-database/query-settings).

## responseMeta

The query object's `responseMeta` property contains an object with metadata about the query's most recent execution. For example, you can see its status code, whether it was successful, and the time it was executed.

## Further reading

- [Creating Workflows](https://docs.appsmith.com/core-concepts/writing-code/workflows#complex-workflows)
- [JS Objects](/core-concepts/writing-code/javascript-editor-beta)