import React, { useState } from 'react'
import * as s from './AddBlogPost.styling'
import { addBlogPost } from '../../Requests/addBlogPost';



export const AddBlogPost = () => {
const [ values, setValues ] = useState({title: "", imageUrl: "", body: ""});

const handleChange = event => {
    console.log(event.target.name);
    console.log(event.target.value);

    setValues({
        ...values,
        [event.target.name]: event.target.value
      });
};

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);

    addBlogPost(values)
        .then((response) => {
          console.log("response:", response);          
      })
        .catch((error) => console.log("error:", error));
    
    document.getElementById("title").value = "";
    document.getElementById("imageUrl").value = "";
    document.getElementById("body").value = "";

    
}

    return (
        <>
            
            <s.AddBlogSection>
                <s.AddBlogWrap>
                    <s.InfoSection>
                        <s.Header>Blog Post</s.Header>
                        <s.AddBlogSubheading>
                                In this section you have the possibility to share your knowledge on the various space exploration topics by creating your own blog post. Please fill in the form below in order to post your own article
                        </s.AddBlogSubheading>
                        <s.AddSectionPurposeExplanation>(This section is created just for the purpose of showing how the post request was made to the server and displays the response in the console)</s.AddSectionPurposeExplanation>
                    </s.InfoSection>
                    <s.AddBlogPostForm onSubmit={handleSubmit}>
                        <s.InputLabel htmlFor="title">Title of the blog post:</s.InputLabel>
                        <s.InputField id="title"
                                    type="text" 
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange} />                        
                        <s.InputLabel htmlFor="imageUrl">Image link:</s.InputLabel>
                        <s.InputField  id="imageUrl"
                                    type="text" 
                                    name="imageUrl"
                                    value={values.imageUrl}
                                    onChange={handleChange}/>
                        <s.InputLabel htmlFor="body">Your post content should be typed here:</s.InputLabel>
                        <s.TextareaField id="body" 
                                        type="text" 
                                        name="body"
                                        value={values.body}
                                        onChange={handleChange}>

                        </s.TextareaField>
                        <s.SubmitButton>Submit</s.SubmitButton>
                    </s.AddBlogPostForm>
                </s.AddBlogWrap>
            </s.AddBlogSection>
        </>
    )
};


