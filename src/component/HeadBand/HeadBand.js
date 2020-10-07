import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group';

import Container from 'react-bootstrap/Container'

import classes from './HeadBand.module.css'
import './HeadBand.css'

const HeadBand = props => {

    const [headState, setHeadState] = useState(false);

    useEffect(() => {
        if (!headState) {
            setHeadState(true)
        }
    }, [headState])


    const [scrollState, SetScrollStateSet] = useState('80px')

    useEffect(() => {
        const handleScroll = (event) => {
            let _timeOut = null
            const scrollY = window.scrollY

            if (_timeOut) {
                clearTimeout(_timeOut)
            }

            _timeOut = setTimeout(() => {

                if (Math.round(scrollY) === 0) {
                    return SetScrollStateSet(`80px`)
                }
                SetScrollStateSet(`${Math.round(scrollY)}px`)
            }, 80);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div>
            <CSSTransition
                in={headState}
                timeout={300}
                classNames="aalert"
                unmountOnExit
                onEnter={() => setHeadState(true)}  >
                <div
                    style={{ padding: '0', border: '0px', fontFamily: 'Raleway sans-serif' }}
                    variant="primary"
                    onClose={() => setHeadState(false)}>

                    <section style={{ background: `url('${props.information.src}')` }} className={classes.Home_heading}>
                        <div style={{ overflow: 'hidden' }} className={classes.Dark_overlay}>
                            <Container style={{ marginTop: scrollState }} className="pt-5 paragraph">
                                <h1 className="display-1">{props.information.title}</h1>
                                <p className="lead display-4 d-none d-md-block">{props.information.content}</p>
                            </Container>
                        </div>
                    </section>

                </div>
            </CSSTransition>
        </div>
    )
}

export default React.memo(HeadBand)