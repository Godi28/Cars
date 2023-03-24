// importing React for use in the component
import React from 'react';

// Header component with 'Cars' heading in header html
function Header(props) {
  return (
    // key to help render one of many components
    <div key={5} className='App'>
      <header class='App-header'>
        <p class='header'>Cars</p>
      </header>
    </div>
  );
}

// exporting the Header component for rendering in index.js
export { Header };
