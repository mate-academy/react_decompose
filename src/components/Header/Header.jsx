import './Header.css';
import { Navigaton } from '../Navigaton/Navigaton';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navigaton />
  </header>
);
