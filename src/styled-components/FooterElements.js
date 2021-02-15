import styled from "styled-components";

export const BottomFooter = styled.footer`
    display:flex;
    flex-direction:column;
    padding:0 10%;
    @media screen and (max-width:484px){
        padding:0 0;
    }
`;

export const FooterNav = styled.nav`
    display:flex;
    background:#3c3d3d;
    padding:4% 1% 2% 1%;
    
    @media screen and (max-width:768px){
        flex-direction:column;         
    }
`;

export const FooterCopyright = styled.section`
    background-color:black;
    padding:2%;

    p{
        color:white;
    }
`

export const FooterRightSide = styled.section`
    display:flex;
    justify-content:flex-end;
    width:100%;
    padding-right:2%;
    @media screen and (max-width:600px){
        padding-top:5%;      
    }
`;

export const FooterNavMenu = styled.section`
    display:flex;
    flex-direction:column;
    margin-left:15%;

    @media screen and (max-width:860px){
        margin-left:8%;        
    }

    header{
        padding-bottom:15%;
    }

    nav{
        display:flex;
        flex-direction:${props => props.flex ? "" : "column"};

        a{
            padding-bottom:${props => props.flex ? "7%" : "20%"};
            padding-right:${props => props.flex ? "10%" : ""};
            font-size:15px;
            @media screen and (max-width:860px){
                font-size:13px;        
            }

            @media screen and (max-width:390px){
                margin-right:5%; 
                font-size:13px;       
            }

            i{
                font-size: 30px;
                color:white;
                transition: color .2s ease-in-out;

                &:hover{
                    color:orange;
                }
            }
        }
    }

    form{
        h5{
            padding:5% 0;
        }

        section{
            display:flex;

            input{
                height:35px;
                width:80%;
                @media screen and (max-width:414px){
                    border-radius:0;
                    appearance: none;
                }
            }

            button{
                height:35px;
                width:20%;
            }
        }
    }
`;