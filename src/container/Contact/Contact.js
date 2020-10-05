import React, { useState } from 'react'

import BrandLayout from '../../component/BandLayout/BrandLayout'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import FooterBand from '../../component/Footer/FooterBand/FooterBand'

import logo from '../../assets/icon/KiminLeeLogo.png'

import './Contact.css'


const Contact = props => {

    const skillBandState = useState({
        content: 'Thank you for having your interest in me! I am really looking forward to your call. Please contact me via email or phone!',
        title: 'Contact Me',
        src: 'https://vividcomm.files.wordpress.com/2019/12/gettyimages-638678352-c-68c1c89.jpg'
    })[0]

    return (
        <div>
            <BrandLayout height={'300px'} information={skillBandState} />
            <Container>
                <Row
                    className='py-5'>
                    <Col md={7}>
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe title="myFrame" width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=80%20antibes&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                <a href="https://www.whatismyip-address.com/divi-discount/">My location</a>
                            </div>
                        </div>
                    </Col>
                    <Col className='contactContainer' md={5}>
                        <div className='bg-white border border-black-25 rounded text-right pr-3'>
                            <div className='overlayContact text-light text-center '>
                                <img className='d-none d-md-block' alt="...img" style={{width: '100%', minHeight:'400px'}} src={logo} />
                            </div>
                            <h3 className='lead mt-3'>Get In Touch!</h3>
                            <p>Anytime please contact me. Thank you! (via Co-Op coordinator would be most desirable!)</p>
                            <h3 className='lead mt-3'>Address</h3>
                            <p>80 Antibes Drive, Toronto</p>
                            <h3 className='lead mt-3'>Email</h3>
                            <p>klee214@myseneca.ca</p>
                            <h3 className='lead mt-3'>Phone</h3>
                            <p>647-835-0000</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <FooterBand />
        </div>
    )
}

export default Contact