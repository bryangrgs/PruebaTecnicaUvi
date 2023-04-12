import styled from 'styled-components'
import {Link as LinkA} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`

background: ${({scrollNav}) => (scrollNav ? '#3d235a' : '#bd72fd')};
height: 80px;

display: flex;
justify-content: flex-start;
align-items: center;
position: sticky;
top: 0;
z-index: 10;
font-size: 1rem;

@media screen and (max-width: 960px){
    transition: 0.6 all ease;
}
    `;

export const NavbarContainer  = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
max-width: 1100px;
padding: 0 24px;

`;
export const NavLogo = styled(LinkA)`
flex-direction: initial;

`;
export const MobileIconBar = styled.div`
display: none;
@media screen  and (max-width: 760px){
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,60%);
    display: block;
    font-size: 2.0rem;
    cursor: pointer;
    color: white;
    
}
`;
export const NavMenu = styled.ul`
display: flex;
padding-left: 200px;
list-style: none;
text-align: center;
margin-right: -22px;
align-items: center;
@media screen and (max-width: 760px) {
    display: none;
    
}
`;

export const NavItem = styled.li`
height: 80px;
`;
/* NavBar links */
export const NavLinks = styled(LinkS)`

display: flex;
text-decoration: none;
color: #fff;
padding: 0 1rem;
align-items: center;
height: 100%;
cursor: pointer;
 &.active{
    border-bottom: 6px solid  white;
 }

`;
export const LogoImg = styled.img`
height: 80px;

display: flex;
`
