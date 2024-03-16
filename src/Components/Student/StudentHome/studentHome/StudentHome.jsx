import React from 'react'
import StudentNav from '../StudentNavbar/StudentNav'
import { Route, Routes } from 'react-router-dom'
import StudentAllJob from '../../studentAllJob/studentAllJob/StudentAllJob'

function StudentHome() {
  return (
    <div>
      <div>
        <StudentNav />
      </div>

      <div>
        <Routes>
          <Route path="/StudentHome" element={<StudentAllJob />} />
        </Routes>

      </div>






    </div>
  )
}

export default StudentHome