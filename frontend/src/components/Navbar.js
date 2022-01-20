import React from "react";
import cx from "classnames";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const menuItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Admin", path: "/admin" },
    { id: 3, name: "Create Post", path: "/admin/post" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
      <div className="container-fluid">

        <a className="navbar-brand" href="/">
          Able test
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            {/* Render menu items here */}
            {menuItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <Link to={item.path} className={cx("nav-link", { active: location.pathname === item.path })}>
                  {item.name}
                </Link>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
}
