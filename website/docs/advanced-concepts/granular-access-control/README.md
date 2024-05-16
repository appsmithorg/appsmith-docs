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

Granular access control is a fundamental aspect of Appsmith's security architecture, offering management over user permissions within workspaces. This feature helps organizations to finely tune access levels, ensuring that users only have the necessary privileges to perform their designated tasks, thereby enhancing security and mitigating risks.

## Key features

- **Role-Based Access:** Appsmith uses a role-based access control (RBAC) system, enabling instance administrators to assign distinct roles to users based on their responsibilities and authority levels within the organization. It also provides Default Roles to enable easy integration of access control. For more information, see [Default Roles](/advanced-concepts/granular-access-control/roles#default-roles).

- **Workspace Permissions:** With granular control over workspace permissions, administrators can dictate precisely which actions users can perform within a given workspace, such as creating, editing, or deleting apps, managing pages, queries, datasources, and environments. For more information, see [Permissions](/advanced-concepts/granular-access-control/reference/permissions).

- **Resource-Level Permissions:** Users are granted permissions at a granular level, regulating access to individual resources like apps, pages, queries, datasources, and environments, ensuring that sensitive data and functionalities remain protected. For more information, see [Permissions](/advanced-concepts/granular-access-control/reference/permissions).

- **Customizable Permissions:** Administrators have the flexibility to create custom roles and tailoring access rights to align with organizational policies and security requirements. For more information, see [Custom Roles](/advanced-concepts/granular-access-control/roles#custom-roles).

## Benefits

- **Enhanced Security:** Granular access control reduces the risk of unauthorized access by restricting users' access to only the necessary resources and functionalities required to fulfill their roles.

- **Improved Collaboration:** By granting users access to specific resources based on their roles and responsibilities, granular access control facilitates seamless collaboration while maintaining data integrity and confidentiality.

## Getting started

<div className="containerGridSampleApp">
   <div className="containerColumnSampleApp columnGrid column-one">
   <div className="containerCol">
           <a href="/advanced-concepts/granular-access-control/reference/instance-administrator-role"><strong>Instance Administrator</strong></a>
        </div><hr/>
        <div className="containerDescription">Learn the role of instance adminstrator in setting up Granular Access Control.</div>
   </div>
   <div className="containerColumnSampleApp columnGrid column-two">
    <div className="containerCol">
      <b><a href="/advanced-concepts/granular-access-control/reference/permissions">Permissions</a></b>
      </div> <hr/>
      <div className="containerDescription">
        Learn Permissions available as part of Granular Access Control.
      </div>
    </div>
</div>
