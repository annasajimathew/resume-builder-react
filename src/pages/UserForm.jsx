import React from 'react'
import UserInput from '../component/UserInput'
import Preview from '../component/Preview'

function UserForm() {
  //create state for storing resume details
  const [resumeDetails,setResumeDetails ] = React.useState({
    username:"",
    jobTitle:"",
    location:"",
    email:"",
    mobile:"",
    github:"",
    linkedin:"",
    portfolio:"",
    course:"",
    college:"",
    university:"",
    passoutYear:"",
    jobtype:"",
    company:"",
    cLocation:"",
    duration:"",
    userSkill:[],
    summary:"",
  })
  return (
    <div className='container'>
      <div className="row p-5">
        <div className="col-lg-6">
          <UserInput resumeDetails={resumeDetails} setResumeDetails={setResumeDetails}/>
        </div>
        <div className="col-lg-6">
          {
            resumeDetails.username && 
            <Preview resumeDetails={resumeDetails}/>
          }
        </div>
      </div>
    </div>
  )
}

export default UserForm