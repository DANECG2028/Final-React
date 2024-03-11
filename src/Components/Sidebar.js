// Sidebar.js
import React from 'react';

const Sidebar = ({ sections, onSelectSection }) => {
  return (
    <div className="sidebar">
      <h2>Sections</h2>
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            {/* Call onSelectSection with the section when the button is clicked */}
            <button onClick={() => onSelectSection(section)}>{section}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

