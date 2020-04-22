import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function App({ welcome, header, article }) {
  return (
    <main className="app">
      {welcome}
      {header}
      {article}
    </main>
  );
}

App.propTypes = {
  welcome: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
  article: PropTypes.node.isRequired,
};

export default App;
