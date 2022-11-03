import React, { useContext, useEffect, useState } from "react";
import { Theme } from "../../theme";
import styled from "styled-components";
import HeaderLogo from "../../assets/HeaderLogo.svg";
import MailIcon from '../../assets/sampleImages/Mail.png';
import ContactIcon from '../../assets/sampleImages/ContactIcon.svg';
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/feather/search";
import HomeSearchBox from "./HomeSearchBox";
import { x } from "react-icons-kit/feather/x";
import Fade from "@mui/material/Fade";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderConfig } from "../../config/HomeConfig";
import Popover from "@mui/material/Popover";
import ContextForm from "../CustomContext/ContextForm";
import { CustomContextContext } from "../CustomContext/CustomContextContext";
import HomeResultsSearchBox from "./HomeResultsSearchBox";

const Header: React.FC = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {getProfile} = useContext(CustomContextContext)
  const onSearchPage = location.pathname.includes("search");
  const toggleSearchBox = () => {
    if (onSearchPage) {
      const input = document.querySelector(".search-box input");
      if (input instanceof HTMLElement) {
        input.focus();
      }
      return;
    }
    setOpenSearch(!openSearch);
  };

  useEffect(() => {
    if (openSearch) {
      const input = document.querySelector(".home-search-box input");
      if (input instanceof HTMLElement) {
        input.focus();
      }
    }
  }, [openSearch]);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Wrapper>
        <Logo src={HeaderLogo} onClick={() => navigate("/home")} style={{ color: Theme.primaryText, cursor: "pointer" }}/>
        <LeftWrapper>
        {HeaderConfig.map((item) => {
              return (
                <NavigationLink key={item.title} to={item.redirectTo}>
                  {item.title}
                </NavigationLink>
              );
            })}
        </LeftWrapper>
        <RightWrapper>
          <LinkWrapper>
            {/* <Divider/> */}
            <IconsWrapper>
            <ProxyMail>

            <li style={{ listStyle: 'none', width: '20px', fontSize: '10px', margin: '7px'}}>
              <a href="https://www.proximus.be/login/webmail/" style={{ textDecoration: 'none', color: '#5c2d91'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>Webmail</title><path fill='#5c2d91' d="M24.8,6H10.11A6.12,6.12,0,0,0,4,12.11V22.8A3.2,3.2,0,0,0,7.2,26H21.89A6.12,6.12,0,0,0,28,19.89V9.2A3.2,3.2,0,0,0,24.8,6Zm.67,15.87-5.24-6L26,9.64V19.89A4,4,0,0,1,25.47,21.87ZM24.79,8l-8,8.73a1,1,0,0,1-1.48,0l-7.42-8A4.11,4.11,0,0,1,10.11,8ZM6,22.48V12.11a4.07,4.07,0,0,1,.5-1.93l5.27,5.71ZM7.33,24l5.8-6.63.66.71a3,3,0,0,0,4.42,0l.66-.71,5.23,6a4.1,4.1,0,0,1-2.21.66Z"></path></svg>
              <span>Mail</span>
              </a>
            </li>
            <li style={{ listStyle: 'none', width: '17px', fontSize: '10px' , margin: '10px' }}>
              <a href="/support/en/id_cr_contact/personal/support/contact-our-customer-service.html" style={{ textDecoration: 'none', color: '#5c2d91'}}><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.72 38.49" role="img" aria-labelledby="icon-svg-contact" focusable="false"><title id="icon-svg-contact">Contact</title><path fill='#5c2d91' d="m10.27 38.49c-0.86 0-1.72-0.17-2.55-0.5-1.67-0.68-2.97-1.98-3.66-3.64l-1.72-4.15-1.79-4.16c-0.71-1.66-0.73-3.49-0.06-5.16s1.96-2.98 3.62-3.68l1.9-0.81c0.53-0.22 1.11-0.23 1.64-0.01s0.95 0.63 1.17 1.15l1.33 3.16c0.46 1.09-0.05 2.35-1.14 2.81l-1.94 0.82c-0.07 0.03-0.1 0.11-0.07 0.18l2.67 6.32c0.02 0.04 0.05 0.07 0.08 0.08 0.02 0.01 0.06 0.02 0.11 0l1.95-0.83c0.53-0.22 1.11-0.23 1.64-0.01 0.53 0.21 0.95 0.63 1.17 1.15l1.32 3.11c0.22 0.53 0.23 1.11 0.01 1.64s-0.62 0.95-1.15 1.17l-1.91 0.81c-0.84 0.37-1.73 0.55-2.62 0.55zm-3.42-20.28c-0.02 0-0.04 0-0.06 0.01l-1.9 0.81c-1.17 0.49-2.07 1.41-2.54 2.59-0.47 1.17-0.46 2.46 0.04 3.63l1.79 4.17 1.73 4.16c0.49 1.17 1.4 2.08 2.58 2.56 1.17 0.48 2.46 0.47 3.63-0.02l1.91-0.81c0.07-0.03 0.11-0.12 0.08-0.19l-1.33-3.12c-0.02-0.05-0.05-0.07-0.08-0.08-0.02-0.01-0.06-0.02-0.11 0l-1.95 0.83c-0.53 0.22-1.11 0.23-1.64 0.01s-0.95-0.63-1.17-1.15l-2.67-6.32c-0.46-1.09 0.05-2.35 1.14-2.82l1.94-0.82c0.07-0.03 0.11-0.12 0.08-0.19l-1.34-3.16c-0.02-0.05-0.05-0.07-0.08-0.08-0.01 0-0.03-0.01-0.05-0.01z"></path><path d="m35.72 27.27c-0.31 0-0.6-0.14-0.79-0.39l-4.88-6.38c-0.06-0.07-0.14-0.11-0.23-0.11h-13.82c-2.33 0-4.22-1.89-4.22-4.22v-13.88c0-1.26 1.03-2.29 2.29-2.29h18.43c2.33 0 4.22 1.89 4.22 4.22v22.05c0 0.43-0.27 0.81-0.68 0.95-0.1 0.04-0.21 0.05-0.32 0.05zm-21.65-25.27c-0.16 0-0.29 0.13-0.29 0.29v13.87c0 1.23 1 2.22 2.22 2.22h13.82c0.71 0 1.39 0.34 1.82 0.9l3.08 4.04v-19.1c0-1.22-0.99-2.22-2.22-2.22h-18.43z"></path><path d="m19.81 9.38c0.31 0.31 0.47 0.68 0.47 1.12s-0.16 0.81-0.47 1.12-0.69 0.47-1.12 0.47-0.81-0.16-1.12-0.47-0.47-0.68-0.47-1.12 0.16-0.81 0.47-1.12 0.69-0.47 1.12-0.47 0.81 0.16 1.12 0.47z"></path><path d="m25.37 9.38c0.31 0.31 0.47 0.68 0.47 1.12s-0.16 0.81-0.47 1.12-0.69 0.47-1.12 0.47-0.81-0.16-1.12-0.47-0.47-0.68-0.47-1.12 0.16-0.81 0.47-1.12 0.69-0.47 1.12-0.47 0.81 0.16 1.12 0.47z"></path><path d="m30.94 9.38c0.31 0.31 0.47 0.68 0.47 1.12s-0.16 0.81-0.47 1.12-0.69 0.47-1.12 0.47c-0.44 0-0.81-0.16-1.12-0.47s-0.47-0.68-0.47-1.12 0.16-0.81 0.47-1.12 0.69-0.47 1.12-0.47 0.81 0.16 1.12 0.47z"></path></svg><span style={{textAlign: 'center'}}>Contact</span></a>
            </li>
            </ProxyMail>
            
              <IconContainer
                style={{ color: Theme.primaryText, cursor: "pointer", height: '73px' }}
                onClick={() => toggleSearchBox()}
              >
                {openSearch && !onSearchPage ? (
                  <Icon icon={x} size={20} />
                ) : (
                  <Icon icon={search} size={20} />
                )}
              <span style={{fontSize: '10px', textAlign: 'center'}}>Search</span></IconContainer>
              <LoginIcon>
              <ProxyLink href="https://www.proximus.be/login" aria-label="MyProximus" id="rs-d-account" style={{fontSize: '14px', textDecoration: 'none'}}>
                <span>MyProximus</span>
              </ProxyLink>
              </LoginIcon>
              <ProfileIconContainer
                style={{ color: Theme.primaryText, cursor: "pointer" }}
                aria-describedby={id}
                onClick={(event)=>handleClick(event)}
              >
                <ProfileAvatar src = {getProfile().profile} alt = {'profile pic'}/>
                <ProfileName>{getProfile().name.split(' ').slice(0, -1).join(' ')}</ProfileName>
              </ProfileIconContainer>
              <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <ContextForm/>
                </Popover>
            </IconsWrapper>
          </LinkWrapper>
        </RightWrapper>
      </Wrapper>
      <Fade in={openSearch && !onSearchPage}>
        <SearchContainer>
          <SearchBoxContainer>
            {!onSearchPage && 
            <HomeSearchBox toggleSearchBox={toggleSearchBox} />
            }
          </SearchBoxContainer>
        </SearchContainer>
      </Fade>
    </>
  );
};

const Wrapper = styled.header`
  height: 80px;
  border-bottom: 0.1rem solid rgba(0,0,0,.08);
  background-color: white;
  display: flex;
  padding: 0px 40px;
  align-items: center;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.01em;
`;

 const ProxyMail = styled.ul`
  list-style: none;
  display: flex;
  margin: 10px;
 `

 const LoginIcon = styled.div`
 margin-top: 27px;
 margin-left: -15px;
 `

 const ProxyLink = styled.a`
 color: #5c2d91;
 background: rgba(92,45,145,.16);
 box-shadow: 0px 7px 16px -4px rgb(92 45 145 / 16%);
 border: 2px solid transparent;
 border-radius: 0.3rem 0.3rem 2.3rem 0.3rem;
 padding: 0.8rem 2rem;
 margin-left: 2rem;
 `

const Logo = styled.img`
  margin-left: 80px;
  height: 50px;
  width: 150px;
  object-fit: contain;
  @media only screen and (min-width: 1550px) {
    margin-left: 200px;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 30px;
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 1500px) {
    margin-left: 250px;
  }
`;


const LinkWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  @media (max-width: 1000px) {
    width: auto;
  }
`;

const NavigationLink = styled(Link)`
  color: ${Theme.navbarText};
  text-decoration: none;
  padding: 20px;
  font-size: 1.3rem;
  opacity: 1;
  transition: 0.2s ease-in-out all;
  &:hover {
    opacity: 0.7;
    color: ${Theme.primaryText};
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Divider = styled.div`
  height: 50px;
  border-right-width: 2px;
  width: 1px;
  height: 48px;
  background: #e5e8e8;
  @media (max-width:1000px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  height: 150px;
  box-shadow: 0px 6px 16px rgba(229, 232, 232, 0.75);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 100px;
  position: absolute;
  background-color: white;
  justify-content: center;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: -120px;
`;

const IconContainer = styled.button`
background: none;
border: 0px;
width: 40px;
transition: 0.2s ease-in-out all;
&:hover{
  transform: scale(0.95);
}
&:active{
  transform: scale(0.85);
}
`

const ProfileName = styled.span`
font-size  : 16px;
font-weight: 400;
font-family: inherit;
margin-left: 15px;
color : ${Theme.headerIconColor};
text-overflow: ellipsis;
`


const ProfileIconContainer = styled.button`
  background: none;
  border: 0px;
  margin-left: 20px;
  width: 90px;
  display: flex;
  align-items: center;
  transition: 0.2s ease-in-out all;
  &:hover{
  transform: scale(0.95);
}
&:active{
  transform: scale(0.85);
}

`

const SearchBoxContainer = styled.div`
  width: 50%;
  max-width: 800px;
  min-width: 500px;
  @media (max-width: 480px) {
    min-width: 80vw;
  }
`;


const ProfileAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 24px;
  object-fit: cover;
`

export default Header;
