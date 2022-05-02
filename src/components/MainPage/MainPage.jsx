import React from 'react';
import { Banner } from '../Banner';
import { Header } from '../Header';
import { Article } from '../Article';

export const MainPage = () => (
  <main className="app">
    <Banner />
    <Header />
    <Article />
  </main>
);
