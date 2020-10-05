import React, { useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const Button = props => {

    const stylingState = useState({
        color: props.color,
        size: props.size,
    })[0]

    return (
        <LinkContainer to="#">
            <button className={'btn ' + stylingState.color + ' ' + stylingState.size + ' mt-3'}>{props.title}</button>
        </LinkContainer>
    )
}

export default Button