import styled from "styled-components";

export const NavBar = styled.nav`
    width:100%;
    display:flex;
    padding:${props => props.pad && props.pad};
    background:${props => props.color && props.color};
    @media screen and (max-width:484px){
        padding:2% 0;
    } 
`;

export const MobileNavBar = styled.nav`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    position:absolute;
    background-color:white;
    left:0;

    a{
        font-size:30px;
        padding:1% 0;
        color:black;
        transition:all 0.2s ease-in-out;

        &:hover{
            color:orange;
        }
    }
`;

export const NavHeader = styled.header`
    position:sticky;
    z-index:999;
    top:0;
    padding:${props => props.padding && props.padding}; 
    @media screen and (max-width:484px){
        padding:0 0;
    } 
`;

export const LogoSection = styled.section`
    width:${props => props.height ? "20%" :"15%"};;
    display:flex;

    @media screen and (max-width:420px){
        img{
            max-width:120px;
            max-height:40px;
        }        
    } 

    img{
        max-width:100%;
        padding-left:5%;
        height:${props => props.height && "25%"};
        
    }
`;

export const IconSection = styled.section`
    width:85%;
    display:flex;
    justify-content:flex-end;
    align-items:center;

    i{
        font-size:2.3rem;
        padding:0 1.5%;
        cursor:pointer;
        @media screen and (max-width:414px){
        padding:0 3%;
        } 
    }
    
`;
