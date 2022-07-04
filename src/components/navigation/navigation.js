import React from "react";
import "./navigation.scss";
import logo from "../../asset/logo noosh.png"
const Navigation = () => {
  return (
    <>
  <nav class="navbar navbar-light navbar-expand-lg nav-bar-2" >
            <div class="container-fluid">
              <a class="navbar-brand me-2 nav-link-1" href="/">
              <img src={logo} alt="" className="img-fluid-logo"/>
              </a>
              <button
                className="navbar-toggler toggled"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarButtonsExample"
                aria-controls="navbarButtonsExample"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fas fa-bars"></i>
              </button>

              <div class="collapse navbar-collapse nav-option" id="navbarButtonsExample">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

                <div class="d-flex align-items-center">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="me-3 nav-link-2" href="/">
                        HOME
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="me-3 nav-link-2" href="/">
                        ABOUT US
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="me-2 nav-link-2" href="/contactus">
                        CONTACT US
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
 
   </>
  );
};
export default Navigation;
