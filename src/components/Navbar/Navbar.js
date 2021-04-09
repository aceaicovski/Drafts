import React from 'react';
import {useState, useEffect} from 'react';
import * as s from './Navbar.styling'
import { FaBars, FaTimes} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {Button} from '../../globalStyles'

// import logo from "../../img/logo.png"

export function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (

        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <s.Nav>
                    <s.NavbarContainer>
                        <s.NavLogo to='/'>
                            <s.NavIcon />
                            SPACESHIP
                        </s.NavLogo>
                        <s.HamburgerMenu onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </s.HamburgerMenu>
                        <s.NavMenu onClick={handleClick} click={click}>
                            <s.NavItem>
                                <s.NavLinks to='/'>
                                    Home
                                </s.NavLinks>
                            </s.NavItem>
                            <s.NavItem>
                                <s.NavLinks to='/news'>
                                    News
                                </s.NavLinks>
                            </s.NavItem>
                            <s.NavItem>
                                <s.NavLinks to='/blog'>
                                    Blog
                                </s.NavLinks>
                            </s.NavItem>
                            <s.NavItemBtn>
                                {button ? (
                                    <s.NavBtnLink to='/sign-up'>
                                        <Button orange>SIGN UP</Button>
                                    </s.NavBtnLink>
                                ) : (
                                    <s.NavBtnLink to='/sign-up'>
                                        <Button fontBig orange>SIGN UP</Button>
                                    </s.NavBtnLink>
                                )}
                            </s.NavItemBtn>
                        </s.NavMenu>
                    </s.NavbarContainer>
                </s.Nav>
            </IconContext.Provider>
        </>
    )
}


