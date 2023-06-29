import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 10vh;
  background-color: ${({ theme }) => theme.BG.color };
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 12;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, .6);
`
export const Logo = styled.div`
    padding: 1rem;

    > span {
        font-size: 1.7rem;
        font-weight: bold;
        letter-spacing: 1px;
    }

    >span:first-child {
        color: crimson;
    }
    > span:last-child {
        color: goldenrod;
    }
`

export const Navbar = styled.nav`
   
    
`


export const MenuNav = styled.ul`
    display: flex;
    gap: 1rem;
    list-style: none;
    
`

export const ListItem = styled.li`
    padding: 1rem;
`

export const LinkItem = styled.a`
    font-size: 1.2rem;
    color: #222;
    cursor: pointer;
    transition: all .4s;
    text-decoration: none;

    &:hover {
        color: #555;
    }
`


export const ButtonIcons = styled.div`
    display: flex;
    gap: 1.5rem;
`

export const ContentIcon = styled.div`
    padding: 1rem;
    cursor: pointer;

`

// export const Navbar = styled.nav``