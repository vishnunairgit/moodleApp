import React from 'react'
import companyIMG from  "../Assets/AFP_9DD4KZ_1629870213363_1632742003316.jpg"
import "./employers.css"
import companyLogo from '../Assets/starbsloh.jpg' 
import locationLogo from  '../Assets/icons8-location-24.png'
import { useNavigate } from 'react-router-dom'
import linkedin from '../Assets/icons8-linked-in-35.png'
import website from '../Assets/icons8-website-35.png'



function Employers() {

  const  navigate =useNavigate()

  const companyUrl = 'https://www.attocom.com/'
  const linkedinid = 'https://www.linkedin.com/ '
// --------------------------website--------------------------
  const handlewebsite = ()=>{
    window.open(companyUrl, '_blank');
  }
// --------------------------linkedin--------------------------
const handlelinkedin = ()=>{
  window.open(linkedinid, '_blank')
}


  return (
    <>
    <div className='employersPage '>

      <div className='mainImg'>
        <img src={companyIMG} alt="" />

      </div>
      
      <div>

        fdfsffdsfsffef
      </div>

      <div className='company-Details'>

        <div className='company-Details-LS' >

          <div className='companyLogo'>
            <img src={companyLogo} alt="" />
          </div>

          <div className='companyAdress'>
            <div>ATTO COM pvt Ltd</div> 
            <div><img src={locationLogo} alt="" />: jp nager</div>

            <div className='Social_media'>
              <div><img src={linkedin} alt=""  onClick={handlelinkedin}/> </div>
              <div><img src={website} alt=""  onClick={handlewebsite}/> </div>

            </div>

          </div>
          <div>

       
  
      </div>
      

        </div>

        <div className='company-Details-RS'>
          {/* <div><button className='button_02' type="button">Review</button></div> */}
          {/* <div><button className='button_02' type="button">Message</button></div> */}
        </div>

      </div>


      







    </div>





    </>
  )
}

export default Employers