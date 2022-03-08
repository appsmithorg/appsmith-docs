# Cheat Sheet

This document contains a list of handy JS snippets that are used across applications. The snippets are not meant to be plug and play but indicative of the way code can be written to achieve the desired outcome

## Table Data

Access an inner array object

```javascript
{{ fetch_users.data.users }}
```

Transform an array of data to a cleaner format

```javascript
{{ 
  fetch_users.data.map((user) => { 
      return {
         name: user.name,
         age: user.age,
         status: user.status === 1 ? "Approved" : "Rejected"
      }  
  }, 0) 
}}
```

## Chart Data

Transforming aggregate data

```javascript
{{
 fetch_user_stats.data.map((stat) => {
   return {
     x: stat.name,
     y: stat.count
   }
 })
}}
```

Aggregating data where the x values are fixed

```javascript
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

## Default Date

Setting the default date to yesterday

```javascript
{{ moment().add(-1, "days") }}
```

## Filepicker

The below code converts a CSV file uploaded to an array of objects

```javascript
{{
function() {
    const csvRows = FilePicker1.files[0].data.split("\\n");
    const objArr = [];
    const headers = csvRows[0].split(',');
        for(let i = 1; i < csvRows.length; i++) {
            const rowObj = {};
            objArr.push(rowObj);
            const rowArr = csvRows[i].split(',');
            rowArr.forEach((val, index) => {
                rowObj[headers[index]] = val;
            });
        }
    return objArr;
}()
}}
```

## Navigation

Sending data via query params

```javascript
{{ navigateTo("Page1", { id: Table1.selectedRow.id }) }}
```

Opening External Web Pages

```javascript
{{ navigateTo("https://appsmith.com") }}
```

## Chaining Actions

Running Queries on success and showing errors on failure

```javascript
{{
  Query1.run(() => {
    Query2.run();
  }, () => {
     showAlert("Query Failed")
  })
}}
```

## Running APIs/Queries in a loop

Fetching all the details of every user in the table and storing it

```javascript
{{
   function() {
     for(let i = 0; i < userTable.tableData.length; i++) {
        fetch_user_details.run((response, params) => {
           storeValue(params.userId, response);
        }, () => {
        }, { userId: userTable.tableData[i].id })
     }
   }()
}}
```
