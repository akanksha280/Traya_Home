import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import star from'../images/customer/star.png'
import ReactReadMoreReadLess from "react-read-more-read-less";

const GoogleCard = (props) =>{
    
    

    return(
        <>
        <div className="card border-0" style={{width: "100%",height:"auto",display:"flex"}}>
        <div class="row-cols-3 justify-content-around" style={{width: "100%"}}>
       <div class="col-auto">
       </div>
        </div>
        </div>
        <div class="card border-0" style={{width: "18rem;"}}>
  <div class="card-body">
    <h5 class="card-title"><img src={star} alt='hh'></img></h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">  <ReactReadMoreReadLess
                charLimit={50}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >{props.desc}</ReactReadMoreReadLess></p>
    <p>{props.name}</p>
    <a href="/#" class="card-link">Google</a>
  </div>
</div>
      
  

        </>
    )
}

export default GoogleCard;