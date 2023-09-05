import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import star from'../images/customer/star.png'
import ReactReadMoreReadLess from "react-read-more-read-less";
import google from '../images/google.png';

const GoogleCard = (props) =>{
    
    

    return(
        <>
        <div className='cards-wrapper'>
            
        <div className="card border-0" style={{width: "100%",height:"auto",display:"flex"}}>
        <div class="row-cols-3 justify-content-around" style={{width: "100%"}}>
       <div class="col-auto">
       <div class="card border-0" style={{width: "18rem;"}}>
  <div class="card-body">
    <h5 class="card-title"><img src={star} alt='hh'></img></h5>
    
    <p class="card-text">  <ReactReadMoreReadLess
                charLimit={50}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >{props.desc}</ReactReadMoreReadLess></p>
    <strong>{props.name}</strong>
    <span className='text-right offset-1'><img src={google} style={{height:"35px"}} alt="googl"/>Posted on Google <br/></span>
  </div>
</div>
       </div>
        </div>
        </div>
      
</div> 
  

        </>
    )
}

export default GoogleCard;