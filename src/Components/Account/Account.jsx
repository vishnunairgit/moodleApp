import React, { useEffect, useState } from 'react'
import './account.css'
import AxiosInstance from '../../config/AxiosInstance'


function Account() {

  const [Singleuser, setSingleuser] = useState([])
  useEffect(() => {
    const userDataString  = localStorage.getItem('user');
    if (userDataString ) {
      const userData = JSON.parse(userDataString);
      const userEmail = userData.email;
      GetUserData(userEmail);
    }
  }, []);

  const GetUserData = async (email) => {
    try {
      const response = await AxiosInstance.get('/users/GetUser', { params: {email : email }})
      debugger
      setSingleuser(response.data);
      console.log(setSingleuser, '------------------setSingleuser--------------');
    } catch (error) {
      console.log(error, '-----------error-----------');
      console.error('Error fetching data:', error)
    }
  };


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
                    value={Singleuser?.CompanyName}
                    // onChange={(e) => {
                    //   setDisplayID(e.target.value);
                    // }}
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
                    value={Singleuser?.registrationNumber}
                    // onChange={(e) => {
                    //   setassetType(e.target.value);
                    // }}
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
                    value={Singleuser?.email}

                  // onChange={(e) => {
                  //   setScientificName(e.target.value);
                  // }}
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
                    placeholder="email.."
                    value={Singleuser?.phonenumber}

                  // onChange={(e) => {
                  //   setScientificName(e.target.value);
                  // }}
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
                  // onChange={(e) => {
                  //   setAccessionNumber(e.target.value);
                  // }}
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
                    // onChange={(e) => {
                    //   setLocation(e.target.value);
                    // }}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-25">
                  <label htmlFor="LinkedIn ">
                    LINKEDLN ID  <span className="mandatory-indicator">*</span>
                  </label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="LinkedIn "
                    name="LinkedIn "
                    placeholder="LinkedIn .."
                    // onChange={(e) => {
                    //   setLocation(e.target.value);
                    // }}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-25">
                  <label htmlFor="Industry">TYPE INDUSTRY</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="Industry"
                    name="Industry"
                    placeholder="Industry.."
                  // onChange={(e) => {
                  //   setunique_importance(e.target.value);
                  // }}
                  />
                </div>
              </div>

              {/* <div className="row">
              <div className="col-25">
                <label htmlFor="Headquarters">HEADQUARTRS</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="Headquarters"
                  name="Headquarters"
                  placeholder="Headquarters.."
                  // onChange={(e) => {
                  //   setPlantationDate(e.target.value);
                  // }}
                />
              </div>
            </div> */}

              <div className="row">
                <div className="col-25">
                  <label htmlFor="Founded">INCORPORATION DATE</label>
                </div>
                <div className="col-75">
                  <input
                    type="date"
                    id="Incorporationdate"
                    name="Incorporationdate"
                    placeholder="ncorporation date.."
                  // onChange={(e) => {
                  //   setHarvestingDate(e.target.value);
                  // }}
                  />
                </div>
              </div>

              {/* <div className="row">
              <div className="col-25">
                <label htmlFor="Company-size">COMPANY SIZE</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="Company-size"
                  name="Company-size"
                  placeholder="Company size.."
                  // onChange={(e) => {
                  //   setHarvestingDate(e.target.value);
                  // }}
                />
              </div>
            </div> */}

              <div className="row">
                <div className="col-25">
                  <label htmlFor="about">ABOUT</label>
                </div>
                <div className="col-75">
                  <textarea
                    type="text"
                    id="about"
                    name="about"
                    placeholder="about the comapny..."
                  // onChange={(e) => {
                  //   setScientificName(e.target.value);
                  // }}
                  />
                </div>
              </div>


            </div>


            <div className="rightSide-container">
              <div className="rightSide-container-2">

                <div className="text">
                  <h5>UPLOAD Logo</h5>
                </div>
                <div className="fileupload">
                  <label htmlFor="imageUpload">SELECT AN IMAGES</label>
                  <input
                    type="file"
                    id="imageUpload"
                    name="imageUpload"
                    accept="image/*"
                  />
                  <br />

                  {/* <label htmlFor="videoUpload">SELECT A VIDEOS</label>
                <input
                  type="file"
                  id="videoUpload"
                  name="videoUpload"
                  accept="video/*"
                /> */}

                  {/* <br />
                <label htmlFor="pdfUpload">SELECT A PDFS</label>
                <input
                  type="file"
                  id="pdfUpload"
                  name="pdfUpload"
                  accept="application/pdf"
                /> */}

                  {/* <br />
                <label htmlFor="audioUpload">SELECT AN AUDIO FILES</label>
                <input
                  type="file"
                  id="audioUpload"
                  name="audioUpload"
                  accept="audio/*"
                />
                <br /> */}


                </div>
                <div className="text">
                  <h5>UPLOAD FILES</h5>
                </div>
                <div className="fileupload">
                  <label htmlFor="imageUpload">SELECT AN IMAGES</label>
                  <input
                    type="file"
                    id="imageUpload"
                    name="imageUpload"
                    accept="image/*"
                  />
                  <br />

                  {/* <label htmlFor="videoUpload">SELECT A VIDEOS</label>
                <input
                  type="file"
                  id="videoUpload"
                  name="videoUpload"
                  accept="video/*"
                /> */}

                  {/* <br />
                <label htmlFor="pdfUpload">SELECT A PDFS</label>
                <input
                  type="file"
                  id="pdfUpload"
                  name="pdfUpload"
                  accept="application/pdf"
                /> */}

                  {/* <br />
                <label htmlFor="audioUpload">SELECT AN AUDIO FILES</label>
                <input
                  type="file"
                  id="audioUpload"
                  name="audioUpload"
                  accept="audio/*"
                />
                <br /> */}


                </div>




              </div>
            </div>

          </div>

          {/* {error && <ErrorMessage message={error} />} */}
          <div className="buttonHolder">
            {/* <span><h3></h3></span> */}
            <button
              className="button-17"
              type="submit"
              style={{ backgroundColor: "rgb(10, 150, 250)", color: "white" }}
            >
              Submit
            </button>
            <button
              className="button-17"
              // onClick={handleReset}
              style={{ backgroundColor: "rgb(0, 150, 0)", color: "white" }}
            >
              Reset
            </button>
            <button
              className="button-17"
              // onClick={handleCancel}
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

export default Account