import React from 'react'

function Info({matchStatus,scorers, cards}) {
    //merge scorers and cards information array
    const matchInfo = scorers.concat(cards).sort((a, b) => a.time - b.time).filter(item => item.score_info_time !== "Penalty");
    const penaltyShootouts = scorers.filter(item => item.score_info_time === "Penalty");
    return (
        <div>
            <ul>
                {matchInfo.map((item, index) => {
                    return(
                        <li key={index} className='match-info-item'>
                            <span className='match-event-item'>{item?.time}'</span>
                            {/* Check if there is no card property iin the object to know whether it is a score event and card event 
                                if there is no card event, render for score otherwise, render for card
                            */}
                            {!item?.card ? <>
                                <p className='match-event-player-name'>
                                    <span>{item?.home_scorer} {item?.home_scorer && item?.info === "Penalty" && "(Pen.)"}</span>
                                    <span className='match-event-assist'>{item?.home_assist}</span>
                                </p>
                                <span className='match-event-score'>{item?.score}</span>
                                <span className='match-event-player-name'>
                                    <span>{item?.away_scorer} {item?.away_scorer && item?.info === "Penalty" && "(Pen)"}</span>
                                    <span className='match-event-assist'>{item?.away_assist}</span>
                                </span>
                            </>:<>
                                <span className='match-event-player-name'>
                                    <span className='player-with-card'>
                                        {item?.home_fault}
                                        {(item?.info === "home" || item.home_fault) && <svg height={15} width={10} viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg"> 
                                            <rect x="10" y="10" width="80" height="130" fill={item.card === "yellow card" ? "#FFFF00" : "#FF0000"} />
                                        </svg>}
                                    </span>
                                </span>
                                <span className='match-event-score'></span>
                                <span className='match-event-player-name'>
                                    <span className='player-with-card flex-start'>
                                        {(item?.info === "away" || item.away_fault) && <svg height={15} width={10} viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg"> 
                                            <rect x="10" y="10" width="80" height="130" fill={item.card === "yellow card" ? "#FFFF00" : "#FF0000"} />
                                        </svg>}
                                        {item?.away_fault}
                                    </span>
                                </span>
                            </>
                            }
                        </li>
                    )
                })}
            </ul>

            {penaltyShootouts.length > 0 && <div style={{paddingTop: "1rem"}}>
                    <h4 className="league_name_heading">Penalty Shootout</h4>
                    <ul>
                        {penaltyShootouts.map((item, index) => {
                            return(
                                <li key={index} className='match-info-item'>
                                    <span className='match-event-player-name'>{item?.home_scorer}</span>
                                    <span className='match-event-score'>{item?.score}</span>
                                    <span className='match-event-player-name'>{item?.away_scorer}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
        </div>
    )
}

export default Info