import { LoremIpsum } from 'react-lorem-ipsum';
import './Article.css';

export const Article = () => {
  const title = 'Headline';

  return (
    <article className="article">
      <h1 className="article__title">{title}</h1>
      <div className="article__paragraph">
        <LoremIpsum p={5} />
      </div>
    </article>
  );
};
