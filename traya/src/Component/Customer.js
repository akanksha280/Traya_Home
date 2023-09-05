import React from 'react';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import cust from './customer.jsx';
import Card from './Card.js';
import CustomerCard from './CustomerCard.js';
const Customer = () => {
   
    const [custo,setCust]=useState(cust);
console.log(cust+"hi");
    const listItems = custo.map((element,index)=>{
        
        console.log(element+"jj"+custo);
        return (
            <div className="row row-cols-4 row-cols-md-4 g-3 ">
        <div className="col">
        <div className="card ">
        {element.imgg.map((e)=>{
                    return(
<img className="card-img-top" src={e} alt="Card imae"/>
                    )

                })}
            <div className="card-body text-center">
                <p className="card-text">Content of the first card</p>
            </div>
        </div>
        </div>
        </div>
        )})        
{/*        
            <div className='row'>
                <div className='col offset-3'>
            <div class="card">
            <div class="card-body">
                {element.imgg.map((e)=>{
                    return(
<img class="card-img-top" src={e} alt="Card imae"/>
                    )

                })}
                </div>
                </div>
                </div>
                </div> */}
                

  return (
    
    // <>
    //   {console.log(cust[0].imgg)}
    //    {cust.map((e)=>{
    //     return(
        //   <Card img={e.imgg}
        //   name={e.name}
        //   reviewedDt={e.reviewedDate}
        //   usedDt={e.usedDt}
        //   desc={e.desc}
        //   months={e.months}
        //    />


        <>
        <div className="card">
        <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-inner">



   {cust.map((e)=>{
        return(
            <div class="carousel-item active">
                <div style={{boxShadow: "-13px 10px 18px 7px #D3D3D3", 
                 marginLeft:"120px", marginRight:"120px", 
                borderRadius:"25px"}}>
          <CustomerCard img={e.imgg}
          name={e.name}
          reviewedDt={e.reviewedDate}
          usedDt={e.usedDt}
          desc={e.desc}
          months={e.months}
           />
           </div>
           </div>
        )})} 




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
</div>
        </>
        )
       //})}
      
   // </>
 // )
}

export default Customer
