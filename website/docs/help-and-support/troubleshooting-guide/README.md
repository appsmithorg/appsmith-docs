import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Overview

When using Appsmith, you may encounter errors related to both self-hosting the platform and building applications. This page provides detailed resources to help you troubleshoot and resolve common issues. Whether you're facing deployment issues, database connection problems, or application-specific errors, you can find the relevant troubleshooting guides below for step-by-step solutions.


## Check Appsmith version

If you need to check your Appsmith version, this can be helpful when sharing the version with the support team to debug issues or verify if you're running the latest version. Follow the steps based on your setup:

<Tabs>
  <TabItem value="cloud" label="Appsmith Cloud" default>

If you are using Appsmith Cloud, follow these steps to check your version:


   1. Log in to your Appsmith Cloud account.
   2. On the homepage, click on the **Help (?)** icon in the top-right corner.
   3. A modal appears showing your current version, like: `Appsmith 728cbdc1`.

  </TabItem>
  <TabItem value="Docker" label="Docker">
    
    If you are using Docker to host Appsmith and want to check your version, follow these steps:



    1. Run the following command in your terminal:
    
    <dd>

   ```bash
    docker exec -it appsmith cat info.json
   ```

    </dd>


   2. Look for the version field in the output, which shows your current Appsmith version.


  </TabItem>
  <TabItem value="Kubernetes" label="Kubernetes">

  If you are using Kubernetes (K8s) to deploy Appsmith and need to check the version, follow these steps:


   1. Identify the name of the Appsmith pod:

 <dd>

```bash
kubectl get pods  
```

 </dd>

2. Run the following command to check the version:

 <dd>

```bash
kubectl exec -it <appsmith-pod-name> -- cat /appsmith-stacks/configuration/info.json  
```

 </dd>

3. Look for the `version` field in the output.

  </TabItem>
</Tabs>


---

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

---

## Contacting Support

If you are unable to resolve your issue using the provided troubleshooting guides, you can contact Appsmith support for assistance. To get in touch with the support team, use the chat widget on the page for further help.