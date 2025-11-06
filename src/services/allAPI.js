import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

//add resume api- called by userInput when finished button is clicked 
export const addResumeAPI = async (resume)=>{
    return await commonAPI(`${serverURL}/resume`,"POST",resume)
}

//get resume api - called from ViewResume, when page load(), inside useEffect hook
export const getResumeAPI = async (id)=>{
    return await commonAPI(`${serverURL}/resume/${id}`,"GET",{})
}
//update resume api

//add history api
//get history api
//remove history api
