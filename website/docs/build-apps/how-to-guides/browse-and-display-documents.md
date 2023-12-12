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

If you don't know the file type of that column, you can create a JS function to change the visibility of widgets dynamically. Enable JS and following code in **Visible** property:

```js
//For Image 
{{Docs_Table.selectedRow.doc_type_passport.includes(".jpg") || false}}

//For Document Viewer
{{Docs_Table.selectedRow.doc_type_passport.includes(".pdf") || false}}

// If the image is in base64 format, you can handle it by checking if the imageUrl starts with the prefix `data:image/`.
```

The above code displays an Image or a Document Viewer based on the file type of a selected row, showing the Image if it's a JPG file, and displaying the Document Viewer otherwise. 


</dd>

5. Configure the **Zoom level** property to allow users to zoom into the document, and **Enable download** to allow users to download that document.



