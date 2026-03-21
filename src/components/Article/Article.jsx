// import a css file containig article styles
import './Article.css';

// Create an Article function returning the HTML of article block
const Article = ({ paragraph }) => {
  return (
    <div className="article">
      <h1 className="article__title">Headline</h1>
      <p className="article__paragraph">{paragraph}</p>
      <p className="article__paragraph">{paragraph}</p>
      <p className="article__paragraph">{paragraph}</p>
      <p className="article__paragraph">{paragraph}</p>
      <p className="article__paragraph">{paragraph}</p>
    </div>
  );
};

// Add a default export statement for Article component to use it in the other files
export default Article;
