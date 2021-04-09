import styled from 'styled-components'
import { Container } from '../../globalStyles'
import { Link } from 'react-router-dom';


export const NewsSection = styled.div`
	padding: 100px 0;
	background: #75A5AC;
`;

export const NewsFlexGrid = styled(Container)`
    max-width: 1100px;
	display: flex;
	margin: 0 auto;
	flex-wrap: wrap;
	align-items: center;
    justify-content: space-evenly;
	flex-direction: row;

    ${Container}
`;

export const ItemLink =styled(Link)`
    text-decoration: none;
    color: #000;
`
export const NewsCartWrap = styled.div`
    width: 300px;
    height: 400px;
    margin: 10px 0;
    padding: 7px;
    border: 1px solid green;
    border-radius: 4px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: justify;
`;

export const NewsCartImage = styled.img`
    width: 100%;
    height: 70%;
    object-fit: cover;
`;
