// import a css file containig welcome styles
import React from 'react';
import './Welcome.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Article from '../Article/Article';
// Create a Welcome function returning the HTML of welcome block
const Welcome = () => (
  <>
    <section className="welcome">
      <span className="welcome__text">Sticky Header!</span>
    </section>
    <Header />
    <Navigation />
    <Article />
  </>
);
// Add a default export statement for Welcome component to use it in the other files

export default Welcome;
