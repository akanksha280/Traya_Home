import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";

import gr from './googlereview.jsx';

import GoogleCard from './GoogleCard.js';
const GoogleReview= () => {
   
    

   return (
    
    


        <>
        
        <br/><br/><br/>
        <div className="border-0 card">
            <br/>
        <h2 className='text-center fw-bold'>Our GoogleReviews</h2>
        <br/><br/>
        <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  <div class="carousel-item active">


   {gr.map((e)=>{
        return(
            
                <div style={{boxShadow: "-13px 10px 18px 7px #D3D3D3", 
                 marginLeft:"120px", marginRight:"120px", 
                borderRadius:"25px"}}>
          <GoogleCard 
          name={e.name}
          
          desc={e.desc}
          
           />
           </div>
         
        )})} 

</div>


    {/* <div class="carousel-item active">
      <img src="https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?w=312&h=180&c=7&r=0&o=5&pid=1.7" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/OIP._IgGc9h6kbuSmYLsRhBNvwHaEo?w=250&h=180&c=7&r=0&o=5&pid=1.7" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/OIP._IgGc9h6kbuSmYLsRhBNvwHaEo?w=250&h=180&c=7&r=0&o=5&pid=1.7" class="d-block w-100" alt="..."/>
    </div> */}







  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br/><br/><br/>
</div>
<br/><br/>
        </>
        )
    
}

export default GoogleReview;
