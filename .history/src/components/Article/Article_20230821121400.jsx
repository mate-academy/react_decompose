// import a css file containig article styles

// Create an Article function returning the HTML of article block

// Add a default export statement for Article component to use it in the other files



const Article = ({content}) => (
  <article className="article">
      <h1 className="article__title">Headline</h1>
      <p className="article__paragraph">
        {content}
      </p>
      <p className="article__paragraph">

      </p>
      <p className="article__paragraph">

      </p>
      <p className="article__paragraph">
        
      </p>
      <p className="article__paragraph">
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Phasellus bibendum nec arcu eu lobortis.
        Nam convallis faucibus ante sed porta. Nullam ut convallis elit, quis
        venenatis nunc. Curabitur sed sem eget velit condimentum rutrum in et
        orci. Nunc non suscipit eros. Suspendisse porta sem vel justo commodo
        dictum. Aliquam erat ligula, fringilla nec suscipit sed, porta vitae
        turpis. Vestibulum rhoncus placerat nulla vitae suscipit. Curabitur
        consectetur ex ut odio tristique vehicula. Ut ligula tortor,
        tincidunt quis sodales vitae, ornare a turpis. Proin sit amet finibus
        enim. Fusce tempus a neque vitae tempor. Aenean rutrum, libero
        iaculis interdum vulputate, dui eros vehicula nisi, at interdum enim
        lacus eu diam.
      </p>
    </article>
)



export default Article;
