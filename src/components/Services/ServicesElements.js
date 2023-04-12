import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'
export const ServicesContainer =  styled.div`
height: 760px;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background: #8658B1;

@media screen and (max-width: 760px){
    height: 700px;
}
@media screen and (max-width: 480px){
    height: 300px;
}
`
export const ServicesWrapper = styled.div`
width: 100%;
max-width: 300px;
max-height:250px;
margin:0 auto;
display: grid;
flex-direction: row;
justify-content: space-around;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;
flex-flow: wrap;

@media screen and (max-width: 650px){

    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 760px){
padding: 0 20px;
}
`
export const ServicesCard = styled(LinkS)`
box-sizing: border-box;
background: #fff;
display:flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-width: 250px;
padding: 30px;

box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.3 ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;

}
@media screen and (max-width: 760px){
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    max-height: 150px;
    max-width: 150px;
}
`
export const ServicesIcon = styled.img`
height: 150px;
width: 150px;
margin-bottom: 10px;
@media screen and (max-width: 760px){
    
    max-height: 100px;
    max-width: 100px;
}
`
export const ServicesH1 = styled.h1`
margin-top: 20px;
font-size: 2.5rem;
color: #fff;
margin-bottom:60px;

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`
export const ServicesH2 = styled.h2`
 font-size: 1rem;
 margin-bottom: 10px;
 @media screen and (max-width: 760px){
    font-size: 0.5rem;
    margin-bottom: 0px;
}
`
export const ServicesP = styled.p`
justify-items: center;
width: 150px;
height: 40px;
font-size: 12px;
text-align: center;
@media screen and (max-width: 760px){
    font-size: 8px;
    
    max-height: 100px;
    max-width: 120px;
}
@media screen and (max-width: 480px){
    font-size: 4px;
    
    max-height: 80px;
    max-width: 10 0px;
}
`