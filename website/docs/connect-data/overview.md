---
description: This is an overview of working with datasources and queries on Appsmith.
---

# Overview

Datasources are used to connect to your external databases & APIs. Appsmith can connect to a variety of [Datasources](/connect-data/reference) and any REST API. Queries can be created on top of datasources to read and write data from them. Queries interact with widgets via javascript to display and capture data.

## Security

Appsmith encrypts all your datasource credentials and stores them securely. Appsmith doesn't store any data returned from your datasources and acts only as a proxy layer to orchestrate the execution of queries. Read about our [Security Measures](/product/security#security-measures-within-appsmith).

Datasources connected and configured within an application can be accessed by all other applications in the same workspace, depending on the user's roles and access permissions.

## Sample datasets

Appsmith provides sample datasets to help you connect the data and explore the platform. The sample datasets are public and shared by all Appsmith users, so ensure you don't input confidential information during testing. The datasources are automatically reset daily, so any updates are only temporary.

- **API** - `https://mock-api.appsmith.com`
- **PostgreSQL** - `users` table
- **MongoDB** - `movies` collection

<div class="containerGridSampleApp">
   <div class="containerColumnSampleApp columnGrid column-one">
    <div class="containerCol">
      </div> 
      <b><a href="/connect-data/how-to-guides">How-to Guides</a></b>
      <div class="containerDescription">
         Guides on how to connect to your datasources.
      </div>
   </div>

   <div class="containerColumnSampleApp columnGrid column-two">
   <div class="containerCol">
      </div>
      <b><a href="/connect-data/reference"> Reference</a></b>
      <div class="containerDescription"> Technical information about datasources and queries.
      </div>
   </div>
</div>

<div class="containerGridSampleApp">
   <div class="containerColumnSampleApp columnGrid column-one">
    <div class="containerCol">
      </div> 
      <b><a href="/connect-data/concepts">Concepts</a></b>
      <div class="containerDescription"> Explanation of datasources & queries.
      </div>
   </div>
   <div class="columnGrid column-two" style={{margin: "10px"}}>
   </div>
</div>
