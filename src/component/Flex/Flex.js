import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import FlexItm from './FlexItm/FlexItm'
import { CSSTransition } from 'react-transition-group';

import './Flex.css'

const Flex = props => {
    const eachRow = props.information.map(info => (
        <FlexItm
            info={info}
            key={info.id} />
    ))
    return (
        <CSSTransition
            in={props.show}
            timeout={300}
            classNames="aalert2">
            <div
                className={props.alwayShow ? null : 'aalert2'}
                style={{ fontFamily: 'Raleway sans-serif' }}
                variant="primary">

                <section id="home-icons" className="py-3">
                    <Container>
                        <Row>
                            {eachRow}
                        </Row>
                    </Container>
                </section>

            </div>
        </CSSTransition>
    )
}
export default Flex