---
description: Appsmith uses the database command syntax to query MongoDB
---

# Mongo Query Syntax

## Find Query

### Syntax

```text
{
      "find": <string>,
      "filter": <document>,
      "sort": <document>,
      "projection": <document>,
      "skip": <int>,
      "limit": <int>
  }
```

### [Complete list of fields](https://docs.mongodb.com/manual/reference/command/find/)

### Example

```text
{
     "find": "restaurants",
     "filter": { "rating": { "$gte": 9 }, "cuisine": "italian" },
     "projection": { "name": 1, "rating": 1, "address": 1 },
     "sort": { "name": 1 },
     "limit": 5
 }
```

## Update Query

### **Syntax**

```text
{
      "update": <collection>,
      "updates": [
         {
           "q": <query>,
           "u": <document or pipeline>
         }
      ]
}
```

### [**Complete list of fields**](https://docs.mongodb.com/manual/reference/command/update/#dbcmd.update)

### Example

```text
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

## Insert Query

### Syntax

```text
{
   "insert": <collection>,
   "documents": [ <document>, <document>, ... ],
   "ordered": <boolean>
}
```

### [Complete list of fields](https://docs.mongodb.com/manual/reference/command/insert/)

### Example

```text
{
      "insert": "users",
      "documents": [ 
            { "_id": 1, "user": "abc123", status: "A" } 
      ]
   }
```

## Delete Query

### Syntax

```text
{
   "delete": <collection>,
   "deletes": [
      {
        "q" : <query>,
        "limit" : <integer>
      }
   ]
}
```

### [Complete list of fields](https://docs.mongodb.com/manual/reference/command/delete/)

### Example

```text
{
      "delete": "orders",
      "deletes": [ { 
            "q": { status: "D" }, 
            "limit": 1 
      } ]
   }
```

{% page-ref page="../../core-concepts/connecting-to-data-sources/connecting-to-databases/querying-a-database.md" %}

