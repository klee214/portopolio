import React, {forwardRef} from 'react'

import classes from './FooterBand.module.css'

const FooterBand = forwardRef((props, ref) => {

    const date = new Date().getFullYear();

    return (
        <footer ref={ref} id="main-footer" className={classes.Footer + " text-center p-4" }>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>Copyright &copy;
                        <span id="year">{date}</span> Kimin Lee</p>
                    </div>
                </div>
            </div>
        </footer>
    )
})

export default FooterBand