import React from 'react';
import './Main.css';
import Section from "../section/Section";
import Header from "../header/Header";
import Article from "../article/Article";

function Main() {
  return (
    <main className="app">
      <Section />
      <Header />
      <Article/>
    </main>
  );
}

export default Main;
