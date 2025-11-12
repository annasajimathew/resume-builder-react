import React, { useEffect, useState } from 'react'
import Preview from '../component/Preview'
import { Link, useParams } from 'react-router-dom'
import { addHistoryAPI, getResumeAPI } from '../services/allAPI'
import { FaFileDownload } from "react-icons/fa";
import { IoMdRefreshCircle } from "react-icons/io";
import { FaBackward } from "react-icons/fa";
import Edit from '../component/Edit'
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';


function ViewResume () {
    const {id} = useParams()
    console.log(id);
    
    const[resume,setResume] = useState({})

    useEffect(()=>{
        getResumeDetails()
    },[]) // if dependency is not given,then problems will occur
    
    const getResumeDetails = async ()=>{
        const result = await getResumeAPI(id)
        console.log(result);
        if(result.status==200){
            setResume(result.data)
        }
    }

    const handleDownloadResume = async()=>{
      // 1.create pdf doc
      const doc = new jsPDF();
      const preview = document.getElementById('preview')

      // 2.screenshot of preview
      const canvas = await html2canvas(preview,{scale:2})
        //console.log(canvas);
        // convert canvas to image
        const resumeImg = canvas.toDataURL('image/png')
        console.log(resumeImg);
    
      // 3.add ss to pdf
      const pageWidth = doc.internal.pageSize.getWidth()
      //const imgHeight = doc.internal.pageSize.getHeight()

      const imgWidth = pageWidth-20
      const imgHeight = canvas.height*imgWidth/canvas.width
      doc.addImage(resumeImg,'PNG',10,10,imgWidth,imgHeight)

      // 4.download pdf
      doc.save(`${resume.username}-resume.pdf`)

      //local time date = new Date
      const localTimeData = new Date()
       //console.log(localTimeData);
      const timeStamp = `${localTimeData.toLocaleDateString()},${localTimeData.toLocaleTimeString()}`
      //console.log(timeStamp);
      try{
        await addHistoryAPI({timeStamp,resumeImg})
      }catch(err){
        console.log(err);
      }
      
    }

  return (
    <div className=" row container ">
          <div className="col-md-2"></div>
          <div className="col-md-8 col-12">
            <div className="d-flex justify-content-center align-items-center mt-5">
                <button onClick={handleDownloadResume} className='btn fs-4 text-primary'><FaFileDownload/></button>
                <Edit resumeDetails={resume} setResumeDetails={setResume}/>
                <Link to={'/history'} className='btn fs-4 text-primary'><IoMdRefreshCircle/></Link>
                <Link to={'/resume'} className='btn fs-4 text-success'><FaBackward/></Link>
            </div>
              <div id='preview'><Preview resumeDetails={resume}/></div>
          </div>
          <div className="col-md-2"></div>
      
    </div>
  )
}

export default ViewResume
