---
sidebar_position: 2
description: Visual representations of OAuth2 authentication flows in Appsmith
---

# OAuth2 Flow Diagrams

This page provides visual representations of OAuth2 authentication flows in Appsmith to help you understand how the authentication process works.

## Authorization Code Flow

```mermaid
sequenceDiagram
    participant User
    participant Appsmith
    participant ServiceProvider
    
    User->>Appsmith: 1. Configure OAuth2 Datasource
    Appsmith->>ServiceProvider: 2. Initiate OAuth2 Flow
    ServiceProvider->>User: 3. Request Authorization
    User->>ServiceProvider: 4. Grant Permissions
    ServiceProvider->>Appsmith: 5. Send Authorization Code
    Appsmith->>ServiceProvider: 6. Exchange Code for Tokens
    ServiceProvider->>Appsmith: 7. Return Access & Refresh Tokens
    Appsmith->>Appsmith: 8. Store Tokens Securely
    Appsmith->>User: 9. Connection Established
```

## Token Refresh Flow

```mermaid
sequenceDiagram
    participant Appsmith
    participant ServiceProvider
    
    Appsmith->>Appsmith: 1. Detect Expired Token
    Appsmith->>ServiceProvider: 2. Send Refresh Token
    ServiceProvider->>ServiceProvider: 3. Validate Refresh Token
    ServiceProvider->>Appsmith: 4. Issue New Access Token
    Appsmith->>Appsmith: 5. Update Stored Token
```

## Error Handling Flow

```mermaid
sequenceDiagram
    participant User
    participant Appsmith
    participant ServiceProvider
    
    Appsmith->>ServiceProvider: 1. API Request
    ServiceProvider->>Appsmith: 2. Token Invalid Error
    Appsmith->>ServiceProvider: 3. Attempt Token Refresh
    alt Refresh Successful
        ServiceProvider->>Appsmith: 4a. New Access Token
        Appsmith->>ServiceProvider: 5a. Retry API Request
    else Refresh Failed
        ServiceProvider->>Appsmith: 4b. Refresh Error
        Appsmith->>User: 5b. Request Re-authentication
    end
```

## Common OAuth2 Errors

Here are some common OAuth2 errors you might encounter and their typical causes:

1. **invalid_request**
   - Missing required parameters
   - Invalid parameter values
   - Multiple credentials provided

2. **invalid_client**
   - Client authentication failed
   - Invalid Client ID or Secret
   - Unauthorized client

3. **invalid_grant**
   - Authorization code expired
   - Refresh token invalid
   - Redirect URI mismatch

4. **unauthorized_client**
   - Client not authorized for grant type
   - Application permissions revoked
   - Invalid scope requested

5. **invalid_scope**
   - Requested scope is invalid
   - Scope exceeds granted permissions
   - Unknown scope values

## See Also

- [OAuth2 Authentication Overview](/connect-data/authentication/oauth2-authentication)
- [Environment Variables Configuration](/getting-started/setup/environment-variables)
- [Authentication Setup](/getting-started/setup/instance-configuration/authentication)
