# Appsmith AI

This page provides information on creating queries with Appsmith AI, which allows you to configure applications with advanced AI features such as text generation, image classification, and sentiment analysis without the need for any API keys or datasource authentication.



## Connect Appsmith AI

<ZoomImage
  src="/img/-appsmith-ai-home.png" 
  alt="Appsmith AI"
  caption="Appsmith AI query"
/>



### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to the datasource.


#### Files

<dd>


You have the option to enhance text generation by uploading specific files for context. The maximum allowable file size is 20 MB; compress your file if the size exceeds 20 MB.

Submission of files is not mandatory, and you can use Appsmith AI without uploading any files.


For example, if you are working on a loan approval application and want to upload an SOP for insights into user preferences and financial details, the system uses the provided information to generate tailored recommendations and guidance.










</dd>


## Query Appsmith AI


The following section is a reference guide that provides a description of the available commands with their parameters to create Appsmith AI queries.


### Generate text 



The Generate Text action allows you to generate text based on specific prompts.

<ZoomImage
  src="/img/appsmith-ai-loan-example.png" 
  alt="Appsmith AI"
  caption="Generate text query"
/>




<dd>

#### Prompt


This field allows you to input prompts for text generation. You can also add data from queries or JSObjects using mustache bindings `{{}}`, like `{{user_Input.text}}`.



*Example*:

```
You are helpful assistant who can help loan agents with loan approval or rejection recommendations. Analyse the loan details and generate a recommendation based on the SOP document that you have access to. 

Loan details: 
Credit score: `{{tbl_users.selectedRow.creditscore}}`
DTI Ratio: `{{tbl_users.selectedRow.dtiratio}}`

Your response should contain a recommendation followed by a list of all reasons. The format should be: 
Recommendation: `<your recommendation. Possible values: (Approve/Conditional Approve/Reject)>`
Reasons: `<your reasons>`
```

</dd>

<dd>

#### Use context from files

Enhance the quality of AI responses by selecting relevant files that provide context. 

Upload your files through the [datasource](#files) to enable the system to better understand and generate more accurate and context-aware responses.

</dd>

### Classify text



This action allows you to analyze and categorize text based on its content. You can gain insights into the nature of the provided text, making it a valuable for text classification tasks in your applications.



<dd>

#### Input



This field enables you to input prompts for text classification. You can provide either a simple text or an array of text, such as chat details, for classification. Additionally, you can add data from queries or JSObjects using mustache bindings `{{}}`.

For example, you can input a user's product review, like:

"Received my laptop stand from Macazon after a significant delay in delivery, which was a bit disappointing. Upon unboxing, I noticed the build seemed sturdy, but unfortunately, the stand doesn't function as expected. It's supposed to be adjustable, but the mechanism is quite stiff, making it challenging to change angles or heights."

</dd>

<dd>

#### Labels



Labels refer to predefined categories or classes assigned to the analyzed text. These labels are essential for organizing and identifying the nature of the text content. 

For example, if you are classifying product reviews, labels could include categories such as "Urgent," "High priority," or "Low."

</dd>

<dd>

#### Additional Instructions


This property allows you to provide additional instructions to fine-tune the text classification process. You can use this field to offer specific guidance or adjustments to the AI.

For example, you can use the following label descriptions:

* Urgent: Issues that prevent a customer from using the product.
* High priority: Issues that are impactful but still allow the product to be usable.
* Low priority: Issues that, while present, can be lived with.




</dd>


### Summarise text



This action condenses and distills lengthy pieces of text into concise summaries, providing a quick overview of the main points or key information. This feature is particularly useful for extracting essential details from large bodies of text, making it easier to comprehend and work with voluminous content.


<dd>

#### Input



This field allows you to provide input for text summarization.  For instance, you can input text from a support conversation or any other lengthy content that you want to condense into a concise summary. 

</dd>

<dd>

#### Additional Instructions



This property allows you to provide additional instructions to fine-tune the text summarization process. You can use this field to offer specific guidance or adjustments to the AI.


For example, if the summary appears either too brief or detailed, customize the summarization length with the instruction: "Summarize the content in approximately 5 sentences."



</dd>


### Extract entities from text


This action allows you to identify and extract specific pieces of information, such as names, addresses, and other entities, from a given text. 


<dd>

#### Input



This field allows you to provide text from which you want to extract entities. For example, you can pass a user's email content to extract information such as name, email, address, and other relevant details.

</dd>



<dd>

#### Entities



Entities are specific pieces of information that you want to extract from the provided input text. In this field, you should provide a comma-separated list of the entities you want to extract. 

For example, if you are extracting information, your list might include entities like "Name," "Email," and "Address". 

</dd>

<dd>

#### Additional Instructions



This property allows you to provide additional instructions to fine-tune the entity extraction process. You can use this field to offer specific guidance or adjustments to the AI.

For example, you can instruct the model that "If you’re unable to extract an entity, respond with "Not found".

</dd>


### Classify Image


 
This action is designed to analyze and categorize the content of an image, automatically assigning labels or categories to images.



<dd>

#### Input



This field allows you to provide the image, either in the form of an image URL or as a base64 encoded image. If you want to upload an image from a Filepicker, you can use `{{upload_FilePicker.files[0]}}`.




</dd>

<dd>

#### Labels



In this field, provide a comma-separated list of labels to classify the input image. These labels serve as the identified categories or characteristics that the AI system uses to categorize and classify the content of the provided image.

For example, you can add product categories such as Jacket, Shirt, Pant, T-Shirt, Shorts, Dress, Skirt in this field. 
</dd>

<dd>

#### Additional Instructions



This property allows you to provide additional instructions to fine-tune the classification process. You can use this field to offer specific guidance or adjustments to the AI.

For example, you can instruct the model to "Identify the category of clothing. Apply only one category.".

</dd>

### Describe Image


 
This action generates textual information about an image, producing a descriptive summary of the visual content captured within the image.



<dd>

#### Input



This field allows you to provide the image, either in the form of an image URL or as a base64 encoded image. If you want to upload an image from a Filepicker, you can use `{{upload_FilePicker.files[0]}}`.




</dd>

<dd>

#### Additional Instructions



This property allows you to provide additional instructions to fine-tune the caption. You can use this field to offer specific guidance or adjustments to the AI.

For example, you can instruct the model to "Write a 200 word product description".

</dd>

### Extract entities from image


 
This action involves the identification and extraction of specific pieces of information or entities from an image. This feature uses advanced image processing techniques to recognize and retrieve relevant data points, such as text, objects, or other elements, from the visual content captured in the image. 


<dd>

#### Input

 
This field allows you to provide the image, either in the form of an image URL or as a base64 encoded image. If you want to upload an image from a Filepicker, you can use `{{upload_FilePicker.files[0]}}`.

</dd>

<dd>

#### Entities



Entities are specific pieces of information or features within the visual content of the image that you want to identify and retrieve. Entities could include text, objects, landmarks, or any other distinct elements present in the image.

For example, if you want to extract details from an ID card, you can specify entities such as name, date of birth, gender, license number, and height.

</dd>

<dd>

#### Additional Instructions



This property allows you to provide additional instructions to fine-tune the entity extraction. You can use this field to offer specific guidance or adjustments to the AI.

For example, you can instruct the model that "The date should be in dd/mm/yyyy format".


</dd>