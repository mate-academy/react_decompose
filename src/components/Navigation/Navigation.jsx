import './Navigation.css';
import PropTypes from 'prop-types';

function Navigation({ links }) {
  return (
    <nav className="navigation">
      {links.map(link => (
        <a
          key={link.href} // Usamos o href como chave única
          className="navigation__link"
          href={link.href}
        >
          {link.text}
        </a>
      ))}
    </nav>
  );
}

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Navigation;
