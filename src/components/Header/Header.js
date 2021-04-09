import React from 'react'
import { Link } from 'react-router-dom'
import * as s from "./Header.styling"
import { Container, Button } from '../../globalStyles'


export function Header({orange, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, headline, lightText, topLine, img, alt, start}) {
    
    return (
        <>
            <s.InfoSection lightBg={lightBg}>
                <Container>
                    <s.InfoRow imgStart={imgStart}>
                        <s.InfoColumn>
                            <s.TextWrapper>
                                <s.TopLine lightTopLine={lightTopLine}>{topLine}</s.TopLine>
                                <s.Heading lightText={lightText}>{headline}</s.Heading>
                                <s.Subtitle lightTextDesc={lightTextDesc}>{description}</s.Subtitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig orange={orange}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </s.TextWrapper>
                        </s.InfoColumn>
                        <s.InfoColumn>
                            <s.ImgWrapper start={start}>
                                <s.Img src={img} alt={alt} />
                            </s.ImgWrapper>
                        </s.InfoColumn>
                    </s.InfoRow> 
                </Container>
            </s.InfoSection>
        </>
    )
};


