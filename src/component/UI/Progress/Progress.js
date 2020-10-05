import React, { useState } from 'react'
import { SwitchTransition, CSSTransition } from "react-transition-group";

import ProgressBar from './ProgrssBar/Progressbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import './Progress.css'

const Progress = (props => {

    const [mode, setMode] = useState("out-in");
    const [state, setState] = useState(0);

    const [skillSetState, setSkillSetState] = useState([
        {
            'type': 'web programming',
            'mern': {
                title: 'MERN Stack',
                percent: 90
            },
            'html': {
                title: 'HTML',
                percent: 90
            },
            'css': {
                title: 'CSS',
                percent: 80
            },
            'angular': {
                title: 'Angular',
                percent: 75
            },
            'jquery': {
                title: 'JQuery',
                percent: 75
            }
        },
        {
            'type': 'programming languages',
            'js': {
                title: 'JAVA SCRIPT',
                percent: 95
            },
            'cpp': {
                title: 'C++',
                percent: 90
            },
            'java': {
                title: 'JAVA',
                percent: 90

            }

        },
        {
            'type': 'database skills',
            'sql': {
                title: 'SQL',
                percent: 90
            },
            'mongodb': {
                title: 'MONGODB',
                percent: 90
            },
            'pl/sql': {
                title: 'PL/SQL',
                percent: 90
            },
            'rpgle': {
                title: 'RPGLE',
                percent: 80
            }
        }
    ])

    const progressCom = skillSetState.map((set, index) => {
        let barCom = []

        for (const key in set) {
            if (key !== 'type') {
                barCom.push(<ProgressBar key={key} now={set[key].percent} title={set[key].title} />)
            } else {
                barCom.push(<h4 className='text-dark text-uppercase' key={'p-' + key}>{set[key]}</h4>)
            }
        }

        return (
            <Row className='bg-light progressRow border rounded my-5 py-3' key={'pro-' + index}>
                <Col md={12}>
                    {barCom}
                </Col>
            </Row>
        )
    })

    const clickHandler = () => {
        if (state === 0) {
            setState(1)
        } else if (state === 1) {
            setState(2)
        } else if (state === 2) {
            setState(0)
        }
    }

    let changingBlock = progressCom[0]

    if (state === 0) {
        changingBlock = progressCom[0]
    } else if (state === 1) {
        changingBlock = progressCom[1]
    } else if (state === 2) {
        changingBlock = progressCom[2]
    }

    console.log('progress render')

    return (
        <Container className='changingBlock mt-5'>
            <div className="loader">Loading...</div>
            <div
                className="main">
                <SwitchTransition mode={mode}>
                    <CSSTransition
                        key={state}
                        addEndListener={(node, done) => {
                            node.addEventListener("transitionend", done, false);
                        }}
                        classNames="fade">
                        <div>
                            <div className='btnn' onClick={clickHandler}>
                                {changingBlock}
                            </div>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </Container>
    )

})

export default React.memo(Progress)