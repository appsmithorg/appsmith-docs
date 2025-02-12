# Generate PDF Dynamically

This page shows how to generate a PDF dynamically based on query data or user inputs and preview it in a Document Viewer widget.

1. In your Appsmith app, open the **Libraries** section from the sidebar, click the **+** icon, and add JavaScript library to generate the PDF.

<dd>

*Example:* Import the [jsPDF](https://raw.githack.com/MrRio/jsPDF/master/docs/index.html) library.

```javascript
https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js
```

To add tables and other UI components to the PDF, import the [jsPDF AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable) library *(an extension for `jsPDF`)*.


<ZoomImage
  src="/img/jspdf-lib.png" 
  alt=""
  caption=""
/>

</dd>

2. To generate the PDF, get data from user inputs (widgets) or fetch it dynamically from a database or API using a query.

<dd>

*Example:* If you want to generate an offer letter, set up a form widget to capture the candidate’s information or create a query to retrieve details such as the candidate’s name, job title, start date, salary, and benefits.

</dd>


3. Create a new **JSObject** from the *JS* tab to define the logic for generating the PDF using the JS library.

<dd>

*Example:* If you want to generate a offer letter based on the inputs provided by a user, you can create a JSObject to handle the logic and formatting of the PDF.


```js
export default {
	// Data object to store dynamic values
	data: {
		date: moment().format("Do MMM, YYYY"), 
		firstName: firstName.text, 
		lastName: lastName.text, 
		email: email.text,
		jobTitle: jobTitle.text, 
		salary: baseSalary.text, 
	},

	// Function to generate the offer letter PDF
	generateOfferPDF(data = this.data) {
		// Initialize a new PDF document
		const doc = new jspdf.jsPDF();

		// Add the header
		doc.text("Offer Letter", 10, 10); 
		doc.text(`Date: ${data.date}`, 10, 20); 

		// Add recipient details
		doc.text(`To: ${data.firstName} ${data.lastName}`, 10, 30); 
		doc.text(`Email: ${data.email}`, 10, 40); 

		// Add the body of the offer letter
		doc.text(`Dear ${data.firstName},`, 10, 60); 
		doc.text(`We are pleased to offer you the position of ${data.jobTitle}.`, 10, 70); // Job title information
		doc.text(`Your annual salary will be ${data.salary}.`, 10, 80); // Salary details

		// Add acceptance section
		doc.text("If you accept this offer, please sign below:", 10, 100); 
		doc.text("Signature: __________________________", 10, 110); // Signature placeholder
		doc.text("Date: __________________________", 10, 120); 

		// Return the PDF as a data URI string (can be used to preview/download the PDF)
		return doc.output("datauristring");
	},
};
```
- The data object stores values from input fields, and the `generateOfferPDF` function uses these values to populate the PDF content.
- The code dynamically generates an offer letter PDF by retrieving user inputs (name, email, job title, salary) and formatting them using `jspdf.jsPDF()`.
- The final PDF is returned as a data URI, which can be displayed or downloaded.

</dd>

4. To preview the PDF, drag a Document Viewer widget and set its **Document link** property to:

<dd>

*Example:*

```javascript
{{PDFUtils.generateOfferPDF()}}
```

</dd>


## See Also

- To send the generated PDF via email, connect to an SMTP datasource and create a Send Email query. For more information, see [How to Configure SMTP Datasource](/connect-data/how-to-guides/send-emails-using-the-SMTP-plugin#add-attachments).

- To download the PDF, use the [download()](/reference/appsmith-framework/widget-actions/download) function to save the file locally.


