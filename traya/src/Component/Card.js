import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import star from '../images/customer/star.png';
const Card = (props) => {
  
  return (
    <>
    <h1 className='text-center fw-bold'>Our Customers</h1>
    <br></br>
    <div className='container card' style={{width:"10000px",height:"540px"}}>
    <div id="carouselExampleControls" className=" carousel carousel-dark slide" data-mdb-ride="carousel" data-interval="5000">
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      
    < div className="" style={{width: "600px",height:"auto",display:"flex"}}>
   
    
      {
        props.img.map((i)=>{
          console.log(i)
          return(
          <>
           < div className='row '>
         <div className='cols pt-5 pr-5 offset-1'>
          <div className='cols-6 pl-4 offset-1'>
        <img src={i.c} className=" card-img-top   rounded-lg object-fit-fill img-fluid d-block w-100 " style={{display:"block",height:"30vh",width:"90px"}} alt="dihfh"/>
        <p>{i.months}</p>
        
        </div>
        </div>
        </div>
        
          </>
          
          )
        })
      }
      
     
     
      
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
  


    </div>
    
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

   
    
    </div>
      
    </>
  )
}

export default Card
