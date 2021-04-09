import styled from 'styled-components';
import { Container, Button} from '../../globalStyles';


export const SignUpSection = styled.section`
    padding: 100px 0;
    /* color: #fff; */

`;

export const FormContainer = styled(Container)`
    display: flex;
    justify-content: center;
    
    ${Container}
`;

export const SubmitButton = styled(Button)`
    margin-top: 10px;
    text-align: center;
    width: 90%;
`;

export const SignUpFormWrap = styled.div`
    display: flex;
    flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
    justify-content: space-evenly;
    min-width: 600px;    
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
    /* height: 280px; */
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

export const SocialMediaOption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 15px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 5px 10px 18px #888888;

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
    color: #fff;
    margin-top: 25px;
`;