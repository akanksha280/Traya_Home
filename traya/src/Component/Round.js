import React, {  Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import img1  from '../images/circle.jpg'
import {Button} from './RoundStyles'
const Round=()=> {
  return (
    <>
     

<div className="card text-center mb-3" style={{width: "18rem;",height:"100vh;"}}>
  <div className="card-body">
    <h1 className="card-title">Hair Loss Has Multiple Root Causes</h1>
    <p className="card-text">
    <img  src={img1} alt="Card cap"/></p>
    <Button className='btn btn-lg btn-secondary btn-round ' >TAKE THE HAIR TEST<sup style={{fontSize:"10px"}}>TM</sup></Button>
						</div>
</div>
{/* Card2 */}


<div className="card text-center mb-3" style={{width: "18rem;",height:"10000px;"}}>
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




    </>
  )
}

export default Round;

