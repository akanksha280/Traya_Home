import React from 'react'
import {Button} from './EssentialStyles.js';
import "bootstrap/dist/css/bootstrap.min.css";


const EssentialsCard = (props) => {
  return (
    <>
    <a href='/#' style={{textDecoration:"none"}}>
<div className="card offset-1" >
  <img src={props.img} className="card-img-top img-hover-zoom" alt="med imag" style={{width: "300px;",height:"400px"}}/>
  <div className="card-body">
    <h6 className="card-title fw-bold">{props.title}</h6><br/>
    <h6 className="card-text fw-light">{props.desc}</h6><br/>
    <p>${props.amount}/-</p>
   
    <Button  className="btn btn-lg rounded">Add To Cart</Button>
  </div>
</div>
</a>
    </>
  )
}

export default EssentialsCard;
