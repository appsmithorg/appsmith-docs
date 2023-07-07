---
description: This page shows you how to connect to a datasource on Appsmith.
sidebar_position: 1
---

# Connect Datasource

This page shows you how to connect to a datasource on Appsmith.

1. Click the **Explorer** tab on the entity explorer to the screen's left. 

2. Click the **+** icon next to **Datasources**.

3. From the list, select the datasource you need to connect to. This opens the page where you can configure the parameters to connect to your datasource. 

<figure>
  <img src="/img/connecting-to-data-sources.png" style= {{width:"100%", height:"auto"}} alt="List of Datasources"/>
  <figcaption align = "center"><i>List of Datasources</i></figcaption>
</figure>

4. Rename the datasource to be able to identify it when creating queries.

5. If you are a self-hosted user, you need to whitelist the IP addresses `18.223.74.85` and `3.131.104.27` of the Appsmith deployment on your datasource instance before connecting to it. 

6. If you are a [Business Edition](https://www.appsmith.com/pricing) user, you can configure both production and staging data by using multiple environments.

7. Set the required connection parameters to connect to your datasource. Appsmith encrypts all your datasource credentials and stores them securely. For a complete description of the connection parameters, see the [Reference guide](/connect-data/reference) for your datasource. 

:::info
If your datasource is locally hosted, follow the instructions in [Connect Datasouce on Local Machine](/connect-data/how-to-guides/how-to-work-with-local-apis-on-appsmith) to get the hostname.
:::

7. Click the **Test** button to test the connection and ensure the datasource is valid.

8. Click **Save** to create and save the datasource connection.

9. Once the datasource connection is saved, you can switch between production and staging environments using the dropdown menu at the bottom left. (*Only for [Business Edition](https://www.appsmith.com/pricing) user*)

## See also
[Query Data](/connect-data/how-to-guides/query-data)