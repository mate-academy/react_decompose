import React from 'react';
import CreateHeadNav from './CreateHeadNav';
import './ComponentsCSS/headerCP.css';

function CreateHeader() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <CreateHeadNav />
    </header>
  );
}

export default CreateHeader;
