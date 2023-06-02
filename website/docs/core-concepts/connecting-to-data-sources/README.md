# Connecting to Datasources

Appsmith offers plug-and-play support for many databases and the RESTful API interface for seamless integration with other tools. Whether you're working with a traditional database like MySQL or a more modern tool like S3, Appsmith makes it easy to connect and start working with your data right away. Connecting to a datasource is a necessary step before data can be visualized, transformed, or otherwise utilized. 

:::info
Appsmith encrypts all your datasource credentials and stores them securely. Appsmith also doesn't store any data returned from your datasources and acts only as a proxy layer to orchestrate the execution of Queries. As Appsmith is an open source framework, you can [deploy it on-premise](/getting-started/setup), and audit it to ensure none of your data leaves your VPC. For more information, see [Security](/product/security#security-measures-within-appsmith). 
:::

To connect to a datasource, 

* Navigate to **Explorer**
* Click the **+** icon (next to Datasources) 
* Select the **datasource**. 


![Connecting to Datasources](</img/connecting-to-data-sources.png>)

After creating and configuring a datasource, you can query the datasource and bind the results in the [UI](/core-concepts/building-ui) to [display data](/core-concepts/data-access-and-binding).

Datasources configured within an application can be accessed by all the developers who are members of the workspace. 


<div class="containerGridSampleApp">

   <div class=" containerColumnSampleApp columnGrid column-one">
    <div class="containerCol">
         <img class="containerImage" src="/img/db-icon.png" style= {{width:"50px", height:"50px", 'margin-bottom': "4px", 'margin-top': "8px"}} alt="quickstart"/>
      </div> 
      <b><a href="/core-concepts/connecting-to-data-sources/connecting-to-databases">Databases</a></b>
      <div class="containerDescription">
      </div>
   </div>

   <div class="containerColumnSampleApp columnGrid column-two">
   <div class="containerCol">
         <img class="containerImage" src="/img/api-icon.png" style= {{width:"50px", height:"50px", 'margin-bottom': "4px", 'margin-top': "8px"}} alt="support"/>
      </div>
      <b><a href="/core-concepts/connecting-to-data-sources/authentication">APIs</a></b>
      <div class="containerDescription"> 
      </div>
   </div>

   <div class="containerColumnSampleApp columnGrid column-three">
   <div class="containerCol">
         <img class="containerImage" src="/img/query-icon.png" style= {{width:"60px", height:"60px", margin:"0"}} alt="support"/>
      </div>
      <b><a href="/core-concepts/data-access-and-binding/querying-a-database">Queries</a></b>
      <div class="containerDescription"> 
      </div>
   </div>
  
</div> 



