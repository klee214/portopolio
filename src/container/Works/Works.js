import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

import Slider from '../../component/Slider/Slider'
import './Works.css'

import book from '../../assets/icon/book.png'
import chat from '../../assets/icon/chat.png'
import link from '../../assets/icon/link.png'
import weather from '../../assets/icon/weather.png'

const Works = props => {
    const [headState, setHeadState] = useState(false);

    useEffect(() => {
        if (!headState) {
            setHeadState(true)
        }
    }, [headState])

    const carouselState = useState({
        url: [
            book,
            chat,
            link,
            weather
        ],
        head:[
            'BooKim',
            'WhosApp',
            'LinkedDev',
            'How is the weather'
        ],
        text:[
            'Are you ready to ENJOY your life? You can either BOOK or HOST a awesome place!',
            'Chat with your friends and have some fun with them! Thanks to socket, you can communicate with other clients simultaneously!',
            'Build your own profile! Upload your photo, post your profile! You can keep in touch with other developers just like likedIn!!',
            'Is is sunny now? Do you wonder what weather is outside your city or anywhere? Find out weather by City!'
        ],
        visit:[
            'https://bookim.herokuapp.com/',
            'https://kimin-weather-app.herokuapp.com/',
            'https://linkeddevv1.herokuapp.com/',
            'https://kimin-weather-app.herokuapp.com/weather'
        ],
        styles: {
            right: 'text-right',
            center: 'text-center',
            left: 'text-left'
        }
    })[0]
    return (
        <div>
            <CSSTransition
                in={headState}
                timeout={800}
                classNames="aalert3"
                unmountOnExit
                onEnter={() => setHeadState(true)}  >
                <div
                    style={{ padding: '0', border: '0px', fontFamily: 'Raleway sans-serif' }}
                    variant="primary"
                    onClose={() => setHeadState(false)}>

                    <Slider information={carouselState} fullSize={true} />

                </div>
            </CSSTransition>
        </div>
    )
}

export default Works