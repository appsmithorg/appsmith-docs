# Allow Large Files

In self-hosted Appsmith instances, the default file size limit is 150 MB. You can adjust the limit to support larger files. This page explains how to update the file upload limit and configure reverse proxies or load balancers, if used, to ensure the new limits are applied.

## Change file size limit

To accommodate larger file uploads, update the Appsmith instance configuration by setting the `APPSMITH_CODEC_SIZE` environment variable in your deployment configuration. When installed on:

- **Docker**: Update the `docker.env` file.
- **Kubernetes**: Update the `values.yaml` file.

To increase the file upload limit to 500 MB, use the following configuration:

```bash
APPSMITH_CODEC_SIZE=500MB
```

## Change reverse proxy or load balancer limit

If your Appsmith instance is behind a reverse proxy or load balancer, you also need to configure the file upload limits in the proxy or load balancer settings. Below are example configurations:

* **Nginx**: Add or update the following directive in your Nginx configuration file to support an upload limit of 500 MB:

 ```bash
  client_max_body_size 500M;
 ```

* **Caddy**: Set the `max_request_body` directive in your Caddy configuration file:

 ```bash
  max_request_body 500M;
 ```

* **Load balancers**: Configure the proxy-body-size or similar directive in your load balancer settings:

 ```bash
  proxy-body-size 500M;
 ```

## Important considerations

- Ensure that all relevant components—Appsmith instance, reverse proxy, and load balancer—are configured to handle the desired file size limits. 
- If you’re using the FilePicker widget, make sure that the limits set for the [Max number of files](/reference/widgets/filepicker#max-no-of-filesnumber) and [Max file size](/reference/widgets/filepicker#max-file-sizenumber) properties fall within the file size limits configured for your Appsmith instance.

## Troubleshooting

If you face issues after updating configurations, review your reverse proxy logs for errors. If the issues persist, use the chat widget at the bottom of the page to contact the support team.