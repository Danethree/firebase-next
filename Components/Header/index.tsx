import React from 'react'
import {Nav,Logo,Navbar,Option, Menu} from './styles'

const Header = ()=>{
    return(
        <Menu>
        <Nav>
            <Logo>
                User Register.com
            </Logo>
        </Nav>

        <Navbar>
                <Option href = "/">
                    Registrar
                </Option>
                <Option href = "/userdata">
                    Ver dados
                </Option>
            </Navbar>
       
        </Menu>
        
          
    )
}



export default Header;