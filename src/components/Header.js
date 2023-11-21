import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Logo from './Logo';
import { setMapAction } from '../redux/countries/countries';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const home = (event) => {
    event.preventDefault();
    dispatch(setMapAction('Select a continent'));
    navigate('/');
  };

  return (
    <header>
      <Link to="/" onClick={home}><Logo /></Link>
      <nav>
        <ul className="menu-nav">
          <li>
            <Link to="/" onClick={home}>HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
