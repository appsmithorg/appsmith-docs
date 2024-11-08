# Cyclic Dependency Errors

This page provides information on identifying and resolving cyclic dependency errors. A cyclic dependency occurs when two or more components depend on each other, either directly or indirectly, creating a loop. Below are different types of cyclic dependencies and how to resolve them.


#### Cyclic dependency in Table column validation

<Message
messageContainerClassName="error" 
messageContent="Cyclic dependency found while evaluating. Node was: Table1.primaryColumns.created_at.validation"></Message>

#### Cause

This error occurs when you try to use a Table widget's property inside the Table column validation. For example, using `Table1.updatedRow` inside the column validation property creates a cyclic dependency. This means that the validation logic relies on a property that is itself dependent on the result of the validation, causing an infinite loop of dependencies.

#### Solution

To resolve this issue, use `{{currentRow.name}}` in the Table column validation property instead of `Table1.updatedRow` or `Table1.newRow`. 

