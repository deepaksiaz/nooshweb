import React from "react";
import "./home.css";
import{ FcNext,FcPrevious }from "react-icons/fc"
import "./style.scss";
import us from "../../asset/US.mp4";
import page from "../../asset/page.png";
import page1 from "../../asset/page-1.png";
import page2 from "../../asset/page3.png";
import TypeIt from "typeit-react";
const Home = () => {
  
  return (
    <div className="home">
      <div className="home-container-1">
        <video src={us} autoPlay loop muted />
        <div className="home-navbar">
      
<nav class="navbar navbar-expand-lg navbar-dark shadow-0 navbar-top">
 
  <div class="container">
    <a class="navbar-brand me-2 logo-1" href="/">
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
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
      </ul>
    

      <div class="d-flex align-items-center">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
      <a class="navbar-brand mt-2 mt-md-0 nav-link" href="/">HOME</a></li>
      <li class="nav-item">
      <a class="navbar-brand mt-2 mt-md-0 nav-link" href="/">ABOUT US</a>
      </li>
      <li class="nav-item">
      <a class="navbar-brand mt-2 mt-md-0 nav-link" href="/">CONTACT US</a>
      </li>
    </ul>
      </div>
    </div>
  
  </div>

</nav>

          {/* <Navbar
            collapseOnSelect
            expand="lg"
            bg="transparent"
            variant="dark"
            className="navbar-top"
          >
            <Container>
              <Navbar.Brand href="#home" className="logo-1">
                NOOSH
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link href="/" className="nav-link">
                    Home
                  </Nav.Link>
                  <Nav.Link href="/" className="nav-link">
                    About Us
                  </Nav.Link>
                  <Nav.Link href="/" className="nav-link">
                    Contact Us
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar> */}
        </div>
        <div className="home-content-1">
          <br></br>
          <br></br>
          <div class="wrapper">
            <h5 className="be">
              {" "}
              Be
              <span className="changingText">
                {" "}
                <TypeIt
                  options={{ loop: true, speed: 400, Cursor: false }}
                  getBeforeInit={(instance) => {
                    instance
                      .type("confident")
                      .pause(750)
                      .delete(10)
                      .pause(500)
                      .type("colorful")
                      .pause(750)
                      .delete(10)
                      .pause(500)
                      .type("free")
                      .pause(750)
                      .delete(10)
                      .pause(500);
                    // Remember to return it!
                    return instance;
                  }}
                ></TypeIt>
              </span>
            </h5>
          </div>
          <div className="home-content-2">
            <p className="mb-3-1">
              Discover and book beauty & wellness professionals near you<br></br>
              Taking care of yourself has been this easy and convenient.
            </p>
            <p className="mb-3-2">
            <button type="button" class="btn btn-outline-primary btn-lg" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
  BOOK YOUR APPOINTMENT
</button></p>
            <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
      <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <a
      class="nav-link active"
      id="tab-login"
      data-mdb-toggle="pill"
      href="#pills-login"
      role="tab"
      aria-controls="pills-login"
      aria-selected="true"
      >Login</a>
    
  </li>
  <li class="nav-item" role="presentation">
    <a
      class="nav-link"
      id="tab-register"
      data-mdb-toggle="pill"
      href="#pills-register"
      role="tab"
      aria-controls="pills-register"
      aria-selected="false"
      >Register</a
    >
  </li>
</ul>
<div class="tab-content">
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>
          <div class="form-outline mb-4">
        <input type="email" id="loginName" class="form-control"  />
        <label class="form-label" for="loginName" >Email or username</label>
      </div>

    
      <div class="form-outline mb-4">
        <input type="password" id="loginPassword" class="form-control" />
        <label class="form-label" for="loginPassword">Password</label>
      </div>
      <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
          <div class="form-check mb-3 mb-md-0">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
            <label class="form-check-label" for="loginCheck"> Remember me </label>
          </div>
        </div>

        <div class="col-md-6 d-flex justify-content-center">
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
    
    </form>
  </div>
  <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form> 
      <div class="form-outline mb-4">
        <input type="text" id="registerName" class="form-control" />
        <label class="form-label" for="registerName">Name</label>
      </div>
      <div class="form-outline mb-4">
        <input type="text" id="registerUsername" class="form-control" />
        <label class="form-label" for="registerUsername">Username</label>
      </div>


      <div class="form-outline mb-4">
        <input type="email" id="registerEmail" class="form-control" />
        <label class="form-label" for="registerEmail">Email</label>
      </div>

     
      <div class="form-outline mb-4">
        <input type="password" id="registerPassword" class="form-control" />
        <label class="form-label" for="registerPassword">Password</label>
      </div>

     
      <div class="form-outline mb-4">
        <input type="password" id="registerRepeatPassword" class="form-control" />
        <label class="form-label" for="registerRepeatPassword">Repeat password</label>
      </div>

     
      <div class="form-check d-flex justify-content-center mb-4">
        <input
          class="form-check-input me-2"
          type="checkbox"
          value=""
          id="registerCheck"
         
          aria-describedby="registerCheckHelpText"
        />
        <label class="form-check-label" for="registerCheck">
          I have read and agree to the terms
        </label>
      </div>

     
      <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
    </form>
  </div>
</div>
      </div>
     
    </div>
  </div>
</div>
           
          </div>
        </div>
      </div>


      <div class="top-content">
    <div class="container-fluid">
        <div id="carousel-example" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner row w-100 mx-auto" role="listbox">
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                 
                <center><div class="card" style={{width:"18rem"}}>
  <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" class="card-img-top" alt="Sunset Over the Sea"/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div></center>

                </div>
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <center><div class="card" style={{width:"18rem"}}>
  <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" class="card-img-top" alt="Sunset Over the Sea"/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div></center>
                </div>
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <center><div class="card" style={{width:"18rem"}}>
  <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" class="card-img-top" alt="Sunset Over the Sea"/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div></center>
                </div>
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <center><div class="card" style={{width:"18rem"}}>
  <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" class="card-img-top" alt="Sunset Over the Sea"/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div></center>
                </div>
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <center><div class="card" style={{width:"18rem"}}>
  <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" class="card-img-top" alt="Sunset Over the Sea"/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div></center>
                </div>
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <center><div class="card" style={{width:"18rem"}}>
  <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" class="card-img-top" alt="Sunset Over the Sea"/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div></center>
                </div>
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <center><div class="card" style={{width:"18rem"}}>
  <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" class="card-img-top" alt="Sunset Over the Sea"/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div></center>
                </div>
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <center><div class="card" style={{width:"18rem"}}>
  <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" class="card-img-top" alt="Sunset Over the Sea"/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div></center>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carousel-example" role="button" data-slide="prev">
               <FcPrevious></FcPrevious>
            </a>
            <a class="carousel-control-next" href="#carousel-example" role="button" data-slide="next">
            <FcNext></FcNext>
            </a>
        </div>
    </div>
</div>

      <div className="color-card-main">
        <div className="card-wrapper">
          <div className="c-c-l">
            <div className="c-c-head">
              <img src="" alt="" />
              <span>Noosh App • iOS, Android</span>
            </div>
            <div className="c-c-head-1">
              Find & book <b>an appointment</b>
            </div>
            <div className="c-c-para">
              Cut the phone tag. Find your next appointment and{" "}
              <b>book instantly</b> anytime, anywhere.
            </div>
            <div className="c-c-input">
              
            </div>
            <div className="l-b-img">
              <img
                className="c-img-1"
                src="	https://dk2h3gy4kn9jw.cloudfront.net/web-2019/41bea40b/img/customer-app-en.d0ba412.webp"
                alt=""
              />
            </div>
          </div>
          <div className="c-c-r">
            <div className="c-c-head">
              <img src="" alt="" />
              <span>Noosh App • iOS, Android</span>
            </div>
            <div className="c-c-head-1">
              Noosh <b>for your business</b>
            </div>
            <div className="c-c-para">
              Get started with Noosh to run your business,
              <b>better</b> . Calendar, Booking, Marketing, and Payments all in
              one.
            </div>

            <button className="r-c-btn">GROW MY BUSSINESS</button>
            <div className="l-b-img">
              <img
                className="c-img-1"
                src="		https://dk2h3gy4kn9jw.cloudfront.net/web-2019/41bea40b/img/biz-app-en.5ad249f.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="slider-main-constiner">
        <div className="block-1">
          <div className="l-b-1">
            <div className="l-b-1-heading">Appointments done better</div>
            <div className="l-b-1-paragraph">
              Looking for your next appointment with a local barber, hair
              stylist, massage therapist or nail artist? Need appointment
              booking for a beard trim, an eyebrow wax, or a deep tissue
              massage?
              <br></br>
              Noosh is a free beauty scheduling app and makes appointments easy
              to find and book within seconds. No more phone tag. Book anytime,
              from anywhere, 24/7.
              <br></br>
              <b>
                Discover top businesses in your area and book instantly with
                Noosh.
              </b>
            </div>
          </div>
          <div className="r-b-1">
            <img className="b-imges" src={page} alt="" />{" "}
          </div>
        </div>
        <div className="block-1">
          <div className="l-b-2">
            <img src={page1} alt="" className="b-imges" />
          </div>
          <div className="r-b-2">
            <div className="l-b-1-heading">
              Something come up? We’ve got you.
            </div>
            <div className="l-b-1-paragraph">
              Download Noosh, a free online appointment booking app, and manage
              your appointments from anywhere. Reschedule or cancel without
              picking up the phone.<br></br>
              And because we know life gets busy, we’ll send you reminders.
              You’ll never forget or miss out on another appointment.
            </div>
          </div>
        </div>
        <div className="block-1">
          <div className="l-b-1">
            <div className="l-b-1-heading">Book with the best, near you</div>
            <div className="l-b-1-paragraph">
              Take a scroll around the block to see top health and beauty
              businesses on Noosh’s marketplace.
              <br></br>
              Check out their vibe from their business profile and hear what
              other people are saying with verified reviews. You can even look
              through their portfolio of work.
              <br></br>
              Save time and leave the stress to someone else. With Noosh,
              setting up your next beauty appointment is free and easy.
            </div>
          </div>
          <div className="r-b-1">
            <img className="b-imges" src={page2} alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
