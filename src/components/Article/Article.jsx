import { loremIpsum } from 'react-lorem-ipsum';
import './Article.css';

export const Article = () => {
  const title = 'Headline';

  return (
    <article className="article">
      <h1 className="article__title">{title}</h1>
      {loremIpsum({ p: 5 }).map(text => (
        <p className="article__paragraph">
          {text}
        </p>
      ))}
    </article>
  );
};
