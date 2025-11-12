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
export const updateResumeAPI = async (id,resume)=>{
    return await commonAPI(`${serverURL}/resume/${id}`,"PUT",resume) //passing resume
}

//add history api
export const addHistoryAPI = async (history)=>{
    return await commonAPI(`${serverURL}/history`,"POST",history) 
}

//get history api - called from history component, when page load(), inside useEffect hook
export const getHistoryAPI = async ()=>{
    return await commonAPI(`${serverURL}/history/`,"GET",{})
}

//remove history api
export const removeHistoryAPI = async (id)=>{
    return await commonAPI(`${serverURL}/history/${id}`,"DELETE",{}) 
}

