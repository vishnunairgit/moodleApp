import React, { useState } from 'react'
import './studentjobfilter.css'


function StudentJobFilter({ onFilterChange }) {

    const [filters, setFilters] = useState({
      workMode: [],
      location: [],
      experience: [],
      education: []
    });
    const handleCheckboxChange = (e) => {
      const { name, value, checked } = e.target;
      // console.log(`Name: ${name}, Value: ${value}, Checked: ${checked}`); // Debug log
      // console.log(filters); // Debug log to see current filters state
  
      // Ensure updatedFilters[name] is initialized if it doesn't already exist
      const updatedFilters = { ...filters, [name]: filters[name] || [] };
  
      if (checked) {
          // Add the filter if checked
          if (!updatedFilters[name].includes(value)) {
              updatedFilters[name].push(value);
          }
      } else {
          // Remove the filter if unchecked
          updatedFilters[name] = updatedFilters[name].filter(item => item !== value);
      }
  
      setFilters(updatedFilters);
      onFilterChange(updatedFilters);
  };




  return (

  <div className='JobFilter'>

    <div className='work-mode'>  
      <h5><strong>work mode</strong></h5>

      <label><input type="checkbox" name='workMode' value={'Remote'} onChange={handleCheckboxChange} /> Remote</label>
      <label><input type="checkbox" name='workMode' value={'Hybrid'} onChange={handleCheckboxChange} /> Hybrid</label>
      <label><input type="checkbox" name='workMode' value={'work from office'} onChange={handleCheckboxChange} /> work from office</label>
    </div>

    <div className='location'>
      <h5><strong>location</strong></h5>
      <label><input type="checkbox" name='location'  value={'bengaluru'} onChange={handleCheckboxChange} /> bengaluru</label>
      <label><input type="checkbox" name='location' value={'delhi'} onChange={handleCheckboxChange} /> delhi</label>
      <label><input type="checkbox" name='location' value={'chennai'} onChange={handleCheckboxChange} /> chennai</label>
      <label><input type="checkbox" name='location' value={'kolkata'} onChange={handleCheckboxChange}  /> kolkata</label>
      <label><input type="checkbox" name='location' value={'hyderabad'} onChange={handleCheckboxChange}  /> hyderabad</label>
      <label><input type="checkbox" name='location' value={'pune'} onChange={handleCheckboxChange} /> pune</label>
      <label><input type="checkbox" name='location' value={'ahmedabad'} onChange={handleCheckboxChange}  /> ahmedabad</label>
     
    </div>
    <div className='Experience'>
      <h5><strong>Experience</strong></h5>
      <label><input type="checkbox" name='experience' value={'0-1'} onChange={handleCheckboxChange} /> 0-1</label>
      <label><input type="checkbox" name='experience' value={'1-3'} onChange={handleCheckboxChange} /> 1-3</label>
      <label><input type="checkbox" name='experience' value={'3-5'} onChange={handleCheckboxChange} /> 3-5</label>
      <label><input type="checkbox" name='experience' value={'5-7'} onChange={handleCheckboxChange}  /> 5-7</label>
      <label><input type="checkbox" name='experience' value={'7-9'} onChange={handleCheckboxChange} /> 7-9</label>
      <label><input type="checkbox" name='experience' value={'9-10'} onChange={handleCheckboxChange} /> 9-10</label>
      <label><input type="checkbox" name='experience' value={'10 +'} onChange={handleCheckboxChange}  /> 10 +</label>
    </div>
    <div className='Education'>
      <h5><strong>Education</strong></h5>
      <label><input type="checkbox" name='education' value={'B.Tech/B.E'} onChange={handleCheckboxChange}/> B.Tech/B.E</label>
      <label><input type="checkbox" name='education' value={'M.Tech'} onChange={handleCheckboxChange} /> M.Tech</label>
      <label><input type="checkbox" name='education' value={'MCA'} onChange={handleCheckboxChange}/> MCA</label>
      <label><input type="checkbox" name='education' value={'any graduate'} onChange={handleCheckboxChange}/> any graduate</label>
      <label><input type="checkbox" name='education' value={'amy postgraduate'} onChange={handleCheckboxChange}/> amy postgraduate</label>
      <label><input type="checkbox" name='education' value={'MBA'} onChange={handleCheckboxChange} /> MBA</label>
      <label><input type="checkbox" name='education' value={'CA'} onChange={handleCheckboxChange} /> CA</label>
      <label><input type="checkbox" name='education' value={'diploma'} onChange={handleCheckboxChange}/> diploma</label>

    </div>
    





    </div>
  )
}

export default StudentJobFilter