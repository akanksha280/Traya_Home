// Navbar.js
import React, { useState, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import Fade from 'react-reveal/Fade';
import { FaBars } from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';
import {FaRegUserCircle} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import {FaAngleRight} from 'react-icons/fa';
import {FaAngleLeft} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa'
import Circle from './Round.js';
import Circle1 from './Round1.js';
import Disclaimer from './Disclaimer.js';
import Footer1 from './footer1.js';
import img1 from '../images/hair.jpg'

import Home from './Home.js';
import {
	Nav,
	NavContainer,
	NavLogo,
	NavItem,
	NavLinks,
	NavMenu,
	Button1,
	
    Button
} from './NavbarStyles';
import Marquee from './marquee.js';
import Customer from './Customer.js';
import SafeScientific from './safeScientific.js';
import Buildplan from './Buildplan.js';
import Card2 from './Card2.js';
import {
	// eslint-disable-next-line
	CButton,
	CModal,
	CModalBody,
	// eslint-disable-next-line
	CModalFooter,
	CModalHeader,
	CModalTitle,
  } from "@coreui/react";
import '../App.css';


const Navbar = () => {
	const [colorChange, setColorchange] = useState(false);
	const [isActive,setActive]=useState(true);
	const [bar,setBar]=useState(false);
	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setColorchange(true);
		}
		else {
			setColorchange(false);
		}
	};
	const handleBar=()=>{
        setBar(!bar);
		

	}
	const handleAngle=()=>{
		// handleAngle(angle);
		setActive(!isActive);
	}

    
	window.addEventListener('scroll', changeNavbarColor);
	return (
		<Fragment>
            <section id='navv' className='card pb-5' >
			<Nav className={colorChange ? 'navbar colorChange ' : 'navbar '}>
				
				<NavContainer >
					<NavLogo href="#"><h1>Traya.</h1></NavLogo>
					{/* <MobileIcon>
						<FaBars />
						
					</MobileIcon> */}
					<NavMenu>
						<NavItem className='navbar-nav justify-content-center'>
							{/* <NavLinks href="#">About</NavLinks> */}
                            <Button className='btn btn-secondary btn-round ' >TAKE THE HAIR TEST<sup style={{fontSize:"10px"}}>TM</sup></Button>
						</NavItem>
						<NavItem>
							<NavLinks href="#"><FaWhatsapp size={30}/></NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks href="#"><FaRegUserCircle size={30}/></NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks href="#"><FaShoppingCart size={30}/></NavLinks>
						</NavItem>
						<NavItem className=' navbar-nav justify-content-end'>
							<NavLinks onClick={handleBar} ><FaBars  size={30}/></NavLinks>
						</NavItem>
					</NavMenu>
					
				</NavContainer>
				
			</Nav>
			
            <Home/>
			
			</section>
			<section className='Card'>
			<Marquee/>
			<Circle/>
			<SafeScientific/>
			{/* <Card2/> */}
			<Buildplan/>
				<Customer></Customer>
				<Disclaimer/>
				<Footer1/>
				
				
				
			</section>
			
			
			{/* <CButton onClick={() => setBar(!bar)}>
        
      </CButton> */}
	   <section className="bg-image d-flex align-items-center" ></section>
	   
      <CModal fullscreen visible={bar} onClose={() => setBar(false)} >
	  <img  src={img1} className="card-img-top" alt="Card cap"/>
    <div className="card-img-overlay">
	 <div >

        <CModalHeader onClose={() => setBar(false)} >
          <CModalTitle className=' fs-1 fw-bolder' style={{textColor:"black"}}>Traya.</CModalTitle>
        </CModalHeader>
        <CModalBody>
		<div className="container overflow-hidden" >
  <div className="row gx-5">
	<div className='col'></div>
    <div className="col">
     <div className="p-1 ">
	 <h3 className='fw-bold'>WHAT WE DO</h3><br/>
<h5 className='fw-light bgImage' >We help you take control of your hairloss in a personalised, and scientific way.</h5>
<div><Button1 className='btn  btn-sm  btn-outline btn-round ' style={{outlineColor:"black",textColor:"black",outlineStyle:"solid"}} >Track Order</Button1></div><br/>
<div><Button1 className='btn  btn-sm  btn-outline btn-round  ' style={{outlineColor:"black",textColor:"black",outlineStyle:"solid"}}>My Plan</Button1></div><br/>
<div><Button1 className='btn btn-sm  btn-outline btn-round  ' style={{outlineColor:"black",textColor:"black",outlineStyle:"solid"}}>Hair Test<sup style={{fontSize:"10px"}}>TM</sup></Button1></div><br/>
<div><Button1 className='btn  btn-sm  btn-outline btn-round  ' style={{outlineColor:"black",textColor:"black",outlineStyle:"solid"}}>Traya Combos</Button1></div><br/>
<div><Button1 className='btn  btn-sm  btn-outline btn-round  'style={{outlineColor:"black",textColor:"black",outlineStyle:"solid"}} >5 Month Money Back Gurantee</Button1></div><br/>
<div><Button1 className='btn  btn-sm  btn-outline btn-round  'style={{outlineColor:"black",textColor:"black",outlineStyle:"solid"}} >Log in</Button1></div><br/>
<div><Button1 className='btn  btn-sm  btn-outline btn-round  'style={{outlineColor:"black",textColor:"black",outlineStyle:"solid"}} >Referral</Button1></div><br/>

<div><Button1 className='btn  btn-sm  btn-outline btn-round  'style={{outlineColor:"black",textColor:"black",outlineStyle:"solid"}} onClick={handleAngle}>Products<span>{isActive?<FaAngleRight/>:<FaAngleLeft/>}
<Fade right>
 
</Fade>
</span></Button1></div><br/>

	 </div>
    </div>
    <div className="col float-right offset-2">
      <h3 className="  fw-bold text-uppercase" >How We Do It</h3>
	  <div  >
	  <div ><a href="/#" className='bgImage'>Traya Science</a></div><br/>
	  <div  ><a href="/#" className='bgImage'>Ingredients</a></div><br/>
	  <div ><a href="/#" className='bgImage'>Reviews</a></div><br/>
	  <div ><a href="/#"className='bgImage'>Hero's Page</a></div>
	  </div>
	  <h3 className="  fw-bold text-uppercase" >Who We Are</h3>
	  <div id='bgImage' >
	  <div ><a href="/#"className='bgImage'>About Used</a></div><br/>
	  <div  ><a href="/#"className='bgImage'>Our Experts</a></div><br/>
	  <div ><a href="/#"className='bgImage'>Blog</a></div><br/>
	  
	  </div>
	  <h3 className="  fw-bold text-uppercase" >Get in touch</h3>
	  <div  >
	  <div ><a href="/#" className='bgImage'><FaInstagram size={30}/></a>
	  <a href="/#" className='bgImage'><FaFacebookSquare size={30}/></a>
	  <a href="/#" className='bgImage'><FaWhatsapp size={30}/></a>
	  </div>
	  
	  </div>
    </div>
  </div>
</div>
		</CModalBody>
        {/* <CModalFooter>
          <CButton color="secondary" onClick={() => setBar(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter> */}
		</div>
		</div>
      </CModal>
	
	
		</Fragment>
        
	)
    
}

export default Navbar;
