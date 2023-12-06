# Browse and Display Documents

This guide shows how to organize and display documents using the Tabs widget.


<figure>
  <img src="/img/display-doc.gif" style= {{width:"700px", height:"auto"}} alt="Browse and Display Documents"/>
  <figcaption align = "center"><i>Browse and Display Documents</i></figcaption>
</figure>

1. Connect the Table widget to a query containing document-related columns, either in base64 or URL format.

2. Drop a Tabs widget to organize and browse multiple documents.

3. For each Tab, add an appropriate widget based on the document type present in the respective column:

<dd>

- For images (PNG, JPG, SVG), use the Image widget.
- For document files such as PDF, TXT, PPTX, and others, use the Document Viewer widget.


</dd>

4. To display the document, connect the selected row of the Table widget to the Image or Document Viewer widget, like:

<dd>

```js
{{Docs_Table.selectedRow.doc_type_passport}}
```

</dd>

5. Configure the **Zoom level** property to allow users to zoom into the document, and **Enable download** to allow users to download that document.



