import React from 'react'
import im1 from  '../images/1m.jpg'
import im2 from  '../images/2m.jpg'
import im3 from  '../images/3m.jpg'
import im4 from  '../images/10m.jpg'
const Marquee=()=> {
  return (
    <>
     <marquee className='container'>
        <img src={im1} alt='alternative imag' className='img-fluid'></img>&nbsp;&nbsp;
        <img src={im2} alt='alternative imag'className='img-fluid'></img>&nbsp;&nbsp;
        <img src={im3} alt='alternative imag'className='img-fluid'></img>&nbsp;&nbsp;
        <img src={im4} alt='alternative imag'className='img-fluid's></img>&nbsp;&nbsp;
        </marquee>  
    </>
  )
}

export default Marquee;
