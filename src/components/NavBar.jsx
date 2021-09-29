import styled from "styled-components"

const Header = styled.header`

    height: 50px;
    background-color: #2f5061;
    color: #ffffff;
    font-size: 1.75rem;
    display: flex;
    justify-content: center;
    align-items: center;

`

const NavLink = styled.a`

    color: #ffffff;
    margin: 0 1rem;
    text-decoration: none;
    transition: 150ms ease-in-out;

    &:visited {
        color: #ffffff;
    }

    &:hover {
        color: #e57f84;
    }
`

function NavBar () {

    return(
        <Header>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/">Database</NavLink>
            <NavLink href="/">About</NavLink>
        </Header>
    )
}

export default NavBar