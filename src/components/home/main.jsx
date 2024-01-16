import React, { useState } from 'react'
import './sidebar.css'
import heroImage from '../../assets/images/hero.png'
import Fixtures from '../fixtures';
import DateRange from './date-range';


function Main() {
    return (
        <main className='main-container'>
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
        </main>
    )
}

export default Main