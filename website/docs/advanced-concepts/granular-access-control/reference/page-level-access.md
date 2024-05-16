---
description: >-
  Permissions to restrict page access and allow only authorized users to perform designated actions in Granular Access Control
title: Restrict Page Access - 1
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Restrict Page Access</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Controlling access to specific pages within your Appsmith application is vital for maintaining security and privacy. This page provides information on how to restrict page access to designated users or user groups, enabling you to enforce access control effectively.


### Configure page-level access

To restrict page access, you must configure permissions for individual pages within an Appsmith app. For example, you have two user roles - **Loan Officer** and **Loan Compliance Officer**. The loan application has the following pages:

- **Loan Application** - Accessed by **Loan Officers**
- **Compliance Reports** - Accessed by **Loan Compliance Officers**

To set up this access, you must assign appropriate permissions to these roles. In the tables below, pages are given access based on the roles. Loan officer assignment shows access given to loan application page, and loan compliance officer shows access given to compliance report page.

* **Loan Officer**

    |                              | Resource Type | Edit | View    | Execute |
    |------------------------------|---------------|------|---------|---------|
    | Loans and Disbursements      | Workspace     |  -   |  (✓)    |    -    |
    | Loans                        | Application   |  -   |  (✓)    |    -    |
    | Loan application             | Page          | (✓)  |  (✓)    |    -    |
    | getLoansDetailsforLoanId     | Query         | (✓)  |  (✓)    |    (✓)  |
    | LoanDB                       | Datasource    | -    |   -     |    (✓)  |
    | Production                   | Environment   | -    |   -     |    (✓)  |


* **Loan Compliance Officer**

    |                              | Resource Type | Edit | View    | Execute |
    |------------------------------|---------------|------|---------|---------|
    | Loans and Disbursements      | Workspace     |  -   |  (✓)    |    -    |
    | Loans                        | Application   |  -   |  (✓)    |    -    |
    | Compliance Report            | Page          | (✓)  |  (✓)    |    -    |
    | getComplianceReport          | Query         | (✓)  |  (✓)    |    (✓)  |
    | LoanDB                       | Datasource    | -    |   -     |    (✓)  |
    | Production                   | Environment   | -    |   -     |    (✓)  |

## See also

* [Permissions](/advanced-concepts/granular-access-control/reference/permissions).