import React from 'react';
import {Theme} from '../../theme';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { NavBarConfig } from '../../config/HomeConfig';


const NavBar: React.FC = ()=>{
    if(NavBarConfig.length > 0)
    {
        return <Wrapper>
        <NavigationWrapper>
        {NavBarConfig.map((item) => {
              return (
                <NavigationLink key={item.title} href={item.redirectTo}>
                  { item.title ==='Personal' ? <p style={{color: Theme.primaryText, fontWeight: 'bold'}}>{item.title}</p> : <p>{item.title}</p>}
                </NavigationLink>
              );
            })}
            <Dropdown>
            <select style={{border:'none', color: Theme.primaryText, fontWeight: 800}}>
                <option value="EN">EN</option>
                <option value="FR">FR</option>
                <option value="NL">NL</option>
                <option value="DE">DE</option>
            </select>
            </Dropdown>
        </NavigationWrapper>
    </Wrapper>
    }
    else{
        return null
    }

    
};

const Wrapper = styled.nav`
font-family: Proximus-Regular;
height: 20px;
width: 100%;
background-color: ${Theme.navbar};
`
const Dropdown = styled.div`
font-size: 14px;
`

const NavigationWrapper = styled.ul`
margin-left: 980px;
display: flex;
color : black;
width: 25%;
min-width: 200px;
height: 40px;
justify-content: space-around;
align-items: center;
@media (max-width: 480px) {
    margin-left: 0px;
    padding-left: 0;
    width: 100%;
    min-width: auto;
}
`

const NavigationLink = styled.a`
color: ${Theme.navbarText};
font-size: 14px;
text-decoration: none;
opacity: 0.8;
transition: 0.2s ease-in-out all;
&:hover{
    opacity: 1;
    color: ${Theme.primaryText};
}
&.active{
    opacity: 1;
}
`

export default NavBar;


