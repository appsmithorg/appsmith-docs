---
title: Salesforce
hide_title: true
---

import CommandDropdown from '@site/src/components/CommandDropdown';

<div className="tag-wrapper">
  <h1>Salesforce</h1>
</div>

This page provides information for connecting Appsmith to Salesforce, enabling interaction with CRM data such as leads and accounts.

<ZoomImage src="/img/salesforce-appsmith.png" alt="" caption="" />

### Connection Parameters
This section provides a complete reference for all parameters required to connect to a Salesforce data source.

### Query Salesforce

> **Commands**

<CommandContent />

export const CommandContent = () => {
  const [selectedCommand, setSelectedCommand] = React.useState('');
  
  return (
    <>
      <CommandDropdown onSelect={setSelectedCommand} />
      {selectedCommand && (
        <div>
          {selectedCommand === 'Create Record - Lead' && (
            <>
              ### Create Record - Lead
              
              Create a new lead record in Salesforce with specified details such as name, company, status, and other relevant information.
              
              #### Name `string`
              The full name of the lead contact person.
              
              ```js
              {{LeadName.text}}
              // Example: "John Smith"
              ```
              
              #### Company `string`
              The company or organization the lead is associated with.
              
              ```js
              {{CompanyName.text}}
              // Example: "Acme Corp"
              ```
              
              #### Email `string`
              The email address for the lead contact.
              
              ```js
              {{LeadEmail.text}}
              // Example: "john.smith@acme.com"
              ```
              
              #### Status `string`
              The current status of the lead in the sales pipeline.
              
              ```js
              {{LeadStatus.selectedOptionValue}}
              // Example: "Open"
              ```
            </>
          )}
          {selectedCommand === 'Create Record - Contact' && (
            <>
              ### Create Record - Contact
              
              Create a new contact record in Salesforce with details like name, account association, and contact information.
              
              #### Name `string`
              The full name of the contact.
              
              ```js
              {{ContactName.text}}
              // Example: "Jane Wilson"
              ```
              
              #### AccountId `string`
              The ID of the account this contact is associated with.
              
              ```js
              {{AccountDropdown.selectedOptionValue}}
              // Example: "001XXXXXXXXXXXXXXX"
              ```
              
              #### Email `string`
              The email address for the contact.
              
              ```js
              {{ContactEmail.text}}
              // Example: "jane.wilson@company.com"
              ```
            </>
          )}
          {selectedCommand === 'Create Record - Opportunity' && (
            <>
              ### Create Record - Opportunity
              
              Create a new opportunity record in Salesforce to track potential sales and revenue.
              
              #### Name `string`
              The name or title of the opportunity.
              
              ```js
              {{OpportunityName.text}}
              // Example: "Q1 Software Upgrade"
              ```
              
              #### AccountId `string`
              The ID of the account this opportunity is associated with.
              
              ```js
              {{AccountDropdown.selectedOptionValue}}
              // Example: "001XXXXXXXXXXXXXXX"
              ```
              
              #### Amount `number`
              The potential value of the opportunity.
              
              ```js
              {{OpportunityAmount.text}}
              // Example: 50000
              ```
              
              #### StageName `string`
              The current stage of the opportunity in the sales process.
              
              ```js
              {{StageDropdown.selectedOptionValue}}
              // Example: "Prospecting"
              ```
              
              #### CloseDate `string`
              The expected close date for the opportunity.
              
              ```js
              {{CloseDatePicker.selectedDate}}
              // Example: "2024-12-31"
              ```
            </>
          )}
          {/* Continue with other Create Record commands */}
          {selectedCommand === 'Update Lead' && (
            <>
              ### Update Lead
              
              Update an existing lead record in Salesforce with modified information.
              
              #### LeadId `string`
              The unique identifier of the lead to update.
              
              ```js
              {{LeadTable.selectedRow.Id}}
              // Example: "00QXXXXXXXXXXXXXXX"
              ```
              
              #### Name `string`
              The updated full name of the lead.
              
              ```js
              {{UpdatedLeadName.text}}
              // Example: "John Smith Jr."
              ```
              
              #### Status `string`
              The new status of the lead.
              
              ```js
              {{UpdatedLeadStatus.selectedOptionValue}}
              // Example: "Qualified"
              ```
            </>
          )}
          {/* Continue with other Update commands */}
          {selectedCommand === 'Get Record - Lead' && (
            <>
              ### Get Record - Lead
              
              Retrieve a specific lead record by its ID.
              
              #### LeadId `string`
              The unique identifier of the lead to retrieve.
              
              ```js
              {{LeadTable.selectedRow.Id}}
              // Example: "00QXXXXXXXXXXXXXXX"
              ```
            </>
          )}
          {/* Continue with other Get Record commands */}
          {selectedCommand === 'Search Lead' && (
            <>
              ### Search Lead
              
              Search for leads based on specified criteria.
              
              #### SearchTerm `string`
              The text to search for in lead records.
              
              ```js
              {{LeadSearchInput.text}}
              // Example: "Smith"
              ```
              
              #### Company `string`
              Filter leads by company name.
              
              ```js
              {{CompanyFilter.text}}
              // Example: "Acme"
              ```
              
              #### Status `string`
              Filter leads by their current status.
              
              ```js
              {{StatusFilter.selectedOptionValue}}
              // Example: "Open"
              ```
            </>
          )}
          {/* Add similar blocks for other commands following the same pattern */}
        </div>
      )}
    </>
  );
};
