import styled from "styled-components";

export const Main = styled.main`
    padding:0 10%;
    min-height:100%;
    @media screen and (max-width:484px){
        padding:0 0;
    }
`;

export const MainSection = styled.section`
    width:100%;
    background:${props => props.color ? props.color : ""};
    display:flex;
    @media screen and (max-width:768px){
        flex-direction:column;             
    }
    

    figcaption{
        display:flex;
        flex-direction:column;
        justify-content:center;
        position:relative;
        padding-top:5%;
        margin-left:10%;
        margin-bottom:${props => props.padding ? "5%" : "0"};

        h2, p{
            padding-bottom:5%;
        }

        p{
            padding-right:15%;
        }

        button{
            width:150px;
            height:50px;
        }

        @media screen and (max-width:860px){
            button{
                width:30%;
                height:35px;
                margin-bottom:${props => props.padding ? "0%" : "5%"};
            }
        }
    }

    img{
        transform:rotate(90deg);
        max-width:100%;
        width:${props => props.padding ? "25%" : "40%"};
        margin-left:${props => props.padding ? "20%" : "5%"};
        @media screen and (max-width:420px){
            margin-left:10%;
        } 
    }  
`;

export const MidSection = styled.section`
    display:flex;
    flex-direction:column;
    background-color:orange;
    padding:7% 0;

    header{
        display:flex;
        justify-content:center;
        padding-bottom:8%;

        @media screen and (max-width:768px){
            padding-bottom:5%;          
        }

        h2{
            position:relative;

            &:after{
                position: absolute;
                content: '';
                height: 3px;
                bottom: -15px;
                margin: 0 auto;
                left: 0;
                right: 0;
                width: 40%;
                background: white; 
            }
        }
    }

    article{
        display:flex;
        justify-content:center;
        text-align:center;
        @media screen and (max-width:768px){
            flex-direction:column;           
        }

        section{
            padding:0 5%;

            @media screen and (max-width:860px){
                padding:0 3%;        
            }

            h3{
                padding-bottom:8%;
                @media screen and (max-width:768px){
                padding:4%;          
                }
            }
        }
    }
`;