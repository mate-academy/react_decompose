// import a css file containig article styles

// Create an Article function returning the HTML of article block

// Add a default export statement for Article component to use it in the other files
import './Article.css';

const Article = () => {
  return (
    <>
      <article className="article-section">An article section</article>
    </>
  );
};

export default Article;
