import { Link } from "react-router-dom";

function AdminNavbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link className="navbar-brand" to="/admin">
          Admin Panel
        </Link>

        <div className="navbar-nav">

          <Link className="nav-link" to="/admin">
            Dashboard
          </Link>

          <Link className="nav-link" to="/admin/users">
            Users
          </Link>

          <Link className="nav-link" to="/admin/jobs">
            Jobs
          </Link>

          <Link className="nav-link" to="/admin/applications">
            Applications
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default AdminNavbar;