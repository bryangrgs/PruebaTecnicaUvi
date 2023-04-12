import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, 
    ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';


export const Services = () => {
  return (
    <>
    <ServicesContainer id='Service'>
        <ServicesH1>Nuestros Servicios</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={require('../../img/Cvprofile.png')} alt=""/>
                <ServicesH2> 1</ServicesH2>
                <ServicesP>Correción y confeccion de CV y linkedin</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={require('../../img/Consejo.png')} alt=""/>
                <ServicesH2> 2</ServicesH2>
                <ServicesP> Consejos y simulacros de entrevistas</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={require('../../img/Empleo.png')} alt=""/>
                <ServicesH2> 3</ServicesH2>
                <ServicesP>Guia de ayuda para la busqueda de empleo</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={require('../../img/Servicio4.png')} alt=""/>
                <ServicesH2> 4</ServicesH2>
                <ServicesP>Servicio nro 4</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={require('../../img/Servicio5.png')} alt=""/>
                <ServicesH2> 5</ServicesH2>
                <ServicesP>Servicio nro 5</ServicesP>
            </ServicesCard>
            
            
        </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}
export default Services;
