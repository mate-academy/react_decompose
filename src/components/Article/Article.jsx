// import a css file containing article styles
import './Article.css';

// Create an Article function returning the HTML of article block
function Article() {
  return (
    <article className="article">
      <h1 className="article__title">Headline</h1>

      <p className="article__paragraph">
        In elementum lorem eget est euismod ornare. Phasellus sit amet
        pellentesque mauris. Aliquam quis malesuada ex. Nullam eu aliquam nibh.
        Mauris molestie, urna accumsan ornare semper, augue nibh posuere lorem,
        vitae feugiat sem magna eget massa. Vivamus quis tincidunt dolor.
      </p>

      <p className="article__paragraph">
        In ac nisi lacus. Fusce est dolor, tincidunt ut bibendum vitae,
        fermentum ac quam.
      </p>

      <p className="article__paragraph">
        Donec arcu elit, euismod vel lobortis eu, fringilla sit amet dolor.
      </p>

      <p className="article__paragraph">
        Cras egestas tempor nibh, a fermentum lorem sollicitudin non. Nulla
        facilisi.
      </p>

      <p className="article__paragraph">
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas.
      </p>
    </article>
  );
}

// Add a default export statement for Article component to use it in the other files
export default Article;
