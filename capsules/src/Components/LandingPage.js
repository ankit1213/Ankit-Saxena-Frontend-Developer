import React from 'react'
import './landingpage.css'

export default function LandingPage(){


    return(
        <>
            <h1 className='head'>SpaceX !!! We Work For The Future.</h1>
            <h3 className='sub-head'>Building a safer place to live.</h3>

            <div className='img-container'><img src={require('./Images/rocket.jpg')} /></div>
        </>
        
    )
}