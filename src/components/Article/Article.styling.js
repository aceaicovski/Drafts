import styled from 'styled-components'
import { Container } from '../../globalStyles'

export const ArticleSection = styled.div`
	padding: 100px 0;
	background: #75A5AC;
`;

export const ArticleContainer = styled(Container)`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
max-width: 1100px;
	

    ${Container}
`;

export const ArticleTitle = styled.h1`
    color: #fff;
`;

export const ArticleImage = styled.img`
    width: 100%;
    height: 30%;
    object-fit: cover;
    margin: 25px 0;
`;

export const ArticleSummary = styled.p`
    font-size: 18px;
    text-align: justify;
    padding: 25px 0;
`;