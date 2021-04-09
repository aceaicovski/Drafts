import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import * as s from './Footer.elements';

export const Footer = () => {
    return (
        <s.FooterContainer>
            <s.FooterSubscription>
                <s.FooterSubheading>
                    Subscribe to our exclusive newsletter to be the most up-to-date 
                    with the latest spaceship technology news.
                </s.FooterSubheading>
                <s.FooterSubText>
                    You can unsubscribe from this newsletter at any time.
                </s.FooterSubText>
                <s.Form>
                    <s.FormInput name='email' type='email' placeholder='Your Email' />
                    <Button fontBig orange>Subscribe</Button>                    
                </s.Form>
            </s.FooterSubscription>
            <s.FooterLinksContainer>
               <s.FooterLinksWrapper>
                   <s.FooterLinksItems>
                       <s.FooterLinkTitle>About Us</s.FooterLinkTitle>
                       <s.FooterLink to='/sign-up'>How it works</s.FooterLink>
                       <s.FooterLink to='/'>Testimonials</s.FooterLink>
                       <s.FooterLink to='/'>Careers</s.FooterLink>
                       <s.FooterLink to='/'>Investors</s.FooterLink>
                       <s.FooterLink to='/'>Terms of service</s.FooterLink>
                   </s.FooterLinksItems>
                   <s.FooterLinksItems>
                       <s.FooterLinkTitle>Contact Us</s.FooterLinkTitle>
                       <s.FooterLink to='/'>How it works</s.FooterLink>
                       <s.FooterLink to='/'>Testimonials</s.FooterLink>
                       <s.FooterLink to='/'>Careers</s.FooterLink>
                       <s.FooterLink to='/'>Investors</s.FooterLink>
                       <s.FooterLink to='/'>Terms of service</s.FooterLink>
                   </s.FooterLinksItems>
               </s.FooterLinksWrapper>
               <s.FooterLinksWrapper>                
                   <s.FooterLinksItems>
                       <s.FooterLinkTitle>Videos</s.FooterLinkTitle>
                       <s.FooterLink to='/'>How it works</s.FooterLink>
                       <s.FooterLink to='/'>Testimonials</s.FooterLink>
                       <s.FooterLink to='/'>Careers</s.FooterLink>
                       <s.FooterLink to='/'>Investors</s.FooterLink>
                       <s.FooterLink to='/'>Terms of service</s.FooterLink>
                   </s.FooterLinksItems>
                   <s.FooterLinksItems>
                       <s.FooterLinkTitle>Social Media</s.FooterLinkTitle>
                       <s.FooterLink to='/'>How it works</s.FooterLink>
                       <s.FooterLink to='/'>Testimonials</s.FooterLink>
                       <s.FooterLink to='/'>Careers</s.FooterLink>
                       <s.FooterLink to='/'>Investors</s.FooterLink>
                       <s.FooterLink to='/'>Terms of service</s.FooterLink>
                   </s.FooterLinksItems>
               </s.FooterLinksWrapper>
            </s.FooterLinksContainer> 
            <s.SocialMediaWrap>
                <s.SocialLogo to="/">
                    <s.SocialIcon />
                    SPACESHIP
                </s.SocialLogo>                
                <s.SocialIcons>
                    <s.SocialIconLink href="#" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </s.SocialIconLink>
                    <s.SocialIconLink href="#" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </s.SocialIconLink>
                    <s.SocialIconLink href="#" target="_blank" aria-label="Youtube">
                        <FaYoutube />
                    </s.SocialIconLink>
                    <s.SocialIconLink href="#" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin />
                    </s.SocialIconLink>
                </s.SocialIcons>
            </s.SocialMediaWrap>
            <s.WebsiteRights>Spaceship  2021</s.WebsiteRights>            
        </s.FooterContainer>
        
    )
}

