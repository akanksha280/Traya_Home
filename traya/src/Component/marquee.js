import React from 'react'
import im1 from  '../images/1m.jpg'
import im2 from  '../images/2m.jpg'
import im3 from  '../images/3m.jpg'
import im4 from  '../images/4m.jpg'
import im5 from  '../images/5m.jpg'
import im6 from  '../images/6m.jpg'
import im7 from  '../images/7m.jpg'
import im8 from  '../images/8m.jpg'
import im10 from  '../images/10m.jpg'
import google from '../images/google.png'
import review from '../images/review.png'
import rate from '../images/rate.png'
const Marquee=()=> {
  return (
    <>
    <div className='row '> <div className='cols offset-1'>
    <a href='/#'><img src={google} alt='goog'></img></a>
    <span className='fw-bold'>4.5</span><a href='/#'><img src={rate} alt='rat'></img></a>
      </div></div>
      <div className='row '> <div className='cols-3 offset-1'>
   
      <a href='/#'><img src={review} alt='rev'></img></a>
      </div></div><br/>
      <div className='row'>
    
     <marquee className='container-fluid' >
        <img src={im1} style={{height:"-6px;"}}  alt='alternative imag' className='img-fluid'></img>&nbsp;&nbsp;
        <img src={im2} style={{height:"6px;"}} alt='alternative imag'className='img-fluid'></img>&nbsp;&nbsp;
        <img src={im3} style={{height:"6px;"}} alt='alternative imag'className='img-fluid'></img>&nbsp;&nbsp;
        <img src={im4} style={{height:"6px;"}} alt='alternative imag'className='img-fluid'></img>&nbsp;&nbsp;
        <img src={im5} style={{height:"-6px;"}}  alt='alternative imag'className='img-fluid'></img>&nbsp;&nbsp;
        <img src={im6} style={{height:"-6px;"}}  alt='alternative imag'className='img-fluid'></img>&nbsp;&nbsp;
        <img src={im7} style={{height:"-6px;"}}  alt='alternative imag'className='img-fluid'></img>&nbsp;&nbsp;
        <img src={im8} style={{height:"-6px;"}}  alt='alternative imag'className='img-fluid'></img>&nbsp;&nbsp;
        <img src={im10} style={{height:"6px;"}}  alt='alternative imag'className='img-fluid'></img>&nbsp;&nbsp;
        </marquee>
        <hr style={{borderColor:"#0EECCE"}}></hr>
        </div>  
        <br/>
        <br/>
    </>
  )
}

export default Marquee;
