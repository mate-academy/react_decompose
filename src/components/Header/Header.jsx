import './Header.css';
import { NavigationBlock } from '../Navigation/Navigation';

export function HeaderBlock() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <NavigationBlock />
    </header>
  );
}

export default HeaderBlock;

// import a css file containig article styles

// Create a Header function returning the HTML of header block

// Add a default export statement for Header component to use it in the other files
