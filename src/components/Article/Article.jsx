import './Article.css';
import Headline from './Headline/Headline';
import Paragraph from './Paragraph/Paragraph';

const Article = () => (
  <article className="article">
    <Headline />
    <Paragraph />
    <Paragraph />
    <Paragraph />
    <Paragraph />
    <Paragraph />
  </article>
);

export default Article;
