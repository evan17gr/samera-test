import React,{useState} from 'react';
import Logo from "../images/Logo Black Underline 1000p (1).jpg";
import
    {
        IconSection,
        LogoSection,
        NavBar,
        NavHeader,
        MobileNavBar

    } from '../styled-components/HeaderElements';

const Header = () =>
{
    const [menuBar, setMenuBar] = useState( false );
    const [changeBackground, setChangeBackground] = useState( false );

    const changeTheBackground = () =>
    {
        if ( window.scrollY > 0 )
        {
            setChangeBackground( true );
        }
        else
        {
            setChangeBackground( false );
        }
    }

    window.addEventListener( "scroll", changeTheBackground );

    return (
        <NavHeader padding={ changeBackground ? "0% 0%" : "2% 0"}>
            <NavBar  color={changeBackground ? "white" : ""} pad={changeBackground ? "2% 0" : "0% 0%"}>
                <LogoSection>
                    <img src={Logo}/>
                </LogoSection>
                <IconSection>
                    <i className="fas fa-search"></i>
                    <i onClick={ () => setMenuBar(!menuBar)} className={menuBar ? "fas fa-times" : "fas fa-bars"}></i>
                </IconSection>
            </NavBar>
            {menuBar &&
                <MobileNavBar>
                    <a>Home</a>
                    <a>Services</a>
                    <a>About</a>
                    <a>Contact Us</a>
                </MobileNavBar>
            
            }
        </NavHeader>
    )
}

export default Header
