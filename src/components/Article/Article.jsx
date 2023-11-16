import { LoremIpsum } from 'react-lorem-ipsum';
import './Article.css';

export const Article = () => {
  const title = 'Headline';

  return (
    <article className="article">
      <h1 className="article__title">{title}</h1>
      <p className="article__paragraph">
        <LoremIpsum />
      </p>
      <p className="article__paragraph">
        <LoremIpsum />
      </p>
      <p className="article__paragraph">
        <LoremIpsum />
      </p>
      <p className="article__paragraph">
        <LoremIpsum />
      </p>
      <p className="article__paragraph">
        <LoremIpsum />
      </p>
    </article>
  );
};
