import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

import './NavItems.css'

const NavItems = props => {

    return (
        <LinkContainer
            to={'/' + props.nav}>
            <Nav.Link eventKey={props.eventKey} className='lead pl-2 mr-3'>{props.nav}</Nav.Link>
        </LinkContainer>
    )
}

export default NavItems