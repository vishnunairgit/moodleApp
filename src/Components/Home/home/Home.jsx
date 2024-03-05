import React from 'react'
import Navbar from '../navBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Employers from '../../EmployersPage/Employers'
import AddJob from '../../Job/AddJob/AddJob'
import Alljob from '../../Job/AllJobs/All Jobs/AllJob'
import Account from '../../Company Details/View company/Account'
import EditCompany from '../../Company Details/edit Company/EditCompany'

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
        <Route path="/editCompany"  element={<EditCompany/>} />
        
        </Routes>
      </div>
    </>
  )
}

export default Home