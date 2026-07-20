---
description: Appsmith AI is deprecated. This page shows how to migrate your Appsmith AI queries to the OpenAI, Anthropic, or Google AI datasources using your own API key.
---

# Migrate from Appsmith AI

:::caution Deprecated
Appsmith AI is deprecated and stops working on **September 30, 2026**. Creating new Appsmith AI datasources is no longer possible. Existing datasources and queries continue to work until that date; files uploaded for context are not available afterwards.
:::

This page shows how to move your existing Appsmith AI queries to the [OpenAI](/connect-data/reference/open-ai), [Anthropic](/connect-data/reference/anthropic), or [Google AI](/connect-data/reference/google-ai) datasources using your own API key.

## Prerequisites

- An API key from the provider you want to use:
  - [OpenAI API keys](https://platform.openai.com/api-keys)
  - [Anthropic API keys](https://console.anthropic.com/settings/keys)
  - [Google AI Studio API keys](https://aistudio.google.com/apikey)
- A list of the queries in your app that use an Appsmith AI datasource. Each query uses one of the seven commands covered below.

:::note
With your own API key, the provider bills you directly for token usage. Appsmith does not proxy or pay for these requests.
:::

## Create the new datasource

1. Click the (**+**) sign in the **Datasources** pane.
2. Under **AI Integrations**, select **OpenAI**, **Anthropic**, or **Google AI**.
3. Enter your API key and save the datasource.

## Recreate each query

Every Appsmith AI command maps to a command on the new datasource. The Appsmith AI commands were purpose-built prompts over a large language model, so migrating a query mostly means moving your input into a prompt.

| Appsmith AI command | OpenAI | Anthropic | Google AI |
|---|---|---|---|
| Generate text | Chat | Chat | Generate Content |
| Summarise text | Chat | Chat | Generate Content |
| Classify text | Chat | Chat | Generate Content |
| Extract entities from text | Chat | Chat | Generate Content |
| Describe Image | Vision | Vision | Generate Content |
| Classify Image | Vision | Vision | Generate Content |
| Extract entities from image | Vision | Vision | Generate Content |

### Generate text

Move your **Prompt** into the message of the new Chat or Generate Content query. If you used standing instructions (tone, role, output format), put them in a system message.

### Summarise, classify, and extract entities from text

These commands wrapped your input in a task-specific prompt. Recreate the task as an explicit instruction in a Chat or Generate Content query:

- **Summarise text:** `Summarise the following text in about 5 sentences: {{Input1.text}}`
- **Classify text:** `Classify the following text into exactly one of these labels: Urgent, High priority, Low priority. Respond with only the label. Text: {{Input1.text}}`
- **Extract entities from text:** `Extract the following entities from the text: Name, Email, Address. Respond as JSON with one key per entity. If an entity is not found, use "Not found". Text: {{Input1.text}}`

Anything you had in **Additional Instructions** can be appended to the prompt. For classification and extraction, instructing the model to respond with only the label or only JSON keeps widget bindings simple.

### Image commands

Use the **Vision** command (OpenAI, Anthropic) or **Generate Content** with an image (Google AI). Pass the image as a URL or base64 string, the same formats Appsmith AI accepted, together with an instruction:

- **Describe Image:** `Describe this image.`
- **Classify Image:** `Classify this image into exactly one of: Jacket, Shirt, Pant, T-Shirt. Respond with only the label.`
- **Extract entities from image:** `Extract the following from this image: name, date of birth, license number. Respond as JSON.`

## Update widget bindings

The response structure differs between providers and from Appsmith AI. After recreating a query, run it once and re-bind your widgets to the new response structure. See the response details in the [OpenAI](/connect-data/reference/open-ai), [Anthropic](/connect-data/reference/anthropic), and [Google AI](/connect-data/reference/google-ai) references.

## Migrate file context

Appsmith AI's **Generate text** command could answer questions using files uploaded to the datasource (file context). Uploaded files and their indexes are not migrated and are **not available after September 30, 2026**. There is no drop-in replacement; choose the option that fits your data size:

- **Small documents:** include the document text directly in the prompt of a Chat or Generate Content query.
- **Larger document sets:** build a retrieval flow. For example, generate embeddings with the OpenAI datasource's **Embeddings** command, store them in a vector-capable database such as [PostgreSQL](/connect-data/reference/querying-postgres) with pgvector, and pass the retrieved passages into your prompt.
- **Provider-hosted retrieval:** upload documents to your provider's own file or retrieval tooling and call it with the [REST API datasource](/connect-data/reference/authenticated-api).

:::caution
If you rely on file context, download your original files and migrate before the shutdown date while they are still accessible.
:::

## Clean up

Once all queries in an app are migrated and verified, delete the old Appsmith AI queries and datasource.
