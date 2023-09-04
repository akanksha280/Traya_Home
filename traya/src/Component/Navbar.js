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
import Circle from './Round.js';
import Circle1 from './Round1.js';
import Disclaimer from './Disclaimer.js';
import Footer1 from './footer1.js';

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
			<Card2/>
			<Buildplan/>
				<Customer></Customer>
				<Disclaimer/>
				<Footer1/>
				
				
				
			</section>
			
			
			{/* <CButton onClick={() => setBar(!bar)}>
        
      </CButton> */}
	   <section className="bg-image d-flex align-items-center" ></section>
      <CModal fullscreen visible={bar} onClose={() => setBar(false)} id="bgImage">
	 <div >

        <CModalHeader onClose={() => setBar(false)} >
          <CModalTitle className='text-muted fs-1 fw-bolder'>Traya.</CModalTitle>
        </CModalHeader>
        <CModalBody>
		<div className="container overflow-hidden" >
  <div className="row gx-5">
	<div className='col'></div>
    <div className="col">
     <div className="p-1 ">
	 <h3 className='fw-bold'>WHAT WE DO</h3><br/>
<h4 className='fw-light'>We help you take control of your hairloss in a personalised, and scientific way.</h4>
<div><Button1 className='btn  btn-sm btn-outline-dark btn-round fw-bold' >Track Order</Button1></div><br/>
<div><Button1 className='btn  btn-sm btn-outline-dark btn-round fw-bold ' >My Plan</Button1></div><br/>
<div><Button1 className='btn btn-sm btn-outline-dark btn-round fw-bold ' >Hair Test<sup style={{fontSize:"10px"}}>TM</sup></Button1></div><br/>
<div><Button1 className='btn  btn-sm btn-outline-dark btn-round fw-bold ' >Traya Combos</Button1></div><br/>
<div><Button1 className='btn  btn-sm btn-outline-dark btn-round fw-bold ' >5 Month Money Back Gurantee</Button1></div><br/>
<div><Button1 className='btn  btn-sm btn-outline-dark btn-round fw-bold ' >Log in</Button1></div><br/>
<div><Button1 className='btn  btn-sm btn-outline-dark btn-round fw-bold ' >Referral</Button1></div>
<div><Button1 className='btn  btn-sm btn-outline-dark btn-round fw-bold ' onClick={handleAngle}>Products<span>{isActive?<FaAngleRight/>:<FaAngleLeft/>}
<Fade right>
 <h1>gjjsdj</h1>
</Fade>
</span></Button1></div><br/>

	 </div>
    </div>
    <div className="col">
      <div className="p-3  ">Custom column padding</div>
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
      </CModal>
	  
		</Fragment>
        
	)
    
}

export default Navbar;
