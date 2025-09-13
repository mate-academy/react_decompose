// import a css file containig article styles

// Create an Article function returning the HTML of article block

// Add a default export statement for Article component to use it in the other files
import "./Article.css";

function Article() {
  return (
    <article>
      <h2>Article title</h2>
      <p>Article text</p>
    </article>
  );
}

export default Article;
