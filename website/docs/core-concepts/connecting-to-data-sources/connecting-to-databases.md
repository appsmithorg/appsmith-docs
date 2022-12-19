---
description: >-
  You can connect to, and run queries to read and write data directly from the
  Appsmith editor.
---

# Databases

Database is a organized way to retrieve, update, and manage data. You can run queries to read and write data directly from the Appsmith editor. Following databases are supported by Appsmith:



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

## Connecting to a Database

<VideoEmbed host="youtube" videoId="sJIxtXInV14" title="How to connect to a datasource" caption="How to connect to a datasource | Example"/>


:::tip
Before connecting to a data source, you must whitelist the IP address of the Appsmith deployment on your database instance or VPC

18.223.74.85 and 3.131.104.27 are the IP addresses of the Appsmith cloud instances that need to be whitelisted

This is a guide on how to whitelist appsmith on AWS.
:::



* On the **Explorer tab**, click the **+** sign next to **Datasources**. 
* You’ll see a [list of Datasources](/reference/datasources/) that Appsmith can connect to.
* Choose a **Database/API**.
* Provide the **configuration details** required to connect to your database. You may need to contact your database administrator to [whitelist appsmith cloud](/learning-and-resources/how-to-guides/aws-whitelist).
* Click **Test** to verify that Appsmith can connect to your database using the details you provided.
* Rename and save your datasource.

Once your datasource has been added successfully, a success pop-up will appear at the top. 

### Sample database


Appsmith offer dummy database that you can use to experiment with the platform before adding your real data. You can connect to two sample datasets:

1. **Movies:** This is a sample [MongoDB](/reference/datasources/querying-mongodb/) database with a collection called movies.
2. **Users:** This is a sample [PostgreSQL](/reference/datasources/querying-postgres) database with a table called users.

:::note
The **data** in the **mock database** gets **reset** every **24 hours** and is **common** for **all users** so it may contain **some unexpected values**.
:::

To better understand how to use the sample database, lets look at an example:

<VideoEmbed host="youtube" videoId="l_MNNa9mg0w" title="Using A Sample Database " caption="How to use sample database | Example"/>

* Click on **+** next to Datasources.
* Select the **user** datasource.
* Now, click the **+** icon next to the **queries/js** and choose the user datasource.
* Add your code in the body section and **run** your query. For example:
```js
SELECT * FROM users;
```
The preceding query gets all the users data. You can use a [table widget](/reference/widgets/table) to display your data. 

:::info
Appsmith applications are **secure-by-default**. All sensitive credentials, such as database credentials, are encrypted with [**AES-256 encryption**](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard). You can read more about security in this [document](/product/security#security-measures-within-appsmith). 
:::



## What's next

At this point, you should know enough to start a project of your own and start playing around with datasources. The resources mentioned below can be useful when you need to learn new skills:

* [Building UI](/core-concepts/building-ui/)
* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)
* [Widgets](/reference/widgets/)
* [Appsmith Framework](/reference/appsmith-framework/)


:::info
Are you having trouble connecting datasources with Appsmith? Check out the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or reach out on [Discord](https://discord.com/invite/rBTTVJp) to get support or ask questions on the [community forum](https://community.appsmith.com/).
:::

