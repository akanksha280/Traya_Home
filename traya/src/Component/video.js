import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import vid from './video.jsx';

import VideoCard from './VideoCard.js';
import { Button } from './EssentialStyles.js';
const Video= () => {
   
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
   

   return (
     
    
    


        <>
        
        <br/><br/><br/>
        <div className="border-0 text-center container " >
            <br/>
        
        <br/><br/>
        
<Carousel
  swipeable={true}
  draggable={true}
  
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
 
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="transform 300ms ease-in-out"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
   {vid.map((e)=>{
        return(
            <div class="carousel-item active">
                <div className='card border-0' >
          <VideoCard 
          
          videoLink={e.videoLink}
          
          poster={e.poster}
          
          
           />
           </div>
           </div>
         
        )})} 




  
</Carousel>
<br/><br/>
<div>
  

</div>

  </div>
 

<br/><br/><br/>

<br/><br/>


  
        </>
        )
        
    
}

export default Video;
