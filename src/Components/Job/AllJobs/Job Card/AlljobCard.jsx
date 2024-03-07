import React, { useEffect, useState } from 'react'
import './alljobcard.css'
import location from "../../../Assets/icons8-location-24.png"
import {calculateTimeAgo , formatDate} from "../../../../helpers/helpers"
import { useNavigate } from 'react-router-dom'
import AxiosInstance from '../../../../config/AxiosInstance'

function AlljobCard({ job }) {

  const  navigate =useNavigate()

  const handlejobViewPage = ()=>{
    navigate(`/JobViewPagj/${job.id}`)
  }



const id = job._id







  return (
    <div className='job'>
      <div className="job-card" onClick={handlejobViewPage} >

        <div className='title'>
          <div className='job-title'>
            <div>{job.JobTitle}</div>
          </div>
          <div  >
            <p>{job.status === 1 ? (
              <button style={{backgroundColor:'green'}} type="button">Active</button>
            ):(
              <button style={{backgroundColor:"red"}} type="button">Inactive</button>
            )}</p>
          </div>
        </div>

        <div className='Location'>
          <p><strong><img src={location} alt="" />:</strong> {job.location}</p>
          <p><strong>Experience:</strong> {job.Experience}  years</p>
        </div>
        <div className='Qualifications'>
          <p><strong>Qualifications:</strong> {job.qualifications}</p>
          <p><strong>Employment Type:</strong> {job.employmentType}</p>
          <p><strong>Openings:</strong> {job.openings}</p>
        </div>
        {/* <p><strong>Date Posted:</strong> {formatDate(job?.date)}</p> */}
        <p><strong>Date Posted:</strong> {calculateTimeAgo(job?.date)}</p>

      </div>
    </div>

  )
}

export default AlljobCard