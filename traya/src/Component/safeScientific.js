import React, {  Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import ss from '../images/ss1.jpg';
import d from '../images/d.png';
import e from '../images/e.png';
import f from '../images/f.png';
import g from '../images/g.png';
import h from '../images/h.png';
import i from '../images/i.png';


import {Button} from './RoundStyles'
const SafeScientific=()=> {
  return (
    <>
     <h1 className='text-center'> Safe and Scientific </h1>

<div className=" container position-relative border-rounded mb-9 mt-3 ml-7 mr-9 object-fit-cover pb-5 mb-3" style={{width: "100px;",height:"90vh;"}}>
  <div className="card-body">
    {/* <h1 className="card-title">Hair Loss Has Multiple Root Causes</h1> */}
    <p className="card-text">
    <img class="card-img-top" src={ss} alt="Card imge"/>
        <div class="card-img-overlay">
            <div className='row m-3 pt-5 pl-2'>
                <div className='cols offset-1'>
                    <img src={d} alt='h'></img> 
                    
                    <img className='offset-1'  src={e} alt='h'></img>
                    <img className='offset-1'  src={f} alt='h'></img>
                </div>
                
               
            </div>
            
            <div className='row m-3 pt-5 pl-2'>
                <div className='cols offset-1'>
                    <img src={g} alt='h'></img>  
                    <img className='offset-1'  src={h} alt='h'></img>
                    <img className='offset-1'  src={i} alt='h'></img>
                </div>
                </div>
           
        </div>
        
        </p>
    </div>
    </div>

   
    </>
  )
}

export default SafeScientific;

