import React from 'react';
import './Title.css';

// eslint-disable-next-line react/prop-types
const Title = ({ title }) => (
  <div className="welcome">
    <span className="welcome__text">{title}</span>
  </div>
);

export default Title;
