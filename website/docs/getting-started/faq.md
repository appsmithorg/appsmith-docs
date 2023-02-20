---
description: Frequently asked questions about Appsmith.
sidebar_position: 4
---

# FAQ

### What kind of apps can be built on Appsmith?

You can use Appsmith to build custom forms, dashboards & workflows. Tools like Customer Support Dashboards, Offer Management Consoles & Product Cataloging Systems are all prime use cases for Appsmith. You can also use it as a clean UI layer over manually triggered scripts, confusing deployment pipelines & basic database CRUD operations. There's little preventing you from using Appsmith to bring any idea to life, but the product is optimized to make building internal tools a hassle-free experience.

### How to write code in Appsmith?

Yes, absolutely. You can write JavaScript code anywhere inside the product within curly braces `{{ }}`, or using standard syntax within [JS Objects](/core-concepts/writing-code/javascript-editor-beta). We know how complex and intricate business logic can be, and trying to build it without code can get excruciating. Appsmith bridges mundane API and UI configurations with powerful code expressions to let you build the apps the way you see them fit.

For more information, see [writing code](/core-concepts/writing-code).

### What data security does Appsmith provide?

Appsmith safely encrypts all your database credentials and stores them securely. Appsmith doesn't store any data returned from your data sources and acts only as a proxy layer to orchestrate the API / Query calls. Appsmith is an open source platform and can be fully audited and deployed on-premise to ensure none of your data leaves your VPC.

### Do you have a bounty program for reporting security vulnerabilities?

No, we don't currently have a bounty program for reporting security vulnerabilities. However, we appreciate any information that can help us improve the security of our systems and protect our users' data. We do reward security researchers who report serious and previously undiscovered issues.

### How to report a security vulnerability in Appsmith?

If you believe you have discovered a security vulnerability, please email our security team at security@appsmith.com with a description of the issue and any relevant details. We will review your report and take appropriate action to address the issue.

### How to request a new feature on Appsmith?

The best way to request a missing feature is by raising a [Github Issue](https://github.com/appsmithorg/appsmith/issues/new/choose). Alternatively, we welcome external contributions and would be happy to help you unblock yourself with a feature on the platform. This is our [Contribution Guide](https://github.com/appsmithorg/appsmith/blob/release/contributions/CodeContributionsGuidelines.md).

### How to get help when building an app using Appsmith?

We provide support on the Appsmith [Discord](https://discord.com/invite/rBTTVJp) server and the [community forum](https://community.appsmith.com/). We're also happy to get on a call and help you build your apps.

### How's Appsmith different from other app builders?

Appsmith is the first **open source** visual platform for building internal tools. Appsmith gives you building blocks (widgets, APIs, Queries) that you can configure and connect using JavaScript. This ensures that you never get blocked trying to create a custom workflow, and don't spend time building repetitive components.

### What are Appsmith's limitations?

Appsmith isn't built for complicated UI interactions that are common to e-commerce or other consumer-facing websites. It works great for tools and workflows internal to your team or organization, but you wouldn't get far trying to build an attractive consumer website. For those use cases, it's recommended to try [Wix](https://www.wix.com), [Squarespace](https://www.squarespace.com), or [Webflow](https://www.webflow.com).

### Does Appsmith support multi-user editing?

Appsmith is currently built for a single-user editor experience. If you try to update the same page/widget/action from two different places, they overwrite each other and may lead to a loss of work. It's recommended that at any given time, only one user should edit a page in a single open tab. Appsmith supports [version control using Git](/advanced-concepts/version-control-with-git) which provides a way for multiple users to edit the apps on different branches before they can be merged to the main branch.

### Where's the data on cloud services processed?
For cloud users, data is store and processed on servers in the US.

### Is Appsmith HIPAA compliant?
No, Appsmith isn't HIPAA compliant. If you need to ensure HIPAA compliance, you can [self-host Appsmith](/getting-started/setup) which gives you complete control over how your data is stored, transmitted, and secured.