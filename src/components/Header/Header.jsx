import './Header.css';

export const Header = () => {
  const navList = [
    { href: '#about', title: 'About' },
    { href: '#services', title: 'Services' },
    { href: '#contacts', title: 'Contact' },
  ];

  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <nav className="navigation">
        {navList.map(item => (
          <a
            className="navigation__link"
            href={item.href}
            key={item.title}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </header>
  );
};
