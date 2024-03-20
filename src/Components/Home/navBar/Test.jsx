import React, { useState } from 'react';
// import { FaBell, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import './navbar.css'; 
import logo from '../../Assets/net.america-1.png';
import notification from '../../Assets/icons8-notification-24.png'
import user from '../../Assets/icons8-user-24.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate()

  const [isOptionsDropdownOpen, setIsOptionsDropdownOpen] = useState(false);
  const [isNotificationsDropdownOpen, setIsNotificationsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const toggleOptionsDropdown = () => setIsOptionsDropdownOpen(!isOptionsDropdownOpen);
  const toggleNotificationsDropdown = () => setIsNotificationsDropdownOpen(!isNotificationsDropdownOpen);
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen);

  const handleHome =()=>{
    navigate('/home')
  }
  const handleJob = () => {
    navigate('/addJob')
  }

  const handleAlljob = () =>{
    navigate('/alljob')
  }

  const handleAccount = () => {
    navigate('/companyDetails');
  };

  
  const handleLogout = () => {
    localStorage.clear()
    navigate('/loginPage')
  }




  return (
    <nav className="navbarHome">
      <div className="navbar-brand"><img onClick={handleHome}  src={logo} alt="" /></div>
     
     <div>
        <ul className="nav-links">
          <li className="dropdown">
            <button className="dropbtn" onClick={toggleOptionsDropdown}>
              JOBS
            </button>
            {isOptionsDropdownOpen && (
              <div className="dropdown-content">
                <div href="#action1" onClick={handleJob} >POST A JOB</div>
                <div href="#action2" onClick={handleAlljob}>LIST ALL JOB</div>
              </div>
            )}
          </li>
        </ul>
     </div>
      

      <div className="nav-icons">
        <div className="dropdown">
          <div href="#notifications" onClick={toggleNotificationsDropdown}><img src={notification} alt="" /></div>
          {isNotificationsDropdownOpen && (
            <div className="dropdown-content">
              <div href="#notif1">Notification 1</div>
              <div href="#notif2">Notification 2</div>
              <div href="#notif3">More...</div>
            </div>
          )}
        </div>
        <div className="dropdown">
          <div href="#user" onClick={toggleUserDropdown}><img src={user} alt="" /></div>
          {isUserDropdownOpen && (
            <div className="dropdown-content">
              <div href="#profile" onClick={handleAccount}>Profile</div>
              {/* <div href="#settings">Settings</div> */}
              <div href="#logout" onClick={handleLogout}>Logout</div>
            </div>
          )}
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
