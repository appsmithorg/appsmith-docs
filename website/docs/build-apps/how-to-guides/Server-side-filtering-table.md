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
* A widget which can be used t apply filter like selec, checkbox or slider. for this guide we will be suing select widget. 

## Configure query

To implement server-side filtering, you can use widgets such as the [Select](/reference/widgets/select/), [Checkbox](/reference/widgets/checkbox), [Sliders](/reference/widgets/category-slider) and other similar widgets that allow users to select from a variety of available filters.

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

* Set the Select widget's **onOptionChange** event to execute the fetch query. Make sure that the fetch query is connected to the Table widget.


* Update the **Default selected value** property to align with the value provided by the option.




 