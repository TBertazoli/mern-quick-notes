import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="/">
        Quick Notes
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              VIEW NOTES
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/notes/new">
              ADD NOTES
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="" onClick={handleLogOut}>
              LOG OUT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
