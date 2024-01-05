import React, {useEffect, useState} from "react";

const Context = React.createContext() 

function ContextProvider(props){
    const key = process.env.REACT_APP_API_KEY
    const [leagues, setLeagues] = useState([]);
    const [leagueId, setLeagueId] =  useState (152);


    useEffect(()=>{
        fetch(`https://apiv3.apifootball.com/?action=get_leagues&country_id=&APIkey=${key}`)
        .then((res, req) => res.json())
        .then(data =>{
            setLeagues(data.filter(data => {
                if(data.country_name.toLowerCase() === "intl" || data.country_name.replaceAll(' ', '') === "Worldcup" || data.league_name.includes('Cup') || data.league_name.includes('Women') || data.league_name.includes('Co')|| data.league_name.includes('Supercopa')) return
                return data
            }))
        })
    },[])

    return(
        <Context.Provider value={
            { key, leagues, leagueId, setLeagueId}
        }>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}