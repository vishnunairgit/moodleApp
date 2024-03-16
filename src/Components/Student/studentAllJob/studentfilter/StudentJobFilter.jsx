import React from 'react'
import './studentjobfilter.css'


function StudentJobFilter({onFilterChange}) {

  const handleCheckboxChange = (e)=>{
    onFilterChange(e.target.checked)

  }

  return (

  <div className='JobFilter'>

    <div className='work-mode'>  
      <h5><strong>work mode</strong></h5>
      <label><input type="checkbox" name='workmode' onChange={handleCheckboxChange} /> Remote</label>
      <label><input type="checkbox" name='workmode' /> Hybrid</label>
      <label><input type='checkbox' name='workMode' /> Work From Home</label>
      <label><input type="checkbox" name='workmode' /> work from office</label>
    </div>

    <div className='location'>
      <h5><strong>location</strong></h5>
      <label><input type="checkbox" name='location' /> bengaluru</label>
      <label><input type="checkbox" name='location' /> delhi</label>
      <label><input type="checkbox" name='location' /> chennai</label>
      <label><input type="checkbox" name='location' /> kolkata</label>
      <label><input type="checkbox" name='location' /> hyderabad</label>
      <label><input type="checkbox" name='location' /> pune</label>
      <label><input type="checkbox" name='location' /> ahmedabad</label>
     
    </div>
    <div className='Experience'>
      <h5><strong>Experience</strong></h5>
      <label><input type="checkbox" name='Experience' /> 0-1</label>
      <label><input type="checkbox" name='Experience' /> 1-3</label>
      <label><input type="checkbox" name='Experience' /> 3-5</label>
      <label><input type="checkbox" name='Experience' /> 5-7</label>
      <label><input type="checkbox" name='Experience' /> 7-9</label>
      <label><input type="checkbox" name='Experience' /> 9-10</label>
      <label><input type="checkbox" name='Experience' /> 10 +</label>
    </div>
    <div className='Education'>
      <h5><strong>Education</strong></h5>
      <label><input type="checkbox" name='Education' /> B.Tech/B.E</label>
      <label><input type="checkbox" name='Education' /> M.Tech</label>
      <label><input type="checkbox" name='Education' /> MCA</label>
      <label><input type="checkbox" name='Education' /> any graduate</label>
      <label><input type="checkbox" name='Education' /> amy postgraduate</label>
      <label><input type="checkbox" name='Education' /> MBA</label>
      <label><input type="checkbox" name='Education' /> CA</label>
      <label><input type="checkbox" name='Education' /> diploma</label>

    </div>
    





    </div>
  )
}

export default StudentJobFilter