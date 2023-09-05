import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import star from '../images/customer/star.png';

const CustomerCard = (props) =>{
    
    

    return(
        <>
        <div className="" style={{width: "100%",height:"auto",display:"flex"}}>
        <div class="row justify-content-around" style={{width: "100%"}}>{
        props.img.map((i)=>{
          console.log(i)
          return(
          <>
         

    <div class="col-auto">
        
            
        <img src={i.c} className="" style={{display:"block",height:"150px", width:"150px", margin:"10px"}} alt="dihfh"/>
        <p>{i.months}</p>
       
        </div>
      
        
          </>
          
          )
        })
      }
</div>

</div>
      {console.log(props)}
  <div className="card-body">
    <h4 className='text-center fw-bold'>{props.name}</h4>
    <p className="text-center card-text">
      Reviewed on {props.reviewedDt}<br></br>
      <img src={star} alt='rating'></img><br></br>
      <h5 className=''>{props.desc}</h5></p><br></br>
      <div className='row'>
        <div className='col'>
      <div className='m-0 text-left'><strong>Used For</strong>
      <br></br>{props.usedDt}</div>
      </div>
      <div className='col-7 col-lg-4 col-md-5 text-right '>

        <div className='text-right fw-bold'>On complete Traya recommended plan.
        </div>
        </div>
      </div>
        
  

        </div>
        </>
    )
}

export default CustomerCard;