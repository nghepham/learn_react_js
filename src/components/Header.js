import { Link } from "react-router-dom";
import '../App.css'

function Header() {
  return (
    <header>
      <nav id='navbar'>
        <Link to="/">Home</Link> |{" "}
        <Link to="contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
