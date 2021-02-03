---
description: >-
  This is a context object that provides information around the current state of
  the application
---

# appsmith

## Properties

The appsmith context object contains the following properties

```text
{
   store: object,
   URL: object,
   user: object,
   mode: enum
}
```

### Store 

This object contains the key-value pairs of the local storage of the application. Values to the store can be updated using the [storeValue function](store-value.md). Values from the store can be accessed using their key

```text
{{ appsmith.store.key }}
```

### URL

This object contains all the values associated with the current URL that the user is on. The queryParams object of this field can be used to read data sent from other pages to this page using the [navigateTo function](navigateto.md)

```text
{
  host: string,
  hostName: string,
  fullPath: string,
  pathName: string,
  port: string,
  protocol: string,
  hash: string,
  queryParams: object
}
```

### User

This object contains the data of the currently authenticated user.

```text
{
  email: string
}
```

### Mode

This field is an enum that contains whether the application is currently running in view mode or edit mode. It takes the values VIEW\|EDIT

