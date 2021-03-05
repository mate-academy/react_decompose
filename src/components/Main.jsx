import React from 'react';
import Welcome from './Welcome';
import Header from './Hedaer';
import Artical from './Artical';

export default function Main() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Artical />
    </main>
  );
}
