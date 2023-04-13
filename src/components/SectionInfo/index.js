import React from 'react';

import { InfoContainer,InfoBg,
  InfoContent,InfoH1,InfoP,InfoBtnWrapper,LogoImg2 } from './InfoElements';
import img2 from '../../img/undraw_Engineering_team_a7n2.png';
const SectionInfo = () => {
 
  return (
    <InfoContainer >
        <InfoBg>
        <LogoImg2 src={img2}></LogoImg2>


        </InfoBg>
        <InfoContent>
          <InfoH1>Servicios de asesoramiento profesional de Uvi </InfoH1>
          <InfoP> Acceso Rapido </InfoP>
          <InfoBtnWrapper>
            
          </InfoBtnWrapper>
        </InfoContent>

    </InfoContainer>
  );
};
export default SectionInfo;
