import styled from "styled-components";

import {Link} from'react-scroll'

export const Button = styled(Link)`
display: flex;
margin-top:20px;
margin-left: 10px;
border-radius: 50px;
background:${({primary}) => (primary ? '#3d235a' : '#bd72fd') };
white-space: nowrap;
padding: ${({big})=> (big ? ' 14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? 'white' : '#bd72fd')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')}; 
outline: none;
border:2px solid black;
cursor: pointer;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background:${({primary}) => (primary ? '#bd72fd' : '#010606') };
}

`