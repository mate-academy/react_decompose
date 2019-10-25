import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

function App() {
  return (
    <>
      <Welcome text="Sticky Header!" />
      <Header
        title="Site Name"
        navLinks={[
          "About",
          "Services",
          "Contact"
        ]}
      />
      <Article title="Headline" />
    </>
  );
}

export default App;
