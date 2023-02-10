import React, {useEffect, useState, useContext} from "react";
import { Context } from "../Context";
import { useParams } from "react-router-dom"

function Leagues(){
    const {key} = useContext(Context);
    let { countryId } = useParams();
    const [competitions, setCompetitions] = useState([]);

    useEffect(()=>{
        fetch(`https://apiv3.apifootball.com/?action=get_leagues&country_id=${countryId}&APIkey=${key}`)
        .then((res, req) => res.json())
        .then(data => setCompetitions(data))
    }, [countryId, key])

    let compete = competitions.map(items => {
        return(
            <div className="leagues-wrap" key={items.league_id}>
                    <h4 className="leagues-title">{items.league_name}</h4>
                    <img 
                        className="leagues-logo" 
                        src={items.league_logo === "" ? "https://dictionary.cambridge.org/images/thumb/footba_noun_002_14598.jpg?version=5.0.250" : items.league_logo} 
                        height={160} 
                        alt="League Icon"
                    />
                    <div className="league-season">{items.league_season}</div>
            </div>
        )
    })

    return(
        <div className='competitions-wrapper'>
            {competitions.length > 0 ?
            <h3 className="section-title">
                {competitions[0].country_name}
                <img src={competitions[0].country_logo} alt="Country Logo" className="country-logo" />    
            </h3> : ""}
            <div className='competitions-container'>
                {compete}
            </div>
        </div>
    )
}

export default Leagues