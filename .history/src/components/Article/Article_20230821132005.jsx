import './Article.css';

// Create an Article function returning the HTML of article block

// Add a default export statement for Article component to use it in the other files

const Article = (props) => (
  <article className="article">
    <h1 className="article__title">Headline</h1>
    <p className="article__paragraph">
      {props.content}
    </p>
    <p className="article__paragraph">
      {content1}
    </p>
    <p className="article__paragraph">
      {content2}
    </p>
    <p className="article__paragraph">
      {content3}
    </p>
    <p className="article__paragraph">
      {content4}
    </p>
  </article>
);

export default Article;
