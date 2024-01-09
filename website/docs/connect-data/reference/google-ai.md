
# Google AI

This page provides information for connecting Appsmith to Google AI, which allows you to configure applications with advanced AI features, such as chat completion.

## Connect Google AI

<ZoomImage
  src="/img/google-ai-landingpage.png" 
  alt="Google AI datasource"
  caption="Google AI datasource"
/>

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to a Google AI datasource.

#### Authentication type


<dd>

Authentication Type refers to the method used to verify the identity of users or systems interacting with the API. 

*Options:*

* **API Key:** It is a form of authentication where a unique code is provided for identification and authorization purposes.

</dd>




#### API Key

<dd>

The Google AI uses API keys for authentication. You can create a key from [Google AI Studio](https://makersuite.google.com/app/apikey).


</dd>


## Query Google AI

The following section is a reference guide that provides a description of the available commands with their parameters to create Google AI queries.

### Generate Content

The Generate Content command generates human-like text based on input prompts. The following section lists all the available parameters:

<ZoomImage
  src="/img/google-ai-chat.png" 
  alt="Google AI - Generate Content Command"
  caption="Google AI - Generate Content Command"
/>

#### Models

<dd>

It refers to the pre-trained language models provided by Google AI. You can select from the available list of models, including options like gemini-pro.

</dd>

#### Messages

<dd>
Messages serve as the input interface between the user and the model. You can create multiple messages as needed to facilitate a dynamic conversation.

* **Role**: This parameter determines the participant's role in the conversation. Currently, only `User` is available.

* **Type**: Specifies the format of the input and response. Currently, only `Text` is available.

* **Content**: Input provided by the user to instruct or guide the model. For example, if you are using an Input widget to enter the prompt, you can use `{{Input1.text}}`.

</dd>

For more information refer to the [Google AI documentation](https://ai.google.dev/tutorials/setup).

