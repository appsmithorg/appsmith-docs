---
title: LinkedIn
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>LinkedIn</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->


This page provides information for connecting Appsmith to LinkedIn, which allows you to retrieve user profile information, create posts, and manage LinkedIn content directly from your applications.

### Connect LinkedIn

The following section is a reference guide that provides a complete description of all the parameters to connect to a LinkedIn datasource.

#### Authentication

<dd>

You can authenticate using OAuth 2.0. To connect LinkedIn to Appsmith, you'll need to:

1. **Set up a LinkedIn Developer App**:
   - Navigate to the [LinkedIn Developer Portal](https://www.linkedin.com/developers/).
   - Create a new application to obtain your **Client ID** and **Client Secret**.
   - Configure the necessary OAuth 2.0 redirect URLs and permissions (scopes) required for your application.

2. **Configure the LinkedIn Integration**:
   - In Appsmith, when creating a new LinkedIn datasource, you'll be prompted to authenticate.
   - Review the requested permissions and click **Allow** to grant Appsmith access to your LinkedIn account.
   - The OAuth flow provides secure access to your LinkedIn profile and content based on the permissions granted.

The authentication process requires you to have a browser session and will redirect you to LinkedIn's authorization page where you can approve the connection.

</dd>

## Query LinkedIn

The following section is a reference guide that provides a description of the available commands with their parameters to create LinkedIn queries.

### Get User Info

The Get User Info command retrieves the authenticated LinkedIn user's basic profile information using the LinkedIn API via a proxy. This is useful for fetching the current user's details, such as their user ID (sub), email, and name, which can then be used in other queries or displayed in your application.

### Create Post

The Create Post command allows you to create a new post on LinkedIn. You can specify the post content, visibility settings, lifecycle state, and the author who will publish the post. This is useful for automating content sharing, scheduling posts, or integrating LinkedIn posting into your workflow.

#### Author `string`

<dd>

The author identifier specifies who will create the post. This should be a LinkedIn person URN (Uniform Resource Name) in the format `urn:li:person:{id}` or just the person identifier.

*Example:* If you want to use a static author ID:

```javascript
urn:li:person:123456789
```

*Example:* If you want to dynamically set the author using data from a previous query (Get User Info):

```javascript
urn:li:person:{{GetUserInfo.data.output.sub}}
```

</dd>

#### Lifecycle State `string`

<dd>

The lifecycle state determines whether the post is published immediately or saved as a draft. This field is mandatory and accepts two values:

- **`PUBLISHED`** - The post is published immediately and becomes visible to the specified audience.
- **`DRAFT`** - The post is saved as a draft and can be published later.

*Example:* To publish a post immediately:

```javascript
PUBLISHED
```

</dd>

#### Text `string`

<dd>

The text content of the LinkedIn post. This is the main message that will appear in the post. You can include plain text, and LinkedIn supports basic formatting. This field is mandatory.

*Example:* If you want to dynamically set the post content from an Input widget:

```javascript
{{PostContentInput.text}}
// Example: "Excited to share our latest product update! 🚀"
```

*Example:* If you want to combine multiple data sources:

```javascript
{{PostContentInput.text}} - Check out more at {{WebsiteInput.text}}
```

</dd>

#### Visibility `string`

<dd>

The visibility setting determines who can see the post. This field is mandatory and accepts two values:

- **`PUBLIC`** - The post is visible to everyone on LinkedIn (public visibility).
- **`CONNECTIONS`** - The post is visible only to your LinkedIn connections.

*Example:* To make the post public:

```javascript
PUBLIC
```

</dd>

### Create Post With Media

The Create Post With Media command allows you to create a LinkedIn post with rich content including media (images, videos, etc.) using the LinkedIn API via a proxy. This command supports advanced post creation with media attachments, descriptions, and titles, enabling you to create more engaging content on LinkedIn.

#### Author `string`

<dd>

The author identifier specifies who will create the post. This should be a LinkedIn person URN (Uniform Resource Name) in the format `urn:li:person:{id}` or constructed dynamically using data from other queries.

*Example:* If you want to use a static author ID:

```javascript
urn:li:person:123456789
```

*Example:* If you want to dynamically set the author using data from the Get User Info query:

```javascript
urn:li:person:{{GetUserInfo.data.output.sub}}
```

</dd>

#### Lifecycle State `string`

<dd>

The lifecycle state determines whether the post is published immediately or saved as a draft. This field is mandatory and accepts two values:

- **`PUBLISHED`** - The post is published immediately and becomes visible to the specified audience.
- **`DRAFT`** - The post is saved as a draft and can be published later.

*Example:* To publish a post immediately:

```javascript
PUBLISHED
```

</dd>

#### Text `string`

<dd>

The text content for the post commentary. This is the text that will appear alongside the media in the post. This field is mandatory.

*Example:* If you want to dynamically set the text content from an Input widget:

```javascript
{{PostTextInput.text}}
```

*Example:* If you want to use static text:

```javascript
Check out our latest product launch!
```

</dd>

#### Media Category `string`

<dd>

The media category specifies the type of media being shared in the post. This field is mandatory and accepts the following values:

- **`IMAGE`** - For image media
- **`VIDEO`** - For video media
- **`ARTICLE`** - For article media
- **`NONE`** - For posts without media

*Example:* To specify an image post:

```javascript
IMAGE
```

</dd>

#### Media Array `string`

<dd>

The media array contains the media objects to be included in the post. This should be a JSON array containing media objects with properties like `status`, `description`, `media` (URN), and `title`. This field is mandatory.

The structure should follow LinkedIn's UGC (User Generated Content) API format:

```json
[
  {
    "status": "READY",
    "description": {
      "text": "Image description"
    },
    "media": "urn:li:digitalmediaAsset:...",
    "title": {
      "text": "Test Image"
    }
  }
]
```

*Example:* If you want to construct the media array dynamically:

```javascript
[{
  "status": "READY",
  "description": {
    "text": {{ImageDescriptionInput.text}}
  },
  "media": {{_.last(RegisterAssetUpload.data.output.value.asset.split(":"))}},
  "title": {
    "text": {{ImageTitleInput.text}}
  }
}]
```

**Note:** The `media` field should contain a URN from a previously registered asset upload. You'll need to use LinkedIn's asset upload API to register media before creating the post.

</dd>

#### Visibility `string`

<dd>

The visibility setting determines who can see the post. This field is mandatory and accepts two values:

- **`PUBLIC`** - The post is visible to everyone on LinkedIn (public visibility).
- **`CONNECTIONS`** - The post is visible only to your LinkedIn connections.

*Example:* To make the post public:

```javascript
PUBLIC
```

</dd>

### Register Media Upload Request

The Register Media Upload Request command registers a media upload request with LinkedIn to obtain upload URLs and asset identifiers for images or videos. This is the first step in uploading media to LinkedIn before creating posts with media attachments.

#### Author `string`

<dd>

The author identifier specifies who will own the media. This should be a LinkedIn person URN (Uniform Resource Name) in the format `urn:li:person:{id}` or constructed dynamically using data from other queries.

*Example:* If you want to use a static author ID:

```javascript
urn:li:person:123456789
```

*Example:* If you want to dynamically set the author using data from the Get User Info query:

```javascript
urn:li:person:{{GetUserInfo.data.output.sub}}
```

</dd>

#### Media Category `string`

<dd>

The type of media to register for upload. This field is mandatory and accepts two values:

- **`image`** - For image media uploads
- **`video`** - For video media uploads

*Example:* To register an image upload:

```javascript
image
```

</dd>

### Get Media Upload Status

The Get Media Upload Status command checks the upload/processing status of media (image, video, or document) on LinkedIn using the LinkedIn API via a proxy. This is useful for monitoring the status of uploaded media assets before using them in posts or other LinkedIn content.

#### Media Category `string`

<dd>

The type of media to check status for. This field is mandatory and accepts three values:

- **`image`** - For image media
- **`video`** - For video media
- **`document`** - For document media

*Example:* To check status of an image:

```javascript
image
```

</dd>

#### Media ID `string`

<dd>

The unique identifier of the media to check status for. This is the media ID returned when you register a media upload with LinkedIn's API. This field is mandatory.

*Example:* If you want to dynamically check status using a media ID from a previous query:

```javascript
{{RegisterAssetUpload.data.output.value.asset}}
```

*Example:* If you have a specific media ID:

```javascript
D4S22AQG7l8cHwx9SgA
```

</dd>

### Custom Action

Use Custom Action to make direct API requests to LinkedIn endpoints that are not included in the built-in command set. This is helpful when you need to access newer or less common LinkedIn features, perform advanced operations, or interact with LinkedIn API endpoints that aren't covered by the standard commands.

You can define the HTTP method, endpoint path, headers, and body to call any LinkedIn API route supported by their [official documentation](https://learn.microsoft.com/en-us/linkedin/).

**Note:** Some LinkedIn API endpoints, such as the Get Profile By Id API, are only available to selected developer accounts that have been granted access by LinkedIn. If you receive an error when using these endpoints, it may indicate that your developer account does not have the required permissions.

*Example:* Get Profile By Id:

<dd>

```bash
GET /v2/people/(id:{{ProfileIdInput.text}})
```

With headers:

```
Authorization: Bearer <access_token>
LinkedIn-Version: 202402
```

</dd>
