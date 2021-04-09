import React, { useState, useEffect } from 'react';
import * as s from './SignUp.styling';

const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const SignUp = () => {
  const [values, setValues] = useState({username: "", email: "", password: "", password2: ""});
  const [errors, setErrors] = useState({username: "", email: "", password: "", password2: ""});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChangeRegister = event => {
    console.log(event.target.name);
    console.log(event.target.value);

    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  
  function validate(values) {
    let errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    } else if (values.username.length < 8) {
      errors.username = "Username should be 8 or more characters";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 10) {
      errors.password = "Password should be more than 10 characters";
    }
    if (!values.password2) {
        errors.password2 = "Please confirm the password";
      } else if (values.password !== values.password2) {
        errors.password2 = "This entry does not correspond to the chosen above password. Please verify once again";
      }
    return errors;
  }

  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  }

  
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submit();
      
    }
  }, [errors, isSubmitting])

  function submit() {
    localStorage.setItem("credentials", JSON.stringify(values));
    // document.getElementById("register-field").style.display = "none";
    // document.getElementById("registered-info").innerHTML = "You are registered now! Please log in.";
  }


    return (
        <>
            <s.SignUpSection>
                <s.FormContainer>
                    <s.SignUpFormWrap>
                                      
                        <s.FormOption onSubmit={handleSubmit}>
                            <h1>Sign up</h1>                            
                            <s.FormInput type="text"
                                        name="username"
                                        placeholder="Username"
                                        value={values.username}
                                        onChange={handleChangeRegister}
                                        
                                        />
                            {errors.username && <p>{errors.username}</p>}
                            <s.FormInput type="text"
                                        name="email"
                                        placeholder="E-mail"
                                        value={values.email}
                                        onChange={handleChangeRegister}
                                        />
                            {errors.email && <p>{errors.email}</p>}
                            <s.FormInput type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChangeRegister}
                                        />
                            {errors.password && <p>{errors.password}</p>}
                            <s.FormInput type="password"
                                        name="password2"
                                        placeholder="Retype password"
                                        value={values.password2}
                                        onChange={handleChangeRegister}
                                         />
                            {errors.password2 && <s.PasswordVerification>{errors.password2}</s.PasswordVerification>}                      
                                                       
                            <s.SubmitButton type="submit" fontBig orange>Sign me up</s.SubmitButton>
                          </s.FormOption>
                          <s.Or>OR</s.Or>
                          <s.SocialMediaOption>
                              <s.SocialMediaHeader>Sign in with social network</s.SocialMediaHeader>
                              
                              <s.SubmitButton fontBig>Log in with Facebook</s.SubmitButton>
                              <s.SubmitButton fontBig>Log in with Instagram</s.SubmitButton>
                              <s.SubmitButton fontBig>Log in with LinkedIn</s.SubmitButton>
                          </s.SocialMediaOption>
                        
                    </s.SignUpFormWrap>
                    
                </s.FormContainer>
            </s.SignUpSection>
        </>
    )
}

