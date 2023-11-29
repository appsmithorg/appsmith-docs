# Parameterised Queries

Passing parameters to queries in Appsmith allows your application to interact with data sources dynamically. It results in a more personalized and interactive experience for users, as data can be fetched or manipulated based on user input or application state.

## Using mustache syntax for static parameters

Appsmith utilizes the Mustache Binding Syntax (`{{ }}`) for passing static parameters to queries. You can refer to widget properties, JavaScript Object variables & applicaton state directly within your queries using this syntax.

### Example: Fetching user data

For a query named `GetUserData`, to fetch data based on a username input from `TextInput1`:

```sql
SELECT * FROM users WHERE username = '{{TextInput1.text}}'
```

The value within `{{TextInput1.text}}` is used when the query is executed.

## Passing parameters at runtime using `run()`

For dynamic interactions where parameters need to be passed at runtime, the `run()` function is used. This allows for parameters to be set right when an event, like a button click, occurs.

### Execution with runtime parameters

When invoking the `run()` function on a query, you can pass an object containing key-value pairs. Inside the query, these can be accessed via `this.params`.

For example, when a `SubmitButton` is pressed, invoke `SubmitQuery` with a parameter:

```
{{ SubmitQuery.run({ userInput: UserInput.text }) }}
```

### Accessing runtime parameters inside the query

The `this.params` object within `SubmitQuery` grants access to the passed parameters:

```sql
INSERT INTO submissions (user_input) VALUES ({{this.params.userInput}})
```

This binds the value of `userInput` passed at the time of the `run()` call.

:::info
Ensure the keys used in the `run()` function align with those referenced within the query. This consistency is crucial for accurate data binding.
:::

## Handling complex data types and structures

Runtime parameters aren't limited to simple data types; objects and arrays can be used as well.

### Example: Inserting user details

Passing user details as an object when a button is clicked:

```
{{
    CreateUserQuery.run({
      user: { name: UserNameInput.text, age: UserAgeInput.text },
    });
}}
```

The query `CreateUserQuery` inserts data into the `users` table:

```sql
INSERT INTO users (name, age) VALUES ('{{this.params.user.name}}', '{{this.params.user.age}}')
```

## Conclusion

Appsmith provides flexibility for passing parameters to queries both statically with Mustache Binding Syntax and dynamically using the `run()` function. This enables applications built on Appsmith to react intelligently to user interactions and provide a dynamic and secure user experience. Remember to employ best practices, including input validation, to uphold application integrity and security.
