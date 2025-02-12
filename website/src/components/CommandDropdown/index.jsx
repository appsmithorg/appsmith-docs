import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";

const COMMAND_CATEGORIES = {
  "Create Record Commands": [
    "Create Record - Lead",
    "Create Record - Contact",
    "Create Record - Opportunity",
    "Create Record - Task",
    "Create Record - Account",
    "Create Record - Any",
  ],
  "Update Record Commands": [
    "Update Record - Lead",
    "Update Record - Contact",
    "Update Record - Opportunity",
    "Update Record - Task",
    "Update Record - Account",
    "Update Record - Any",
  ],
  "Get Record by ID Commands": [
    "Get Record - Lead",
    "Get Record - Contact",
    "Get Record - Opportunity",
    "Get Record - Task",
    "Get Record - Account",
    "Get Record - Any",
  ],
  "Search Commands": [
    "Search Lead",
    "Search Contact",
    "Search Opportunity",
    "Search Task",
    "Search Account",
    "Search Any",
  ],
};

export default function CommandDropdown({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCommand, setSelectedCommand] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCommands, setFilteredCommands] = useState(COMMAND_CATEGORIES);
  const [dropdownPosition, setDropdownPosition] = useState("bottom");

  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen && dropdownRef.current && menuRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const menuHeight = menuRef.current.offsetHeight;
      const spaceBelow = window.innerHeight - dropdownRect.bottom;
      const spaceAbove = dropdownRect.top;

      if (spaceBelow < menuHeight && spaceAbove > menuHeight) {
        setDropdownPosition("top");
      } else {
        setDropdownPosition("bottom");
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredCommands(COMMAND_CATEGORIES);
    } else {
      const newFiltered = Object.entries(COMMAND_CATEGORIES).reduce(
        (acc, [category, commands]) => {
          const filtered = commands.filter((command) =>
            command.toLowerCase().includes(searchQuery.toLowerCase())
          );
          if (filtered.length > 0) acc[category] = filtered;
          return acc;
        },
        {}
      );
      setFilteredCommands(newFiltered);
    }
  }, [searchQuery]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSearchQuery(""); // Reset search when reopening
  };

  const handleSelect = (command) => {
    setSelectedCommand(command);
    onSelect(command);
    setIsOpen(false);
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        {selectedCommand || "Select a command..."}
        <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}>&#9662;</span>
      </div>
      {isOpen && (
        <div
          className={`${styles.dropdownMenu} ${dropdownPosition === "top" ? styles.menuTop : styles.menuBottom}`}
          ref={menuRef}
        >
          {/* Fixed Search Box */}
          <div className={styles.fixedSearchContainer}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="🔍  Search commands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <ul className={styles.commandList}>
            {Object.entries(filteredCommands).length > 0 ? (
              Object.entries(filteredCommands).map(([category, commands]) => (
                <li key={category} className={styles.category}>
                  <span className={styles.categoryTitle}>{category}</span>
                  <ul className={styles.commands}>
                    {commands.map((command) => (
                      <li
                        key={command}
                        className={`${styles.commandItem} ${selectedCommand === command ? styles.selected : ""}`}
                        onClick={() => handleSelect(command)}
                      >
                        {command}
                      </li>
                    ))}
                  </ul>
                </li>
              ))
            ) : (
              <li className={styles.noResults}>No commands found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
