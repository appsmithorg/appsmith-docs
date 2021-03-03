# Cheat Sheet

This document contains a list of handy JS snippets that are used across applications. The snippets are not meant to be plug and play but indicative of the way code can be written to achieve the desired outcome

## Widget Transformations

### Table Data

```text
// Access an inner array object
{{ fetch_users.data.users }}
```

```text
// Transform an array of data to a cleaner format
{{ fetch_users.data.map((user) => { 
      return {
         name: user.name,
         age: user.age,
         status: user.status === 1 ? "Approved" : "Rejected"
      }  
  }, 0) 
}}
```

### Chart Data

```text
// Transforming aggregate data
{{
 fetch_user_stats.data.map((stat) => {
   return {
     x: stat.name,
     y: stat.count
   }
 })
}}
```

```text
// Aggregating data where the x values are fixed
[{
  "x": "Approved Users",
  "y": fetch_users.data.reduce((acc, user) => { 
         return user.status === 1 ? acc + 1 : acc
      })
},
{
  "x": "Rejected Users",
  "y": fetch_users.data.reduce((acc, user) => { 
         return user.status === = ? acc + 1 : acc
      }, 0)
}]
```

### Default Date

```text
// Setting the default date to yesterday
{{ moment().add(-1, "days") }}
```

### Navigate To another Page

```text
// Sending data via query params
{{ navigateTo("Page1", { id: Table1.selectedRow.id }) }}
```

```text
// Opening External Web Pages
{{ navigateTo("https://appsmith.com") }}
```

