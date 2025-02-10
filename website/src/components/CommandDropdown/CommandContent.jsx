import React from 'react';
import styles from './styles.module.css';

const CommandContent = ({ selectedCommand }) => {
  const commandDetails = {
    'create-record-contact': {
      title: 'Create Record: Contact',
      properties: [
        {
          name: 'first_name',
          type: 'String',
          description: 'The contact\'s first name. Use an Input Widget to collect this information.',
          example: '{{Input1.text}}'
        },
        {
          name: 'last_name',
          type: 'String',
          description: 'The contact\'s last name. Required field for creating a contact record.',
          example: '{{Input2.text}}'
        },
        {
          name: 'account_id',
          type: 'String',
          description: 'The ID of the account this contact belongs to. Can be retrieved from a Table Widget displaying accounts or a Select Widget with account options.',
          example: '{{Table1.selectedRow.Id}}'
        },
        {
          name: 'email',
          type: 'String',
          description: 'Contact\'s email address. Use an Input Widget with email validation.',
          example: '{{EmailInput.text}}'
        },
        {
          name: 'title',
          type: 'String',
          description: 'Contact\'s job title or position within their organization.',
          example: '{{TitleInput.text}}'
        },
        {
          name: 'description',
          type: 'String',
          description: 'Additional notes or description about the contact. Can be collected using a TextArea Widget for multi-line input.',
          example: '{{Description.text}}'
        },
        {
          name: 'additional_fields',
          type: 'Object',
          description: 'Optional custom fields specific to your Salesforce organization. Pass as a JSON object with field API names as keys.',
          example: '{{\n{\n  "Custom_Field__c": CustomInput.text,\n  "Department__c": DepartmentSelect.selectedOptionValue\n}\n}}'
        }
      ]
    },
    'create-record-lead': {
      title: 'Create Record: Lead',
      properties: [
        {
          name: 'first_name',
          type: 'String',
          description: 'The lead\'s first name. Use an Input Widget for collection.',
          example: '{{LeadFirstName.text}}'
        },
        {
          name: 'last_name',
          type: 'String',
          description: 'The lead\'s last name. Required field for lead creation.',
          example: '{{LeadLastName.text}}'
        },
        {
          name: 'company',
          type: 'String',
          description: 'The company or organization the lead is associated with. Required field.',
          example: '{{CompanyInput.text}}'
        },
        {
          name: 'email',
          type: 'String',
          description: 'Lead\'s email address. Use an Input Widget with email validation.',
          example: '{{LeadEmail.text}}'
        },
        {
          name: 'phone',
          type: 'String',
          description: 'Lead\'s phone number. Consider using an Input Widget with phone number formatting.',
          example: '{{PhoneInput.text}}'
        },
        {
          name: 'website',
          type: 'String',
          description: 'Company website URL. Should be a valid URL format starting with http:// or https://',
          example: '{{WebsiteInput.text}}'
        },
        {
          name: 'title',
          type: 'String',
          description: 'Lead\'s job title or position.',
          example: '{{TitleInput.text}}'
        },
        {
          name: 'status',
          type: 'String',
          description: 'Lead status. Use a Select Widget with predefined status options: Open - Not Contacted, Working - Contacted, Closed - Converted, Closed - Not Converted',
          example: '{{StatusSelect.selectedOptionValue}}'
        },
        {
          name: 'description',
          type: 'String',
          description: 'Additional information about the lead. Use a TextArea Widget for multi-line input.',
          example: '{{LeadDescription.text}}'
        },
        {
          name: 'additional_fields',
          type: 'Object',
          description: 'Custom fields specific to your Salesforce organization.',
          example: '{{\n{\n  "Lead_Source__c": SourceSelect.selectedOptionValue,\n  "Industry__c": IndustryInput.text\n}\n}}'
        }
      ]
    },
    'create-record-opportunity': {
      title: 'Create Record: Opportunity',
      properties: [
        {
          name: 'name',
          type: 'String',
          description: 'Name of the opportunity. Required field that should be descriptive and unique.',
          example: '{{OpportunityName.text}}'
        },
        {
          name: 'stage_name',
          type: 'String',
          description: 'Current stage of the opportunity. Use a Select Widget with standard stages: Prospecting, Qualification, Needs Analysis, Value Proposition, Decision Makers, Perception Analysis, Proposal/Price Quote, Negotiation/Review, Closed Won, Closed Lost',
          example: '{{StageSelect.selectedOptionValue}}'
        },
        {
          name: 'close_date',
          type: 'Date',
          description: 'Expected or actual close date. Use a DatePicker Widget for easy date selection.',
          example: '{{DatePicker1.formattedDate}}'
        },
        {
          name: 'account_id',
          type: 'String',
          description: 'ID of the associated account. Can be retrieved from a Table Widget showing accounts or a Select Widget.',
          example: '{{AccountTable.selectedRow.Id}}'
        },
        {
          name: 'amount',
          type: 'Number',
          description: 'Monetary value of the opportunity. Use a Number Input Widget with currency formatting.',
          example: '{{AmountInput.text}}'
        },
        {
          name: 'description',
          type: 'String',
          description: 'Detailed description of the opportunity. Use a TextArea Widget for multi-line input.',
          example: '{{OpportunityDescription.text}}'
        },
        {
          name: 'owner_id',
          type: 'String',
          description: 'ID of the Salesforce user who owns the opportunity. Can be selected from a dropdown of users.',
          example: '{{OwnerSelect.selectedOptionValue}}'
        },
        {
          name: 'next_step',
          type: 'String',
          description: 'Description of the next action required to advance the opportunity.',
          example: '{{NextStepInput.text}}'
        },
        {
          name: 'additional_details',
          type: 'Object',
          description: 'Additional custom fields specific to your Salesforce organization.',
          example: '{{\n{\n  "Probability__c": ProbabilityInput.text,\n  "Competition__c": CompetitionInput.text\n}\n}}'
        }
      ]
    },
    'create-record-task': {
      title: 'Create Record: Task',
      properties: [
        {
          name: 'what_id',
          type: 'String',
          description: 'ID of the object the task is related to (Account, Opportunity, etc.). Use a Select Widget to choose from related records.',
          example: '{{RelatedToSelect.selectedOptionValue}}'
        },
        {
          name: 'who_id',
          type: 'String',
          description: 'ID of the person (Lead or Contact) the task is associated with.',
          example: '{{ContactSelect.selectedOptionValue}}'
        },
        {
          name: 'subject',
          type: 'String',
          description: 'Brief description of the task. Required field.',
          example: '{{SubjectInput.text}}'
        },
        {
          name: 'activity_date',
          type: 'Date',
          description: 'Due date for the task. Use a DatePicker Widget.',
          example: '{{DueDatePicker.formattedDate}}'
        },
        {
          name: 'description',
          type: 'String',
          description: 'Detailed description of the task. Use a TextArea Widget.',
          example: '{{TaskDescription.text}}'
        },
        {
          name: 'task_subtype',
          type: 'String',
          description: 'Type of task (Call, Meeting, Email, etc.). Use a Select Widget with predefined options.',
          example: '{{TaskTypeSelect.selectedOptionValue}}'
        },
        {
          name: 'status',
          type: 'String',
          description: 'Current status of the task. Use a Select Widget with options: Not Started, In Progress, Completed, Waiting on someone else, Deferred',
          example: '{{TaskStatusSelect.selectedOptionValue}}'
        },
        {
          name: 'owner_id',
          type: 'String',
          description: 'ID of the Salesforce user assigned to the task.',
          example: '{{OwnerSelect.selectedOptionValue}}'
        },
        {
          name: 'call_duration_in_seconds',
          type: 'Number',
          description: 'Duration of the call in seconds, if the task is a call.',
          example: '{{DurationInput.text}}'
        },
        {
          name: 'is_reminder_set',
          type: 'Boolean',
          description: 'Whether to set a reminder for this task.',
          example: '{{ReminderCheckbox.isChecked}}'
        },
        {
          name: 'reminder_date_time',
          type: 'DateTime',
          description: 'Date and time for the reminder. Use a DateTime Picker Widget.',
          example: '{{ReminderDateTimePicker.formattedDateTime}}'
        },
        {
          name: 'additional_fields',
          type: 'Object',
          description: 'Custom fields specific to your Salesforce organization.',
          example: '{{\n{\n  "Priority__c": PrioritySelect.selectedOptionValue,\n  "Follow_Up__c": FollowUpCheckbox.isChecked\n}\n}}'
        }
      ]
    },
    'create-record-account': {
      title: 'Create Record: Account',
      properties: [
        {
          name: 'name',
          type: 'String',
          description: 'Name of the account. Required field for account creation.',
          example: '{{AccountName.text}}'
        },
        {
          name: 'owner_id',
          type: 'String',
          description: 'ID of the Salesforce user who owns the account.',
          example: '{{OwnerSelect.selectedOptionValue}}'
        },
        {
          name: 'website',
          type: 'String',
          description: 'Company website URL. Should be a valid URL format.',
          example: '{{WebsiteInput.text}}'
        },
        {
          name: 'phone',
          type: 'String',
          description: 'Primary phone number for the account.',
          example: '{{PhoneInput.text}}'
        },
        {
          name: 'description',
          type: 'String',
          description: 'Detailed description of the account. Use a TextArea Widget.',
          example: '{{AccountDescription.text}}'
        },
        {
          name: 'additional_fields',
          type: 'Object',
          description: 'Custom fields specific to your Salesforce organization.',
          example: '{{\n{\n  "Industry__c": IndustrySelect.selectedOptionValue,\n  "Annual_Revenue__c": RevenueInput.text\n}\n}}'
        }
      ]
    },
    'update-record-contact': {
      title: 'Update Record: Contact',
      properties: [
        {
          name: 'record_id',
          type: 'String',
          description: 'ID of the contact to update. Can be retrieved from a Table Widget or Select Widget.',
          example: '{{ContactTable.selectedRow.Id}}'
        },
        {
          name: 'first_name',
          type: 'String',
          description: 'Updated first name of the contact.',
          example: '{{FirstNameInput.text}}'
        },
        {
          name: 'last_name',
          type: 'String',
          description: 'Updated last name of the contact.',
          example: '{{LastNameInput.text}}'
        },
        {
          name: 'account_id',
          type: 'String',
          description: 'ID of the account to associate with the contact.',
          example: '{{AccountSelect.selectedOptionValue}}'
        },
        {
          name: 'email',
          type: 'String',
          description: 'Updated email address for the contact.',
          example: '{{EmailInput.text}}'
        },
        {
          name: 'title',
          type: 'String',
          description: 'Updated job title for the contact.',
          example: '{{TitleInput.text}}'
        },
        {
          name: 'description',
          type: 'String',
          description: 'Updated description or notes about the contact.',
          example: '{{DescriptionInput.text}}'
        },
        {
          name: 'additional_fields',
          type: 'Object',
          description: 'Additional custom fields to update.',
          example: '{{\n{\n  "Department__c": DepartmentInput.text,\n  "Custom_Field__c": CustomInput.text\n}\n}}'
        }
      ]
    },
    'get-record-by-id-contact': {
      title: 'Get Record by ID: Contact',
      properties: [
        {
          name: 'record_id',
          type: 'String',
          description: 'ID of the contact to retrieve. This is the 18-character Salesforce ID that uniquely identifies the contact record.',
          example: '{{ContactSelect.selectedOptionValue}}'
        }
      ]
    },
    'search-record-contact': {
      title: 'Search Record: Contact',
      properties: [
        {
          name: 'filter_formula',
          type: 'String',
          description: 'SOQL WHERE clause to filter contacts. Example: "LastName LIKE \'%Smith%\' AND Account.Name LIKE \'%Tech%\'". Use dynamic values from widgets to create search criteria.',
          example: '{{`LastName LIKE \'%${SearchInput.text}%\' AND Email LIKE \'%${EmailFilter.text}%\'`}}'
        },
        {
          name: 'pagination_parameters',
          type: 'Object',
          description: 'Parameters for paginating through results. Include limit and offset values.',
          example: '{{\n{\n  "limit": Table1.pageSize,\n  "offset": (Table1.pageNo - 1) * Table1.pageSize\n}\n}}'
        }
      ]
    },
    'get-record-by-view-id-contact': {
      title: 'Get Record by View ID: Contact',
      properties: [
        {
          name: 'list_view_id',
          type: 'String',
          description: 'ID of the Salesforce List View to retrieve contacts from. Can be found in the URL when viewing a list in Salesforce.',
          example: '{{ListViewSelect.selectedOptionValue}}'
        },
        {
          name: 'pagination_parameters',
          type: 'Object',
          description: 'Parameters for paginating through the list view results.',
          example: '{{\n{\n  "limit": Table1.pageSize,\n  "offset": (Table1.pageNo - 1) * Table1.pageSize\n}\n}}'
        }
      ]
    },
    'create-custom-field-lead': {
      title: 'Create Custom Field: Lead',
      properties: [
        {
          name: 'label',
          type: 'String',
          description: 'Display name for the custom field as it will appear in the Salesforce UI.',
          example: '{{FieldLabel.text}}'
        },
        {
          name: 'type',
          type: 'String',
          description: 'Data type for the custom field (Text, Number, Date, Picklist, etc.).',
          example: '{{FieldTypeSelect.selectedOptionValue}}'
        },
        {
          name: 'default_checkbox_value',
          type: 'Boolean',
          description: 'Default value if the field type is checkbox.',
          example: '{{DefaultValueCheckbox.isChecked}}'
        },
        {
          name: 'length',
          type: 'Number',
          description: 'Maximum length for text fields.',
          example: '{{LengthInput.text}}'
        },
        {
          name: 'decimal_places',
          type: 'Number',
          description: 'Number of decimal places for number fields.',
          example: '{{DecimalPlacesInput.text}}'
        },
        {
          name: 'picklist_values',
          type: 'Array',
          description: 'Array of values for picklist fields.',
          example: '{{PicklistValues.text.split(",")}}'
        },
        {
          name: 'visible_lines',
          type: 'Number',
          description: 'Number of visible lines for long text areas.',
          example: '{{VisibleLinesInput.text}}'
        },
        {
          name: 'helper_text',
          type: 'String',
          description: 'Help text to display when users hover over the field.',
          example: '{{HelperText.text}}'
        },
        {
          name: 'default_field_value',
          type: 'String',
          description: 'Default value for the field.',
          example: '{{DefaultValueInput.text}}'
        }
      ]
    },
    'write-soql-query': {
      title: 'Write SOQL Query',
      properties: [
        {
          name: 'query',
          type: 'String',
          description: 'SOQL query string. Example: "SELECT Id, Name, Email FROM Contact WHERE AccountId = \'001...\'". Use template literals to include dynamic values from widgets.',
          example: '{{`SELECT Id, Name, Email FROM Contact WHERE AccountId = \'${AccountSelect.selectedOptionValue}\'`}}'
        }
      ]
    },
    'create-custom-object': {
      title: 'Create Custom Object',
      properties: [
        {
          name: 'label',
          type: 'String',
          description: 'Singular label for the custom object as it will appear in the Salesforce UI.',
          example: '{{ObjectLabel.text}}'
        },
        {
          name: 'plural_label',
          type: 'String',
          description: 'Plural label for the custom object.',
          example: '{{PluralLabel.text}}'
        },
        {
          name: 'description',
          type: 'String',
          description: 'Detailed description of the custom object\'s purpose.',
          example: '{{ObjectDescription.text}}'
        },
        {
          name: 'record_name',
          type: 'String',
          description: 'Name field label for records of this object type.',
          example: '{{RecordNameField.text}}'
        }
      ]
    },
    'describe-action-schema': {
      title: 'Describe Action Schema',
      properties: [
        {
          name: 'record_type',
          type: 'String',
          description: 'Type of record to describe (Contact, Lead, Opportunity, etc.).',
          example: '{{RecordTypeSelect.selectedOptionValue}}'
        },
        {
          name: 'operation',
          type: 'String',
          description: 'Operation to describe (create, update, delete).',
          example: '{{OperationSelect.selectedOptionValue}}'
        }
      ]
    }
  };

  const renderProperty = (property) => (
    <div key={property.name} className={styles.propertyContainer}>
      <h3 className={styles.propertyName}>
        {property.name} ({property.type})
      </h3>
      <div className={styles.propertyDescription}>
        <strong>Description:</strong> {property.description}
      </div>
      {property.example && (
        <div className={styles.propertyExample}>
          <strong>Example:</strong>
          <pre>{property.example}</pre>
        </div>
      )}
    </div>
  );

  const selectedCommandDetails = commandDetails[selectedCommand];

  if (!selectedCommandDetails) {
    return <div>Please select a command to view its details.</div>;
  }

  return (
    <div className={styles.commandContent}>
      <h2 className={styles.commandTitle}>{selectedCommandDetails.title}</h2>
      <div className={styles.propertiesList}>
        {selectedCommandDetails.properties.map(renderProperty)}
      </div>
    </div>
  );
};

export default CommandContent;
