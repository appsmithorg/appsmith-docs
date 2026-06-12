# Embedding and Content Security Errors

This page shows how to resolve common embedding, iframe, and Content Security Policy (CSP) errors on Appsmith.

### Appsmith app blocked when embedded in an external site

#### Cause

To mitigate clickjacking, Appsmith sets the `Content-Security-Policy` header with the `frame-ancestors` directive. From `v1.7.10`, apps cannot be loaded in a frame or iframe on domains other than the app's own domain, so embedding on an external site is blocked by default.

#### Solution

- Allow the embedding domain(s) with the `APPSMITH_ALLOWED_FRAME_ANCESTORS` environment variable, for example `APPSMITH_ALLOWED_FRAME_ANCESTORS="'self' http://trusted-other.com"`. Separate multiple domains with spaces. See [Environment variables](/getting-started/setup/environment-variables).
- For background on the clickjacking protection, see [Security](/product/security).

### Removing 'unsafe-eval' from the CSP header

#### Cause

Security scans flag `unsafe-eval` in Appsmith's CSP headers on self-hosted instances.

#### Solution

- Appsmith does not provide a documented way to remove `unsafe-eval` from the CSP header. The platform already mitigates the related risks: iFrame/Custom widgets are sandboxed against XSS, and the `Content-Security-Policy` header with `frame-ancestors` is used to mitigate clickjacking when apps are embedded externally. See [Security](/product/security).

### Script tags or external libraries not working in Custom or iframe widgets

#### Cause

Iframe and Custom widgets are sandboxed by default (since v1.8.6) using the `sandbox` attribute to mitigate XSS. This sandbox can block script tags, external libraries, and file downloads inside the widget.

#### Solution

- Set `APPSMITH_DISABLE_IFRAME_WIDGET_SANDBOX=true` in `stacks/configuration/docker.env` to remove the sandbox attributes, then restart. This is an all-or-nothing toggle (you cannot selectively enable only `allow-downloads`), so use it judiciously. See [Sandboxed Iframe widgets](/product/security#sandboxed-iframe-widgets).
- This is also the fix when file downloads from a Custom widget are blocked by the browser.

### Embedding requires login but the app must be public

#### Cause

The platform requires login, but a specific app needs to be embedded or viewed without authentication.

#### Solution

- Mark the individual app as **public** in the app settings menu. Public apps can be embedded and viewed anonymously even when the platform otherwise requires login.

### OIDC authentication breaks Appsmith embedded in an iframe

#### Cause

OIDC requires redirect-based login and is subject to third-party cookie limitations inside an iframe, so OIDC-authenticated Appsmith does not work reliably when embedded.

#### Solution

- Use SAML authentication instead of OIDC for embedded scenarios, as it works better with the cookie behavior required in an iframe.
- If SAML was already configured but failing, remove SAML and configure it again.
