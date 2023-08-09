import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/esm/Nav';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-brand">Concert Ticket Dashboard</div>
        <ul className="navbar-nav">
          <li className="nav-item">Home</li>
          <li className="nav-item">Tickets</li>
          <li className="nav-item">About</li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;