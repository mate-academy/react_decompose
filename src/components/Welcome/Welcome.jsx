// import a css file containig welcome styles

import './Welcome.css';

// Create a Welcome function returning the HTML of welcome block

const Welcome = () => (
  <div className="welcome">
    <span className="welcome__text">Sticky Header!</span>
  </div>
);

// Simples HTML. Não tem um uso direto aqui dentro do JSX, mas vai ser exportado para um arquivo que vai juntar diversos outros códigos

// Add a default export statement for Welcome component to use it in the other files

export default Welcome;
