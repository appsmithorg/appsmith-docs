---
title: Datasource Environments
description: This page provides information about datasource environments in Appsmith.
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1> Datasource Environments </h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

This page explains multiple datasource environments, which allows developers to isolate their testing and production datasources.

See how to [Setup Datasource Environments](/connect-data/how-to-guides/setup-datasource-environments).

## Overview

Datasource environments enable you to separate staging and production configurations of a datasource, providing controlled and isolated settings for specific tasks during different phases. This approach allows developers to test and validate changes without affecting the live production environment.

This allows you to create queries and switch between environments, with the queries automatically using the selected environment.

## Environments on Appsmith

Appsmith provides two default environments: *Production* and *Staging*. However, with the enterprise plan, you can create custom environments according to your requirements.

- **Staging**: Environment for development, QA, and user acceptance testing. You can make modifications and experiment with new features before pushing them to the Production environment.

- **Production**: Live version with actual production data for end users.

- **Custom**: The custom environment allows you to create and manage your own environments. See how to create [custom environments](/connect-data/how-to-guides/setup-datasource-environments#create-a-custom-environment).

In Appsmith, environments work at the _Workspace_ level. This means that all the applications within a workspace share the same configuration values for both Staging and Production environments.

For more information on permissions, you can refer to the [Granular Access Control.](/advanced-concepts/granular-access-control).

## Benefits of Datasource Environments

Some core benefits of using datasource environments include:

- **Isolation and Risk Management:** Datasource environments allow developers to separate testing, and production environments, reducing the risk of unintended modifications and providing a controlled environment for each stage of the software development cycle.

- **Efficient Development:** With datasource environments, developers can easily switch between different datasources without manually modifying connection parameters. This streamlines the development process and enables quick testing and iteration.

- **Flexible Testing:** Having separate Staging environments facilitates thorough testing and quality assurance activities. QA teams can confidently test new features, perform regression testing, and validate the application's behavior before deploying to production.

