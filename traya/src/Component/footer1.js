import React from 'react';
import AS from '../images/appstore.png';
import PS from '../images/googleplay.png';
import {A} from './footer1Styles';
const footer1 = () => {
  return (
    <>
     <section className="">
      <footer className='text-white 'style={{backgroundColor:" #163F3A"}}>
<div className="container p-4">
     
      <div className="row">
       
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h4 className="fw-light text-uppercase">experience the Traya mobile app</h4>
          <img src={PS} alt='imag'></img>&nbsp;&nbsp;
          <img src={AS} alt='imag'></img>

        </div>
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h6 className='fw-lighter font-small'>
          Registered Copyright 2023<br></br><br></br>
          <strong>Tatvartha Health Pvt. Ltd.</strong><br></br>
          <strong>CIN:</strong>
          "Tatvartha Health Pvt. Ltd."
          <br></br>
          <br></br>
          <strong>Mumbai:</strong>
          " Unit no - 101, B wing, Building - "
          <br></br>
          "16,
Interface, Off Link Road, Malad (West),
Mumbai - 400064, Maharashtra"
<br></br>
<p>
  <strong>Registered Office:</strong><br></br><br></br>
  "C67 P1, Fortune Hotel Galaxy,Koparli R, GIDC, Vapi, Gujarat - 396195"
</p>

          </h6>

        </div>
    </div>
    </div>
      </footer>
  
  <footer className="bg-dark text-white" style={{backgroundColor:" rgba(0, 0, 0, 0.2);"}}>
   
    <div className="container p-4">
     
      <div className="row">
       
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h2 className="fw-bold">Traya.</h2>
          <h6 className='text-uppercase fw-light'>Popular Search</h6>

          <p>
            <A href='/#'>
          Reasons For Hair Fall |</A>
          <A href='/#'>
           Hair Growth Oil |</A>
          <A href='/#'>
           How To Stop Hair Fall| </A>
          <A href='/#'>
            Dandruff Vs Dry Scalp |</A>
            <A href='/#'>Food For Hair Growth|</A>
            <A href='/#'>Hair Loss Treatment| </A>
            <A href='/#'>What Is Minoxidil|</A>
            <A href='/#'> Nasya Treatment|</A>
            <A href='/#'> How To Stop White Hair|</A>
            <A href='/#'> How To Stop White Hair|</A>
          </p>
        </div>
      
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Traya Journey</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <A href="#!" className="text-white">Track Order</A>
            </li>
            <li>
              <A href="#!" className="text-white">Online Diagnosis</A>
            </li>
            <li>
              <A href="#!" className="text-white">Referral</A>
            </li>
            <li>
              <A href="#!" className="text-white">Customer Stories</A>
            </li>
            <li>
              <A href="#!" className="text-white">Reviews</A>
            </li>
          </ul>
        </div>
       
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-0">Company</h5>

          <ul className="list-unstyled">
            <li>
              <A href="#!" className="text-white">Science</A>
            </li>
            <li>
              <A href="#!" className="text-white">Our Story</A>
            </li>
            <li>
              <A href="#!" className="text-white">Blog</A>
            </li>
            <li >
              <A href="#!" className="text-white" >All Products</A>
            </li>
            <li>
              <A href="#!" className="text-white">Hair Treatment For Women</A>
            </li>
            <li>
              <A href="#!" className="text-white">Hair Treatment For Men</A>
            </li>
          </ul>
        </div>

        
        
      </div>
      
    </div>
    
   
    {/* <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div> */}
   
  </footer>
  <footer class="bg-light text-center text-white">

  <div class="container p-4 pb-0">

    <section class=" mb-4">
      <div className='row'>
        <div className='cols'>
        <div className='cols'>
       
           
                <p className='text-dark'>safe to use</p>
            </div> 
            <div className='cols'>
             
                <p className='text-dark'>safe to use</p>
            </div>
            <div className='cols'>
             
             <p className='text-dark'>safe to use</p>
         </div>
         <div className='cols'>
             
             <p className='text-dark'>safe to use</p>
         </div>

          </div>
        
          </div>
    </section>
    
  </div>
  

 
 
</footer>
</section>
    </>
  )
}

export default footer1
