import React, {useEffect, useState} from "react";

const Context = React.createContext() 

function ContextProvider(props){
    const key = '5e3582a7d8d1a741f870124c02aaa88abb97f126b697a05112d549c4302c9c7e'
    const [leagues, setLeagues] = useState([]);
    const [searches, setSearches] = useState('');
    const [leagueId, setLeagueId] =  useState (152);
    const [leaguesSearch, setleaguesSearch] = useState('');
    const [leagueName, setLeagueName] = useState('Premier League');


    useEffect(()=>{
        fetch(`https://apiv3.apifootball.com/?action=get_leagues&country_id=&APIkey=${key}`)
        .then((res, req) => res.json())
        .then(data =>{
            setLeagues(data.filter(data => {
                if(data.country_name.toLowerCase() === "intl" || data.country_name.replaceAll(' ', '') === "Worldcup" || data.league_name.includes('Cup') || data.league_name.includes('Women')) return
                return data
            }))
        })
    },[])

    function getLeagueId(event){
        setLeagueId(event.target.getAttribute("data-league-id"))
        setLeagueName(event.target.getAttribute("data-league-name"))
        setSearches('')
    }

    function handleChange(event){
        setleaguesSearch(event.target.value)
        const searchedResult = leagues.filter(league => league.league_name.toLowerCase().includes(event.target.value.toLowerCase()))
        setSearches(searchedResult.map(result => {
            if(event.target.value !== ""){
                return <div 
                            key={result.league_id} 
                            data-league-id={result.league_id}
                            data-league-name={result.league_name}
                            onClick={getLeagueId}
                        >
                            {result.country_name + " " + result.league_name}
                        </div>
            }
        }))
    }

    return(
        <Context.Provider value={
            {searches, setSearches, setLeagueId, leaguesSearch, setleaguesSearch, key, handleChange, leagueId, leagueName}
        }>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}