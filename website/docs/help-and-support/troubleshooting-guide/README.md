import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Overview

When using Appsmith, you may encounter errors related to both self-hosting the platform and building applications. This page provides detailed resources to help you troubleshoot and resolve common issues. Whether you're facing deployment issues, database connection problems, or application-specific errors, you can find the relevant troubleshooting guides below for step-by-step solutions.

These steps will help you quickly identify and address common issues:

1. Check your Appsmith version. Knowing your version is crucial for debugging and ensuring compatibility with the latest features and fixes. 

<dd>

- For Docker: Run the following command in your terminal: 

<dd>

```bash
docker exec -it appsmith cat info.json
```

</dd>

- For Kubernetes: Run the following command to check the version:

<dd>

```bash
kubectl exec -it <appsmith-pod-name> -- cat /appsmith-stacks/configuration/info.json
```
</dd>


</dd>

2. After confirming your Appsmith version, visit the [Appsmith GitHub Release Notes](https://github.com/appsmithorg/appsmith/releases) to compare your version with the latest release. If your version is outdated, consider upgrading to resolve known issues and benefit from new features.

<dd>


See the [upgrade guides](/getting-started/setup/instance-management) for instructions on how to upgrade.

</dd>

3. After checking your version, verify the logs to identify any errors or issues with your deployment. Logs provide critical information regarding Appsmith's health and any errors that might be affecting the platform.

<dd>

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

</dd>

4. To resolve potential issues related to resource allocation or configuration changes, restart the Appsmith services. This can help in clearing temporary issues and ensuring smooth operation.

<dd>

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