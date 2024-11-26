import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

// api to add video
export const addVideoApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/videos`, reqBody)
}

// api to get all video 
export const getVideoApi = async () => {
    return await commonApi('GET', `${serverUrl}/videos`, "")
}

//api to remove a video 
export const removeVideo = async () => {
    return await commonApi('DELETE', `${serverUrl}/videos/${id}`, {})
}

// api to add video to history 
export const addHistoryApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/hsitory`, reqBody)
}

// api to get all video from history
export const getAllVideoHistoryApi = async () => {
    return await commonApi('GET', `${serverUrl}/history`, "")
}

//api to delete history
export const deleteHistoryVideoApi = async (id) => {
    return await commonApi('DELETE', `${serverUrl}/history/${id}`, {})
}

// Api to add Category
export const addCategoryAPi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/category`, reqBody)
}

// api to get all category
export const getAllCategoryApi = async () => {
    return await commonApi('GET', `${serverUrl}/category`)
}

// api to delete category
export const deleteCategoryApi = async (id) => {
    return await commonApi('DELETE', `${serverUrl}/category/${id}`, {})
}

// api to update category 
export const updateCategoryApi = async (categoryid, reqBody) => {
    return await commonApi('PUT', `${serverUrl}/category/${categoryid}`, reqBody)
}