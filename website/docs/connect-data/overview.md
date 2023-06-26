---
description: This is an overview of working with datasources and queries on Appsmith.
---

# Overview

Datasources are essential to every application and are used to store and manage data. On Appsmith, you can directly connect to [supported datasources](/connect-data/reference) and execute queries to read and write data. Appsmith can also seamlessly connect with most other tools through the RESTful API plugin. See [Third-party Integrations](/connect-data/integrations) for more information.

:::info
Appsmith encrypts all your datasource credentials and stores them securely. Appsmith also doesn't store any data returned from your datasources and acts only as a proxy layer to orchestrate the execution of queries. Additionally, you can [self-host Appsmith](/getting-started/setup) to ensure that no data leaves your machine or VPC. For more information, see [Security](/product/security#security-measures-within-appsmith).
:::

Datasources connected and configured within an application can be accessed by all other applications in the same workspace, depending on the user's roles and access permissions.

Appsmith provides sample datasets to help you connect the data and explore the platform:

* **API** - `https://mock-api.appsmith.com`
* **PostgreSQL** - `users` table
* **MongoDB** - `movies` collection

The sample datasets are public and shared by all Appsmith users, so ensure you don't input confidential information during testing. The datasources are automatically reset daily, so any updates are only temporary.


<div class="containerGridSampleApp">
   <div class="containerColumnSampleApp columnGrid column-one">
    <div class="containerCol">
      </div> 
      <b><a href="/connect-data/how-to-guides">How-to Guides</a></b>
      <div class="containerDescription">
      Directions and step-by-step guides covering key operations and common tasks.
      </div>
   </div>

   <div class="containerColumnSampleApp columnGrid column-two">
   <div class="containerCol">
      </div>
      <b><a href="/connect-data/reference"> Reference</a></b>
      <div class="containerDescription"> Technical descriptions and information about datasources and queries.
      </div>
   </div>
</div>

<div class="containerGridSampleApp">
   <div class="containerColumnSampleApp columnGrid column-one">
    <div class="containerCol">
      </div> 
      <b><a href="/connect-data/concepts">Concepts</a></b>
      <div class="containerDescription"> Explanation and clarification of key topics.
      </div>
   </div>
   <div class="columnGrid column-two" style={{margin: "10px"}}>
   </div>
</div>
