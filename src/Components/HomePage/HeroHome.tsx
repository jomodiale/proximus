import React from 'react';
import {Theme} from '../../theme';
import styled from "styled-components";
import { HeroConfig } from '../../config/HomeConfig';
import { useNavigate } from 'react-router-dom';

const HeroHome: React.FC = ()=>{
    const navigate = useNavigate();
    return <Wrapper>
        <TextWrapper>
        <Title>{HeroConfig.title}</Title>
        <SubTitle>{HeroConfig.description}</SubTitle>
        <Button onClick = {()=> navigate(HeroConfig.onClickButtonRedirect)}>{HeroConfig.buttonText}</Button>
        </TextWrapper>
    </Wrapper>
};



const Wrapper = styled.div`
height: 553px;
color: white;
width: 100%;
background-color: aliceblue;
font-family: inherit;
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 120px;
background: url(${HeroConfig.background}) no-repeat;
padding-bottom: 4rem;
background-position: center top;
background-size: cover;
@media (max-width: 480px) {
    padding-left: 10px;
   width: 100vw;
   justify-content: flex-start;
   padding-top: 80px;
}
`

const TextWrapper = styled.div`
width: 450px;
color: white;

`


const Title = styled.h1`
font-weight: 400;
font-size: 56px;
line-height: 66px;
color: ${Theme.navbar};
margin-bottom: 20px;
@media (max-width: 480px) {
    font-size: 40px;
}
`


const SubTitle = styled.p`
font-weight: 300;
font-size: 18px;
line-height: 28px;
color: ${Theme.navbar};
margin-bottom: 20px;
@media (max-width: 480px) {
    width: 80%;
}
`

const Button = styled.button`
padding: 8px 16px;
height: 40px;
background-color: ${Theme.button};
box-shadow: 0px 7px 16px -4px rgb(92 45 145 / 16%);
border: 2px solid transparent;
border-radius: 0.3rem 0.3rem 2.3rem 0.3rem;
padding: 0.5rem 1.6rem;
font-family: Proximus-Bold;
font-style: normal;
font-size: 17px;
line-height: 24px;
color: #FFFFFF;
border: none;
cursor: pointer;
transition: 0.2s ease-in-out;
&:hover {
    background-color: ${Theme.button}CC;
}

`

export default HeroHome;