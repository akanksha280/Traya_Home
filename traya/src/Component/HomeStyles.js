import styled from 'styled-components';
export const Button=styled.button`

    background: #544F4D;
    ;
    color:white;
    font-weight:bold;
    align-items: center;
    font-size:15px;

&:hover{
    background:white;
	color: #544F4D;
    font-weight:bold;
    width:225px;
}`;
export const NavLinks = styled.a`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
color: #000000;

}
`
