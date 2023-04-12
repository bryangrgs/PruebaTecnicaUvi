import React, {useState} from 'react';
import SideBar from '../components/SideBar/index';
import NavBar from '../components/NavBar/index';
import SectionInfo from './SectionInfo';
import Info from '../components/Info/index';
import { homeObjOne} from '../components/Info/Data';
import { homeObjTwo } from './Info2/Data2';
import Info2 from './Info2/index2';
import { Footer} from './Footer/index';
import Services from './Services/index';
import  Formulario from './Form/formulario';
const Home = () => {


  

    const [isOpen, setIsOpen]= useState(false);
        const toggle =() => {
            setIsOpen(!isOpen)
        };    
      return (
        <>
        
        <SideBar isOpen={isOpen} toggle={toggle}/>
          
         <NavBar toggle={toggle}/>
         <SectionInfo isOpen={isOpen} toggle={toggle}/>
         <Services/>
         <Info {...homeObjOne} />
         <Info2 {...homeObjTwo}/>
         <Formulario ></Formulario>
         <Footer/>
         </>
  );
};
export default Home;