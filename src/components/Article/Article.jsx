import './Article.css';

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Headline</h2>

      <p className="article__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        suscipit, lorem in pellentesque luctus, erat quam cursus augue, at
        pulvinar nisi enim vel libero.
      </p>

      <p className="article__paragraph">
        Donec posuere, sem vitae sagittis vestibulum, nisl orci consequat
        nulla, sed interdum ipsum lacus nec justo.
      </p>

      <p className="article__paragraph">
        Curabitur tincidunt arcu at sem aliquet, eget eleifend odio
        ullamcorper. Aliquam erat volutpat.
      </p>

      <p className="article__paragraph">
        Vivamus eget quam id neque consectetur malesuada. Sed euismod,
        mauris vel efficitur cursus, lorem tellus facilisis erat, eget
        tincidunt nisl purus sed neque.
      </p>

      <p className="article__paragraph">
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas.
      </p>
    </article>
  );
}

export default Article;