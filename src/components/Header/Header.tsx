export default function Header() {
  return (
    <header>
      <nav>
        <ul className="navList">
          <li className="listItem">
            <a href="#">Home</a>
          </li>
          <li className="listItem">
            <a href="#">Menu</a>
          </li>
          <div className="logo">
            <p className="logoText">Selve Restourant</p>
          </div>
          <li className="listItem">
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>
      <div className="burger"></div>
    </header>
  );
}
