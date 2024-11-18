---
description: Deploy Appsmith on Alibaba cloud compute nest.

---

# Alibaba Cloud Compute Nest

This page provides one click install Appsmith on Alibaba cloud compute nest using an ECS instance.

## Prerequisites

* Alibaba cloud account. If you don't have one, [Create an Alibaba Cloud Account](https://account.alibabacloud.com/register/intl_register.htm).

## One Click Install Appsmith

1. Visit the [compute nest Appsmith](https://computenest.console.aliyun.com/service/instance/create/default?type=user&ServiceName=Appsmith%E7%A4%BE%E5%8C%BA%E7%89%88)
   deployment link and fill in the deployment parameters as prompted.
2. Select payment type.
3. Enter instance parameters and fill in the zone, and click Next: Confirm Order.
   <ZoomImage src="/img/alibaba-cloud-confirm-order.jpg" alt="Confirm Order of Appsmith." caption="Confirm Order of Appsmith" />

4. Confirm all parameters and estimate price, click Create Now and wait for the service instance deployment to complete.
5. After the service instance is deployed, click the instance ID to go to the details page, and click serverAccess.
   <ZoomImage src="/img/alibaba-cloud-service-instance.jpg" alt="Service Instance List." caption="ervice Instance List" />
   <ZoomImage src="/img/alibaba-cloud-access-url.jpg" alt="Find Access Url." caption="Find Access Url" />

6. Access the Appsmith dashboard.
   <ZoomImage src="/img/alibaba-cloud-appsmith-dashboard.jpg" alt="Appsmith Dashboard." caption="Appsmith Dashboard" />

## Billing instructions

The cost of Appsmith deployment in alibaba cloud compute nest mainly involves:

1. selected vCPU and memory specifications
2. System disk type and capacity
3. Internet bandwidth

This service requires ECS instance can access Appsmith server from public network.


## Troubleshooting

If you are facing issues during deployment, reach out to the support team via the chat widget on this page.
