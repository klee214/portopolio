import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'



const Progressbar = props => {

    return (
        <div>
            <p className='text-info mt-4'>{props.title}</p>
            <ProgressBar animated now={props.now} label={`${props.now}%`} />
        </div>
    )
}

export default Progressbar