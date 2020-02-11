import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Article from '../Article/Article';
import styles from './webPage.module.css';

const WebPage = () => (
  <main className={styles.app}>
    <Header />
    <Navigation />
    <Article />
  </main>
);

export default WebPage;
