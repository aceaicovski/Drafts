// import React from 'react'
import { connect } from 'react-redux';
import buttonClicked from '../../actions/appActions'
import { Link } from 'react-router-dom'
import * as s from "./Header.styling"
import { Container, Button } from '../../globalStyles'


function Header({clicked, buttonClicked, orange, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, headline, lightText, topLine, img, alt, start}) {
    
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
                                    <Button big fontBig orange={orange} onClick={() => buttonClicked(!clicked)}>
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

const mapStateToProps = state => {
    return {
      clicked: state.app.clicked
    }
  }
  
  const mapDispatchToProps = {
    buttonClicked,
  }

 export const ConnectComponent = connect(mapStateToProps, mapDispatchToProps)(Header);
