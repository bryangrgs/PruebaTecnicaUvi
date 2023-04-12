import styled from "styled-components";

import {Link} from'react-scroll'

export const Button = styled(Link)`
margin-top:20px;
margin-left: 10px;
border-radius: 50px;
background:${({primary}) => (primary ? '#bd72fd' : '#bd72fd') };
white-space: nowrap;
padding: ${({big})=> (big ? ' 14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? 'white' : 'black')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')}; 
outline: none;
cursor: pointer;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background:${({primary}) => (primary ? '#470083' : '#010606') };
    color: white;
}

`