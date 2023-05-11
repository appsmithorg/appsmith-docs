# AI features in Appsmith


:::info Availablity
Appsmith's AI features are currently in **Private Beta** and available only for select users. You can **[join the waitlist](https://app.appsmith.com/app/ask-ai-waitlist/signup-645a72b1da60c6288bd77995)** and sign up for an early preview. You will be notified via email whenever AI features are available on your workspace. 
:::

The Appsmith platform includes AI capabilities that are powered by [OpenAI GPT](https://platform.openai.com/docs/models) models. All AI features are deeply embedded within the product and you can contextually summon AI during various stages of your building process. 


### JS Expression Generation
[Binding data](/learning-and-resources/how-to-guides/writing-javascript-in-appsmith#binding-data) into a widget property is one of the most common and frequently performed operations while building an app on Appsmith. Most bindings require you to write a JS expression for transforming API/Query data before displaying it on a widget. You can now use the power of AI to generate these JS expressions using plain English prompts. 

**How can I use AI to bind data?**

You should see an AI icon on supported widget properties. Click on the icon to get started. 

[screenshot]


:::tip Note
Please ensure that you have a valid [API](/core-concepts/connecting-to-data-sources/authentication)/[Query](/core-concepts/data-access-and-binding/querying-a-database) and some response data before you ask AI to generate JS expressions. You can connect to a [mock datasource](/learning-and-resources/tutorials/review-moderator-dashboard/connecting-to-data-source-and-binding-queries#connecting-to-postgres-mock-db) if you do not have your own datasource readily available.

Here are some example prompts for the products Mock DB to help you get started:
- `Get a list of products that belong to beverages category and have mrp less than 20`
- `Get a list of categories from get_products for displaying on a Select widget`
:::





:::caution Privacy
Appsmith will not share any datasource contents or raw data with OpenAI. However, certain metadata like the database schema or API response schema will be shared with OpenAI in order to be more efficient. If you have sensitive information as a part of your API/Query metadata, please do not use Appsmith's AI features. 

All AI features are experimental and may contain bugs. Please use AI features at your own discretion and feel free to share any feedback by reaching out to Support. 
:::

