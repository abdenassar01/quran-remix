import { Header, LogoWrapper, Logo, Heading, 
  Navbar, LinksList, LinkItem, StyledNavLink
 } from "./style"

const NavBar = () => {
  
  return (
    <Header>
      <LogoWrapper to='/'>
        <Logo src="https://i.imgur.com/WzmrQug.png" />
        <Heading>Muslim</Heading> 
      </LogoWrapper>
      <Navbar>
        <LinksList>
          {
          ['quran', 'azkar', 'sunnah', 'about'].map(item => (
            <LinkItem key={item}>
              <StyledNavLink to={`/${item}`}>{item}</StyledNavLink>
            </LinkItem>
          ))
          }
        </LinksList>
      </Navbar>
    </Header>
  )
}

export default NavBar