import styled from "styled-components";

export const InfoContainer = styled.div`
color: #fff;
background: ${({ lightBg }) => (lightBg? 'black' : 'white')};
@media screen and (max-width: 760px){
    padding: 100px, 0;
}
`
export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 700px;
width: 100%;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`

/*Consultar a a tutor */
export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto,1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => 
imgStart ? `'col2 col1'` : `'col1 col2'`};
@media screen and (max-width: 760px){
    grid-template-areas: ${({imgStart}) => 
    imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
}
`
export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`
export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;

`
/* Acceso premiuum */
export const TopLine = styled.p`
color: #01bf71;
font-size: 20px;
font-weight: 700;
line-height: 14px;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`
export const Heading = styled.h1`
color: #000;
margin-bottom: 24px;
font-size: 46px;
line-height: 1.0;
font-weight: 600;
color: ${({lightText}) => (lightText ? 'white' :'#010606')};

@media screen and (max-width: 480px){
    font-size: 32px;
}
`
export const Subtitle = styled.p`
max-width: 400px;
margin-bottom: 35px;
font-size: 20px;
line-height: 24px;
color: ${({darkText}) => (darkText ?'#01bf71;':'black')};
`
export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`
export const ImgWrap = styled.div`
max-width: 700px;
height: 100%;
`
export const Img = styled.img`
width: 500px;
margin: 0 0 60px 0;
padding-right: 0;
`