import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Dropdown({ label, options, content }) {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* Dropdown Menu */}
      <select
        onChange={(e) => setSelected(e.target.value)}
        value={selected}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Render Markdown Content */}
      <div>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content[selected]}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Dropdown;
