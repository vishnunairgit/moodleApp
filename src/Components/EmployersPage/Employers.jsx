import React, { useState, useEffect } from 'react'
import companyIMG from "../Assets/AFP_9DD4KZ_1629870213363_1632742003316.jpg"
import "./employers.css"
import companyLogo from '../Assets/logo (1).png'
import locationLogo from '../Assets/icons8-location-24.png'
import { useNavigate, useParams } from 'react-router-dom'
import linkedin from '../Assets/icons8-linked-in-35.png'
import website from '../Assets/icons8-website-35.png'
import appdevimg from '../Assets/App-Development-1.png'
import iotImg from '../Assets/What-is-an-IoT-Gateway-1.jpg'
import networkingimg from '../Assets/images.jpg'
import facebook from '../Assets/icons8-facebook-35.png'
import AxiosInstance from '../../config/AxiosInstance'
import { BASE_URL } from '../../constants/BaseUrl'



function Employers() {


  const userId = JSON.parse(localStorage.getItem("user")).userId


  const navigate = useNavigate()

  const [userdetails, setuserdetails] = useState({})

  // const companyUrl = 'https://www.attocom.com/'
  // const linkedinid = 'https://www.linkedin.com/ '
  // const facebookURl = 'https://www.facebook.com/login'

  // --------------------------website--------------------------
  // const handlewebsite = () => {
  //   window.open(companyUrl, '_blank');
  // }

  const handlewebsite = () => {
    window.open(userdetails?.website, '_blank');
  }
  // --------------------------linkedin--------------------------
  const handlelinkedin = () => {
    window.open(userdetails?.LinkedIn, '_blank')
  }

  // const handlelfacebook = ()=>{
  //   window.open(facebookURl, '_blank')
  // }

  useEffect(() => {
    GetUserData()
  }, [])


  const GetUserData = async () => {
    try {
      const response = await AxiosInstance.get('/admin/GetUser', { params: { userId } })
      debugger
      setuserdetails(response.data)
    } catch (error) {
      console.log(error, '-----------error-----------');
      console.error('Error fetching data:', error)

    }
  }




  return (
    <>
      <div className='employersPage '>

        <div className='mainImg'>
          <img src={`${BASE_URL}/userFiles/${userdetails.imageUpload} `} alt="" />
        </div>

        <div className='aboutus'>

          <h3>ABOUT US</h3>
          <div>
            <p>
              {userdetails?.about}</p>
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
                <img src={`${BASE_URL}/userFiles/${userdetails.logoUpload} `} alt="" />
                <h5><strong>{userdetails?.CompanyName} </strong></h5>
              </div>

              <p> {userdetails && userdetails.about
                ? userdetails.about.length > 300
                  ? `${userdetails.about.slice(0, 300)}...`
                  : userdetails.about
                : "Loading or no about text available"}
              </p>

            </div>

            <div className='Second'>

              <h5><strong>Address</strong> </h5>
              <div>{userdetails?.CompanyName}</div>
              <p>{userdetails.Address}</p>

            </div>

            <div className='Third'>
              <h5><strong>Contact</strong></h5>
              <div>
                <div>{userdetails?.phonenumber}</div>
                <div>{userdetails?.email}</div>

              </div>
            </div>

          </div>

          <div className='bottomNav-1'>
            <img src={linkedin} alt="" title='linkedin' onClick={handlelinkedin} />
            <img src={website} alt="" title='website' onClick={handlewebsite} />
            {/* <img src={facebook}  title='facebook' onClick={handlelfacebook} alt="" /> */}

          </div>



        </div>


        <div>
        </div>
      </div>

    </>
  )
}

export default Employers