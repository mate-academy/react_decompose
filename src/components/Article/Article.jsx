import { loremIpsum } from 'react-lorem-ipsum';
import './Article.css';

const TestdArticle = () => {
  const title = 'Headline';

  return (
    <article className="article">
      <h1 className="article__title">{title}</h1>
      {loremIpsum({ p: 5 }).map((text, index) => (
        <p className="article__paragraph" key={`${index + text}`}>
          {text}
        </p>
      ))}
    </article>
  );
};

export default TestdArticle;
