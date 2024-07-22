import './Navigation.css';

export default function Navigation({ links }) {
  return (
    <nav className="navigation">
      <a className="navigation__link" href="#about">
        {links[0]}
      </a>
      <a className="navigation__link" href="#services">
        {links[1]}
      </a>
      <a className="navigation__link" href="#contact">
        {links[2]}
      </a>
    </nav>
  );
}
