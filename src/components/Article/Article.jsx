import './Article.css'; // import a css file containig article styles

// Create an Article function returning the HTML of article block

// Add a default export statement for Article component to use it in the other files

function Article() {
  return (
    <article className="article">
      <h1>Headline</h1>

      <p className="article__paragraph"> Paragrafo 1</p>
      <p className="article__paragraph"> Paragrafo 2</p>
      <p className="article__paragraph"> Paragrafo 3</p>
      <p className="article__paragraph"> Paragrafo 4</p>
      <p className="article__paragraph"> Paragrafo 5</p>
    </article>
  );
}

export default Article;
