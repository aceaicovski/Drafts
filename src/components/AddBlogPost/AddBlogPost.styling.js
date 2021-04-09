import styled from 'styled-components'
import { Container, Button } from '../../globalStyles'


export const Header = styled.h1`
    text-align: center;
    margin-bottom: 15px;
`

export const AddBlogSection = styled.div`
	padding: 100px 0;
	
`;

export const AddBlogWrap = styled(Container)`    
	display: flex;	
    flex-direction: row;
	align-items: center;
    justify-content: space-between;
    border: 2px solid #053C44;
    border-radius: 6px;
    padding: 20px 15px;
	

    ${Container}
`;

export const InfoSection = styled.div`
    max-width: 50%;
    
`;

export const AddBlogPostForm = styled.form`
    width: 40%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const AddBlogSubheading = styled.h2`
    color: #F2994A;
`;

export const AddSectionPurposeExplanation = styled.p`
    color: red;
    font-style: italic;
`;

export const InputField = styled.input`
    width: 90%;
    margin-bottom: 15px;
    padding: 3px 5px;
`;

export const TextareaField = styled.textarea`
    width: 90%;
    min-height: 50%;
    margin-bottom: 15px;
    padding: 3px 5px;
`;

export const InputLabel = styled.label`

`;

export const SubmitButton = styled(Button)`
    width: 90%;

`