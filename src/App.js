import React from 'react';
import './App.css';
import './components/mediaQueries/MediaQueries.css';
import StickyHeader from './components/stickyHeader/StickyHeader';
import MainHeader from './components/header/MainHeader';
import Articles from './components/MainSection/Articles';

function App() {
  return (
    <>
      <StickyHeader />
      <MainHeader />
      <Articles />
    </>
  );
}

export default App;
