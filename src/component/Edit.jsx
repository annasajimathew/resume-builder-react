import React, { useState,useRef } from 'react'
import { MdEditDocument } from "react-icons/md";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { FaXmark } from "react-icons/fa6";
import { updateResumeAPI } from '../services/allAPI';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit({resumeDetails,setResumeDetails}) {
    // should we view the modal or not 
    const [open,setOpen] = useState(false)
    const skillRef = useRef()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addSkill = (skill)=>{
      if(resumeDetails.userSkill.includes(skill)){
        alert(" the given skill is already addedd")
      }else{
        setResumeDetails({...resumeDetails,userSkill:[...resumeDetails.userSkill,skill]})
        //to clear add skill textbox
        skillRef.current.value = ""
       }
    }
 const removeSkill = (skill)=>{
  setResumeDetails({...resumeDetails,userSkill:resumeDetails.userSkill.filter(item=>item!=skill)})
 }

 //UPDATE button clicking
 const handleResumeUpdate = async ()=>{
  const {id,username,jobTitle,location}=resumeDetails  //desttructuring 
  if(!username && !jobTitle && !location){
    alert("Please Fill the Form Completely")
  }else{
    //api
    console.log("Api Call");
    try{
      const result = await updateResumeAPI(id,resumeDetails)
      console.log(result);
      if(result.status==200){
        alert("Resume Updated Successfully!!!")
        handleClose() //to close the modal
      }
    }catch(err){
      console.log(err);
      
    }
    
  }
  }
  return (
    <div>
         <button onClick={handleOpen} className='btn fs-3 text-warning'>< MdEditDocument/></button>
         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
           {/* personal data */}
           <div>
                           <h3>Personal Details</h3>
                           <div className="row p-3">
                               <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
                               <TextField value={resumeDetails.jobTitle} onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})} id="standard-basic-job" label="Job Title" variant="standard" />
                               <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic-location" label="Location" variant="standard" />
                           </div>
                       </div>
           {/* contact data */}
           <div>
                <h3>Contact Details</h3>
                <div className="row p-3">
                    <TextField value={resumeDetails.email} onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})} id="standard-basic-mail" label="Email" variant="standard" />
                    <TextField value={resumeDetails.mobile} onChange={e=>setResumeDetails({...resumeDetails,mobile:e.target.value})} id="standard-basic-num" label="Phone Number" variant="standard" />
                    <TextField value={resumeDetails.github} onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})} id="standard-basic-git" label="Github Profile Link" variant="standard" />
                    <TextField value={resumeDetails.linkedin} onChange={e=>setResumeDetails({...resumeDetails,linkedin:e.target.value})} id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" />
                    <TextField value={resumeDetails.portfolio} onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})} id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                </div>
            </div>
           {/* education */}
           <div>
                <h3>Education Details</h3>
                    <div className="row p-3">
                        <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-course" label="Course Name" variant="standard" />
                        <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-college" label="College Name" variant="standard" />
                        <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-uni" label="University" variant="standard" />
                        <TextField value={resumeDetails.passoutYear} onChange={e=>setResumeDetails({...resumeDetails,passoutYear:e.target.value})} id="standard-basic-year" label="Year of Passout" variant="standard" />
                    </div>
                </div>
           {/* work */}
            <div>
                <h3>Professional Details</h3>
                <div className="row p-3">
                    <TextField value={resumeDetails.jobtype} onChange={e=>setResumeDetails({...resumeDetails,jobtype:e.target.value})} id="standard-basic-jori" label="Job or Internship" variant="standard" />
                    <TextField value={resumeDetails.company} onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic-companyN" label="Company Name" variant="standard" />
                    <TextField value={resumeDetails.cLocation} onChange={e=>setResumeDetails({...resumeDetails,cLocation:e.target.value})} id="standard-basic-companyL" label="Company Location" variant="standard" />
                    <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic-duration" label="Duration" variant="standard" />
                </div>
            </div>
           {/* skill */}
           <div>
                           <h3>Skills</h3>
                           <div className='d-flex align-items-center justify-content-between p-3 w-100'>
                             <input ref={skillRef} placeholder='Add Skill' type="text" className='form-control' />
                             <Button onClick={()=>addSkill(skillRef.current.value)} variant='text'>ADD</Button>
                           </div>
                           <h5>Added Skills</h5>
                           <div className="d-flex flex-wrap justify-content-between my-3">
                            {
                             resumeDetails.userSkill?.length>0?
                               resumeDetails.userSkill?.map((skill,index)=>(
                                  <Button key={index} variant="contained" className='m-1'>{skill}<FaXmark onClick={()=>removeSkill(skill)} className='ms-2' /></Button>
                               ))
                             :
                             <p className='fw-bolder'>NO Skills are added yet!!!</p> 
                            }
                           </div>
                       </div>
           {/* summary */}
           <div>
                <h3>Summary</h3>
                <div className=" p-3 row">
                   <TextField onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})} id="standard-basic-summary" label="Write  a short summary of yourself" variant="standard" multiline rows={6} defaultValue={'Versatile and results-driven Full Stack Web Developer with 5+ years of experience designing, developing, and deploying scalable web applications. Proficient in both front-end and back-end technologies, including React, Angular, Node.js, Express, and MongoDB. Adept at creating responsive user interfaces, RESTful APIs, and integrating third-party services. Strong understanding of software development life cycle, agile methodologies, and version control (Git). Passionate about building high-performance, user-centric solutions that solve real-world problems.'}/>
                </div>
            </div>

            {/* button for updation */}
            <div className="my-3">
                <button onClick={handleResumeUpdate} className='btn btn-warning text-light '>UPDATE</button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit







