# Anthropic


This page provides information for connecting Appsmith to Anthropic, which allows you to configure applications with advanced AI features, such as chat completion.

:::note Data, Privacy and Security
Appsmith is committed to providing safe and responsible access to AI capabilities. Your prompts, outputs, embeddings and data: 
- are **NOT** available to other Appsmith customers.
- are **NOT** used to fine-tune or train Google Gemini models.
- are **NOT** used to improve Appsmith's products or services.

Learn more about Anthropic's privacy policy [here](https://www.anthropic.com/responsible-disclosure-policy).
:::


## Connect Anthropic

<ZoomImage
  src="/img/connect-anthropic.png" 
  alt="Anthropic Datasource"
  caption="Anthropic datasource"
/>

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to an Anthropic datasource.


#### API Key

<dd>

The Anthropic uses API keys for authentication. Visit the [web console](https://console.anthropic.com/) to retrieve the API key.

</dd>

## Query Anthropic

The following section is a reference guide that provides a description of the available commands with their parameters to create Anthropic queries.

### Chat

The Chat command generates human-like text based on input prompts. The following section lists all the available parameters:

<ZoomImage
  src="/img/anthropic-chat.png" 
  alt="Anthropic Datasource - chat"
  caption="Anthropic - Chat command"
/>

#### Models

<dd>

It refers to the pre-trained language models provided by Anthropic. You can select from the available list of models, including options like claude-2, claude-2.1, and others. 

</dd>


#### Max tokens


<dd>

The maximum number of tokens the response should contain. It allows you to control the length of the generated output.

</dd>

#### Messages

<dd>

Messages serve as input interactions between the user and the model. You can create multiple messages of each type to make your conversation just the way you want. In the **Roles** parameter, you can select either `Human` or `Assistant`. In the **Content** property, add:

* **Assistant**: It serves as a means to provide additional context, set guidelines, or convey the overall objective of the task. It helps shape the behavior of the model's responses. For example, you can use the system message to give personality to the responses or add task-specific instructions. For example, you can set `Assistant` as:

<dd>


 "You are a technical support assistant. Provide clear and detailed solutions to user queries related to software issues. If the user mentions a bug, ask for additional details to troubleshoot effectively."

</dd>

* **Human**: Input provided by the user to instruct or guide the model. For example, if you are using an Input widget to enter the prompt, you can use `{{Input1.text}}`.

<dd>

For more information refer to the [Anthropic documentation.](https://docs.anthropic.com/claude/reference/complete_post)

</dd>


</dd>

#### Temperature

<dd>

 Temperature determines the level of randomness in the output. It ranges between 0 and 1. 

Lower values for temperature result in more focused and analytical outputs (e.g. 0.2), while higher values generate more diverse and creative results (e.g. 0.8). Select a temperature value based on the desired trade-off between coherence and creativity for your specific application.

</dd>
