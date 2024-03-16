import React from 'react'
import companyIMG from "../Assets/AFP_9DD4KZ_1629870213363_1632742003316.jpg"
import "./employers.css"
import companyLogo from '../Assets/logo (1).png'
import locationLogo from '../Assets/icons8-location-24.png'
import { useNavigate } from 'react-router-dom'
import linkedin from '../Assets/icons8-linked-in-35.png'
import website from '../Assets/icons8-website-35.png'
import appdevimg from '../Assets/App-Development-1.png'
import iotImg from '../Assets/What-is-an-IoT-Gateway-1.jpg'
import networkingimg from '../Assets/images.jpg'
import facebook from '../Assets/icons8-facebook-35.png'



function Employers() {

  const navigate = useNavigate()

  const companyUrl = 'https://www.attocom.com/'
  const linkedinid = 'https://www.linkedin.com/ '
  const facebookURl = 'https://www.facebook.com/login'

  // --------------------------website--------------------------
  const handlewebsite = () => {
    window.open(companyUrl, '_blank');
  }
  // --------------------------linkedin--------------------------
  const handlelinkedin = () => {
    window.open(linkedinid, '_blank')
  }

  const handlelfacebook = ()=>{
    window.open(facebookURl, '_blank')
  }

  return (
    <>
      <div className='employersPage '>

        <div className='mainImg'>
          <img src={companyIMG} alt="" />
        </div>

        <div className='aboutus'>

          <h3>ABOUT US</h3>
          <div>
            <p>Attocom is a professionally managed software solutions and services company.
              Headquartered in Bangalore, India and founded by team of seasoned experts who
              have seen the Telecom industry evolve from the first to the
              fourth generation systems.</p>
          </div>

          <div>
            <p>Attocom is a consulting and technology services company serving global clients.
              By combining unparalleled experience, comprehensive capabilities across all industries & business functions,
              Attocom collaborates with clients to help them transform into high-performance businesses.</p>
          </div>

          <div>
            <p>Attocom Management team consists of highly qualified and motivated professionals with
              significant experience in systems development in India as well as abroad. We work with
              leading Networking and Telecom product, services, and service provider companies.
              We have sound expertise in a broad spectrum of domains such as Telecom,
              Datacom, Wireless, Embedded Systems and Next Generation Management Systems.</p>
          </div>


        </div>

        {/* <div className='Activities'>
          <h3>Activities</h3>
          <div className='Activities-main'>

            <div className='first_Activities'>
              <div>
                <img src={appdevimg} alt="" />
              </div>
              <h5><strong>App development</strong></h5>
              <p>Our Software Development Services cover the entire software
                life-cycle from conceptualization to architecture,
                development, testing and ongoing support.
                we design, develop and transform a marketable
                idea of our customers into a saleable product.
                Our Embedded Product Development services range from idea generation,
                product conceptualization, design, development, testing,
                certification, manufacturing and subsequent product support.
              </p>
            </div>

            <div className='first_Activities'>
              <div>
                <img src={iotImg} alt="" />
              </div>
              <h5><strong>IoT (Internet of Things) </strong> </h5>
              <p>The Internet of things describes devices with sensors,
                processing ability, software and other technologies that
                connect and exchange data with other devices and systems
                over the Internet or other communications networks.
                The Internet of things encompasses electronics,
                communication, and computer science engineering.</p>
            </div>

            <div className='first_Activities'>
              <div>
                <img src={networkingimg} alt="" />
              </div>
              <h5><strong>networking</strong> </h5>
              <p>Networking is the process of making connections and building relationships.
                These connections can provide you with advice and contacts,
                which can help you make informed career decisions. Networking
                can even help you ﬁnd unadvertised jobs/internships.
                Networking can take place in a group or one-on-one setting.</p>

            </div>

          </div>
        </div> */}



        <div className='bottomNav'>

       
        
          <div className='bottomNav-2'>

            <div className='first'>

              <div className='companydetails'>
                 <img src={companyLogo} alt="" />
                 <h5><strong>Atto Communication Pvt.Ltd </strong></h5>
              </div>
              
              <p>Atto Communication is striving for a safer and connected world with its 
                leading-edge solutions. Committed to innovation for more 
                than 20 years, the independent technology group acts long-term 
                and sustainably, making it a reliable partner to its industry and
                 government customers worldwide...</p>

            </div>

            <div className='Second'>

              <h5><strong>Address</strong> </h5>
                <div>Atto Communication Pvt.Ltd</div>
                47/10, 4th Floor,Krishna Mansion, 
                9th Cross, JP Nagar 1st Phase, 
                Bengaluru, Karnataka 560078
            </div>

            <div className='Third'>
              <h5><strong>Contact</strong></h5> 
              <div>
                <div>9867896754</div>
                <div>attocom@gmail.com</div>

              </div>
            </div>

          </div>

          <div className='bottomNav-1'>
              <img src={linkedin} alt="" title='linkedin' onClick={handlelinkedin} />
              <img src={website} alt="" title='website' onClick={handlewebsite} />
              <img src={facebook}  title='facebook' onClick={handlelfacebook} alt="" />

          </div>

        

        </div>


        <div>
        </div>
      </div>

    </>
  )
}

export default Employers