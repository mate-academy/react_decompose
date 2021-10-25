import React from 'react';
import './App.css';
import Article from './components/article/Article.tsx';
import ArticleTitle from './components/article/article-title/Article-title.tsx';
import Paragraph from './components/article/paragraph/Paragraph';
import Header from './components/header/Header';

function App() {
  return (
    <main className="app">
      <section className="welcome">
        <span className="welcome__text">React JS</span>
      </section>
      <Header />
      <Article>
        <ArticleTitle id="about">About</ArticleTitle>
        <Paragraph>
          In elementum lorem eget est euismod ornare. Phasellus sit amet
          pellentesque mauris. Aliquam quis malesuada ex. Nullam eu aliquam
          nibh. Mauris molestie, urna accumsan ornare semper, augue nibh posuere
          lorem, vitae feugiat sem magna eget massa. Vivamus quis tincidunt
          dolor. Fusce efficitur, orci non vestibulum consequat, lectus turpis
          bibendum odio, in efficitur leo felis sed justo. Fusce commodo iaculis
          orci, quis imperdiet urna. Sed mollis facilisis lacus non condimentum.
          Nunc efficitur massa non neque elementum semper. Vestibulum lorem
          arcu, tincidunt in quam et, feugiat venenatis augue. Donec sed
          tincidunt tellus, a facilisis magna. Proin sit amet viverra nibh,
          bibendum gravida felis. Vivamus ut nunc id mauris posuere
          pellentesque. Praesent tincidunt id odio id feugiat.
        </Paragraph>
        <Paragraph>
          In elementum lorem eget est euismod ornare. Phasellus sit amet
          pellentesque mauris. Aliquam quis malesuada ex. Nullam eu aliquam
          nibh. Mauris molestie, urna accumsan ornare semper, augue nibh posuere
          lorem, vitae feugiat sem magna eget massa. Vivamus quis tincidunt
          dolor. Fusce efficitur, orci non vestibulum consequat, lectus turpis
          bibendum odio, in efficitur leo felis sed justo. Fusce commodo iaculis
          orci, quis imperdiet urna. Sed mollis facilisis lacus non condimentum.
          Nunc efficitur massa non neque elementum semper. Vestibulum lorem
          arcu, tincidunt in quam et, feugiat venenatis augue. Donec sed
          tincidunt tellus, a facilisis magna. Proin sit amet viverra nibh,
          bibendum gravida felis. Vivamus ut nunc id mauris posuere
          pellentesque. Praesent tincidunt id odio id feugiat.
        </Paragraph>
      </Article>
      <Article>
        <ArticleTitle id="services">Services</ArticleTitle>
        <Paragraph>
          In elementum lorem eget est euismod ornare. Phasellus sit amet
          pellentesque mauris. Aliquam quis malesuada ex. Nullam eu aliquam
          nibh. Mauris molestie, urna accumsan ornare semper, augue nibh posuere
          lorem, vitae feugiat sem magna eget massa. Vivamus quis tincidunt
          dolor. Fusce efficitur, orci non vestibulum consequat, lectus turpis
          bibendum odio, in efficitur leo felis sed justo. Fusce commodo iaculis
          orci, quis imperdiet urna. Sed mollis facilisis lacus non condimentum.
          Nunc efficitur massa non neque elementum semper. Vestibulum lorem
          arcu, tincidunt in quam et, feugiat venenatis augue. Donec sed
          tincidunt tellus, a facilisis magna. Proin sit amet viverra nibh,
          bibendum gravida felis. Vivamus ut nunc id mauris posuere
          pellentesque. Praesent tincidunt id odio id feugiat.
        </Paragraph>
        <Paragraph>
          In elementum lorem eget est euismod ornare. Phasellus sit amet
          pellentesque mauris. Aliquam quis malesuada ex. Nullam eu aliquam
          nibh. Mauris molestie, urna accumsan ornare semper, augue nibh posuere
          lorem, vitae feugiat sem magna eget massa. Vivamus quis tincidunt
          dolor. Fusce efficitur, orci non vestibulum consequat, lectus turpis
          bibendum odio, in efficitur leo felis sed justo. Fusce commodo iaculis
          orci, quis imperdiet urna. Sed mollis facilisis lacus non condimentum.
          Nunc efficitur massa non neque elementum semper. Vestibulum lorem
          arcu, tincidunt in quam et, feugiat venenatis augue. Donec sed
          tincidunt tellus, a facilisis magna. Proin sit amet viverra nibh,
          bibendum gravida felis. Vivamus ut nunc id mauris posuere
          pellentesque. Praesent tincidunt id odio id feugiat.
        </Paragraph>
      </Article>
      <Article>
        <ArticleTitle id="contact">Contact</ArticleTitle>
        <Paragraph>
          In elementum lorem eget est euismod ornare. Phasellus sit amet
          pellentesque mauris. Aliquam quis malesuada ex. Nullam eu aliquam
          nibh. Mauris molestie, urna accumsan ornare semper, augue nibh posuere
          lorem, vitae feugiat sem magna eget massa. Vivamus quis tincidunt
          dolor. Fusce efficitur, orci non vestibulum consequat, lectus turpis
          bibendum odio, in efficitur leo felis sed justo. Fusce commodo iaculis
          orci, quis imperdiet urna. Sed mollis facilisis lacus non condimentum.
          Nunc efficitur massa non neque elementum semper. Vestibulum lorem
          arcu, tincidunt in quam et, feugiat venenatis augue. Donec sed
          tincidunt tellus, a facilisis magna. Proin sit amet viverra nibh,
          bibendum gravida felis. Vivamus ut nunc id mauris posuere
          pellentesque. Praesent tincidunt id odio id feugiat.
        </Paragraph>
        <Paragraph>
          In elementum lorem eget est euismod ornare. Phasellus sit amet
          pellentesque mauris. Aliquam quis malesuada ex. Nullam eu aliquam
          nibh. Mauris molestie, urna accumsan ornare semper, augue nibh posuere
          lorem, vitae feugiat sem magna eget massa. Vivamus quis tincidunt
          dolor. Fusce efficitur, orci non vestibulum consequat, lectus turpis
          bibendum odio, in efficitur leo felis sed justo. Fusce commodo iaculis
          orci, quis imperdiet urna. Sed mollis facilisis lacus non condimentum.
          Nunc efficitur massa non neque elementum semper. Vestibulum lorem
          arcu, tincidunt in quam et, feugiat venenatis augue. Donec sed
          tincidunt tellus, a facilisis magna. Proin sit amet viverra nibh,
          bibendum gravida felis. Vivamus ut nunc id mauris posuere
          pellentesque. Praesent tincidunt id odio id feugiat.
        </Paragraph>
      </Article>
    </main>
  );
}

export default App;
