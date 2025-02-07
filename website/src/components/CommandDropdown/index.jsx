import React, { useState } from 'react';
import styles from './styles.module.css';

const COMMAND_CATEGORIES = {
  'Create Record Commands': [
    'Create Record - Lead',
    'Create Record - Contact',
    'Create Record - Opportunity',
    'Create Record - Task',
    'Create Record - Account',
    'Create Record - Any',
  ],
  'Update Record Commands': [
    'Update Lead',
    'Update Contact',
    'Update Opportunity',
    'Update Task',
    'Update Account',
    'Update Any',
  ],
  'Get Record by ID Commands': [
    'Get Record - Lead',
    'Get Record - Contact',
    'Get Record - Opportunity',
    'Get Record - Task',
    'Get Record - Account',
    'Get Record - Any',
  ],
  'Search Commands': [
    'Search Lead',
    'Search Contact',
    'Search Opportunity',
    'Search Task',
    'Search Account',
    'Search Any',
  ],
};

export default function CommandDropdown({ onSelect }) {
  const [selectedCommand, setSelectedCommand] = useState('');

  const handleChange = (e) => {
    const command = e.target.value;
    setSelectedCommand(command);
    onSelect(command);
  };

  return (
    <div className={styles.container}>
      <select 
        value={selectedCommand}
        onChange={handleChange}
        className={styles.dropdown}
        aria-label="Select Salesforce command"
      >
        <option value="">Select a command...</option>
        {Object.entries(COMMAND_CATEGORIES).map(([category, commands]) => (
          <optgroup key={category} label={category}>
            {commands.map(command => (
              <option key={command} value={command}>
                {command}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}
