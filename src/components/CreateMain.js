import React from 'react';
import CreateSection from './CreateSection';
import CreateHeader from './CreateHeader';
import CreateArticle from './CreateArticle';

function CreateMain() {
  return (
    <main className="app">
      <CreateSection />
      <CreateHeader />
      <CreateArticle />
    </main>
  );
}

export default CreateMain;
