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
        Donec arcu elit, euismod vel lobortis eu, fringilla sit amet dolor.
        Cras congue, massa nec sagittis mollis, dui felis ultrices magna,
        tincidunt finibus lorem quam in sem. Morbi odio turpis, pulvinar sit
        amet vulputate quis, ultricies eu libero. Donec ac maximus neque, nec
        maximus nibh. Morbi rhoncus convallis urna, accumsan porta lorem
        hendrerit in. Cras eget nisl dui. Morbi faucibus nisi eget ipsum
        semper vulputate. Mauris nec tincidunt lectus. Aenean ac mi consequat
        velit dignissim consectetur. Fusce placerat ac ipsum ac eleifend.
        Aenean quis faucibus ex.
      </p>
      <p className="article__paragraph">
        Cras egestas tempor nibh, a fermentum lorem sollicitudin non. Nulla
        facilisi. In at elit id leo tristique condimentum. Donec at est
        nulla. Mauris egestas magna ut laoreet pretium. Sed ultrices suscipit
        vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce id sapien eros. Vivamus viverra ultricies gravida. Nam urna
        nibh, blandit a vulputate at, vehicula non nulla. Aenean ut nulla
        leo. Praesent in ullamcorper est.
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
