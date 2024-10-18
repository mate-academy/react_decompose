// Importar o arquivo de estilo
import './Header.css';

// Função Header que retorna o HTML do bloco do cabeçalho
const Header = () => {
  return (
    <header className="header">
      <h1>Site Name</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

// Exportação padrão do componente Header
export default Header;
