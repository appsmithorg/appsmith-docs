# Overview

When using Appsmith, you may encounter errors related to both self-hosting the platform and building applications. This page provides detailed resources to help you troubleshoot and resolve common issues. Whether you're facing deployment issues, database connection problems, or application-specific errors, you can find the relevant troubleshooting guides below for step-by-step solutions.

To troubleshoot your issue, you can try the following:


### Check Your Appsmith Version

It is important to verify the version of Appsmith you are using. Knowing your version ensures compatibility with the latest features and fixes. This step can help you identify if your version is outdated and may require an update to resolve certain issues.


- For Docker: 

<dd>

```bash
docker exec -it appsmith cat info.json
```

</dd>

- For Kubernetes: 

<dd>

```bash
kubectl exec -it <appsmith-pod-name> -- cat /appsmith-stacks/configuration/info.json
```
</dd>

Once you've confirmed your version, visit the [Appsmith GitHub Release Notes](https://github.com/appsmithorg/appsmith/releases) to compare your current version with the latest release. If your version is outdated, consider upgrading to the latest version to benefit from the latest fixes and features.

For instructions on how to upgrade, please refer to our [upgrade guides](/getting-started/setup/instance-management).


### Verify Logs for Errors

Logs provide valuable insights into the health of your Appsmith instance and can help identify underlying issues affecting the platform. Reviewing the logs is essential for troubleshooting errors that might occur during deployment or operation.

- For Docker: You can view logs using the following command:

<dd>

```bash
docker logs appsmith
```
</dd>

- For Kubernetes: Use the following command to view logs for the Appsmith pod:

<dd>

```bash
kubectl logs <appsmith-pod-name>
```
</dd>


### Restart Services

To resolve potential issues related to resource allocation or configuration changes, restart the Appsmith services. This can help in clearing temporary issues and ensuring smooth operation.

- For Docker:

<dd>

```bash
docker restart appsmith
```
</dd>


- For Kubernetes:

<dd>

```bash
kubectl rollout restart deployment appsmith
```

</dd>


If the steps above don’t resolve your issue, refer to more specific troubleshooting guides:


<div className="containerGridSampleApp">
   <!-- Self-Hosting Errors -->
   <a className="containerAnchor containerColumnSampleAppNoGradient columnGrid column-one" href="/help-and-support/troubleshooting-guide/deployment-errors">
      <div className="containerHead">
         <div className="containerHeading">
            <b>Self-Hosting Errors</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         This section guides you through troubleshooting common errors encountered during self-hosting Appsmith. It covers deployment issues, server setup, and configuration errors.
      </div>
   </a>
   <!-- Application Errors -->
   <a className="containerAnchor containerColumnSampleAppNoGradient columnGrid column-two" href="/help-and-support/troubleshooting-guide/application-errors">
      <div className="containerHead">
         <div className="containerHeading">
            <b>Application Errors</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Learn how to resolve issues related to building and running your Appsmith applications. This guide covers errors with widgets, APIs, workflows, and integrations.
      </div>
   </a>
</div>



## Contacting Support

If you are unable to resolve your issue using the provided troubleshooting guides, you can contact Appsmith support for assistance. To get in touch with the support team, use the chat widget on the page for further help.