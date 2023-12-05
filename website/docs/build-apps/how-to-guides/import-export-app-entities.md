# Share Entities across Pages

When working on complex Appsmith applications, you might find the need to reuse a particular set of widgets, queries, JS Objects across pages. Instead of recreating these entities from scratch each time, Appsmith provides a way for you to export entities from one page and import them into another. This guide outlines steps on how to export entities from a page to a JSON file and subsequently import it into another page.

## Export entities

Follow these steps to export your desired entities:

* Open the Appsmith editor and access the app containing the page you wish to export.
* Click the three vertical dots beside the page's name for more actions, and select the **Export** option from the dropdown menu. A dialog box will appear, allowing you to choose the entities you want to reuse.
<figure>
  <img src="/img/share-entities-across-pages-export.png" style= {{width:"640px", height:"auto"}} alt="Export entities"/>
  <figcaption align = "center"><i>Select entities to export</i></figcaption>
</figure>   
* Make your selections and click **Export selected entities** to download the JSON file of your entities. The file follows the naming convention - `application name.json`. For example, `My first application.json`.

## Import entities

With your entities definitions downloaded into a JSON file, you're ready to import them to another page. The JSON file is a blueprint of your selected entities, designed for sharing entities across pages, not for creating a new app. Follow these steps to import the entities:

* Open the editor and access the app or page where you wish to add your exported entities.
* Click the three vertical dots beside the page's name for more actions, and select the **Import** option from the dropdown menu. A dialog box will appear, go to the location of your exported JSON file on your system and select it. Upon completion of the import process, the entities from the JSON file are available on the selected page.

As a security measure, Appsmith does not export/import any configuration values used for connecting to the datasource. After importing, you will have to manually configure the datasource for the newly imported entities.