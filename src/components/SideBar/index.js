import React from 'react';
import { SideBarContainer, Icon, CloseIcon,SideBarWrapper,
    SideBarMenu, SideBarLink} from './SidebarElements';

export const SideBar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon  onClick={toggle}>
            <CloseIcon/>
     
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to='Service' onClick={toggle}> Servicios</SideBarLink>
                <SideBarLink to='Recomendaciones' onClick={toggle}> Recomendaciones</SideBarLink>
                <SideBarLink to='Planes' onClick={toggle}>Planes</SideBarLink>
                <SideBarLink to='Consejos'onClick={toggle}>Consejos y simulacros</SideBarLink>
                <SideBarLink to='Guia'onClick={toggle}>Guia y ayuda</SideBarLink>

            
            </SideBarMenu>

        </SideBarWrapper>
        </SideBarContainer>
  )
}
 export default SideBar