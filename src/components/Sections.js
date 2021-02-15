import React from 'react'
import { Main } from '../styled-components/SectionElements'
import Section from './Section';
import HeroImage from "../images/hero-image-page-001.jpg";
import SecondImage from "../images/made-for-your-pet-page-001.jpg";
import Section2 from './Section2';

const Sections = () =>
{ 

    return (
        <Main>
            <Section image2={HeroImage} heading="This is a heading" />
            <Section2/>
            <Section image2={SecondImage} color="#fffffa" padding="15%" heading="This is a heading" />
        </Main>
    )
}

export default Sections
