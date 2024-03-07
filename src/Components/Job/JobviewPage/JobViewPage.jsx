import React, { useEffect, useState } from 'react'
import AxiosInstance from '../../../config/AxiosInstance'

function JobViewPage() {
  const [singleJobdata, setsingleJobdata] = useState([ ])



  useEffect(()=>{

    getSingleJob()

  },[])

  const getSingleJob = async (id)=>{
    try {

     const  response = await AxiosInstance.get('/admin/getSingleJobdata', {params:{jobId:id}})
      debugger
      setsingleJobdata(response.data)


      
    } catch (error) {
      console.log(error);

      
    }

  }
  return (
    <div>

    </div>
  )
}

export default JobViewPage