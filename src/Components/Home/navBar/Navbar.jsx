import React, { useEffect, useState } from 'react'
import './navbar.css';
import logo from '../../Assets/net.america-1.png';
import notification from '../../Assets/icons8-notification-24.png'
import user from '../../Assets/icons8-user-24.png'
// import hamburger from '../../Assets/icons8-hamburger-button-32.png';
import { useNavigate } from 'react-router-dom';


function Navbar() {

  const navigate = useNavigate()

  const handleHome = () => {
    navigate('/home')
  }

  const handleAccount = () => {
    navigate('/companyDetails');
  };
  const handleJob = () => {
    navigate('/addJob')
  }

  const handleAlljob = () =>{
    navigate('/alljob')
  }

  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }




  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand landingLogo" href="#"></a>
          <div className='landingLogo navbar-brand '>
            {/* <div className='company_name' onClick={handleHome} >net.America</div> */}
            <div>
              <img onClick={handleHome} src={logo} alt="" />
            </div>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={handleAccount}>Account</a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleJob}>Post job</a>
              </li> */}

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  JOBS
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#" onClick={handleJob}>POST JOB</a></li>
                  <li><a className="dropdown-item" href="#" onClick={handleAlljob}>LIST JOB</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                </ul>
              </li>


              {/* <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}

            </ul>

            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}


            <div className="btn-group btn-group-alert">
              <button className="btn btn dropdown-toggle" title='Notification' type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={notification} alt="" />
              </button>
              <ul className="dropdown-menu bg-light">
                <li><a className="dropdown-item" href="#">alert _1</a></li>
                <li><a className="dropdown-item" href="#">alert_2: </a></li>
                <li><a className="dropdown-item" href="#">alert_2: </a></li>

              </ul>
            </div>

            <div className='user-dropdown'>

              <div className="btn-group">
                <button className="btn btn dropdown-toggle" type="button" title='User' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={user} alt="" />
                </button>
      
                <ul className="dropdown-menu user-dropdownmenu bg-light">
                  <button className='button_01' type="button" onClick={handleAccount}>USER</button>
                  <button className='button_02' type="button" onClick={handleLogout}>LOG OUT</button>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar