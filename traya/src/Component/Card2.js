import React from 'react'
import PH from '../images/ph.png'
import Cart from '../images/cart.png'
import Cir from '../images/cir.png'
const Card2 = () => {
    const u=[{
        title:"Take The Hair test",
        desc:"An online test that assess the root cause of your hair loss ",
        steps:"STEP 1",
        time:"2-4 mins",
        img:PH
    },
{
    title:"Buy The Plan",
        desc:"On the basis of your responses, a team of doctors recommend a treatment plan.",
        steps:"STEP 2",
        time:"5 mins",
        img:Cart
    
},{
    title:"Start The Hair Growth",
        desc:"You get a free diet plan and a personal hair coach to guide you throughout your journey.",
        steps:"STEP 3",
        time:"3-5 months",
        img:Cir

}]
  return (
    <>
      <h1  className='text-center fw-bold'>Here Is How It Will Work</h1>
      <div className='container '>
      <div className='row row-cols-3 p-4 m-1' >
      {u.map((e)=>{
        return(
            <div className='cols offset-0'>
                <a href="/#" style={{textDecoration:"none"}}>
            <div className="card rounded" style={{width: "330px",height:"260px"}}>
            <div className="card-body">
              <h5 className="card-title fw- bold text-danger">{e.title}</h5>
              {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p className="card-text">{e.desc}</p>
              <div  className='row row-cols-2'>
              <span className='cols text-left'>
              <img src={e.img} alt="phone" style={{height:"67px",marginRight:"50px"}}></img></span>
              <span className='cols offset-5  text-right'>
              <h2 className='text-right text-blue' style={{marginBottom:"10px"}}>{e.steps}<br></br></h2><h5 className='fw-light'>(takes{e.time})</h5>
              <br></br>
              </span>
              </div>
            </div>
          </div>
          </a>
          </div>
          
        )

      })
    }
     </div>
     
     </div>
    </>
  )
}

export default Card2
