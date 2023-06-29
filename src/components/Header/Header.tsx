import { ButtonIcons, ContentIcon, HeaderContainer, LinkItem, ListItem, Logo, MenuNav, Navbar } from "./HeaderStyle"
import { AiOutlineUser } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { BsFillMoonStarsFill } from 'react-icons/bs' 

const Header = () => {
   return (
    <HeaderContainer>
        <Logo>
            <span>Nosso</span><span>Forro</span>
        </Logo>

        <Navbar>
            <MenuNav>
                <ListItem>
                    <LinkItem href="#hero">Home</LinkItem>
                </ListItem>
                <ListItem>
                    <LinkItem href="#sobre">Sobre</LinkItem>
                </ListItem>
                <ListItem>
                    <LinkItem href="#evento">Eventos</LinkItem>
                </ListItem>
                <ListItem>
                    <LinkItem href="#novidade">Novidades</LinkItem>
                </ListItem>
                <ListItem>
                    <LinkItem href="#contato">Contato</LinkItem>
                </ListItem>
            </MenuNav>
        </Navbar>

        <ButtonIcons>
            <ContentIcon>
                <AiOutlineUser size={22} />
            </ContentIcon>

            <ContentIcon>
                <BsFillMoonStarsFill size={22} />
            </ContentIcon>

            <ContentIcon>
                <FaBars size={22} />
            </ContentIcon>
        </ButtonIcons>
    </HeaderContainer>
  )
}

export default Header