---
sidebar_position: 10
---

# Return Data from Stored Procedure

If your stored procedure is returning a set of rows, it may not be displayed inside Appsmith today due to some limitations in the platform. To get around these limitations, you need to add a dummy select statement at the end of the procedure call to return the results of the procedure.

The query would look like

```sql
call test2('BA01'); 
select "dummy" as dummy where false;
```
