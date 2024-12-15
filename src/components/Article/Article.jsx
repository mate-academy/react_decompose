// import a css file containig article styles
import './Article.scss';

// Create an Article function returning the HTML of article block
function Article() {
  return (
    <article className="article">
      <h1 className="article__title">Headline</h1>
      <p className="article__paragraph">
        In elementum lorem eget est euismod ornare. Phasellus sit amet
        pellentesque mauris. Aliquam quis malesuada ex...
      </p>
      <p className="article__paragraph">
        In ac nisi lacus. Fusce est dolor, tincidunt ut bibendum vitae...
      </p>
      <p className="article__paragraph">
        Donec arcu elit, euismod vel lobortis eu, fringilla sit amet dolor...
      </p>
      <p className="article__paragraph">
        Cras egestas tempor nibh, a fermentum lorem sollicitudin non...
      </p>
      <p className="article__paragraph">
        Pellentesque habitant morbi tristique senectus et netus et malesuada...
      </p>
    </article>
  );
}

// Add a default export statement for Article component to use it in the other files
export default Article;
