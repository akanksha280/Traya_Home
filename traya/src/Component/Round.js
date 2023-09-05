import React, {  Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import img1  from '../images/circle.jpg'
import img2 from '../images/pink.jpg';
import {Button} from './RoundStyles';
import Card2 from './Card2.js';
import SafeScientific from './safeScientific.js'
import Buildplan from './Buildplan';
import Customer from './Customer';
import Essentials from './Essentials';
import Video from './video';
const Round=()=> {
  return (
    <>
     
<Video/>
<div className="card border-0 text-center mb-3" style={{width: "18rem;",height:"100vh;"}}>
  <div className="card-body">
    <h1 className="card-title">Hair Loss Has Multiple Root Causes</h1>
    <p className="card-text">
    <img  src={img1} alt="Card cap"/></p>
    <Button className='btn btn-lg btn-secondary btn-round ' >TAKE THE HAIR TEST<sup style={{fontSize:"10px"}}>TM</sup></Button>
						</div>

































            .
</div>
{/* Card2 */}


<div className="container text-center mb-3" style={{width: "18rem;",height:"10000px;"}}>
  <div className="card-body">
    <h1 className="card-title">The Threefold Way</h1>
    <p className="card-text">
        <br/>
    <h4 className='fw-lighter'>TRAYA’S HOLISTIC PLAN FOR HAIR FALL</h4><br/>
    <h3>AYURVEDA+DERMATOLOGY+NUTRITION</h3><br/>
   
    <h3>Our approach combines the goodness of three sciences. With<br/>ingredients from the most authentic sources, we personalize <br/>your treatment delivering assured results.

</h3>
    </p>
    <Button className='btn btn-lg btn-secondary btn-round ' >TAKE THE HAIR TEST<sup style={{fontSize:"10px"}}>TM</sup></Button>
						</div>
</div>
<Card2/>

<Buildplan/>

<br/><br/><br/>
<Customer/>
<SafeScientific/>
<Essentials/>
{/* CARd3 */}
{/* <div className="card  mb-3" style={{width: "18rem;",height:"10000px;"}} > */}
<div className="container position-relative border-rounded mb-9 mt-3 ml-7 mr-9 object-fit-cover pb-5 mb-3" style={{width: "18rem;",height:"100vh;"}} >
  <div className="card-body">
   
   
    <img class="card-img-top" src={img2} alt="Card imge"/>
    <div class="card-img-overlay">
    <p className="card-text text-center mt-5">
    <h1 className="card-title fw-light">TRAYA 2X2 REGIMEN</h1>
    <br/>
    <h1 className='fw-bolder'>2min<br/></h1><h1 className='fw-bold'>twice a day
</h1><br/>
    <h3>Follow a simple daily routine. Best results when used for 5 months.</h3><br/>
    <Button className='btn btn-lg btn-secondary btn-round pl-5 text-center' style={{width:"1000px;"}} size={70}>The Science</Button>
       
    </p>
    </div>
       
   
						</div>
</div>
{/* </div> */}

    </>
  )
}

export default Round;

