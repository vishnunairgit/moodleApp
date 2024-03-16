import React from 'react'
import student from "../../../Assets/icons8-student-24.png"
import location from "../../../Assets/icons8-location-24.png"
import { calculateTimeAgo } from '../../../../helpers/helpers'
import './studentjobcard.css'

function StudentJobCard({ studentJobs }) {



    return (
        <>
                <div>
                    <div className='stujob'>
                        <div className="job-card"  >

                            <div className='title'>
                                <h5><strong><div>{studentJobs.JobTitle}</div></strong></h5>
                                <p><strong><img src={location} alt="" /></strong> :{studentJobs.location}</p>
                                <p><strong> <img src={student} alt="" /></strong> : 2 </p>


                                {/* 
            <div className='Active'>
            <p>{studentJobs.status === 1 ? (
              <button style={{backgroundColor:'green'}} type="button">Active</button>
            ):(
              <button style={{backgroundColor:"red"}} type="button">Inactive</button>
            )}</p>

              
            </div> */}

                            </div>

                            <div className='Location'>
                                <p><strong>Experience:</strong> {studentJobs.Experience}  years</p>
                                <p><strong>Openings:</strong> {studentJobs.openings}</p>
                                <p><strong>Date Posted:</strong>{calculateTimeAgo(studentJobs?.date)} </p>
                                <p><strong>Qualifications:</strong> {studentJobs.qualifications}</p>

                            </div>

                            <div className='userdetails'>
                            <p><strong>companydetails :</strong> {studentJobs.CreatedBy}</p>
                            <p><strong>companydetails :</strong> {studentJobs.CreatedBy}</p>



                            </div>

                        </div>
                    </div>


                </div>
        </>
    )
}

export default StudentJobCard