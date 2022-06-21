import React from "react";
import "./navigation.scss";
const Navigation = () => {
  return (
    <>
  <nav class="navbar navbar-light navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}}>
            <div class="container-fluid">
              <a class="navbar-brand me-2 nav-link-1" href="/">
                NOOSH
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarButtonsExample"
                aria-controls="navbarButtonsExample"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fas fa-bars"></i>
              </button>

              <div class="collapse navbar-collapse" id="navbarButtonsExample">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

                <div class="d-flex align-items-center">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="navbar-brand me-2 nav-link-2" href="/">
                        HOME
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="navbar-brand me-2 nav-link-2" href="/">
                        ABOUT US
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="navbar-brand me-2 nav-link-2" href="/contactus">
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
