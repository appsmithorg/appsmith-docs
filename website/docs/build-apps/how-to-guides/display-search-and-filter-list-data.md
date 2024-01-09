---
description: This page shows you how to display and lookup data in a List widget.
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Display and Lookup Data in List
This page shows you how to display and lookup data in a List widget.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/kwZhZ9LAfXt91MmT9MFz?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

## Prerequisites
- A datasource containing the data to display and filter. See [Connect datasource](/getting-started/tutorials/the-basics/connect-query-display-data#connect-datasource) for a tutorial.

## Display data
To display data in a List widget, follow these steps:
1. In the widget's property pane, set the **Items** property under **Data**.

   Example:
   ```jsx
   {{fetch_users.data}}
   ```
   Where `fetch_users` is the query to fetch data from the connected datasource.

2. Add widgets within the List and use the [currentItem](/reference/widgets/list#currentitem-object) reference property to bind data to the List items from the query.

   Example:
   ```jsx
   {{currentItem.name}}
   ```
   To rearrange widgets within a List item, drag and drop them within the first item to rearrange the order. Once you arrange the widgets in the first List item, the subsequent items automatically update with the same arrangement.
3. To set up pagination, enable the **Server side pagination** property for pagination. To set up the server-side pagination manually, follow the instructions in [Setup Server-Side Pagination on List](/build-apps/how-to-guides/Setup-Server-side-Pagination-on-List).


## Format list item
Highlighting list cells enables you to visually distinguish specific cells from others.
To highlight items of the List, follow these steps:
1. Select the first item in the widget and click **Style** in the widget's property pane. 
2. In **Background color**, set the item color.

   Example:
   ```jsx
   {{currentItem.user_status === "active" ? "green" : "orange"}}
   ```
   To customize each item of the List widget, see [Style properties](/reference/widgets/list#style-properties).

## Search list data
To configure search on List, follow these steps:
1. Drop an Input widget to the canvas.
2. Modify the fetch query in [Display data](#display-data) to fetch data corresponding to the search text.
   
   Example:

   ```sql
   SELECT * FROM users WHERE name LIKE {{ "%" + np_search.searchText + "%"}};
   ```
3. Add an Action selector to the **onTextChanged** event of the Input widget to run the above query.

## Filter List data
To configure search on List, follow these steps:
1. Drop a Select widget and bind data to the widget in the **Source Data** property using a query.

   Example:
   ```sql
   SELECT DISTINCT name from users;
   ```
2. Set the **Label key** and **Value key** properties and enable the [Server-side filtering](/reference/widgets/select#server-side-filtering-boolean) property of the widget.
3. Modify the List widget's fetch query to fetch data using the [filterText](/reference/widgets/select#filtertext-string) property of the Select widget.
   
   Example:
   ```sql
   SELECT * FROM users 
   WHERE name LIKE '%{{filter.filterText}}%'
   ORDER BY id LIMIT 10;
   ```
   :::info
   When prepared statements are enabled and widget bindings are used, quotes are not required.
   :::

4. Add an **Action** to the Select widget's [onFilterUpdate](/reference/widgets/select#onfilterupdate) event to run the above query to filter List data.

## Nested list
You can nest lists within a List widget up to three levels deep. Each nested level can interact with its parent data through specific properties. 

### Access parent data from a child list
To access a parent list item's attributes or widget properties within a child list, use the [level_*](/reference/widgets/list#level_-object) property, where `*` is the level number (1 through 3).

For example:

Suppose you have a parent list named `parentList`.

You have a nested child list within `parentList` called `childList1`.

Widgets within `childList1` can access an attribute from `parentList` by using:
```jsx
{{level_1.currentItem.fieldName}}
```


Similarly, you can use [currentView](/reference/widgets/list#currentview-object) and [currentIndex](/reference/widgets/list#currentindex-number) properties to access the current state and position of the parent list's item.

### Access multiple parent levels
If there is another List widget, say `childList2`, inside `childList1`, the innermost list `childList2` can access properties from both `parentList` and `childList1`.

Here's how the levels correspond:

level_1 corresponds to the `parentList` data and state.

level_2 corresponds to `childList1` data and state.

Example of accessing data from both parent and first-level child list: 
```jsx
{{level_2.currentItem.fieldName}}
```
:::note
Parent List widgets cannot access their child lists' data.
:::