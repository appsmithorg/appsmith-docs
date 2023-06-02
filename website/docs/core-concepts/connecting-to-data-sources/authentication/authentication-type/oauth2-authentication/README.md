# OAuth 2.0

[Open Authentication (OAuth 2.0)](https://oauth.net/2/) is an open-standard authorization protocol that allows you to share information between services without revealing or exchanging your password. It is a widely used standard by developers to exchange information securely and thus provides **secure designated access** to the applications. For example, you can tell GitHub to give access to Appsmith to merge or create pull requests on your behalf without sharing your password. Thus, giving you the flexibility to allow the interaction between applications without exposing your password.

By using OAuth 2.0, you minimize the security risk. It ensures that even if the associated application is breached, your password is safe as it was never exposed.

## How does OAuth 2.0 work?

OAuth 2.0 is about authorization, asking for the permissions that govern the access. [OAuth2.0](https://oauth.net/2/) is a simplified redesigned version of OAuth 1.0. `OAuth 2.0` is faster and easier to implement and use.

There are four main participants in an OAuth 2.0 workflow: 
* Resource Owner
* Client, Authorization Server
* Resource Server

Using the OAuth 2.0 workflow, a **resource owner** that is a **user** or a **system** would like to authorize a **client** to access protected resources that can be accessed using an access token. A client asks for an access token from an **authorization server.** A client uses the access token and requests access from the resource server. A resource server validates the access token and returns the requested resource.

For example, John (**resource owner**) wants Notion (**client**) to post tweets on his behalf on Twitter. Twitter (**authorization and resource server**) generates a key and a secret for Notion to do the job. Notion uses the key and secret to create tokens and post the tweets on John’s behalf.

:::info
[OAuth 2.0](https://oauth.net/2/) is **not** backward compatible. If your app is OAuth 1.0 or 1.1, you’ll **not** be able to use OAuth 2.0 for integration.
:::

## Authentication Type - OAuth 2.0

For OAuth 2.0 integration, select `OAuth 2.0` from the available options.

![Select OAuth 2.0 as an Authentication Type](</img/OAuth__API_Integration__Authentication_Type.png>)

## Authentication Type

You can connect to your OAuth 2.0 APIs using Authenticated APIs on Appsmith. You select the Authentication type as OAuth 2.0. You can see in the below screenshot that you have the following available grant types to choose from.

![Configuration settings available for OAuth 2.0](</img/OAuth__API_Integration__Authentication_Type__OAuth_2.0__Grant_Types.png>)

### Grant types

An authorization grant type is a secured representation of the owner’s authorization presented in exchange for an access token.

 <VideoEmbed host="youtube" videoId="NOpmWnQuwwQ" title="Grant type" caption="Grant type"/> 


For OAuth 2.0 on Appsmith, you can use the below grant types to communicate with your APIs. Navigate to the below grant types for their specific configurations.

1. [Authorization Code](authorization-code.md)
2. [Client Credentials](client-credentials.md)

