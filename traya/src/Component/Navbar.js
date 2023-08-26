// Navbar.js
import React, { useState, Fragment } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { FaBars } from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';
import {FaRegUserCircle} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import Home from './Home.js';
import {
	Nav,
	NavContainer,
	NavLogo,
	NavItem,
	NavLinks,
	NavMenu,
	MobileIcon,
    Button
} from './NavbarStyles';
import '../App.css';

const Navbar = () => {
	const [colorChange, setColorchange] = useState(false);
	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setColorchange(true);
		}
		else {
			setColorchange(false);
		}
	};
    
	window.addEventListener('scroll', changeNavbarColor);
	return (
		<Fragment>
            
			<Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
				<NavContainer>
					<NavLogo href="#"><h1>Traya.</h1></NavLogo>
					<MobileIcon>
						<FaBars />
					</MobileIcon>
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
						<NavItem>
							<NavLinks   data-mdb-toggle="modal" data-mdb-target="#exampleModal"><FaBars size={30}/></NavLinks>
						</NavItem>
					</NavMenu>
				</NavContainer>
			</Nav>
            <Home/>

            <div className="modal top fade"
     id="exampleModal"
     tabIndex="-1"
     aria-labelledby="exampleModalLabel"
     aria-hidden="true"
     data-mdb-backdrop="true"
     data-mdb-keyboard="true">
  <div className="modal-dialog modal-fullscreen-sm-down">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Traya.</h5>
        <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">...</div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
          Close
        </button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
		</Fragment>
        
	)
    
}

export default Navbar;
