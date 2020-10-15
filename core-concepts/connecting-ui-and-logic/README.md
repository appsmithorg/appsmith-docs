---
description: >-
  Every widget, API & query is exposed as an object which can be used to write
  logic
---

# Connecting UI & Logic

Javascript can be used almost anywhere in Appsmith inside **`{{ }}.`** The value evaluated inside the mustache is substituted in the field it is written in. This allows you to creatively configure different parts of your application.

## Widget Properties

```javascript
Hello {{usersTable.selectedRow.name}}
```

Adding the above text to a text widget will display "Hello John Doe" if **usersTable** has a row selected with a column where the name is John Doe.

Similarly, Logic can be added to this example to display something if no row is selected

```javascript
{{usersTable.selectedRow ? "Hello " + Table1.selectedRow.name : "Select a user" }}
```

Read More about [talking to other widgets](../building-the-ui/talking-to-other-widgets.md)

## APIs

Similar to the above example, the params, body & headers of an API can be substituted with a value from a widget or another part of the application. You can also choose to only substitute a part of the post body so that it's easy to configure the structure of your API. **The resulting post body must still be a valid JSON so the substitution must be surrounded by quotes**

```javascript
// Post Body
{
  "name": "{{nameInp.text}}"
}
```

Read More about[ taking inputs from widgets](../apis/taking-inputs-from-widgets.md)

## Queries

Values can be passed to a query by using the substitution syntax inside the query

```javascript
select * from users where name ilike '%{{searchInput.text}}%'
```

API / Query data can also be displayed inside widgets using the  substituted inside the widget property. Sometimes there is a mismatch in the data format of the response data and the format that the widget requires. You can overcome this by [transforming the data ](../building-the-ui/displaying-api-data.md#transforming-api-query-data)inside the widget property using javascript

