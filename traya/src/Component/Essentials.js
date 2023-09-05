import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";

import ess from './essential.jsx';

import EssentialsCard from './EssentialsCard.js';
import { Button } from './EssentialStyles.js';
const Essentials= () => {
   
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
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
        <h2 className='text-center fw-bold'>The Essentials</h2>
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
   {ess.map((e)=>{
        return(
            <div class="carousel-item active">
                <div className='card border-0' >
          <EssentialsCard 
          title={e.title}
          
          desc={e.desc}
          img={e.img}
          amount={e.amount}
          
           />
           </div>
           </div>
         
        )})} 




  
</Carousel>
<br/><br/>
<div>
  
<Button className='btn rounded btn-lg'>View All</Button>

</div>

  </div>
 

<br/><br/><br/>

<br/><br/>
        </>
        )
    
}

export default Essentials;
