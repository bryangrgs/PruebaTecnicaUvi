import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import { Link as LinkS} from 'react-scroll';


export const SideBarContainer = styled.aside`
position: fixed;
z-index: 0;
width: 100%;
height: 100%;
background: white;
align-items: center;
top: 0;
left: 0;
display: grid;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) =>( isOpen ? '100%' : '0')};
top:     ${({ isOpen })=> ( isOpen ? '0':'-100%')}; 
`
export const CloseIcon = styled(FaTimes)`
color: #fff;
`;
export const Icon = styled.div`
top: 1.2rem;
right: 1.5rem;
 background:transparent;
 font-size: 2rem;
 position: absolute;
 cursor: pointer;
 outline: none;
`;

export const SideBarWrapper = styled.div`
color: white;
`;

export const SideBarLink = styled(LinkS)`
flex-direction: column-reverse;
flex-wrap: nowrap;
border: double;
border-radius: 60px;
display: flex;
justify-content: space-around;
align-items: stretch;
text-decoration: solid;
font-size: 2rem;
list-style: none;
transition: 0.2s ease-in-out;
color: white ;
background-color: black;
cursor: pointer;
&:hover{
    color: #bd72fd;
    transition: 0.2s ease-in-out;
}
`;

export const SideBarMenu = styled.ul`
background-color:#3d235a;
padding-top: 100px;
display: grid;
grid-template-columns: 2fr;
grid-template-rows: repeat(5,120px);
text-align: center;
justify-content: end;
align-content: center;
align-items: baseline;
justify-items: stretch;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6,50px);
    
}
`;


