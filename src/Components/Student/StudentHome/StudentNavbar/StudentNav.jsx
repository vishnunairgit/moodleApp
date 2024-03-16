import React from 'react'
import logo from '../../../Assets/net.america-1.png';
import notification from '../../../Assets/icons8-notification-24.png'
import user from '../../../Assets/icons8-user-24.png'
import { useNavigate } from 'react-router-dom';

function StudentNav() {
    const navigate = useNavigate()


const handleLogout = ()=>{
    localStorage.clear()
    navigate('/LoginPage')
}

  return (
    <div>

<div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand landingLogo" href="#"></div>
          <div className='landingLogo navbar-brand '>
            {/* <div className='company_name' onClick={handleHome} >net.America</div> */}
            <div>
              <img src={logo} alt="" />
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

              {/* <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  JOBS
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><div className="dropdown-item" href="#">POST JOB</div></li>
                  <li><div className="dropdown-item" href="#" >LIST JOB</div></li>
                </ul>
              </li> */}


              

            </ul>

          


            <div className="btn-group btn-group-alert">
              <button className="btn btn dropdown-toggle" title='Notification' type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={notification} alt="" />
              </button>
              <ul className="dropdown-menu bg-light">
                <li><div className="dropdown-item" href="#">alert _1</div></li>
                <li><div className="dropdown-item" href="#">alert_2: </div></li>
                <li><div className="dropdown-item" href="#">alert_2: </div></li>

              </ul>
            </div>

            <div className='user-dropdown'>

              <div className="btn-group">
                <button className="btn btn dropdown-toggle" type="button" title='User' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={user} alt="" />
                </button>
      
                <ul className="dropdown-menu user-dropdownmenu bg-light">
                  {/* <button className='button_01' type="button" onClick={handleAccount}>USER</button> */}
                  <button className='button_02' type="button" onClick={handleLogout}>LOG OUT</button>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>



    </div>
  )
}

export default StudentNav