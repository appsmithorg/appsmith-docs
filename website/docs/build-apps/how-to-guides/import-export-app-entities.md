---
description: A guide that outlines steps on how to export entities from a page to a JSON file and subsequently import it into another page.
---

# Share Entities across Pages

When working on complex Appsmith applications, you might find the need to reuse a particular set of widgets, queries, JSObjects, and more across pages. Instead of recreating these entities from scratch each time, Appsmith provides a way for you to export entities from one page and import them into another. This guide outlines steps on how to export entities from a page to a JSON file and subsequently import it into another page.

## Export entities

Follow these steps to export your desired entities:

* Open the Appsmith editor and access the app containing the page you wish to export.
* Click the three vertical dots next to the page name for more actions, and select the **Export** option from the dropdown menu. A dialog box will appear, allowing you to choose the entities you want to reuse.
<figure>
  <img src="/img/share-entities-across-pages-export.png" style= {{width:"640px", height:"auto"}} alt="Export entities"/>
  <figcaption align = "center"><i>Select entities to export</i></figcaption>
</figure>   
* Make your selections and click **Export selected entities** to download the JSON file of your entities. The JSON file follows the naming convention - `application name.json`.

## Import entities

With the definitions of entities downloaded into a JSON file, you can import them to another page. Follow these steps to import the entities:

:::info
The JSON file is a blueprint of your selected entities, and designed for sharing entities across pages. The JSON file can't be used to create a new app. 
:::

* Open the editor and access the app or page where you wish to add your exported entities.
* Click the three vertical dots next to the page name for more actions, and select the **Import** option from the dropdown menu. 
 * A dialog box appears. You may choose to drag and drop or go to the location of your exported JSON file on your system and upload it. Upon completion of the import process, the entities from the JSON file are available on the selected page.

As a security measure, Appsmith does not export/import any configuration values used for connecting to the datasource. After importing, you will have to manually configure the datasource for the newly imported entities.