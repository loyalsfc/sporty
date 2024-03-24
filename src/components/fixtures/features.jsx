import React from 'react'
import { Link } from 'react-router-dom';
import { queryEndpoint } from '../../utls/utils';
import { useQuery } from '@tanstack/react-query';
import FixtureCard from './fixture-card';

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
    const {isPending, isError, data, error} = useQuery({ 
        queryKey: ['countries', "action=get_countries"], 
        queryFn: ()=> queryEndpoint("action=get_countries") 
    })
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
                const [competitionName, competitionMatches] = item;
                if(competitionMatches.length === 0 || competitionName.includes("Non League")) return;
                const countryId = data.find(item => item.country_name === country)?.country_id;
                const matchDate = new Date(competitionMatches[0].match_date);
                return (
                    <div key={index} className='league-fixture-wrapper'>
                        <div>
                            <h4 className="league_name_heading">
                                <div className='league-name-country'>
                                    <Link 
                                        to={`/${countryId}`} 
                                        className='text-white league-country-name'
                                    > 
                                        {country} 
                                    </Link> 
                                    <span className='name-separator'>-</span>
                                    <Link 
                                        to={`/${countryId}/${competitionMatches[0].league_id}`} 
                                        className='text-white'
                                    > 
                                        {competitionName} 
                                    </Link>
                                </div>
                                <span>
                                    {matchDate.toLocaleDateString("en-US", {year: "numeric"}) === new Date().getFullYear ? matchDate.toLocaleDateString("en-US", {month: "short", day: "numeric"}) : matchDate.toLocaleDateString("en-US", {year: "numeric", month: "short", day: "numeric"})}
                                </span>
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