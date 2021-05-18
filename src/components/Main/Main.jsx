import React from 'react';
import { Welcome } from '../Welcome';
import { Article } from '../Article';
import { Header } from '../Header';

export function Main() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}
