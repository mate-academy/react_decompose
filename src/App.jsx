import React from "react";
import "./App.css";

// Move each BEM block to a separate component (file) and import them here
import Article from "./components/Article/Article";
import Header from "./components/Header/Header";
import Welkome from "./components/Welcome/Welcome";

function App() {
  return (
    <main className="app">
      <Welkome />
      <Header />
      <Article />
    </main>
  );
}

export default App;
