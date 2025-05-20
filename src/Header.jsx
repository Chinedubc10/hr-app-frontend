import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-sec">
        <h1 className="logo">HR App</h1>
      </div>

      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">Add Employee</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
