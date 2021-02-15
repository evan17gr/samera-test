import React from 'react'
import { MainSection } from '../styled-components/SectionElements';

const Section = ({color, padding,image2,heading}) => {
    return (
        <MainSection color={color} padding={padding}>
            <img src={image2}/>
            <figcaption>
                <h2>{ heading}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, error sed? Eveniet modi ut aliquid illum obcaecati. Autem vitae dignissimos quo veritatis omnis corporis aspernatur dicta placeat cupiditate doloremque hic culpa quidem quos repellendus quia saepe aperiam beatae, suscipit velit!</p>
                <button>Button Text</button>
            </figcaption>
        </MainSection>
    )
}

export default Section;
