---
description: Appsmith uses the database command syntax to query MongoDB
---

# Raw Query Commands

The Raw command allows you to write custom queries using the MongoDB database command syntax. 


:::info
The syntax for MongoDB database commands differs slightly from the MongoDB collection methods you may be familiar with. For more information, see [Query and Write Operation Commands](https://docs.mongodb.com/manual/reference/command/nav-crud/) available on the official MongoDB documentation.
:::

### Basic raw query

```bash
{
   "find":"users",
   "filter":{
      "name":"John"
   }
}
```
This query returns all documents from the `user` collection where the `name` field matches `John`.

### Aggregation pipeline query

The [pipeline](https://www.mongodb.com/docs/manual/core/aggregation-pipeline/) is an array that contains the aggregation stages that process the documents. In your Raw query, you'll have to include the filter criteria in a pipeline keyword when using aggregation.


```bash
{
   "aggregate":"orders",
   "pipeline":[
      {
         "$match":{
            "status":"paid"
         }
      }
   ],
   "cursor":{
      "batchSize":50
   }
}

```

This query uses the `$match` stage in the aggregation pipeline to filter documents in the `orders` collection where the `status` field matches `paid`. It also specifies a cursor with a batch size of 50 documents.

### Raw command with lookup

```bash
{
   "aggregate":"orders",
   "pipeline":[
      {
         "$lookup":{
            "from":"customers",
            "localField":"customer_id",
            "foreignField":"_id",
            "as":"customer"
         }
      },
      {
         "$unwind":"$customer"
      },
      {
         "$match":{
            "customer.status":"active"
         }
      }
   ],
   "cursor":{
      "batchSize":100
   }
}
```
This query uses the `$lookup` stage in the aggregation pipeline to join documents in the `orders` collection with documents in the `customers` collection based on the `customer_id` field. 

:::info
By default, MongoDB returns only **101 records** due to its default [`batchSize`](https://docs.mongodb.com/manual/tutorial/iterate-a-cursor/). You can update the limit and `batchSize` by adding values to your query.
:::

When running a Raw query, the filter criteria must be included in the pipeline array for aggregation. The error `Pipeline option must be specified as an array` is generated when the pipeline option is missing or not specified as an array, leading to query failure.




<figure>
  <img src="/img/Datasources__MongoDB__Pipeline_Keyword_not_supplied__Error_Generated.png" style= {{width:"700px", height:"auto"}} alt="Configure PostgreSQL Datasource"/>
  <figcaption align = "center"><i>The error generated when the pipeline keyword  isn't added</i></figcaption>
</figure>


## Raw query syntax
This section provides a reference for the syntax and usage of raw MongoDB queries.


###  Find query
The [Find Query](https://docs.mongodb.com/manual/reference/command/find/) syntax is used to retrieve data from MongoDB collections based on specified filter conditions and projection criteria.

   ```bash
    {
      "find": <string>,
      "filter": <document>,
      "sort": <document>,
      "projection": <document>,
      "skip": <int>,
      "limit": <int>
     }

     //example
     {
     "find": "restaurants",
     "filter": { "rating": { "$gte": 9 }, "cuisine": "italian" },
     "projection": { "name": 1, "rating": 1, "address": 1 },
     "sort": { "name": 1 },
     "limit": 5
      }
   ```


###  Update query
The [Update Query](https://docs.mongodb.com/manual/reference/command/update/#dbcmd.update) syntax is used to modify existing data in MongoDB collections.


   ```bash
     {
      "update": <collection>,
      "updates": [
         {
           "q": <query>,
           "u": <document or pipeline>
         }
      ]
      }     

      //example
      {    
      "update": "members",
      "updates": [
         { 
         "q": { }, 
         "u": { "$set": { "status": "A" }, "$inc": { "points": 1 } }, 
         "multi": true 
         }
      ]
      }
   ```

###  Insert query
The [Insert Query](https://docs.mongodb.com/manual/reference/command/insert/) syntax is used to add new documents to MongoDB collections.


   ```bash
    {
   "insert": <collection>,
   "documents": [ <document>, <document>, ... ],
   "ordered": <boolean>
    }  

      //example
    {
      "insert": "users",
      "documents": [ 
            { "_id": 1, "user": "abc123", status: "A" } 
      ]
    }
   ```
###  Delete query
The [Delete Query](https://docs.mongodb.com/manual/reference/command/delete/) syntax is used to remove data from MongoDB collections based on specified filter conditions.


   ```bash
     {
       "delete": <collection>,
       "deletes": [
       {
         "q" : <query>,
         "limit" : <integer>
       }
      ]
      }

      //example
      {
       "delete": "orders",
       "deletes": [ { 
             "q": { status: "D" }, 
             "limit": 1 
      } ]
       }
   ```

You can refer to this sample app on [MongoDB RAW Query](https://app.appsmith.com/applications/61e022f1eb0501052b9fa205/pages/6229a205f782567d61f16d2f).
