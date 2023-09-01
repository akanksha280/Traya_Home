import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import cust1a from '../images/customer/shweta1.jpg';
import cust1b from '../images/customer/shweta2.jpg';
import cust1c from '../images/customer/shweta3.jpg';
import cust1d from '../images/customer/shweta4.jpg';

const Customer = () => {
    const cust=[
        {
            "name":"Shweta Dhvecha",
            "reviewedDate":"20 August 2021",
            "UsedDt":"3 Months",
            "Desc":"“By giving myself a complete lifestyle change inspired and instructed by Traya. ",
            "months":["Month1","Month2","Month4","Month5"],
            "imgg":[{cust1a},{cust1b},{cust1c},{cust1d}]
        }
    ]

    const listItems = cust.map((element)=>{
        
        console.log(element+"jj");
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
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        {console.log(cust[0].imgg)}
       <p>ddfd</p>
      {/* <img className="d-block w-100" src="..." alt="First slide"/> */}
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </>
  )
}

export default Customer
