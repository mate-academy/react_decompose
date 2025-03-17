// import a css file containig article styles
import React from 'react';
// Create an Article function returning the HTML of article block
const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Site Name</h1>
    </div>
  );
};

// Add a default export statement for Article component to use it in the other files

export default Header;
