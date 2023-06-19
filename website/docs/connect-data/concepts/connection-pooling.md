---
sidebar_position: 4
description: Learn about connection pooling in Appsmith.
---

# Connection Pooling

Appsmith creates a new connection with the database server when you first connect the database to your application. All subsequent queries executed by Appsmith against your database then re-use this connection to ensure that your queries are executed at run-time. If an idle connection is closed by the database server, Appsmith creates a new connection while executing the next query.

For certain database plugins such as PostgreSQL, MySQL, Redis, MS SQL, and Redshift, Appsmith explicitly creates and maintains a connection pool because, usually, a single connection isn't designed to handle multiple simultaneous queries.

The maximum number of connections in a pool is limited to 5. Please note that max 5 connections in a pool doesn't mean that a max of 5 queries can be run concurrently using this pool. The number of concurrent queries that this pool can run is usually much higher. 