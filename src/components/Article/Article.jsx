import React from 'react';
import './Article.css';

const Article = () => {
  return (
    <article className="article">
      <h1>Headline</h1>
      <p className="article__paragraph">
        This is a sample article content. It provides information about a
        specific topic and is designed to engage readers.
      </p>
      <p className="article__paragraph">
        In elementum lorem eget est euismod ornare. Phasellus sit amet
        pellentesque mauris. Aliquam quis malesuada ex.
      </p>
      <p className="article__paragraph">
        Nullam eu aliquam nibh. Mauris molestie, urna accumsan ornare semper,
        augue nibh posuere lorem, vitae feugiat sem magna eget massa.
      </p>
      <p className="article__paragraph">
        Vivamus quis tincidunt dolor. Fusce efficitur, orci non vestibulum
        consequat, lectus turpis bibendum odio.
      </p>
      <p className="article__paragraph">
        Donec arcu elit, euismod vel lobortis eu, fringilla sit amet dolor. Cras
        congue, massa nec sagittis mollis.
      </p>
    </article>
  );
};

export default Article;

// Create an Article function returning the HTML of article block

// Add a default export statement for Article component to use it in the other files
