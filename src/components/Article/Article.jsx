// import a css file containig article styles

// Create an Article function returning the HTML of article block

// Add a default export statement for Article component to use it in the other files
import './Article.css';

function Article() {
  return (
    <article className="article">
      <h1 className="article__headline">Headline</h1>
      <p className="article__paragraph">Paragraph 1</p>
      <p className="article__paragraph">Paragraph 2</p>
      <p className="article__paragraph">Paragraph 3</p>
      <p className="article__paragraph">Paragraph 4</p>
      <p className="article__paragraph">Paragraph 5</p>
    </article>
  );
}

export default Article;
