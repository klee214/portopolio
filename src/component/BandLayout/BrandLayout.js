import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import classes from './BrandLayout.module.css'

const BrandLayout = props => {

    let height = null
    let margin = null

    if (props.height) {
        height = props.height
        margin = 'mt-5'
    }

    return (
        <section style={{ height: `${height}`, background: `url('${props.information.src}')` }} className={classes.Home_heading + " p-5"}>
            <div className={classes.Dark_overlay}>
                <Row className={margin}>
                    <Col>
                        <Container className={"pt-5 " + margin}>
                            <h1>{props.information.title}</h1>
                            <p className="d-none d-md-block">{props.information.content}</p>
                        </Container>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default BrandLayout