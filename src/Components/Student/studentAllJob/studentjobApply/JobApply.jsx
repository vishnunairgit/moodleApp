import React from 'react'
import { useNavigate } from 'react-router-dom'

function JobApply() {


  const navigate = useNavigate()


  const handleCancel = () => {
    navigate(-1)
  }
  return (

    <>

<div className="addjob">
                <h2> APPLY JOB </h2>
                
                    <div className="container">
                        <div className="leftSide-container">

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="name">
                                        NAME <span className="mandatory-indicator">*</span>
                                    </label>
                                </div>

                                <div className="col-75">
                                    <input
                                        // value={addJobs.JobTitle}
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="name..."
                                        // onChange={handleAddJOb}
                                        required
                                    />
                                    <span> </span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="email ">
                                    Email ID <span className="mandatory-indicator">*</span>
                                    </label>
                                </div>
                                <div className="col-75">
                                    <input
                                
                                        // value={addJobs.Experience}
                                        type="email" 
                                        id="email"
                                        name="email"
                                        placeholder="email ID.."
                                        // onChange={handleAddJOb}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="number">
                                     CONTACT NUMBER <span className="mandatory-indicator">*</span>
                                    </label>
                                </div>
                                <div className="col-75">
                                    <input
                                
                                        // value={addJobs.Experience}
                                        type="number" 
                                        id="number"
                                        name="number"
                                        placeholder="Number..."
                                        // onChange={handleAddJOb}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="address ">
                                        ADDRESS <span className="mandatory-indicator">*</span>
                                    </label>
                                </div>
                                <div className="col-75">
                                    <input
                                
                                        // value={addJobs.Experience}
                                        type="text" 
                                        id="address"
                                        name="address"
                                        placeholder="address.."
                                        // onChange={handleAddJOb}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="qualifications">EDUCATIONAL QUALIFICATION
                                    <span className="mandatory-indicator">*</span></label>
                                </div>
                                <div className="col-75">
                                    <select
                                    type="text"
                                    name="qualifications"
                                        id="qualifications"
                                        placeholder="location..."
                                        // value={addJobs.qualifications}
                                        // onChange={handleAddJOb}
                                        required

                                    >
                                        <option value="">Select qualifications</option>
                                        <option value="B-Tech">B-Tech</option>
                                        <option value="M-Tech">M-Tech</option>
                                        <option value="MBA">MBA</option>

                                    </select>
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
                                
                                        // value={addJobs.Experience}
                                        type="text" 
                                        id="Experience"
                                        name="Experience"
                                        placeholder="3-4.."
                                        // onChange={handleAddJOb}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="Percentage ">PERCENTAGE (If CGPA, Convert to %)
                                    <span className="mandatory-indicator">*</span></label>
                                </div>
                                <div className="col-75">
                                    <select
                                        type="text"
                                        name="Percentage"
                                        id="Percentage"
                                        // value={addJobs.employmentType}
                                        // onChange={handleAddJOb}
                                        required
                                    >
                                        <option value="">Select Percentage </option>
                                        <option value="Below 50%">Below 50%</option>
                                        <option value="50%-60%">50%-60%</option>
                                        <option value="60%-70%">60%-70%</option>
                                        <option value="70%-80%">70%-80%</option>
                                        <option value="80%-90%">80%-90%</option>
                                        <option value="above 90%">above 90%</option>

                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="uploadResume  ">
                                    Upload your updated Resume in PDF Format  <span className="mandatory-indicator">*</span>
                                    </label>
                                </div>
                                <div className="col-75">
                                    <input
                                
                                        // value={addJobs.Experience}
                                        type="file" 
                                        id="uploadResume"
                                        name="uploadResume"
                                        accept="application/pdf"
                                        // onChange={handleAddJOb}
                                        required
                                    />
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* {error && <ErrorMessage message={error} />} */}
                    <div className="buttonHolder">
                        {/* <span><h3></h3></span> */}
                        <button
                            className="button_03"
                            onClick={handleCancel}
                        >
                            Back
                        </button>
                      
                        <button
                            className="button_02"
                            // onClick={handleReset}
                        >
                            Reset
                        </button>
                       

                        <button
                            className="button_01"
                            type="submit"
                            //  onClick={habdleaddpost}

                        >
                            Submit
                        </button>
                    </div>
            </div>

    </>



  )
}

export default JobApply