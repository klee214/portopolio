import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavItems from './NavItems/NavItems'

import classes from './Navigation.module.css'

const Navigation = props => {

    const navState = useState(['home', 'skills', 'works', 'contact'])[0]

    const navItems = navState.map((item, index) => {

        return (
            <NavItems
                eventKey={item}
                nav={item}
                key={item + index} />
        )
    })

    return (
        <Navbar className={classes.Nav + ' fixed-top'} collapseOnSelect expand="md" bg="dark" variant="dark">
            <div className="container">
                <Navbar.Brand href="/">Kimin Lee</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav defaultActiveKey={navState[0]} className="ml-auto">
                        {navItems}
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Navigation