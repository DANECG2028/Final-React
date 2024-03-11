// Content.js
import React from 'react';

class Content extends React.Component {
  render() {
    const { selectedSection, data } = this.props;

    // Check if data or data[selectedSection] is undefined
    if (!data || !data[selectedSection]) {
      console.error(`No data available for section: ${selectedSection}`);
      return null;
    }

    // Check if data[selectedSection] is an array
    if (!Array.isArray(data[selectedSection])) {
      console.error(`Data for section ${selectedSection} is not an array`);
      return null;
    }

    return (
      <div className="content">
        <h2>{selectedSection}</h2>
        {data[selectedSection].map((item, index) => (
          <div key={index} className="content-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Content;
