---
id: hosting-js-libraries
title: Hosting JavaScript Libraries Locally
---

In air-gapped environments or locations with limited internet access, loading external JavaScript libraries can be problematic, potentially causing widgets and custom components to fail. This guide explains how to host JavaScript libraries locally within your Appsmith deployment to ensure uninterrupted functionality.

## Prerequisites

- Access to your Appsmith deployment server
- Docker installed (if using Docker-based deployment)
- The JavaScript library files you want to host locally

## Hosting JavaScript Libraries Locally

### 1. Download Required Libraries

First, download the JavaScript libraries you need to host locally. For example, to download a library like Moment.js:

```bash
# Create a directory for your libraries
mkdir -p js-libraries
cd js-libraries

# Download the library (example using curl)
curl -O https://momentjs.com/downloads/moment.min.js
```

### 2. Copy Files to Appsmith Container

If you're using Docker for deployment:

```bash
# Copy the file into the Appsmith container
docker cp moment.min.js appsmith:/opt/appsmith/js-libraries/

# Create a directory in the container if it doesn't exist
docker exec appsmith mkdir -p /opt/appsmith/js-libraries
```

### 3. Configure Appsmith to Serve Static Files

Add the following configuration to your Docker Compose file or environment variables:

```yaml
environment:
  APPSMITH_SERVE_STATIC_FILES: "true"
  APPSMITH_STATIC_FILES_PATH: "/opt/appsmith/js-libraries"
```

### 4. Update Library References

In your Appsmith application:

1. Open the page where you need to use the library
2. Navigate to the page settings
3. Under "External Libraries", replace the CDN URL with your local URL:
   ```
   http://localhost/static/moment.min.js
   ```
   Replace `localhost` with your Appsmith server's domain name.

### 5. Verify the Setup

1. Refresh your Appsmith application
2. Open the browser's developer tools (F12)
3. Check the Network tab to ensure the library is loading from your local server
4. Test the functionality that depends on the library

## Best Practices

- Keep an inventory of locally hosted libraries and their versions
- Regularly update libraries to patch security vulnerabilities
- Consider hosting only essential libraries to minimize maintenance overhead
- Test thoroughly after adding or updating local libraries

## Troubleshooting

If the library fails to load:

1. Verify file permissions in the container
2. Check the library path in your application settings
3. Ensure the static file serving is properly configured
4. Review Appsmith server logs for any related errors

## See Also

- [Air-Gapped Installation Guide](air-gapped-installation)
- [Custom Widget Development](../../custom-widgets)
- [Environment Variables Reference](../../core-concepts/environment-variables)
