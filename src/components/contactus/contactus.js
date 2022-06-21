import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import mail from "../../asset/mail.png"
import call from "../../asset/call.png"
import address from "../../asset/location1.png"
import "./contact.css";
import Navigation from "../navigation/navigation";
const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  function validateForm() {
    return (
      mobile.length > 0 &&
      email.length > 0 &&
      firstName.length > 0 &&
      lastName > 0
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
 <Navigation/>
      <div className="co-container-1">
        <div className="box-1-1">
          <center><div className="box-1-h">Contact Us</div></center>

          <div className="box-1-sh">
            Please fill up the following information:-
          </div>
          <Form onSubmit={handleSubmit} className="co-form">
            <Row className="row">
              <Col className="col">
                <Form.Group className="mb-3" id="formGridFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    className="co-text"
                    type="text"
                    value={firstName}
                    placeholder="Enter First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col className="col">
                <Form.Group className="mb-3" id="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    className="co-text"
                    type="text"
                    value={lastName}
                    placeholder="Enter Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" id="formBasicEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                className="co-text"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" id="formBasicNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                className="co-text"
                type="number"
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" id="formBasicMessage">
              <Form.Label className="label-1">Message</Form.Label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                type="text"
                placeholder=""
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <center>
              <button
                className="sends"
                type="submit"
                value={sendMessage}
                onClick={(e) => setSendMessage(e.target.value)}
               
              >
                Send Message
              </button>
            </center>
          </Form>
        </div>
        <div className="box-1-2">
          <center>
            <div className="box-2-h">Get In Touch</div>
            <div className="box-2-sh">
              Please call or email and we will be happy to assist you.
            </div>

            <br />
            <div>
              <img src={call} alt=""></img>
              <br></br>
              +91 9090909090 
              <br></br>
              +91 9090909090
            </div>

            <br />
            <br />
            <div className="co-email">
              <img src={mail} alt=""></img>
              <div>demo@example.com</div>
            </div>

            <br />
            <br />
            <div className="co-location">
              <img src={address} alt=""></img>
              <div className="address">
              51 McCurtain St, Fermoy, Co. Cork, P61 P657, Ireland
              </div>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
