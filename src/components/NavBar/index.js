import React, { useEffect, useState } from "react";
import {FaBars} from 'react-icons/fa';
import { Nav, 
    NavLogo, 
    NavbarContainer, 
    MobileIconBar,
    NavMenu,
    NavLinks,
    NavItem,
    LogoImg
    
} from './NavbarElements';
import Img from '../../img/logo1(1)(2)(1)(5).png'
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

const NavBar = ({toggle}) =>{

    const [scrollNav , setScrollNav]=useState (false)
    const changeNav = ()=>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav);
    },[]);
    const toggleHome = ()=>{
        scroll.scrollToTop();
    };
     return(
        <>
             
             <IconContext.Provider value={{color: '#bd72fd'}}>
        <Nav scrollNav={scrollNav}>
       
            <NavbarContainer>
                 <NavLogo to='/' onClick={toggleHome} >
                    <LogoImg src={Img}></LogoImg>
                </NavLogo> 
                <MobileIconBar onClick={toggle}>
                    <FaBars />
                </MobileIconBar>
              
                <NavMenu>    
                <NavItem>
                        <NavLinks to='Service' 
                        smooth= {true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Servicios</NavLinks>

                    </NavItem>
                    <NavItem>
                        <NavLinks to='Recomendaciones'
                        smooth= {true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Recomendaciones</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='Planes' 
                        smooth= {true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        activeClass="active">Planes</NavLinks>
                    </NavItem>
                    
                    
                    <NavItem>
                    <NavLinks to='Formulario' 
                        smooth= {true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Formulario de servicio</NavLinks>
                    </NavItem>
                    <NavItem>
                    <NavLinks to='Guia' 
                        smooth= {true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>contacto</NavLinks>
                    </NavItem>
               
            </NavMenu>
              
            </NavbarContainer>
        
        </Nav>
        
        
       
        </IconContext.Provider>
        </>
   
     );
};
export default NavBar;