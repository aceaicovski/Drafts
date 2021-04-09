import styled from 'styled-components';
import { Container, Button} from '../../globalStyles';


export const SignUpSection = styled.section`
    padding: 100px 0;
    /* color: #fff; */

`;

export const FormContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    ${Container}
`;

export const SubmitButton = styled(Button)`
    margin-top: 10px;    
    padding: 5px 10px;
    height: auto;
    display: inline;
    text-align: center;
    ${Button}
`;


export const SignUpFormWrap = styled.div`
    display: flex;
    flex-direction: row;
	align-items: center;
    justify-content: space-evenly;
    padding: 30px 15px;
    background: #053C44;
    border-radius: 4px;

    @media screen and (max-width: 830px) {
        display: flex;
        flex-direction: column;
    }
`;

export const FormOption = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 15px;
    background: #fff;
    width: 35%;
    border-radius: 4px;
    box-shadow: 5px 10px 18px #888888;

    @media screen and (max-width: 830px) {
        width: 60%;
    }
`;

export const Or = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    background: #fff;
    padding: 10px;
    border-radius: 40%;
    margin: 10px 5px;

`;
export const SocialMediaHeader = styled.h3`
    text-align: center;
`

export const SocialMediaOption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 15px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 5px 10px 18px #888888;
    width: 35%;


    @media screen and (max-width: 830px) {
        width: 60%;
    }
`;

export const FormInput = styled.input`
    width: 90%;
    padding: 5px 5px;
    margin: 7px 0;
`;

export const PasswordVerification = styled.p`
    display: flex;
    max-width: 90%;
`;