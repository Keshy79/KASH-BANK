import React from 'react'
import { NavLink } from 'react-router-dom';
// import Desktop from "../assets/Desktop.png";
import Top from "../assets/Top .png";
import woman from "../assets/woman.png";


const Landing = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src="" alt="" />
    <a class="navbar-brand" href="#">Navbar w/ text</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navword" id="navbarText" style={{width: "50%", marginLeft: "25%"}}> 
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Save  Haven</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Help</a>
        </li>

       <ul className='list-unstyled d-flex mx-5 navbtn '>
       <li class="nav-item">
          <a class="nav-link active " href="#">Login</a>
        </li>
        <li class="nav-item mx-">
          {/* <a class="nav-link" href="#">Help</a> */}
          <button className='btn mx-4' style={{backgroundColor: "#2bdc2b"}}>Open a Free Bank Account</button>
        </li>
       </ul>
      </ul>
    </div>
  </div>
</nav>
<div>
  <div className="contianer-fluid">
    <div className="row">
  <img className='top' src={Top} alt="" />
  <div className='savepay text-light col-lg-6 col-sm-12 col-md-6 mx-5 '>
  <h2>Make, Save and <br /> Track Payment <br /> with Ease </h2>
  <p>Banking making easy with naira93</p>
  <div>
    <button className='btn btn-dark '>Open a Free Bank Account</button>
    <button className='btn mx-3' style={{border: "1px solid #2bdc2b"}}>Download App</button>
  </div>
  </div>

  <div className='savewon col-lg-6 col-sm-12 col-md-6 position-absolute'>
    <img style={{right: "50%"}} src={woman} alt="" />
  </div>
    </div>
  </div>
</div>




{/* <div class="container ">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" class="nav-link px-2">Features</a></li>
        <li><a href="#" class="nav-link px-2">Pricing</a></li>
        <li><a href="#" class="nav-link px-2">FAQs</a></li>
        <li><a href="#" class="nav-link px-2">About</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div> */}

    </div>
  )
}

export default Landing