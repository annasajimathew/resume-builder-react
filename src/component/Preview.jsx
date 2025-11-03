import { Divider,Button } from '@mui/material'
import React from 'react'


function Preview({resumeDetails}) {
  return (
    <div style={{margin:'70px'}} className='shadow p-5 w-100 rounded text-center'>
      <h3>{resumeDetails?.username}</h3>
      <h5>{resumeDetails?.jobTitle}</h5>
      <h6><span className='mx-2'>{resumeDetails?.location}</span>|<span className='mx-2'>{resumeDetails?.email}</span>|<span className='mx-2'>{resumeDetails?.mobile}</span></h6>
      <p className='my-2'>
        <a href="" target='_blank' className='mx-1'>{resumeDetails?.github}</a> |
        <a href="" target='_blank' className='mx-1'>{resumeDetails?.linkedin}</a> |
        <a href="" target='_blank' className='mx-1'>{resumeDetails?.portfolio}</a>
      </p>
      <Divider sx={{fontSize:'25px'}}>Summary</Divider>
      <p style={{textAlign:'justify'}}>{resumeDetails?.summary}</p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Education</Divider>
      <h5 className='mt-2'>{resumeDetails?.course} </h5>
      <p><span className='mx-2'>{resumeDetails?.college}</span>|<span className='mx-2'>{resumeDetails?.university}</span>|<span className='mx-2'> {resumeDetails?.passoutYear}</span></p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Professional Experience</Divider>
      <h5 className='mt-2'> {resumeDetails?.jobtype} </h5>
      <p><span className='mx-2'>{resumeDetails?.company} </span>|<span className='mx-2'>{resumeDetails?.cLocation} </span>|<span className='mx-2'>{resumeDetails?.duration}</span></p>
       <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Skills </Divider>
       <div className="d-flex flex-wrap justify-content-between my-3">
          {
            resumeDetails?.userSkill?.map((item,index)=>(
              <Button key={index} variant="contained" className='m-1'>{item} </Button>
            ))
            
          }
       </div>

    </div>
  )
}

export default Preview