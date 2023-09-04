import React from 'react';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import cust from './customer.jsx';
import Card from './Card.js';

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
    
    <>
      {console.log(cust[0].imgg)}
       {cust.map((e)=>{
        return(
          <Card img={e.imgg}
          name={e.name}
          reviewedDt={e.reviewedDate}
          usedDt={e.usedDt}
          desc={e.desc}
          months={e.months}
           />
        )
       })}
      
    </>
  )
}

export default Customer
