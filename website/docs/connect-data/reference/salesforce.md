---
title: Salesforce Commands
---

import React from 'react';
import CommandDropdown from '@site/src/components/CommandDropdown';

export const CommandContent = () => {
  const [selectedCommand, setSelectedCommand] = React.useState('');
  
  return (
    <>
      <CommandDropdown onSelect={setSelectedCommand} />
      {selectedCommand && (
        <div>
          {selectedCommand === 'Create Record - Contact' && (
            <>
              ### Create Record - Contact
              
              Create a new contact record in Salesforce with specified details such as name, account association, and contact information.
              
              Property: first_name (string)
              <dd>
              - **Detailed Explanation**: The contact's given name for identification in the CRM. Must match the name used in official communications and documentation.
              - **Example Usage**: Using Input Widget
              ```js
              {{ContactFirstName.text}}
              // Example: "John"
              ```
              </dd>
              
              Property: last_name (string)
              <dd>
              - **Detailed Explanation**: The contact's family name or surname. Required field for creating a contact record in Salesforce.
              - **Example Usage**: Using Input Widget
              ```js
              {{ContactLastName.text}}
              // Example: "Smith"
              ```
              </dd>
              
              Property: account_id (string)
              <dd>
              - **Detailed Explanation**: The unique identifier of the Salesforce account this contact belongs to. Select from existing accounts using a Table Widget.
              - **Example Usage**: Using Table Widget Selection
              ```js
              {{AccountsTable.selectedRow.Id}}
              // Example: "001XXXXXXXXXXXXXXXXX"
              ```
              </dd>
              
              Property: email (string)
              <dd>
              - **Detailed Explanation**: The contact's primary email address for communications. Must be a valid email format and unique within the account.
              - **Example Usage**: Using Input Widget with validation
              ```js
              {{ContactEmail.text}}
              // Example: "john.smith@company.com"
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Create Record - Lead' && (
            <>
              ### Create Record - Lead
              
              Create a new lead record in Salesforce with specified details such as name, company, status, and other relevant information.
              
              Property: first_name (string)
              <dd>
              - **Detailed Explanation**: The lead's given name used for identification and communication. This should be the legal first name of the lead contact person, matching their official documentation.
              - **Example Usage**: Using Input Widget
              ```js
              {{LeadFirstName.text}}
              // Example: "John"
              ```
              </dd>
              
              Property: last_name (string)
              <dd>
              - **Detailed Explanation**: The lead's family name or surname. Required field that should match the person's legal last name for accurate record keeping and future reference.
              - **Example Usage**: Using Input Widget
              ```js
              {{LeadLastName.text}}
              // Example: "Smith"
              ```
              </dd>
              
              Property: company (string)
              <dd>
              - **Detailed Explanation**: The organization or business entity associated with the lead. Used for account association and business relationship tracking. Should be the official registered company name.
              - **Example Usage**: Using Input Widget
              ```js
              {{LeadCompany.text}}
              // Example: "Acme Corporation"
              ```
              </dd>
              
              Property: email (string)
              <dd>
              - **Detailed Explanation**: The lead's primary business email address. Must be a valid email format (user@domain.com) and is used for all official communications.
              - **Example Usage**: Using Input Widget
              ```js
              {{LeadEmail.text}}
              // Example: "john.smith@acmecorp.com"
              ```
              </dd>
              
              Property: phone (string)
              <dd>
              - **Detailed Explanation**: The lead's primary contact number. Should follow the format: +1-XXX-XXX-XXXX or (XXX) XXX-XXXX for consistency in communication records.
              - **Example Usage**: Using Input Widget
              ```js
              {{LeadPhone.text}}
              // Example: "+1-555-123-4567"
              ```
              </dd>
              
              Property: website (string)
              <dd>
              - **Detailed Explanation**: The lead's company website URL. Must start with http:// or https:// and be a valid URL format. Used for company verification and research.
              - **Example Usage**: Using Input Widget
              ```js
              {{LeadWebsite.text}}
              // Example: "https://www.acmecorp.com"
              ```
              </dd>
              
              Property: title (string)
              <dd>
              - **Detailed Explanation**: The lead's job title or position within their organization. Helps in determining decision-making authority and appropriate communication approach.
              - **Example Usage**: Using Input Widget
              ```js
              {{LeadTitle.text}}
              // Example: "Chief Technology Officer"
              ```
              </dd>
              
              Property: status (string)
              <dd>
              - **Detailed Explanation**: The current position of the lead in your sales pipeline. Determines next actions and helps track conversion progress.
              Available options:
              • Open - Initial contact made, needs qualification
              • Working - Active engagement and discovery
              • Qualified - Ready for opportunity conversion
              • Unqualified - Not a good fit for current offerings
              - **Example Usage**: Using Select Widget
              ```js
              {{LeadStatus.selectedOptionValue}}
              // Example: "Qualified"
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Create Record - Opportunity' && (
            <>
              ### Create Record - Opportunity
              
              Create a new opportunity record in Salesforce to track potential sales and revenue opportunities.
              
              Property: name (string)
              <dd>
              - **Detailed Explanation**: A descriptive name for the opportunity that identifies the potential deal. Should include key details like company name, product/service, and deal type for easy identification.
              - **Example Usage**: Using Input Widget
              ```js
              {{OpportunityName.text}}
              // Example: "Acme Corp - Enterprise License 2024"
              ```
              </dd>
              
              Property: stage_name (string)
              <dd>
              - **Detailed Explanation**: The current stage in your sales process. Must match your organization's defined opportunity stages for accurate pipeline management.
              Available stages:
              • Prospecting - Initial opportunity identification
              • Qualification - Evaluating fit and requirements
              • Proposal - Formal offer submitted
              • Negotiation - Terms discussion
              • Closed Won/Lost - Final outcome
              - **Example Usage**: Using Select Widget
              ```js
              {{OpportunityStage.selectedOptionValue}}
              // Example: "Proposal"
              ```
              </dd>
              
              Property: close_date (date)
              <dd>
              - **Detailed Explanation**: The expected or actual closing date for the opportunity. Must be a future date for open opportunities, format: YYYY-MM-DD.
              - **Example Usage**: Using Date Picker Widget
              ```js
              {{CloseDate.formattedDate}}
              // Example: "2024-12-31"
              ```
              </dd>
              
              Property: account_id (string)
              <dd>
              - **Detailed Explanation**: The unique identifier of the account this opportunity is associated with. Select from existing accounts using a Table Widget displaying account records.
              - **Example Usage**: Using Table Widget Selection
              ```js
              {{AccountsTable.selectedRow.Id}}
              // Example: "001XXXXXXXXXXXXXXXXX"
              ```
              </dd>
              
              Property: amount (number)
              <dd>
              - **Detailed Explanation**: The estimated total value of the opportunity in your organization's default currency. Use decimal format for precise amounts.
              - **Example Usage**: Using Input Widget
              ```js
              {{OpportunityAmount.text}}
              // Example: 50000.00
              ```
              </dd>
              
              Property: owner_id (string)
              <dd>
              - **Detailed Explanation**: The ID of the Salesforce user who owns this opportunity. Select from a Table Widget showing active users with their roles and territories.
              - **Example Usage**: Using Table Widget Selection
              ```js
              {{UsersTable.selectedRow.Id}}
              // Example: "005XXXXXXXXXXXXXXXXX"
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Create Record - Task' && (
            <>
              ### Create Record - Task
              
              Create a new task record in Salesforce to track activities and follow-ups.
              
              Property: subject (string)
              <dd>
              - **Detailed Explanation**: A brief description of the task that clearly states the required action. Should be specific and actionable for effective task management.
              - **Example Usage**: Using Input Widget
              ```js
              {{TaskSubject.text}}
              // Example: "Follow up on proposal with Acme Corp"
              ```
              </dd>
              
              Property: what_id (string)
              <dd>
              - **Detailed Explanation**: The ID of the related object (Lead, Contact, Opportunity, etc.) this task is associated with. Select from a Table Widget showing related records.
              - **Example Usage**: Using Table Widget Selection
              ```js
              {{RelatedRecordsTable.selectedRow.Id}}
              // Example: "006XXXXXXXXXXXXXXXXX"
              ```
              </dd>
              
              Property: activity_date (date)
              <dd>
              - **Detailed Explanation**: The due date for the task. Must be a valid date in YYYY-MM-DD format and can be in the past for completed tasks.
              - **Example Usage**: Using Date Picker Widget
              ```js
              {{TaskDueDate.formattedDate}}
              // Example: "2024-03-15"
              ```
              </dd>
              
              Property: status (string)
              <dd>
              - **Detailed Explanation**: The current status of the task. Indicates progress and helps with task management.
              Available options:
              • Not Started - Task is created but work hasn't begun
              • In Progress - Work has started
              • Completed - Task is finished
              • Waiting - Blocked or dependent on other actions
              - **Example Usage**: Using Select Widget
              ```js
              {{TaskStatus.selectedOptionValue}}
              // Example: "In Progress"
              ```
              </dd>
              
              Property: owner_id (string)
              <dd>
              - **Detailed Explanation**: The ID of the Salesforce user assigned to complete this task. Select from a Table Widget showing active users in your organization.
              - **Example Usage**: Using Table Widget Selection
              ```js
              {{UsersTable.selectedRow.Id}}
              // Example: "005XXXXXXXXXXXXXXXXX"
              ```
              </dd>
              
              Property: is_reminder_set (boolean)
              <dd>
              - **Detailed Explanation**: Indicates whether a reminder should be set for this task. When true, reminder_date_time must be provided.
              - **Example Usage**: Using Select Widget
              ```js
              {{SetReminder.selectedOptionValue}}
              // Example: true
              ```
              </dd>
              
              Property: reminder_date_time (datetime)
              <dd>
              - **Detailed Explanation**: The date and time when the reminder should trigger. Must be a future datetime if is_reminder_set is true, format: YYYY-MM-DDThh:mm:ssZ.
              - **Example Usage**: Using Date Picker Widget with time
              ```js
              {{ReminderDateTime.formattedDateTime}}
              // Example: "2024-03-15T10:00:00Z"
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Create Record - Account' && (
            <>
              ### Create Record - Account
              
              Create a new account record in Salesforce to represent a company or organization.
              
              Property: name (string)
              <dd>
              - **Detailed Explanation**: The official company name for the account. Should match the legal business name for consistency across the CRM and integration with other systems.
              - **Example Usage**: Using Input Widget
              ```js
              {{AccountName.text}}
              // Example: "Acme Corporation, Inc."
              ```
              </dd>
              
              Property: website (string)
              <dd>
              - **Detailed Explanation**: The company's official website URL. Must be a valid URL starting with http:// or https://, used for company verification and enrichment.
              - **Example Usage**: Using Input Widget
              ```js
              {{AccountWebsite.text}}
              // Example: "https://www.acmecorp.com"
              ```
              </dd>
              
              Property: phone (string)
              <dd>
              - **Detailed Explanation**: The primary contact number for the account. Should follow a consistent format: +1-XXX-XXX-XXXX or (XXX) XXX-XXXX for standardization.
              - **Example Usage**: Using Input Widget
              ```js
              {{AccountPhone.text}}
              // Example: "+1-555-123-4567"
              ```
              </dd>
              
              Property: owner_id (string)
              <dd>
              - **Detailed Explanation**: The ID of the Salesforce user who owns and manages this account. Select from a Table Widget showing active users with their roles.
              - **Example Usage**: Using Table Widget Selection
              ```js
              {{UsersTable.selectedRow.Id}}
              // Example: "005XXXXXXXXXXXXXXXXX"
              ```
              </dd>
              
              Property: description (string)
              <dd>
              - **Detailed Explanation**: A detailed description of the account, including key business information, relationship history, and important notes for account management.
              - **Example Usage**: Using Input Widget
              ```js
              {{AccountDescription.text}}
              // Example: "Global technology provider specializing in cloud solutions. Key partner since 2020."
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Update Contact' && (
            <>
              ### Update Contact
              
              Update an existing contact record in Salesforce with modified information.
              
              Property: record_id (string)
              <dd>
              - **Detailed Explanation**: The unique identifier of the contact to update. Obtain this ID from a Table Widget displaying search results or from a Get Record operation.
              - **Example Usage**: Using Table Widget Selection
              ```js
              {{ContactsTable.selectedRow.Id}}
              // Example: "003XXXXXXXXXXXXXXXXX"
              ```
              </dd>
              
              Property: first_name (string)
              <dd>
              - **Detailed Explanation**: Updated first name for the contact. Only include this field if you want to modify the existing first name. Must match the person's legal name.
              - **Example Usage**: Using Input Widget
              ```js
              {{UpdateFirstName.text}}
              // Example: "John"
              ```
              </dd>
              
              Property: last_name (string)
              <dd>
              - **Detailed Explanation**: Updated last name for the contact. Only include this field if you want to modify the existing last name. Must match the person's legal surname.
              - **Example Usage**: Using Input Widget
              ```js
              {{UpdateLastName.text}}
              // Example: "Smith"
              ```
              </dd>
              
              Property: account_id (string)
              <dd>
              - **Detailed Explanation**: Updated account association for the contact. Select from existing accounts using a Table Widget displaying account records.
              - **Example Usage**: Using Table Widget Selection
              ```js
              {{AccountsTable.selectedRow.Id}}
              // Example: "001XXXXXXXXXXXXXXXXX"
              ```
              </dd>
              
              Property: email (string)
              <dd>
              - **Detailed Explanation**: Updated email address for the contact. Must be a valid email format (user@domain.com) and is used for all official communications.
              - **Example Usage**: Using Input Widget
              ```js
              {{UpdateEmail.text}}
              // Example: "john.smith@newcompany.com"
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Update Lead' && (
            <>
              ### Update Lead
              
              Update an existing lead record in Salesforce with modified information.
              
              Property: record_id (string)
              <dd>
              - **Detailed Explanation**: The unique identifier of the lead to update. Obtain this ID from a Table Widget displaying search results or from a Get Record operation.
              - **Example Usage**: Using Table Widget Selection
              ```js
              {{LeadsTable.selectedRow.Id}}
              // Example: "00QXXXXXXXXXXXXXXXXX"
              ```
              </dd>
              
              Property: first_name (string)
              <dd>
              - **Detailed Explanation**: Updated first name for the lead. Only include this field if you want to modify the existing first name. Must match the person's legal name.
              - **Example Usage**: Using Input Widget
              ```js
              {{UpdateFirstName.text}}
              // Example: "John"
              ```
              </dd>
              
              Property: last_name (string)
              <dd>
              - **Detailed Explanation**: Updated last name for the lead. Only include this field if you want to modify the existing last name. Must match the person's legal surname.
              - **Example Usage**: Using Input Widget
              ```js
              {{UpdateLastName.text}}
              // Example: "Smith"
              ```
              </dd>
              
              Property: email (string)
              <dd>
              - **Detailed Explanation**: Updated email address for the lead. Must be a valid email format (user@domain.com) and is used for all official communications.
              - **Example Usage**: Using Input Widget
              ```js
              {{UpdateEmail.text}}
              // Example: "john.smith@newcompany.com"
              ```
              </dd>
              
              Property: status (string)
              <dd>
              - **Detailed Explanation**: Updated status value for the lead. Must match one of the predefined status values in your Salesforce organization.
              Available options:
              • Open - Initial contact made, needs qualification
              • Working - Active engagement and discovery
              • Qualified - Ready for opportunity conversion
              • Unqualified - Not a good fit for current offerings
              - **Example Usage**: Using Select Widget
              ```js
              {{UpdateStatus.selectedOptionValue}}
              // Example: "Qualified"
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Update Opportunity' && (
            <>
              ### Update Opportunity
              
              Update an existing opportunity record in Salesforce with modified information.
              
              Property: record_id (string)
              <dd>
              - **Detailed Explanation**: The unique identifier of the opportunity to update. Obtain this ID from a Table Widget displaying search results or from a Get Record operation.
              - **Example Usage**: Using Table Widget Selection
              ```js
              {{OpportunitiesTable.selectedRow.Id}}
              // Example: "006XXXXXXXXXXXXXXXXX"
              ```
              </dd>
              
              Property: name (string)
              <dd>
              - **Detailed Explanation**: Updated name for the opportunity. Should include key details like company name, product/service, and deal type for easy identification.
              - **Example Usage**: Using Input Widget
              ```js
              {{UpdateOpportunityName.text}}
              // Example: "Acme Corp - Enterprise License Renewal 2024"
              ```
              </dd>
              
              Property: stage_name (string)
              <dd>
              - **Detailed Explanation**: Updated stage in the sales process. Must match your organization's defined opportunity stages for accurate pipeline management.
              Available stages:
              • Prospecting - Initial opportunity identification
              • Qualification - Evaluating fit and requirements
              • Proposal - Formal offer submitted
              • Negotiation - Terms discussion
              • Closed Won/Lost - Final outcome
              - **Example Usage**: Using Select Widget
              ```js
              {{UpdateStage.selectedOptionValue}}
              // Example: "Negotiation"
              ```
              </dd>
              
              Property: close_date (date)
              <dd>
              - **Detailed Explanation**: Updated expected closing date. Must be a future date for open opportunities, format: YYYY-MM-DD. Critical for pipeline forecasting.
              - **Example Usage**: Using Date Picker Widget
              ```js
              {{UpdateCloseDate.formattedDate}}
              // Example: "2024-12-31"
              ```
              </dd>
              
              Property: amount (number)
              <dd>
              - **Detailed Explanation**: Updated total value of the opportunity in your organization's default currency. Use decimal format for precise amounts.
              - **Example Usage**: Using Input Widget
              ```js
              {{UpdateAmount.text}}
              // Example: 75000.00
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Update Task' && (
            <>
              ### Update Task
              
              Update an existing task record in Salesforce with modified information.
              
              Property: record_id (string)
              <dd>
              - **Detailed Explanation**: The unique identifier of the task to update. Obtain this ID from a Table Widget displaying search results or from a Get Record operation.
              - **Example Usage**: Using Table Widget Selection
              ```js
              {{TasksTable.selectedRow.Id}}
              // Example: "00TXXXXXXXXXXXXXXXXX"
              ```
              </dd>
              
              Property: subject (string)
              <dd>
              - **Detailed Explanation**: Updated subject line for the task. Should clearly state the required action and be specific enough for effective task management.
              - **Example Usage**: Using Input Widget
              ```js
              {{UpdateTaskSubject.text}}
              // Example: "Schedule follow-up meeting with Acme Corp executives"
              ```
              </dd>
              
              Property: status (string)
              <dd>
              - **Detailed Explanation**: Updated status of the task. Indicates current progress and helps with task tracking.
              Available options:
              • Not Started - Task is pending
              • In Progress - Work has begun
              • Completed - Task is finished
              • Waiting - Blocked or dependent
              - **Example Usage**: Using Select Widget
              ```js
              {{UpdateTaskStatus.selectedOptionValue}}
              // Example: "Completed"
              ```
              </dd>
              
              Property: activity_date (date)
              <dd>
              - **Detailed Explanation**: Updated due date for the task. Must be a valid date in YYYY-MM-DD format. Can be in the past for completed tasks.
              - **Example Usage**: Using Date Picker Widget
              ```js
              {{UpdateDueDate.formattedDate}}
              // Example: "2024-03-20"
              ```
              </dd>
              
              Property: is_reminder_set (boolean)
              <dd>
              - **Detailed Explanation**: Update whether a reminder should be set. When changing to true, reminder_date_time must also be provided.
              - **Example Usage**: Using Select Widget
              ```js
              {{UpdateReminder.selectedOptionValue}}
              // Example: true
              ```
              </dd>
              
              Property: reminder_date_time (datetime)
              <dd>
              - **Detailed Explanation**: Updated reminder time. Must be a future datetime if is_reminder_set is true, format: YYYY-MM-DDThh:mm:ssZ.
              - **Example Usage**: Using Date Picker Widget with time
              ```js
              {{UpdateReminderTime.formattedDateTime}}
              // Example: "2024-03-20T09:00:00Z"
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Update Account' && (
            <>
              ### Update Account
              
              Update an existing account record in Salesforce with modified information.
              
              Property: record_id (string)
              <dd>
              - **Detailed Explanation**: The unique identifier of the account to update. Obtain this ID from a Table Widget displaying search results or from a Get Record operation.
              - **Example Usage**: Using Table Widget Selection
              ```js
              {{AccountsTable.selectedRow.Id}}
              // Example: "001XXXXXXXXXXXXXXXXX"
              ```
              </dd>
              
              Property: name (string)
              <dd>
              - **Detailed Explanation**: Updated company name for the account. Should match the legal business name for consistency across the CRM and other systems.
              - **Example Usage**: Using Input Widget
              ```js
              {{UpdateAccountName.text}}
              // Example: "Acme Corporation Global Services, Inc."
              ```
              </dd>
              
              Property: website (string)
              <dd>
              - **Detailed Explanation**: Updated company website URL. Must be a valid URL starting with http:// or https://, used for company verification and enrichment.
              - **Example Usage**: Using Input Widget
              ```js
              {{UpdateWebsite.text}}
              // Example: "https://www.acmecorp.com"
              ```
              </dd>
              
              Property: phone (string)
              <dd>
              - **Detailed Explanation**: Updated primary contact number. Should follow the format: +1-XXX-XXX-XXXX or (XXX) XXX-XXXX for standardization.
              - **Example Usage**: Using Input Widget
              ```js
              {{UpdatePhone.text}}
              // Example: "+1-555-987-6543"
              ```
              </dd>
              
              Property: description (string)
              <dd>
              - **Detailed Explanation**: Updated account description. Include key business information, relationship history, and important notes for account management.
              - **Example Usage**: Using Input Widget
              ```js
              {{UpdateDescription.text}}
              // Example: "Global technology provider specializing in cloud and AI solutions. Strategic partner since 2020."
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Get Record - Contact' && (
            <>
              ### Get Record - Contact
              
              Retrieve a specific contact record by its ID.
              
              Property: record_id (string)
              <dd>
              - **Detailed Explanation**: The unique identifier of the contact to retrieve. Obtain this ID from a Table Widget displaying search results or from a previous operation.
              - **Example Usage**: Using Table Widget Selection
              ```js
              {{ContactsTable.selectedRow.Id}}
              // Example: "003XXXXXXXXXXXXXXXXX"
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Get Record - Opportunity' && (
            <>
              ### Get Record - Opportunity
              
              Retrieve a specific opportunity record by its ID.
              
              Property: record_id (string)
              <dd>
              - **Detailed Explanation**: The unique identifier of the opportunity to retrieve. Obtain this ID from a Table Widget displaying search results or from a previous operation.
              - **Example Usage**: Using Table Widget Selection
              ```js
              {{OpportunitiesTable.selectedRow.Id}}
              // Example: "006XXXXXXXXXXXXXXXXX"
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Get Record - Task' && (
            <>
              ### Get Record - Task
              
              Retrieve a specific task record by its ID.
              
              Property: record_id (string)
              <dd>
              - **Detailed Explanation**: The unique identifier of the task to retrieve. Obtain this ID from a Table Widget displaying search results or from a previous operation.
              - **Example Usage**: Using Table Widget Selection
              ```js
              {{TasksTable.selectedRow.Id}}
              // Example: "00TXXXXXXXXXXXXXXXXX"
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Get Record - Account' && (
            <>
              ### Get Record - Account
              
              Retrieve a specific account record by its ID.
              
              Property: record_id (string)
              <dd>
              - **Detailed Explanation**: The unique identifier of the account to retrieve. Obtain this ID from a Table Widget displaying search results or from a previous operation.
              - **Example Usage**: Using Table Widget Selection
              ```js
              {{AccountsTable.selectedRow.Id}}
              // Example: "001XXXXXXXXXXXXXXXXX"
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Get Record - Lead' && (
            <>
              ### Get Record - Lead
              
              Retrieve a specific lead record by its ID.
              
              Property: record_id (string)
              <dd>
              - **Detailed Explanation**: The unique identifier of the lead to retrieve. Obtain this ID from a Table Widget displaying search results or from a previous operation.
              - **Example Usage**: Using Table Widget Selection
              ```js
              {{LeadsTable.selectedRow.Id}}
              // Example: "00QXXXXXXXXXXXXXXXXX"
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Search Contact' && (
            <>
              ### Search Contact
              
              Search for contacts based on specified criteria.
              
              Property: filter_formula (string)
              <dd>
              - **Detailed Explanation**: SOQL-like formula to filter contacts. Supports standard operators (=, !=, >, <, LIKE) and logical operators (AND, OR).
              Example criteria:
              • Name LIKE '%search_term%' - Partial name match
              • Email = 'exact@email.com' - Exact email match
              • AccountId = '001...' - Account association
              • CreatedDate > 2024-01-01 - Date comparison
              - **Example Usage**: Using Input Widget
              ```js
              {{FilterInput.text}}
              // Example: "LastName LIKE '%{{NameSearch.text}}%' AND AccountId = '{{AccountFilter.selectedOptionValue}}'"
              ```
              </dd>
              
              Property: pagination_parameters (object)
              <dd>
              - **Detailed Explanation**: Controls the pagination of search results. Includes parameters for page size and offset to manage large result sets efficiently.
              - **Example Usage**: Using Input Widgets
              ```js
              {
                "pageSize": {{PageSize.text}},
                "offset": {{CurrentPage.text}} * {{PageSize.text}}
              }
              // Example: { "pageSize": 20, "offset": 40 }
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Search Opportunity' && (
            <>
              ### Search Opportunity
              
              Search for opportunities based on specified criteria.
              
              Property: filter_formula (string)
              <dd>
              - **Detailed Explanation**: SOQL-like formula to filter opportunities. Supports standard operators (=, !=, >, <, LIKE) and logical operators (AND, OR).
              Example criteria:
              • Name LIKE '%search_term%' - Partial name match
              • Amount > 50000 - Value threshold
              • StageName IN ('Proposal', 'Negotiation') - Multiple stages
              • CloseDate > 2024-01-01 - Date comparison
              - **Example Usage**: Using Input Widget
              ```js
              {{FilterInput.text}}
              // Example: "Amount > {{MinAmount.text}} AND StageName = '{{StageFilter.selectedOptionValue}}'"
              ```
              </dd>
              
              Property: pagination_parameters (object)
              <dd>
              - **Detailed Explanation**: Controls the pagination of search results. Includes parameters for page size and offset to manage large result sets efficiently.
              - **Example Usage**: Using Input Widgets
              ```js
              {
                "pageSize": {{PageSize.text}},
                "offset": {{CurrentPage.text}} * {{PageSize.text}}
              }
              // Example: { "pageSize": 20, "offset": 40 }
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Search Task' && (
            <>
              ### Search Task
              
              Search for tasks based on specified criteria.
              
              Property: filter_formula (string)
              <dd>
              - **Detailed Explanation**: SOQL-like formula to filter tasks. Supports standard operators (=, !=, >, <, LIKE) and logical operators (AND, OR).
              Example criteria:
              • Subject LIKE '%search_term%' - Partial subject match
              • Status = 'Not Started' - Status filter
              • ActivityDate <= TODAY - Due date comparison
              • OwnerId = '005...' - Assigned user
              - **Example Usage**: Using Input Widget
              ```js
              {{FilterInput.text}}
              // Example: "Status = '{{StatusFilter.selectedOptionValue}}' AND ActivityDate <= {{DueDate.formattedDate}}"
              ```
              </dd>
              
              Property: pagination_parameters (object)
              <dd>
              - **Detailed Explanation**: Controls the pagination of search results. Includes parameters for page size and offset to manage large result sets efficiently.
              - **Example Usage**: Using Input Widgets
              ```js
              {
                "pageSize": {{PageSize.text}},
                "offset": {{CurrentPage.text}} * {{PageSize.text}}
              }
              // Example: { "pageSize": 20, "offset": 40 }
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Search Account' && (
            <>
              ### Search Account
              
              Search for accounts based on specified criteria.
              
              Property: filter_formula (string)
              <dd>
              - **Detailed Explanation**: SOQL-like formula to filter accounts. Supports standard operators (=, !=, >, <, LIKE) and logical operators (AND, OR).
              Example criteria:
              • Name LIKE '%search_term%' - Partial name match
              • Website LIKE '%domain%' - Website domain filter
              • Industry = 'Technology' - Industry classification
              • CreatedDate > 2024-01-01 - Date comparison
              - **Example Usage**: Using Input Widget
              ```js
              {{FilterInput.text}}
              // Example: "Name LIKE '%{{CompanySearch.text}}%' AND Industry = '{{IndustryFilter.selectedOptionValue}}'"
              ```
              </dd>
              
              Property: pagination_parameters (object)
              <dd>
              - **Detailed Explanation**: Controls the pagination of search results. Includes parameters for page size and offset to manage large result sets efficiently.
              - **Example Usage**: Using Input Widgets
              ```js
              {
                "pageSize": {{PageSize.text}},
                "offset": {{CurrentPage.text}} * {{PageSize.text}}
              }
              // Example: { "pageSize": 20, "offset": 40 }
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Search Lead' && (
            <>
              ### Search Lead
              
              Search for leads based on specified criteria.
              
              Property: filter_formula (string)
              <dd>
              - **Detailed Explanation**: SOQL-like formula to filter leads. Supports standard operators (=, !=, >, <, LIKE) and logical operators (AND, OR).
              Example criteria:
              • Name LIKE '%search_term%' - Partial name match
              • Email = 'exact@email.com' - Exact email match
              • Status IN ('Open', 'Working') - Multiple status values
              • CreatedDate > 2024-01-01 - Date comparison
              - **Example Usage**: Using Input Widget
              ```js
              {{FilterInput.text}}
              // Example: "Company LIKE '%{{CompanySearch.text}}%' AND Status = '{{StatusFilter.selectedOptionValue}}'"
              ```
              </dd>
              
              Property: pagination_parameters (object)
              <dd>
              - **Detailed Explanation**: Controls the pagination of search results. Includes parameters for page size and offset to manage large result sets efficiently.
              - **Example Usage**: Using Input Widgets
              ```js
              {
                "pageSize": {{PageSize.text}},
                "offset": {{CurrentPage.text}} * {{PageSize.text}}
              }
              // Example: { "pageSize": 20, "offset": 40 }
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Get Record by View ID - Contact' && (
            <>
              ### Get Record by View ID - Contact
              
              Retrieve contacts using a Salesforce List View ID.
              
              Property: list_view_id (string)
              <dd>
              - **Detailed Explanation**: The ID of a predefined Salesforce List View. This ID can be obtained from your Salesforce organization's list view settings.
              - **Example Usage**: Using Input Widget
              ```js
              {{ListViewId.text}}
              // Example: "00BXXXXXXXXXXXXXXXXX"
              ```
              </dd>
              
              Property: pagination_parameters (object)
              <dd>
              - **Detailed Explanation**: Controls the pagination of list view results. Includes parameters for page size and offset to manage large result sets efficiently.
              - **Example Usage**: Using Input Widgets
              ```js
              {
                "pageSize": {{PageSize.text}},
                "offset": {{CurrentPage.text}} * {{PageSize.text}}
              }
              // Example: { "pageSize": 20, "offset": 40 }
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Get Record by View ID - Opportunity' && (
            <>
              ### Get Record by View ID - Opportunity
              
              Retrieve opportunities using a Salesforce List View ID.
              
              Property: list_view_id (string)
              <dd>
              - **Detailed Explanation**: The ID of a predefined Salesforce List View. This ID can be obtained from your Salesforce organization's list view settings.
              - **Example Usage**: Using Input Widget
              ```js
              {{ListViewId.text}}
              // Example: "00BXXXXXXXXXXXXXXXXX"
              ```
              </dd>
              
              Property: pagination_parameters (object)
              <dd>
              - **Detailed Explanation**: Controls the pagination of list view results. Includes parameters for page size and offset to manage large result sets efficiently.
              - **Example Usage**: Using Input Widgets
              ```js
              {
                "pageSize": {{PageSize.text}},
                "offset": {{CurrentPage.text}} * {{PageSize.text}}
              }
              // Example: { "pageSize": 20, "offset": 40 }
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Get Record by View ID - Task' && (
            <>
              ### Get Record by View ID - Task
              
              Retrieve tasks using a Salesforce List View ID.
              
              Property: list_view_id (string)
              <dd>
              - **Detailed Explanation**: The ID of a predefined Salesforce List View. This ID can be obtained from your Salesforce organization's list view settings.
              - **Example Usage**: Using Input Widget
              ```js
              {{ListViewId.text}}
              // Example: "00BXXXXXXXXXXXXXXXXX"
              ```
              </dd>
              
              Property: pagination_parameters (object)
              <dd>
              - **Detailed Explanation**: Controls the pagination of list view results. Includes parameters for page size and offset to manage large result sets efficiently.
              - **Example Usage**: Using Input Widgets
              ```js
              {
                "pageSize": {{PageSize.text}},
                "offset": {{CurrentPage.text}} * {{PageSize.text}}
              }
              // Example: { "pageSize": 20, "offset": 40 }
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Get Record by View ID - Account' && (
            <>
              ### Get Record by View ID - Account
              
              Retrieve accounts using a Salesforce List View ID.
              
              Property: list_view_id (string)
              <dd>
              - **Detailed Explanation**: The ID of a predefined Salesforce List View. This ID can be obtained from your Salesforce organization's list view settings.
              - **Example Usage**: Using Input Widget
              ```js
              {{ListViewId.text}}
              // Example: "00BXXXXXXXXXXXXXXXXX"
              ```
              </dd>
              
              Property: pagination_parameters (object)
              <dd>
              - **Detailed Explanation**: Controls the pagination of list view results. Includes parameters for page size and offset to manage large result sets efficiently.
              - **Example Usage**: Using Input Widgets
              ```js
              {
                "pageSize": {{PageSize.text}},
                "offset": {{CurrentPage.text}} * {{PageSize.text}}
              }
              // Example: { "pageSize": 20, "offset": 40 }
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Get Record by View ID - Lead' && (
            <>
              ### Get Record by View ID - Lead
              
              Retrieve leads using a Salesforce List View ID.
              
              Property: list_view_id (string)
              <dd>
              - **Detailed Explanation**: The ID of a predefined Salesforce List View. This ID can be obtained from your Salesforce organization's list view settings.
              - **Example Usage**: Using Input Widget
              ```js
              {{ListViewId.text}}
              // Example: "00BXXXXXXXXXXXXXXXXX"
              ```
              </dd>
              
              Property: pagination_parameters (object)
              <dd>
              - **Detailed Explanation**: Controls the pagination of list view results. Includes parameters for page size and offset to manage large result sets efficiently.
              - **Example Usage**: Using Input Widgets
              ```js
              {
                "pageSize": {{PageSize.text}},
                "offset": {{CurrentPage.text}} * {{PageSize.text}}
              }
              // Example: { "pageSize": 20, "offset": 40 }
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Create Custom Field - Opportunity' && (
            <>
              ### Create Custom Field - Opportunity
              
              Create a custom field on the Opportunity object in Salesforce.
              
              Property: label (string)
              <dd>
              - **Detailed Explanation**: The display name for the custom field that appears in the Salesforce UI. Should be clear and descriptive of the field's purpose.
              - **Example Usage**: Using Input Widget
              ```js
              {{CustomFieldLabel.text}}
              // Example: "Deal Source Channel"
              ```
              </dd>
              
              Property: type (string)
              <dd>
              - **Detailed Explanation**: The data type for the custom field. Determines validation rules and available features.
              Available types:
              • Text - Free-form text input
              • Number - Numeric values with optional decimals
              • Date - Calendar dates
              • Picklist - Predefined options
              • Lookup - Reference to other records
              • Checkbox - Boolean true/false values
              - **Example Usage**: Using Select Widget
              ```js
              {{FieldType.selectedOptionValue}}
              // Example: "Picklist"
              ```
              </dd>
              
              Property: length (number)
              <dd>
              - **Detailed Explanation**: For text fields, the maximum number of characters allowed. For number fields, the total number of digits including decimals.
              - **Example Usage**: Using Input Widget
              ```js
              {{FieldLength.text}}
              // Example: 100
              ```
              </dd>
              
              Property: decimal_places (number)
              <dd>
              - **Detailed Explanation**: For number fields, the number of decimal places to allow. Maximum value is 18. Only applicable when type is "Number".
              - **Example Usage**: Using Input Widget
              ```js
              {{DecimalPlaces.text}}
              // Example: 2
              ```
              </dd>
              
              Property: picklist_values (array)
              <dd>
              - **Detailed Explanation**: For picklist fields, an array of valid options that users can select from. Each value should be unique within the list.
              - **Example Usage**: Using Table Widget
              ```js
              {{PicklistTable.selectedRows.map(row => row.value)}}
              // Example: ["Website", "Partner", "Direct", "Event"]
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Create Custom Field - Task' && (
            <>
              ### Create Custom Field - Task
              
              Create a custom field on the Task object in Salesforce.
              
              Property: label (string)
              <dd>
              - **Detailed Explanation**: The display name for the custom field that appears in the Salesforce UI. Should be clear and descriptive of the field's purpose.
              - **Example Usage**: Using Input Widget
              ```js
              {{CustomFieldLabel.text}}
              // Example: "Follow-up Required"
              ```
              </dd>
              
              Property: type (string)
              <dd>
              - **Detailed Explanation**: The data type for the custom field. Determines validation rules and available features.
              Available types:
              • Text - Free-form text input
              • Number - Numeric values with optional decimals
              • Date - Calendar dates
              • Picklist - Predefined options
              • Lookup - Reference to other records
              • Checkbox - Boolean true/false values
              - **Example Usage**: Using Select Widget
              ```js
              {{FieldType.selectedOptionValue}}
              // Example: "Checkbox"
              ```
              </dd>
              
              Property: default_checkbox_value (boolean)
              <dd>
              - **Detailed Explanation**: For checkbox fields, the default value when a new task is created. Only applicable when type is "Checkbox".
              - **Example Usage**: Using Select Widget
              ```js
              {{DefaultValue.selectedOptionValue}}
              // Example: true
              ```
              </dd>
              
              Property: visible_lines (number)
              <dd>
              - **Detailed Explanation**: For text area fields, the number of lines to display in the input field. Only applicable when type is "TextArea".
              - **Example Usage**: Using Input Widget
              ```js
              {{VisibleLines.text}}
              // Example: 3
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Create Custom Field - Account' && (
            <>
              ### Create Custom Field - Account
              
              Create a custom field on the Account object in Salesforce.
              
              Property: label (string)
              <dd>
              - **Detailed Explanation**: The display name for the custom field that appears in the Salesforce UI. Should be clear and descriptive of the field's purpose.
              - **Example Usage**: Using Input Widget
              ```js
              {{CustomFieldLabel.text}}
              // Example: "Annual Revenue Target"
              ```
              </dd>
              
              Property: type (string)
              <dd>
              - **Detailed Explanation**: The data type for the custom field. Determines validation rules and available features.
              Available types:
              • Text - Free-form text input
              • Number - Numeric values with optional decimals
              • Date - Calendar dates
              • Picklist - Predefined options
              • Lookup - Reference to other records
              • Checkbox - Boolean true/false values
              - **Example Usage**: Using Select Widget
              ```js
              {{FieldType.selectedOptionValue}}
              // Example: "Currency"
              ```
              </dd>
              
              Property: length (number)
              <dd>
              - **Detailed Explanation**: For text fields, the maximum number of characters allowed. For number fields, the total number of digits including decimals.
              - **Example Usage**: Using Input Widget
              ```js
              {{FieldLength.text}}
              // Example: 16
              ```
              </dd>
              
              Property: decimal_places (number)
              <dd>
              - **Detailed Explanation**: For number fields, the number of decimal places to allow. Maximum value is 18. Only applicable when type is "Number" or "Currency".
              - **Example Usage**: Using Input Widget
              ```js
              {{DecimalPlaces.text}}
              // Example: 2
              ```
              </dd>
              
              Property: helper_text (string)
              <dd>
              - **Detailed Explanation**: Explanatory text that appears when users hover over the field. Helps users understand the purpose and expected input format.
              - **Example Usage**: Using Input Widget
              ```js
              {{HelperText.text}}
              // Example: "Enter the projected annual revenue target for this account in USD"
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Create Custom Field - Lead' && (
            <>
              ### Create Custom Field - Lead
              
              Create a custom field on the Lead object in Salesforce.
              
              Property: label (string)
              <dd>
              - **Detailed Explanation**: The display name for the custom field that appears in the Salesforce UI. Should be clear and descriptive of the field's purpose.
              - **Example Usage**: Using Input Widget
              ```js
              {{CustomFieldLabel.text}}
              // Example: "Customer Priority Level"
              ```
              </dd>
              
              Property: type (string)
              <dd>
              - **Detailed Explanation**: The data type for the custom field. Determines validation rules and available features.
              Available types:
              • Text - Free-form text input
              • Number - Numeric values with optional decimals
              • Date - Calendar dates
              • Picklist - Predefined options
              • Lookup - Reference to other records
              • Checkbox - Boolean true/false values
              - **Example Usage**: Using Select Widget
              ```js
              {{FieldType.selectedOptionValue}}
              // Example: "Picklist"
              ```
              </dd>
              
              Property: length (number)
              <dd>
              - **Detailed Explanation**: For text fields, the maximum number of characters allowed. For number fields, the total number of digits including decimals.
              - **Example Usage**: Using Input Widget
              ```js
              {{FieldLength.text}}
              // Example: 255
              ```
              </dd>
              
              Property: decimal_places (number)
              <dd>
              - **Detailed Explanation**: For number fields, the number of decimal places to allow. Maximum value is 18. Only applicable when type is "Number".
              - **Example Usage**: Using Input Widget
              ```js
              {{DecimalPlaces.text}}
              // Example: 2
              ```
              </dd>
              
              Property: picklist_values (array)
              <dd>
              - **Detailed Explanation**: For picklist fields, an array of valid options that users can select from. Each value should be unique within the list.
              - **Example Usage**: Using Table Widget
              ```js
              {{PicklistTable.selectedRows.map(row => row.value)}}
              // Example: ["High", "Medium", "Low"]
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Write SOQL Query' && (
            <>
              ### Write SOQL Query
              
              Execute a custom SOQL (Salesforce Object Query Language) query.
              
              Property: query (string)
              <dd>
              - **Detailed Explanation**: The SOQL query string to execute. Must follow Salesforce Object Query Language syntax and reference valid objects and fields.
              Query components:
              • SELECT - Fields to retrieve
              • FROM - Object to query
              • WHERE - Filter conditions
              • ORDER BY - Sort results
              • LIMIT - Maximum records
              - **Example Usage**: Using Input Widget
              ```js
              {{SOQLQuery.text}}
              // Example: "SELECT Id, Name, Email FROM Contact WHERE AccountId = '{{AccountId.text}}' ORDER BY CreatedDate DESC LIMIT 100"
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Create Custom Object' && (
            <>
              ### Create Custom Object
              
              Create a new custom object in your Salesforce organization.
              
              Property: label (string)
              <dd>
              - **Detailed Explanation**: The singular display name for the custom object. Used in the Salesforce UI and should clearly identify the business entity.
              - **Example Usage**: Using Input Widget
              ```js
              {{ObjectLabel.text}}
              // Example: "Project"
              ```
              </dd>
              
              Property: plural_label (string)
              <dd>
              - **Detailed Explanation**: The plural display name for the custom object. Used in list views and related lists throughout the Salesforce UI.
              - **Example Usage**: Using Input Widget
              ```js
              {{ObjectPluralLabel.text}}
              // Example: "Projects"
              ```
              </dd>
              
              Property: description (string)
              <dd>
              - **Detailed Explanation**: A detailed description of the custom object's purpose and usage. Helps administrators and users understand the object's role.
              - **Example Usage**: Using Input Widget
              ```js
              {{ObjectDescription.text}}
              // Example: "Tracks customer implementation projects including timeline, resources, and deliverables."
              ```
              </dd>
              
              Property: record_name (string)
              <dd>
              - **Detailed Explanation**: The label for the standard name field of the custom object. This field becomes the primary identifier in the UI.
              - **Example Usage**: Using Input Widget
              ```js
              {{RecordNameLabel.text}}
              // Example: "Project Name"
              ```
              </dd>
            </>
          )}
          
          {selectedCommand === 'Describe Action Schema' && (
            <>
              ### Describe Action Schema
              
              Retrieve metadata information about available actions and their requirements.
              
              Property: record_type (string)
              <dd>
              - **Detailed Explanation**: The Salesforce object type to describe (e.g., Account, Contact, Lead). Returns metadata about available fields and operations.
              - **Example Usage**: Using Select Widget
              ```js
              {{ObjectType.selectedOptionValue}}
              // Example: "Account"
              ```
              </dd>
              
              Property: operation (string)
              <dd>
              - **Detailed Explanation**: The specific operation to describe (create, update, delete). Returns information about required fields and validation rules.
              Available operations:
              • create - Field requirements for new records
              • update - Updateable fields and rules
              • delete - Deletion restrictions and cascading effects
              - **Example Usage**: Using Select Widget
              ```js
              {{OperationType.selectedOptionValue}}
              // Example: "create"
              ```
              </dd>
            </>
          )}
        </div>
      )}
    </>
  );
};
