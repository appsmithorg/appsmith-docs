---
description: >-
  Granular Access Control in Appsmith
title: Granular Access Control
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Granular Access Control</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Granular Access Control (GAC) in Appsmith allows you to specify precise access permissions for every resource within your Appsmith instance. This includes applications, users, workspaces, queries, and more. Here’s a quick overview of how GAC works:

  <ZoomImage
   src="/img/gac-overview.png" 
   alt="How Granular Access Control works in Appsmith"
   caption="How Granular Access Control works in Appsmith"
   />

## Core components

* **Permissions** - define the actions users can perform on specific resources. In Appsmith, each resource, whether an app, page, workflow, datasource, environment, or query, can have detailed permissions for actions such as create, read, update, and delete.
* **Roles** - are sets of permissions bundled together that can be assigned to users or user groups. They provide varying levels of access to Appsmith resources.
* **Users** - Individual users who need access to the Appsmith instance.
* **User Groups** - Collections of users that allow you to assign roles to multiple users simultaneously. Users in a group inherit the roles assigned to that group.

## Get started

Below are key areas you can explore to get started with Granular Access Control in Appsmith. Click on the cards to learn more about each aspect.

---
<div className="containerGridSampleApp">
   <a className="containerAnchor containerColumnSampleApp columnGrid column-one" href="/advanced-concepts/granular-access-control/reference/permissions">
      <div className="containerHead">
         <div className="containerHeading">
            <b>Permissions</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Understand the permissions available as part of Granular Access Control and how to apply them to users and user roles.
      </div>
   </a>

   <a className="containerAnchor containerColumnSampleApp columnGrid column-two" href="/advanced-concepts/granular-access-control/reference/custom-roles">
      <div className="containerHead">
         <div className="containerHeading">
            <b>Custom Role</b>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Learn how to create custom roles to manage users and user groups within your Appsmith instance.
      </div>
   </a>
</div>