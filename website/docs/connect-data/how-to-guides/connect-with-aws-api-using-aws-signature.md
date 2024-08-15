# Connect to AWS API using AWS Signature

Amazon Web Services (AWS) APIs requests uses [AWS Signature Version 4](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html) to ensure they are secure and authenticated. This page shows how to connect to AWS APIs using AWS Signature Version 4 authentication.

## Prerequisites

Before you start, ensure you have the following:

- **AWS Access Key ID** and **Secret Access Key** are necessary for generating signing key and signature. You can get them from the AWS Management Console or your AWS administrator.
- **AWS Region** where your AWS services are hosted.

## Create canonical request hash

The canonical request is a standardized format of your HTTP request that AWS uses to verify its integrity and authenticity. To secure API request, AWS requires a hashed version of this canonical request. Follow these steps to generate the canonical request hash:

1. Determine the HTTP request method for the API request, such as `GET`, `POST`, `PUT`, or `DELETE`.

2. Use the URI-encoded path of the API. This is the part of the URL following the domain name. For example, for the AWS S3 `GetObject` API, the canonical URI is `/object-reference`. If the path is empty, use a single forward slash (`/`).

3. Include the URI-encoded query string parameters required by the API. Encode each name and value individually and sort the parameters alphabetically by key. For example, `prefix=somePrefix&marker=someMarker`. If there are no query parameters, set this to an empty string (`""`).

4. List the required headers for the API request. Headers should be in lowercase and sorted alphabetically. Include:
    - `host`: The domain name of the service, such as `your-bucket.s3.us-east-2.amazonaws.com`.
    - `x-amz-date`: The timestamp in UTC, formatted as `YYYYMMDD'T'HHMMSS'Z'`.
    - `x-amz-security-token`: If using temporary credentials, include this header.

    Example of canonical headers:
    ```
    host:your-bucket.s3.us-east-2.amazonaws.com
    x-amz-date:20240814T123456Z
    x-amz-security-token:your-session-token
    ```

5. Create a semicolon-separated list of lowercase header names that you included in the canonical headers. For example, `host;x-amz-date;x-amz-security-token`.

6. For the payload hash, compute the SHA-256 hash of the request payload. If the request has no payload (like a `GET` request), use empty string. For AWS S3, use`UNSIGNED-PAYLOAD` instead of empty string. For example:
    - For `POST` or `PUT` requests, compute the SHA-256 hash of the payload.
    - For `GET` requests, use empty string to compute the SHA-256 hash, except for AWS S3 APIs where compute the SHA-256 hash using `UNSIGNED-PAYLOAD`.

7. Concatenate the above elements separated by newline characters to create the canonical request string in the format as shown below:

    ```
    HTTPMethod
    CanonicalURI
    CanonicalQueryString
    CanonicalHeaders
    SignedHeaders
    PayloadHash
    ```

8. Create a hash of the canonical request using same algorithm that you used to create the hash of the request payload. You can use the `openssl` command line tool or other similar utilities to generate the hash.

## Generate string to sign

After generating the canonical request hash, the next step is to create the string to sign. The string to sign is a combination of algorithm, request date, credential scope, and canonical request hash separated by newline characters. There is no newline character after `<canonical_request_hash>`
```javascript
AWS4-HMAC-SHA256
<request-date-time-in-iso-8601-format>
<credential_scope>
<canonical_request_hash>
```

## Generate the signature

Follow the steps below to generating the signature:

1. Derive the signing key by performing a series of hash operations on the request date, Region, and service. You need your AWS secret access key as the key for the initial hashing operation. You can use `openssl` commands to perform hashing.
 
2. Use the signing key you derived above as a hash to generate the signature. You can use `openssl` command to perform hashing.

## Make HTTP request

Follow these steps to make an HTTP request to the AWS API:
1. Create a REST API Query, add URL and the HTTP method.
2. Add the below details to set the header:
      * **Key** - Authorization
      * **Value** - Add the generated signature
3. Configure more headers and other configurations as needed. For more information about configuring REST API Query, see [REST API Query](/connect-data/reference/rest-api#query-rest-api)
4. Click the **Run** button to test the API.

## Troubleshooting

If you face issues when generating the AWS Signature or making requests, consider the following:

- Ensure the date and time are in UTC and formatted as required.
- Verify that the canonical request and string to sign hashed are as required.
- Ensure you have included all the required headers and parameters.

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.
