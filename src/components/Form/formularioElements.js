import styled,{css} from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colores={
    borde:"#0075FF",
    error:"#bb2929",
    exito:"#1ed12d"
}
export const Form= styled.form`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
@media (max-width: 800px){
    grid-template-columns: 1fr;
}

`;
export const Form2= styled.form`
display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: 2px dashed #1475cf;
    cursor: pointer;
    border-radius: 10px;
    flex-wrap: wrap;
    @media (max-width: 200px){
        grid-column: span 1;
    }
}

`;
export const Label = styled.label`
display: block ;
font-weigth: 700;
padding: 10px;
min-height: 40px;
cursor: pointer;
${props => props.valido === 'false' && css`
color: ${colores.error};`}
`;
export const  GrupoInput= styled.div`
position: relative;
z-index:90;
`;
export const Input= styled.input`
width: 100%;
background:#fff;
border-radius: 10px;
height: 35px;
line-height:45px;
padding: 0 40px 0 10px;
transition: 0.3s ease all;
border: 3px solid transparent;

&:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
}
    


${props => props.valido === 'true' && css`
border: 3px solid transparent;
`}

${ props => props.valido ==='false' && css`

     border: 3px solid  ${colores.error} !important;
`}
`;
export const LeyendaError= styled.p`
font-size:12px;
margin-bottom:0;
color:${colores.error};
display: none;
${ props => props.valido ==='true' && css`

     display:none;
`}
${ props => props.valido ==='false' && css`
    display: block;
`}
`;
export const   IconoValidacion = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index:100;
    font-size:16px;
    opacity:0;
    ${ props => props.valido ==='false' && css`
    opacity: 1;
    color: ${colores.error};
`}
${ props => props.valido ==='true' && css`
opacity: 1;
color: ${colores.exito};
`}
`;
export const ContenedorTerminos= styled.div`
grid-column: span 2;
input{
    margin-right: 10px;

}
@media (max-width: 800px){
    grid-column: span 1;
}
`;
export const ContenedorBotonCentrado = styled.div`
display: flex;
flex-direction:column;
align-items: center;
grid-column: span 2;

@media (max-width: 800px){
    grid-column: span 1;
}
`;
export const Boton = styled.button`
height: 45px;
line-height: 45px;
width: 30%;
background: #000;
color: #fff;
font-weight: bold;
border:none;
border-radius: 50px;
cursor:pointer;
transition: 0.1s ease all;
&:hover{
    box-shadow: 3px 0 px 30 px rgba(163,163,163,1 );
}
`;
export const MensajeExito = styled.p`
font-size:14px;
color: ${colores.exito};


`;
export const MensajeError = styled.div`
height:45px;
line-height:45px
background: #f66060;
padding: 0px 15px;
border-radius:3px;
gri-column: span 2;
p{
    margin:0;
}
b{
    margin-left: 10px;
}
`;
export const Body=styled.body`
height: 700px;
background-image: linear-gradient(to top, #7721bf, #9555ce, #b180dc, #ccabe8, #e6d6f4);
}
`;
export const Main=styled.main`
    max-width: 800px;
    
    margin: auto;
    padding: 40px;

`;