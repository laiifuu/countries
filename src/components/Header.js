import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => (
  <header>
    <Logo />
    <nav>
      <ul className="menu-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
