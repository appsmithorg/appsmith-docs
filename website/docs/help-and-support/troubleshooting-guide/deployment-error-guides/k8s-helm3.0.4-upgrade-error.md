# Kubernetes Helm Chart 3.0.4 Upgrade Error

This issue may arise during the process of updating Appsmith Business or Enterprise deployments using Helm when transitioning from chart version `3.0.4` to `3.0.7`. The upgrade attempt fails due to an inability to build Kubernetes objects from the current release manifest.

### Error Message

When the error occurs, you'll see an output similar to the following:

<Message
  messageContainerClassName="error"
  messageContent="UPGRADE FAILED: unable to build kubernetes objects from current release manifest: resource mapping not found for name: '<chart-name>' namespace: '<namespace>' from '': no matches for kind 'HorizontalPodAutoscaler' in version 'autoscaling/v2beta1' ensure CRDs are installed first"
/>

### Cause

This upgrade issue is tied to the mechanisms Helm uses for version management. As Helm attempts to apply the newer chart, it conducts a comparison between the existing application configuration on your cluster and the proposed updates in the chart. If an API version has been retired in Kubernetes, the associated Go Client library will not recognize the deprecated objects, which triggers the error and ultimately causes the upgrade process to crash.

### Solution

To overcome this snag, the `helm-mapkubeapis` plugin can be a valuable tool. It aids Helm in comprehending the modifications introduced by new Kubernetes versions.

Here's how you can use the plugin to remedy the upgrade problem:

1. Commence by installing the `helm-mapkubeapis` plugin. Open your terminal and execute:

```bash
helm plugin install https://github.com/helm/helm-mapkubeapis
```

2. Confirm the successful installation of the plugin:

```bash
helm plugin list
```

Please note: sometimes the command may be `helm plugin ls`.

3. Next, use the plugin on your Appsmith chart by replacing `&lt;APPSMITH-CHART-NAME&gt;` and `&lt;NAMESPACE&gt;` with your specific chart name and namespace:

```bash
helm mapkubeapis <appsmith-chart-name> -n <namespace></namespace></appsmith-chart-name>
```

4. Finally, perform the upgrade of your Appsmith installation by issuing the upgrade command, adapting the flags and values according to your deployment:

```bash
helm upgrade -i appsmith-ee appsmith-ee/appsmith -n appsmith-ee -f values.yaml
```

By following these steps, you should be able to bypass the error and successfully upgrade your Appsmith installation on Kubernetes.
