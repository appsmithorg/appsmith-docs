# Open AI

This page provides information 



## Connect Open AI

 <figure>
  <img src="/img/open-ai-main.png" style= {{width:"810px", height:"auto"}} alt="Server-side Filtering on Table"/>
  <figcaption align = "center"><i>Open AI datasource.</i></figcaption>
</figure>


### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to a Open AI datasource.


#### Authentication Type

<dd>

*Options:*

* **Bearer Token:** It is a type of access token that is included in the request headers to authenticate and authorize API requests.


</dd>


#### API Key

<dd>

The OpenAI uses API keys for authentication. Visit your [API Keys](https://platform.openai.com/account/api-keys) page to retrieve the API key for your requests.

</dd>


## Query Open AI

The following section is a reference guide that provides a description of the available commands with their parameters to create Open AI queries.

### Chat

The Chat command generates human-like text based on input prompts. The following section lists all the available parameters:

  <figure>
  <img src="/img/open-ai-chat2.png" style= {{width:"720px", height:"auto"}} alt="Server-side Filtering on Table"/>
  <figcaption align = "center"><i>Open AI | Chat command</i></figcaption>
</figure>


#### Models*

<dd>

It refers to the pre-trained language models provided by OpenAI. You can select from the available list of models, including options like GPT-3, GPT-4, and others.

</dd>


#### Temperature

<dd>

 Temperature determines the level of randomness in the output. It ranges between 0 and 2. 
 
 Lower values for temperature result in more consistent outputs (e.g. 0.2), while higher values generate more diverse and creative results (e.g. 1.0). Select a temperature value based on the desired trade-off between coherence and creativity for your specific application.


</dd>

#### Messages*

<dd>

Messages serve as input interactions between the user and the model. The roles include two types: user and system. You can create multiple messages of each type to make your conversation just the way you want. 

* **user**: Input provided by the user to instruct or guide the model. For example, you can use `{{Input1.text}}`.

* **system**: The system message serves as a means to provide additional context, set guidelines, or convey the overall objective of the task. It helps shape the behavior of the model's responses. For example, you can use the "system" message to give personality to the responses or add task-specific instructions. For example, you can set system as:

<dd>

```html
 "You are a technical support assistant. Provide clear and detailed solutions to user queries related to software issues. If the user mentions a bug, ask for additional details to troubleshoot effectively."
```
 For more information on system and user message refer the [Open AI guide](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-delimiters-to-clearly-indicate-distinct-parts-of-the-input).

</dd>


To display the OpenAI output, you can use mustache binding `{{}}` in the widget's default property, like:

<dd>

```js
// Content of the message in the first choice
{{Api1.data.choices[0].message.content}}

// Role of the message (e.g., "assistant" or "user")
{{Api1.data.choices[0].message.role}}

// ID of the completion
{{Api1.data.id}}
```
 For more information on responses refer to the [OpenAI documentation.](https://platform.openai.com/docs/api-reference/chat/object)

</dd>

  <figure>
  <img src="/img/open-ai-chat.gif" style= {{width:"810px", height:"auto"}} alt="Server-side Filtering on Table"/>
  <figcaption align = "center"><i>Open AI | Chat command</i></figcaption>
</figure>




</dd>