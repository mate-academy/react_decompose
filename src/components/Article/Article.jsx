// import a css file containig article styles

import './Article.css';

// Create an Article function returning the HTML of article block

function Article() {
  return (
    <article className="article">
      <h2>Headline</h2>

      <p className="article__paragraph">Paragraph 1</p>
      <p className="article__paragraph">Paragraph 2</p>
      <p className="article__paragraph">Paragraph 3</p>
      <p className="article__paragraph">Paragraph 4</p>
      <p className="article__paragraph">Paragraph 5</p>
    </article>
  );
}

// Add a default export statement for Article component to use it in the other files

export default Article;
