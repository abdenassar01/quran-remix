import { MAINCOLOR } from '~/utils/colors';
import styled from "styled-components";
import { NavLink } from '@remix-run/react';

export const PageWrapper = styled("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CentredContent = styled("main")`
    width: 90%;
    padding: 20px 0;
    display: flex;
    justify-content: center;
`

export const HeadContent = styled("section")`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Heading = styled("h2")`
    color: ${MAINCOLOR};
    font-size: 30px;
`

export const LinksWrapper = styled("div")`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    position: relative;
    border-radius: 50px;
    width: 320px;
`

export const LinkElement = styled("button")`
    padding: 10px 70px;
    padding-left: 85px;
    border: none;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    background-color: #D9D9D9;
    font-weight: bold;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    color: ${ MAINCOLOR };
    transition: all .3s ease-in;
    position: absolute;
    right: 0;

    &:hover{
        background-color: ${ MAINCOLOR };
        color: white;
    }
`

export const CurvedLinkElement = styled(LinkElement)`
    border-end-end-radius: 200px;
    border-start-end-radius: 0px;
    border-start-start-radius: 50px;
    border-end-start-radius: 50px;
    padding-left: 70px;
    position: absolute;
    width: fit-content;
    left: 0;
    z-index: 2;
`   