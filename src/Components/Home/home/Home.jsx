import React from 'react'
import Navbar from '../navBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Employers from '../../EmployersPage/Employers'
import Account from '../../Account/Account'
import AddJob from '../../Job/AddJob/AddJob'
import Alljob from '../../Job/AllJobs/All Jobs/AllJob'

function Home() {
  return (
    <>
      <Navbar />
      {/* <Employers /> */}
      <div>
        <Routes>
        <Route path="/home" element={<Employers /> } />
        <Route path="/account" element={<Account />} />
        <Route path="/addJob" element={<AddJob /> } />
        <Route path='/alljob' element={<Alljob />} />
        
        </Routes>
      </div>
    </>
  )
}

export default Home