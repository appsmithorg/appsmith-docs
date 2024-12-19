---
title: AI Chat
hide_title: true
toc_max_heading_level: 2
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>AI Chat (AI Assistant)</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>


</div>

<!-- vale on -->

This page provides information on using the AI Chat Widget (available in AI Assistant Apps), which enables users to interact with AI models using the Appsmith AI Datasource.

The widget automatically creates an Appsmith AI query, which you can configure to provide additional context to the model by integrating data from various platforms (e.g., Zendesk, Salesforce, etc.) 



<ZoomImage
  src="/img/appsmith-ai.gif" 
  alt=""
  caption=""
/>


## Content Properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### Data 

These properties allow you to set and manage data for the AI Chat widget. 

#### Chat Query

<dd>

When the Chat widget is added to the canvas, a default AI Chat Query is automatically created to process messages. This query contains the main logic and data required for the Chat widget to function. You can change this query by selecting a different one from the Chat Query dropdown in the widget's property pane.

In the query, you can upload files or connect to various platforms like Zendesk, Salesforce, Google, etc., to provide data. However, you can only connect a query from the Appsmith AI datasource with the [AI Chat Assistant](/AI-assistants/appsmith-ai#ai-chat-assistant) as a command. 


</dd>

### General

General properties are essential configurations that provide overall control over the widget's behavior and appearance.

#### Description

<dd>

The Description property allows you to add text that guides users on how to use the Chat widget. This section can include instructions, context, or any additional information to help users interact with the chat effectively. You can also use `{{}}` to dynamically display data from JavaScript functions or queries.

When users click on the info icon in the Chat widget, a modal is displayed showing this description, providing additional guidance or context.


</dd>


#### Placeholder

<dd>

The Placeholder property allows you to add placeholder text to the message input box of the Chat widget. This text serves as a hint or example to guide users on what type of input is expected. The placeholder disappears when users start typing in the input box.

You can also use `{{}}` to dynamically generate placeholder text based on data from JavaScript functions or queries.

</dd>

#### Initial Assistant Suggestions

<dd>

The Initial Assistant Suggestions property allows you to define a set of pre-defined prompts that appear when the chat starts. These prompts help users by providing suggestions on what they can ask or interact with next. Each suggestion consists of a label (the text shown to the user) and a value (the underlying data that triggers specific actions or responses). When a user clicks on a prompt, the associated value is sent to the AI to initiate a response.

*Format*:

```JS
[
  { "label": "Create support dashboard", "value": "How do I build a support dashboard?" },
  { "label": "View account settings", "value": "How can I update my account information?" }
]
```

You can use JavaScript to dynamically generate these suggestions. For example, the `map()` function can be used to create suggestions from an array of data.

```JS
{{usersAPI.data.map(suggestion => ({
  label: suggestion.title,
  value: suggestion.description
}))}}
```

</dd>


#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget is not visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to control the widget's visibility conditionally.

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```

</dd>

### Assistant

These properties allow you to configure the name and description of the Chat widget. 

#### Assistant Name

<dd>

The Assistant Name property allows you to define the name displayed for the AI Assistant in the chat widget. This name appears at the top of the chat interface, helping users identify the assistant they are interacting with.


</dd>

#### Initial message

<dd>

The Initial Message property sets the default message displayed to users when the chat widget is loaded. This message appears below the chat title and provides context or a starting point for the user.

You can use static text or bind dynamic data using `{{}}` to tailor the message.

```js
Hello, {{appsmith.user.email}}. How can we help you today?
```

</dd>


## Style properties
Style properties allow you to change the look and feel of the widget.

### General

General properties are essential configurations that provide overall control over the widget's behavior and appearance. 


#### Height

<dd>

This property controls the vertical size of the Chat widget:

- Medium
- Large
- Fit to Page

You can also set it dynamically using JavaScript with `{{}}`, and apply values like `MEDIUM`, `LARGE`, or `FIT_PAGE`.

</dd>


## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `AIChat1.isVisible`.


#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{AIChat1.isVisible}}
```

</dd>

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and you can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
AIChat1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})

```

</dd>
