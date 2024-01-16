import React from 'react'
import DateRange from '../home/date-range'
import Fixtures from '../fixtures'

function LiveMatches() {
    return (
        <main className='main-container'>
            <section className=''>
                <div className='main-content'>
                    <DateRange />
                    <div>
                        <Fixtures isLive={true}/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LiveMatches