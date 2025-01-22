# Generate a PDF

This page shows you how to use Appsmith to generate a PDF from input data, preview it in a Document Viewer widget, and send it as an email attachment. This guide is flexible for various use cases, such as sending invoices, receipts, or offer letters.

1. On the canvas, add the necessary widgets, such as Text Input, Dropdown, and Date Picker, to capture the information needed to generate the PDF.

<dd>

*Example:* If you want to generate an offer letter, add widgets to capture details such as the recipient's name, job title, start date, salary, and benefits, which are included in the offer letter PDF.


</dd>


2. Open the **Libraries** section from the left pane, click the **+** icon, and add a JavaScript library to generate the PDF.

<dd>

Ensure the library is available in ECMAScript Modules (ESM) or Universal Module Definition (UMD) format from a reliable CDN, such as [jsDelivr](https://www.jsdelivr.com/) or [UNPKG](https://unpkg.com/). 

*Example:*

- To generate a PDF, import the [jsPDF](https://raw.githack.com/MrRio/jsPDF/master/docs/index.html) library:

```javascript
https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js
```

- To enhance the PDF generation with tables and other UI components, import the [jsPDF AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable) library:

```javascript
https://unpkg.com/jspdf-autotable@latest/dist/jspdf.plugin.autotable.min.js
```

<ZoomImage
  src="/img/jspdf-guide.png" 
  alt=""
  caption=""
/>



</dd>

3. Create a new **JSObject** from the *JS* tab to define the logic for generating the PDF using the JS library.

<dd>

</dd>