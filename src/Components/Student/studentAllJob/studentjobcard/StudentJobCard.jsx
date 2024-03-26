import React from 'react'
import student from "../../../Assets/icons8-student-24.png"
import location from "../../../Assets/icons8-location-24.png"
import { calculateTimeAgo } from '../../../../helpers/helpers'
import './studentjobcard.css'
import { useNavigate } from 'react-router-dom'

function StudentJobCard({ studentJobs }) {

    const navigate = useNavigate()



    const handleView = ()=>{
        navigate(`/StudentJobViewPage/${studentJobs?._id}`)
    }



    return (
        <>
                <div>
                    <div className='stujob'>
                        <div className="job-card" onClick={handleView}  >

                            <div className='title'>
                                <h5><strong><div>{studentJobs.JobTitle}</div></strong></h5>
                                <p><strong><img src={location} alt="" /></strong> :{studentJobs.location}</p>
                                <p><strong> <img src={student} alt="" /></strong> : 2 </p>

                            </div>

                            <div className='Location'>
                                <p><strong>Experience:</strong> {studentJobs.Experience}  years</p>
                                <p><strong>Openings:</strong> {studentJobs.openings}</p>
                                <p><strong>Date Posted:</strong>{calculateTimeAgo(studentJobs?.date)} </p>
                                <p><strong>Qualifications:</strong> {studentJobs.qualifications}</p>

                            </div>

                            <div className='userdetails'>
                                
                                <p><strong>company name :</strong> {studentJobs.CreatedBy?.CompanyName} </p>
                                <p><strong>employmentType :</strong> {studentJobs.employmentType} </p>

                            {/* <p><strong>companydetails :</strong> {studentJobs.CreatedBy}</p> */}



                            </div>

                        </div>
                    </div>


                </div>
        </>
    )
}

export default StudentJobCard