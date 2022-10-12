---
sidebar_position: 10
---

# Returning data from a stored procedure

If your stored procedure is returning a set of rows, it may not be displayed inside appsmith today due to some limitations in the platform. To get around these limitations, we need to add a dummy select statement at the end of the p rocedure call to return the results of the procedure.

The query would look like

```
call test2('BA01'); 
select "dummy" as dummy where false;
```
