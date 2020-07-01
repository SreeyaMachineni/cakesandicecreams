import React from 'react'
import login from '../images/login.jpg'
import './Img.css'

function Img(){
    return(
        <div className="launchBorder">
            <img src={login} className="launchLogo"/>
        </div>
    )
}

export default Img