import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Header;
