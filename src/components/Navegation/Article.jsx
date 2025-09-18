// import a css file containig article styles
import './Article.css';

// Create an Article function returning the HTML of article block
function Article() {
  return (
    <article className="article">
      <h2 className="article-title">Article Title</h2>
      <p className="article-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </article>
  );
}

// Add a default export statement for Article component to use it in the other files
export default Article;
