import React from 'react'
import './addjob.css'

function AddJob() {
    return (
        <div>
            <div className="addjob">
                <h2> POST JOB </h2>
                <form
                //  onSubmit={handleSubmit}
                >
                    <div className="container">
                        <div className="leftSide-container">

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="JobTitle">
                                        JOB TITLE <span className="mandatory-indicator">*</span>
                                    </label>
                                </div>

                                <div className="col-75">
                                    <input
                                        type="text"
                                        id="JobTitle"
                                        name="JobTitle"
                                        placeholder="JobTitle.."
                                        // value={Singleuser?.CompanyName}
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
                                    <label htmlFor="Experience ">
                                        EXPERIENCE <span className="mandatory-indicator">*</span>
                                    </label>
                                </div>
                                <div className="col-75">
                                    <input
                                        type="text"
                                        id="Experience "
                                        name="Experience "
                                        placeholder="3-4..."
                                        // value={Singleuser?.registrationNumber}
                                        // onChange={(e) => {
                                        //   setassetType(e.target.value);
                                        // }}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="location ">
                                      JOB LOCATION <span className="mandatory-indicator">*</span>
                                    </label>
                                </div>
                                <div className="col-75">
                                    <input
                                        type="text"
                                        id="location "
                                        name="location "
                                        placeholder="location..."
                                        // value={Singleuser?.registrationNumber}
                                        // onChange={(e) => {
                                        //   setassetType(e.target.value);
                                        // }}
                                        required
                                    />
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="qualifications">EDUCATIONAL QUALIFICATION</label>
                                </div>
                                <div className="col-75">
                                    <select name="" id=""
                                        placeholder="location..."
                                
                                    >
                                        <option value="">Select qualifications</option>
                                        <option value="">B-Tech</option>
                                        <option value="">M-Tech</option>
                                        <option value="">MBA</option>

                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="Employment Type">EMPLOYMENT TYPE</label>
                                </div>
                                <div className="col-75">
                                    <select name="" id="">
                                        <option value="">Select Employment Type</option>
                                        <option value="">Full Time</option>
                                        <option value="">Part Time</option>
                                        <option value="">Permanent</option>
                                        <option value="">Work From Home</option>


                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="openings">OPENINGS</label>
                                </div>
                                <div className="col-75">
                                    <input
                                        type="number"
                                        id="openings"
                                        name="openings"
                                        placeholder="3.."
                                    // value={Singleuser?.phonenumber}

                                    // onChange={(e) => {
                                    //   setScientificName(e.target.value);
                                    // }}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="date">
                                     JOB POST DATE <span className="mandatory-indicator"></span>
                                    </label>
                                </div>
                                <div className="col-75">
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        placeholder="date.."
                                    // onChange={(e) => {
                                    //   setAccessionNumber(e.target.value);
                                    // }}
                                    />
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="Requirements">REQUIREMENTS</label>
                                </div>
                                <div className="col-75">
                                    <textarea
                                        id="Requirements"
                                        name="Requirements"
                                        placeholder="Enter Requirements, each point on a new line..."
                                    // onChange={(e) => {
                                    //   setScientificName(e.target.value);
                                    // }}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="Jobdescription">JOB DESCRIOTION</label>
                                </div>
                                <div className="col-75">
                                    <textarea
                                        id="Jobdescription"
                                        name="Jobdescription"
                                        placeholder="Enter Jobdescription, each point on a new line..."
                                    // onChange={(e) => {
                                    //   setScientificName(e.target.value);
                                    // }}
                                    />
                                </div>
                            </div>



                        </div>


                        {/* <div className="rightSide-container">
          <div className="rightSide-container-2">
        
          </div>
        </div> */}

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

export default AddJob