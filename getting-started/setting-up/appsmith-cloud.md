---
description: The fastest way to get started with appsmith is using the cloud version
---

# Appsmith Cloud

1. [Create an account](https://app.appsmith.com)
2. Create a new app within the organization that has already been created for you.
3. Click on the `+` icon next to the `DB Queries` section to add a new query to the example database
   1. Name the query `usersQuery`.
   2. Write the query `select * from users limit 5;`.
   3. Run the query.
   4. Switch to the `Settings` tab, and enable `Run Query on Page Load`.
4. Click on the `+` icon next to the `Widgets` section and drag a table onto the screen
5. Link the table data property to the `usersQuery` using JavaScript `{{usersQuery.data}}`
6. Hit the Deploy button and check out the view mode of the app.

{% page-ref page="../tutorial-1/" %}



