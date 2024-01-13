import React from 'react'

const dummystatistics = [
    {
        "type": "Throw In",
        "home": "0",
        "away": "0"
    },
    {
        "type": "Free Kick",
        "home": "0",
        "away": "0"
    },
    {
        "type": "Goal Kick",
        "home": "0",
        "away": "0"
    },
    {
        "type": "Penalty",
        "home": "0",
        "away": "0"
    },
    {
        "type": "Substitution",
        "home": "0",
        "away": "0"
    },
    {
        "type": "Attacks",
        "home": "0",
        "away": "0"
    },
    {
        "type": "Dangerous Attacks",
        "home": "0",
        "away": "0"
    },
    {
        "type": "On Target",
        "home": "0",
        "away": "0"
    },
    {
        "type": "Off Target",
        "home": "0",
        "away": "0"
    }
]

function Stats({stats}) {
    return (
        <div>
            <section className='statistics-wrapper'>
                <h4 className="league_name_heading border-0">Stats</h4>
                {stats.length > 0 ? <ul>
                    {stats.map((item,index) => {
                        if(item.home === "0" && item.away === "0") return;
                        const totalStats = parseInt(item.home) + parseInt(item.away);
                        const value = val => `${(val / totalStats) * 100}%`
                        return(
                            <li key={index} className='statistics-item'>
                                <div className='statistics-details-wrapper'>
                                    <span className='stat-number'>{item.home}</span>
                                    <span className='statistcs-title'>{item.type}</span>
                                    <span className='stat-number'>{item.away}</span>
                                </div>
                                <div className='statistics-bar-wrapper'>
                                    <div className="statistics-bar">
                                        <span className='statistics-bar-percentage ml-auto' style={{width: value(parseInt(item.home))}} />
                                    </div>
                                    <div className="statistics-bar">
                                        <span className='statistics-bar-percentage' style={{width: value(parseInt(item.away))}} />
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>:
                <ul>
                    {dummystatistics.map((item, index) => {
                        return(
                            <li key={index} className='statistics-item'>
                                <div className='statistics-details-wrapper'>
                                    <span className='statistcs-title'>{item.type}</span>
                                </div>
                                <div className='statistics-bar-wrapper'>
                                    <div className="statistics-bar">
                                        <span className='statistics-bar-percentage ml-auto' style={{width: "50%"}} />
                                    </div>
                                    <div className="statistics-bar">
                                        <span className='statistics-bar-percentage' style={{width: "50%"}} />
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                }
            </section>
        </div>
    )
}

export default Stats