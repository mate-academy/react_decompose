import './Article.css';

const Article = props => (
  <article className="article">
    <h1 className="article__title">Headline</h1>
    <p className="article__paragraph">
      {props.content}
    </p>
    <p className="article__paragraph">
      {props.content1}
    </p>
    <p className="article__paragraph">
      {props.content2}
    </p>
    <p className="article__paragraph">
      {props.content3}
    </p>
    <p className="article__paragraph">
      {props.content4}
    </p>
  </article>
);

export default Article;
