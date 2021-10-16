import { Menu } from "semantic-ui-react"
import { NavLink } from "react-router-dom"

function NavBar () {

    return(
        <Menu size='massive' fixed='top' inverted>
            <Menu.Item
            as={NavLink} to='/home'
             name='home'/>
            <Menu.Item
            as={NavLink} to='/database'
             name='database'/>
            <Menu.Item
            as={NavLink} to='/about'
             name='about'/>
        </Menu>
    )
}

export default NavBar