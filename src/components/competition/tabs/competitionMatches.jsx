import React from 'react'
import { Link } from 'react-router-dom';

function MatchFeatures({matches, countryId, country, competitionName}) {
    function groupByDate() {
        const groupedData = {};

        matches.forEach(item => {
          const date = item.match_date;
            if (!groupedData[date]) {
                groupedData[date] = [];
            }
            groupedData[date].push(item);
        });
      
        return groupedData;
    }

    return (
        <div>
            {Object.entries(groupByDate()).map((item, index) => {
                const [date, competitionMatches] = item;
                return (
                    <div key={index} className='league-fixture-wrapper'>
                        <div>
                            <h4 className="league_name_heading">
                                <div>
                                    <Link to={`/${countryId}`} className='text-white'> {country} </Link> 
                                    - 
                                    <Link to={`/${countryId}/${competitionMatches[0].league_id}`} className='text-white'> {competitionName} </Link>
                                </div>
                                <span>{new Date(competitionMatches[0].match_date).toLocaleDateString("en-US", {year: "numeric", month: "short", day: "numeric"})}</span>
                            </h4>
                        </div>
                        <ul>
                            {competitionMatches.map(item => {
                                const {match_status, match_live} = item
                                return (
                                    <li key={item.match_id} className='score-card-wrapper'>
                                        <Link  className='score-card' to={`/${item.country_id}/${item.league_id}/matches/${item.match_id}?date=${item.match_date}`}>
                                            {match_live === "1" && match_status !== "Finished" && match_status !== "Half Time" && match_status !== "After Pen." && <div className='live-match' />}
                                            {match_status === "Finished" && <span className='match-status'>FT</span>}
                                            {match_status === "" && <span className='match-status'>{item.match_time}</span>}
                                            {match_status === "Half Time" && <span className='match-status'>HT</span>}
                                            {match_status === "Cancelled" && <span className='match-status'>Canc.</span>}
                                            {match_status === "Postponed" && <span className='match-status'>Posp.</span>}
                                            {match_status === "After Pen." && <span className='match-status'>Pen.</span>}
                                            {match_status === "After ET" && <span className='match-status'>AET.</span>}
                                            <span className='match-teams home-team'>{item.match_hometeam_name}</span> 
                                            <span className='match-score'>{item.match_hometeam_score} - {item.match_awayteam_score}</span> 
                                            <span className='match-teams'>{item.match_awayteam_name}</span>
                                        </Link>
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