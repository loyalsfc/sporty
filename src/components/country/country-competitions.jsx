import React from 'react'
import DateRange from '../home/date-range'
import Fixtures from '../fixtures'
import { useParams } from 'react-router-dom';

function CountryCompetitions() {
    let { countryId } = useParams();

    return (
        <main className='main-container'>
            <section className=''>
                <div className='main-content'>
                    <div>
                        <Fixtures isLive={false} countryId={countryId}/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CountryCompetitions