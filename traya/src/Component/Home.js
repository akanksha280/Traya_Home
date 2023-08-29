import React from 'react'
import '../index.css';
import {
  Button
} from './HomeStyles';


const Home=()=> {
  return (
    <>
     {/*  */}
     <div className="container object-fit-cover align-items-center mb-3" style={{width: "18rem;",height:"10000px;"}}>
  <div className="card-body">
    <h1 className="card-title" style={{fontFamily:"cursive"}}><b>Doctor Recommended</b></h1>
    <p className="card-text">
        <br/>
    <h2 className='my-3' style={{fontFamily:"System-ui"}}>Know the Root Cause <br/>Of Your Hair Loss<br/><p style={{fontWeight:"lighter"}}><br/>93% saw results*</p></h2>
                    {/* <div><NavLinks href="" className='btn-get-started'>Get</NavLinks></div> */}
                    <div><Button className='btn btn-secondary btn-lg btn-round ' >TAKE THE HAIR TEST<sup style={{fontSize:"10px"}}>TM</sup></Button><br/></div>
    </p>
    {/* <Button className='btn btn-lg btn-secondary btn-round ' >TAKE THE HAIR TEST<sup style={{fontSize:"10px"}}>TM</sup></Button>
						</div> */}
            </div>
</div>

    </>
  )
}

export default Home
