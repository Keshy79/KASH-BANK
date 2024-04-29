import React from "react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
// import Desktop from "../assets/Desktop.png";
import Top from "../assets/Top.png";
import woman from "../assets/woman.png";
import yellow from "../assets/yellow.png";
import purple from "../assets/purple.png";
import blue from "../assets/blue.png";
// import Signup from "./Signup";

const Landing = () => {
  const navigate = useNavigate();

  const Signup = () => {
    navigate("/Signup");
  }

  // const Welcome = () => {
  //   navigate("/Welcome");
  // };
  return (
    <div>
      <nav style={{zIndex:'100%'}} class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img src="" alt="" />
          <a class="navbar-brand" href="#">
            KASH
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse navword"
            id="navbarText"
            // style={{ width: "50%", marginLeft: "25%" }}
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Account
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Save Haven
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Help
                </a>
              </li>

              <ul className="list-unstyled " id="navbtn" >
                <li class="nav-item">
                  <a class="nav-link active " href="#" onClick={()=>{navigate('/Login')}}>
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  {/* <a class="nav-link" href="#">Help</a> */}
                  <button
                    className="btn" onClick={Signup}
                    style={{ backgroundColor: "#2bdc2b" }}
                  >
                    Open a Free Bank Account
                  </button>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <div>
          <img className="top" src={Top} alt="" />
        </div>
        <div className="contianer-fluid" id="save">
          <div className="row py-5 mx-4 ">
            <div className="col-lg-6 col-sm-12 col-md-12 mx-0 px-5">
              <h1>
                Make, Save and <br /> Track Payment <br /> with Ease{" "}
              </h1>
              <p>Banking making easy with naira93</p>
              <button className="btn btn-dark " onClick={()=>{navigate('/Signup')}}>
                Open a Free Bank Account
              </button>
              <button
                className="btn mx-3 my-3  text-light"
                style={{ border: "1px solid #2bdc2b" }}
              >
                Download App
              </button>
            </div>

            <div className="col-lg-6 col-sm-12 col-md-12 img-fluid ">
              <img className="img-fluid" id="woman" src={woman} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-bg-secondary">
        <div className="row py-5 mx-3 ">
          <div className="col-lg-6 col-md-6 col-sm-12">
          <h1>Elevate your bill payments with our amazing card options.</h1>
          <p>Discover convenience and empowerment like never before.</p>
          <p>Get yours now!</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img className="yellow img-fluid w " src={yellow} alt="" />
            <img className="purple img-fluid " src={purple} alt="" />
            <img className="blue img-fluid " src={blue} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
