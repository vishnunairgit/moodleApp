import React from 'react'
import StudentNav from '../StudentNavbar/StudentNav'
import { Route, Routes } from 'react-router-dom'
import StudentAllJob from '../../studentAllJob/studentAllJob/StudentAllJob'
import StudentJobViewPage from '../../studentAllJob/studentJobViewPage/StudentJobViewPage'
import JobApply from '../../studentAllJob/studentjobApply/JobApply'

function StudentHome() {
  return (
    <div>
      <div>
        <StudentNav />
      </div>

      <div>
        <Routes>
          <Route path="/StudentHome" element={<StudentAllJob />} />
          <Route path='studentJobViewPage/:jobId' element={<StudentJobViewPage /> } />
          <Route path="/jobApply" element={<JobApply />} />

        </Routes>

      </div>






    </div>
  )
}

export default StudentHome