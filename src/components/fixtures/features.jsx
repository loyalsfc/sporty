import React from 'react'
import { Link } from 'react-router-dom';

function getMainLeague(country_name){
    switch (country_name) {
        case "England":
            return "Premier League";
        case "Spain":
            return "La Liga";
        case "Italy":
            return "Serie A";
        case "Germany":
            return "Bundesliga";
        case "France":
            return "Ligue 1";
        case "Netherland":
            return "Eredivisie";
        default:
            break;
    }
}

function getSecondLeague(country_name){
    switch (country_name) {
        case "England":
            return "Championship";
        case "Spain":
            return "Segunda División";
        case "Italy":
            return "Serie B";
        case "Germany":
            return "2. Bundesliga";
        case "France":
            return "Ligue 2";
        case "Netherland":
            return "Eerste Divisie";
        default:
            break;
    }
}

function MatchFeatures({country_fixtures}) {
    const [country, matches] = Object.entries(country_fixtures)[0]

    function groupByLeague() {
        const groupedData = {
            [getMainLeague(country)]: [],
            [getSecondLeague(country)]: []
        };

        matches.forEach(item => {
          const leagueName = item.league_name;
            if (!groupedData[leagueName]) {
                groupedData[leagueName] = [];
            }
            groupedData[leagueName].push(item);
        });
      
        return groupedData;
    }

    return (
        <div>
            {Object.entries(groupByLeague()).map((item, index) => {
                if(item[1].length === 0) return;
                return (
                    <div key={index} className='league-fixture-wrapper'>
                        <h4 className="league_name_heading">
                            <Link to={""} className='text-white'> {country} </Link> - <Link to={""} className='text-white'>{item[0]}</Link>
                        </h4>
                        <ul>
                            {item[1].map(item => {
                                return (
                                    <li key={item.match_id} className='score-card-wrapper'>
                                        <Link  className='score-card' to={`/matches/${item.match_id}?date=${item.match_date}`}>
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