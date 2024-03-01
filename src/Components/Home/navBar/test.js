



// import React, { useState, useEffect } from 'react';
// import logo from '../../Assets/logo.png';
// import './navbar.css';
// import hamburger from '../../Assets/icons8-hamburger-button-32.png';
// import { useNavigate } from 'react-router-dom';
// import user from '../../Assets/icons8-user-24.png'
// import notification from '../../Assets/icons8-notification-24.png'

// function Navbar() {
//   const navigate = useNavigate();

//   const [showModalNotification, setshowModalNotification] = useState(false);



// //   ----------------------screen size is less than 990px----------------------------------
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const menuIcon = document.querySelector('.menuIcon');
//     menuIcon.addEventListener('click', () => {
//       setShowModal(true);
//     });

//     // Cleanup the event listener on component unmount
//     return () => {
//       menuIcon.removeEventListener('click', () => {
//         setShowModal(true);
//       });
//     };
     
//   }, []);

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 990) {
//         setShowModal(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

// //   ----------------------handleNotificationClick-----------------------

// const handleCloseModalNotification = () => {
//     setshowModalNotification(false);
//   };

//   const handleNotificationClick = () => {
//     setshowModalNotification(true);
//   };

//   return (
//     <>
//     <div>
//     <div className='mainNav'>
//         <div className='landingLogo '>
//           <div className='company_name'>CB-Tech</div>
//           <div>
//             <img src={logo} alt="" />
//           </div>
//         </div>

//         <div className='links'>
//           <div>kkkkkkkk</div> 
//         </div>
        
//         <div className='links'>
//           <div>kkkkkkkk</div> 
//         </div>
        
//         <div className='links'>
//           <div>kkkkkkkk</div> 
//         </div>
        
//         <div className='links'>
//           <div>kkkkkkkk</div> 
//         </div>
        
       

//         <div className='' >
//             <img onClick={handleNotificationClick}  src={notification} alt="" />
//         <div className=''>
         
          
//         </div>
   

//         </div>

//         {/* <div> */}

//         <div> 
//             <img src={user} alt="" />
//         </div>

//         <div className='menuIcon'>
//             <img src={hamburger} alt="" />
//         </div>

//         {/* </div> */}

//       </div>

//       <div className='mainModal'>
//       {showModal && (
//         <div className='Navmodal'>
//           {/* Content of the modal */}
//           <div className='modalContent'>
//             <button className='button_02' type="button">kkkkkkkk</button>
//             <button className='button_02' type="button">kkkkkkkk</button>
//             <button className='button_02' type="button">kkkkkkkk</button>
//             <button className='button_02' type="button">kkkkkkkk</button>
            
//             <button className='button_01' onClick={handleCloseModal}>Close</button>

//           </div>
//           {/* Background overlay */}
//           <div className='overlay' onClick={handleCloseModal}></div>
//         </div>
//       )}

//       </div>

//       <div className='notificationModal'>
//       {showModalNotification  && (
//         <div className='notimodal'>
//           {/* Content of the modal */}
//           <div className='modalContent'>
//             <li>,,,,,,,,,,</li>
//             <li>,,,,,,,,,,</li>
//             <li>,,,,,,,,,,</li>
//             <li>,,,,,,,,,,</li>
//             <button className='button_01' onClick={handleCloseModalNotification}>Close</button>

//           </div>
//           {/* Background overlay */}
//           <div className='overlay' onClick={handleCloseModalNotification}></div>
//         </div>
//       )}

//       </div>



//     </div>
      

      
//     </>
//   );
// }

// export default Navbar;



