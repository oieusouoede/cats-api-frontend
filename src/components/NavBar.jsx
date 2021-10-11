import { Menu } from "semantic-ui-react"

function NavBar () {

    return(
        <Menu size='massive' fixed='top' inverted>
            <Menu.Item name='home'/>
            <Menu.Item name='database'/>
            <Menu.Item name='about'/>
        </Menu>
    )
}

export default NavBar