import { Box, Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <div>
      <h1 className=" text-center my-5">Dowloaded Resume History</h1>
      <Link to={'/resume'} className='float-end me-5' style={{marginTop:'-80px'}}>Back</Link>
       <Box component="section" className='container-fluid'>
        <div className="row">
          <div className="col-md-4">
            <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
              <div className="d-flex justify-content-between align-items-center">
                <h6>Review At  : date&time</h6>
                <button className='btn text-danger fs-4'><MdDelete /></button>
              </div>
              <div className="border rounded p-3">
                <img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQN2Ygs8sQ4uxL9yqZvjShWkj_tJOxFWhq5g&s" alt="resume" />
              </div>
            </Paper>


          </div>
        </div>
        
       </Box>
    </div>
  )
}

export default History