import React, { useState } from 'react';
import CommandDropdown from './index';

export default function CommandContent() {
  const [selectedCommand, setSelectedCommand] = useState('');
  
  const renderCommandContent = () => {
    if (!selectedCommand) return null;

    const content = {
      'Create Record - Lead': (
        <>
          <h3>Create Record - Lead</h3>
          <p>Create a new lead record in Salesforce with specified details such as name, company, status, and other relevant information.</p>
          
          <h4>Name <code>string</code></h4>
          <p>The full name of the lead contact person.</p>
          
          <pre><code className="language-js">
          {`{{LeadName.text}}
// Example: "John Smith"`}
          </code></pre>
          
          <h4>Company <code>string</code></h4>
          <p>The company or organization the lead is associated with.</p>
          
          <pre><code className="language-js">
          {`{{CompanyName.text}}
// Example: "Acme Corp"`}
          </code></pre>
          
          <h4>Email <code>string</code></h4>
          <p>The email address for the lead contact.</p>
          
          <pre><code className="language-js">
          {`{{LeadEmail.text}}
// Example: "john.smith@acme.com"`}
          </code></pre>
          
          <h4>Status <code>string</code></h4>
          <p>The current status of the lead in the sales pipeline.</p>
          
          <pre><code className="language-js">
          {`{{LeadStatus.selectedOptionValue}}
// Example: "Open"`}
          </code></pre>
        </>
      ),
      // Add other command content here following the same pattern
    };

    return content[selectedCommand] || (
      <p>Select a command to view its details.</p>
    );
  };

  return (
    <>
      <CommandDropdown onSelect={setSelectedCommand} />
      {renderCommandContent()}
    </>
  );
}
