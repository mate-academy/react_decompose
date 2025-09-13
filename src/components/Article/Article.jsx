import "./Article.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Article Title</h2>
      <p className="article__text">First paragraph from App.js...</p>
      <p className="article__text">Second paragraph from App.js...</p>
      {/* انسخ كل النصوص والعناوين من App.js */}
    </article>
  );
}

export default Article;
