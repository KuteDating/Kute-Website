import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/final-logo-kute.png';
import '../components/Nabar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  const handleNavClick = (target: string) => {
    setMenuOpen(false);
    if (isHome) {
      // Navigate within the same page using hash
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage with hash
      navigate(`/${target}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <img src={logo} alt="Logo" className="nav-logo" />

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><button onClick={() => handleNavClick('#about')}>About</button></li>
          <li><button onClick={() => handleNavClick('#features')}>Features</button></li>
          <li><button onClick={() => handleNavClick('#download')}>Download</button></li>
          <li><button onClick={() => handleNavClick('#footer')}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
