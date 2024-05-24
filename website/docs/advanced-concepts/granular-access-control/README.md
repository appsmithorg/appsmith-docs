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

Granular Access Control (GAC) in Appsmith allows you to specify precise access permissions for every entity within your Appsmith instance. This includes applications, users, workspaces, queries, and more. Here’s a quick overview of how GAC works:

  <ZoomImage
   src="/img/gac-overview.png" 
   alt="How Granular Access Control works in Appsmith"
   caption="How Granular Access Control works in Appsmith"
   />

## Core components

* **Permissions** - define what actions a user can perform on specific entities. Every entity in Appsmith whether it’s an app, a page, a datasource, or a query can have granular permissions set for actions like create, read, update, and delete.
* **Roles** - are collections of permissions. Instead of assigning individual permissions to users or groups, you can bundle permissions into roles. This simplifies the management of permissions.
* **Users** - Individual users who need access to the Appsmith instance.
* **User Groups** - Collections of users that allow you to assign roles to multiple users simultaneously. Users in a group inherit the roles assigned to that group.

## Getting started

To help you get started with Granular Access Control in Appsmith, here are some key areas you can explore. Click on the cards to learn more about each aspect.

<div className="containerGridSampleApp">
   <div className="containerColumnSampleApp columnGrid column-one">
       <div className="containerCol">
           <a href="/advanced-concepts/granular-access-control/reference/default-roles#instance-administrator-role"><strong>Instance Administrator</strong></a>
       </div>
       <hr/>
       <div className="containerDescription">
           Learn the role of the instance administrator in setting up Granular Access Control.
       </div>
   </div>
   <div className="containerColumnSampleApp columnGrid column-two">
       <div className="containerCol">
           <a href="/advanced-concepts/granular-access-control/reference/permissions"><strong>Permissions</strong></a>
       </div>
       <hr/>
       <div className="containerDescription">
           Understand the permissions available as part of Granular Access Control.
       </div>
   </div>
   <div className="containerColumnSampleApp columnGrid column-three">
       <div className="containerCol">
           <a href="/advanced-concepts/granular-access-control/reference/custom-roles"><strong>Custom Role</strong></a>
       </div>
       <hr/>
       <div className="containerDescription">
           Learn how to create Custom role to manage users and user groups in Appsmith.
       </div>
   </div>
</div>

