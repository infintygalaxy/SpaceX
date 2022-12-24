import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light" style={{margin: "20px"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
        <b> SPACE-X NEWS</b> 
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                History
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/payload">
                Payload
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/documentation">
                Documentation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
