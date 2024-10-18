// import a css file containig welcome styles

// Create a Welcome function returning the HTML of welcome block

// Add a default export statement for Welcome component to use it in the other files
// Importar o arquivo de estilo
import './Welcome.css';

// Função Welcome que retorna o HTML do bloco de boas-vindas
const Welcome = () => {
  return (
    <section className="welcome">
      <h1>Welcome</h1>
      <p>Bem-vindo ao nosso site!</p>
    </section>
  );
};

// Exportação padrão do componente Welcome
export default Welcome;
