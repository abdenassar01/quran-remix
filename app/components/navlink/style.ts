import styled from "styled-components";
import { NavLink } from "@remix-run/react";

export const Header = styled.header`
    background-color: #293462;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
`

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: fit-content;
    align-items: center;
`

export const Logo = styled.img`
    width: 40px;
    height: 40px;
`

export const Heading = styled.h2`
    color: white;
    font-family: 'Shrikhand-Regular';
    font-weight: 300;
`

export const Navbar = styled.nav`

`

export const LinksList = styled.ul`
    list-style: none;
    font-family: 'Poppins', sans-serif;
    display: flex;
    gap: 20px;    
    padding-right: 50px;
    font-weight: 700;
`

export const LinkItem = styled.li`
    
`

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
`