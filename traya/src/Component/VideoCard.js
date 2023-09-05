import React ,{useState}from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";

import {
	// eslint-disable-next-line
	CButton,
	CModal,
	CModalBody,
	// eslint-disable-next-line
	CModalFooter,
	CModalHeader,
	CModalTitle,
  } from "@coreui/react";


const VideoCard = (props) => {
  const [bar,setBar]=useState(false);
  const run=()=>{
    setBar(!bar);
   }
  return (
    <>
    
<div className="card " onclick={run}>
<video class="video-fluid" poster ={props.poster} controls  loop className="card-img-top img-hover-zoom"  style={{width: "300px;",height:"400px"}}>
    <source src={props.videoLink} type="video/mp4" />
  </video>
  <div className="card-body">
   
  </div>
</div>
<>
    
    <CModal scrollable visible={bar} onClose={() => setBar(false)}>
      <CModalHeader>
        {/* <CModalTitle>Modal title</CModalTitle> */}
      </CModalHeader>
      <CModalBody>
      <video class="video-fluid" autoPlay controls  loop className="card-img-top img-hover-zoom"  style={{width: "300px;",height:"400px"}}>
    <source src={props.videoLink} type="video/mp4" />
  </video>
        
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setBar(false)}>
          
        </CButton>
        {/* <CButton color="primary">Save changes</CButton> */}
      </CModalFooter>
    </CModal>
  </>

    </>
  )
}

export default VideoCard;
