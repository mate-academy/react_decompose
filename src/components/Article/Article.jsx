import './Article.css';

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Headline</h2>
      <p className="article__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        scelerisque, ipsum et tristique pulvinar, leo felis dapibus leo, vitae
        facilisis nunc erat id dui. Sed vulputate urna eu libero blandit, non
        fermentum elit venenatis.
      </p>
      <p className="article__paragraph">
        Cras egestas tempor nibh, a fermentum lorem sollicitudin non. Nulla
        facilisi. In at elit id leo tristique condimentum. Donec at est nulla.
        Mauris egestas magna ut laoreet pretium.
      </p>
      <p className="article__paragraph">
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Phasellus bibendum nec arcu eu lobortis.
      </p>
    </article>
  );
}

export default Article;