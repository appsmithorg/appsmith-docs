# Postgres Errors


### Error determining data type of parameter in Prepared Statement


```
ERROR: could not determine data type of parameter $x
```

Errors like this are thrown while using Prepared Statements. This is caused because PostgreSQL server is unable to determine the data type to use. To overcome this, one needs a typecast with supported postgres data types.

For example, for an erroneous query like below : 

```sql
SELECT * FROM users 
WHERE (
  ((gender IS NULL AND {{!Dropdown1.selectedOptionValue ? Dropdown1.selectedOptionValue : null }} IS NULL)))
;
```

This evaluates to the following prepared query : 
```sql
SELECT * FROM users 
WHERE (
  ((gender IS NULL AND $1 IS NULL)))
;
```

When executed, it throws the following error :
```
ERROR: could not determine data type of parameter $1
```

This can easily be solved by typecasting this as a string (text) because we expect the underlying data to be of type String. So the corrected query would look like the following :

```sql
SELECT * FROM users 
WHERE (
  ((gender IS NULL AND {{!Dropdown1.selectedOptionValue ? Dropdown1.selectedOptionValue : null }}::text IS NULL)))
;
```

This evalautes to the following prepared query : 
```sql
SELECT * FROM users 
WHERE (
  ((gender IS NULL AND $1::text IS NULL)))
;
```

Typecasting fixes the error and the query executes successfully!

