// import a css file containig welcome styles
import './Welcome.css';

// Create a Welcome function returning the HTML of welcome block
export const Welcome = () => (
  <section className="welcome">
    <span className="welcome__text">Sticky Header!</span>
  </section>
);

// Add a default export statement for Welcome component to use it in the other files
export default Welcome;

// obs.: usando esta forma de exportar, acima, no arquivo App.jsx pode
// escolher qualquer nome, nao somente Welcome. Precisa ser sem as chaves.
// por exemplo, WelcomeXYZ vai funcionar para importar este componente assim.
// import WelcomeXYZ from './components/Welcome/Welcome';
