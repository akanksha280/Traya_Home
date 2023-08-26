import React from 'react'
import '../index.css';
import {
	
	
	
    Button
} from './HomeStyles';


const Home=()=> {
  return (
    <>
     <section id="header" className='d-flex align-items-center'></section> 
     <div className='container-fluid nav-bg'>
        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'></div>
                    <h1 style={{fontFamily:"cursive"}}><b>Doctor Recommended</b></h1>
                    <h2 className='my-3' style={{fontFamily:"System-ui"}}>Know the Root Cause <br/>Of Your Hair Loss<br/><p style={{fontWeight:"lighter"}}><br/>93% saw results*</p><br/></h2>
                    {/* <div><NavLinks href="" className='btn-get-started'>Get</NavLinks></div> */}
                    <div><Button className='btn btn-secondary btn-lg btn-round ' >TAKE THE HAIR TEST<sup style={{fontSize:"10px"}}>TM</sup></Button></div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Home
