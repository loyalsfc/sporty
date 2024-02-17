import React from 'react'
import './sidebar.css'
import heroImage from '../../assets/images/hero.png'
import Fixtures from '../fixtures';
import DateRange from './date-range';


function Main() {
    return (
        <>
            <div>
                <img src={heroImage} className='hero-image'/>
            </div>
            <section className='main-content-container'>
                <div className='main-content'>
                    <DateRange />
                    <div>
                        <Fixtures isLive={false}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main