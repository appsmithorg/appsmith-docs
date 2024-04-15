# Anthropic


This page provides information for connecting Appsmith to Anthropic, which allows you to configure applications with advanced AI features, such as chat completion.


:::note Data, Privacy and Security
Appsmith is committed to providing safe and responsible access to AI capabilities. Your prompts, outputs, embeddings, and data are not shared with other users and are never utilized to fine-tune models. Learn more about Anthropic's privacy policy [here](https://www.anthropic.com/responsible-disclosure-policy).
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
  src="/img/chat_command_ai.png" 
  alt="Anthropic Datasource - chat"
  caption="Anthropic - Chat command"
/>

#### Models

<dd>

It refers to the pre-trained language models provided by Anthropic. You can select from the available list of models, including options like claude-2, claude-3, and others. 

* For models belonging to the claude-3 family, the response format follows the [messages API](https://docs.anthropic.com/claude/reference/messages_post). 

* For claude-instant-1.2 and claude-2.1, the response format is based on the [completion API](https://docs.anthropic.com/claude/reference/complete_post).





</dd>


#### Max tokens


<dd>

The maximum number of tokens the response should contain. It allows you to control the length of the generated output.

</dd>

#### System Prompt

<dd>

These messages help shape the behavior of the model's responses and can be used to add personality, offer instructions, or guide the model in generating more contextually relevant outputs. For instance, in a customer service chatbot, you can design a system prompt that guides the AI to embrace a friendly and supportive demeanor when addressing user queries about products.

</dd>

#### Messages

<dd>

Messages serve as input interactions between the user and the model. You can create multiple messages of each type to make your conversation just the way you want. In the **Roles** parameter, you can select either `Human` or `Assistant`. In the **Content** property, add:

* **Assistant**: It serves as a means to provide additional context, set guidelines, or convey the overall objective of the task. It helps shape the behavior of the model's responses. For example, you can use the system message to give personality to the responses or add task-specific instructions. For example, you can set `Assistant` as:

<dd>


 "You are a technical support assistant. Provide clear and detailed solutions to user queries related to software issues. If the user mentions a bug, ask for additional details to troubleshoot effectively."

</dd>

* **Human**: Input provided by the user to instruct or guide the model. For example, if you are using an Input widget to enter the prompt, you can use `{{userInput.text}}`.

<dd>

For more information refer to the [Anthropic documentation.](https://docs.anthropic.com/claude/reference/complete_post)

</dd>


</dd>

#### Temperature

<dd>

 Temperature determines the level of randomness in the output. It ranges between 0 and 1. 

Lower values for temperature result in more focused and analytical outputs (e.g. 0.2), while higher values generate more diverse and creative results (e.g. 0.8). Select a temperature value based on the desired trade-off between coherence and creativity for your specific application.

</dd>


### Vision

The Vision command allows the model to take in images and answer questions about them.


<ZoomImage
  src="/img/vision_api_.png" 
  alt="Anthropic Datasource - chat"
  caption="Anthropic - Vision command"
/>

#### Models

<dd>

It refers to the pre-trained language models provided by Anthropic. You can select from the available list of models, including Claude-3-Opus, Claude-3-Sonnet, Claude-3-Haiku.

* For models belonging to the claude-3 family, the response format follows the [messages API](https://docs.anthropic.com/claude/reference/messages_post). 

* For claude-instant-1.2 and claude-2.1, the response format is based on the [completion API](https://docs.anthropic.com/claude/reference/complete_post).

</dd>


#### Max tokens


<dd>

The maximum number of tokens the response should contain. It allows you to control the length of the generated output.

</dd>

#### System Prompt

<dd>

These messages help shape the behavior of the model's responses and can be used to add personality, offer instructions, or guide the model in generating more contextually relevant outputs. For instance, in a customer service chatbot, you can design a system prompt that guides the AI to embrace a friendly and supportive demeanor when addressing user queries about products.

</dd>


#### Messages

<dd>

Messages serve as input interactions between the user and the model. You can create multiple messages of each type to make your conversation just the way you want. In the **Roles** parameter, you can select either `Human` or `Assistant`. 

**Roles:**

* **Assistant**: It serves as a means to provide additional context, set guidelines, or convey the overall objective of the task. It helps shape the behavior of the model's responses. For example, you can use the system message to give personality to the responses or add task-specific instructions. For example, you can set `Assistant` as:

<dd>


 "You are a technical support assistant. Provide clear and detailed solutions to user queries related to software issues. If the user mentions a bug, ask for additional details to troubleshoot effectively."

</dd>

* **Human**: Input provided by the user to instruct or guide the model. For example, if you are using an Input widget to enter the prompt, you can use `{{userInput.text}}`.

<dd>

For more information refer to the [Anthropic documentation.](https://docs.anthropic.com/claude/reference/complete_post)

</dd>

**Type:**

* **Text**: This represents the task input you want to send to Anthropic. For example, you can use it to instruct the model, such as "find a ball in this image," using `{{Input1.text}}`.

* **Image**: This is the image on which the model performs tasks based on the provided text. You can pass the base64 encoded image directly in the request. You can also add multiple images as needed. For example, you can use the Filepicker to upload images, like as `{{FilePicker1.files[0].data}}`.

:::note
Currently, only base64 encoded images are supported; image URLs and links are not supported.
:::

For more information refer to the [Anthropic documentation](https://docs.anthropic.com/claude/docs/vision).




</dd>



#### Temperature

<dd>

 Temperature determines the level of randomness in the output. It ranges between 0 and 1. 

Lower values for temperature result in more focused and analytical outputs (e.g. 0.2), while higher values generate more diverse and creative results (e.g. 0.8). Select a temperature value based on the desired trade-off between coherence and creativity for your specific application.

</dd>