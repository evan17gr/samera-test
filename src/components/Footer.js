import React from 'react'
import
    {
        BottomFooter, FooterCopyright, FooterNav, FooterRightSide, FooterNavMenu
} from "../styled-components/FooterElements";
import Logo from "../images/Logo Black Underline 1000p (1).jpg";
import { LogoSection } from "../styled-components/HeaderElements";

const Footer = () => {
    return (
        <BottomFooter>
            <FooterNav>
                <LogoSection height>
                    <img src={ Logo}/>
                </LogoSection>
                <FooterRightSide>
                    <FooterNavMenu>
                        <header>
                            <h5>Menu 1</h5>
                        </header>
                        <nav>
                            <a>Nav Item 1</a>
                            <a>Nav Item 2</a>
                            <a>Nav Item 3</a>
                            <a>Nav Item 4</a>
                        </nav>
                    </FooterNavMenu>
                    <FooterNavMenu>
                        <header>
                            <h5>Menu 1</h5>
                        </header>
                        <nav>
                            <a>Nav Item 1</a>
                            <a>Nav Item 2</a>
                        </nav>
                    </FooterNavMenu>
                    <FooterNavMenu flex>
                        <header>
                            <h5>Follow us</h5>
                        </header>
                        <nav>
                                <a><i className="fab fa-facebook-square"></i></a>
                                <a><i className="fab fa-youtube-square"></i></a>
                                <a><i className="fab fa-twitter-square"></i></a>
                            </nav>
                        <form>
                            <h5>Sign up for news &amp; offers</h5>
                            <section>
                                <input></input>
                                <button><i className="fas fa-chevron-right"></i></button>
                            </section>
                        </form>
                    </FooterNavMenu>
                </FooterRightSide>
            </FooterNav>
            <FooterCopyright>
                <p><small>&copy;2021 Samera. All rights reserved </small></p>
            </FooterCopyright>
        </BottomFooter>
    )
}

export default Footer
