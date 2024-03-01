import React, { useEffect, useState } from 'react'
import './navbar.css';
import logo from '../../Assets/logo.png';
import notification from '../../Assets/icons8-notification-24.png'
import user from '../../Assets/icons8-user-24.png'
import hamburger from '../../Assets/icons8-hamburger-button-32.png';
import { useNavigate } from 'react-router-dom';




function Navbar() {

  const navigate =useNavigate()


// ---------------screen width less than 990 px---------------
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const menuIcon = document.querySelector('.menuIcon');
    menuIcon.addEventListener('click', () => {
      setShowModal(true);
    });

    // Cleanup the event listener on component unmount
    return () => {
      menuIcon.removeEventListener('click', () => {
        setShowModal(true);
      });
    };
     
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 990) {
        setShowModal(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


//---------------handleEmployers---------------


const handleHome = ()=>{
  navigate('/home')
}

const handleAccount = () => {
  // console.log("Clicked on employers link");
  navigate('/account');
};
const handleLogout = () =>{
  localStorage.clear()
  navigate('/')
}


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">

          <div className='landingLogo '>
            <div className='company_name'onClick={handleHome} >CB-Tech</div>
            <div>
              <img src={logo} alt="" />
            </div>
          </div>

          <div className='links'>
            <div onClick={handleAccount} >Account</div> 
          </div>
        
          <div className='links'>
            <div>kkkkkkkk</div> 
          </div>
        
          <div className='links'>
            <div>kkkkkkkk</div> 
          </div>
        
          <div className='links'>
          <button className='button_01' type="button" onClick={handleLogout}>LogOut</button>
          </div>

       

          
          {/* <div className='user-dropdown'> */}
          <div className="btn-group">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={notification} alt="" />

            </button>
            <ul className="dropdown-menu ">
              <li><a className="dropdown-item" href="#">alert _1</a></li>
              <li><a className="dropdown-item" href="#">alert_2: </a></li>
              
            </ul>
          </div>
          
        {/* </div> */}


        <div className='user-dropdown'>
          <div className="btn-group">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={user} alt="" />

            </button>
            <ul className="dropdown-menu ">
              <li><a className="dropdown-item" href="#">User :</a></li>
              
            </ul>
          </div>

        </div>

        <div className='menuIcon'>
            <img src={hamburger} alt="" />
        </div>

        </div>


      </nav>

      <div className='mainModal'>
      {showModal && (
        <div className='Navmodal'>
          {/* Content of the modal */}
          <div className='modalContent'>
            <button className='button_02' type="button">kkkkkkkk</button>
            <button className='button_02' type="button">kkkkkkkk</button>
            <button className='button_02' type="button">kkkkkkkk</button>
            <button className='button_02' type="button">kkkkkkkk</button>
            
            <button className='button_01' onClick={handleCloseModal}>Close</button>

          </div>
          {/* Background overlay */}
          <div className='overlay' onClick={handleCloseModal}></div>
        </div>
      )}

    </div>

    </>
  )
}

export default Navbar