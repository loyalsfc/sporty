import React from 'react'

function MatchFeatures({country_fixtures}) {
    const [country, matches] = Object.entries(country_fixtures)[0]

    function groupByLeague() {
        const groupedData = {};

        matches.forEach(item => {
          const leagueName = item.league_name;
            if (!groupedData[leagueName]) {
                groupedData[leagueName] = [];
            }
            groupedData[leagueName].push(item);
        });
      
        return groupedData;
    }

    
    // if(firstKey == 2){
    //     console.log(groupByLeague())
    // }
    return (
        <div>
            {Object.entries(groupByLeague()).map((item, index) => {
                return (
                    <div key={index} className='league-fixture-wrapper'>
                        <h4 className="league_name_heading">{country} {item[0]}</h4>
                        <ul>
                            {item[1].map(item => {
                                return (
                                    <li className='score-card' key={item.match_id}>
                                        {item.match_live === "1" && item.match_status !== "Finished" && item.match_status !== "Half Time" && <div className='live-match' />}
                                        {item.match_status === "Finished" && <span className='match-status'>FT</span>}
                                        {item.match_status === "" && <span className='match-status'>{item.match_time}</span>}
                                        {item.match_status === "Half Time" && <span className='match-status'>HT</span>}
                                        {item.match_status === "Cancelled" && <span className='match-status'>Canc.</span>}
                                        {item.match_status === "Postponed" && <span className='match-status'>Posp.</span>}
                                        {item.match_status === "After Pen." && <span className='match-status'>Pen.</span>}
                                        {item.match_status === "After ET" && <span className='match-status'>AET.</span>}
                                        <span className='match-teams home-team'>{item.match_hometeam_name}</span> 
                                        <span className='match-score'>{item.match_hometeam_score} - {item.match_awayteam_score}</span> 
                                        <span className='match-teams'>{item.match_awayteam_name}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default MatchFeatures