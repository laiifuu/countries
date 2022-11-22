import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/"><i className="fa-solid fa-angle-left fa-2x" /></Link>
    <span>Explore countries</span>
    <div>
      <i className="fa-solid fa-microphone fa-2x" />
      <i className="fa-solid fa-gear fa-2x" />
    </div>
  </header>
);

export default Header;
