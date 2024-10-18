// Importar o arquivo de estilo
import './Article.css';

// Função Article que retorna o HTML do bloco do artigo
const Article = () => {
  return (
    <article className="article">
      <h1>Headline</h1>
      <p className="article__paragraph">Parágrafo 1</p>
      <p className="article__paragraph">Parágrafo 2</p>
      <p className="article__paragraph">Parágrafo 3</p>
      <p className="article__paragraph">Parágrafo 4</p>
      <p className="article__paragraph">Parágrafo 5</p>
    </article>
  );
};

// Exportação padrão do componente Article
export default Article;

