export const Header = () => {
  return (
    <header className="header__container">
      <div className="header__logo">
        <h1>App Exemplo</h1>
      </div>
      <nav className="header__navigation">
        <ul className="header__navlinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="">Produtos</a>
          </li>
          <li>
            <a href="#">Perfil</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
