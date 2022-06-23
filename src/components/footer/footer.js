import React from "react";
import { Button, Nav } from "react-bootstrap";
import "./footer.scss";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import {  FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <div className="Noosh-footer">
      <div className="footer-header">
        <div className="left-side-footer">
          <Nav as="ul">
            <Nav.Item as="li">
              <Nav.Link href="" className="nav-li">
                Blog
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="" className="nav-li">
                About Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="" className="nav-li">
                FAQ
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="" className="nav-li">
                Privacy Policy
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="" className="nav-li">
                Terms of Service
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="" className="nav-li">
                Careers
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="" className="nav-li">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="footer-middel">
        <div className="footer-middel-main">
          <div>
            <p className="logo-1">NOOSH</p>
          </div>
          <div className="middele-content">
            © 2022 Noosh Inc. All rights reserved
          </div>
        </div>
        <div className="social-media-link">
          <div className="s-m-l">
            <a href="">
              <BsInstagram className="s-m-l-logo" />
            </a>
          </div>
          <div className="s-m-l">
            <a href="">
              <FaFacebookF className="s-m-l-logo" />
            </a>
          </div>
          <div className="s-m-l">
            <a href="">
              <BsTwitter className="s-m-l-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
