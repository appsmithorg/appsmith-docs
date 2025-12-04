---
title: Asana
hide_title: true
---

<!-- vale off -->

<<div className="tag-wrapper">
 <h1>Dropbox Sign</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Dropbox Sign lets you create, update, and track signature requests without leaving Appsmith. Use these commands to kick off new agreements, resend or edit signer details, search existing requests, and download completed packets directly into your workflows.

## Connect Dropbox Sign

1. Create a new Dropbox Sign datasource in Appsmith and click **Authenticate**.
2. Sign in to your Dropbox Sign account (the flow mirrors GitHub OAuth) and approve Appsmith.
3. After the redirect, click **Test** to confirm the bearer token is stored, then save the datasource for reuse across queries.

No custom scopes or API keys are required—Appsmith keeps the token and refresh details tied to your account connection.

## Query Dropbox Sign

Choose a command from the **Commands** dropdown to configure its fields. Each command returns the JSON response from Dropbox Sign so you can bind it to widgets, save it to a database, or trigger downstream actions.

### Sign Create And Send Signature Request

Creates a new signature request using uploaded file URLs, signer details, and optional email content. The response includes the signature request ID, status, and signer URLs.

#### File Urls `array<string>`
<dd>
Required. Provide an array of file URLs that Dropbox Sign can fetch. Example:
```
["https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"]
```
Ensure every URL is publicly accessible or already shared with Dropbox Sign; otherwise the request will fail with a 400 error.
</dd>

#### Signers `array<object>`
<dd>
Required. Array of signer objects with `email_address`, `name`, and optional `order`.

```json
[
  {
    "email_address": "jack@example.com"
    ,
    "name": "Jack"
    ,
    "order": 0
  }
]
```
Match the number of signers to the document routing you expect. Missing email addresses will prevent the request from sending.
</dd>

#### Title `string`
<dd>
Optional subject line shown inside Dropbox Sign. Use this to distinguish similar agreements or add internal references.
</dd>

#### Subject `string`
<dd>
Optional email subject delivered to signers. Keep it short and identifiable so recipients recognize the message.
</dd>

#### Message `string`
<dd>
Optional email body displayed to all signers. Include instructions or deadlines for clarity. Markdown is not supported; plain text only.
</dd>

#### Cc Emails `array<string>`
<dd>
Optional list of CC recipients who should receive status notifications. Provide an array such as `["legal@example.com"]`.
</dd>

#### Attachments `array<object>`
<dd>
Optional files signers must upload back before completion. Each entry needs a `name` and `signer_index` that matches the signer order.

```json
[
  {
    "name": "Jack Doe File"
    ,
    "signer_index": 0
  }
]
```
</dd>

#### Signing Options `object`
<dd>
Optional configuration for allowed signature creation methods. Example payload:
```
{
  draw: true,
  type: true,
  default_type: "draw"
}
```
Unset fields fall back to the account-level defaults.
</dd>

#### Additional Fields `object`
<dd>
Optional feature flags such as hiding text tags, allowing declines, or overriding expiration. Example:
```
{
  hide_text_tags: true,
  allow_decline: true,
  expires_at: 1672396800
}
```
Timestamps must be Unix epoch seconds.
</dd>

### Sign Update Signature Request

Updates signer metadata or expiration on an existing request. Use this when a signer changes their email or you need to extend deadlines.

#### Signature Request Id `string`
<dd>
Required. The unique ID returned from create/search operations.
</dd>

#### Signature Id `string`
<dd>
Required. Identify the specific signer on the request.
</dd>

#### Email `string`
<dd>
Optional new email for the signer. Provide this or `Name` (or both) when updating contact details.
</dd>

#### Name `string`
<dd>
Optional signer display name. If you only change the name, leave the email blank.
</dd>

#### Expire At `integer`
<dd>
Optional Unix timestamp (seconds) to set a new expiration. Example `1685435660`. Dropbox Sign enforces maximum durations based on your plan.
</dd>

### Sign Get Signature Request By Id

Retrieves the latest status, metadata, and signer URLs for a single request.

#### Signature Request Id `string`
<dd>
Required. Use the ID from the create, search, or update commands to fetch the record.
</dd>

### Sign Search Signature Requests

Searches across requests with optional account, keyword, and pagination filters. Returns paginated collections you can feed into tables or filters.

#### Account Id `string`
<dd>
Optional team member account ID. Use `all` to search across the entire team; leaving it blank defaults to the authenticated account.
</dd>

#### Query `string`
<dd>
Optional free-text search string (for example `"John"`). Dropbox Sign matches signer names, emails, and metadata.
</dd>

#### Pagination Parameters `object`
<dd>
Optional object controlling page size, cursors, or order. Pass the structure expected by the Dropbox Sign API. If omitted, default pagination applies.
</dd>

### Sign Cancel Incomplete Signature Request

Cancels a draft or in-progress request that has not been fully executed. Use this to free up envelopes or stop mistaken sends.

#### Signature Request Id `string`
<dd>
Required. The ID of the incomplete request you want to cancel.
</dd>

### Sign Download Files

Downloads the finalized documents from a signature request. Useful when you need to archive PDFs or preview signatures inside Appsmith.

#### Signature Request Id `string`
<dd>
Required. The completed request to download.
</dd>

#### File Type `string`
<dd>
Optional. Choose the format returned by Dropbox Sign. Current dropdown options: `pdf`. Leave blank to use the default bundle type.
</dd>

### Custom Action

Build any Dropbox Sign REST call manually. The Custom Action form exposes the full HTTP editor so you can target endpoints that are not yet modeled in the command list.

<dd>
1. Pick the HTTP method, path, and query parameters documented in the Dropbox Sign API reference (https://developers.hellosign.com/api/reference/).
2. Use dynamic bindings to include authentication headers—`{{ datasource.authBearerToken }}` is injected automatically.
3. Provide the JSON body or multipart payload, then preview the response before saving.
</dd>

## Troubleshooting

- **Missing or invalid IDs:** Ensure you store `signatureRequestId` and `signatureId` from create/search responses. Requests fail with 404 if these IDs are truncated.
- **Auth prompts reappear:** If the datasource was deleted or credentials expired, re-open the datasource and click **Authenticate** to refresh the bearer token.
- **Payload validation:** Arrays such as `fileUrls`, `signers`, and `attachments` must be valid JSON. Wrap strings in double quotes and confirm timestamps are numeric seconds.
- **Downloads return empty files:** Verify the request has completed signatures; Dropbox Sign only generates files after all required signers finish.
