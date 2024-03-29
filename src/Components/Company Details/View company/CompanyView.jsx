import React, { useEffect, useState } from 'react'
import './companydetails.css'
import AxiosInstance from '../../../config/AxiosInstance'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { formatDate, formatDateForInput } from '../../../helpers/helpers';
import { BASE_URL } from '../../../constants/BaseUrl';



function CompanyView() {
  const { id } = useParams();

  const  navigate =useNavigate()



    const [companyDetails, setcompanyDetails] = useState({ })
  
    useEffect(()=>{
  
      GetUserData()
  
    },[])
  
     const GetUserData = async () => {
      
      const userId=JSON.parse(localStorage.getItem("user")).userId
  
      debugger
      try {
        const response = await AxiosInstance.get('/admin/GetUser' , {params:{userId}})
        debugger
        setcompanyDetails(response.data);
        console.log(setcompanyDetails, '------------------setSingleuser--------------');
      } catch (error) {
        console.log(error, '-----------error-----------');
        console.error('Error fetching data:', error)
      }
    };
  
    // ------------edit company----------------------
  


    
    const handleedit = () => {
      if (companyDetails._id) {
        navigate(`/editCompany/${companyDetails._id}`)
      } else {
        // console.error("No company ID available for editing");
      }
    }
    console.log(handleedit,'---------------handleedit-----------');

    const handleCancel = () =>{
      navigate(-1);

    }
  
  
    return (
      <div>
        <div className="Account">
          <h2> COMPANY DETAILS </h2>
          <form
          //  onSubmit={handleSubmit}
          >
            <div className="container">
              <div className="leftSide-container">
  
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="CompanyName">
                      COMPANY NAME <span className="mandatory-indicator">*</span>
                    </label>
                  </div>
  
                  <div className="col-75">
                    <input
                      type="text"
                      id="CompanyName"
                      name="CompanyName"
                      placeholder="Company Name.."
                      value={companyDetails?.CompanyName}
                      required
                    />
                    <span> </span>
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="registration-Number">
                      REGISTRATION NO <span className="mandatory-indicator">*</span>
                    </label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="registration-Number"
                      name="registrationNumber"
                      placeholder="RegistrationNumber.."
                      value={companyDetails?.registrationNumber}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="email">EMAIL</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="email.."
                      value={companyDetails?.email}
                    />
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="email">PHONE NUMBER</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="number"
                      id="phonenumber"
                      name="phonenumber"
                      placeholder="number.."
                      value={companyDetails?.phonenumber}
  
                    />
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="Address">
                      ADDRESS <span className="mandatory-indicator">*</span>
                    </label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="Address"
                      name="Address"
                      placeholder="Address.."
                      value={companyDetails?.Address}
                    />
                  </div>
                </div>
  
              
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="website">
                      WEBSITE <span className="mandatory-indicator">*</span>
                    </label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="website"
                      name="website"
                      placeholder="website.."
                      value={companyDetails?.website}

                      required
                    />
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="LinkedIn ">
                      LINKEDLN ID
                    </label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="LinkedIn "
                      name="LinkedIn "
                      placeholder="LinkedIn .."
                      value={companyDetails?.LinkedIn}

                      required
                    />
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="Industry">TYPE OF INDUSTRY</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="Industry"
                      name="Industry"
                      placeholder="Industry.."
                      value={companyDetails?.Industry}

                    
                    />
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="Incorporationdate">INCORPORATION DATE</label>
                  </div>
                  <div className="col-75">
                    <input
                      value={formatDateForInput(companyDetails?.Incorporationdate)}
                      type="date"
                      id="Incorporationdate"
                      name="Incorporationdate"
                      placeholder="DD MMM YYYY"   

                    />
                  </div>
                </div>
  
  
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="about">ABOUT US</label>
                  </div>
                  <div className="col-75">
                    <textarea
                      type="text"
                      id="about"
                      name="about"
                      placeholder="about the comapny..."
                      value={companyDetails?.about}
                   
                    />
                  </div>
                </div>
  
  
              </div>
  
  
              <div className="rightSide-container">
                <div className="rightSide-container-2">
  
                 
  
  
                </div>
              </div>
  
            </div>


            <div className='files'>
              <div>
                <h3>logo</h3>
                <img  className='logo' src={`${BASE_URL}/UserFiles/${companyDetails?.logoUpload}`} alt="" />
              </div>
              

              <div>
                <h3>image</h3>
                <img  className='image' src={`${BASE_URL}/UserFiles/${companyDetails?.imageUpload}`} alt="" />
              </div>


            </div>
  
            {/* {error && <ErrorMessage message={error} />} */}
            <div className="buttonHolder">
              <button
                className="button_02"
                type="submit"
                style={{ backgroundColor: "rgb(10, 150, 250)", color: "white" }}
                onClick={handleedit}
              >
                Edit
              </button>
              
              <button
                className="button_03"
                onClick={handleCancel}
                style={{ backgroundColor: "rgb(200, 0, 0)", color: "white" }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
  
  
  
  
  
  
      </div>
    )
  }
export default CompanyView