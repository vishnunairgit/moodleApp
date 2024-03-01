import React from 'react'
import companyIMG from  "../Assets/AFP_9DD4KZ_1629870213363_1632742003316.jpg"
import "./employers.css"
import companyLogo from '../Assets/starbsloh.jpg' 
import locationLogo from  '../Assets/icons8-location-24.png'



function Employers() {
  return (
    <>
    <div className='employersPage '>

      <div className='mainImg'>
        <img src={companyIMG} alt="" />
      </div>

      <div className='company-Details'>

        <div className='company-Details-LS' >

          <div className='companyLogo'>
            <img src={companyLogo} alt="" />
          </div>

          <div className='companyAdress'>
            <div>ATTO COM pvt Ltd</div> 
            <div><img src={locationLogo} alt="" />: jp nager</div>

            <div className='companyAdress-Button'>
              <button className='btn btn-primary ' type="button">follow</button> 
              <button className='btn btn-primary ' type="button">2 job openings </button>
            </div>

          </div>
        </div>

        <div className='company-Details-RS'>
          <div><button className='btn btn-primary ' type="button">Write a review</button></div>
          <div><button className='btn btn-primary' type="button">message</button></div>
        </div>

      </div>







    </div>





    </>
  )
}

export default Employers