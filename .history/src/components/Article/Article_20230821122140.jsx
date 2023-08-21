// import a css file containig article styles

// Create an Article function returning the HTML of article block

// Add a default export statement for Article component to use it in the other files



const Article = ({content, content1, content2, content3, content4}) => (
  <article className="article">
      <h1 className="article__title">Headline</h1>
      <p className="article__paragraph">
        {content}
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
        {content}
      </p>
    </article>
)



export default Article;
