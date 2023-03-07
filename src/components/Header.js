import { Link } from "react-router-dom";
import '../App.css'

function Header() {
  return (
    <header>
      <nav id='navbar'>
        <Link to="/">Home</Link> |{" "}
        <Link to="contact">Contact</Link> |{" "}
        <Link to="signup">Sign up</Link> |{" "}
        <Link to="google">Google</Link> |{" "}
        <Link to="sign-in">Sign in</Link> |{" "}
        <Link to="service">Service</Link> |{" "}
        <Link to="split">Split Nav</Link> |{" "}
        <Link to="todo">Todo list</Link>
      </nav>
    </header>
  );
}

export default Header;
