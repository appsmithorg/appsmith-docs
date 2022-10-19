# Display Data in Tables

The [Table Widget](../../../reference/widgets/table/) helps us visualize rows of information that are returned from our data sources. We make use of the Table Data property to display data in the table.

![](<../../../.gitbook/assets/bind-table (2) (4) (8) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (3) (9) (1) (1) (1) (1) (1) (1) (1) (1) (11) (11) (11) (12).gif>)

## Pagination

Tables are generally required to display large data sets from [Queries](../querying-a-database/) and [APIs](../../connecting-to-data-sources/authentication/) yet browsers cannot load all the data present in our database. To paginate this data, we can:

1. Enable the server-side pagination property in the table
2. Call the API / Query onPageChange
3. Configure pagination in the API / Query

### Offset Based Pagination

This method uses the Table's page number to determine the offset of the records to fetch from the database. This method relies on the pageNo and pageSize fields of the [Table](../../../reference/widgets/table/) and is used in both APIs and Queries.

The pageNo and pageSize can be used in the API / Query by referencing them inside `{{ }}`

```sql
select * from users limit {{ Table1.pageSize }} offset {{ (Table1.pageNo - 1) * Table1.pageSize }}
```

```
https://mock-api.appsmith.com/users?page={{Table1.pageNo}}
```

### Key Based Pagination

This method uses a value in the response of the API as the key to the next API call. This can be configured in the API settings by providing the Next & Previous URLs that the API should execute onPageChange.

![](<../../../.gitbook/assets/pagination (2) (2) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (3) (1) (1) (1) (1) (1) (1) (1) (1) (3) (3) (3) (4).gif>)

## Server-Side Searching / Filtering

[Tables](../../../reference/widgets/table/) come with client-side searching, and filtering out of the box. To perform these operations [server-side](../../../reference/widgets/table/#setup-server-side-search), we have to pass these values to the API / Query.

#### Searching

1. Call the API / Query onSearchTextChange from the Table
2. Pass the value of the Table's searchText to the API / Query

```sql
select * from users where name ilike {{"%" + Table1.searchText + "%"}}
```

```
https://mock-api.appsmith.com/users?name={{Table1.searchText}}
```

#### Filtering

[Server-side filtering](../../../learning-and-resources/how-to-guides/how-to-use-filters-on-appsmith-table-widget.md) requires us to use another widget like a dropdown which can provide users a list of filters that our APIs support.

1. Drag a dropdown and populate it with filter values
2. Call the API / Query onOptionChange from the Table
3. Pass the value of the Dropdown's selectedOptionValue to the API / Query

```sql
select * from users where gender = {{genderDropdown.selectedOptionValue}}
```

```
https://mock-api.appsmith.com/users?gender={{genderDropdown.selectedOptionValue}}
```

## Transforming Table Data

Some API / Query responses might have nested, unnecessary, or poorly formatted fields. These can be easily transformed inside the table data property by mapping over the data using javascript.

#### Example Github API

```
https://api.github.com/repos/appsmithorg/appsmith/issues
```

Binding this APIs response directly to a table would be unreadable like the image below

![](<../../../.gitbook/assets/github table.gif>)

To format this data, we can simply write a map function over the API response and return an array of objects with only the fields we want to display. We can also format these fields how we'd like using javascript

```javascript
{{ 
    fetch_issues.data.map((issue) => {
    return {
        user: issue.user.login,
        assignees: issue.assignees.map((assignee) => assignee.login).join(","),
        title: issue.title,
        number: "#" + issue.number,
    };
    });

}}
```

![](<../../../.gitbook/assets/github table formatted.png>)
