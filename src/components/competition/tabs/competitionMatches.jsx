import React from 'react'
import { Link } from 'react-router-dom';
import FixtureCard from '../../fixtures/fixture-card';

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
                                return (
                                    <li key={item.match_id} className='score-card-wrapper'>
                                        <FixtureCard item={item} />
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