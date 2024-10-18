# Upload File Size Limit

In self-hosted Appsmith instances, the default file size limit is 150 MB. You can adjust the limit to support larger files. This page explains how to update the file size limit and configure reverse proxies or load balancers, if used, to ensure the new limits are applied.

## Change file size limit

To accommodate large files, update the Appsmith instance configuration by setting the `APPSMITH_CODEC_SIZE` environment variable in your deployment configuration. When installed on:

- **Docker**: Update the `docker.env` file.
- **Kubernetes**: Update the `values.yaml` file.

For example, to increase the file size limit to 500 MB, use the following configuration:

```bash
APPSMITH_CODEC_SIZE=500
```

## Change reverse proxy or load balancer limit

If your Appsmith instance is behind a reverse proxy or load balancer, you also need to configure the file size limits in the proxy or load balancer settings. Below are example configurations:

* **Nginx**: Add or update the following directive in your Nginx configuration file. For example, to set a size limit of 500 MB, update the configuration as below:

 ```bash
  client_max_body_size 500M;
 ```

* **Caddy**: Set the `max_request_body` directive in your Caddy configuration file. For example, to set a size limit of 500 MB, update the configuration as below:

 ```bash
  max_request_body 500M;
 ```

* **Load balancers**: Configure the `proxy-body-size` or similar directive in your load balancer settings. For example, to set a size limit of 500 MB, update the configuration as below:

 ```bash
  proxy-body-size 500M;
 ```

## Important considerations

- Ensure you have configured all relevant components: Appsmith instance, reverse proxy, and load balancer to handle the desired file size limits. 
- If you’re using the FilePicker widget, make sure that the limits set for the [Max number of files](/reference/widgets/filepicker#max-no-of-filesnumber) and [Max file size](/reference/widgets/filepicker#max-file-sizenumber) properties fall within the file size limits configured for your Appsmith instance.

## Troubleshooting

After updating configurations, review your reverse proxy logs for errors if you encounter any issues. Use the chat widget at the bottom of the page to contact the support team if you need help.
