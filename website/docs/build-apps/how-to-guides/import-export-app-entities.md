---
description: A guide that outlines steps on how to export entities from a page to a JSON file and subsequently import it into another page.
---

# Reuse App Entities

This guide shows how to export certain entities from a page and import them into another page or app. Reusable entities are widgets, datasources, queries, JS Objects, and custom libraries. 


Follow the steps below to export desired app entities and import it into another page or an app.

1. Open the page from which you want to export the entities. Click the vertical dots icon next to the page name for the action menu.
2. Select the **Export** option from the action menu. A dialog box will appear, allowing you to choose the entities you want to reuse.
<figure>
  <img src="/img/reuse-entities-across-pages-export.png" style= {{width:"640px", height:"auto"}} alt="Export entities"/>
  <figcaption align = "center"><i>Select entities to export</i></figcaption>
</figure>   
3.  Select the specific entities under each category and click **Export selected entities** to download the JSON file. The JSON file follows the naming convention - `app name.json`.


:::info
The JSON file is a blueprint of your selected entities, and designed for sharing entities across pages. The JSON file can't be used to create a new app. 
:::

4.  Open the page where you want to import the entities. Click the vertical dots icon next to the page name for the action menu.
5. Select the **Import** option from the action menu. 
6. A dialog box appears. You may choose to drag and drop or go to the location of your exported JSON file on your system and upload it. Upon completion of the import process, the entities from the JSON file will be available on the current page.

As a security measure, Appsmith does not export or import any configuration values used for connecting to a datasource. After importing, you will have to manually configure the datasource for the newly imported entities.