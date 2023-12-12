---
description: This page shows you how to display and lookup data in a List widget. 
---

# Display and Lookup Data in List

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/h3qV8jRXuy6LcNNIjeEo?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

This page shows you how to display and lookup data in a List widget.
## Prerequisites
- A datasource containing the data to display and filter. See [Connect datasource](/getting-started/tutorials/the-basics/connect-query-display-data#connect-datasource) for a tutorial. For the list of datasources supported by Appsmith, see [Datasources](/connect-data/reference).

## Display data
To display data in a List widget, follow these steps:
1. In the widget's property pane, set the **Items** property under **Data**.

   Example:
   ```jsx
   {{fetch_users.data}}
   ```
   Where `fetch_users` is the query to fetch data from the connected datasource.

   To nest lists within a List widget, see [Create Nested Lists](build-apps/how-to-guides/Create-Nested-Lists).
2. Use the `currentItem` property to configure the items after the data is bound.

   Example:
   ```jsx
   {{currentItem.name}}
   ```
3. To rearrange widgets within a List item, drag and drop them within the first item to rearrange the order. Once you arrange the widgets in the first List item, the subsequent items automatically update with the same arrangement.
4. To customize each widget within the List, go to the widget's property pane and set the properties like **Data**, **Visible**, and configure events associated with the widgets.
5. To set up pagination, enable the **Server side pagination** property for pagination. To set up the server-side pagination manually, follow the instructions in [Setup Server-Side Pagination on List](/build-apps/how-to-guides/Setup-Server-side-Pagination-on-List).


## Format list cells
Highlighting list cells enables you to visually distinguish specific cells from others.
To highlight items of the List, follow these steps:
1. Select the first item in the widget and click **Style** in the widget's property pane. 
2. In **Background color**, set the item color.

   Example:
   ```jsx
   {{currentItem.user_status === "active" ? "green" : "orange"}}
   ```
   To customize each item of the List widget, see [Style properties](/reference/widgets/list#style-properties).

## Configure search on List
To configure search on List, follow these steps:
1. Drop a Container widget and then add a List widget and an Input widget to the Container.
2. Bind data to the List by following the steps in the [Display data](#display-data) section.
3. Add a JS object and add code to filter the List data based on the search text in the Input widget.
   Example:
   ```jsx
   export default {
	searchByName: () => {
		if(searchName.text.length==0){
			return getUsers.data
		}
		else{
			return(getUsers.data.filter(word => word.first_name.toLowerCase().includes(searchName.text.toLowerCase())))
		}
	}
   ```
## See also
- [Sample apps](/learning-and-resources/sample-apps)
