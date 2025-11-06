import React, { useEffect, useState } from 'react'
import Preview from '../component/Preview'
import { useParams } from 'react-router-dom'
import { getResumeAPI } from '../services/allAPI'
useParams

function ViewResume () {
    const {id} = useParams()
    console.log(id);
    
    const[resume,setResume] = useState({})

    useEffect(()=>{
        getResumeDetails()
    },[])
    
    const getResumeDetails = async ()=>{
        const result = await getResumeAPI(id)
        console.log(result);
        if(result.status==200){
            setResume(result.data)
        }
        

    }
  return (
    <div className="container my-5">
      <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-6">
              <Preview resumeDetails={resume}/>
          </div>
          <div className="col-md-2"></div>
      </div>
    </div>
  )
}

export default ViewResume
