import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  body{
      height:100vh;
  }

  input, button{
      outline:none;
      border:none;
  }

  button{
    background-color:orange;
    color:black;
    transition:all 0.5s ease-in-out;
    
  }

  button:hover{
    background-color:black;
    color:white;
  }

  button, a{
    cursor:pointer;
  }

  h2{
    
  }

  h5{
    color:white;
  }

  @media screen and (max-width:420px){
    h5{
      font-size:12.5px;
    }  
  } 

  @media screen and (max-width:860px){
      p{
        font-size:13px;
      }

      h2{
        font-size:20px;
      }

      h3{
        font-size:15px;
      }
  }

  @media screen and (max-width:420px){
      p{
        font-size:14px;
      }

      h2{
        font-size:22px;
      }

      h3{
        font-size:16px;
      }     
  } 

  a{
    color:#cfcaca;
    transition:all 0.2s ease-in-out;
  }

  a:hover{
    color:orange;
  }
`;
 
export default GlobalStyle;