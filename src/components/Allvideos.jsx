import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getVideoApi, updateCategoryApi } from '../services/allApi'


function Allvideos({ addStatus , setcategoryVDStatus }) {

  const [video, setVideo] = useState([])
  const [deleteStatus, setDeleteStatus] = useState({})
   

  const getallVideo = async () => {
    const result = await getVideoApi()
    /* console.log(result); */
    setVideo(result.data)
  }
  console.log(video);

  const dragOver = (e)=>{
    e.preventDefault()
  }
  const videoDrop = async(e)=>{
    const {videoDetails ,categoryDetails} = JSON.parse(e.datatransfer.getData("Details"))
    console.log(videoDetails , categoryDetails);
    
    let result = categoryDetails.allVideos.filter((item)=>item.id!=videoDetails.id) 

    const reqBody ={
      category:categoryDetails.category,
      allVideos:result,
      id:categoryDetails.id 
    }

    const response = await updateCategoryApi(categoryDetails.id , reqBody)
    console.log('inside function');
    
    console.log(response); 
    if(response.status >=200 && response.status<300){
      setcategoryVDStatus(result) 
    }
    
  
  }


  useEffect(() => {
    getallVideo()
  }, [addStatus, deleteStatus]) 

  return (
    <>
      <h5 className='mt-5'>All Videos</h5>

      {video?.length > 0 ?
        <div className="container-fluid mt-5" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
          <div className="row">

            {video?.map((item) => (
              <div className="col-md-3 p-2">
                <Videocard videoDetails={item} />
              </div>
            ))
            }

          </div>
        </div>

        :
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png" alt="no image" className='w-100' />
              <h5 className='text-center text-danger'>No Video Added Yet......</h5>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>}
    </>
  )
}

export default Allvideos
