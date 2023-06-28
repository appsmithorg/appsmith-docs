---
description: This page shows you how to create queries on Appsmith.
sidebar_position: 2
---

# Query Data

This page shows you how to create queries on Appsmith. You should [connect the datasource](/connect-data/how-to-guides/connect-datasource) before creating queries.

1. Click the **Explorer** tab on the entity explorer to the screen’s left. 

2. You can create queries in two ways: 
    - Expand the **Datasources** section**.** Select the name of your datasource. Click the **+ New Query** button on the top right of the page.
    <figure>
     <img src="/img/creating-query-from-datasource-section.png" style= {{width:"1024px", height:"auto"}} alt="Creating query from Datasource section"/>
     <figcaption align = "center"><i>Creating query from Datasource section</i></figcaption>
    </figure>
    - Click the **+** icon next to next to **Queries/JS.** Select the datasource name from the **Create new** list.
    <figure>
     <img src="/img/creating-query-from-query-js-section.png" style= {{width:"1024px", height:"auto"}} alt="Creating query from Query/JS section"/>
     <figcaption align = "center"><i>Creating query from Query/JS section</i></figcaption>
    </figure>

3. Rename the query to be able to identify it when binding data.

4. For SQL databases (PostgreSQL, MySQL, MS SQL, etc.), you can write SQL queries in the query editor. For NoSQL databases(MongoDB, DynamoDB, Redis, etc.) and API datasources (REST API, GraphQL, Airtable, etc.), you need to set the required parameters to query the datasource. For examples of SQL queries and a complete description of the connection parameters, see the [Reference guide](/connect-data/reference).

5. You can click the **Run** button or hit `Cmd+Enter` to test if the query runs successfully. Appsmith doesn't store any data returned from your datasources and acts only as a proxy layer to orchestrate the execution of queries.