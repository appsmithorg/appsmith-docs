# Connecting to Datasources

Appsmith offers plug-and-play support for many databases and the RESTful API interface for seamless integration with other tools. Whether you're working with a traditional database like MySQL or a more modern tool like S3, Appsmith makes it easy to connect and start working with your data right away. Connecting to a datasource is a necessary step before data can be visualized, transformed, or otherwise utilized. 

To create a datasource, navigate to **Explorer** >> Click on the **+** icon (next to Datasources) >> Select the datasource. After creating and configuring a datasource, you can query the datasource and bind the response in the [UI](/core-concepts/building-ui) to [display data](/core-concepts/data-access-and-binding) or store the information entered by users into the datasource.


In Appsmith, data sources are divided into two categories:

<div class="containerGridSampleApp">

   <div class=" containerColumnSampleApp columnGrid column-one">
    <div class="containerCol">
         <img class="containerImage" src="/img/icons8-database-40.png" alt="quickstart"/>
      </div> 
      <b><a href="/core-concepts/connecting-to-data-sources/connecting-to-databases">Databases</a></b>
      <div class="containerDescription">
      </div>
   </div>
   

   <div class="containerColumnSampleApp columnGrid column-three">
   <div class="containerCol">
         <img class="containerImage" src="/img/icons8-api-35.png" alt="support"/>
      </div>
      <b><a href="core-concepts/connecting-to-data-sources/authentication/">REST APIs</a></b>
      <div class="containerDescription"> 
      </div>
   </div>
  
</div> 


## Databases
Databases are an essential part of many applications and are used to store and manage data. You can run queries to read and write data directly from the Appsmith editor. Following databases are supported by Appsmith:



<div class="containerGrid">
    <div class="columnGrid column-one" align="center">
        <div class="containerCol">
            <a href="reference/datasources/querying-postgres">
            <img class="containerImage" src="/img/postgresql.svg" alt="postgresql"/>
            </a> 
        </div> 
        <b><a href="/reference/datasources/querying-postgres">PostgreSQL</a></b>
    </div>
   <div class="columnGrid column-two" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/querying-mongodb">
            <img class="containerImage" src="/img/mongodb.svg" alt="Kubernetes-logo"/>
            </a>     
        </div> 
         <b><a href="/reference/datasources/querying-mongodb">MongoDB</a></b>
    </div>
   <div class="columnGrid column-three" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/querying-mysql">
            <img class="containerImage" src="/img/mysql.svg" alt="AWS-AMI-logo"/>
            </a>   
        </div> 
            <b><a href="/reference/datasources/querying-mysql">MySQL</a></b>
   </div>
  <div class="columnGrid column-three" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/querying-elasticsearch">
            <img class="containerImage" src="/img/elastic.svg" alt="AWS-AMI-logo"/>
            </a>   
        </div> 
            <b><a href="/reference/datasources/querying-elasticsearch">Elasticsearch</a></b>
   </div>



   
   
</div>

<div class="containerGrid">
    <div class="columnGrid column-one" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/querying-redis">
            <img class="containerImage" src="/img/redis.svg" alt="Docker-logo"/>
            </a> 
        </div> 
        <b><a href="/reference/datasources/querying-redis">Redis</a></b>
    </div>
   <div class="columnGrid column-two" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/querying-mssql">
            <img class="containerImage" src="/img/mssql.svg" alt="Kubernetes-logo"/>
            </a>     
        </div> 
         <b><a href="/reference/datasources/querying-mssql">Microsoft SQL Server</a></b>
    </div>
   <div class="columnGrid column-three" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/querying-firestore">
            <img class="containerImage" src="/img/firestore.svg" alt="AWS"/>
            </a>   
        </div> 
            <b><a href="/reference/datasources/querying-firestore">Firestore</a></b>
   </div>
  <div class="columnGrid column-three" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/querying-redshift">
            <img class="containerImage" src="/img/aws-redshift.svg" alt="AWS-AMI-logo"/>
            </a>   
        </div> 
            <b><a href="/reference/datasources/querying-redshift">Redshift</a></b>
   </div>
  


   
   
</div>

<div class="containerGrid">

 <div class="columnGrid column-three" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/querying-amazon-s3">
            <img class="containerImage" src="/img/aws-s3.svg" alt="AWS-AMI-logo"/>
            </a>   
        </div> 
            <b><a href="/reference/datasources/querying-amazon-s3">S3</a></b>
   </div>
   
 <div class="columnGrid column-three" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/querying-dynamodb">
            <img class="containerImage" src="/img/aws-dynamodb.svg" alt="AWS-AMI-logo"/>
            </a>   
        </div> 
            <b><a href="/reference/datasources/querying-dynamodb">DynamoDB</a></b>
   </div>

 <div class="columnGrid column-one" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/querying-snowflake-db">
            <img class="containerImage" src="/img/snowflake.svg" alt="Docker-logo"/>
            </a> 
        </div> 
        <b><a href="/reference/datasources/querying-snowflake-db">Snowflake</a></b>
    </div>
   <div class="columnGrid column-two" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/querying-arango-db">
            <img class="containerImage" src="/img/arangodb_.png" alt="Kubernetes-logo"/>
            </a>     
        </div> 
         <b><a href="/reference/datasources/querying-arango-db">ArangoDB</a></b>
    </div>
 

</div>

<div class="containerGrid">

   <div class="columnGrid column-three" align="center">
        <div class="containerCol">
            <a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">
            <img class="containerImage" src="/img/smtp-icon_1.png" alt="AWS-AMI-logo"/>
            </a>   
        </div> 
            <b><a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">SMTP</a></b>
</div>
</div>

Learn More about [Databases](/core-concepts/connecting-to-data-sources/connecting-to-databases)

## APIs
With appsmith, you can connect with a wide range of tools and platforms; if there isn't a supported datasource, you can connect using the REST API. Following APIs are supported by Appsmith:



<div class="containerGrid">
    <div class="columnGrid column-one" align="center">
        <div class="containerCol">
            <a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">
            <img class="containerImage" src="/img/api-logo_.png" alt="RestAPI"/>
            </a> 
        </div> 
        <b><a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">Rest API</a></b>
    </div>
   <div class="columnGrid column-two" align="center">
        <div class="containerCol">
            <a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">
            <img class="containerImage" src="/img/Curl-logo.svg_.png" alt="curl-logo"/>
            </a>     
        </div> 
         <b><a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">CURL import</a></b>
    </div>
   <div class="columnGrid column-three" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/graphql">
            <img class="containerImage" src="/img/graphqllogo.png" alt="GraphQL"/>
            </a>   
        </div> 
            <b><a href="/reference/datasources/graphql">GraphQL API</a></b>
   </div>


</div>

<div class="containerGrid">
    <div class="columnGrid column-one" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/airtable">
            <img class="containerImage" src="/img/Airtable-logo.png" alt="Airtable"/>
            </a> 
        </div> 
        <b><a href="/reference/datasources/airtable">Airtable</a></b>
    </div>
   <div class="columnGrid column-two" align="center">
        <div class="containerCol">
            <a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">
            <img class="containerImage" src="/img/twilio_.png" alt="twilio-logo"/>
            </a>     
        </div> 
         <b><a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">Twilio</a></b>
    </div>
   <div class="columnGrid column-three" align="center">
        <div class="containerCol">
            <a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">
            <img class="containerImage" src="/img/hubspot_.png" alt="hubspot-logo"/>
            </a>   
        </div> 
            <b><a href="/reference/datasources/querying-mongodb/">HubSpot</a></b>
   </div>


</div>

  <div class="columnGrid column-three" align="center">
        <div class="containerCol">
            <a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">
            <img class="containerImage" src="/img/gsheets_.png" alt="GoogleSheets"/>
            </a>   
        </div> 
            <b><a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">Google Sheets</a></b>
   </div>
   



   
   
Learn More about [APIs](/core-concepts/connecting-to-data-sources/authentication/)









