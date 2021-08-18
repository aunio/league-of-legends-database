import React from 'react'
import './Loader.css'

import loaderImg from '../../assets/img/loader.webp'

const Loader = () => {
    return (
        <div className="loader">
            <div>
                <img
                    src={loaderImg}
                    alt="loader" />
            </div>
        </div>
    )
}

export default Loader;