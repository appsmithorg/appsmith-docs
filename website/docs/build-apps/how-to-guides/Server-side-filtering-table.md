---
description: This page shows you how to set up server-side filtering on a Table widget, which allows you to refine query results based on specific criteria.
---

# Setup Server-side Filtering on Table

This page shows you how to set up server-side filtering on a Table widget, which allows you to refine query results based on specific criteria.

Server-side filtering involves using a value to narrow down the results of a query in a similar way to server-side searching. However, instead of searching for a specific term, the selected value is used to filter out unwanted data from the requested dataset. 

 <figure>
  <img src="/img/table-filter-1.gif" style= {{width:"810px", height:"auto"}} alt="Server-side Filtering on Table"/>
  <figcaption align = "center"><i>Server-side Filtering on Table</i></figcaption>
</figure>

## Prerequisites

* A [Table](/reference/widgets/table) widget connected to a query.
* A widget for applying filters, such as a [Select](/reference/widgets/select/), [Checkbox](/reference/widgets/checkbox), or [Sliders](/reference/widgets/category-slider). For this guide, let's use the Select widget as an example.


## Configure query

To implement server-side filtering, you can use widgets such as the Select, Checkbox, Sliders and other similar widgets that allow users to select from a variety of available filters.

<dd>

*Example*: If you want to filter table data based on specific criteria, such as gender, you can use a Select widget with the required option.

 Configure the query to fetch data using [selectedOptionValue](/reference/widgets/select#selectedoptionvalue-string) reference properties:

  * For PostgreSQL, you can configure the query as follows:

    ```sql
    SELECT * FROM users WHERE gender = {{Select1.selectedOptionValue}};
    ```

  * For the REST API, configure query parameter as shown in the URL:

    ```
    https://mock-api.appsmith.com/users?gender={{Select1.selectedOptionValue}}
    ```

</dd>

## Configure Select widget

Follow these steps to configure the Select widget to display fetched data, and implement server-side filtering:

* Set the Select widget's [**onOptionChange**](/reference/widgets/select#onoptionchange) event to execute the fetch query. Make sure that the fetch query is connected to the Table widget.


* Update the [**Default selected value**](/reference/widgets/select#default-selected-value-string) property to align with the value provided by the option.


After completing these steps, you can use the Select widget to filter data and display the filtered results in the Table widget.



Check out this sample app for [Server Side Filtering](https://app.appsmith.com/applications/61fbdf232cd3d95ca414b805/pages/61fbdf232cd3d95ca414b808?_gl=1*msr6dt*_ga*MTg0NzgzMjE2LjE2NjE3NTIyMzM.*_ga_D1VS24CQXE*MTY5NTk3MzA0Ni4zNjAuMS4xNjk1OTc0MjE0LjAuMC4w).




